import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

function Menu(){
    return(
        <Fragment>
            <header className="sdgl_header sticky">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-7 col-sm-5 col-md-5 col-lg-4 col-xl-5 head_logo">
                            <Link to='/'><img src="assets/images/sdgl_logo.svg" alt="images" /></Link>
                            {/* <a href="#">
                                <img src="assets/images/sdgl_logo.svg" alt="images" />
                            </a> */}
                        </div>

                        <div className="col-5 col-sm-7 col-md-7 col-lg-8 col-xl-7 sdgl_nav">
                            <div className="menu-open"><span className="open"><i className="fa-solid fa-bars"></i></span></div>
                            <div className="ozmenu mt-4">
                                <div className="menu-close"><span className="close"></span></div>
                                <ul className="ozmenu-nav">
                                    <li className="item dropdownitem">
                                        <Link to='javascript:void(0)' className="nav-dropdown">Courses</Link>

                                        {/* <a href="javascript:void(0)" className="nav-dropdown">Courses</a> */}
                                        <div className="dropdown">
                                            <ul>
                                                <li className="item"><a href="#">Software</a></li>
                                                <li className="item"><a href="#">Server Maintenance</a></li>
                                                <li className="item dropdownitem">
                                                <a href="javascript:void(0)" className="nav-dropdown">Web Hosting</a>
                                                <div className="dropdown">
                                                    <ul>
                                                    <li className="item"><a href="#">Linux Hosting</a></li>
                                                    <li className="item"><a href="#">Windows Hosting</a></li>
                                                    </ul>
                                                </div>
                                                </li>
                                                <li className="item"><a href="#">Graphic Design</a></li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="item"><a href="#">Why Choose Us?</a></li>
                                    <li className="item"><a href="#">Testimonials</a></li>
                                    <li className="item"><a href="#">Enroll Now</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Menu;