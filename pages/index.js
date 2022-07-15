import { useState, useEffect, useRef } from "react";
import axios from "axios";
import CourseCard from "../component/cards/CourseCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LeftCircleFilled, LeftOutlined, RightCircleFilled, RightOutlined } from "@ant-design/icons";

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`);
  return {
    props: {
      courses: data,
    },
  };
}

const Index = ({ courses }) => {
  const unique = Array.from(new Set(courses.map((i) => i.type)));
  const slickSlider = useRef(null);
  const settings = {
    dots: false,
    arrows:true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  // const handlePrevCarousel = () => {
  //   console.log('handlePrevCarousel')
  //   slickSlider.current.slickPrev();
  // };
  // const handleNextCarousel = () => {
  //   console.log('handleNextCarousel')
  //   slickSlider.current.slickNext();
  //   //(activeIndex + 1);
  // };
  


  return (
    <>
      {/* <h1 className = "jumbotron text-center bg-primary square">Learning Management System</h1> */}
      <div className="container-fluid " style={{ padding: "100px 100px" }}>
        <div>
          {/* {courses.map((course) => (
            <div key={course._id} className="col-md-3">
              <CourseCard course={course} />
            </div>
          ))} */}
          {unique.map((item, x) => (
            <div key={x}>
              <h3 className="p-2">{item}</h3>
              <div style={{position:'relative'}}>
                <div>
                <Slider ref={slickSlider} {...settings}>
                  {courses
                    .filter((i) => i.type === item)
                    .map((course) => (
                      <div key={course._id} className='p-2'>
                        <CourseCard course={course} />
                      </div>
                    ))}
                </Slider>
                </div>
                {/* <div  onClick={handlePrevCarousel}>
                <LeftCircleFilled className="left_arrow" />
                </div>
                <div  onClick={handleNextCarousel}>
                <RightCircleFilled className="right_arrow" />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Index;
