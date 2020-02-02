<template>
  <div class="sideBarContainer">
  	<userInfo :isLoggedIn="isLoggedIn" :loadUser="loadUser" :checkIfLoggedIn="checkIfLoggedIn" :onClickLogout="onClickLogout"/>
    <button class="composeBtn">Compose</button>   
  	<ul class="sideBarList">
  		<li><h3>Messages</h3></li>
  		<li>Inbox</li>
  		<li>Sent mail</li>
  		<li>Drafts</li>
  		<li>Spam</li>
  		<li>Other</li>
  	</ul>  	
  	<reminders/>
  	
  </div>
</template>
<script>
import userInfo from '../userInfo/userInfo.vue'; 
import reminders from '../reminders/reminders.vue';   
export default { 
  data () {
    return {}
  },
  props:['loadUser','checkIfLoggedIn','isLoggedIn','onClickLogout'],
  components:{
  	userInfo,
  	reminders
  }  
}
</script>
<style>
	.sideBarList{
		list-style-type: none;
		text-align: left;
	}
	.sideBarContainer{		
		border-right: 1px solid rgba(28,110,164,0.18);
	}
  @media all and (max-width: 900px) {
  .sideBarList li{
    list-style-type: none;    
    display: inline-block;
  }
  .sideBarList{    
    text-align: center;    
  }
  .sideBarContainer{    
    border-right: 0px;
  }
}

.composeBtn {
  box-shadow:inset 0px -3px 7px 0px #29bbff;
  background:linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
  background-color:#2dabf9;
  border-radius:3px;  
  display:inline-block;
  cursor:pointer;
  border:none;
  color:#ffffff;
  font-family:Arial;
  font-size:15px;
  padding:9px 23px;
  text-decoration:none;
  text-shadow:0px 1px 0px #263666;
  margin-top: 15px;
}
.composeBtn:hover {
  background:linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
  background-color:#0688fa;
}
.composeBtn:active {
  position:relative;
  top:1px;
}
	
</style>