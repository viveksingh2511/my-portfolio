import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Home from "./Home"
import Contect from "./Contect"
import Service from "./Service"
import About from "./About";
import { BrowserRouter, Route,Routes } from "react-router-dom";



function App() {
    return (
        <>
        <Navbar/>
           <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/about" Component={About} />
                    <Route path="/contect" Component={Contect} />
                    <Route path="/service" Component={Service} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default App;