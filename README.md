Run `yarn` and `yarn storybook` to see the component's stories at `http://localhost:6006`

# Summary #

There are 3 React components with storybook: A stateless FavoriteButton; a stateful wrapper of the FavoriteButton, FavoriteButtonWithState, that allows the button to be toggled by clicking it; and a ButtonTestContainer that displays 3 FavoriteButtonWithState and controls the total count of buttons in the 'on' state.

# Extra Credit 2 Notes #

EC2 is found in a separate branch.  In addition to using localStorage to store the state of each button, I also stored the count of buttons in the 'on' state for each container.
This allows for the count of 'on' buttons to persist and not be reset by the 'count' prop whenever the container is rendered.
Storing the count in localStorage also allows buttons that are showing up in separate views to access the same count data.
The Storybook showcases ButtonContainers that have independent buttons and counts, as well as the fourth and first stories which display the same buttons.