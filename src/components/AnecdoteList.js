import { incrementVote} from '../reducers/anecdoteReducer'
import { success } from '../reducers/notificationReducer'
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () =>{
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()
 
  const aumentVote = (id) => {
    // console.log('vote', id)
    dispatch(incrementVote(id))
    dispatch(success('you voted',2000))
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