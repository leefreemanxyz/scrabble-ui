// src/actions/moves/subscribe.js
import API from '../../lib/api'
import { history } from '../../store'
import { CALL_API, FIND } from '../../middleware/api'

export const SUBSCRIBED_TO_MOVES_SERVICE = 'SUBSCRIBED_TO_MOVES_SERVICE'
export const MOVE_CREATED = 'MOVE_CREATED'
export const MOVE_UPDATED = 'MOVE_UPDATED'
export const MOVE_REMOVED = 'MOVE_REMOVED'

const api = new API()
const moves = api.service('moves')

export default () => {
  return (dispatch) => {
    moves.on('created', (move) => { dispatch(createdMessage(move)) })
    moves.on('updated', (move) => { dispatch(updatedMessage(move)) })
    moves.on('patched', (move) => { dispatch(updatedMessage(move)) })
    moves.on('removed', (move) => { dispatch(removedMessage(move)) })

    dispatch({
      [CALL_API]: {
        service: 'moves',
        method: FIND,
        type: SUBSCRIBED_TO_MOVES_SERVICE,
        authenticate: true,

      }
    })
  }
}

const createdMessage = (move) => {
  return {
    type: MOVE_CREATED,
    payload: move
  }
}

const updatedMessage = (move) => {
  return {
    type: MOVE_UPDATED,
    payload: move
  }
}

const removedMessage = (move) => {
  return {
    type: MOVE_REMOVED,
    payload: move
  }
}
