import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import Project from './Project'

export default function Projects() {

    const [projects, setProjects] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`http://localhost:3000/projects/getallprojects`);
                setProjects(response);
                console.log(response)
            } catch (error) {
                console.error(error)
            }
        };
        fetchData().then(projects);

    }, []);

   
    return (
        <React.Fragment>
            <div className="card mb-3">
                <div className="card-body"> 
                    <div className="row flex-between-center">
                        <div className="col-sm-auto mb-2 mb-sm-0">
                            <h6 className="mb-0">Showing {projects.length} of {projects.length} Projects</h6>
                        </div>
                        <div className="col-sm-auto">
                            <div className="row gx-2 align-items-center">
                                <div className="col-auto">
                                    <form className="row gx-2">
                                        <div className="col-auto">
                                            <small>Sort by: </small>
                                        </div>
                                        <div className="col-auto">
                                            <select
                                                className="form-select form-select-sm"
                                                aria-label="Bulk actions"
                                            >
                                                <option selected="">Best Match</option>
                                                <option value="Refund">Newest</option>
                                                <option value="Delete">Price</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-auto pe-0">
                                    <a
                                        className="text-600 px-1"
                                        href="../../../app/e-commerce/product/product-grid.html"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-original-title="Product Grid"
                                        aria-label="Product Grid"
                                    >
                                        <svg
                                            className="svg-inline--fa fa-th fa-w-16"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="th"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            data-fa-i2svg=""
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
                                            />
                                        </svg>
                                        {/* <span class="fas fa-th"></span> Font Awesome fontawesome.com */}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body p-0 overflow-hidden">
                    <div className="row g-0">
                        {projects &&
                            projects.map((project, index) => (
                                <Project key={index} project={project} />
                            ))
                        }
                        

                    </div>
                </div>
                <div className="card-footer border-top d-flex justify-content-center">
                    <button
                        className="btn btn-falcon-default btn-sm me-2"
                        type="button"
                        disabled="disabled"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Prev"
                        aria-label="Prev"
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
                    <a className="btn btn-sm btn-falcon-default text-primary me-2" href="#!">
                        1
                    </a>
                    <a className="btn btn-sm btn-falcon-default me-2" href="#!">
                        2
                    </a>
                    <a className="btn btn-sm btn-falcon-default me-2" href="#!">
                        <svg
                            className="svg-inline--fa fa-ellipsis-h fa-w-16"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="ellipsis-h"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                        >
                            <path
                                fill="currentColor"
                                d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                            />
                        </svg>
                        {/* <span class="fas fa-ellipsis-h"></span> Font Awesome fontawesome.com */}
                    </a>
                    <a className="btn btn-sm btn-falcon-default me-2" href="#!">
                        35
                    </a>
                    <button
                        className="btn btn-falcon-default btn-sm"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Next"
                        aria-label="Next"
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
