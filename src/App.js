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
import Egypt from "./Categories/Egypt";
import France from "./Categories/France";
import Vietnam from "./Categories/Vietnam";
import Columbia from "./Categories/columbia";
import Turkey from "./Categories/turkey";
import Asia from "./Categories/asia";
import Europe from "./Categories/europe";
import Africa from "./Categories/africa";
import Costarica from "./Categories/Costa";
import NoPage from "./Page/NoPage";
import './Style/dark.scss.css'
import {useState} from "react";
import Post from "./Admin/Page/Post/index";
function App() {
    const [dark, setDark] = useState(false)
  return (
    <div className={dark ? 'app dark' : 'app'}>
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
                            <Route path='costarica' element={<Costarica/>}/>
                            <Route path='egypt' element={<Egypt/>}/>
                            <Route path='france' element={<France/>}/>
                            <Route path='vietnam' element={<Vietnam/>}/>
                            <Route path='colombia' element={<Columbia/>}/>
                            <Route path='turkey' element={<Turkey/>}/>
                            <Route path='asia' element={<Asia />}/>
                            <Route path='europe' element={<Europe />}/>
                            <Route path='africa' element={<Africa />}/>
                        </Route>
                        <Route path='/admin' element={<Admin setDarkss={setDark}/>}>
                            <Route path='home' index element={<HomeAdmin/>}/>
                            <Route path='users'>
                                <Route index element={<List/>}/>
                                <Route path='users/:id' element={<Single/>}/>
                                <Route path='usersedit/:id' element={<New/>}/>
                            </Route>
                            <Route path='products'>
                                <Route index element={<Post/>}/>
                                <Route path=':productId' element={<Single/>}/>
                                <Route path='new' element={<New/>}/>
                            </Route>
                        </Route>
                        {/*<Route path='/' element={<NoPage/>}/>*/}
                        <Route path={"*"} element={<NoPage/>}/>
                    </Route>
                </Routes>

            </Router>
        </AuthContextProvider>
    </div>
  );
}

export default App;
