import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Page/Home";
import Travel from "./Page/Travel";
import Destinations from "./Page/Destinations";
import Aboutus from "./Page/Aboutus";
import {AuthContextProvider} from "./Context/AuthContext";
import SignIn from "./Components/Authentication/Signin";
import SignUp from "./Components/Authentication/Signup";
import TemplatePage from "./Post pages/TemplatePage";
import Admin from "./Admin/Layout";
import HomeAdmin from "./Admin/Page/Home";
import List from "./Admin/Page/List";
import New from "./Admin/Page/New";
import Single from "./Admin/Page/Single";
import Costa from "./Categories/Costa";
import Egypt from "./Categories/Egypt";
import France from "./Categories/France";
import Vietnam from "./Categories/Vietnam";
import Columbia from "./Categories/columbia";
import Turkey from "./Categories/turkey";


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
                        <Route path='/about' element={<Aboutus />}/>
                        <Route path='/singin' element={<SignIn/>}/>
                        <Route path='/signup' element={<SignUp/>}/>
                        <Route path='page/:id' element={<TemplatePage/>}/>
                        <Route path='/categories/'>
                            <Route path='costa' element={<Costa/>}/>
                            <Route path='egypt' element={<Egypt/>}/>
                            <Route path='france' element={<France/>}/>
                            <Route path='vietnam' element={<Vietnam/>}/>
                            <Route path='columbia' element={<Columbia/>}/>
                            <Route path='turkey' element={<Turkey/>}/>
                        </Route>
                    </Route>

                </Routes>
                <Routes>
                    <Route path='/admin' element={<Admin/>}>
                        <Route path='home' index element={<HomeAdmin/>}/>
                        <Route path='users'>
                            <Route index element={<List/>}/>
                            <Route path='users/:id' element={<Single/>}/>
                            <Route path='usersedit/:id' element={<New/>}/>
                        </Route>
                        <Route path='products'>
                            <Route index element={<Single/>}/>
                            <Route path=':productId' element={<Single/>}/>
                            <Route path='new' element={<New/>}/>
                        </Route>
                    </Route>

                </Routes>
            </Router>
        </AuthContextProvider>
    </div>
  );
}

export default App;
