import React from "react";
import '../styles/toolbar.scss';
import {observer} from "mobx-react-lite";
import toolState from "../store/toolState";
import canvasState from "../store/canvasState";
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";
import Eraser from "../tools/Eraser";
import { useParams } from "react-router-dom";

const changeColor = e => {
    toolState.setStrokeColor(e.target.value);
    toolState.setFillColor(e.target.value);
}

const ToolBar = observer(()=> {
    const getParams = useParams();
    return (
        <div className="toolbar">
            <button className="toolbar-btn brush" onClick={() => toolState.setTool(new Brush(canvasState.canvas, canvasState.socket, getParams.id))}></button>
            <button className="toolbar-btn rect" onClick={() => toolState.setTool(new Rect(canvasState.canvas))}></button>
            <button className="toolbar-btn circle"></button>
            <button className="toolbar-btn eraser" onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}></button>
            <button className="toolbar-btn line"></button>
            <input onChange={e => changeColor(e)} style={{marginLeft:'5px'}} type="color"></input>
            <button className="toolbar-btn undo" onClick={() => canvasState.undo()}></button>
            <button className="toolbar-btn redo" onClick={() => canvasState.redo()}></button>
            <button className="toolbar-btn save"></button>
        </div>
    )
})

export default ToolBar;