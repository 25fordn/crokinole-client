import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './styles/index.css'

import Home from './pages/Home.jsx'
import LiveFeed from "./pages/LiveFeed.jsx";
import CalibrateCamera from "./pages/CalibrateCamera.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/live-feed" element={<LiveFeed/>}/>
                <Route path='/calibrate'>
                    <Route path='camera/:cameraName' element={<CalibrateCamera/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
