import API from '../../lib/api'
import { CALL_API, CREATE } from '../../middleware/api'


const api = new API()
const messages = api.service('messages')

export default (messageText) => {
  return (dispatch) => {
    dispatch({
      [CALL_API]: {
        service: 'messages',
        method: CREATE,
        type: 'SHUT UP',
        authenticate: true,
        params:{ text: messageText }
      }
    })
  }


}
