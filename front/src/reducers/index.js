import { combineReducers } from 'redux'
import collections from '../components/Layout/Collections/Collections.reducer'
import albums from '../components/Layout/Albums/Albums.reducer'

export default combineReducers({
    collections,
    albums
})