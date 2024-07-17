<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <snackbar-notify />

  </v-app>
</template>

<script>
import SnackbarNotify from '@/components/Notify/Snackbar'

export default {
  name: 'App',
  components: {
    SnackbarNotify,
  },
  data: () => ({
    //
  }),
};
</script>
