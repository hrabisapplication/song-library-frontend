export default {
    allBands(state) {
      return state.bands;
    },
    allSongs(state) {
      return state.songs;
    },
    bandById: (state) => (id) => {
      return state.bands.find((band) => band.id === id);
    },
    songById: (state) => (id) => {
      return state.songs.find((song) => song.id === id);
    },
  };
  