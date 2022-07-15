import { currencyFormatter } from "../../utils/helpers";
import { Badge, Modal, Button } from "antd";
import ReactPlayer from "react-player";
import { LoadingOutlined, SafetyOutlined } from "@ant-design/icons";
const SingleCourseJumbotron = ({
  course,
  showModal,
  setShowModal,
  preview,
  setPreview,
  loading,
  user,
  handlePaidEnrollment,
  handleFreeEnrollment,
  enrolled,
  setEnrolled,
}) => {
  const {
    name,
    description,
    instructor,
    updatedAt,
    lessons,
    image,
    price,
    paid,
    category,
    type,
  } = course;
  return (
    <div className="container-fluid p-0"  >
      <div
        className="jumbotron square px-md-5 px-sm-2 pb-2"
        style={{ paddingTop: "100px", backgroundColor: "#17bf9e" }}
      >
        <div className="row">
          <div className="col-md-8">
            <h2 className="text-light fw-bolder">{name}</h2>
            <p className=" text-light lead">
              {description && description.substring(0, 160)}
            </p>

            {/* <Badge count = {type} style={{backgroundColor:"#17bf9e"}}
            className="pb-4 mr-2" /> */}

            <h6 className="text-light pb-4 mr-2" style={{ backgroundColor: "#17bf9e" }}>
              {type}
            </h6>

            <Badge
            
              count={category}
              style={{ backgroundColor: "#D73088",border:'none',boxShadow:'none' }}
              className="pb-4 mr-2"
            />

            <p className="text-light">Created by {instructor.name}</p>
            <p className="text-light">Last updated{new Date(updatedAt).toLocaleDateString()}</p>
            {/* <h4 className="text-light">{paid? currencyFormatter({
                amount:price,
                currency:"INR"
            }):"Free"
         }
         </h4> */}
          </div>
          <div className="col-md-4">
            {lessons[0].video && lessons[0].video.Location ? (
              <div
                onClick={() => {
                  setPreview(lessons[0].video.Location);
                  setShowModal(!showModal);
                }}
              >
                <ReactPlayer
                  className="react-player-div"
                  url={lessons[0].video.Location}
                  light={image.Location}
                  width="100%"
                  height="225px"
                />
              </div>
            ) : (
              <>
                <img
                  src={image.Location}
                  alt={name}
                  className="img img-fluid"
                />
              </>
            )}
            {loading ? (
              <div className="d-flex justify-content-center">
                <LoadingOutlined className="h1 text-danger" />
              </div>
            ) : (
              <Button
                className="mb-3 mt-3 d-flex align-items-center justify-content-center"
                style={{ backgroundColor: "#D73088",color:'#fff' }}
                block
                shape="round"
                icon={<SafetyOutlined size='large' />}
                size="large"
                disabled={loading}
                onClick={paid ? handlePaidEnrollment : handleFreeEnrollment}
              >
                {user
                  ? enrolled.status
                    ? "Go to course"
                    : "Enroll"
                  : "Login to  enroll"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleCourseJumbotron;
