<template>
    <v-list-item :to="{ name: 'band-details', params: { id: band.id } }">
      <v-list-item-avatar>
        <v-icon>mdi-music</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ band.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ band.description }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </template>
  
  <script>
  export default {
    props: {
      band: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  