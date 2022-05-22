import logo from "./logo.svg";
import "./App.css";
import "./styles/app.scss";
import ToolBar from "./components/Toolbar";
import SettingBar from "./components/SettingBar";
import Canvas from "./components/Canvas";

function App() {
    return (
        <div className="app">
            <ToolBar></ToolBar>
            <SettingBar></SettingBar>
            <Canvas></Canvas>
        </div>
    );
}

export default App;
