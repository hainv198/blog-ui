import './Single.scss'
import Sidebar from "../../Components/Sidebar";
import Chart from '../../Components/Chart'
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {Link} from 'react-router-dom'
import List from "../../Components/Table";
const Single = () => {

    const params = useParams();
    const [student, setStudent] = useState(null);
    useEffect(() => {
        console.log('user use effect!!');

        let url =
            'https://62b297ff20cad3685c902f74.mockapi.io/web/' + params.id;

        console.log(url);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                data.dob = new Date(data.dob);
                console.log('dob', data.dob);
                console.log('data', data);
                setStudent(data); //setStudents(data)
            });
    }, []);

    return (
        <div className="single">
            <Sidebar />
            {student !== null ? (
                <div className="singleContainer">
                    <div className="top">
                        <div className="left">
                            <div className="editButton">
                                <Link to={`/admin/users/usersedit/${params.id}`}>
                                    Edit
                                </Link>
                                </div>
                            <h1 className="title">Information</h1>
                            <div className="item">
                                <img
                                    src={student.avatar}
                                    alt=""
                                    className="itemImg"
                                />
                                <div className="details">
                                    <h1 className="itemTitle">{student.nickname}</h1>
                                    <div className="detailItem">
                                        <span className="itemKey">Email:</span>
                                        <span className="itemValue">{student.email}</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Phone:</span>
                                        <span className="itemValue">{student.phone}</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Address:</span>
                                        <span className="itemValue">
                                        {student.home.address}<br/>
                                    </span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Date Of Birth: </span>
                                        <span className="itemValue">{(student.created_at).slice(0, 10)}</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Gender: </span>
                                        {student.status === true && (
                                            <span className="itemValue">Female</span>
                                        )}
                                        {student.status === false && (
                                            <span className="itemValue">Male</span>
                                        )}
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Country:</span>
                                        <span className="itemValue">{student.home.country}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
                        </div>
                    </div>
                    <div className="bottom">
                        <h1 className="title">Last Transactions</h1>
                        <List/>
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <div className="spinner-grow" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Single;