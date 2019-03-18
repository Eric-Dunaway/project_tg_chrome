<template>
  <v-app>
    <!-- TODO: enable theme switching w/ dark and light props
    -will need to swap techtonic icon too-->
    <v-toolbar app>
      <v-toolbar-side-icon
        v-model="drawerLeft"
        @click.stop="miniVariantLeft = !miniVariantLeft"
      />
      <v-btn @click="googleSignIn">
        sign in
      </v-btn>
      <v-toolbar-title class="headline">
        <span>Techtonic</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        href="https://www.techtonic.com"
        target="_blank"
        flat
      >
        <v-img
          :src="require('../assets/techtonic_black.webp')"
          contain
        />
      </v-btn>
      <v-toolbar-side-icon
        v-model="drawerRight"
        @click.stop="drawerRight = !drawerRight"
      />
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawerLeft"
      persistent
      :mini-variant="miniVariantLeft"
      :clipped="clipped"
      enable-resize-watcher
      width="500"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in itemsLeft"
          :key="i"
          value="true"
        >
          <v-list-tile-action>
            <v-icon class="black--text">
              {{ item.icon }}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer
      v-model="drawerRight"
      persistent
      :mini-variant="miniVariantRight"
      :clipped="clipped"
      enable-resize-watcher
      fixed
      right
      app
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon
              large
              class="black--text"
            >
              notifications
            </v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile
          v-for="(item, i) in itemsRight"
          :key="i"
          value="true"
        >
          <v-list-tile-action>
            <v-icon class="black--text">
              {{ item.icon }}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <!-- this displays the pages listed in router/routes.js -->
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase';
// import components for drawers here

export default {
  components: {
    // register components for drawers here
  },
  data: () => ({
    clipped: true,
    // Left side drawer
    drawerLeft: true,
    itemsLeft: [
      {
        icon: 'extension',
        title: 'Inspire',
      },
      {
        icon: 'bubble_chart',
        title: 'Me',
      },
    ],
    miniVariantLeft: true,
    // Right side drawer
    drawerRight: true,
    itemsRight: [
      {
        icon: 'notifications_off',
        title: 'Inspire',
      },
    ],
    miniVariantRight: true,
  }),
  methods: {
    googleSignIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>
