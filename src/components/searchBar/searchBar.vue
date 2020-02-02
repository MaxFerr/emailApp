<template>
  <div >
  	<div class="searchBarContainer">
	  	<flag/>
	  	<div class="inputContainer">
		    <input class="searchBox" type="text" name="mail" v-model="doubleValue" placeholder='Search for messages...' />		    
		</div>
	    <notifications/>
	</div>
  </div>
</template>
<script>
import notifications from '../notifications/notifications.vue';
import flag from '../flag/flag.vue';  
export default { 
  data () {
    return {
    	searchForMail:""
    }
  },
  props:['searchMail'],
  components:{
  	notifications,
  	flag
  },
  computed: {
    doubleValue: {
        get(){            
            return this.searchForMail;
        },
        set(newVal){            
            this.searchMail(newVal)
        }
    }  
}
}
</script>
<style>
.searchBarContainer{
    display: flex;
    border-bottom: 1px solid rgba(28,110,164,0.18);    
    
}
.inputContainer{
	flex: 60%;
	margin-top: 12px;
	padding: 10px;
	flex: 5;
}
.searchBox{
    border-style: solid;
    padding: 5px;
    font-size: 14px;
    border-width: 1px;
    border-color: #c7bff5;
    box-shadow: 0px 0px 5px 0px rgba(42,42,42,.14);
    color: #a39eeb;
    width: 70%;
}
</style>