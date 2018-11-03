import { PLAY_SONG, PLAY_TRACK_NO, SET_PROGRESS } from './Player.actions';

export default function (state = { album: {}, no: 0, progress: 0 }, action) {
    //console.log(action.payload)
    switch (action.type) {
        case PLAY_SONG:
            return { ...state, ...action.payload };

        case PLAY_TRACK_NO:
            return { ...state, 
                no: action.payload 
            }

        case SET_PROGRESS:
            return { ...state, progress: action.payload }

        default: return state;
    }
}