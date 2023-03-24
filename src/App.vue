<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Song Library</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" exact>HomePage</v-btn>
      <v-btn to="/bands">Bands</v-btn>
      <v-btn to="/songs">Songs</v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
}
</script>

<style>
/* Add your own global CSS styles here */
</style>
