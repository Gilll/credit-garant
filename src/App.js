import React from 'react';
import "./styles/scss/style.scss";
import 'antd/dist/antd.min.css';
import MainMenu from "./components/MainMenu";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Intro from "./pages/Intro";
import Calc from "./pages/Calc";
import Requests from "./pages/Requests";
import Services from "./pages/Services";
import Learning from "./pages/Learning";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <MainMenu/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Intro/>}/>
                    <Route path="/calc" element={<Calc/>}/>
                    <Route path="/requests" element={<Requests/>}/>
                    <Route path="/learning" element={<Learning/>}/>
                    <Route path="/services" element={<Services/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
