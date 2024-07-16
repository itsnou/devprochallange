<template>
  <div>
    <v-snackbar v-model="snackbar" app bottom right :color="type">
      <span>{{ message ? message: ''}}</span>
      <v-icon dark>{{ icon }}</v-icon>
    </v-snackbar>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: 'snackbar-notify',
  data() {
    return {
      snackbar: false,
    };
  },
  computed: {
    ...mapState("notify", {
      type: (state) => state.type,
      message: (state) => state.message,
      loading: (state) => state.loading,
      icon: (state) => state.icon,
    }),
  },
  methods: {
    ...mapActions("notify", ["doClearNotify"]),
    showNotif() {
      this.snackbar = true;
      setTimeout(() => {
        this.doClearNotify();
        this.snackbar = false;
      }, 2500);
    },
  },
  watch: {
    message(val) {
      if (val !== "" && val !== undefined && val !== null) {
        this.showNotif();
      }
    },
  },
};
</script>