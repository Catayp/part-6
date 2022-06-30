import { addAnecdotes} from '../reducers/anecdoteReducer'
import { success } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
// import { useDispatch } from 'react-redux'

const AnecdoteForm = (props) => {
  // const dispatch = useDispatch()
  console.log(props.addAnecdotes)
  console.log(addAnecdotes)
  const createAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.addAnecdotes(content)
    // console.log(anecdotes)
    props.success('anecdote added',5)
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
export default connect(
  null,
  {addAnecdotes, success}
)(AnecdoteForm)