<template>
  <div class="foot">
  	<router-view></router-view>
  	<div class="actionbar">
	    <ul>
		    	<li><router-link to="/groom"></router-link></li>
		    	<li><router-link to="/classify"></router-link></li>
		    	<li><router-link to="/find"></router-link></li>
		    	<li><router-link to="/commodity"></router-link></li>
		    	<li><router-link to="/my"></router-link></li>
	    </ul>
  </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
          
    }
  }
}
</script>

<style scoped>
	.actionbar {
    background-color: #f9f9f9;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 720px;
    height: 2.5rem;
    z-index: 100;
    margin: 0 auto;
}
ul{
	width: 100%;
	display: flex;
}
ul li{
	flex:1;
	height:2.5em;
	text-align: center;
	display: block;
  
  position: relative;
}
ul li a{
	background: url(../../assets/img/icon.png) no-repeat top;
  background-size: 500% 5em;
}
ul li:nth-of-type(1) a{
	background-position: 0 0em;
}
ul li:nth-of-type(2) a{
	background-position: 25% 0em;
}
ul li:nth-of-type(3) a{
	background-position: 50% 0em;
}
ul li:nth-of-type(4) a{
	background-position:75% 0em;
}
ul li:nth-of-type(5) a{
	background-position: 100% 0em;
}
.actionbar .router-link-active{
    background-position-y: -2.5em;
}
a{
	display: block;
	width: 100%;
	height: 100%;
}
</style>
