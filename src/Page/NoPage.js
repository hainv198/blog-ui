import React from 'react';
import {Link} from "react-router-dom";

// export const Text404 = styled.h1`
// `
const NoPage = () => {
    return (
        <>
        {/*<div className="content">*/}
        {/*    <h1>404</h1>*/}
        {/*    <h1>404</h1>*/}
        {/*</div>*/}
        {/*<div className="msg">*/}
        {/*    <h1>OPPS!</h1>*/}
        {/*    <h3>Something went wrong. Please try again later</h3><br/><br/>*/}
        {/*    <a href="../../index.html">HOME PAGE</a>*/}
        {/*</div>*/}

            <div className="page-wrap d-flex flex-row align-items-center" style={{minHeight: "100vh"}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <span className="display-1 d-block" style={{fontSize: "15rem"}}>404</span>
                            <div className="mb-4 lead" style={{fontSize: "4rem"}}>The page you are looking for was not found.</div>
                            <Link to={'/'} className="btn btn-link" style={{fontSize: "2rem"}}>Back to Home</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
)
    ;
};

export default NoPage;