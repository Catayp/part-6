import { incrementVote} from '../reducers/anecdoteReducer'
import { success } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
// import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = (props) => {
  // const anecdotes = useSelector(state => state.anecdotes)
  // const dispatch = useDispatch()
 
  const aumentVote = (id) => {
    props.incrementVote(id)
    props.success('you voted',5)
  }
  return(
    <>
    <h2>Anecdotes</h2>
    {props.anecdotes.map(anecdote =>
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
const mapStateToProps = (state) => {
  return{
    anecdotes: state.anecdotes
  }
}
const mapDispatchToProps = {
  incrementVote,
  success
}
const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
export default ConnectedAnecdoteList