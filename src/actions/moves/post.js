import { CALL_API, CREATE } from '../../middleware/api'

export default (move) => {
  return (dispatch) => {
    dispatch({
      [CALL_API]: {
        service: 'moves',
        method: CREATE,
        type: 'MOVE_CREATED',
        authenticate: true,
        params:{ move: move }
      }
    })
  }
}
