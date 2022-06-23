export const success = (messagge, number=3000) => {
  return async dispatch => { 
    dispatch({
      type: 'notification',
      messagge
    })
    setTimeout(() => {
      dispatch({type: 'notification', messagge: null})
    }, number)
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