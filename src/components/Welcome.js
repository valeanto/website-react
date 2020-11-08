import React from "react";
import purpleImage from "./../images/purple.png";
import yellowImage from "./../images/yellow.png";
import orangeImage from "./../images/orange.png";
import blueImage from "./../images/blue.png";
export default function Welcome() {
  return (
    <>
      <div className="app-grid">
        <section className="section_textcenter background-color">
          <h5>Online e-book</h5>
          <h1>Best design practices in one place</h1>
          <p>
            A free resource that will help you understand the design process and
            improve the quality of your work
          </p>
        </section>
        <section className="section_col3">
          <div>
            <h5>benefits</h5>
            <h1>What you can get with our design e-book</h1>
            <p>
              A free resource that will help you understand the design process
              and improve the quality of your work
            </p>
          </div>
          <div>
            <div class="image-container">
              <img src={purpleImage} alt="" class="image"></img>
            </div>
            <h2> Best Practices</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis </p><p>Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat anim id est laborum
            </p>
          </div>
          <div>
            <div class="image-container">
              <img src={blueImage} alt="" class="image"></img>
            </div>
            <h2> Processes and tools</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis </p><p>Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat anim id est laborum
            </p>
          </div>
          <div></div>
          <div>
          <div class='image-container'>
              <img
                src={yellowImage}
                alt=""
                class='image'
              ></img>
            </div>
            <h2> Communication</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis </p><p>Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat anim id est laborum
            </p>
          </div>
          <div>
          <div class='image-container'>
              <img
                src={orangeImage}
                alt=""
                class='image'
              ></img>
            </div>
            <h2> Client success</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis </p><p>Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat anim id est laborum
            </p>
          </div>
        </section>
        <section className="section_textcenter">
          <h5>e-book</h5>
          <h1>A modern means of publication</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          
        </section>
        <section className="section_textcenter">
          <h5>users</h5>
          <h1>Reflection</h1>
          <div className="user-card"></div>
          <div className="user-card"></div>
          <div className="user-card"></div>
        </section>
        <section className="section_textcenter">
          <h5>contribute</h5>
          <h1>Become one of the curators</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore{" "}
          </p>
          <button className="button">Join as contributor</button>
        </section>
      </div>
    </>
  );
}
