import React, { useState } from "react";
import FavoriteButtonWithState from "./FavoriteButtonWithState";

export default function ButtonTestContainer(props) {
  const {on, count, onClick, ...other} = props;

  const [buttonCount, setButtonCount] = useState(count);
  const [buttonOn1, setButtonOn1] = useState(on);
  const [buttonOn2, setButtonOn2] = useState(on);
  const [buttonOn3, setButtonOn3] = useState(on);

  function handleClick(buttonId) {
    let prevButtonState;

    if (buttonId == 1) {
      prevButtonState = buttonOn1;
      setButtonOn1(!buttonOn1);
    }
    else if (buttonId == 2) {
      prevButtonState = buttonOn2;
      setButtonOn2(!buttonOn2);
    }
    else if (buttonId == 3) {
      prevButtonState = buttonOn3;
      setButtonOn3(!buttonOn3);
    }

    prevButtonState ? setButtonCount(buttonCount-1) : setButtonCount(buttonCount+1);
  }

  return (
    <div>
      <FavoriteButtonWithState on={buttonOn1} count={buttonCount} onClick={() => {handleClick(1)}}  {...other}/>
      <FavoriteButtonWithState on={buttonOn2} count={buttonCount} onClick={() => {handleClick(2)}}  {...other}/>
      <FavoriteButtonWithState on={buttonOn3} count={buttonCount} onClick={() => {handleClick(3)}}  {...other}/>
    </div>
  );
}
