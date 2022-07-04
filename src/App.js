import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Page/Home";
import Travel from "./Page/Travel";
import Destinations from "./Page/Destinations";
import Contact from "./Page/Contact";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<Header/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/destination' element={<Destinations/>}/>
                    <Route path='/travel' element={<Travel />}/>
                    <Route path='/contact' element={<Contact />}/>
                </Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
