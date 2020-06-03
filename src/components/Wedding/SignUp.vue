<template>
	<div>
		<p>Let's create a new account ! </p>
		<input type="text" name="" v-model="email" placeholder="Email"><br>
		<input type="password" name="" v-model="password" placeholder="Password"><br>
		<button @click="signUp">Sign Up</button>
		<span>or go back to <router-link to="/login">login</router-link>.</span>
	</div>

</template>

<script>
	import firebase from 'firebase';
export default {
  name: 'SignUp',
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods:{
	  	signUp : function(){
	  		 firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
	  			function(user){
	  				alert('Your account has been created !');
	  			},
	  			function (err) {
	  				alert('Oops. ' + err.message);
	  			}
	  		 );
	  	}

	  	
  }
}
</script>

<style>
 
</style>