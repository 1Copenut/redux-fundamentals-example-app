const initialState = {
  status: 'all', // ['all', 'active', 'completed']
  colors: [], // ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
}

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case 'filters/statusFilterChanged': {
      return {
        ...state,
        status: action.payload,
      }
    }
    case 'filters/colorFilterChanged': {
      let { colors } = state

      if (action.payload.changeType === 'added') {
        colors = colors.includes(action.payload.color)
          ? colors
          : [...colors, action.payload.color]

        return {
          ...state,
          colors,
        }
      }

      if (action.payload.changeType === 'removed') {
        colors = colors.includes(action.payload.color)
          ? colors.filter((color) => color !== action.payload.color)
          : colors

        return {
          ...state,
          colors,
        }
      }

      // Defensively return all state if there's an unexpected fall-through
      return state
    }
    default:
      return state
  }
}
