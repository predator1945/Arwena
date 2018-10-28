import axios from 'axios';

const instance = axios.create({baseURL: 'http://192.168.99.100:3003'})


export const FETCH_COLLECTIONS = 'FETCH_COLLECTIONS';
export function fetchCollections() {
    return dispatch => {
        const request = instance.get(`/collections`)
        .then(res => dispatch(fetchCollectionsSuccess(res.data)));   
    }
}

export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS';
export function fetchCollectionsSuccess(data) {
    
    console.log(data);
    return {
        type: FETCH_COLLECTIONS_SUCCESS,
        payload: data
    };
}