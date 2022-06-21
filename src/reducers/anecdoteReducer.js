const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}
export const addAnecdotes = (content) => { 
  return{
    type: 'ADD',
    data: {
      content,
      id: getId(),
      votes: 0
    }
  }
}
export const incrementVote = (id) => {
  return {
     type: 'INCREMENT',
     data: { id }
  }
 
} 

const initialState = anecdotesAtStart.map(asObject)
console.log(initialState)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type){
    case 'ADD':
      return state.concat(action.data)
    case 'INCREMENT':
      const id = action.data.id
      const anecdoteChange = state.find(anecdote => anecdote.id === id)
      const changedAnecdote = { ...anecdoteChange, votes: 1 + anecdoteChange.votes }
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
    default: 
      return state
  }
}

export default reducer