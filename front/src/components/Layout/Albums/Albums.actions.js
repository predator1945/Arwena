import axios from 'axios';

const instance = axios.create({baseURL: 'http://192.168.99.100:3001'})


export function fetchAlbums(id) {
    return dispatch => {
        const request = instance.get(`/albums/${id}`)
        .then(res => dispatch(fetchAlbumsSuccess(res.data[0])));   
    }
}

export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export function fetchAlbumsSuccess(data) {
    console.log("data")
    console.log(data);
    return {
        type: FETCH_ALBUMS_SUCCESS,
        payload: data
    };
}