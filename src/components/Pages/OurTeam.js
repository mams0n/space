import React, { useEffect } from "react";
import "./OurTeam.css";
import Background from "../Background/Background";
import Avatar_1 from "../../assets/avatar1.jpg";
import Avatar_2 from "../../assets/avatar2.jpg";
import Avatar_3 from "../../assets/avatar3.jpg";
import Avatar_4 from "../../assets/avatar4.jpg";
import Avatar_5 from "../../assets/avatar5.jpg";
import Avatar_6 from "../../assets/avatar6.jpg";

const OurTeam = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("avatar-2").style.cssText =
        "visibility: visible; transition: 300ms ease; opacity: 1";
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("avatar-1").style.cssText =
        "visibility: visible; transition: scale(1);  transition: 300ms ease";
      document.getElementById("avatar-3").style.cssText =
        "visibility: visible; transition: scale(1);  transition: 300ms ease";
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("avatar-4").style.cssText =
        "visibility: visible; transition: scale(1);  transition: 300ms ease";
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("avatar-5").style.cssText =
        "visibility: visible; transition: scale(1);  transition: 300ms ease";
    }, 2500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("avatar-6").style.cssText =
        "visibility: visible; transition: scale(1);  transition: 300ms ease";
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("profile-name").style.cssText =
        "visibility: visible; transition: 1500ms ease-out; opacity: 1";
      document.getElementById("profile-position").style.cssText =
        "visibility: visible; transition: 1500ms ease-out; opacity: 1";
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("team-outer-orbit-fake").style.cssText =
        "transition: 1500ms ease-in; transform: scale(11);";
      document.getElementById("team-outer-orbit-fake-2").style.cssText =
        "transition: 500ms ease-in; transform: scale(1);";
      document.getElementById("team-outer-orbit-fake-3").style.cssText =
        "transition: 500ms ease-in; transform: scale(1)";
    }, 0);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="circle-orbit-container">
      <div
        className="team_middle-orbit"
        id="team_middle-orbit"
        style={{ border: "none" }}
      >
        <span className="middle_orbit_team">OUR TEAM</span>
        <span className="middle_orbit_scroll">SCROLL UP</span>
      </div>
      <div
        className="team-outer-orbit-fake-3"
        id="team-outer-orbit-fake-3"
        style={{ transform: "scale(0.55)" }}
      ></div>
      <div
        className="team-outer-orbit-fake"
        id="team-outer-orbit-fake"
        style={{ transform: "scale(1)" }}
      ></div>
      <div
        className="team-outer-orbit-fake-2"
        id="team-outer-orbit-fake-2"
        style={{ transform: "scale(0.6)" }}
      ></div>
      <div
        className="team-outer-orbit"
        id="team-outer-orbit"
        style={{ border: "none" }}
      >
        <div className="profile-1">
          <img
            className="avatar-1"
            id="avatar-1"
            src={Avatar_1}
            alt="avatar"
            style={{ visibility: "hidden", transform: "scale(0.1)" }}
          />
        </div>
        <div className="profile-2">
          <img
            className="avatar-2"
            id="avatar-2"
            src={Avatar_2}
            alt="avatar"
            style={{ visibility: "hidden", opacity: "0" }}
          />
        </div>
        <div className="profile-3">
          <img
            className="avatar-3"
            id="avatar-3"
            src={Avatar_3}
            alt="avatar"
            style={{ visibility: "hidden", transform: "scale(0.1)" }}
          />
        </div>
        <div className="profile-4">
          <img
            className="avatar-4"
            id="avatar-4"
            src={Avatar_4}
            alt="avatar"
            style={{ visibility: "hidden", transform: "scale(0.1)" }}
          />
        </div>
        <div className="profile-5">
          <img
            className="avatar-5"
            id="avatar-5"
            src={Avatar_5}
            alt="avatar"
            style={{ visibility: "hidden", transform: "scale(0.1)" }}
          />
        </div>
        <div className="profile-6">
          <img
            className="avatar-6"
            id="avatar-6"
            src={Avatar_6}
            alt="avatar"
            style={{ visibility: "hidden", transform: "scale(0.1)" }}
          />
          <div className="profile-describtion">
            <span
              className="profile-name"
              id="profile-name"
              style={{ visibility: "hidden", opacity: "0" }}
            >
              GEORGE CH.
            </span>
            <span
              className="profile-position"
              id="profile-position"
              style={{ visibility: "hidden", opacity: "0" }}
            >
              UX / UI, PRODUCT DESIGNER
            </span>
          </div>
        </div>
        <Background />
      </div>
    </div>
  );
};

export default OurTeam;
