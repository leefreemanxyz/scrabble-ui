import { CALL_API, CREATE } from '../../middleware/api'

export default (move) => {
  return (dispatch) => {
    dispatch({
      [CALL_API]: {
        service: 'moves',
        method: CREATE,
        authenticate: true,
        params:{ word: move[0],
                  startPosition: move[1],
                gameId: move[2],
                query: {gameId: move[2]}
              }
      }
    })
  }
}
