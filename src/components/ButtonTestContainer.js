import React, { useState } from "react";
import FavoriteButtonWithState from "./FavoriteButtonWithState";

export default function ButtonTestContainer(props) {
  let {count, onClick, ...other} = props;

  let setCount;
  [count, setCount] = useState(count);

  function handleClick(prevButtonState) {
    prevButtonState ? setCount(count-1) : setCount(count+1);
    onClick();
  }

  return (
    <div>
      <FavoriteButtonWithState count={count} onClick={handleClick}  {...other}/>
      <FavoriteButtonWithState count={count} onClick={handleClick}  {...other}/>
      <FavoriteButtonWithState count={count} onClick={handleClick}  {...other}/>
    </div>
  );
}
