<template>
  <div class="messageBarCont">
    <div>
      <textarea v-model="message" placeholder="Type something..." class="inlineMessageBar messageArea"></textarea>
    </div>
    <div class="inlineMessageBar inlineMessageBarRight">
      <p @click="sendMail" >Send</p> 
    </div>
    <div class="inlineMessageBar inlineMessageBarRight">
      <p>Emote</p> 
    </div>    
  </div>
</template>

<script> 
export default {  
  data () {
    return {
      message:""      
    }
  },
  props:['selectedMailArray','user'],
  methods:{
    sendMail(){
    if (this.message==="" || this.selectedMailArray[0]===undefined) {
      return console.log("empty message or no selected mail")
    }else{
      alert(`email sent to ${this.selectedMailArray[0].email} message:${this.message} date:${new Date()} ` )
    }  
      
      /*fetch('url', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          user_id:this.user.id,
          date:new Date(),
          message:this.message,
          to:this.selectedMailArray[0].email        
        })
      })
    .then(res => res.json()) 
    .then(res => {    
      if(res.sent){
            return console.log('sent')
        }else{
          return console.log('error')
        }
      })*/      
    }
  }  
}
</script>

<style>
.inlineMessageBar{
  display: inline-block;  
}
.inlineMessageBarRight{
  float: right;
  width: 10%;  
  border-left: 1px solid rgba(28,110,164,0.18);
  cursor: pointer;
}
.messageBarCont{
  border-top: 1px solid rgba(28,110,164,0.18);  
}
.messageArea{
  width: 60%;
  float: left;
  margin-top: 5px;
  margin-left: 10%;  
  padding: 2px;
  font-size: 14px;
  color: #a39eeb; 
  border:none; 
}

</style>
