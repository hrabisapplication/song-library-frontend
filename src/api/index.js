import axios from 'axios';

const API_URL = 'http://localhost:8080';

export default {
  async getAllBands() {
    const response = await axios.get(`${API_URL}/bands`);
    return response.data;
  },
  async getBandById(id) {
    const response = await axios.get(`${API_URL}/bands/${id}`);
    return response.data;
  },
  async createBand(data) {
    const response = await axios.post(`${API_URL}/bands`, data);
    return response.data;
  },
  async updateBand(id, data) {
    const response = await axios.put(`${API_URL}/bands/${id}`, data);
    return response.data;
  },
  async deleteBand(id) {
    const response = await axios.delete(`${API_URL}/bands/${id}`);
    return response.data;
  },
  async getAllSongs() {
    const response = await axios.get(`${API_URL}/songs`);
    return response.data;
  },
  async getSongById(id) {
    const response = await axios.get(`${API_URL}/songs/${id}`);
    return response.data;
  },
  async createSong(data) {
    const response = await axios.post(`${API_URL}/songs`, data);
    return response.data;
  },
  async updateSong(id, data) {
    const response = await axios.put(`${API_URL}/songs/${id}`, data);
    return response.data;
  },
  async deleteSong(id) {
    const response = await axios.delete(`${API_URL}/songs/${id}`);
    return response.data;
  },
};
