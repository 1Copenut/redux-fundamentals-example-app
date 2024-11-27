import { combineReducers } from 'redux'

import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

const rootReducer = combineReducers({
  // Define a top level state fields
  todos: todosReducer,
  filters: filtersReducer,
})

export default rootReducer
