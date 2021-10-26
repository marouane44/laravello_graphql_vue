import ApolloClient from 'apollo-boost'

import Vue from 'vue';
 import VueApollo from 'vue-apollo';
 import './bootstrap';

 import Board from './Board';

window.Vue = Vue;


 Vue.component('Board',Board);
 Vue.use(VueApollo);

 const apolloClient = new ApolloClient({
     uri :'http://127.0.0.1:8000/graphql'
 });
 const apolloProvider = new VueApollo({
    defaultClient: apolloClient, 
});

const app = new Vue({
    el: '#app',
    apolloProvider
});
