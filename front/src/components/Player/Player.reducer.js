import { PLAY_SONG, PLAY_TRACK_NO } from './Player.actions';

export default function(state = {album: {}, no: 0}, action) {
   //console.log(action.payload)
   switch(action.type) {
       case PLAY_SONG:
       return {...state, ...action.payload};
       
       case PLAY_TRACK_NO:
       return {...state, no: action.payload}

       default: return state;
   }
}