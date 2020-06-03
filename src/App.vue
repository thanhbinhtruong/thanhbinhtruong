<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
 
export default {
  name: 'App'
}
</script>

<style>
#app {
  margin: 0px;
  padding: 0px;
  height: 100%;
  width: 100%;
/* background: url(image\backgroundMobile.jpg) no-repeat center center fixed; 
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
color: #454545;
background-size: 100% 100%; */
}
@font-face {
    font-family: 'SackersGothicStd-Medium';
    src: url('fonts/SackersGothicStd-Medium.otf');
    
}
</style>
