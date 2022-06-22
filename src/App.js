import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notificacion from './components/Notification'

const App = () => {
  return (
    <div>
      <Notificacion />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}
export default App