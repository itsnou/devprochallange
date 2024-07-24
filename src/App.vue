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


<style scoped>
body {
  font-family: 'Rethink Sans', sans-serif !important;
}
:deep(.v-application) {
  font-family: 'Rethink Sans', sans-serif !important;
}
:deep(.v-application .text-subtitle-1) {
  font-family: 'Rethink Sans', sans-serif !important;
}
:deep(.btn) {
  border-radius: 8px; 
}
</style>