import React, { Children } from "react";
import ButtonTestContainer from "./ButtonTestContainer";
import { Default } from "./FavoriteButton.stories";

export default {
  component: ButtonTestContainer,
  title: "Button Test Container",
};

const Template = (args) => <ButtonTestContainer {...args} />;

export const DefaultContainer = Template.bind({});
DefaultContainer.args = 
{
  ...Default.args,
};

export const ContainerDisplayZero = Template.bind({});
ContainerDisplayZero.args = {
  ...DefaultContainer.args,
  displayZeroCount: true
}

export const ContainerNonZeroCount = Template.bind({});
ContainerNonZeroCount.args = {
  ...DefaultContainer.args,
  count: 12,
}