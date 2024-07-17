<template>
  <div id="app">
    <v-app id="inspire">
      <v-app-bar app>
        Title
      </v-app-bar>
      <v-navigation-drawer permanent app class="px-4">
        <v-list nav dense class="px-2">
          <v-list-item link href="/">
            <div class="d-flex gap-2 mx-auto">
              <img src="@/assets/logo.png" />
              <v-list-item-title class="title">PetCare.</v-list-item-title>
            </div>
          </v-list-item>
          <div v-for="(section, index) in getMenuItems" :key="index">
            <v-subheader v-if="section.section">{{ section.section }}</v-subheader>
            <v-list-item
              v-for="(item, idx) in section.items"
              :key="idx"
              :to="item.url"
              link
              @click="item.action ? $emit(item.action) : null"
              :class="item.action ? 'logout' : ''"
            >
              <v-list-item-icon>
                <v-icon :color="item.iconColor || ''">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title :class="item.titleClass || ''">{{ item.title }}</v-list-item-title>
              <v-list-item-action v-if="item.badge">
                <v-badge :color="item.badge.color" :content="item.badge.content" overlap>
                  <v-icon>{{ item.badge.icon }}</v-icon>
                </v-badge>
              </v-list-item-action>
            </v-list-item>
          </div>
        </v-list>
      </v-navigation-drawer>
      
      <slot />
    </v-app>
  </div>
</template>

<script>
import { menuItems } from '@/utils/NavItems'

export default {
  name: 'default-layout',
  methods: {
    logout() {
      console.log('Logging out...');
    }
  },
  computed: {
    getMenuItems() {
      return menuItems
    }
  }
}
</script>

<style scoped>
.v-list-item__action {
  margin-left: auto;
}

.logout {
  position: absolute;
  bottom: 25px;
}
.v-list-item--active{
  background-color: #3788E5;
  color: white;
  border-radius: 16px;
}
</style>