import React, { useState } from "react";
import FavoriteButton from "./FavoriteButton";

export default function FavoriteButtonWithState(props) {
  let {on, onClick, ...other} = props;

  let setOn;
  [on, setOn] = useState(on);

  // Toggles button and passes state to callback
  function handleClick() {
    onClick(on);
    setOn(!on);
  }

  return <FavoriteButton on={on} onClick={handleClick} {...other} />;

}

FavoriteButtonWithState.propTypes = FavoriteButton.propTypes;
