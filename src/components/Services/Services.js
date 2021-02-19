import React, { useEffect } from "react";
import Background from "../Background/Background";
import "./Services.css";

const Services = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("outer-orbit-fake").style.cssText =
        "transition: 600ms ease-in; transform: scale(0.601);";
      document.getElementById("outer-orbit-fake-2").style.cssText =
        "transition: 600ms ease-in; transform: scale(0.551);";
    }, 0);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("planet_ui").style.cssText =
        "opacity: 1;  transition: 600ms ease-out";
      document.getElementById("planet_product").style.cssText =
        "opacity: 1;  transition: 600ms ease-out";
      document.getElementById("planet_ux").style.cssText =
        "opacity: 1;  transition: 600ms ease-out";
      document.getElementById("planet_responsive").style.cssText =
        "opacity: 1;  transition: 600ms ease-out";
      document.getElementById("planet_web").style.cssText =
        "opacity: 1;  transition: 600ms ease-out";
      document.getElementById("planet_mobile_app").style.cssText =
        "opacity: 1;  transition: 600ms ease-out";
    }, 0);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="circle-orbit-container">
      <div className="inner-orbit" style={{ border: "none" }}>
        <span className="orbit_scroll">SCROLL UP</span>
      </div>
      <div className="middle-orbit" style={{ border: "none" }}>
        <span className="orbit_question">WHY DO WE USE IT?</span>
      </div>
      <div
        className="outer-orbit-fake"
        id="outer-orbit-fake"
        style={{ transform: "scale(1)" }}
      ></div>
      <div
        className="outer-orbit-fake-2"
        id="outer-orbit-fake-2"
        style={{ transform: "scale(1)" }}
      ></div>
      <div className="outer-orbit">
        <div className="planet_ui" id="planet_ui" style={{ opacity: "0" }}>
          <span className="middle_planet">UI</span>
        </div>
        <div
          className="planet_product"
          id="planet_product"
          style={{ opacity: "0" }}
        >
          <span className="middle_planet">Product</span>
        </div>
        <div className="planet_ux" id="planet_ux" style={{ opacity: "0" }}>
          <span className="middle_planet">UX</span>
        </div>
        <div
          className="planet_responsive"
          id="planet_responsive"
          style={{ opacity: "0" }}
        >
          <span className="middle_planet">Responsive</span>
        </div>
        <div className="planet_web" id="planet_web" style={{ opacity: "0" }}>
          <span className="middle_planet">Web</span>
        </div>
        <div
          className="planet_mobile_app"
          id="planet_mobile_app"
          style={{ opacity: "0" }}
        >
          <span className="middle_planet">Mobile App</span>
        </div>
        {/* <div className="random_planet1"></div>
        <div className="random_planet2"></div>
        <div className="random_planet3"></div>
        <div className="random_planet4"></div>
        <div className="random_planet5"></div>
        <div className="random_planet6"></div>
        <div className="random_planet7"></div>
        <div className="random_planet8"></div>
        <div className="random_planet9"></div>
        <div className="random_planet10"></div>
        <div className="random_planet11"></div>
        <div className="random_planet12"></div>
        <div className="random_planet13"></div>
        <div className="random_planet14"></div>
        <div className="random_planet15"></div>
        <div className="random_planet16"></div>
        <div className="random_planet17"></div> */}
        <Background />
      </div>
    </div>
  );
};

export default Services;
