<template>
  <div class="mainMailContainer">
    <perfect-scrollbar class="scroll-area-mail" >
    <div>    
    <div v-if="selectedMailArray[0]==undefined" >
      <p>{{deletedMail?"Message deleted":"No mail selected"}}</p>
    </div>
    <div v-else>      
      <h3 class="alignleft">
     {{selectedMailArray[0].name}}
    </h3>
    <p class="alignright ">
      email.date
    </p>
    <div class="clearF">
    <p>
      {{selectedMailArray[0].body}}
    </p>
    </div>        
    </div>
  </div>
    </perfect-scrollbar>    
  </div>
</template>

<script> 
export default {  
  data () {
    return {
      
    }
  },
  props:['selectedMailArray','deletedMail']  
}
</script>

<style>
.mainMailContainer{
  text-align: left;
  padding: 10px;
  min-height: calc(96.9vh - 210px);  
}
.scroll-area-mail {
  position: relative;
  margin: auto;  
  max-height: calc(96.9vh - 210px);
}

.alignleft {
  float: left;
}
.alignright {
  float: right;  
  padding: 5px;
}
.clearF{
  clear: both;
}
</style>