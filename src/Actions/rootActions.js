
export const MUSICIANS_FETCH = 'MUSICIAN_FETCH'
export const MUSICIAN_LIKE = 'MUSICIAN_LIKE'

export const actionTypes = {
  MUSICIANS_FETCH,
  MUSICIAN_LIKE
}

export const musiciansFetch = () => (
  {
    type: MUSICIANS_FETCH,
    payload: null
  }
)

export const musicianLike = (id) => (
    {
      type: MUSICIAN_LIKE,
      payload: id
    }
)

export const actions = {
  musiciansFetch,
  musicianLike
}