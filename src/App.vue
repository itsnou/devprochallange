<template>
  <v-app>
    <router-view name="sidebar" />
    <router-view name="header" :handleSettingsDrawer="handleSettingsDrawer" />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
    handleSettingsDrawer() {
      this.settingsDrawer = !this.settingsDrawer;
    },
  },
};
</script>
