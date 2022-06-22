export const success = (messagge) => {
  return { 
    type: 'notification',
    messagge
  }
}
const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'notification':
      return action.messagge
    default: 
      return state
  }
}
export default notificationReducer