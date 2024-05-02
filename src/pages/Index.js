import React, { Fragment, useEffect } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import SwiperCourse from './SwiperCourse';
import TabProfessional from './TabProfessional';

import AOS from "aos";
import "aos/dist/aos.css";

// import 'bootstrap/dist/css/bootstrap.css';

function Index(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <Fragment>
            <Menu />
            
            <section className="full_width sdgl_banner">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="sdgl_ban_content">
                                <div className="sdgl_title mb-0">
                                    <h4>At <span>SDG Learning,</span> We Provide</h4>
                                    <h1>A Chance To <span>Grow</span> <br />In the <span>Career</span> World</h1>
                                    <h3><img src="assets/images/sdgl_class.svg" alt="images" /> with 1,500 live classes every month</h3>
                                </div>

                                <div className="cmn_btn_swap">
                                    <a href="#">Enroll Now
                                        <svg className="btn_body_svg" width="232" height="103" viewBox="0 0 232 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path id="Vector" d="M231.541 88.4671L0 102.911L14.472 0L217.069 10.1126L231.541 88.4671Z" fill="#F79B77"/>
                                        </svg>
                                    </a>

                                    <img src="assets/images/hand_gesture.svg" alt="images" className="hand_anim" />
                                </div>
                            </div>
                        </div>

                        <div className="sdgl_ban_avatar text-lg-end">
                            <img src="assets/images/ban_avatar.svg" alt="images" />
                        </div>
                    </div>
                </div>

                <svg className="banner_svg" width="1833" height="906" viewBox="0 0 1833 906" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FBFBFB">
                        <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M399.663 893.809L234.5 840L170.913 820.653C63.8773 788.086 -6.45774 685.882 1.36044 574.275L41.0869 7.16487C50.0074 -120.178 157.052 -218.254 284.687 -216.028L2085.19 -184.614C2216.08 -182.33 2321 -75.567 2321 55.3492V636.56C2321 799.684 2154.04 909.529 2004.24 844.957C1967.09 828.944 1926.33 823.151 1886.2 828.18L1553.06 869.914C1515.87 874.573 1478.11 870.457 1442.79 857.894L1425.91 851.889C1389.19 838.826 1349.84 834.903 1311.26 840.459L1185.22 858.611C1144.78 864.435 1103.52 859.574 1065.53 844.509C1025.93 828.801 982.79 824.198 940.763 831.196L513.428 902.354C475.371 908.691 436.347 905.76 399.663 893.809Z;

                        M380.831 848.117L224.568 797.212L170.92 780.89C63.8806 748.325 -6.45711 646.119 1.36185 534.509L38.3057 7.16319C47.2268 -120.179 154.27 -218.255 281.905 -216.028L1991.19 -186.208C2122.08 -183.925 2227 -77.161 2227 53.7553V601.96C2227 758.513 2066.76 863.934 1923 801.967C1887.35 786.601 1848.24 781.043 1809.72 785.869L1492.28 825.633C1455.09 830.292 1417.33 826.176 1382.02 813.615L1370.22 809.421C1333.51 796.36 1294.16 792.438 1255.58 797.993L1136.98 815.072C1098.17 820.661 1058.57 815.995 1022.12 801.539C984.11 786.465 942.709 782.048 902.375 788.763L494.587 856.661C456.533 862.997 417.512 860.066 380.831 848.117Z;

                        M375.424 834.93L221.715 784.861L170.927 769.41C63.8842 736.847 -6.45641 634.638 1.36338 523.026L37.5059 7.16147C46.4277 -120.18 153.471 -218.255 281.105 -216.028L1964.19 -186.668C2095.08 -184.385 2200 -77.6214 2200 53.2951V591.954C2200 746.62 2041.7 850.773 1899.66 789.558C1864.44 774.379 1825.81 768.888 1787.75 773.655L1474.82 812.852C1437.63 817.51 1399.87 813.395 1364.56 800.836L1354.23 797.16C1317.51 784.101 1278.17 780.179 1239.59 785.733L1123.13 802.504C1084.78 808.025 1045.66 803.416 1009.65 789.135C972.098 774.244 931.196 769.881 891.35 776.515L489.172 843.473C451.121 849.808 412.103 846.877 375.424 834.93Z;

                        M399.663 893.809L234.5 840L170.913 820.653C63.8773 788.086 -6.45774 685.882 1.36044 574.275L41.0869 7.16487C50.0074 -120.178 157.052 -218.254 284.687 -216.028L2085.19 -184.614C2216.08 -182.33 2321 -75.567 2321 55.3492V636.56C2321 799.684 2154.04 909.529 2004.24 844.957C1967.09 828.944 1926.33 823.151 1886.2 828.18L1553.06 869.914C1515.87 874.573 1478.11 870.457 1442.79 857.894L1425.91 851.889C1389.19 838.826 1349.84 834.903 1311.26 840.459L1185.22 858.611C1144.78 864.435 1103.52 859.574 1065.53 844.509C1025.93 828.801 982.79 824.198 940.763 831.196L513.428 902.354C475.371 908.691 436.347 905.76 399.663 893.809Z;"></animate>
                    </path>
                </svg>
            </section>

            <section className="full_width section-find-courses cmn_padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="heading-secondary"><span className="color-thm-text">Find Courses</span> Which Suites Your Need</h2>
                            <p className="paragraph">Answer few quick questions to get recommendations that match your interests.</p>
                        </div>
                    </div>

                    <SwiperCourse />

                    <svg className="slider_border inner-dashed-border" width="1355" height="390" viewBox="0 0 1355 390" fill="none" xmlns="http://www.w3.org/2000/svg" xmlthrowIfNamespace="false" preserveAspectRatio="none">
                        <rect x="0.5" y="0.5" width="1354" height="389" rx="93.5" stroke="black" stroke-dasharray="16 16"/>
                    </svg>
                </div>
            </section>

            <section className="full_width sdgl_course_tab cmn_padding pt-0">
                <div className="container">
                    <div className="sdgl_title text-center">
                        <h2>Take A Look At <br />Our Globally Certified Professional Level Courses</h2>
                    </div>

                    <TabProfessional />
                </div>
            </section>

            <section className="full_width section-card-stack">
                <div className="sliding-card">
                    <div className="sc_content">
                        <div className="sc_content_inner" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                            <div className="sdgl_title text-white">
                                <h2>Lorem Ipsum is <br />simply dummy text</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <img className="asp_logos" src="assets/images/asp_logos.svg" alt="images" />
                            <div className="cmn_btn_swap">
                                <a href="#">Enroll Now
                                    <svg className="btn_body_svg" width="232" height="103" viewBox="0 0 232 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path id="Vector" d="M231.541 88.4671L0 102.911L14.472 0L217.069 10.1126L231.541 88.4671Z" fill="#F79B77"></path>
                                    </svg>
                                </a>

                                <img src="assets/images/hand_gesture.svg" alt="images" className="hand_anim" />
                            </div>
                        </div>
                    </div>

                    <div className="sc_image position-relative" data-aos="fade-down-left" data-aos-duration="1000" data-aos-once="true">
                        <img src="assets/images/card_1.webp" alt="images" />
                    </div>

                    <div className="rounded_goal"><p>“Your <br /><span>Aspiration</span> <br />is <span>our goal</span>”</p></div>
                </div>

                <div className="sliding-card">
                    <div className="sc_content">
                        <div className="sc_content_inner" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                            <div className="sdgl_title text-white">
                                <h2>Lorem Ipsum is <br />simply dummy text</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <img className="asp_logos" src="assets/images/asp_logos.svg" alt="images" />
                            <div className="cmn_btn_swap">
                                <a href="#">Enroll Now
                                    <svg className="btn_body_svg" width="232" height="103" viewBox="0 0 232 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path id="Vector" d="M231.541 88.4671L0 102.911L14.472 0L217.069 10.1126L231.541 88.4671Z" fill="#F79B77"></path>
                                    </svg>
                                </a>

                                <img src="assets/images/hand_gesture.svg" alt="images" className="hand_anim" />
                            </div>
                        </div>
                    </div>

                    <div className="sc_image position-relative" data-aos="fade-down-left" data-aos-duration="1000" data-aos-once="true">
                        <img src="assets/images/card_1.webp" alt="images" />
                    </div>

                    <div className="rounded_goal"><p>“Your <br /><span>Aspiration</span> <br />is <span>our goal</span>”</p></div>
                </div>

                <div className="sliding-card">
                    <div className="sc_content">
                        <div className="sc_content_inner" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                            <div className="sdgl_title text-white">
                                <h2>Lorem Ipsum is <br />simply dummy text</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <img className="asp_logos" src="assets/images/asp_logos.svg" alt="images" />
                            <div className="cmn_btn_swap">
                                <a href="#">Enroll Now
                                    <svg className="btn_body_svg" width="232" height="103" viewBox="0 0 232 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path id="Vector" d="M231.541 88.4671L0 102.911L14.472 0L217.069 10.1126L231.541 88.4671Z" fill="#F79B77"></path>
                                    </svg>
                                </a>

                                <img src="assets/images/hand_gesture.svg" alt="images" className="hand_anim" />
                            </div>
                        </div>
                    </div>

                    <div className="sc_image position-relative" data-aos="fade-down-left" data-aos-duration="1000" data-aos-once="true">
                        <img src="assets/images/card_1.webp" alt="images" />
                    </div>

                    <div className="rounded_goal"><p>“Your <br /><span>Aspiration</span> <br />is <span>our goal</span>”</p></div>
                </div>
            </section>

            <section className="full_width section-enroll-now cmn_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 enroll-form-wrapper">
                            <div className="">
                                <div className="sdgl_title">
                                    <h2>Enquire/ Enroll Now</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>

                                <div className="enroll-now-form">
                                    <form action="">
                                        <div className="row">
                                            <div className="col">
                                                <label for="name" className="if-required">Name</label>
                                                <input type="text" name="name" id="name" placeholder="Enter Your Name" required autocomplete="name" className="w-100" />
                                            </div>
                                        </div>
                                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                                            <div className="col">
                                                <label for="email" className="if-required">Email</label>
                                                <input type="text" name="email" id="email" placeholder="Enter Your Email" required autocomplete="email" className="w-100" />
                                            </div>
                                            <div className="col">
                                                <label for="name" className="if-required">Mobile</label>
                                                <input type="tel" name="moblie" id="mobile" placeholder="Type your mobile number" required autocomplete="tel" className="w-100" />
                                            </div>
                                        </div>
                                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                                            <div className="col">
                                                <label for="request-type" className="">Type Of Request</label>
                                                <select name="request-type" id="request-type" className="w-100" >
                                                    <option value="1">General Enquiry</option>
                                                    <option value="2">Course related Enquiry</option>
                                                    <option value="3">Subscription Enquiry</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <label for="course-selection" className="">Course Selection</label>
                                                <select name="course-selection" id="course-selection" className="w-100" >
                                                    <option value="1">Website Design and Development</option>
                                                    <option value="2">React</option>
                                                    <option value="3">Node</option>
                                                    <option value="4">AI/ML Development</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row no-mb">
                                            <div className="col-6">
                                                <div className="enroll-form-verify">
                                                    <input type="text" name="_" value="7+3" readonly="true" className="w-50 text-center fs-5" />
                                                    <span>=</span>
                                                    <input type="text" name="are-u-robot" id="are-u-robot" className="w-50" required />                                      
                                                </div>
                                            </div>                           
                                        </div>
                                        <div className="row">
                                            <div className="col-3 d-flex justify-content-center">                          
                                                    <button className="renew-are-u-robot d-block" type="button"><i className="fa-solid fa-rotate"></i> Refresh</button>
                                            </div>                           
                                        </div>
                                        <div className="row">
                                            <div className="col"><button type="submit" className="w-100">Submit</button></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <img src="assets/images/confetti.svg" alt="Confetti" className="graphics" />
                        </div>

                        <div className="col-md-4 image-wrapper d-flex align-items-center p-5">
                            <div className="">
                                <img src="assets/images/enroll-now.webp" alt="Enroll now" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="full_width section-awards cmn_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="awards-wrapper">
                                <span>Awards<br />and Recognition</span>
                                <div className="swiper awards-carousel">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <img src="assets/images/certificate.svg" alt="Certificate" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="assets/images/certificate.svg" alt="Certificate" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="assets/images/certificate.svg" alt="Certificate" />
                                        </div>
                                    </div>
                                    <div className="swiper-button-next"><i className="fa-solid fa-arrow-right"></i></div>
                                    <div className="swiper-button-prev"><i className="fa-solid fa-arrow-left"></i></div>
                                </div>

                                <svg className="slider_border inner-dashed-border" width="551" height="620" viewBox="0 0 551 620" fill="none" xmlns="http://www.w3.org/2000/svg" xmlthrowIfNamespace="false" preserveAspectRatio="none">
                                    <path d="M544.13 1H550.13V7" stroke="black" stroke-miterlimit="10"/>
                                    <path d="M550.13 18.94V530.6C550.13 579.42 510.55 619 461.73 619H89.4C40.58 619 1 579.42 1 530.6V89.4C1 40.58 40.58 1 89.4 1H538.16" stroke="black" stroke-miterlimit="10" stroke-dasharray="11.94 11.94"/>
                                </svg>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="awards-content-wrapper">
                                <div className="graphics-inverted-commas"></div>
                                <div className="heading-wrapper">
                                    <h2><span className="color-thm-text">Let's See</span></h2>
                                    <span className="sub-heading">What Our Alumni’s Say</span>
                                    <img src="assets/images/closing-inverted-commas.svg" alt="Graphics" />
                                </div>
                                <div className="swiper alumni-carousel">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                            <div className="author-profile-wrapper">
                                                <div className="profile-image-wrapper">
                                                    <img src="assets/images/person-profile.svg" alt="Default profile icon" />
                                                </div>
                                                <div className="profile-wrapper">
                                                    <span className="author">Ravi K. Jain</span>
                                                    <span className="designation">Jr. Web Developer</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                            <div className="author-profile-wrapper">
                                                <div className="profile-image-wrapper">
                                                    <img src="assets/images/person-profile.svg" alt="Default profile icon" />
                                                </div>
                                                <div className="profile-wrapper">
                                                    <span className="author">Ravi K. Jain</span>
                                                    <span className="designation">Jr. Web Developer</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                            <div className="author-profile-wrapper">
                                                <div className="profile-image-wrapper">
                                                    <img src="assets/images/person-profile.svg" alt="Default profile icon" />
                                                </div>
                                                <div className="profile-wrapper">
                                                    <span className="author">Ravi K. Jain</span>
                                                    <span className="designation">Jr. Web Developer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-button-next"><i className="fa-solid fa-arrow-right"></i></div>
                                    <div className="swiper-button-prev"><i className="fa-solid fa-arrow-left"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </Fragment>
    )
}

export default Index;