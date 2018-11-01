export function playSong(album, no) {
    return dispatch => {
        dispatch(playSongSuccess(album, no))
    }
}

export const PLAY_SONG = 'PLAY_SONG';
export function playSongSuccess(album, no) {
    return {
        type: PLAY_SONG,
        payload: {album, no}
    };
}

