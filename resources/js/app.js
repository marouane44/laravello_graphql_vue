import Vue from 'vue';
//import ApolloClient from 'apollo-boost'

import apolloProvider from './apollo.config';
 //import VueApollo from 'vue-apollo';


 import Board from './Board'; 
 import './bootstrap';
import router from "./router.config";
import store from "./vuex.config";
window.Vue = Vue;


Vue.component('Board',Board);
// Vue.use(VueApollo);

 //const apolloClient = new ApolloClient({
 //    uri :'http://127.0.0.1:8000/graphql'
 //});
// const apolloProvider = new VueApollo({
//   defaultClient: apolloClient, 
//});

const app = new Vue({
    el: '#app',
    apolloProvider,
    router,
    store,
    beforeCreate(){
        store.dispatch('setLoggedIn',localStorage.getItem('isLoggedIn')==='true');
        store.dispatch('fetchCurrentUser'); 
    }
      
});
