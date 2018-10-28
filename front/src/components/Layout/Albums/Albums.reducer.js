import { FETCH_ALBUMS_SUCCESS } from './Albums.actions';

export default function(state = {songs: [], artist: "", name: ""}, action) {
   //console.log(action.payload)
   switch(action.type) {
       case FETCH_ALBUMS_SUCCESS:
       return {...state, ...action.payload};

       default: return state;
   }
}