import { useSelector, useDispatch } from 'react-redux'
import { success } from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()
  setTimeout(() => {
    dispatch(success(null))
  }, 5000)
 
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }
  if(notification === null){
    return false
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}
export default Notification