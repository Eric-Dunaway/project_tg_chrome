<template>
  <v-app>
    <!-- TODO: enable theme switching w/ dark and light props
    -will need to swap techtonic icon too-->
    <v-toolbar app>
      <v-toolbar-side-icon
        v-model="drawerLeft"
        @click.stop="drawerLeft = !drawerLeft"
      />
      <v-btn @click="googleSignIn(true)">
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
      mini-variant
      temporary
      app
      floating
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
      mini-variant
      temporary
      floating
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
import firebase from 'firebase/app';
import 'firebase/auth';
import { google } from 'googleapis';
// import components for drawers here

export default {
  components: {
    // register components for drawers here
  },
  data: () => ({
    // Left side drawer
    drawerLeft: false,
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
    // Right side drawer
    drawerRight: false,
    itemsRight: [
      {
        icon: 'notifications_off',
        title: 'Inspire',
      },
    ],
  }),
  beforeCreate() {
    this.initCalendar();
  },
  methods: {
    googleSignIn(interactive) {
      browser.identity.getAuthToken({ interactive: !!interactive }, (token) => {
        if (browser.runtime.lastError && !interactive) {
          console.log('It was not possible to get a token programmatically.');
        } else if (browser.runtime.lastError) {
          console.error(browser.runtime.lastError);
        } else if (token) {
          // Authorize Firebase with the OAuth Access Token.
          const credential = firebase.auth.GoogleAuthProvider.credential(
            null,
            token,
          );
          firebase
            .auth()
            .signInAndRetrieveDataWithCredential(credential)
            .catch((error) => {
              // The OAuth token might have been invalidated. Lets' remove it from cache.
              if (error.code === 'auth/invalid-credential') {
                browser.identity.removeCachedAuthToken({ token }, () => {
                  this.googleSignIn(interactive);
                });
              }
            });
        } else {
          console.error('The OAuth Token was null');
        }
      });
    },

    initCalendar() {
      console.log('working');
      google.load('client', () => {
        google.client.init({
          apiKey: 'AIzaSyAwE84VTKNXhR-3iupxN9GFpx3EXjN55gw',
          clientId:
            '876962566748-p2ph7khp7kcml7j2j6gfhe1htsv8m6jj.apps.googleusercontent.com',
          discoveryDocs: [
            'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
          ],
          scope: 'https://www.googleapis.com/auth/calendar.events.readonly',
        });
        google.client.load('calendar', () => console.log('calendar loaded'));
      });
    },

    async getCalendar() {
      const events = await google.client.calendar.events.list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        orderBy: 'startTime',
      });
      console.log(events.resutl.items);
    },
  },
};
</script>

<style>
html,
body {
  width: 101%;
  height: 101%;
  position: fixed;
  overflow: auto;
  padding: 0;
  margin: 0;
}
</style>
