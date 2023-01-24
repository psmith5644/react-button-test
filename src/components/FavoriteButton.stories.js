import React from "react";
import FavoriteButton from "./FavoriteButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

export default {
  component: FavoriteButton,
  title: "Favorite Button",
};

const Template = (args) => <FavoriteButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  on: false,
  count: 0,
  displayZeroCount: false,
  onClick: () => {
    console.log("button clicked");
  },
  icons: [<StarBorderIcon />, <StarIcon />],
  labels: ["Star", "Starred"],
};

export const On = Template.bind({});
On.args = {
  ...Default.args,
  on: true,
};

export const ShowDisplayZero = Template.bind({});
ShowDisplayZero.args = {
  ...Default.args,
  count: 0,
  displayZeroCount: true,
};
