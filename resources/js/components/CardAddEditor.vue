<template>
    <div>
<CardEditor v-model="title" @closed="closed" @saved="addCard" label="Add Card"></CardEditor>
    </div>
</template>

<script>
import CardAdd from "./../graphql/CardAdd.gql";

import {EVENT_CARD_ADDED} from "./../constants";
import CardEditor from "./CardEditor";

export default {
    components:{
       CardEditor
    }, 
  data(){
      return{
          title: null
      };
  },
    props: {
          list:Object
      },
  mounted(){
      this.$refs.card.focus();
  },

      methods: {
     addCard(){  
                const self = this;
      this.$apollo.mutate({   
      mutation :CardAdd, 
        variables: { 
             listID: this.list.id,
             title:this.title,
             order :this.list.cards.length + 1     
        },
       update(store,{data :{cardAdd}})  { 
     
 
       self.$emit("added",{store, data: cardAdd, type: EVENT_CARD_ADDED });
       self.closed(); 
       
        }    
        });
   

            },
            closed(){
                       this.$emit("closed");

            }
        }
}
</script>
