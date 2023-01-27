import React from "react";
import FavoriteButtonWithState from "./FavoriteButtonWithState";
import { Default } from "./FavoriteButton.stories";

export default {
  component: FavoriteButtonWithState,
  title: "Favorite Button With State",
};

const Template = (args) => <FavoriteButtonWithState {...args} />;

export const DefaultWithStateAndLocalStorage = Template.bind({});
DefaultWithStateAndLocalStorage.args = {
  ...Default.args,
  fk: { type: "favBtn", id: "user1" },
};

export const ShowDisplayZeroWithStateAndLocalStorage = Template.bind({});
ShowDisplayZeroWithStateAndLocalStorage.args = {
  ...DefaultWithStateAndLocalStorage.args,
  count: 0,
  displayZeroCount: true,
  fk: { type: "favBtn", id: "user2" },
};
