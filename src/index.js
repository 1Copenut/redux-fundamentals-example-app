import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import './api/server'

import store from './store'

// Log the initial state
// Should be {todos: [], filters: {status, colors}}
console.log('Initial state: ', store.getState())

// Every time the state changes, log it
// Note that the subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => {
  console.log('State after dispatch: ', store.getState())
})

// Now dispatch some actions
// Create a new todo
store.dispatch({
  type: 'todos/todoAdded',
  payload: { text: 'Learn about actions' },
})

// Edit the todo text and color
store.dispatch({
  type: 'todos/todoEdited',
  payload: {
    id: 0,
    text: 'Complete all the todo actions',
    color: 'purple',
  },
})

// Don't change anything but dispatch the edit action anyhow
store.dispatch({
  type: 'todos/todoEdited',
  payload: {
    id: 0,
    text: 'Learn about actions',
    color: '',
  },
})

store.dispatch({
  type: 'todos/todoAdded',
  payload: { text: 'Learn about reducers' },
})

store.dispatch({
  type: 'todos/todoAdded',
  payload: { text: 'Learn about stores' },
})

store.dispatch({
  type: 'todos/todoToggled',
  payload: { id: 0 },
})

store.dispatch({
  type: 'todos/todoToggled',
  payload: { id: 1 },
})

store.dispatch({
  type: 'todos/todoAdded',
  payload: { text: 'Marked for deletion' },
})

store.dispatch({
  type: 'todos/todoDeleted',
  payload: { id: 3 },
})

// store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' })

// store.dispatch({
//   type: 'filters/colorFilterChanged',
//   payload: { color: 'red', changeType: 'added' },
// })

// Stop listening to state updates
unsubscribe()

// Dispatch one more action to see what happens
store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
