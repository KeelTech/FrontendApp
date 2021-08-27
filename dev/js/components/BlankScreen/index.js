import React from "react";
import {container} from './style.js'

const BlankScreen = (props) => {
  return (
    <div className={container}>
      <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/blankScreenIcon.svg"}></img>
      <span>{props.message}</span>
    </div>
  );
};

export default BlankScreen;
