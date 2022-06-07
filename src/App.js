import "./App.css";
import "./styles/app.scss";
import ToolBar from "./components/Toolbar";
import SettingBar from "./components/SettingBar";
import Canvas from "./components/Canvas";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route
                        path="/:id"
                        element={
                            <>
                                <ToolBar />
                                <SettingBar />
                                <Canvas />
                            </>
                        }
                    ></Route>
                    <Route path="/" element={
                        <Navigate to={`f${(+new Date).toString(16)}`} />
                    }></Route>
                </Routes>
                
            </div>
        </BrowserRouter>
    );
}

export default App;
