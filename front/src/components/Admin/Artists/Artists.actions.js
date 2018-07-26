import axios from 'axios'

export const ADD_ARTIST = "ADD_ARTIST"
export function addArtist(name, cb) {
    const req = axios.post("localhost:4000/api/admin/artists", { name })
        .then(() => cb());

    return {
        type: ADD_ARTIST,
        payload: req,
    }
}

export const FETCH_ARTISTS = "FETCH_ARTISTS"
export function fetchArtists(cb) {
    const req = axios.get("localhost:4000/api/admin/artists")
        .then(() => cb());

    return {
        type: FETCH_ARTISTS,
        payload: req,
    }
}