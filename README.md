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

## Lifting State Up

- [link](https://reactjs.org/tutorial/tutorial.html#lifting-state-up)

- To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.

- Modify [Board](src/components/Board.js)

- Since state is considered to be private to a component that defines it, we cannot update the Board’s state directly from Square.

- Modify [Square](src/components/Square.js)

-  When the Board’s state changes, the Square components re-render automatically.
  
-   In React terms, the Square components are now controlled components. The Board has full control over them.

>Note how in handleClick, we call `.slice()` to **create a copy** of the squares array to modify instead of modifying the existing array. 

-  an ability to undo and redo certain actions is a common requirement in applications. Avoiding direct data mutation lets us keep previous versions of the game’s history intact, and reuse them later.

- Detecting changes in immutable objects is considerably easier. If the immutable object that is being referenced is different than the previous one, then the object has changed.

- The main benefit of immutability is that it helps you build pure components in React. 

## Function Components

- [link](https://reactjs.org/tutorial/tutorial.html#function-components)

- change [Square](src/components/Square.js)






[React Tutorial]: https://reactjs.org/tutorial/tutorial.html

