<template>
   
                <div @click="addCard" class=" rounded-sm p-2 text-gray-600 cursor-pointer hover:bg-gray-400 hover:text-gray-800 text-sm">Add new Card</div>

    
</template>

<script>
import CardAdd from "./../graphql/CardAdd.gql";
import  BoardQuery  from "./../graphql/BoardWithListsAndCards.gql";
    export default {
        methods:{
            addCard(){  
  //      this.$apollo.mutate({   

  //      mutation :CardAdd,
  //        variables: { 

  //             listID: 1,
  //             title:'added through mutation',
  //             order :1,     

  //        },

  //       update(store,{data :{cardAdd}})  {
  //       const data = store.readQuery({
  //       query:BoardQuery,
  //       variables:{id:1}
  //       }); 

  //       data.board.lists.find(list => (list.id =1)).cards.push(cardAdd);

  //       store.writeQuery({query: BoardQuery ,data});
  //
  //       }

        // });
       

            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>

