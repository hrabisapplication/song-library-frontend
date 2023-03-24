<template>
    <div>
      <h2 class="text-center">Song List</h2>
      <v-list>
        <v-list-item-group
          v-if="songs && songs.length > 0"
          v-model="selectedSongId"
          :value="selectedSongId"
          color="primary"
        >
          <v-list-item
            v-for="(song, index) in songs"
            :key="index"
            :value="song.id"
            @click="onSongClick(song)"
          >
            <v-list-item-content>
              <v-list-item-title>
                {{ song.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ song.description }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <div v-else>
          No songs found.
        </div>
      </v-list>
    </div>
  </template>
  
  <script>
  export default {
    name: "SongList",
    props: {
      songs: {
        type: Array,
        required: true,
      },
      onSongSelected: {
        type: Function,
        required: true,
      },
    },
    data() {
      return {
        selectedSongId: null,
      };
    },
    methods: {
      onSongClick(song) {
        this.selectedSongId = song.id;
        this.onSongSelected(song);
      },
    },
  };
  </script>
  