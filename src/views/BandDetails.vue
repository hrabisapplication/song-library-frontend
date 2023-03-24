<template>
    <div>
      <v-container>
        <v-row>
          <v-col cols="12" class="text-h5">
            {{ band.name }}
          </v-col>
          <v-col cols="12" class="text-h6">
            {{ band.genre }}
          </v-col>
          <v-col cols="12" class="mt-3">
            <p>{{ band.description }}</p>
          </v-col>
          <v-col cols="12" class="mt-3">
            <h4>Songs</h4>
            <v-list>
              <song-list-item
                v-for="song in band.songs"
                :key="song.id"
                :song="song"
              ></song-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  import SongListItem from '@/components/SongListItem.vue'
  
  export default {
    name: 'BandDetails',
    components: {
      SongListItem,
    },
    computed: {
      band() {
        return this.$store.getters.band(this.$route.params.id)
      },
    },
  }
  </script>
  