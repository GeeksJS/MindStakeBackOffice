import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import Complaint from './Complaint';
import ReactToPrint from 'react-to-print';

import './Complaint.css'


export default function Complaints() {
    const [complaints, setComplaints] = useState('')

    const [refs, setrefs] = useState()

    const handlePrint = () => {
        var content = document.getElementById("tab1");
        var pri = document.getElementById("ifmcontentstoprint").contentWindow;
        pri.document.open();
        pri.document.write(content.outerHTML);
        pri.document.close();
        pri.focus();
        pri.print();
    }


    const componentRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`http://localhost:3000/complaints/`);
                setComplaints(response);
                console.log(response)
            } catch (error) {
                console.error(error)
            }
        };
        fetchData().then(complaints);

    }, []);

    return (
        <React.Fragment>
            <div
                className="card mb-3"
                id="ordersTable"
                data-list='{"valueNames":["order","date","address","status","amount"],"page":10,"pagination":true}'
            >
                <iframe id="ifmcontentstoprint" style={{height: '0px', width: '0px', position: 'absolute'}}></iframe>

                <div className="card-header">
                    <div className="row flex-between-center">
                        <div className="col-4 col-sm-auto d-flex align-items-center pe-0">
                            <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">Complaints</h5>
                        </div>
                        <div className="col-8 col-sm-auto ms-auto text-end ps-0">
                            <div className="d-none" id="orders-bulk-actions">
                                <div className="d-flex">
                                    <select
                                        className="form-select form-select-sm"
                                        aria-label="Bulk actions"
                                    >
                                        <option selected="">Bulk actions</option>
                                        <option value="Refund">Refund</option>
                                        <option value="Delete">Delete</option>
                                        <option value="Archive">Archive</option>
                                    </select>
                                    <button
                                        className="btn btn-falcon-default btn-sm ms-2"
                                        type="button"
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>
                            <div id="orders-actions" className="">
                                {/* <button className="btn btn-falcon-default btn-sm" type="button">
                                    <svg
                                        className="svg-inline--fa fa-plus fa-w-14"
                                        data-fa-transform="shrink-3 down-2"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="plus"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        data-fa-i2svg=""
                                        style={{ transformOrigin: "0.4375em 0.625em" }}
                                    >
                                        <g transform="translate(224 256)">
                                            <g transform="translate(0, 64)  scale(0.8125, 0.8125)  rotate(0 0 0)">
                                                <path
                                                    fill="currentColor"
                                                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                                                    transform="translate(-224 -256)"
                                                />
                                            </g>
                                        </g>
                                    </svg> */}
                                {/* <span class="fas fa-plus" data-fa-transform="shrink-3 down-2"></span> Font Awesome fontawesome.com */}
                                {/* <span className="d-none d-sm-inline-block ms-1">New</span> */}
                                {/* </button> */}

                                <button className="btn btn-falcon-default btn-sm" type="button" onClick={handlePrint}>
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
                    <div className="table-responsive scrollbar" >
                        <table className="table table-sm table-striped fs--1 mb-0 overflow-hidden" id='tab1' >
                            <thead className="bg-200 text-900">
                                <tr>
                                    <th>
                                        <div className="form-check fs-0 mb-0 d-flex align-items-center">
                                            <input
                                                className="form-check-input"
                                                id="checkbox-bulk-customers-select"
                                                type="checkbox"
                                                data-bulk-select='{"body":"table-orders-body","actions":"orders-bulk-actions","replacedElement":"orders-actions"}'
                                            />
                                        </div>
                                    </th>
                                    <th
                                        className="sort pe-1 align-middle white-space-nowrap"
                                        data-sort="order"
                                    >
                                        Project
                                    </th>
                                    <th
                                        className="sort pe-1 align-middle white-space-nowrap pe-7"
                                        data-sort="date"

                                    >
                                        Date
                                    </th>
                                    <th
                                        className="sort pe-1 align-middle white-space-wrap"
                                        data-sort="address"
                                        style={{ minWidth: "9rem" }}
                                    >
                                        Title
                                    </th>
                                    <th
                                        className="sort pe-1 align-middle white-space-wrap"
                                        data-sort="address"
                                        style={{ minWidth: "10rem" }}
                                    >
                                        Description
                                    </th>
                                    <th
                                        className="sort pe-1 align-middle white-space-nowrap text-center"
                                        data-sort="status"
                                    >
                                        Status
                                    </th>

                                    <th className="no-sort" />
                                </tr>
                            </thead>
                            <tbody className="list" id="table-orders-body">
                                {complaints &&
                                    complaints.map((complaint, index) => (
                                        <Complaint key={index} complaint={complaint} />
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="d-flex align-items-center justify-content-center">
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
                            {/* <span class="fas fa-chevron-right">             </span> Font Awesome fontawesome.com */}
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
