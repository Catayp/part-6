const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      return { ...state, good: 1 + state.good }
    case 'OK':
      return { ...state, ok: 1 + state.ok }
    case 'BAD':
      return { ...state, bad: 1 + state.bad }
    case 'ZERO':
      return { good: 0, ok: 0, bad:0 }
    default: return state
  }
  
}

export default counterReducer