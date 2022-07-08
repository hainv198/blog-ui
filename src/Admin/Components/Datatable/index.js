import React, {useState, useMemo, useEffect} from 'react';
import {Table} from 'react-bootstrap'
import './datatable.scss'
import './pagination.scss'
import './Pagination'
import {Link} from "react-router-dom";
import Tippy from "@tippyjs/react";
import Pagination from "./Pagination";
let PageSize = 12;

export default function Datatable ({data}) {
    const [currentPage, setCurrentPage] = useState(0);
    const [customer, setCustomer] = useState([])
    const [direction, setDirection] = useState(1);
    const [currentData, setCurrentTableData] = useState(null);

    useEffect(() => {
        setCurrentPage(1);
        setCustomer(data);
        const firstPageIndex = 0
        const lastPageIndex = PageSize;
        setCurrentTableData([...data.slice(firstPageIndex, lastPageIndex)]);
    },[data])
    useEffect(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        setCurrentTableData([...data.slice(firstPageIndex, lastPageIndex)]);
    }, [currentPage]);

    const sortColumn = (field, type) => {
        const sortData = [...customer];
        if (type === 'string') {
            sortData.sort((a, b) => direction * a[field].localeCompare(b[field]));
        } else if (type === 'number') {
            sortData.sort((a, b) => direction * (a[field] - b[field]));
        }
        setDirection(direction * -1);
        setCustomer(sortData);
    };

    const deleteUser = (id) => {
        fetch('https://62b297ff20cad3685c902f74.mockapi.io/web/' + id, {
            method: 'DELETE',
        }).then(() => {
            console.log('delete successful!!');
            let result = [...customer];
            result = result.filter((item) => {
                return item.id !== id;
            });
            setCustomer(result);
        });
    };


    return (
        <div>
            <Table responsive className='table-user'>
                <thead>
                <tr>
                    <th style={{textAlign:'center'}}>ID</th>
                    <th
                        style={{textAlign:'center'}}
                        onClick={() => sortColumn('firstName', 'string')}>
                        First Name
                    </th>

                    <th
                        style={{textAlign:'center'}}
                        onClick={() => sortColumn('lastName', 'string')}>
                        Last Name
                    </th>
                    <th
                        style={{textAlign:'center'}}
                        onClick={() => sortColumn('lastName', 'string')}>
                        Date Of Birth
                    </th>


                    <th>Email</th>
                    <th
                        style={{textAlign:'center'}}
                        onClick={() => sortColumn('lastName', 'string')}>
                        Country
                    </th>
                    <th
                        style={{textAlign:'center'}}
                        onClick={() => sortColumn('lastName', 'string')}>
                        Phone
                    </th>
                    <th
                        style={{textAlign:'center'}}
                        onClick={() => sortColumn('mark', 'number')}>Status</th>
                    <th style={{textAlign:'center'}}>Detail</th>
                    <th style={{textAlign:'center', width:100}}>Action</th>
                </tr>
                </thead>
                <tbody style={{marginTop:100}}>
                {currentData&&currentData.map(item => {
                    return (
                        <tr style={{marginTop:20}}
                            key={item.id}>

                            <td style={{borderRight:'1px solid #333', textAlign:'center', width:'5%'}}>{item.id}</td>
                            <td style={{borderRight:'1px solid #333', textAlign:'center'}}>{item.firstName}</td>
                            <td style={{borderRight:'1px solid #333', textAlign:'center'}}>{item.lastName}</td>
                            <td style={{borderRight:'1px solid #333', textAlign:'center', width:'15%'}}>{(item.updated_at).slice(0, 10)}</td>
                            <td style={{borderRight:'1px solid #333', textAlign:'center', width:'25%'}}>{item.email}</td>
                            <td style={{borderRight:'1px solid #333', textAlign:'center', width:'20%'}}>{item.home.address}</td>
                            <td style={{borderRight:'1px solid #333', textAlign:'center', width:'15%'}}>{(item.phone).slice(0, 10)}</td>

                            {item.status === true && (
                                <td style={{borderRight:'1px solid #333', textAlign:'center', width:'10%'}}>
                                    <button
                                        style={{width:80}}
                                        className="btn btn-outline-success status">
                                        Fancy <i className='bx bxs-star' style={{color:'#f30'}}></i>
                                    </button>
                                </td>
                            )}
                            {item.status === false && (
                                <td style={{borderRight:'1px solid #333', textAlign:'center'}}>
                                    <button
                                        style={{width:80,height:34.33}}
                                        className="btn btn-outline-secondary ">
                                        User <i className='bx bxs-user-circle'></i>
                                    </button>
                                </td>
                            )}
                            <td style={{borderRight:'1px solid #333', textAlign:'center', width:'10%'}}>
                                <Link to={'users/' + item.id}>Details</Link>
                            </td>
                            <td className='Action'>
                                <Tippy placement='bottom'
                                       content={<span>Edit</span>}
                                >
                                    <Link to={'usersedit/' + item.id}>
                                        <button type="button" className="btn btn-outline-primary">
                                            Edit
                                        </button>
                                    </Link>
                                </Tippy>

                                <Tippy
                                    placement='bottom'
                                    content={<span>Delete</span>}>
                                    <button
                                        style={{height:24}}
                                        type="button"
                                        className="btn btn-outline-danger"
                                        onClick={() => deleteUser(item.id)}
                                    >
                                        <i className='bx bx-coffee-togo'></i>
                                    </button>
                                </Tippy>

                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    );
}
