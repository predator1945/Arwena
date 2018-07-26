import axios from 'axios'

export const ADD_ARTIST = "ADD_ARTIST"
export function addArtist(name, cb) {
    return dispatch => {

        axios.post("http://localhost:3000/api/admin/artists", { name })
            .then(res => dispatch((res) => ({
                type: ADD_ARTIST,
                payload: res.data
            })));
    }
}

export const FETCH_ARTISTS = "FETCH_ARTISTS"
export function fetchArtists() {
    return dispatch => {
        axios.get("http://localhost:3000/api/admin/artists")
            .then(res => {
                console.log()
                const data = res.data
                dispatch(fetchedArtists(data))
            })


    }
}

export function fetchedArtists(data) {
    return {
        type: FETCH_ARTISTS,
        payload: data
    }
}