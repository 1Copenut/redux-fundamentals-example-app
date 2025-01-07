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

// Edit it a second time
store.dispatch({
  type: 'todos/todoEdited',
  payload: {
    id: 0,
    text: 'Learn about actions',
    color: '',
  },
})

// Add some more todos
store.dispatch({
  type: 'todos/todoAdded',
  payload: { text: 'Learn about reducers' },
})

store.dispatch({
  type: 'todos/todoAdded',
  payload: { text: 'Learn about stores' },
})

// Toggle a few todos to "completed"
store.dispatch({
  type: 'todos/todoToggled',
  payload: { id: 0 },
})

store.dispatch({
  type: 'todos/todoToggled',
  payload: { id: 1 },
})

// Add another todo
store.dispatch({
  type: 'todos/todoAdded',
  payload: { text: 'Marked for deletion' },
})

// Delete the todo we just added
store.dispatch({
  type: 'todos/todoDeleted',
  payload: { id: 3 },
})

// Mark all todos completed
store.dispatch({ type: 'todos/allCompleted' })

// Clear all completed todos
store.dispatch({ type: 'todos/clearCompleted' })

// Update status filter
store.dispatch({ type: 'filters/statusFilterChanged', payload: 'active' })

// Add and remove some colors
store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: { color: 'red', changeType: 'added' },
})

store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: { color: 'red', changeType: 'added' },
})

store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: { color: 'green', changeType: 'added' },
})

store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: { color: 'green', changeType: 'added' },
})

// Keep the colors array as is when a nonsense value is passed
store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: { color: 'green', changeType: 'nonsense' },
})

store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: { color: 'green', changeType: 'removed' },
})

store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: { color: 'red', changeType: 'removed' },
})

// Stop listening to state updates
unsubscribe()

// Dispatch one more action to see what happens
store.dispatch({
  type: 'todos/todoAdded',
  payload: { text: 'Try creating a store' },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
