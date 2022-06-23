import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
const createNew = async (content) => {
  const data = {content, votes: 0}
  const response = await axios.post(baseUrl, data)
return response.data
}
const update = async (id) => {
  const listAnecdote = await getAll()
  const anecdote = listAnecdote.find(anecdotes => anecdotes.id === id)
  const obj = {...anecdote, votes: 1 + anecdote.votes}
  const response = await axios.put(`${baseUrl}/${id}`, obj)
  return  response ? obj : null
}
export default { getAll, createNew, update }