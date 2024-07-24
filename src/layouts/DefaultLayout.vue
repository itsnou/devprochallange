<template>
  <div id="app">
    <v-app id="inspire">
      <v-app-bar app color="white">
        <v-container class="py-0 fill-height">
          <v-row align="center" justify="space-between">
            <v-col cols="8">
              <v-text-field
                solo
                hide-details
                dense
                prepend-inner-icon="mdi-magnify"
                label="Search"
                class="search"
              ></v-text-field>
            </v-col>
            <v-col class="d-flex justify-end align-center">
              <v-btn icon class="mr-4">
                <v-icon>mdi-clock-outline</v-icon>
              </v-btn>
              <v-btn icon class="mr-4">
                <v-icon>mdi-bell-outline</v-icon>
              </v-btn>
              <v-btn color="primary" class="btn">
                Add widget
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>
      <v-navigation-drawer permanent app class="px-4">
        <v-list nav dense class="px-2">
          <v-list-item @click="goToDashboard">
            <div class="d-flex gap-2 mx-auto">
              <img src="@/assets/logo.png" />
              <v-list-item-title class="title">PetCare.</v-list-item-title>
            </div>
          </v-list-item>
          <div v-for="(section, index) in getMenuItems" :key="index">
            <v-subheader v-if="section.section" class="section-name">{{ section.section }}</v-subheader>
            <v-list-item
              v-for="(item, idx) in section.items"
              :key="idx"
              :to="item.url"
              link
              @click="item.name === 'logout' ? logout() : null"
              :class="item.name === 'logout' ? 'logout' : ''"
            >
              <v-list-item-icon>
                <v-icon :color="item.iconColor || ''">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title :class="item.titleClass || 'simple-title'">{{ item.title }}</v-list-item-title>
              <v-list-item-action v-if="item.badge">
                <v-badge :color="item.badge.color" class="rect" inline>
                  <template v-slot:badge>
                    <div class="my-badge">{{item.badge.content}}</div>
                  </template>
                </v-badge>
              </v-list-item-action>
            </v-list-item>
            <v-divider v-if="index < getMenuItems.length - 2" class="my-2" color="#DAE3F8"></v-divider>
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
      localStorage.removeItem('token');
      this.$router.push('/login')
    },
    goToDashboard() {
      this.$router.push('/dashboard')
    }
  },
  computed: {
    getMenuItems() {
      return menuItems
    }
  }
}
</script>

<style scoped lang="scss">
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
.v-text-field--solo-inverted.v-input--is-focused > .v-input__control {
  background: white;
}
:deep(.search){
  border-radius: 8px;
  width: 887px;
}

:deep(.rect .v-badge__badge) {
  border-radius: 8px;
}

:deep(.my-badge) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  font-size: 14px;
  height: 100%;
  color: #fff;
}

.section-name {
  font-weight: 500;
  font-size: 16px;
  opacity: 70%;
  color: #0B1C33;
  line-height: 22.4px;
}

.simple-title{
  font-weight: 500;
  font-size: 16px;
  color: #0B1C33;
  line-height: 22.4px;
}
</style>