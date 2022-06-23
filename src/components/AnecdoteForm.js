import { addAnecdotes} from '../reducers/anecdoteReducer'
import { success } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const createAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(addAnecdotes(content))
    // console.log(anecdotes)
    dispatch(success('anecdote added',5000))
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