import React from "react";
import image1 from "../assests/hero-bg.jpg";
import "../styles/FirstPage.css";
import { Col, Row } from "react-bootstrap";

function FirstPage() {
  return (
    <div>
      <div style={{ position: "relative", height: "100vh", width: "100%" }}>
        <img
          src={image1}
          alt="Background"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            opacity: "0.7",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          textAlign: "center",
          color: "white",
          transform: "translate(-50%, -50%)",
          width: "100%",
        }}
      >
        <div>
          <h2 className="heading-2">More than 63 ads in 6 categories</h2>
          <h1 className="heading-1"> List or find anything, literally</h1>
          <div style={{ marginTop: "30px", width: "60%", marginLeft: "50%", transform: "translate(-50%, -50%)", }}>
            <div class="search">
              <input
                type="text"
                class="searchTerm"
                placeholder="What are you looking for?"
              />
              <button type="submit" class="searchButton">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: "155%",
            left: "50%",
            textAlign: "center",
            transform: "translate(-50%, -50%)",
            width: "100%",
          }}
        >
          <Row>
            <Col size={12} sm={4} md={4}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                  width: "100%"
                }}
              >
                <div className="proj-imgbx">

                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/640px-SNice.svg.png"
                    style={{
                      height: "100px",
                      width: "100px",
                      margin: "10px",
                    }}
                    alt="Image 2"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/640px-SNice.svg.png"
                    style={{
                      height: "100px",
                      width: "100px",
                      margin: "10px",
                    }}
                    alt="Image 2"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/640px-SNice.svg.png"
                    style={{
                      height: "100px",
                      width: "100px",
                      margin: "10px",
                    }}
                    alt="Image 3"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/640px-SNice.svg.png"
                    style={{
                      height: "100px",
                      width: "100px",
                      margin: "10px",
                    }}
                    alt="Image 4"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/640px-SNice.svg.png"
                    style={{
                      height: "100px",
                      width: "100px",
                      margin: "10px",
                    }}
                    alt="Image 5"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/640px-SNice.svg.png"
                    style={{
                      height: "100px",
                      width: "100px",
                      margin: "10px",
                    }}
                    alt="Image 6"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
