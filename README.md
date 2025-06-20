# Started Learning React Redux.

## How to install react redux.
npm install @reduxjs/toolkit react-redux <br>

## what is store in redux.
In React Redux, the store is a centralized container that holds the entire state of your application.<br>

It is an object that:<br>
Stores the application’s state<br>
Allows access to state via getState()<br>
Allows state to be updated via dispatch(action)<br>
Registers listeners via subscribe(listener)<br>
Handles state updates using reducers<br>

Real-World Analogy : 
Think of the Redux store like a notebook that keeps the current values for everything happening in your app:<br>
Your user’s login status<br>
Their selected theme<br>
Items in the shopping cart<br>
And anytime you want to change or read something, you use specific rules (reducers + actions).<br>

Concept	Meaning
Store = 	Holds the global state<br>
Action = 	Tells Redux what to do<br>
Reducer	 = Updates state based on the action<br>
Dispatch =	Sends action to the store<br>
