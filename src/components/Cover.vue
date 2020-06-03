<template>
  <div class="container-fluit cover">
      	 
  		<div class="cover-centered">
    		<div class="cover-background">
    		<div class="cover-title">WE'RE GETTING MARRIED</div>
    		<div class="cover-title2">KIERAN & MY </div>
  			</div>
  		</div>
  		<router-link to="/wedding/welcome">
                <button class="nextBtn"><i class="fa fa-angle-right"></i></button>
        </router-link>
		 
  </div>

</template>

<script>
export default {
  name: 'IndexMobile',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
 .cover {
 	width: 100vw;
 	height: 100vh;
 	background: url(../image/cover1.jpg) no-repeat center center fixed; 
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	color: gray;
	background-size: 1920 1080
 }
 .cover-title {
 	font-size: 18px;
 	font-family: 'SackersGothicStd-Medium', sans-serif;
	font-size: 18px;
	line-height: 26px;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: #3b3b3b;
 }
 .cover-title2 {
 	font-family: 'SackersGothicStd-Medium', sans-serif;
	font-size: 45px;
	line-height: 50px;
	letter-spacing: 2px;
	text-transform: lowercase;
	font-variant: small-caps;
	-webkit-font-smoothing: antialiased;
	font-weight: normal;
 }
 .cover-centered {
 	text-align: center;
	position: fixed;
	top: 50%;
	left: 50%;
  /* bring your own prefixes */
  	transform: translate(-50%, -50%);
  	border: 1px solid white;
}
.cover-background {
	background:white;
 	opacity: 0.8;
 	padding: 30px 60px 30px 60px;
 	margin: 10px 10px 10px 10px;
}
.nextBtn {
	background-color: #bdb3a2;   
   	height: 50px;
  	width: 50px;
   	display:block;
  	border-radius: 50%;
  	color: white;
  	border: none;
  	opacity: 0.9;
  	left: 50%; 
  	top: 90%; 	
  	position: fixed;
}
.nextBtn:hover{
	background: #434343;
	letter-spacing: 1px;
	-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
	-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
	box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
	transition: all 0.4s ease 0s;

}


</style>