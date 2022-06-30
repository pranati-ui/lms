import { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "../component/cards/CourseCard";

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`);
  return {
    props: {
      courses: data,
    },
  };
}

const Index = ({ courses }) => {
 
  return (
    <>
      {/* <h1 className = "jumbotron text-center bg-primary square">Learning Management System</h1> */}
      <div className="container-fluid " style={{ padding: "100px 100px" }}>
        <div className="row">
          {courses.map((course) => (
            <div key={course._id} className="col-md-3">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>

      
    </>
  );
};
export default Index;

