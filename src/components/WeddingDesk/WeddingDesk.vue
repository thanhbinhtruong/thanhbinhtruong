<template>
  <div class="backgroundWeddingDesk">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand mx-auto" href="#">
        <div class="date">18 FEBRUARY 2021</div>
        <div class="name">KIERAN & MY</div>
      </a> 
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>  
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 mx-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <router-link to="/wedding/cover">
                  <a class="nav-link" href="#">COVER</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/wedding/welcome">
                  <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">WELCOME</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/wedding/story">
                  <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">STORIES</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/wedding/entourage">
                  <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">KEY PEOPLE</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/wedding/travel">
                  <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">TRAVEL</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/wedding/guestbook">
                  <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">GUESTBOOK</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/wedding/gallery">
                  <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">GALLERY</a>
            </router-link>
           
          </li>
          <router-link to="/wedding/rsvp">
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">RSVP</a>
          </li>
          </router-link>
          <router-link v-if="!isLogin" to="/wedding/signIn">
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">SignIn</a>
          </li>
          </router-link>
          <li v-else class="nav-item">
            <a @click="signOut()" class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">SignOut</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>

  

</div>
</template>

<script>
 import firebase from 'firebase';
  export default {
    name: 'WeddingDesk',
    data () {
      return {
        isLogin: false
      }
    },
    created(){
        firebase.auth().onAuthStateChanged(userAuth => {
              if(userAuth){
                this.isLogin = true
              }else{
                this.isLogin = false
              }
              
            }) 
    },
    methods: {
      signOut : function(){
            firebase.auth().signOut().then(function() {
            this.isLogin = false
            console.log("signOut sucess")
            }).catch(function(error) {
            console.log("Oops, "+error)
            });
        },
    }
  }
</script>

<style>

@import "WeddingDesk.css";
</style>

