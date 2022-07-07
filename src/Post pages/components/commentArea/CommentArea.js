import React, {useEffect, useState} from 'react';
import styles from './styles.css'
import {Spinner} from "react-bootstrap";
const CommentArea = (props) => {
    const [comment, setComment] = useState([]);
    console.log(props.data)
    useEffect(()=> {
        let url = 'https://62bd6dd4c5ad14c110be7072.mockapi.io/comments';
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setComment(data)
            })
    }, []);
    let commentFilter = [];
    if(comment != null ?
    commentFilter = comment.filter(item => item.post_title.includes("15")).map((item)=>(
        <>
            <h1>TESTING</h1>
            <h1>{item.post_title}</h1>
        </>
    )):(""))
    // let comment_jsx = [];
    // if (commentFilter !=null) {
    //     comment_jsx = commentFilter.map((item) => {
    //         return (
    //             <div className="comment-box">
    //                 <div className="comment-user">
    //                     <strong>{item.username}<span>.</span>{item.createAt}</strong>
    //                 </div>
    //             </div>
    //
    //         )
    //     })
    // }

    return (
    <>
        {/*{comment_jsx}*/}
        {commentFilter}
    </>
    );
};

export default CommentArea;