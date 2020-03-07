import React from "react";
import "./Gallery.css";
import Navigation from "./components/Navigation/Navigation";

function Gallery() {
  return (
    <>
      <Navigation />
      <section class="section-gallery">
        <h1>Foodo Gallery</h1>
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4 img__container img__container--1 d-flex flex-column">
            <div class="div-img">
              <img
                src={process.env.PUBLIC_URL + "gallery-img/img-2.jpg"}
                alt="img"
              />
              <div class="img__like-button">
                <ion-icon name="heart" class="img__like-icon"></ion-icon>
              </div>
            </div>
            <div class="div-img">
              <img
                src={process.env.PUBLIC_URL + "gallery-img/img-9.jpg"}
                alt="img"
              />
              <div class="img__like-button">
                <ion-icon name="heart" class="img__like-icon"></ion-icon>
              </div>
            </div>
            <div class="div-img">
              <img
                src={process.env.PUBLIC_URL + "gallery-img/img-3.jpg"}
                alt="img"
              />
              <div class="img__like-button">
                <ion-icon name="heart" class="img__like-icon"></ion-icon>
              </div>
            </div>
            <div class="div-img">
              <img
                src={process.env.PUBLIC_URL + "gallery-img/img-4.jpg"}
                alt="img"
              />
              <div class="img__like-button">
                <ion-icon name="heart" class="img__like-icon"></ion-icon>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 img__container img__container--2 flex-column">
            <div class="div-img">
              <img
                src={process.env.PUBLIC_URL + "gallery-img/img-5.jpg"}
                alt="img"
              />
              <div class="img__like-button">
                <ion-icon name="heart" class="img__like-icon"></ion-icon>
              </div>
            </div>
            <div class="div-img">
              <img
                src={process.env.PUBLIC_URL + "gallery-img/img-6.jpg"}
                alt="img"
              />
              <div class="img__like-button">
                <ion-icon name="heart" class="img__like-icon"></ion-icon>
              </div>
            </div>
            <div class="div-img">
              <img
                src={process.env.PUBLIC_URL + "gallery-img/img-7.jpg"}
                alt="img"
              />
              <div class="img__like-button">
                <ion-icon name="heart" class="img__like-icon"></ion-icon>
              </div>
            </div>
            <div class="div-img">
              <img
                src={process.env.PUBLIC_URL + "gallery-img/img-8.jpg"}
                alt="img"
              />
              <div class="img__like-button">
                <ion-icon name="heart" class="img__like-icon"></ion-icon>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4 img__container img__container--3 flex-column">
            <div class="div-img">
              <img
                src={process.env.PUBLIC_URL + "gallery-img/img-1.jpg"}
                alt="img"
              />
              <div class="img__like-button">
                <ion-icon name="heart" class="img__like-icon"></ion-icon>
              </div>
            </div>
            <div class="div-img">
              <img
                src={process.env.PUBLIC_URL + "gallery-img/img-10.jpg"}
                alt="img"
              />
              <div class="img__like-button">
                <ion-icon name="heart" class="img__like-icon"></ion-icon>
              </div>
            </div>
            <div class="div-img">
              <img
                src={process.env.PUBLIC_URL + "gallery-img/img-11.jpg"}
                alt="img"
              />
              <div class="img__like-button">
                <ion-icon name="heart" class="img__like-icon"></ion-icon>
              </div>
            </div>
            <div class="div-img">
              <img
                src={process.env.PUBLIC_URL + "gallery-img/img-12.jpg"}
                alt="img"
              />
              <div class="img__like-button">
                <ion-icon name="heart" class="img__like-icon"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
