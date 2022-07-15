import React from 'react'

const Footer = () => {
  return (
    <footer
        className="d-flex justify-content-center align-items-center"
        style={{backgroundColor: " black", color: "white" }}
      >
        <div
          className="d-flex justify-content-between align-items-center px-5 py-2"
          style={{ width: "100%" }}
        >
          
            <img src="./assets/images/prlogo.png" style={{width:'180px',height:'auto',objectFit:'contain'}} />
          
          <p
            className="text-center mb-0"
            style={{color: "white" }}
          >
            © 2022 Copyright:
          </p>
         
        </div>
      </footer>
  )
}

export default Footer