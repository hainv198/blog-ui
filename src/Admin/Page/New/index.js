import "./New.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import {useEffect, useState} from "react";
import Sidebar from "../../Components/Sidebar";
import {useParams} from "react-router";
import {Link} from 'react-router-dom'
import {useNavigate} from "react-router-dom";

const New = () => {
    const [files, setFiles] = useState("");
    const params = useParams();
    const [users, setUsers] = useState(null);
    const [countries, setCountries] = useState(null);
    let navigate = useNavigate();
    useEffect(() => {
        if (params.id !== 'new') {
            let student_url =
                'https://62b297ff20cad3685c902f74.mockapi.io/web/' + params.id;
            console.log(student_url);
            fetch(student_url)
                .then((response) => response.json())
                .then((data) => {
                    setUsers(data);
                });
        } else {
            let initData = {};
            initData.home = {};
            setUsers(initData);
        }
        let country_url =
            'https://60efed10f587af00179d3b82.mockapi.io/api/countries/';

        console.log(country_url);
        fetch(country_url)
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);
            });
    }, []);
    // Up load image

    function handleChangeFile(event) {
        setFiles(event.target.files[0]);
    }
    // end

    const handleChange = (event) => {
        console.log(event);
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let data = { ...users };
        data[name] = value;
        setUsers(data);
    };

    const handleChangeHome = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(name);
        console.log(value);
        let data = { ...users };
        data.home[name] = value;

        console.log(data);
        setUsers(data);
    };

    const saveUser = () => {
        let method = 'POST';
        let id = '';
        if (users.id) {
            method = 'PUT';
            id = users.id;
        }

        const requestOptions = {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(users),
        };
        fetch(
            'https://62b297ff20cad3685c902f74.mockapi.io/web/' + id,
            requestOptions
        )
            .then((response) => response.json())
            .then((data) => {

                console.log(data);
                navigate(-1);
            });
    };

    return (
        <div className="new">
            <Sidebar />
            {users !== null ? (
                <div className="newContainer">
                    <div className="top">
                        <h1>Add New User</h1>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <img
                                src={
                                    files
                                        ? URL.createObjectURL(files)
                                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                }
                                alt=""
                            />
                        </div>
                        <div className="right">
                            <form>
                                <div className="formInput">
                                    <label htmlFor="file">
                                        Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                    </label>
                                    <input
                                        accept="image/*"
                                        type="file"
                                        id="file"
                                        onChange={handleChangeFile}
                                        style={{ display: "none" }}
                                    />
                                </div>

                                <div className="formInput">
                                    <label>User Name</label>
                                    <input
                                        type="text"
                                        value={users.nickname}
                                        name="nickname"
                                        onChange={(e) => handleChange(e)}
                                    ></input>
                                </div>
                                <div className="formInput">
                                    <label>Name and Sub name</label>
                                    <input
                                        type="text"
                                        value={users.firstName}
                                        name="firstName"
                                        onChange={(e) => handleChange(e)}
                                    ></input>
                                </div>
                                <div className="formInput">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        value={users.email}
                                        name="email"
                                        onChange={(e) => handleChange(e)}
                                    ></input>
                                </div>
                                <div className="formInput">
                                    <label>Phone</label>
                                    <input
                                        type="text"
                                        value={users.phone}
                                        name="phone"
                                        onChange={(e) => handleChange(e)}
                                    ></input>
                                </div>
                                <div className="formInput">
                                    <label>Date of birthday</label>
                                    <input
                                        name='created_at'
                                        value={users.created_at}
                                        type='text'
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Address</label>
                                    <input
                                        type="text"
                                        value={users.home.address}
                                        name="address"
                                        onChange={(e) => handleChangeHome(e)}
                                    ></input>
                                </div>
                                <div className="formInput">
                                    <label>Country</label>
                                    <input
                                        type="text"
                                        value={users.home.country}
                                        name="country"
                                        onChange={(e) => handleChangeHome(e)}
                                    ></input>
                                </div>

                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => saveUser()}
                                    >
                                        Save
                                    </button>
                                    <span> </span>
                                    <Link to="/admin/users">
                                        <button type="button" className="btn btn-secondary">
                                            Cancel
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            ): (
                <div className="text-center">
                    <button className="btn btn-primary" type="button" disabled>
                    <span
                        className="spinner-grow spinner-grow-sm"
                        role="status"
                        aria-hidden="true"
                    ></span>
                        Loading...
                    </button>
                </div>
            )}

        </div>
    );
};

export default New;