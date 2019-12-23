import Vue from 'vue';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueApollo);
// 创建客户端
const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
});

// 创建apolloProvider实例
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});


new Vue({
  router,
  apolloProvider,
  render: h => h(App),
}).$mount('#app');

