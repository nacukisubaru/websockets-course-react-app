import React from "react";
import '../styles/toolbar.scss';
import {observer} from "mobx-react-lite";

const ToolBar = observer(()=> {
    return (
        <div className="toolbar">
            <button className="toolbar-btn brush"></button>
            <button className="toolbar-btn rect"></button>
            <button className="toolbar-btn circle"></button>
            <button className="toolbar-btn eraser"></button>
            <button className="toolbar-btn line"></button>
            <input style={{marginLeft:'5px'}} type="color"></input>
            <button className="toolbar-btn undo"></button>
            <button className="toolbar-btn redo"></button>
            <button className="toolbar-btn save"></button>
        </div>
    )
})

export default ToolBar;