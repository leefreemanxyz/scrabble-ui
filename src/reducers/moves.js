import {
  SUBSCRIBED_TO_MOVES_SERVICE,
  MOVE_CREATED,
  MOVE_UPDATED,
  MOVE_REMOVED
} from '../actions/moves/subscribe'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case SUBSCRIBED_TO_MOVES_SERVICE :
      return [].concat(payload)

    case MOVE_CREATED :
      return payload.data

    case MOVE_UPDATED :
      return state.map((move) => {
        if (move._id === payload._id) {
          return Object.assign({}, payload)
        }
        return move
      })

    case MOVE_REMOVED :
      return state.filter((move) => (move._id !== payload._id))

    default :
      return state
  }
}
