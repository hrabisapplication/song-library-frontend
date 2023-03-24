<template>
    <div>
      <h2>Songs</h2>
      <v-data-table :headers="headers" :items="songs" :search="search" class="elevation-1">
  <template v-slot:[`item.actions`]="{ item }">
    <v-btn color="primary" :to="{ name: 'song-details', params: { id: item.id } }">View</v-btn>
  </template>
</v-data-table>

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        headers: [
          { text: 'Title', value: 'title' },
          { text: 'Artist', value: 'artist' },
          { text: 'Album', value: 'album' },
          { text: 'Year', value: 'year' },
          { text: 'Genre', value: 'genre' },
        ],
        search: '',
        songs: [
          {
            id: 1,
            title: 'Bohemian Rhapsody',
            artist: 'Queen',
            album: 'A Night at the Opera',
            year: 1975,
            genre: 'Rock',
          },
          {
            id: 2,
            title: 'Stairway to Heaven',
            artist: 'Led Zeppelin',
            album: 'Led Zeppelin IV',
            year: 1971,
            genre: 'Rock',
          },
        ],
      };
    },
  };
  </script>
  