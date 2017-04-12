import {API_ERROR, API_READY, API_RETURNED} from '../middleware/api'

export default (state={}, {type, payload} = {}) => {
  switch(type) {
    case API_READY:
    return {}

    case API_RETURNED:
    return {}

    case API_ERROR:
    return payload
    default:
      return state
  }
}
