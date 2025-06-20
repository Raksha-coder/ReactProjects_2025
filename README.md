# Started Learning React Redux.

## How to install react redux.
npm install @reduxjs/toolkit react-redux

## what is store in redux.
In React Redux, the store is a centralized container that holds the entire state of your application.

It is an object that:
Stores the application’s state
Allows access to state via getState()
Allows state to be updated via dispatch(action)
Registers listeners via subscribe(listener)
Handles state updates using reducers

Real-World Analogy : 
Think of the Redux store like a notebook that keeps the current values for everything happening in your app:
Your user’s login status
Their selected theme
Items in the shopping cart
And anytime you want to change or read something, you use specific rules (reducers + actions).

Concept	Meaning
Store = 	Holds the global state
Action = 	Tells Redux what to do
Reducer	 = Updates state based on the action
Dispatch =	Sends action to the store
