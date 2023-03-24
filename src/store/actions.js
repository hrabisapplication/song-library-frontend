import axios from 'axios'

export default {
  async fetchBands ({ commit }) {
    const response = await axios.get('/bands')
    commit('SET_BANDS', response.data)
  },

  async fetchSongs ({ commit }) {
    const response = await axios.get('/songs')
    commit('SET_SONGS', response.data)
  },

  async addBand ({ commit }, band) {
    const response = await axios.post('/bands', band)
    commit('ADD_BAND', response.data)
  },

  async addSong ({ commit }, song) {
    const response = await axios.post('/songs', song)
    commit('ADD_SONG', response.data)
  },

  async updateBand ({ commit }, band) {
    const response = await axios.put(`/bands/${band.id}`, band)
    commit('UPDATE_BAND', response.data)
  },

  async updateSong ({ commit }, song) {
    const response = await axios.put(`/songs/${song.id}`, song)
    commit('UPDATE_SONG', response.data)
  },

  async deleteBand ({ commit }, id) {
    await axios.delete(`/bands/${id}`)
    commit('DELETE_BAND', id)
  },

  async deleteSong ({ commit }, id) {
    await axios.delete(`/songs/${id}`)
    commit('DELETE_SONG', id)
  }
}
