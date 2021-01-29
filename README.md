# react-tutorial

## Main Branch

- The main branch is the starter code for the tutorial.
- Visit the `start` branch to get started.

The following is a quote from the [React Tutorial](https://reactjs.org/tutorial/tutorial.html#inspecting-the-starter-code):

>By inspecting the code, you’ll notice that we have three React components:
>
>1. Square
>2. Board
>3. Game
>
>The `<Square />` component renders a single `<button>` and the `<Board />` component renders 9 `<Square />` components. The `<Game />` component renders a `<Board />` component with placeholder values which we’ll modify later. There are currently no interactive components.


## Passing Data Through Props

- [link](https://reactjs.org/tutorial/tutorial.html#passing-data-through-props)

Congratulations! You’ve just “passed a prop” from a parent Board component to a child Square component. Passing props is how information flows in React apps, from parents to children.

## Making an Interactive Component

- [link](https://reactjs.org/tutorial/tutorial.html#making-an-interactive-component)

- change [Square](src/components/Square.js)

- Notice how with `onClick={() => alert('click')}`, we’re passing a function as the onClick prop. React will only call this function after a click. Forgetting `() =>` and writing `onClick={alert('click')}` is a common mistake, and would fire the alert every time the component re-renders.

- As a next step, we want the Square component to “remember” that it got clicked, and fill it with an “X” mark. To “remember” things, components use **state**.
  
- When you call setState in a component, React automatically updates the child components inside of it too.










[React Tutorial]: https://reactjs.org/tutorial/tutorial.html

