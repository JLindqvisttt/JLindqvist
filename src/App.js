import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import HomePage from './Pages/HomePage';

function App() {
    return (

        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" component="HomePage"/>
            </Routes>
        </Router>
    );
}

export default App;
