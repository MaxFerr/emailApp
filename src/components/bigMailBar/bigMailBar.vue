<template>
  <div class="messageBarContainer">
    <div class="itemContainer itemContainerLeft">
      <p class="itemMessageBar">user.icone</p>
    </div>
    <div class="itemContainer itemContainerLeft">
      <p  class="itemMessageBar noMailP" v-if="selectedMailArray[0]===undefined">No mail selected</p>
       <p v-else class="itemMessageBar">{{selectedMailArray[0].email}}</p>
    </div >
    <div class="itemContainer itemContainerRight" @click="deleteSelectedEmail()" >
      <p class="itemMessageBar">Delete</p>
    </div>
    <div class="itemContainer itemContainerRight">
      <p class="itemMessageBar">DArrow</p>
    </div>
    <div class="itemContainer itemContainerRight">
      <p class="itemMessageBar">Arrow</p> 
    </div>    
  </div>
</template>

<script> 
export default {  
  data () {
    return {
      
    }
  },
  props:['selectedMailArray','deleteSelectedEmail']  
}
</script>

<style>
.itemContainer{
  height: 100%;
  display: inline-block;  
}
.itemContainerLeft{
  float: left;
  width: 15%;  
  margin-left: 5px;
}

.itemContainerRight{
  float: right;
  width: 12%;    
  margin-left: 5px;
  border-left: 1px solid rgba(28,110,164,0.18);
  cursor: pointer;
}
.messageBarContainer{
  border-bottom: 1px solid rgba(28,110,164,0.18);
  height: 70px;
}
.itemMessageBar{
  padding: 10px;
}

.noMailP{
  display: inline-block;
}

@media all and (max-width: 900px){
  .messageBarContainer{
    border-top: 1px solid rgba(28,110,164,0.18);
  }
}
</style>