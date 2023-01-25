import React, { useState } from "react";
import FavoriteButton from "./FavoriteButton";

export default function FavoriteButtonWithState(props) {
  const {on, ...other} = props;
  // const [buttonOn, setButtonOn] = useState(on); // state currently unused

  return <FavoriteButton on={on} {...other} />;

}

FavoriteButtonWithState.propTypes = FavoriteButton.propTypes;
