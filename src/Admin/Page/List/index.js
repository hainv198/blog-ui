import "./List.scss"
import Sidebar from "../../Components/Sidebar";
import Datatable from "../../Components/Datatable";
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import React from "react";


const List = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([]);
    const inputRef = useRef(null);

    const handleChange = () => [setSearchTerm(inputRef.current.value)];
    useEffect(() => {
        console.log('app useeffect!!');
        let url = 'https://62b297ff20cad3685c902f74.mockapi.io/web';
        if (searchTerm.length > 0) {
            url = url + '?search=' + searchTerm;
        }
        console.log(url);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data); //setStudents(data)
            });
    }, [searchTerm]);


    return (
        <div className="list" style={{marginTop:100}}>
            <Sidebar/>
            <div className="listContainer" >
                <div style={{width:'90%', margin:'auto'}}>
                    <h1>User</h1>
                    <div className="row">
                        <div className="col-sm-6 header-todo">
                            <div className="input-group container mt-5 mb-5">
                                <input
                                    ref={inputRef}
                                    type="search"
                                    className="form-control rounded"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="search-addon"
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-primary"
                                    onClick={handleChange}
                                >
                                    search
                                </button>
                            </div>
                            <p>
                                <Link to={'/admin/list/new'}>
                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                        onClick={handleChange}
                                    >
                                        Add New
                                    </button>
                                </Link>
                            </p>
                        </div>
                    </div>
                    <Datatable data={data}/>
                </div>
            </div>
        </div>
    )
}

export default List