<template>
  <div class="sortContainer" >
    <div class="sortLeft"><p>Sort</p></div> 
    <div class="dropdown sortOptions">  
    <div  v-click-outside='closedrop' @click="isOpenMeth"><p>{{sortTypeString}} v</p></div>
    <ul v-if="isOpen" id="ulStyle" class="dropDownMenuHeader" >
                <li class='dropDownItem' @click="sortType('Date')"><p class="sortSelected" v-if="sortTypeString==='Date'">V</p>Date</li>
                <li class='dropDownItem' @click="sortType('Attachment')"><p class="sortSelected" v-if="sortTypeString==='Attachment'">V</p>Attachment</li>
                <li class='dropDownItem' @click="sortType('Subject')"><p class="sortSelected" v-if="sortTypeString==='Subject'">V</p>Subject</li>
                <li class='dropDownItem' @click="sortType('Flag')"><p class="sortSelected" v-if="sortTypeString==='Flag'">V</p>Flag</li>
                <li class='dropDownItem' @click="sortType('Size')"><p class="sortSelected" v-if="sortTypeString==='Size'">V</p>Size</li>
          </ul>
        </div>      
  </div>
</template>

<script>  
export default{
    data(){
      return{
        isOpen:false,
        sortTypeString:"Date"       
      }
    },
    props:['sortMail'],   
    methods:{
      closedrop(){
        this.isOpen=false
      },
      isOpenMeth(){
        this.isOpen=!this.isOpen
      },
      sortType(type){
        this.sortTypeString=type;
        this.sortMail(type);        
      }
    },
    directives: {
      'click-outside': {
        bind: function(el, binding, vNode) {         
          if (typeof binding.value !== 'function') {
            const compName = vNode.context.name
            let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
            if (compName) { warn += `Found in component '${compName}'` }
            
            console.warn(warn)
          }
          
          const bubble = binding.modifiers.bubble
          const handler = (e) => {
            if (bubble || (!el.contains(e.target) && el !== e.target)) {
              binding.value(e)
            }
          }
          el.__vueClickOutside__ = handler

          
          document.addEventListener('click', handler)
        },
        
        unbind: function(el, binding) {         
          document.removeEventListener('click', el.__vueClickOutside__)
          el.__vueClickOutside__ = null
      }
    }
  }
  }
</script>

<style>
.sortSelected{
  color: blue;
  display: inline;
}
.sortLeft{  
  float: left;
}
.sortOptions{
  float: right;
  cursor: pointer;
}
.sortContainer{
  height: 50px;
  border-bottom:1px solid rgba(28,110,164,0.18);
  padding: 10px;
  background-color: #F0F0F0;
}

.dropDownMenuHeader{
  list-style-type: none;  
  background-color: white;  
  color: black;  
  position: absolute;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57); 
  z-index: 1;  
  width: 140px;
  top: 45%;
  right: 5%;
}

.dropDownItem{
  padding: 10px;
  text-align: left;
  cursor: pointer;
}

.dropDownItem:hover{
  background-color: lightgrey;
}

.dropdown {
  position: relative;
  display: inline-block;
}

#ulStyle {
    display: block;
    list-style-type: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
}
</style>