import { FETCH_COLLECTIONS_SUCCESS } from './Collections.actions';

export default function(state = {list: []}, action) {
   //console.log(action.payload)
   switch(action.type) {
       case FETCH_COLLECTIONS_SUCCESS:
       console.log(action.payload.data)
       return {...state, list: action.payload};

       default: return state;
   }
}