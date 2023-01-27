import React, { useEffect, useState } from "react";
import FavoriteButtonWithState from "./FavoriteButtonWithState";
import PropTypes from 'prop-types';

export default function ButtonTestContainer(props) {
  let { count, onClick, containerId, ...other } = props;

  let setCount;
  [count, setCount] = useState(() => {
    const storedCountJSON = localStorage.getItem(
      "countFromContainer" + containerId
    );
    const storedCount = JSON.parse(storedCountJSON);
    return storedCount ? storedCount : count;
  });

  useEffect(() => {
    localStorage.setItem(
      "countFromContainer" + containerId,
      JSON.stringify(count)
    );
  }, [count]);

  function handleClick(prevButtonState) {
    prevButtonState ? setCount(count - 1) : setCount(count + 1);
    onClick();
  }

  return (
    <div>
      <FavoriteButtonWithState
        count={count}
        onClick={handleClick}
        fk={{ type: "favBtn", id: 1 }}
        containerId={containerId}
        {...other}
      />
      <FavoriteButtonWithState
        count={count}
        onClick={handleClick}
        fk={{ type: "favBtn", id: 2 }}
        containerId={containerId}
        {...other}
      />
      <FavoriteButtonWithState
        count={count}
        onClick={handleClick}
        fk={{ type: "favBtn", id: 3 }}
        containerId={containerId}
        {...other}
      />
    </div>
  );
}

ButtonTestContainer.PropTypes = {
  ...FavoriteButtonWithState.propTypes,

  /** ID for each container to allow separation of data */
  containerId: PropTypes.number,
}
