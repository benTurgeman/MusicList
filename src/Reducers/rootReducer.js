import {MUSICIAN_LIKE, MUSICIANS_FETCH} from '../Actions/rootActions'
import musicianJson from '../Musicians.json'

const initialState = {
    musicians: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case MUSICIANS_FETCH:
            const musicians = musicianJson.musicians
            return {...state, musicians}
        case MUSICIAN_LIKE: 
            const updatedMusicians = musicianLikeIncrement(state.musicians, action.payload)
            return {
                ...state,
                musicians: updatedMusicians
            }
        default:
            return state
    }
}

function musicianLikeIncrement(array, musicianId) {
    return array.map(item => {
        if(item.id !== musicianId) return item
        return {
            ...item,
            likes: item.likes + 1
        }
    })
}

export default rootReducer