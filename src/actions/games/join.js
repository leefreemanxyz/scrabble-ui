import { CALL_API, UPDATE } from '../../middleware/api'

export default () => {
  return {
    [CALL_API]: {
      service: 'games',
      method: UPDATE,
      type: 'GAME_UPDATED',
      authenticate: true,
      params:{joinGame: !join}
    }
  }
}
