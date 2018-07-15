import axios from 'axios'

export const ADD_ARTIST = "ADD_ARTIST"
export function addArtist(name, cb) {
    const req = axios.post("/admin/artists", { name })
        .then(() => cb());

    return {
        type: ADD_ARTIST,
        payload: req,
    }
}