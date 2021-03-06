import { CALL_API, CREATE } from '../../middleware/api'

export default (messageText) => {
  return (dispatch) => {
    dispatch({
      [CALL_API]: {
        service: 'messages',
        method: CREATE,
        //type: 'MESSAGE_CREATED',
        authenticate: true,
        params:{ text: messageText }
      }
    })
  }
}
