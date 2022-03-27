import React from 'react'

export default function Dashboard() {
    return (
        <React.Fragment>
            <>
                <div className="row g-3">
                    <div className="col-xxl-9">
                        <div className="card rounded-3 overflow-hidden h-100">
                            <div className="card-body bg-line-chart-gradient d-flex flex-column justify-content-between">
                                <div className="row align-items-center g-0">
                                    <div className="col light">
                                        <h4 className="text-white mb-0">Today $764.39</h4>
                                        <p className="fs--1 fw-semi-bold text-white">
                                            Yesterday <span className="opacity-50">$684.87</span>
                                        </p>
                                    </div>
                                    <div className="col-auto d-none d-sm-block">
                                        <select
                                            className="form-select form-select-sm mb-3"
                                            id="dashboard-chart-select"
                                        >
                                            <option value="all">All Payments</option>
                                            <option value="successful" selected="selected">
                                                Successful Payments
                                            </option>
                                            <option value="failed">Failed Payments</option>
                                        </select>
                                    </div>
                                </div>
                                {/* Find the JS file for the following calendar at: src/js/charts/echarts/line-payment.js*/}
                                {/* If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js*/}
                                <div
                                    className="echart-line-payment"
                                    style={{ height: 200 }}
                                    data-echart-responsive="true"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row g-3">
                            <div className="col-md-4 col-xxl-12">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="row flex-between-center g-0">
                                            <div className="col-6 d-lg-block flex-between-center">
                                                <h6 className="mb-2 text-900">Active Users</h6>
                                                <h4 className="fs-3 fw-normal text-700 mb-0">765k</h4>
                                            </div>
                                            <div className="col-auto h-100">
                                                <div
                                                    style={{ height: 50, minWidth: 80 }}
                                                    data-echarts='{"xAxis":{"show":false,"boundaryGap":false},"series":[{"data":[3,7,6,8,5,12,11],"type":"line","symbol":"none"}],"grid":{"right":"0px","left":"0px","bottom":"0px","top":"0px"}}'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-xxl-12">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="row flex-between-center">
                                            <div className="col d-md-flex d-lg-block flex-between-center">
                                                <h6 className="mb-md-0 mb-lg-2">Revenue</h6>
                                                <span className="badge rounded-pill badge-soft-success">
                                                    <span className="fas fa-caret-up" /> 61.8%
                                                </span>
                                            </div>
                                            <div className="col-auto">
                                                <h4
                                                    className="fs-3 fw-normal text-700"
                                                    data-countup='{"endValue":82.18,"decimalPlaces":2,"suffix":"M","prefix":"$"}'
                                                >
                                                    0
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-xxl-12">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="row flex-between-center">
                                            <div className="col d-md-flex d-lg-block flex-between-center">
                                                <h6 className="mb-md-0 mb-lg-2">Conversion</h6>
                                                <span className="badge rounded-pill badge-soft-primary">
                                                    <span className="fas fa-caret-up" /> 29.4%
                                                </span>
                                            </div>
                                            <div className="col-auto">
                                                <h4
                                                    className="fs-3 fw-normal text-primary"
                                                    data-countup='{"endValue":28.5,"decimalPlaces":2,"suffix":"%"}'
                                                >
                                                    0
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-3 mb-3">
                    <div className="col-xxl-9">
                        <div className="card bg-light my-3">
                            <div className="card-body p-3">
                                <p className="fs--1 mb-0">
                                    <a href="#!">
                                        <span
                                            className="fas fa-exchange-alt me-2"
                                            data-fa-transform="rotate-90"
                                        />
                                        A payout for <strong>$921.42 </strong>was deposited 13 days ago
                                    </a>
                                    . Your next deposit is expected on{" "}
                                    <strong>Tuesday, March 13.</strong>
                                </p>
                            </div>
                        </div>
                        <div className="row g-3 mb-3">
                            <div className="col-sm-6 col-md-4">
                                <div className="card overflow-hidden" style={{ minWidth: "12rem" }}>
                                    <div
                                        className="bg-holder bg-card"
                                        style={{
                                            backgroundImage:
                                                "url(../assets/img/icons/spot-illustrations/corner-1.png)"
                                        }}
                                    ></div>
                                    {/*/.bg-holder*/}
                                    <div className="card-body position-relative">
                                        <h6>
                                            Customers
                                            <span className="badge badge-soft-warning rounded-pill ms-2">
                                                -0.23%
                                            </span>
                                        </h6>
                                        <div
                                            className="display-4 fs-4 mb-2 fw-normal font-sans-serif text-warning"
                                            data-countup='{"endValue":58.386,"decimalPlaces":2,"suffix":"k"}'
                                        >
                                            0
                                        </div>
                                        <a
                                            className="fw-semi-bold fs--1 text-nowrap"
                                            href="../app/e-commerce/customers.html"
                                        >
                                            See all
                                            <span
                                                className="fas fa-angle-right ms-1"
                                                data-fa-transform="down-1"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="card overflow-hidden" style={{ minWidth: "12rem" }}>
                                    <div
                                        className="bg-holder bg-card"
                                        style={{
                                            backgroundImage:
                                                "url(../assets/img/icons/spot-illustrations/corner-2.png)"
                                        }}
                                    ></div>
                                    {/*/.bg-holder*/}
                                    <div className="card-body position-relative">
                                        <h6>
                                            Orders
                                            <span className="badge badge-soft-info rounded-pill ms-2">
                                                0.0%
                                            </span>
                                        </h6>
                                        <div
                                            className="display-4 fs-4 mb-2 fw-normal font-sans-serif text-info"
                                            data-countup='{"endValue":23.434,"decimalPlaces":2,"suffix":"k"}'
                                        >
                                            0
                                        </div>
                                        <a
                                            className="fw-semi-bold fs--1 text-nowrap"
                                            href="../app/e-commerce/orders/order-list.html"
                                        >
                                            All orders
                                            <span
                                                className="fas fa-angle-right ms-1"
                                                data-fa-transform="down-1"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card overflow-hidden" style={{ minWidth: "12rem" }}>
                                    <div
                                        className="bg-holder bg-card"
                                        style={{
                                            backgroundImage:
                                                "url(../assets/img/icons/spot-illustrations/corner-3.png)"
                                        }}
                                    ></div>
                                    {/*/.bg-holder*/}
                                    <div className="card-body position-relative">
                                        <h6>
                                            Revenue
                                            <span className="badge badge-soft-success rounded-pill ms-2">
                                                9.54%
                                            </span>
                                        </h6>
                                        <div
                                            className="display-4 fs-4 mb-2 fw-normal font-sans-serif"
                                            data-countup='{"endValue":43594,"prefix":"$"}'
                                        >
                                            0
                                        </div>
                                        <a
                                            className="fw-semi-bold fs--1 text-nowrap"
                                            href="../index.html"
                                        >
                                            Statistics
                                            <span
                                                className="fas fa-angle-right ms-1"
                                                data-fa-transform="down-1"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-12">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <div className="row flex-between-center">
                                            <div className="col-auto">
                                                <h6 className="mb-2">Candle Chart</h6>
                                            </div>
                                            <div className="col-auto mt-2">
                                                <div className="row g-sm-4">
                                                    <div className="col-12 col-sm-auto">
                                                        <div className="mb-3 pe-4 border-sm-end border-200">
                                                            <h6 className="fs--2 text-600 mb-1">Forecast Hours</h6>
                                                            <div className="d-flex align-items-center">
                                                                <h5 className="fs-0 text-900 mb-0 me-2">2077h</h5>
                                                                <span className="badge rounded-pill badge-soft-primary">
                                                                    <span className="fas fa-caret-up" /> 20.2%
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-auto">
                                                        <div className="mb-3 pe-4 border-sm-end border-200">
                                                            <h6 className="fs--2 text-600 mb-1">Workflow Hours</h6>
                                                            <div className="d-flex align-items-center">
                                                                <h5 className="fs-0 text-900 mb-0 me-2">100h</h5>
                                                                <span className="badge rounded-pill badge-soft-success">
                                                                    <span className="fas fa-caret-up" /> 20%
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-auto">
                                                        <div className="mb-3 pe-0">
                                                            <h6 className="fs--2 text-600 mb-1">Forecast Income</h6>
                                                            <div className="d-flex align-items-center">
                                                                <h5 className="fs-0 text-900 mb-0 me-2">$256,489</h5>
                                                                <span className="badge rounded-pill badge-soft-primary">
                                                                    <span className="fas fa-caret-up" /> 18%
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card-body pe-0 position-relative"
                                        id="candle-chart"
                                        dir="ltr"
                                    >
                                        <div
                                            className="btn-group position-absolute z-index-1 top-0 d-inline-block"
                                            role="group"
                                            style={{ left: 20, right: 20 }}
                                        >
                                            <button
                                                className="btn btn-falcon-default btn-sm mb-1"
                                                data-zoom="in"
                                            >
                                                <span className="fas fa-plus" />
                                            </button>
                                            <button
                                                className="btn btn-falcon-default btn-sm mb-1"
                                                data-zoom="out"
                                            >
                                                <span className="fas fa-minus" />
                                            </button>
                                        </div>
                                        {/* Find the JS file for the following calendar at: src/js/charts/echarts/candle-chart.js*/}
                                        {/* If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js*/}
                                        <div
                                            className="echart-candle-chart"
                                            data-echart-responsive="true"
                                            data-action-target="candle-chart"
                                        >
                                            {" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-header d-flex flex-between-center bg-light py-2">
                                        <h6 className="mb-0">Active Users</h6>
                                        <div className="dropdown font-sans-serif btn-reveal-trigger">
                                            <button
                                                className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
                                                type="button"
                                                id="dropdown-active-user"
                                                data-bs-toggle="dropdown"
                                                data-boundary="viewport"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <span className="fas fa-ellipsis-h fs--2" />
                                            </button>
                                            <div
                                                className="dropdown-menu dropdown-menu-end border py-2"
                                                aria-labelledby="dropdown-active-user"
                                            >
                                                <a className="dropdown-item" href="#!">
                                                    View
                                                </a>
                                                <a className="dropdown-item" href="#!">
                                                    Export
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item text-danger" href="#!">
                                                    Remove
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body py-2">
                                        <div className="d-flex align-items-center position-relative mb-3">
                                            <div className="avatar avatar-2xl status-online">
                                                <img
                                                    className="rounded-circle"
                                                    src="../assets/img/team/1.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex-1 ms-3">
                                                <h6 className="mb-0 fw-semi-bold">
                                                    <a
                                                        className="stretched-link text-900"
                                                        href="../pages/user/profile.html"
                                                    >
                                                        Emma Watson
                                                    </a>
                                                </h6>
                                                <p className="text-500 fs--2 mb-0">Admin</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center position-relative mb-3">
                                            <div className="avatar avatar-2xl status-online">
                                                <img
                                                    className="rounded-circle"
                                                    src="../assets/img/team/2.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex-1 ms-3">
                                                <h6 className="mb-0 fw-semi-bold">
                                                    <a
                                                        className="stretched-link text-900"
                                                        href="../pages/user/profile.html"
                                                    >
                                                        Antony Hopkins
                                                    </a>
                                                </h6>
                                                <p className="text-500 fs--2 mb-0">Moderator</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center position-relative mb-3">
                                            <div className="avatar avatar-2xl status-away">
                                                <img
                                                    className="rounded-circle"
                                                    src="../assets/img/team/3.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex-1 ms-3">
                                                <h6 className="mb-0 fw-semi-bold">
                                                    <a
                                                        className="stretched-link text-900"
                                                        href="../pages/user/profile.html"
                                                    >
                                                        Anna Karinina
                                                    </a>
                                                </h6>
                                                <p className="text-500 fs--2 mb-0">Editor</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center position-relative mb-3">
                                            <div className="avatar avatar-2xl status-offline">
                                                <img
                                                    className="rounded-circle"
                                                    src="../assets/img/team/4.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex-1 ms-3">
                                                <h6 className="mb-0 fw-semi-bold">
                                                    <a
                                                        className="stretched-link text-900"
                                                        href="../pages/user/profile.html"
                                                    >
                                                        John Lee
                                                    </a>
                                                </h6>
                                                <p className="text-500 fs--2 mb-0">Admin</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center position-relative mb-3">
                                            <div className="avatar avatar-2xl status-offline">
                                                <img
                                                    className="rounded-circle"
                                                    src="../assets/img/team/5.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex-1 ms-3">
                                                <h6 className="mb-0 fw-semi-bold">
                                                    <a
                                                        className="stretched-link text-900"
                                                        href="../pages/user/profile.html"
                                                    >
                                                        Rowen Atkinson
                                                    </a>
                                                </h6>
                                                <p className="text-500 fs--2 mb-0">Editor</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center position-relative mb-3">
                                            <div className="avatar avatar-2xl status-offline">
                                                <img
                                                    className="rounded-circle"
                                                    src="../assets/img/team/6.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex-1 ms-3">
                                                <h6 className="mb-0 fw-semi-bold">
                                                    <a
                                                        className="stretched-link text-900"
                                                        href="../pages/user/profile.html"
                                                    >
                                                        Bucky Robert
                                                    </a>
                                                </h6>
                                                <p className="text-500 fs--2 mb-0">Editor</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center position-relative false">
                                            <div className="avatar avatar-2xl status-offline">
                                                <img
                                                    className="rounded-circle"
                                                    src="../assets/img/team/7.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex-1 ms-3">
                                                <h6 className="mb-0 fw-semi-bold">
                                                    <a
                                                        className="stretched-link text-900"
                                                        href="../pages/user/profile.html"
                                                    >
                                                        Tom Hanks
                                                    </a>
                                                </h6>
                                                <p className="text-500 fs--2 mb-0">Editor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer bg-light p-0">
                                        <a
                                            className="btn btn-sm btn-link d-block w-100 py-2"
                                            href="../app/social/followers.html"
                                        >
                                            All active users
                                            <span className="fas fa-chevron-right ms-1 fs--2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <div className="row justify-content-between gx-0">
                                            <div className="col-auto">
                                                <h1 className="fs-0 text-900">Gross revenue</h1>
                                                <div className="d-flex">
                                                    <h4 className="text-primary mb-0">$165.50</h4>
                                                    <div className="ms-3">
                                                        <span className="badge rounded-pill badge-soft-primary">
                                                            <span className="fas fa-caret-up" /> 5%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <select
                                                    className="form-select form-select-sm pe-4"
                                                    id="select-gross-revenue-month"
                                                >
                                                    <option value={0}>Jan</option>
                                                    <option value={1}>Feb</option>
                                                    <option value={2}>Mar</option>
                                                    <option value={3}>Apr</option>
                                                    <option value={4}>May</option>
                                                    <option value={5}>Jun</option>
                                                    <option value={6}>Jul</option>
                                                    <option value={7}>Aug</option>
                                                    <option value={8}>Sep</option>
                                                    <option value={9}>Oct</option>
                                                    <option value={10}>Nov</option>
                                                    <option value={11}>Dec</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body pt-0 pb-3 h-100">
                                        <div className="mx-ncard">
                                            <table className="table table-borderless font-sans-serif fw-medium fs--1">
                                                <tbody>
                                                    <tr>
                                                        <td className="pb-2 pt-0">Point of sale</td>
                                                        <td
                                                            className="pb-2 pt-0 text-end"
                                                            style={{ width: "20%" }}
                                                        >
                                                            $791.64
                                                        </td>
                                                        <td
                                                            className="pb-2 pt-0 text-end text-700"
                                                            style={{ maxWidth: "20%" }}
                                                        >
                                                            <span className="me-1 fas fa-long-arrow-alt-down text-danger" />
                                                            13%
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pb-2 pt-0">Online Store</td>
                                                        <td
                                                            className="pb-2 pt-0 text-end"
                                                            style={{ width: "20%" }}
                                                        >
                                                            $113.86
                                                        </td>
                                                        <td
                                                            className="pb-2 pt-0 text-end text-700"
                                                            style={{ maxWidth: "20%" }}
                                                        >
                                                            <span className="me-1 fas fa-long-arrow-alt-up text-success" />
                                                            178%
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pb-2 pt-0">Online Store</td>
                                                        <td
                                                            className="pb-2 pt-0 text-end"
                                                            style={{ width: "20%" }}
                                                        >
                                                            $0.00
                                                        </td>
                                                        <td
                                                            className="pb-2 pt-0 text-end text-700"
                                                            style={{ maxWidth: "20%" }}
                                                        >
                                                            <span className="me-1 false text-success" />-
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            {/* Find the JS file for the following calendar at: src/js/charts/echarts/gross-revenue.js*/}
                                            {/* If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js*/}
                                            <div
                                                className="echart-gross-revenue-chart px-3 h-100"
                                                data-echart-responsive="true"
                                                data-options='{"target":"gross-revenue-footer","monthSelect":"select-gross-revenue-month","optionOne":"currentMonth","optionTwo":"prevMonth"}'
                                            />
                                        </div>
                                    </div>
                                    <div className="card-footer border-top py-2 d-flex flex-between-center">
                                        <div className="d-flex" id="gross-revenue-footer">
                                            <div
                                                className="btn btn-sm btn-text d-flex align-items-center p-0 shadow-none"
                                                id="currentMonth"
                                                data-month="current"
                                            >
                                                <span className="fas fa-circle text-primary fs--2 me-1" />
                                                <span className="text">Jan</span>
                                            </div>
                                            <div
                                                className="btn btn-sm btn-text d-flex align-items-center p-0 shadow-none ms-2"
                                                id="prevMonth"
                                                data-month="prev"
                                            >
                                                <span className="fas fa-circle text-300 fs--2 me-1" />
                                                <span className="text">Dec</span>
                                            </div>
                                        </div>
                                        <a className="btn btn-link btn-sm px-0" href="#!">
                                            View report
                                            <span className="fas fa-chevron-right ms-1 fs--2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card overflow-hidden">
                            <div className="card-header d-flex flex-between-center bg-light py-2">
                                <h6 className="mb-0">Transaction Summary</h6>
                                <div className="dropdown font-sans-serif btn-reveal-trigger">
                                    <button
                                        className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
                                        type="button"
                                        id="dropdown-transaction-summary"
                                        data-bs-toggle="dropdown"
                                        data-boundary="viewport"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <span className="fas fa-ellipsis-h fs--2" />
                                    </button>
                                    <div
                                        className="dropdown-menu dropdown-menu-end border py-2"
                                        aria-labelledby="dropdown-transaction-summary"
                                    >
                                        <a className="dropdown-item" href="#!">
                                            View
                                        </a>
                                        <a className="dropdown-item" href="#!">
                                            Export
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item text-danger" href="#!">
                                            Remove
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body py-0">
                                <div className="table-responsive scrollbar">
                                    <table className="table table-dashboard mb-0 fs--1">
                                        <tbody>
                                            <tr>
                                                <td className="align-middle ps-0 text-nowrap">
                                                    <div className="d-flex position-relative align-items-center">
                                                        <img
                                                            className="d-flex align-self-center me-2"
                                                            src="../assets/img/logos/atlassian.png"
                                                            alt=""
                                                            width={30}
                                                        />
                                                        <div className="flex-1">
                                                            <a className="stretched-link" href="#!">
                                                                <h6 className="mb-0">Atlassian</h6>
                                                            </a>
                                                            <p className="mb-0">Subscription payment</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="align-middle px-4" style={{ width: "1%" }}>
                                                    <span className="badge fs--1 w-100 badge-soft-success">
                                                        Completed
                                                    </span>
                                                </td>
                                                <td
                                                    className="align-middle px-4 text-end text-nowrap"
                                                    style={{ width: "1%" }}
                                                >
                                                    <h6 className="mb-0">$290.00 USD</h6>
                                                    <p className="fs--2 mb-0">15 May, 2020</p>
                                                </td>
                                                <td
                                                    className="align-middle ps-4 pe-1"
                                                    style={{ width: 130, minWidth: 130 }}
                                                >
                                                    <select className="form-select form-select-sm px-2 bg-transparent">
                                                        <option>Action</option>
                                                        <option>Archive</option>
                                                        <option>Delete</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle ps-0 text-nowrap">
                                                    <div className="d-flex position-relative align-items-center">
                                                        <img
                                                            className="d-flex align-self-center me-2"
                                                            src="../assets/img/logos/hubstaff.png"
                                                            alt=""
                                                            width={30}
                                                        />
                                                        <div className="flex-1">
                                                            <a className="stretched-link" href="#!">
                                                                <h6 className="mb-0">Hubstaff</h6>
                                                            </a>
                                                            <p className="mb-0">Subscription payment</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="align-middle px-4" style={{ width: "1%" }}>
                                                    <span className="badge fs--1 w-100 badge-soft-warning">
                                                        Pending
                                                    </span>
                                                </td>
                                                <td
                                                    className="align-middle px-4 text-end text-nowrap"
                                                    style={{ width: "1%" }}
                                                >
                                                    <h6 className="mb-0">$200.00 USD</h6>
                                                    <p className="fs--2 mb-0">1 May, 2020</p>
                                                </td>
                                                <td
                                                    className="align-middle ps-4 pe-1"
                                                    style={{ width: 130, minWidth: 130 }}
                                                >
                                                    <select className="form-select form-select-sm px-2 bg-transparent">
                                                        <option>Action</option>
                                                        <option>Archive</option>
                                                        <option>Delete</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle ps-0 text-nowrap">
                                                    <div className="d-flex position-relative align-items-center">
                                                        <img
                                                            className="d-flex align-self-center me-2"
                                                            src="../assets/img/logos/bs-5.png"
                                                            alt=""
                                                            width={30}
                                                        />
                                                        <div className="flex-1">
                                                            <a className="stretched-link" href="#!">
                                                                <h6 className="mb-0">Bootstrap</h6>
                                                            </a>
                                                            <p className="mb-0">Subscription payment</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="align-middle px-4" style={{ width: "1%" }}>
                                                    <span className="badge fs--1 w-100 badge-soft-warning">
                                                        Pending
                                                    </span>
                                                </td>
                                                <td
                                                    className="align-middle px-4 text-end text-nowrap"
                                                    style={{ width: "1%" }}
                                                >
                                                    <h6 className="mb-0">$300.00 USD</h6>
                                                    <p className="fs--2 mb-0">26 April, 2020</p>
                                                </td>
                                                <td
                                                    className="align-middle ps-4 pe-1"
                                                    style={{ width: 130, minWidth: 130 }}
                                                >
                                                    <select className="form-select form-select-sm px-2 bg-transparent">
                                                        <option>Action</option>
                                                        <option>Archive</option>
                                                        <option>Delete</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle ps-0 text-nowrap">
                                                    <div className="d-flex position-relative align-items-center">
                                                        <img
                                                            className="d-flex align-self-center me-2"
                                                            src="../assets/img/logos/asana-logo.png"
                                                            alt=""
                                                            width={30}
                                                        />
                                                        <div className="flex-1">
                                                            <a className="stretched-link" href="#!">
                                                                <h6 className="mb-0">Asana</h6>
                                                            </a>
                                                            <p className="mb-0">Subscription payment</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="align-middle px-4" style={{ width: "1%" }}>
                                                    <span className="badge fs--1 w-100 badge-soft-warning">
                                                        Pending
                                                    </span>
                                                </td>
                                                <td
                                                    className="align-middle px-4 text-end text-nowrap"
                                                    style={{ width: "1%" }}
                                                >
                                                    <h6 className="mb-0">$320.00 USD</h6>
                                                    <p className="fs--2 mb-0">14 April, 2020</p>
                                                </td>
                                                <td
                                                    className="align-middle ps-4 pe-1"
                                                    style={{ width: 130, minWidth: 130 }}
                                                >
                                                    <select className="form-select form-select-sm px-2 bg-transparent">
                                                        <option>Action</option>
                                                        <option>Archive</option>
                                                        <option>Delete</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle ps-0 text-nowrap">
                                                    <div className="d-flex position-relative align-items-center">
                                                        <img
                                                            className="d-flex align-self-center me-2"
                                                            src="../assets/img/logos/adobe-creative-cloud.png"
                                                            alt=""
                                                            width={30}
                                                        />
                                                        <div className="flex-1">
                                                            <a className="stretched-link" href="#!">
                                                                <h6 className="mb-0">Adobe Creative Cloud</h6>
                                                            </a>
                                                            <p className="mb-0">Subscription payment</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="align-middle px-4" style={{ width: "1%" }}>
                                                    <span className="badge fs--1 w-100 badge-soft-warning">
                                                        Pending
                                                    </span>
                                                </td>
                                                <td
                                                    className="align-middle px-4 text-end text-nowrap"
                                                    style={{ width: "1%" }}
                                                >
                                                    <h6 className="mb-0">$150.00 USD</h6>
                                                    <p className="fs--2 mb-0">11 April, 2020</p>
                                                </td>
                                                <td
                                                    className="align-middle ps-4 pe-1"
                                                    style={{ width: 130, minWidth: 130 }}
                                                >
                                                    <select className="form-select form-select-sm px-2 bg-transparent">
                                                        <option>Action</option>
                                                        <option>Archive</option>
                                                        <option>Delete</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle ps-0 text-nowrap">
                                                    <div className="d-flex position-relative align-items-center">
                                                        <img
                                                            className="d-flex align-self-center me-2"
                                                            src="../assets/img/logos/coursera.png"
                                                            alt=""
                                                            width={30}
                                                        />
                                                        <div className="flex-1">
                                                            <a className="stretched-link" href="#!">
                                                                <h6 className="mb-0">Coursera</h6>
                                                            </a>
                                                            <p className="mb-0">Subscription payment</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="align-middle px-4" style={{ width: "1%" }}>
                                                    <span className="badge fs--1 w-100 badge-soft-warning">
                                                        Pending
                                                    </span>
                                                </td>
                                                <td
                                                    className="align-middle px-4 text-end text-nowrap"
                                                    style={{ width: "1%" }}
                                                >
                                                    <h6 className="mb-0">$280.00 USD</h6>
                                                    <p className="fs--2 mb-0">26 March, 2020</p>
                                                </td>
                                                <td
                                                    className="align-middle ps-4 pe-1"
                                                    style={{ width: 130, minWidth: 130 }}
                                                >
                                                    <select className="form-select form-select-sm px-2 bg-transparent">
                                                        <option>Action</option>
                                                        <option>Archive</option>
                                                        <option>Delete</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr className="border-0">
                                                <td className="align-middle ps-0 text-nowrap border-0">
                                                    <div className="d-flex position-relative align-items-center">
                                                        <img
                                                            className="d-flex align-self-center me-2"
                                                            src="../assets/img/logos/medium.png"
                                                            alt=""
                                                            width={30}
                                                        />
                                                        <div className="flex-1">
                                                            <a className="stretched-link" href="#!">
                                                                <h6 className="mb-0">Medium</h6>
                                                            </a>
                                                            <p className="mb-0">Subscription payment</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="align-middle px-4 border-0"
                                                    style={{ width: "1%" }}
                                                >
                                                    <span className="badge fs--1 w-100 badge-soft-danger">
                                                        Rejected
                                                    </span>
                                                </td>
                                                <td
                                                    className="align-middle px-4 text-end text-nowrap border-0"
                                                    style={{ width: "1%" }}
                                                >
                                                    <h6 className="mb-0">$290.00 USD</h6>
                                                    <p className="fs--2 mb-0">15 March, 2020</p>
                                                </td>
                                                <td
                                                    className="align-middle ps-4 pe-1 border-0"
                                                    style={{ width: 130, minWidth: 130 }}
                                                >
                                                    <select className="form-select form-select-sm px-2 bg-transparent">
                                                        <option>Action</option>
                                                        <option>Archive</option>
                                                        <option>Delete</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer bg-light py-2">
                                <div className="row flex-between-center">
                                    <div className="col-auto">
                                        <select className="form-select form-select-sm">
                                            <option>Last 7 days</option>
                                            <option>Last Month</option>
                                            <option>Last Year</option>
                                        </select>
                                    </div>
                                    <div className="col-auto">
                                        <a className="btn btn-link btn-sm px-0 fw-medium" href="#!">
                                            View All
                                            <span className="fas fa-chevron-right ms-1 fs--2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </React.Fragment>
    )
}
