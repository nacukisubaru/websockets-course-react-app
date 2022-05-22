import React, { useEffect, useRef } from "react";
import "../styles/canvas.scss";
import {observer} from "mobx-react-lite";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";

/*отслеживание компонента oberserver ом*/
const Canvas = observer(()=> {
    const canvasRef = useRef();

    useEffect(()=>{
        /*изменение состояния через написанный state*/
        canvasState.setCanvas(canvasRef.current);
    }, []);

    const mouseDownHandler = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL());
    }

    return (
        <div className="canvas">
            <canvas onMouseDown={() => mouseDownHandler()} ref={canvasRef} width={600} height={400}></canvas>
        </div>
    )
});

export default Canvas;