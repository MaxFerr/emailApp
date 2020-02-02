<template>
  <div class="borderAroundReminders">  	
  	<ul class="sideBarRemindersList">
  		<li><h3>Reminders</h3></li>
  		<li>Working</li>
  		<li>Personal</li>
  		<li>Family</li>
  		<li>Spam</li>
  		<li>Clients</li>
  	</ul> 	
  	
  </div>
</template>
<script>
export default { 
  data () {
    return {}
  }, 
}
</script>
<style>
	.sideBarRemindersList{
		list-style-type: none;
		text-align: left;
	}
  .borderAroundReminders{
    border-top:1px solid rgba(28,110,164,0.18);    
  }

   @media all and (max-width: 900px) {
  .sideBarRemindersList li,h3 {    
    display: inline-block;
  }
  .sideBarRemindersList {
    list-style-type: none;
    text-align: center;
    display: inline-block;
  }  
}
</style>