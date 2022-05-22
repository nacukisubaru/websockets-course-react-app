import React from "react";
import '../styles/toolbar.scss';
import {observer} from "mobx-react-lite";
import toolState from "../store/toolState";
import canvasState from "../store/canvasState";
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";

const changeColor = e => {
    toolState.setStrokeColor(e.target.value);
    toolState.setFillColor(e.target.value);
}

const ToolBar = observer(()=> {
    return (
        <div className="toolbar">
            <button className="toolbar-btn brush" onClick={() => toolState.setTool(new Brush(canvasState.canvas))}></button>
            <button className="toolbar-btn rect" onClick={() => toolState.setTool(new Rect(canvasState.canvas))}></button>
            <button className="toolbar-btn circle"></button>
            <button className="toolbar-btn eraser"></button>
            <button className="toolbar-btn line"></button>
            <input onChange={e => changeColor(e)} style={{marginLeft:'5px'}} type="color"></input>
            <button className="toolbar-btn undo"></button>
            <button className="toolbar-btn redo"></button>
            <button className="toolbar-btn save"></button>
        </div>
    )
})

export default ToolBar;