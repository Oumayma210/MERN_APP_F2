import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigationbar from "./Components/Navigationbar";
import Add from "./Pages/Add";
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";

function App() {
    return (
        <div className="App">
            <Navigationbar />

            <Routes>
                <Route path="/add" element={<Add />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
