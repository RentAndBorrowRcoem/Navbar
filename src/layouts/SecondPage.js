import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "../styles/FirstPage.css";
import "../styles/SecondPage.css";
function SecondPage() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "50px",
          marginLeft: "50px",
          marginRight: "150px",
        }}
      >
        <div>
          <h3 className="heading-2" style={{ marginBottom: 0 }}>
            Most popular
          </h3>
          <h1 className="heading-1" style={{ marginTop: 0 }}>
            <b>Categories</b>
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <a href="Browse Categories" style={{ color: "black" }}>
            <h2 className="heading-2">Browse Categories</h2>
          </a>
          <h3></h3>
          <div className="heading-2" style={{ margin: "20px" }}>
            <i className="fa-solid fa-arrow-right" />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          // justifyContent: "center",
          marginTop: "20px",
          justifyContent:"center",
          // color: "white",
          // transform: "translate(-50%, -50%)",
          width: "100%",
        }}
      >
        
        <Row>
          <Col size={12} sm={6} md={4}>

            <div className="proj-imgbx">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pZChDEv9TjrqSTqxRg5D42-oVj-pPg9otw&usqp=CAU"
                style={{ height: 325, width: 175, margin: "10px" }}
                alt="Image 4"
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pZChDEv9TjrqSTqxRg5D42-oVj-pPg9otw&usqp=CAU"
                style={{ height: 325, width: 175, margin: "10px" }}
                alt="Image 4"
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pZChDEv9TjrqSTqxRg5D42-oVj-pPg9otw&usqp=CAU"
                style={{ height: 325, width: 175, margin: "10px" }}
                alt="Image 4"
              />

              <img
                src="https://img.freepik.com/premium-photo/collection-different-makeup-products-arranged-artistic-display_193437-3721.jpg?w=2000"
                style={{ height: 325, width: 175, margin: "10px" }}
                alt="Image 1"
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pZChDEv9TjrqSTqxRg5D42-oVj-pPg9otw&usqp=CAU"
                style={{ height: 325, width: 175, margin: "10px" }}
                alt="Image 4"
              />
            </div>

          </Col>
        </Row>
      </div>
    </div >
  );
}

export default SecondPage;
