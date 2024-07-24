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
  background-color: #3788E5 !important;
  color: white !important;
  border-radius: 8px !important;
}
</style>