export default {
    SET_BANDS(state, bands) {
      state.bands = bands;
    },
    ADD_BAND(state, band) {
      state.bands.push(band);
    },
    UPDATE_BAND(state, band) {
      const index = state.bands.findIndex((b) => b.id === band.id);
      if (index !== -1) {
        state.bands.splice(index, 1, band);
      }
    },
    DELETE_BAND(state, bandId) {
      state.bands = state.bands.filter((b) => b.id !== bandId);
    },
    SET_SONGS(state, songs) {
      state.songs = songs;
    },
    ADD_SONG(state, song) {
      state.songs.push(song);
    },
    UPDATE_SONG(state, song) {
      const index = state.songs.findIndex((s) => s.id === song.id);
      if (index !== -1) {
        state.songs.splice(index, 1, song);
      }
    },
    DELETE_SONG(state, songId) {
      state.songs = state.songs.filter((s) => s.id !== songId);
    },
  };
  