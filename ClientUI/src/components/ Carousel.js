import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './componentsstyle.css'
//src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBsbCAQtQimp5yI0Zx4vyR_FzPLUVzkdjDBN0N4_LAUo59inNQrSp6-Iz7qrfAXBENLGI&usqp=CAU"
//              src="https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270"
//              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRabXZSwdR-7wsXfdtb2Xdy0Tl9o6l1D-UcQnyVN0WxQ9TmPE8SkEh0s9opAyZy-x5DnYY&usqp=CAU"
const imgContainerStyle = {height: "clamp(10rem, 20vw, 20rem)"}
const imgStyle = {height: "100%", width: "100%", borderRadius: "30px" }
const Carousel = () => {

  return (
    <div style={{display: "flex", justifyContent: "center" }}>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel"
      style={{width: "clamp(40%, 60vw, 100%)"}}
    >
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner"   >
        <div className="carousel-item active" data-bs-interval="3000" style={imgContainerStyle}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRabXZSwdR-7wsXfdtb2Xdy0Tl9o6l1D-UcQnyVN0WxQ9TmPE8SkEh0s9opAyZy-x5DnYY&usqp=CAU" 
          className="carousel-image d-block w-100" alt="..."
          style={imgStyle}/>
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000" style={imgContainerStyle}>
          <img  src="https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270" 
          className="carousel-image d-block w-100" alt="..."
          style={imgStyle}/>
          <div className= "carousel-caption d-none d-md-block">
          </div>
        </div>
        <div className="carousel-item " data-bs-interval="3000" style={imgContainerStyle}>
          <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBsbCAQtQimp5yI0Zx4vyR_FzPLUVzkdjDBN0N4_LAUo59inNQrSp6-Iz7qrfAXBENLGI&usqp=CAU" 
          className="carousel-image d-block w-100" alt="..."
          style={imgStyle}/>
          <div className="carousel-image carousel-caption d-none d-md-block">
        
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  );
};

export default Carousel;
