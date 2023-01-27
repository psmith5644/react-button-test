import React from "react";
import FavoriteButtonWithState from "./FavoriteButtonWithState";
import { Default, On, ShowDisplayZero } from "./FavoriteButton.stories";

export default {
  component: FavoriteButtonWithState,
  title: "Favorite Button With State",
};

const Template = (args) => <FavoriteButtonWithState {...args} />;

export const DefaultWithState = Template.bind({});
DefaultWithState.args = {
  ...Default.args,
};

export const OnWithState = Template.bind({});
OnWithState.args = {
  ...On.args,
}

export const ShowDisplayZeroWithState = Template.bind({});
ShowDisplayZeroWithState.args = {
  ...ShowDisplayZero.args,
}