import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home.jsx'
import './styles/index.css'

import LiveFeed from "./pages/LiveFeed.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/live-feed" element={<LiveFeed/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
