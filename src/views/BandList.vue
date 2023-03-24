<template>
    <div>
      <v-container>
        <v-row>
          <v-col>
            <h1>Bands</h1>
            <v-btn color="primary" @click="addBandDialog = true">Add Band</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-data-table :headers="headers" :items="bands" :search="search" class="elevation-1">
              <template v-slot:[`item.actions`]="{ item }">
                <v-btn color="primary" :to="{ name: 'band-details', params: { id: item.id } }">View</v-btn>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-container>
      <v-dialog v-model="addBandDialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">Add Band</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field v-model="name" :rules="[rules.required]" label="Name"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="addBandDialog = false">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="saveBand" :disabled="!valid">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    name: 'BandList',
    data: () => ({
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
      bands: [],
      search: '',
      addBandDialog: false,
      valid: false,
      name: '',
      rules: {
        required: value => !!value || 'Required.'
      }
    }),
    computed: {
      ...mapGetters(['bandsList'])
    },
    created() {
      this.fetchBands();
    },
    methods: {
      ...mapActions(['fetchBands', 'addBand']),
      saveBand() {
        this.addBand({ name: this.name });
        this.addBandDialog = false;
        this.name = '';
      }
    }
  };
  </script>
  