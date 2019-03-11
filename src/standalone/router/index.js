import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '../../plugins/vuetify';

Vue.use(VueRouter);

export default new VueRouter({
  routes,
});
