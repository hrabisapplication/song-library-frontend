<template>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          {{ song.name }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ song.artist }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn text icon @click="editSong">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn text icon @click="deleteSong">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </template>
  
  <script>
  export default {
    props: {
      song: {
        type: Object,
        required: true
      }
    },
    methods: {
      editSong() {
        // emit an event to parent component to open song form with the current song data
        this.$emit("edit-song", this.song);
      },
      deleteSong() {
        // emit an event to parent component to delete the current song
        this.$emit("delete-song", this.song);
      }
    }
  };
  </script>
  