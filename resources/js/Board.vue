<template>
    <div class="h-full flex flex-col items-stretch bg-purple-500">
    <div class="header text-white flex justify-between items-center mb-2 bg-purple-600">

        <div class="ml-2 w-1/3">x</div>
        <div class="text-lg opacity-50 cursor-pointer hover:opacity-75">Laravello</div>
        <div class="mr-2 w-1/3 flex justify-end">
        <div v-if="isLoggedIn" class="flex items-center">
            <div class="text-sm mr-2"> {{name}} </div>
<button class="header-btn" @click="logout">
    LogOut
</button>
        </div >
        <div v-else>
<button class="header-btn" @click="$router.push({name:'login'})">
Sign-in
</button>
<button class="header-btn">
Regecter
</button> 
        </div>
        </div>   
    </div>

    <div class="h-full flex flex-1 flex-col items-stretch">
        <div class="mx-4 text-white font-bold text-lg">
<span v-if="$apollo.queries.board.loading">Loding !!</span>
<span v-else>{{board.title}}</span>
        </div>
        <div class="flex flex-1 items-start overflow-x-auto mx-2" v-if="board">
            <List :list="list" v-for="list in board.lists" :key="list.id"
             @card_added="updateQueryCache($event)"
              @card_deleted="updateQueryCache($event)"
                @card_updated="updateQueryCache($event)"
             ></List>
        </div>
    </div>
    </div>
</template>

<script>
  
  import List from "./components/List.vue";
  import { EVENT_CARD_ADDED, EVENT_CARD_DELETED ,EVENT_CARD_UPDATED} from './constants';
  import BoardQuery from "./graphql/BoardWithListsAndCards.gql"; 
import Logout from './graphql/Logout.gql';

  export default {
      components: {List},
      computed:{
          isLoggedIn(){
         return this.$store.state.isLoggedIn
          },
          name(){
              return this.$store.state.user.name;
          }
      },
      apollo: {
          board: {
          query:BoardQuery,
          variables: {
            id: 1 
          }
      }
      },
      methods: {
async logout(){
const response =  await this.$apollo.mutate({
    mutation: Logout
});
if(response.data?.logout?.id){
    this.$store.dispatch("logout");
}
},

          updateQueryCache(event){
 
       const data =event.store.readQuery({
       query:BoardQuery, 
       variables:{id:Number(this.board.id)}
       }); 
       
       const listById =() =>
       data.board.lists.find(list  => list.id == event.listId);


       switch(event.type){
        case EVENT_CARD_ADDED:
       
        listById().cards.push(event.data);

        break;
        case EVENT_CARD_DELETED: 
                listById().cards=listById().cards.filter(cardd=>cardd.id !=4);
                console.log(listById());

        break;

            case EVENT_CARD_UPDATED: 
                listById().cards=listById().cards.filter(card=>card.id ==event.data.id).title=event.data.title;

        break;
       }

       

       event.store.writeQuery({query: BoardQuery ,data});

          }
      }
  };
</script>
<style scoped>
.header{
    height: 40px;
}
</style>