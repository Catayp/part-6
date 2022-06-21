import { addAnecdotes} from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteForm = () => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    const createAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(addAnecdotes(content))
        console.log(anecdotes)
      }
  return (
    <>
    <h2>create new</h2>
    <form onSubmit={createAnecdote}>
      <div><input name='anecdote' /></div>
    <button>create</button>
    </form>
    </>
 )
} 
export default AnecdoteForm