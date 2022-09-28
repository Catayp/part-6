import anecdoteService from '../services/anecdotes'

export const addAnecdotes = (data) => { 
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(data)
    dispatch({
      type: 'ADD', 
      data: anecdote
    }) 
  }
}
export const incrementVote = (id) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.update(id)
     dispatch({
      type: 'INCREMENT',
      data: { id, newAnecdote }
     })
  }
} 
export const initializateAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}
const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type){
    case 'ADD':
      return state.concat(action.data)
    case 'INCREMENT':
      const id = action.data.id
      const changedAnecdote = action.data.newAnecdote
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
    case 'INIT_ANECDOTES':
      return action.data
    default: 
      return state
  }
}
export default reducer