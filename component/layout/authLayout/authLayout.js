import React from "react";

const AuthLayout = ({children}) => {
  return (
    <section
      className="vh-80"
      // style={{ backgroundColor: "#17bf9e" }}
    >
      {/* <div className="container-fluid h-100"> */}
      {/* <div className="row d-flex justify-content-center align-items-center h-100"> */}
      {/* <div className="col col-xl-12"> */}
      <div className="container-fluid h-80" style={{paddingTop:'70px'}}>
        <div className="row g-0 h-80">
          <div
            className="col-md-6 col-lg-7 d-none d-md-block "
            style={{
             background: "rgba(23,191,158,0.2)",
             // width:'100%',
              height: "auto",
              clipPath: "circle(97.0% at 3% 49%)",
            }}
          >
            <div className="p-5 d-flex justify-content-center align-items-center" style={{width:'100%'}}>
              <img
                src="./assets/images/loginlms.png"
                alt="name"
                className="img-fluid"
                style={{
                  borderRadius: "1rem 0 0 1rem;",
                  width: "70%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-5 d-flex align-items-center px-5">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
