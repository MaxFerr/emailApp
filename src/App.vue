<template>
  <div id="app">
    <div class="col1">
      <sideBar :isLoggedIn="isLoggedIn" :loadUser="loadUser" :checkIfLoggedIn="checkIfLoggedIn" :onClickLogout="onClickLogout" class="col1" />
    </div>    
    <div class="col2">
      <searchBar :searchMail="searchMail" />
      <main class="insideColCont">
      <contact class="insideCol1" :user="user" />
      <div class="insideCol2">
        <sortMailBar :sortMail="sortMail"/>
        <shortMail :activeItem="activeItem" :mails="filteredMails" :loadingMail="loadingMail" :selectedMail="selectedMail" />
      </div>
      <div class="insideCol3">
        <bigMailBar :selectedMailArray="selectedMailArray" :deleteSelectedEmail="deleteSelectedEmail" />
        <bigMail :selectedMailArray="selectedMailArray" :deletedMail="deletedMail" />
        <messageBar :user="user" :selectedMailArray="selectedMailArray"/>
      </div>
      
      </main>
    </div>   
  </div>
</template>

<script>
  import sideBar from './components/sideBar/sideBar.vue';
  import searchBar from './components/searchBar/searchBar.vue';
  import contact from './components/contact/contact.vue';
  import sortMailBar from './components/sortMailBar/sortMailBar.vue';
  import shortMail from './components/shortMail/shortMail.vue';
  import bigMailBar from './components/bigMailBar/bigMailBar.vue';
  import bigMail from './components/bigMail/bigMail.vue';
  import messageBar from './components/messageBar/messageBar.vue';

export default {
  name: 'app',
  data () {
    return {
      mails: [],
      loadingMail:true,
      selectedMailArray:[],
      deletedMail:false,
      filteredMails:[],
      activeItem:null,
      user:{
        name:'',
        email:'',
        joined:'',
        id:''
      },
      isLoggedIn:false,

    }
  },
  components:{
    sideBar,
    searchBar,
    contact,
    sortMailBar,
    shortMail,
    bigMailBar,
    bigMail,
    messageBar
  },
  methods:{
    selectedMail(id){
    this.selectedMailArray=[]
    this.deletedMail=false;
    this.activeItem = id;     
      this.selectedMailArray.push(this.mails.find(mail=>{        
       return mail.id==id
      }))      
    },
    deleteSelectedEmail(){ 
      this.deletedMail=false;
      if(this.selectedMailArray.length===0){
        return "Nothing selected"
      }else{
        const record=this.mails.find(element=>element.id===this.selectedMailArray[0].id)            
        this.mails.splice(this.mails.indexOf(record),1)
        const record2=this.filteredMails.find(element=>element.id===this.selectedMailArray[0].id)            
        this.filteredMails.splice(this.filteredMails.indexOf(record2),1)
        this.deletedMail=true;
        this.selectedMailArray=[]
      }   
      
      /*fetch('url'+id, {
        method: 'delete',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          user_id:this.user.id,
          mail_id:this.selectedMailArray[0].id        
        })
      })
    .then(res => res.json()) 
    .then(res => {    
      if(res.deleted){
            return console.log('deleted')
        }else{
          return console.log('not deleted')
        }
      })*/      
    },
    sortMail(type){
      if(type==="Date"){          
         /* this.mails.sort(function(a, b) {
          let c = new Date(a.date);
          let d = new Date(b.date);
          return c-d;
          });*/
        }
    },
    searchMail(searchInput){      
      this.filteredMails=this.mails.filter(mail=>{        
        let email=mail.email.toLowerCase().includes(searchInput.toLowerCase());
        let title=mail.name.toLowerCase().includes(searchInput.toLowerCase());
        if(email){
          return email
        }else{
          return title
        }           
        
      })       
    },
    loadUser(data){
     this.user={
        name:data.name,
        email:data.email,
        joined:data.joined,
        id:data.m_user_id
      } 
  },
  checkIfLoggedIn(data){
    if(this.user.email===data.email){
      this.isLoggedIn=true
    }else{
      this.isLoggedIn=false
    }
  },

  onClickLogout(){
    this.isLoggedIn=false;    
    this.user={
      id:'',
      name:'',
      email:'',
      joined:''
    };    
  }
  },
  beforeCreate(){ 
        this.loadingMail=true;       
        fetch('https://jsonplaceholder.typicode.com/comments?postId=1&&postId=2')
        .then(response=>{
              return response.json()
            })
            .then(mails=>{          
              this.mails=mails;
              this.filteredMails=mails;
              this.loadingMail=false;                        
            })
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
  display: flex;   
   min-height: 97vh;
   margin-top: 3vh;  
}
html, body{   
    margin:0;    
}

.col1{
  flex:1;
  min-height: 100%;
}

.col2{
  flex:5;  
  border-top: 1px solid rgba(28,110,164,0.18);
}

.insideColCont{
  display: flex;
}

.insideCol1{
  width: 100px;
  border-right: 1px solid rgba(28,110,164,0.18);
}

.insideCol2{
  flex:2;
}

.insideCol3{
  flex:5;
  border-left: 1px solid rgba(28,110,164,0.18);  
}

@media all and (max-width: 900px) {
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
  display: flex;
  flex-direction: column;   
   min-height: 97vh;
   margin-top: 3vh;  
}

.insideColCont{
  display: flex;
  flex-direction: column;
}
.col1{
  flex:2;
}

.col2{
  flex:1;  
}

.insideCol1{  
  width: 99.9%;
  border-right: 0px;
}

.insideCol2{
  flex:1;
}

.insideCol3{
  flex:1;
}
  
}


</style>
