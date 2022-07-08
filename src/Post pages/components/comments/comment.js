import React, {useEffect, useRef, useState} from 'react';
import "./styles.css"
import {Button, Col, Row} from "react-bootstrap";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Container from "react-bootstrap/Container";


const Comment = (props) => {
    const [dataCmt, setDataCmt] = useState(null);
    const [showCmt, setShowCmt] = useState(null);

//?post_id= + props.data
    useEffect(() => {
        let url = "https://62bd6dd4c5ad14c110be7072.mockapi.io/comments?post_id="+props.data;
        // let url = 'https://62bd6dd4c5ad14c110be7072.mockapi.io/comments';
        fetch(url)
            .then(response => response.json())
            .then(data => setShowCmt(data))
    }, [showCmt])
    let cmtList = [];
    // let testCmt = [];
    // if (showCmt != null ? (
    //     testCmt = showCmt.filter(item => item.username.includes("Mckenzie48")).map((item) => (
    //         <>
    //             <h1>{item.username}</h1>
    //             <h2>{item.content}</h2>
    //         </>
    //     ))
    // ) : ("")) ;
    if (showCmt != null ? (
        cmtList = showCmt.slice(0).reverse().map((item) => (
            <>
                <Row style={{backgroundColor: "#f9f9f9", marginTop: "1rem", borderRadius: "10px"}}>
                    <div>
                        <h3>{item.username}</h3> <span
                        style={{fontSize: "1.3rem"}}> {new Date(item.createdAt).toDateString()}</span>
                    </div>
                    <p>{item.content}
                        <br/><br/><Button variant={'outline-secondary'} className={"rounded-pill"}><i
                            className="bi bi-arrow-90deg-up"></i> Reply</Button>
                    </p>
                </Row>
            </>
        ))
    ) : ("")) ;
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
    }, []);

    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        const date = new Date();
        const postId = props.data;
        let _data = {...dataCmt};
        _data[name] = value;
        _data.createdAt = date;
        _data.post_id = postId;

        setDataCmt(_data)
    };
    // const setTitle = () =>{
    //     const cmtTitle = props;
    //     let _data = {...dataCmt};
    //     _data.post_title = cmtTitle;
    //     setDataCmt(_data);
    // }
    const saveComment = (e) => {
        console.log('save comment', dataCmt);
        if (emailRef.current.value == '' || nameRef.current.value == '' || contentRef.current.value == '') {
            e.preventDefault();
            alert("Please complete information!");
        } else {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
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
                    // data.post_title = cmtTitle;
                    data.createAt = date.getDate();
                    //data.dob = date.getTime();
                });
            emailRef.current.value = '';
            nameRef.current.value = '';
            contentRef.current.value = '';
            notify();
        }

    };
    const date = new Date();
    return (
        <>
            <Container>
                <Row>
                    <Col md={6} className={'me-auto ms-auto mt-3'}>
                        <div className={'comment-container'}>
                            {/*{testCmt}*/}
                            {cmtList}
                        </div>
                    </Col>

                    <Col md={6}>
                        <form className={'ms-auto me-auto comment-form '}>
                            <div className="form-group">
                                <label className={'comment-label'} htmlFor="note">Write a comment</label>
                                <p style={{fontSize: "1.3rem"}} className={'text-muted'}>Your email address will not be
                                    published.
                                    Required fields are marked*.</p>
                                <label className={'comment-label'} htmlFor="inputName">Name<span>*</span></label>
                                <input ref={nameRef} onChange={handleChange} type="text" className="form-control comment-input"
                                       id="inputName"
                                       name="username" required={true}/>
                            </div>
                            <div className="form-group">
                                <label className={'comment-label'} htmlFor="inputEmail">Email<span>*</span></label>
                                <input ref={emailRef} onChange={handleChange} type="email" className="form-control comment-input"
                                       id="inputEmail"
                                       name="email" required={true}/>
                            </div>
                            <div className="form-group">
                                <label className={'comment-label'}
                                       htmlFor="inputCommentContent">Comment<span>*</span></label>
                                <textarea ref={contentRef} onChange={handleChange} className="form-control"
                                          id="inputCommentContent"
                                          name="content" rows="15" cols='6' required={true}></textarea>
                            </div>
                            <div className="form-check mt-4">
                                <input type="checkbox" className="form-check-input" id="notify_me"/>
                                <label className="form-check-label" style={{fontWeight: "bold"}} htmlFor="notify_me">Notify
                                    me when
                                    new comments are loaded</label>
                            </div>
                            <button type="button" className="send-btn comment-button" onClick={saveComment}>Send
                                Comment
                            </button>
                        </form>
                    </Col>
                </Row>
            </Container>
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