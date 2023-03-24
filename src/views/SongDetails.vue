<template>
    <div>
      <h1>{{ song.title }}</h1>
      <h2>{{ song.band.name }}</h2>
      <p>{{ song.lyrics }}</p>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex'
  
  export default {
    computed: {
      ...mapState(['songs']),
      song() {
        return this.songs.find(s => s.id === this.$route.params.id)
      },
    },
  }
  </script>
  