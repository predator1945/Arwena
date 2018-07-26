import { FETCH_ARTISTS, ADD_ARTIST } from './../components/Admin/Artists/Artists.actions'

export default function (state = {artists:[], }, action) {
    switch (action.type) {
        case FETCH_ARTISTS:
            return { ...state, artists: action.payload }

        


        default: return state;
    }
}