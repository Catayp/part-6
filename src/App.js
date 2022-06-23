import React, {useEffect} from 'react'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notificacion from './components/Notification'
import { initializateAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializateAnecdotes())
  }, [dispatch])
  
  return (
    <div>
      <Notificacion />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}
export default App