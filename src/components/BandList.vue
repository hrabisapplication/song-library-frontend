<template>
    <div>
      <v-card class="mb-6" v-for="band in bands" :key="band.id">
        <v-card-title>{{ band.name }}</v-card-title>
        <v-card-text>{{ band.description }}</v-card-text>
        <v-list-item-group>
          <v-list-item v-for="song in band.songs" :key="song.id">
            <v-list-item-content>{{ song.name }}</v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-card-actions>
          <router-link :to="{ name: 'BandDetails', params: { id: band.id } }">Details</router-link>
        </v-card-actions>
      </v-card>
    </div>
  </template>
  
  <script>
  export default {
    name: "BandList",
    props: {
      bands: Array,
    },
  };
  </script>
  