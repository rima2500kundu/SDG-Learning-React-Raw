import React, { Fragment } from 'react';

function Footer(){
    return(
        <Fragment>
            <footer className="full_width sdgl_footer position-relative">
                <svg width="100%" height="240" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-1300 ease-in-out delay-150" xmlthrowIfNamespace="false" preserveAspectRatio="none">
                    <path d="M 0,400 L 0,150 C 83.54517347990381,107.63792511164547 167.09034695980762,65.27585022329096 241,91 C 314.9096530401924,116.72414977670904 379.18378564067336,210.53452421848164 440,214 C 500.81621435932664,217.46547578151836 558.1745104774992,130.58605290278254 616,132 C 673.8254895225008,133.41394709721746 732.11817244933,223.1212641703882 800,216 C 867.88182755067,208.8787358296118 945.3527997251804,104.9288904156647 1022,102 C 1098.6472002748196,99.0711095843353 1174.4706286499484,197.16317416695296 1244,222 C 1313.5293713500516,246.83682583304704 1376.7646856750257,198.41841291652352 1440,150 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#091B3C" fill-opacity="1" className="transition-all duration-1300 ease-in-out delay-150 path-0"></path>
                </svg>
                
                <div className="ftr_main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 foot_1 pe-lg-5">
                                <a href="#"><img src="assets/images/sdgl_logo_white.svg" alt="images" /></a>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>

                            <div className="col-lg-3">
                                <h3>QUICK LINKS</h3>
                                <ul>
                                    <li><a href="#">Find Your Need</a></li>
                                    <li><a href="#">Find Courses</a></li>
                                    <li><a href="#">Why Us?</a></li>
                                    <li><a href="#">Enquire Now</a></li>
                                    <li><a href="#">Testimonials</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3">
                                <h3>CONTACT INFO</h3>
                                <p>Lorem Ipsum is simply dummy textLorem Ipsum is simplyLorem Ipsum</p>
                                    <ul>
                                        <li><a href="tel: +11234567890">1234567890</a></li>
                                        <li><a href="mailto: info@samplemail.com">info@samplemail.com</a></li>
                                    </ul>
                                
                                    <div className="cmn_btn_sec">
                                        <a className="btn_fill" href="#" target="_blank">Get Directions</a>
                                    </div>
                            </div>

                            <div className="col-lg-2">
                                <h3>SOCIAL LINKS</h3>
                                <ul>
                                    <li><a href="#" target="_blank"><img src="assets/images/social_insta.svg" alt="images" /></a></li>
                                    <li><a href="#" target="_blank"><img src="assets/images/social_fb.svg" alt="images" /></a></li>
                                    <li><a href="#" target="_blank"><img src="assets/images/social_x.svg" alt="images" /></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="sdgl_copyright">
                            <div className="row">
                                <div className="col-sm-6"><p>Copyright © 2024 Sourcedeskglobal. All Right Reserved.</p></div>
                                <div className="col-sm-6 text-lg-end"><p>Powered by <a href="#" target="_blank">G Web Pro®</a> - Digital Marketing & SEO Services in Toronto.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer;