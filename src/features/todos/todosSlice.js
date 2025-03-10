// const initialState = [
//   { id: 0, text: 'Learn React', completed: true },
//   { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
//   { id: 2, text: 'Build something fun!', completed: false, color: 'blue' },
// ]

const initialState = []

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload.text,
          color: action.payload.color ?? '',
          completed: false,
        },
      ]
    }
    case 'todos/todoToggled': {
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    }
    case 'todos/todoEdited': {
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo
        }

        return {
          ...todo,
          text: action.payload.text ?? todo.text,
          color: action.payload.color ?? todo.color,
          completed: action.payload.completed ?? todo.completed,
        }
      })
    }
    case 'todos/todoDeleted': {
      return state.filter((todo) => todo.id !== action.payload.id)
    }
    case 'todos/allCompleted': {
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        }
      })
    }
    case 'todos/clearCompleted': {
      return state.filter((todo) => todo.completed !== true)
    }
    default:
      return state
  }
}
