import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Page/Home";
import Travel from "./Page/Travel";
import Destinations from "./Page/Destinations";
import Contact from "./Page/Contact";
import {AuthContextProvider} from "./Context/AuthContext";
import SignIn from "./Components/Authentication/Signin";
import SignUp from "./Components/Authentication/Signup";
import Account from "./Components/Authentication/Account";

function App() {
  return (
    <div className="App">
        <AuthContextProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<Header/>}>
                        <Route index element={<Home/>}/>
                        <Route path='/destination' element={<Destinations/>}/>
                        <Route path='/travel' element={<Travel />}/>
                        <Route path='/contact' element={<Contact />}/>
                        <Route path='/singin' element={<SignIn/>}/>
                        <Route path='/signup' element={<SignUp/>}/>
                        <Route path='/account' element={<Account/>}/>
                    </Route>
                </Routes>
            </Router>
        </AuthContextProvider>
    </div>
  );
}

export default App;
