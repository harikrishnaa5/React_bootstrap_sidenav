import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import "./sideNav.css";

const SideNav = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh-100">
                    <div className="mt-3">
                        <a
                            className="text-decoration-none text-white ms-4 d-flex align-items-center d-none d-sm-inline"
                            role="button"
                        >
                            <span className="fs-4">side menu</span>
                        </a>
                        <hr className="text-white d-none d-sm-block" />
                        <ul className="nav nav-pills flex-column" id="parentM">
                            <li className="nav-item my-1">
                                <a href="#" className="nav-link">
                                    <i className="bi bi-speedometer2"></i>
                                    <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-item my-1">
                                <a href="#submenu" className="nav-link" data-bs-toggle="collapse">
                                    <i className="bi bi-grid"></i>
                                    <span className="ms-2 d-none d-sm-inline">Products</span>
                                    <i className="bi bi-arrow-down-short ms-3"></i>
                                </a>
                                <ul className="nav collapse ms-1 flex-column" id="submenu" data-bs-parent="#parentM">
                                    <li className="nav-item ">
                                        <a className="nav-link" href="">
                                            Item 1
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">
                                            Item 2
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">
                                            Item 3
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown open">
                        <a
                            className="btn border-none dropdown-toggle text-white"
                            type="button"
                            id="triggerId"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-person fs-4"></i>
                            <span className="fs-4 ms-3  d-none d-sm-inline">Jon Doe</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="triggerId">
                            <a className="dropdown-item" href="#">
                                Profile
                            </a>
                            <a className="dropdown-item" href="#">
                                Settings
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideNav;
