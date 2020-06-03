<template>
	<div class="container padding-nav">
		<div class="row">
            <div class="col-md-12 title">
            <h5>RSVP</h5>           
         	</div> 
              
			<div style="width:20%; text-align:center; border-right:1px dotted  black">
				THUR <br>
                FEB 18 <br>
                2021
			</div>
            <div style="width:80%; text-align:left; padding-left:20px">
				<div>CEREMONY & RECEPTION</div>
                <span></span><div>4:00 pm  — 10:00 pm</div>
                <div>Pullman Beach Resort</div>
                <div>110  Vo Nguyen Giap</div>
                <div>Da Nang</div>
                <div>Vietnam</div>
                <div>{{user.displayName}}</div>
                <button class="btn" @click="getAccept()" id="accept" style="background:transparent; border:1px solid gray">ACCEPT</button>
                <button class="btn" @click="getDecline()" id="decline" style="background:transparent; border:1px solid gray">DECLINE</button>
                
            </div>
            

		</div>

         
                <button @click="rsvp()" class="nextBtns"><i class="fa fa-angle-right"></i></button>
        
	</div>

</template>

<script>
import firebase from 'firebase';
export default {
  name: 'RSVP',
  data () {
    return {
      email: '',
      password: '',
      accept:false,
      user:'',
    }
  },
created(){
    this.user = firebase.auth().currentUser;
},
  methods:{
	  	signIn : function(){
	  		 firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
	  			function(user){
	  				alert('Well done! You are now connected');
	  			},
	  			function (err) {
	  				alert('Oops. ' + err.message);
	  			}
	  		 );
          },
        getAccept : function(){
            let accept = document.getElementById("accept")
            let decline = document.getElementById("decline")
            if(accept.style.backgroundColor === 'transparent'){
                    accept.style.background = 'green';
                    accept.style.color='white';

                    decline.style.backgroundColor = 'transparent';
                    decline.style.color='black';

                    this.accept = true;
            }
            
        },
        getDecline : function(){
            let accept = document.getElementById("accept")
            let decline = document.getElementById("decline")
            if(decline.style.backgroundColor === 'transparent'){
                    decline.style.background = 'red';
                    decline.style.color='white';

                    accept.style.backgroundColor = 'transparent';
                    accept.style.color='black';

                    this.accept = false;
            }
            
        },
        rsvp : function(){
            var user = firebase.auth().currentUser;

                firebase.firestore().collection("users").doc(user.email).set({
                    accept: this.accept,
                    createdAt: new Date(),
                })
                .then(function(docRef) {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
        }

	  	
  },
  
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