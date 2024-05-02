import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
register();

const SwiperCourse = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      // These are new...
      injectStyles: [
        `.swiper-button-next,
          .swiper-button-prev {
            background-color: white;
            padding: 8px 16px;
            border-radius: 100%;
            border: 1px solid black;
          }
          .swiper-button- svg{width: 30px; height: 30px;}
          `,
      ],

    //   breakpoints: {
    //     1181: {
    //         slidesPerView: 4
    //     },
    //     991: {
    //         slidesPerView: 2
    //     },
    //     767: {
    //         slidesPerView: 1
    //     }
    // },
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <swiper-container ref={swiperRef} init="false"> 
        <swiper-slide className="blue-slide">
          <div className="swiper-slide slide-form">
            <div className="d-flex align-items-start">
                <div className="question-no"><span>Question 1/5</span><span>1</span></div>
                <div className="question-wrapper">
                    <p className="">What is your current employment status?</p>
                    <div className="options d-flex ms-2">
                        <input type="radio" name="cur-emp-stats" id="corporate-employee" />
                        <label for="corporate-employee"><span className="radio__btn"></span>Corporate Employee</label>
                        <input type="radio" name="cur-emp-stats" id="freelancer" />
                        <label for="freelancer"><span className="radio__btn"></span>Freelancer</label>
                        <input type="radio" name="cur-emp-stats" id="student" />
                        <label for="student"><span className="radio__btn"></span>Student</label>
                    </div>                                    
                </div>
            </div>
            <div className="">
                <img src="assets/images/course_1.svg" alt="images" />
            </div>
          </div>
        </swiper-slide>

        <swiper-slide className="yellow-slide">
          <div className="swiper-slide slide-form">
            <div className="d-flex align-items-start">
                <div className="question-no"><span>Question 2/5</span><span>1</span></div>
                <div className="question-wrapper">
                    <p className="">What is your current employment status?</p>
                    <div className="options d-flex ms-2">
                        <input type="radio" name="cur-emp-stats" id="corporate-employee" />
                        <label for="corporate-employee"><span className="radio__btn"></span>Corporate Employee</label>
                        <input type="radio" name="cur-emp-stats" id="freelancer" />
                        <label for="freelancer"><span className="radio__btn"></span>Freelancer</label>
                        <input type="radio" name="cur-emp-stats" id="student" />
                        <label for="student"><span className="radio__btn"></span>Student</label>
                    </div>                                    
                </div>
            </div>
            <div className="">
                <img src="assets/images/course_1.svg" alt="images" />
            </div>
          </div>
        </swiper-slide>

        <swiper-slide className="green-slide">
          <div className="swiper-slide slide-form">
            <div className="d-flex align-items-start">
                <div className="question-no"><span>Question 3/5</span><span>1</span></div>
                <div className="question-wrapper">
                    <p className="">What is your current employment status?</p>
                    <div className="options d-flex ms-2">
                        <input type="radio" name="cur-emp-stats" id="corporate-employee" />
                        <label for="corporate-employee"><span className="radio__btn"></span>Corporate Employee</label>
                        <input type="radio" name="cur-emp-stats" id="freelancer" />
                        <label for="freelancer"><span className="radio__btn"></span>Freelancer</label>
                        <input type="radio" name="cur-emp-stats" id="student" />
                        <label for="student"><span className="radio__btn"></span>Student</label>
                    </div>                                    
                </div>
            </div>
            <div className="">
                <img src="assets/images/course_1.svg" alt="images" />
            </div>
          </div>
        </swiper-slide>
    </swiper-container>
  );
};

export default SwiperCourse;