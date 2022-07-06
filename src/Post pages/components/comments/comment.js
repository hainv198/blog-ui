import React, {useEffect, useRef, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import styles from './styles.css'
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Comment = (props) => {
    const [dataCmt, setDataCmt] = useState(null);
    let emailRef = useRef();
    let nameRef = useRef();
    let contentRef = useRef();
    const notify = () => {
        toast.success('Comment posted!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    useEffect(() => {
        let initDataCmt = {};
        setDataCmt(initDataCmt);

        let url = '';
    },[]);

    const handleChange = (e) =>
    {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        console.log(name);
        let _data = {...dataCmt};
        _data[name] = value;

        setDataCmt(_data)
    };

    const saveComment = (e) => {
        console.log('save comment', dataCmt);
        if (emailRef.current.value == '' || nameRef.current.value == '' || contentRef.current.value == '') {
            e.preventDefault();
            alert("Please complete information!");
        } else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataCmt),
            };
            fetch(
                'https://62bd6dd4c5ad14c110be7072.mockapi.io/comments',
                requestOptions
            )
                .then((response) => response.json())
                .then((data) => {
                    //var date = new Date(data.dob);
                    const date = new Date();
                    data.post_title = props.title;
                    data.createAt = date.getDate();
                    //data.dob = date.getTime();
                });
            emailRef.current.value = '';
            nameRef.current.value = '';
            contentRef.current.value = '';
            notify();
        }

    };


    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="note">Write a comment</label>
                    <p>Your email address will not be published. Required fields are marked*.</p>
                    <label htmlFor="inputName">Name<span>*</span></label>
                    <input ref={nameRef} onChange={handleChange} type="text" className="form-control" id="inputName" name="username" required={true}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail">Email<span>*</span></label>
                    <input ref={emailRef} onChange={handleChange}  type="email" className="form-control" id="inputEmail" name="email" required={true}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputCommentContent">Comment<span>*</span></label>
                    <textarea  ref={contentRef}  onChange={handleChange}  className="form-control" id="inputCommentContent" name="content" rows="3" required={true}></textarea>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="notify_me"/>
                    <label className="form-check-label" htmlFor="notify_me">Notify me when new comments are loaded</label>
                </div>
                <button type="button" className="send-btn" onClick={saveComment}>Submit</button>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );

};

export default Comment;