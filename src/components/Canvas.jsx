import React, { useEffect, useRef } from "react";
import "../styles/canvas.scss";
import {observer} from "mobx-react-lite";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import { Modal } from "react-bootstrap";
import modalState from "../store/modalState";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

/*отслеживание компонента oberserver ом*/
const Canvas = observer(()=> {
    const canvasRef = useRef();
    const usernameRef = useRef();
    const getParams = useParams();

    useEffect(()=>{
        /*изменение состояния через написанный state*/
        canvasState.setCanvas(canvasRef.current);
    }, []);

    useEffect(()=>{
        if(canvasState.username) {
            const socket = new WebSocket(`ws://localhost:5000/`);
            canvasState.setSocket(socket);
            canvasState.setSessionId(getParams.id);
            //toolState.setTool(new Brush(canvasRef.current, socket, getParams.id));
            socket.onopen = () => {
                socket.send(JSON.stringify({
                    id:getParams.id,
                    username: canvasState.username,
                    method: "connection"
                }));
            }
            //принимаем сообщение от сервера
            socket.onmessage = (event) => {
                let msg = JSON.parse(event.data);
                switch(msg.method) {
                    case "connection":
                        console.log(`пользователь ${msg.username} присоединился`);
                        break;
                    case "draw":
                        drawHandler(msg);
                        break;
                }
                console.log(msg);
            }
        }
    }, [canvasState.username]);

    const mouseDownHandler = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL());
    }

    const connectHandler = () => {
       canvasState.setUserName(usernameRef.current.value);
       if(usernameRef.current.value) modalState.closeModal();
    }

    const drawHandler = (msg) => {
        const figure = msg.figure;
        const ctx = canvasRef.current.getContext('2d');
        switch (figure.type) {
            case "brush":
                Brush.draw(ctx, figure.x, figure.y);
                break;
            case "finish":
                ctx.beginPath();
                break;
        }
    }

    return (
        <div className="canvas">
            <Modal show={modalState.modal} onHide={() => {modalState.closeModal()}}>
                <Modal.Header >
                    <Modal.Title>Введите ваше имя</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" ref={usernameRef}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={connectHandler}>
                        Войти
                    </Button>
                </Modal.Footer>
            </Modal>
            <canvas onMouseDown={() => mouseDownHandler()} ref={canvasRef} width={600} height={400}></canvas>
        </div>
    )
});

export default Canvas;