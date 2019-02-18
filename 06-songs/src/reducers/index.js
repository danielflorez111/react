import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Song 1', duration: '4:05' },
        { title: 'Song 2', duration: '9:12' },
        { title: 'Song 3', duration: '3:07' },
        { title: 'Song 4', duration: '5:40' },
        { title: 'Song 5', duration: '4:34' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});