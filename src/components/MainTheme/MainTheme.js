import React, { useState } from "react";
import "./MainTheme.css";
import Logo from "../../assets/logo.png";
import Services from "../Services/Services";
import OurTeam from "../../pages/OurTeam";

const MainTheme = () => {
  let setTheme;
  const [clicked, setClicked] = useState(false);

  function clickedFunc() {
    setClicked(!clicked);
  }

  if (clicked === true) {
    setTheme = <OurTeam />;
  } else {
    setTheme = <Services />;
  }

  return (
    <div className="container">
      <div className="universe">
        <div className="logo">
          <img width="100px" src={Logo} alt="logo" />
        </div>
        <div className="XXX" onClick={clickedFunc}>
          {setTheme}
        </div>
        <div className="close">
          <div className="close_circle">
            <div className="close_x"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTheme;
