import ApolloClient from 'apollo-boost';
import Vue from 'vue';
import VueApollo from 'vue-apollo';

Vue.use(VueApollo);

const apolloClient = new ApolloClient({

    uri: 'http://127.0.0.1:8000/graphql',
    headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
    },
    Credential:'include',
    onError: (err) =>console.log('Aglobal erro handler!')

});

export default new VueApollo({
    defaultClient: apolloClient
})

