import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import SingleUser from './SingleUser';



export default function Users() {

    const [users, setUsers] = useState('')

    //const [newuser, setNewUser] = useState({  })

    const [imageP, setImageP] = useState()



    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`http://localhost:3000/users/users`);
                setUsers(response);
                //console.log(response)

            } catch (error) {
                console.error(error)
            }
        };
        fetchData().then(users);

    }, []);







    


    return (
        <React.Fragment>
            <div
                className="card mb-3"
                id="customersTable"
                data-list='{"valueNames":["name","email","phone","address","joined"],"page":10,"pagination":true}'
            >
                <div className="card-header">
                    <div className="row flex-between-center">
                        <div className="col-4 col-sm-auto d-flex align-items-center pe-0">
                            <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">Users</h5>
                        </div>
                        <div className="col-8 col-sm-auto text-end ps-2">
                            <div className="d-none" id="table-customers-actions">
                                <div className="d-flex">
                                    <select
                                        className="form-select form-select-sm"
                                        aria-label="Bulk actions"
                                    >
                                        <option selected="">Bulk actions</option>
                                        <option value="Delete">Delete</option>

                                    </select>
                                    <button
                                        className="btn btn-falcon-default btn-sm ms-2"
                                        type="button"
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>


                            <div id="table-customers-replace-element row" >




                                <div className='col-lg-8' >
                                    <select
                                        className="form-select form-select-sm ms-2"
                                        aria-label=".form-select-sm example"
                                        style={{marginRight:'100px', marginBottom:'-29px',width:'150px'}}
                                    >
                                        <option selected="selected">All users</option>
                                        <option>Creator</option>
                                        <option>Investor</option>
                                        <option>Simple user</option>

                                    </select>
                                </div>

                                <button className="btn btn-falcon-default btn-sm" type="button">
                                    <svg
                                        className="svg-inline--fa fa-external-link-alt fa-w-16"
                                        data-fa-transform="shrink-3 down-2"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="external-link-alt"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        data-fa-i2svg=""
                                        style={{ transformOrigin: "0.5em 0.625em" }}
                                    >
                                        <g transform="translate(256 256)">
                                            <g transform="translate(0, 64)  scale(0.8125, 0.8125)  rotate(0 0 0)">
                                                <path
                                                    fill="currentColor"
                                                    d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
                                                    transform="translate(-256 -256)"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                    {/* <span class="fas fa-external-link-alt" data-fa-transform="shrink-3 down-2"></span> Font Awesome fontawesome.com */}
                                    <span className="d-none d-sm-inline-block ms-1">Export</span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive scrollbar">
                        <table className="table table-sm table-striped fs--1 mb-0 overflow-hidden">
                            <thead className="bg-200 text-900">
                                <tr>
                                    <th>
                                        <div className="form-check fs-0 mb-0 d-flex align-items-center">
                                            <input
                                                className="form-check-input"
                                                id="checkbox-bulk-customers-select"
                                                type="checkbox"
                                                data-bulk-select='{"body":"table-customers-body","actions":"table-customers-actions","replacedElement":"table-customers-replace-element"}'
                                            />
                                        </div>
                                    </th>
                                    <th
                                        className="sort pe-1 align-middle white-space-nowrap"
                                        data-sort="name"
                                    >
                                        Name
                                    </th>
                                    <th
                                        className="sort pe-1 align-middle white-space-nowrap"
                                        data-sort="email"
                                    >
                                        Email
                                    </th>
                                    <th
                                        className="sort pe-1 align-middle white-space-nowrap"
                                        data-sort="phone"
                                    >
                                        Phone
                                    </th>

                                    <th
                                        className="sort pe-1 align-middle white-space-nowrap"
                                        data-sort="role"
                                    >
                                        Role
                                    </th>
                                    <th
                                        className="sort pe-1 align-middle white-space-nowrap"
                                        data-sort="joined"
                                    >
                                        Joined
                                    </th>
                                    <th className="align-middle no-sort" />
                                </tr>
                            </thead>
                            <tbody className="list" id="table-customers-body">

                                {users &&
                                    users.map((user, index) => (
                                        <SingleUser key={index} user={user} />
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-center">
                    <button
                        className="btn btn-sm btn-falcon-default me-1 disabled"
                        type="button"
                        title="Previous"
                        data-list-pagination="prev"
                        disabled=""
                    >
                        <svg
                            className="svg-inline--fa fa-chevron-left fa-w-10"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="chevron-left"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            data-fa-i2svg=""
                        >
                            <path
                                fill="currentColor"
                                d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                            />
                        </svg>
                        {/* <span class="fas fa-chevron-left"></span> Font Awesome fontawesome.com */}
                    </button>
                    <ul className="pagination mb-0">
                        <li className="active">
                            <button className="page" type="button" data-i={1} data-page={10}>
                                1
                            </button>
                        </li>
                        <li>
                            <button className="page" type="button" data-i={2} data-page={10}>
                                2
                            </button>
                        </li>
                        <li>
                            <button className="page" type="button" data-i={3} data-page={10}>
                                3
                            </button>
                        </li>
                    </ul>
                    <button
                        className="btn btn-sm btn-falcon-default ms-1"
                        type="button"
                        title="Next"
                        data-list-pagination="next"
                    >
                        <svg
                            className="svg-inline--fa fa-chevron-right fa-w-10"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="chevron-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            data-fa-i2svg=""
                        >
                            <path
                                fill="currentColor"
                                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                            />
                        </svg>
                        {/* <span class="fas fa-chevron-right"></span> Font Awesome fontawesome.com */}
                    </button>
                </div>
            </div>



        </React.Fragment>
    )
}
