import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <React.Fragment>

            <nav className="navbar navbar-light navbar-vertical navbar-expand-xl" >
                <div className="d-flex align-items-center">
                    <div className="toggle-icon-wrapper">
                        <button
                            className="btn navbar-toggler-humburger-icon navbar-vertical-toggle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            title="Toggle Navigation"
                        >
                            <span className="navbar-toggle-icon">
                                <span className="toggle-line" />
                            </span>
                        </button>
                    </div>
                    <a className="navbar-brand" href="index.html">
                        <div className="d-flex align-items-center py-3">
                            <img
                                className="me-2"
                                src="assets/img/logo2.png"
                                alt=""
                                width={150}
                            />
                            {/* <span className="font-sans-serif">falcon</span> */}
                        </div>
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
                    <div className="navbar-vertical-content scrollbar">
                        <ul className="navbar-nav flex-column mb-3" id="navbarVerticalNav">
                            <li className="nav-item">
                                {/* parent pages*/}
                                <Link
                                    className="nav-link"
                                    to='dashboard'
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-chart-pie" />
                                        </span>
                                        <span className="nav-link-text ps-1">Dashboard</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/* label*/}
                                <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                                    <div className="col-auto navbar-vertical-label">App</div>
                                    <div className="col ps-0">
                                        <hr className="mb-0 navbar-vertical-divider" />
                                    </div>
                                </div>
                                {/* parent pages*/}
                                <Link
                                    className="nav-link"
                                    to="admin"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-lock" />
                                        </span>
                                        <span className="nav-link-text ps-1">Admins</span>
                                    </div>
                                </Link>
                                {/* parent pages*/}
                                <a
                                    className="nav-link dropdown-indicator"
                                    href="#user"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="user"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-user" />
                                        </span>
                                        <span className="nav-link-text ps-1">Users</span>
                                    </div>
                                </a>
                                <ul className="nav collapse false" id="user">
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            to='/users'
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Users list</span>
                                            </div>
                                        </Link>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="pages/user/settings.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Users cards</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                </ul>
                                {/* parent pages*/}
                                <a
                                    className="nav-link dropdown-indicator"
                                    href="#email"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="email"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-lightbulb" />
                                        </span>
                                        <span className="nav-link-text ps-1">Projects</span>
                                    </div>
                                </a>
                                <ul className="nav collapse false" id="email">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="app/email/inbox.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Creators</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            to='/projectslist'
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Project list</span>
                                            </div>
                                        </Link>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            to='/projects'
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Project cards</span>
                                            </div>
                                        </Link>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="app/email/compose.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Project feedbacks</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                </ul>

                                {/* parent pages*/}
                                <a
                                    className="nav-link dropdown-indicator"
                                    href="#pay"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="email"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-credit-card" />
                                        </span>
                                        <span className="nav-link-text ps-1">Payments</span>
                                    </div>
                                </a>
                                <ul className="nav collapse false" id="pay">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="app/email/inbox.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Transactions</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="app/email/email-detail.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Wallets</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="app/email/compose.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Donations</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="app/email/compose.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Cryptocurrency</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                </ul>

                                {/* parent pages*/}
                                <Link
                                    className="nav-link"
                                    to='/packs'
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-tags" />
                                        </span>
                                        <span className="nav-link-text ps-1">Packs</span>
                                    </div>
                                </Link>

                                {/* parent pages*/}
                                <Link
                                    className="nav-link"
                                    to='/complaints'
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-question-circle" />
                                        </span>
                                        <span className="nav-link-text ps-1">Complaints</span>
                                    </div>
                                </Link>

                                {/* parent pages*/}
                                <a
                                    className="nav-link"
                                    href="app/kanban.html"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-building" />
                                        </span>
                                        <span className="nav-link-text ps-1">Companies</span>
                                    </div>
                                </a>

                                {/* parent pages*/}
                                <a
                                    className="nav-link"
                                    href="app/kanban.html"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-comments" />
                                        </span>
                                        <span className="nav-link-text ps-1">Chat</span>
                                    </div>
                                </a>

                            </li>
                            <li className="nav-item">
                                {/* label*/}
                                <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                                    <div className="col-auto navbar-vertical-label">Pages</div>
                                    <div className="col ps-0">
                                        <hr className="mb-0 navbar-vertical-divider" />
                                    </div>
                                </div>
                                {/* parent pages*/}
                                <a
                                    className="nav-link"
                                    href="pages/starter.html"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-flag" />
                                        </span>
                                        <span className="nav-link-text ps-1">Starter</span>
                                    </div>
                                </a>
                                {/* parent pages*/}
                                <a
                                    className="nav-link"
                                    href="pages/landing.html"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-globe" />
                                        </span>
                                        <span className="nav-link-text ps-1">Landing</span>
                                    </div>
                                </a>
                                {/* parent pages*/}
                                <a
                                    className="nav-link dropdown-indicator"
                                    href="#authentication"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="authentication"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-lock" />
                                        </span>
                                        <span className="nav-link-text ps-1">Authentication</span>
                                    </div>
                                </a>
                                <ul className="nav collapse false" id="authentication">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link dropdown-indicator"
                                            href="#simple"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="authentication"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Simple</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                        <ul className="nav collapse false" id="simple">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="pages/authentication/simple/login.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Login</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="pages/authentication/simple/logout.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Logout</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="pages/authentication/simple/register.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Register</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="pages/authentication/simple/forgot-password.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">
                                                            Forgot password
                                                        </span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="pages/authentication/simple/confirm-mail.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Confirm mail</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="pages/authentication/simple/reset-password.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Reset password</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="pages/authentication/simple/lock-screen.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Lock screen</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link dropdown-indicator"
                                            href="#card"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="authentication"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Card</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                        <ul className="nav collapse false" id="card">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="pages/authentication/card/login.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Login</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="pages/authentication/card/logout.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Logout</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="pages/authentication/card/register.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Register</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="pages/authentication/card/forgot-password.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">
                                                            Forgot password
                                                        </span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="pages/authentication/card/confirm-mail.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Confirm mail</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="pages/authentication/card/reset-password.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Reset password</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="pages/authentication/card/lock-screen.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Lock screen</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link dropdown-indicator"
                                            href="#split"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="authentication"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Split</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                        <ul className="nav collapse false" id="split">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="pages/authentication/split/login.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Login</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="pages/authentication/split/logout.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Logout</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="pages/authentication/split/register.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Register</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="pages/authentication/split/forgot-password.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">
                                                            Forgot password
                                                        </span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="pages/authentication/split/confirm-mail.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Confirm mail</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="pages/authentication/split/reset-password.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Reset password</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="pages/authentication/split/lock-screen.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Lock screen</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="pages/authentication/wizard.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Wizard</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#authentication-modal"
                                            data-bs-toggle="modal"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Modal</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                </ul>
                                {/* parent pages*/}
                                <a
                                    className="nav-link dropdown-indicator"
                                    href="#user"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="user"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-user" />
                                        </span>
                                        <span className="nav-link-text ps-1">User</span>
                                    </div>
                                </a>
                                <ul className="nav collapse false" id="user">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="pages/user/profile.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Profile</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="pages/user/settings.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Settings</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                </ul>
                                {/* parent pages*/}
                                <a
                                    className="nav-link"
                                    href="pages/starter.html"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-tags" />
                                        </span>
                                        <span className="nav-link-text ps-1">Packs</span>
                                    </div>
                                </a>

                                {/* parent pages*/}
                                <a
                                    className="nav-link dropdown-indicator"
                                    href="#faq"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="faq"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-question-circle" />
                                        </span>
                                        <span className="nav-link-text ps-1">Faq</span>
                                    </div>
                                </a>
                                <ul className="nav collapse false" id="faq">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="pages/faq/faq-basic.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Faq basic</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="pages/faq/faq-alt.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Faq alt</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="pages/faq/faq-accordion.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Faq accordion</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                </ul>
                                {/* parent pages*/}
                                <a
                                    className="nav-link dropdown-indicator"
                                    href="#errors"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="errors"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-exclamation-triangle" />
                                        </span>
                                        <span className="nav-link-text ps-1">Errors</span>
                                    </div>
                                </a>
                                <ul className="nav collapse false" id="errors">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="pages/errors/404.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">404</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="pages/errors/500.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">500</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                </ul>
                                {/* parent pages*/}
                                <a
                                    className="nav-link dropdown-indicator"
                                    href="#miscellaneous"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="miscellaneous"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-thumbtack" />
                                        </span>
                                        <span className="nav-link-text ps-1">Miscellaneous</span>
                                    </div>
                                </a>
                                <ul className="nav collapse false" id="miscellaneous">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="pages/miscellaneous/associations.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Associations</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="pages/miscellaneous/invite-people.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Invite people</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="pages/miscellaneous/privacy-policy.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Privacy policy</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                {/* label*/}
                                <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                                    <div className="col-auto navbar-vertical-label">Modules</div>
                                    <div className="col ps-0">
                                        <hr className="mb-0 navbar-vertical-divider" />
                                    </div>
                                </div>
                                {/* parent pages*/}
                                <a
                                    className="nav-link dropdown-indicator"
                                    href="#forms"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="forms"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-file-alt" />
                                        </span>
                                        <span className="nav-link-text ps-1">Forms</span>
                                    </div>
                                </a>
                                <ul className="nav collapse false" id="forms">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link dropdown-indicator"
                                            href="#basic"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="forms"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Basic</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                        <ul className="nav collapse false" id="basic">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/forms/basic/form-control.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Form control</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/forms/basic/input-group.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Input group</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/forms/basic/select.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Select</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/forms/basic/checks.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Checks</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/forms/basic/range.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Range</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/forms/basic/layout.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Layout</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link dropdown-indicator"
                                            href="#advance"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="forms"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Advance</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                        <ul className="nav collapse false" id="advance">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/forms/advance/advance-select.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Advance select</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/forms/advance/date-picker.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Date picker</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/forms/advance/editor.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Editor</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/forms/advance/emoji-button.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Emoji button</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/forms/advance/file-uploader.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">File uploader</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/forms/advance/rating.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Rating</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/forms/floating-labels.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Floating labels</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/forms/wizard.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Wizard</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/forms/validation.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Validation</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                </ul>
                                {/* parent pages*/}
                                <a
                                    className="nav-link dropdown-indicator"
                                    href="#tables"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="tables"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-table" />
                                        </span>
                                        <span className="nav-link-text ps-1">Tables</span>
                                    </div>
                                </a>
                                <ul className="nav collapse false" id="tables">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/tables/basic-tables.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Basic tables</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/tables/advance-tables.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Advance tables</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/tables/bulk-select.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Bulk select</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                </ul>
                                {/* parent pages*/}
                                <a
                                    className="nav-link dropdown-indicator"
                                    href="#charts"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="charts"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-chart-line" />
                                        </span>
                                        <span className="nav-link-text ps-1">Charts</span>
                                    </div>
                                </a>
                                <ul className="nav collapse false" id="charts">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/charts/chartjs.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Chartjs</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link dropdown-indicator"
                                            href="#eCharts"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="charts"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">ECharts</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                        <ul className="nav collapse false" id="eCharts">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/charts/echarts/line-charts.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Line charts</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/charts/echarts/bar-charts.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Bar charts</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/charts/echarts/candlestick-charts.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">
                                                            Candlestick charts
                                                        </span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/charts/echarts/geo-map.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Geo map</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/charts/echarts/scatter-charts.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Scatter charts</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/charts/echarts/pie-charts.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Pie charts</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/charts/echarts/radar-charts.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Radar charts</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/charts/echarts/heatmap-charts.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Heatmap charts</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/charts/echarts/how-to-use.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">How to use</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                {/* parent pages*/}
                                <a
                                    className="nav-link dropdown-indicator"
                                    href="#icons"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="icons"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-shapes" />
                                        </span>
                                        <span className="nav-link-text ps-1">Icons</span>
                                    </div>
                                </a>
                                <ul className="nav collapse false" id="icons">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/icons/font-awesome.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Font awesome</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/icons/bootstrap-icons.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Bootstrap icons</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/icons/feather.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Feather</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/icons/material-icons.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Material icons</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                </ul>
                                {/* parent pages*/}
                                <a
                                    className="nav-link dropdown-indicator"
                                    href="#maps"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="maps"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-map" />
                                        </span>
                                        <span className="nav-link-text ps-1">Maps</span>
                                    </div>
                                </a>
                                <ul className="nav collapse false" id="maps">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/maps/google-map.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Google map</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/maps/leaflet-map.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Leaflet map</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                </ul>
                                {/* parent pages*/}
                                <a
                                    className="nav-link dropdown-indicator"
                                    href="#components"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="components"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-puzzle-piece" />
                                        </span>
                                        <span className="nav-link-text ps-1">Components</span>
                                    </div>
                                </a>
                                <ul className="nav collapse false" id="components">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/accordion.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Accordion</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/alerts.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Alerts</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/anchor.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Anchor</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/animated-icons.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Animated icons</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/background.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Background</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/badges.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Badges</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/breadcrumbs.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Breadcrumbs</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/buttons.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Buttons</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>

                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/cards.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Cards</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link dropdown-indicator"
                                            href="#carousel"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="components"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Carousel</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                        <ul className="nav collapse false" id="carousel">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/components/carousel/bootstrap.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Bootstrap</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/components/carousel/swiper.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Swiper</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/collapse.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Collapse</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/cookie-notice.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Cookie notice</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/countup.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Countup</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/draggable.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Draggable</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/dropdowns.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Dropdowns</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/list-group.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">List group</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/modals.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Modals</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link dropdown-indicator"
                                            href="#navs-_and_-Tabs"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="components"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Navs &amp; Tabs</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                        <ul className="nav collapse false" id="navs-_and_-Tabs">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/components/navs-and-tabs/navs.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Navs</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/components/navs-and-tabs/navbar.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Navbar</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/components/navs-and-tabs/vertical-navbar.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">
                                                            Vertical navbar
                                                        </span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/components/navs-and-tabs/top-navbar.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Top navbar</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/components/navs-and-tabs/combo-navbar.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Combo navbar</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/components/navs-and-tabs/tabs.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Tabs</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/offcanvas.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Offcanvas</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link dropdown-indicator"
                                            href="#pictures"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="components"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Pictures</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                        <ul className="nav collapse false" id="pictures">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/components/pictures/avatar.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Avatar</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/components/pictures/images.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Images</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/components/pictures/figures.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Figures</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/components/pictures/hoverbox.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Hoverbox</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/components/pictures/lightbox.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Lightbox</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/progress-bar.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Progress bar</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/placeholder.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Placeholder</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/pagination.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Pagination</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/popovers.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Popovers</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/scrollspy.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Scrollspy</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/search.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Search</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/spinners.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Spinners</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/toasts.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Toasts</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/tooltips.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Tooltips</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/treeview.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Treeview</span>
                                                <span className="badge rounded-pill ms-2 badge-soft-success">
                                                    New
                                                </span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/components/typed-text.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Typed text</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link dropdown-indicator"
                                            href="#videos"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="components"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Videos</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                        <ul className="nav collapse false" id="videos">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/components/videos/embed.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Embed</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="modules/components/videos/plyr.html"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Plyr</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                {/* parent pages*/}
                                <a
                                    className="nav-link dropdown-indicator"
                                    href="#utilities"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="utilities"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-fire" />
                                        </span>
                                        <span className="nav-link-text ps-1">Utilities</span>
                                    </div>
                                </a>
                                <ul className="nav collapse false" id="utilities">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/utilities/borders.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Borders</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/utilities/clearfix.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Clearfix</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/utilities/colors.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Colors</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/utilities/colored-links.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Colored links</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/utilities/display.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Display</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/utilities/flex.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Flex</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/utilities/float.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Float</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/utilities/grid.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Grid</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/utilities/overlayscrollbars.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Overlayscrollbars</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/utilities/position.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Position</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/utilities/spacing.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Spacing</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/utilities/sizing.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Sizing</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/utilities/stretched-link.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Stretched link</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/utilities/text-truncation.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Text truncation</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/utilities/typography.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Typography</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/utilities/vertical-align.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Vertical align</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="modules/utilities/visibility.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Visibility</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                </ul>
                                {/* parent pages*/}
                                <a
                                    className="nav-link"
                                    href="widgets.html"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-poll" />
                                        </span>
                                        <span className="nav-link-text ps-1">Widgets</span>
                                    </div>
                                </a>
                                {/* parent pages*/}
                                <a
                                    className="nav-link dropdown-indicator"
                                    href="#multi-level"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="multi-level"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-layer-group" />
                                        </span>
                                        <span className="nav-link-text ps-1">Multi level</span>
                                    </div>
                                </a>
                                <ul className="nav collapse false" id="multi-level">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link dropdown-indicator"
                                            href="#level-two"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="multi-level"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Level two</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                        <ul className="nav collapse false" id="level-two">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#!.html" aria-expanded="false">
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Item 1</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#!.html" aria-expanded="false">
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Item 2</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link dropdown-indicator"
                                            href="#level-three"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="multi-level"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Level three</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                        <ul className="nav collapse false" id="level-three">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#!.html" aria-expanded="false">
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Item 3</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link dropdown-indicator"
                                                    href="#item-4"
                                                    data-bs-toggle="collapse"
                                                    aria-expanded="false"
                                                    aria-controls="level-three"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Item 4</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                                <ul className="nav collapse false" id="item-4">
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="#!.html"
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text ps-1">Item 5</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="#!.html"
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text ps-1">Item 6</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link dropdown-indicator"
                                            href="#level-four"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="multi-level"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Level four</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                        <ul className="nav collapse false" id="level-four">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#!.html" aria-expanded="false">
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Item 6</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link dropdown-indicator"
                                                    href="#item-7"
                                                    data-bs-toggle="collapse"
                                                    aria-expanded="false"
                                                    aria-controls="level-four"
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <span className="nav-link-text ps-1">Item 7</span>
                                                    </div>
                                                </a>
                                                {/* more inner pages*/}
                                                <ul className="nav collapse false" id="item-7">
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="#!.html"
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text ps-1">Item 8</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link dropdown-indicator"
                                                            href="#item-9"
                                                            data-bs-toggle="collapse"
                                                            aria-expanded="false"
                                                            aria-controls="item-7"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text ps-1">Item 9</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                        <ul className="nav collapse false" id="item-9">
                                                            <li className="nav-item">
                                                                <a
                                                                    className="nav-link"
                                                                    href="#!.html"
                                                                    aria-expanded="false"
                                                                >
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="nav-link-text ps-1">
                                                                            Item 10
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                                {/* more inner pages*/}
                                                            </li>
                                                            <li className="nav-item">
                                                                <a
                                                                    className="nav-link"
                                                                    href="#!.html"
                                                                    aria-expanded="false"
                                                                >
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="nav-link-text ps-1">
                                                                            Item 11
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                                {/* more inner pages*/}
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                {/* label*/}
                                <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                                    <div className="col-auto navbar-vertical-label">Documentation</div>
                                    <div className="col ps-0">
                                        <hr className="mb-0 navbar-vertical-divider" />
                                    </div>
                                </div>
                                {/* parent pages*/}
                                <a
                                    className="nav-link"
                                    href="documentation/getting-started.html"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-rocket" />
                                        </span>
                                        <span className="nav-link-text ps-1">Getting started</span>
                                    </div>
                                </a>
                                {/* parent pages*/}
                                <a
                                    className="nav-link dropdown-indicator"
                                    href="#customization"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="customization"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-wrench" />
                                        </span>
                                        <span className="nav-link-text ps-1">Customization</span>
                                    </div>
                                </a>
                                <ul className="nav collapse false" id="customization">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="documentation/customization/configuration.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Configuration</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="documentation/customization/styling.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Styling</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="documentation/customization/dark-mode.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Dark mode</span>
                                                <span className="badge rounded-pill ms-2 badge-soft-success">
                                                    New
                                                </span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="documentation/customization/plugin.html"
                                            aria-expanded="false"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-text ps-1">Plugin</span>
                                            </div>
                                        </a>
                                        {/* more inner pages*/}
                                    </li>
                                </ul>
                                {/* parent pages*/}
                                <a
                                    className="nav-link"
                                    href="documentation/gulp.html"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fab fa-gulp" />
                                        </span>
                                        <span className="nav-link-text ps-1">Gulp</span>
                                    </div>
                                </a>
                                {/* parent pages*/}
                                <a
                                    className="nav-link"
                                    href="documentation/design-file.html"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-palette" />
                                        </span>
                                        <span className="nav-link-text ps-1">Design file</span>
                                    </div>
                                </a>
                                {/* parent pages*/}
                                <a
                                    className="nav-link"
                                    href="changelog.html"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fas fa-code-branch" />
                                        </span>
                                        <span className="nav-link-text ps-1">Changelog</span>
                                    </div>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </React.Fragment>
    )
}
