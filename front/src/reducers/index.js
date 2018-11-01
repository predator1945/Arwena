import { combineReducers } from 'redux'
import collections from '../components/Layout/Collections/Collections.reducer'
import albums from '../components/Layout/Albums/Albums.reducer'
import player from './../components/Player/Player.reducer'

export default combineReducers({
    collections,
    albums,
    player
})