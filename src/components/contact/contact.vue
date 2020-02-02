<template>
  <div class="contactCont">
    <div class="addIcone" @click="addFriend" >
      <p>+</p>
    </div>
    <div class="contactList">    
    <p v-if="loadingPic">Loading...</p>
    <div v-if="showLess">
    <div class="friendsContainer" v-for="(friendsPic,i) in friendsPics.slice(0, 5)" :key="friendsPic.id">
      <img v-bind:src="friendsPic.url" class="friendsPicStyle">
    </div>
    </div>
    <div v-else> 
      <div class="friendsContainer" v-for="(friendsPic,i) in friendsPics.slice(0, add)" :key="friendsPic.id">
        <img v-bind:src="friendsPic.url" class="friendsPicStyle">
      </div>
    </div>
  </div>
    <div class="dotContainer" @click="moreFriends()">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>      
  </div>
</template>

<script>  
export default {  
  data () {
    return {
      friendsPics:[],
      loadingPic:true,
      showLess:true,
      add:5
    }
  },
  props:['user'],
  beforeCreate(){ 
        this.loadingPic=true;       
        fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
        .then(response=>{
              return response.json()
            })
            .then(friendsPics=>{          
              this.friendsPics=friendsPics
              this.loadingPic=false;                        
            })
    },
    methods:{
      moreFriends:function(){
        this.showLess=false;
        this.add+5;        
        this.friendsPics.splice(0, 4);
      },
      addFriend(){
        this.friendsPics.push({
          "albumId": 1,
          "id": Math.floor(Math.random()*10000) ,
          "title": "accusamus beatae ad facilis cum similique qui sunt",
          "url": "https://placeimg.com/55/55/people",
          "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        })
         /*fetch('url', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          user_id:this.user.id,
          "albumId": 1,          
          "title": "accusamus beatae ad facilis cum similique qui sunt",
          "url": "https://placeimg.com/55/55/people",
          "thumbnailUrl": "https://via.placeholder.com/150/92c952"     
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
.addIcone{
  padding: 10px;  
  border-bottom:1px solid rgba(28,110,164,0.18);
  background-color: #F1F1F1;
  cursor: pointer;  
}
.friendsPicStyle{
  height: 55px;
  width: 55px;
  border-radius: 50px;
  margin-top: 10%;
}
.dot{
  margin-top: 20px;
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: grey;
}
.contactCont{
    background-color: #F8F8F8;
  }

.dotContainer{
  padding: 10px;
  cursor: pointer;
}
.contactList{
  margin-top: 90%;
}
 @media all and (max-width: 900px) {
  .addIcone{    
    float: left;
    width: 80px;
    border-bottom:0px;
    border-right: 1px solid rgba(28,110,164,0.18);
  }
  .friendsContainer{
    display: inline-block;
  }
  .friendsPicStyle{
    display: inline-block;
  }
  .dotContainer{
    display: inline-block;
    float: left;
    width: 9%;    
  }
  .contactCont{
    border-bottom: 1px solid rgba(28,110,164,0.18);
  }
  .contactList{
    float: left;
    width: 60%;
    margin-top:0;
  }
}
</style>