import { PLAY_SONG } from './Player.actions';

export default function(state = {album: {}, no: 0}, action) {
   //console.log(action.payload)
   switch(action.type) {
       case PLAY_SONG:
       console.log(action)
       return {...state, ...action.payload};

       default: return state;
   }
}