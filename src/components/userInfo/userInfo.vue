<template>
  <div class="borderAround">
  	<img class="userInlineImage" src="https://placeimg.com/30/30/people">
    <div class="dropdownUser ">
      <p class="userInline" @click="isOpenMeth">User.name v</p>
    <ul v-if="isOpen" id="userUlStyle" class="dropDownUserMenuHeader" >
             <li v-if="!isLoggedIn" class="dropDownUserItem">Login</li>             
             <li  v-if="!isLoggedIn" class="dropDownUserItem2" v-model="userEmail" >Email :<input type="text" name="email"></li>
             <li v-if="!isLoggedIn" class="dropDownUserItem2" v-model="userPassword">Pass :<input type="password" name="email"></li>
             <li  v-if="isLoggedIn" class="dropDownUserItem" @click="onClickLogout" >Logout</li>
             <li v-if="!isLoggedIn" class="dropDownUserItem" @click="onLogIn">Log in</li>
             <li class="dropDownUserItem" @click="closedrop" >Close</li> 
          </ul>
    </div>    
  </div>
</template>
<script>  
export default { 
  data () {
    return {
      isOpen:false,
      userEmail:"",
      userPassword:""      
    }
  },
  props:['loadUser','checkIfLoggedIn','isLoggedIn','onClickLogout'],
  methods:{
      closedrop(){
        this.isOpen=false
      },
      isOpenMeth(){
        this.isOpen=!this.isOpen
      },
      onLogIn(){          
          /*  fetch('',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
              email:this.userEmail,
              password:this.userPassword
            })
          })
          .then(response=>{       
            return response.json()
          })
          .then(user=>{
            if(user.id){
              this.loadUser(user);
              this.checkIfLoggedIn(user);
            }else{
              console.log('error')
              }       
            })*/  
          }
      }      
  } 

</script>
<style>		
  .borderAround{
    border-bottom: 1px solid rgba(28,110,164,0.18);
    border-top: 1px solid rgba(28,110,164,0.18);
    text-align: left;
    min-height: 66px;
  } 

  .notLoged{
    display: none;
  }

  .userInlineImage{
    display: inline-block;
    padding: 10px;
    float: left;
    margin-top: 10px;
  }
  .userInline{
    margin-top: 30px;
    cursor: pointer;
  }
  .dropDownUserMenuHeader{
  list-style-type: none;  
  background-color: white;  
  color: black;  
  position: absolute;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57); 
  z-index: 1;  
  width: 200px;
  top: 60%;
  right: -70%;
}
.dropDownUserItem{
  padding: 10px;
  text-align: center;
  cursor: pointer;
}
.dropDownUserItem2{
  padding: 10px;
  text-align: center;  
}

.dropDownUserItem:hover{
  background-color: lightgrey;
}

.dropdownUser {
  position: relative;
  display: inline-block;  
}

#userUlStyle {
    display: block;
    list-style-type: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
}

  @media all and (max-width: 900px) {
  .borderAround{    
    text-align: center;    
  }
  .userInlineImage{
    display: inline-block;
    padding: 10px;
    float: none;
    margin-top: 0px;    
  }
  .userInline{
    margin-top: 0;
  }
  .dropdownUser {
  position: relative;
  display: inline-block;
  bottom: 15px;
  }
  .dropDownUserMenuHeader{
  list-style-type: none;  
  background-color: white;  
  color: black;  
  position: absolute;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57); 
  z-index: 1;  
  width: 200px;
  top: 45%;
  right: -40%;
}
}


	
</style>