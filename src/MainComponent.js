import React from "react";
import { NavbarComponent } from "./navbar";
import { Skills } from "./skills";
import { ContactMe } from "./contactMe";
import { Photography } from "./photoGraphy";

const MainComponent = () => {
  return (
    <div className="mainComp">
      <NavbarComponent />
      <div className="landing">
        <div className="pt-5">
          <h2 className=" pt-5 d-md-none">
            Hi,I'm
            <br />
            <span className="moti"> Mutiur Rehman Khan</span>
            <br /> And I love Competitve
          </h2>
        </div>
      </div>
      <div className="container mt-0 mt-md-5 pt-5">
        <div className="row">
          <div className="col-12 col-md-8 big">
            <p className="p-2 pt-5 m-1 p-md-5 m-md-5  intromoti">
              <span className="name">Heyy! Nice TO Meet You</span>
              <br /> In my entire journey i have strived to improve myself
              through learning new things, meeting new people, and putting
              myself in chalenging position. Whether this means pursuing
              individual study on various subjects such as web development or
              competitive programming. My goal is to become better version of
              myself.
              <span className="d-none d-md-block">
                In doing so, I see my major strengths and attributes as being
                flexible and motivated. Knowing the intrinsic value I derive
                from pursuing these endeavors.
              </span>
            </p>
          </div>
          <div className="col-12 col-md-4 small">
            <div className="smallImage"></div>
          </div>
        </div>
      </div>
      <div className="container skills p-2 p-md-5 mt-5 mb-5 ">
        <Skills />
      </div>
      <Photography />
      <ContactMe />
    </div>
  );
};

export default MainComponent;
