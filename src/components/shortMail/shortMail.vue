<template>
  <perfect-scrollbar class="scroll-area" >
  <div class="mailContainer">    
   <div 
   v-for="(mail,i) in mails" :key="mail.id"
   :class="[activeItem==mail.id?'activeShortMail mailStyle':'mailStyle']"    
   @click="selectedMail(mail.id)" >
    <p>Email.icone</p>
      <h5>{{mail.email}}</h5>
      <h3>{{mail.name}}</h3>
      <p>Email.date</p>      
      <p v-line-clamp:20="2">{{mail.body}}</p>
    </div>   
    </div>    
   </perfect-scrollbar>  
</template>

<script> 
export default {  
  data () {
    return {     
    }
  },
  props:['mails','loadingMail','selectedMail','activeItem'],  
}
</script>

<style>
.mailContainer{
  text-align: left;
  margin-left: 5px;  
}
.mailStyle{
  border-bottom: 1px solid rgba(28,110,164,0.18);
  cursor: pointer;  
  }
.scroll-area {
  position: relative;
  margin: auto;  
  max-height: calc(96.9vh - 145px);
}
.activeShortMail{
  border-left: 5px solid lightblue;
  margin-left: -5px;
  margin-block-start: -1em;    
}

@media all and (max-width: 900px){
  .scroll-area {
  position: relative;
  margin: auto;  
  max-height: 400px;
  width: 80%;
}
}


</style>
