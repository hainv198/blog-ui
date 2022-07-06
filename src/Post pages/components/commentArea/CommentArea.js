import React, {useEffect, useState} from 'react';
import styles from './styles.css'
import {Spinner} from "react-bootstrap";
const CommentArea = () => {
    const [comment, setComment] = useState([]);
    useEffect(()=> {
        let url = 'https://62bd6dd4c5ad14c110be7072.mockapi.io/comments';
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setComment(data)
                console.log(data)
                console.log(data.post_title);
            })
    }, []);
    let commentFilter = [];
    commentFilter = comment.filter((item) => item === "10 Awesome Things to Do on Phu Quoc Island, Vietnam")
    let comment_jsx = [];
    if (commentFilter !=null) {
        comment_jsx = commentFilter.map((item) => {
            return (
                <div className="comment-box">
                    <div className="comment-user">
                        <strong>{item.username}<span>.</span>{item.createAt}</strong>
                    </div>
                </div>

            )
        })
    }

    return (
    <>
        {comment_jsx}
    </>
    );
};

export default CommentArea;