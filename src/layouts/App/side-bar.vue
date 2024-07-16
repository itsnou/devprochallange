<template>
    <v-navigation-drawer
      app
      width="280"
      id="app-drawer"
      v-model="drawer"
      enable-resize-watcher
      floating
      mini-variant-width="80"
      class="vuse-sidebar"
      :mini-variant="isMinSideNav"
      :expand-on-hover="isMinSideNav"
      :left="!isSidenavPostionRight"
      :right="isSidenavPostionRight"
      :clipped="isClippedOver"
      :dark="semidark"
      :class="!semidark ? 'neu-glow' : ''"
    >
      <!-- App Logo -->
      <v-list-item
        v-if="!isClippedOver"
        :class="{ 'logo-section': true, 'semi-dark': semidark }"
      >
        <v-list-item-avatar tile>
          <!--<vuse-logo class="primary--text" size="30" :semi-dark="semidark" />-->
          <v-img
            :lazy-src="`/static/companies/${company.name.toLowerCase()}.png`"
            max-height="30"
            max-width="30"
            :src="`/static/companies/${company.name.toLowerCase()}.png`"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title primary--text">Matchup :: CRM</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-sheet color="transparent" :height="!isClippedOver ? 75 : 15" />
      <v-list
        dense
        v-bind="{ ...activeItemStyle }"
        expand="expand"
        class="nav-drawer transparent"
        id="app-sidebar"
      >
        <!-- <template v-for="(item, i) in itm">
          <ListGroup v-bind="item" :key="i" v-if="item.items" />
          <v-subheader
            v-else-if="item.header"
            class="heading-text ml-2 nav-subheader"
            :key="`${i}-item`"
            :class="{ 'mt-3': i !== 0 }"
          >
            <v-icon>more_horiz</v-icon>
            <span>
              {{ item.header }}
            </span>
          </v-subheader>
        </template> -->
        <v-spacer class="mb-5"></v-spacer>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script>
  import { mapGetters } from "vuex";
  import { getNavigationItems } from "@/config/navigation-items";
  import has from "lodash/has";
  
  export default {
    data() {
      return {
        items: getNavigationItems(),
      };
    },
    computed: {
      activeItemStyle: (state) => state.activeMenuStyle,
      ...mapGetters("navigations", [
        "isVisibleSideNav",
        "isMinSideNav",
        "activeItemStyle",
        "isSidenavPostionRight",
        "isClippedOver",
      ]),
      ...mapGetters("scheme", ["semidark"]),
      ...mapGetters("auth", ["companies", "selectedCompany"]),
      activemenu() {
        return this.$vuetify.theme.activemenu;
      },
      drawer: {
        get() {
          return this.isVisibleSideNav;
        },
        set(value) {
          this.$store.dispatch("navigations/setSidenavVisibility", value);
        },
      },
      itm() {
        return this.items.map(this.addLanguagePrefix);
      },
      company() {
        let vm = this;
        return this.companies.find(
          (company) => company.id == vm.selectedCompany
        );
      },
    },
    methods: {
      addLanguagePrefix(item) {
        const { items, ...props } = item;
        const newVal = has(props, "header")
          ? { header: 'ChallangeDevpro' }
          : { title: 'Challange devPro' };
        const newItem = {
          ...props,
          ...newVal,
        };
  
        if (items) {
          newItem.items = items.map(this.addLanguagePrefix);
        }
  
        return newItem;
      },
    },
  };
  </script>
  