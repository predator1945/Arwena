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

export function playNext(no) {
    return dispatch => {
        dispatch(playTrackNo(no + 1))
    }
}

export function playPrev(no) {
    return dispatch => {
        dispatch(playTrackNo(no - 1))
    }
}

export const PLAY_TRACK_NO = 'PLAY_TRACK_NO';
export function playTrackNo(no) {
    return {
        type: PLAY_TRACK_NO,
        payload: no
    };
}
export const SET_PROGRESS = 'SET_PROGRESS';
export function setProgress(progress) {
    return dispatch => {
        dispatch(setProgressSuccess(progress))
    }
}
export function setProgressSuccess(progress) {
    return {
        type: SET_PROGRESS,
        payload: progress
    };
}




