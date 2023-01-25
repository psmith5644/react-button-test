import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

export default function FavoriteButton({
  on,
  count,
  displayZeroCount,
  onClick,
  icons,
  labels,
}) {
  const name = "FavoriteButton";

  return (
    <div>
      <Button variant="contained" onClick={onClick}>
        {!on && icons[0]}
        {on && icons[1]}

        {!on && labels[0]}
        {on && labels[1]}
        {(displayZeroCount || (!displayZeroCount && count != 0)) &&
          ": " + count}
      </Button>
    </div>
  );
}

FavoriteButton.propTypes = {
  /** Whether button is on or off */
  on: PropTypes.bool,

  /** number of times this has been favorited */
  count: PropTypes.number,

  /** display the number of favorites if that equals 0? */
  displayZeroCount: PropTypes.bool,

  /** Event, onClick handler */
  onClick: PropTypes.func,

  /** icons for off and on states */
  icons: PropTypes.array,

  /** text labels for different states */
  labels: PropTypes.array,
};
