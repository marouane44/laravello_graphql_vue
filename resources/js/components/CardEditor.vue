<template>
    <div>
<textarea class="rounded-md shadow-card py-1 px-2 outline-none w-full text-gray-900 text-sm bg-white h-16 resize-none"
placeholder="Enter a title for this card ..."
v-model="title"
ref="card"
@keyup="$emit('closed')"
></textarea>
<div class="flex">
    <button class="rounded-sm py-1 px-3 bg-indigo-700 text-white cursor-pointer hover:bg-indigo-600 outline-none">
Add card
    </button>
<button class="py-1 ml-1 px-3 rounded-md hover:bg-indigo-300 cursor-pointer text-gray-800">Cancel</button>
</div>
    </div>
</template>
 
<script>
import CardAdd from "./../graphql/CardAdd.gql";
import  BoardQuery  from "./../graphql/BoardWithListsAndCards.gql";


export default {
  data(){
      return{
          title: null
      };
  },
  mounted(){
      this.$refs.card.focus();
  },

      methods: {
     addCard(){  
                
      this.$apollo.mutate({   
      mutation :CardAdd,
        variables: { 
             listID: 1,
             title:'added through mutation',
             order :1,     
        },
       update(store,{data :{cardAdd}})  {
       const data = store.readQuery({
       query:BoardQuery,
       variables:{id:1}
       }); 
       data.board.lists.find(list => (list.id =1)).cards.push(cardAdd);
       store.writeQuery({query: BoardQuery ,data});

       }
        });
       this.$emit("closed");

            }
        }
}
</script>

<style>

</style>