<template>
	<div class="container-fluid padding-nav" style="height: 100vh">
		<div class="row">
			<div class="col-md-12 title">
            <h5>SIGN-IN</h5>           
         	</div> 
			<div class="col-md-12 welcome-title">
				<div class="section">
				<div class="">
					Enter your email
					<br>
					to Rsvp
				</div>
				<input v-model="email" class="input" type="email" placeholder="EMAIL ADDRESS"/>
				<div class="row">
				<input  class="col-md-5 input" required type="text" placeholder="FIRST NAME"/>
				<div class="col-md-2"></div>
				<input class="col-md-5 input" required type="text" placeholder="LAST NAME"/>
				</div>
				</div>
			</div>

				<div class="col-md-12" style="text-align: center">
						<button @click="loginUsingGG()" class="btn btn-danger" id="btnGoogle" type="button"> <span class="fa fa-google"></span> Login with Google</button> <br>
						<button @click="loginUsingGG()" class="btn btn-primary" id="btnGoogle" type="button"> <span class="fa fa-facebook"></span> Login with Facebook</button>
     			</div>                       

		</div>
		 
                <button @click="signIn()" class="nextBtns"><i class="fa fa-check"></i></button>

	</div>

</template>

<script>
	import firebase from 'firebase';
export default {
  name: 'SignIn',
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods:{
	  	signIn : function(){
	  		 firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
	  			function(user){
	  				this.$route.push({ name: 'rsvp' })

	  			},
	  			function (err) {
	  				alert('Oops. ' + err.message);
	  			}
	  		 );
		  },
		  loginUsingGG : function(){
			  //Google singin provider
				var provider = new firebase.auth.GoogleAuthProvider();
	 		//Sing in with Google
            	firebase.auth().signInWithPopup(provider).then(function(result) {
				var token = result.credential.accessToken;
				var user = result.user;
				}).catch(function(error) {
				var errorCode = error.code;
				var errorMessage = error.message;
				var email = error.email;
				var credential = error.credential;
 
				});

         
		  }

	  	
  }
}
</script>

<style>
 .input{
	 padding-top: 10px;
	 border:none;
	 border-bottom: 2px solid #bdb3a2;
 }
 ::-webkit-input-placeholder {
   text-align: center;
}
:-moz-placeholder { /* Firefox 18- */
   text-align: center;  
}

::-moz-placeholder {  /* Firefox 19+ */
   text-align: center;  
}

:-ms-input-placeholder {  
   text-align: center; 
}
</style>