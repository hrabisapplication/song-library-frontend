<template>
    <v-form @submit.prevent="submitForm">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="song.title"
              label="Title"
              required
              :rules="[(v) => !!v || 'Title is required']"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="song.artist"
              label="Artist"
              required
              :rules="[(v) => !!v || 'Artist is required']"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="song.album"
              label="Album"
              required
              :rules="[(v) => !!v || 'Album is required']"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="song.genre"
              label="Genre"
              required
              :rules="[(v) => !!v || 'Genre is required']"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-textarea
              v-model="song.lyrics"
              label="Lyrics"
              required
              :rules="[(v) => !!v || 'Lyrics are required']"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn type="submit" color="primary">Submit</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        song: {
          title: '',
          artist: '',
          album: '',
          genre: '',
          lyrics: '',
        },
      };
    },
    methods: {
      submitForm() {
        // Submit form data to API or dispatch Vuex action
        console.log(this.song);
      },
    },
  };
  </script>
  