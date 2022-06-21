import { incrementVote} from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () =>{
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
 
  const aumentVote = (id) => {
    console.log('vote', id)
    dispatch(incrementVote(id))
  }
  return(
    <>
    <h2>Anecdotes</h2>
    {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => aumentVote(anecdote.id)}>vote</button>
        </div>
      </div>
    )}
    </>
  )
}

export default AnecdoteList