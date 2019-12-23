<template>
  <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <ul>
          <li v-for="category in categorise" :key="category.id">
            {{category.name}}
          </li>
        </ul>
      </div>
</template>

<script>
import gql from 'apollo-boost';
import HelloWorld from '@/components/HelloWorld.vue';

// const queryCategories = gql`
//   query {
//     getCategories {
//       id
//       name
//     }
//   }
// `;


export default {
  name: 'home',
  data() {
    return {
      categorise: [],
    };
  },
  // apollo: {
  //   categorise: {
  //     query: queryCategories,
  //   },
  // },
  components: {
    HelloWorld,
  },

  mounted() {
    console.log(this.$apollo);
    this.$apolloProvider.defaultClient.query({
      query: gql`
        getCategories {
          id
          name
        }
      `,
    }).then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  },
};
</script>
