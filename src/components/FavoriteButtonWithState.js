import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FavoriteButton from "./FavoriteButton";

export default function FavoriteButtonWithState(props) {
  let { on, onClick, fk, containerId, ...other } = props;

  const key = String(fk.type) + ":" + String(fk.id) + ":" + String(containerId);

  let setOn;
  [on, setOn] = useState(() => {
    const storageState = localStorage.getItem(key);
    return storageState ? true : false;
  });

  // Toggles button and passes state to callback
  function handleClick() {
    onClick(on);
    setOn(!on);
  }

  useEffect(() => {
    if (on) {
      localStorage.setItem(key, JSON.stringify(fk));
    } else {
      localStorage.removeItem(key, JSON.stringify(fk));
    }
  }, [on]);

  return <FavoriteButton on={on} onClick={handleClick} {...other} />;
}

FavoriteButtonWithState.propTypes = {
  ...FavoriteButton.propTypes,

  /** Foreign Key used to id each button */
  fk: PropTypes.object,
};
