Run `yarn` and `yarn storybook` to see the component's stories at `http://localhost:6006`

# Summary #
Code test with the base test and extra credit 1 in separate branches of the repo.

There are 3 React components with storybook: A stateless FavoriteButton, a stateful wrapper of the FavoriteButton, FavoriteButtonWithState, and a ButtonTestContainer that displays 3 FavoriteButtonWithState and controls each button's on/off state and count display.

## Notes ##
The FavoriteButton is stateless and receives all of its display info through its props.

The FavoriteButtonWithState is a very basic wrapper: it uses the useState hook to hold the 'on' state, and passes that state to a child FavoriteButton, which displays it.

The ButtonTestContainer contains 3 FavoriteButtonWithState components and passes each of them props for their on/off state, count, and onClick handler.  

The best way I could figure out to set up the component relationship was to lift the state out of the FavoriteButtonWithState, so that the ButtonTestContainer controls the state of each of its child buttons.  This makes the state within FavoriteButtonWithState useless, which leads me to think I'm missing something, but lifting the state out was the best way I could find to allow the Container to manipulate its child Buttons.

Thanks for reading!
