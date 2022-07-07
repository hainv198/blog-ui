import React from 'react';
export const Text404 = styled.h1`
`
const NoPage = () => {
    return (
       <>
           <div className="content">
               <h1>404</h1>
               <h1>404</h1>
           </div>
           <div className="msg">
               <h1>OPPS!</h1>
               <h3>Something went wrong. Please try again later</h3><br/><br/>
               <a href="../../index.html">HOME PAGE</a>
           </div>
       </>
    );
};

export default NoPage;