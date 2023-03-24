<template>
    <v-form @submit.prevent="submitForm">
      <v-text-field v-model="name" label="Name" required></v-text-field>
      <v-text-field v-model="yearFormed" label="Year Formed" type="number"></v-text-field>
      <v-text-field v-model="genre" label="Genre"></v-text-field>
      <v-text-field v-model="numAlbums" label="Number of Albums" type="number"></v-text-field>
      <v-btn type="submit" :disabled="!isValid" color="primary">Submit</v-btn>
    </v-form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        yearFormed: null,
        genre: '',
        numAlbums: null,
      }
    },
    computed: {
      isValid() {
        return !!this.name && !!this.yearFormed && !!this.genre && !!this.numAlbums;
      },
    },
    methods: {
      submitForm() {
        const newBand = {
          name: this.name,
          yearFormed: this.yearFormed,
          genre: this.genre,
          numAlbums: this.numAlbums,
        };
        this.$store.dispatch('addBand', newBand);
        this.$router.push({ name: 'BandList' });
      },
    },
  };
  </script>
  