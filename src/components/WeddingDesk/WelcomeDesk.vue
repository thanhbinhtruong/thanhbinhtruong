<template>
	<div class="container-fluid padding-nav"  >
		<div class="row">
			<!-- <div  class="col-md-6">
				<img class="img-fluid" src="@/image/avata.jpg" alt="" >
			</div> -->
		
		 
			<div class="col-md-12 ">
				<div class="section">
				<div class="welcome-title">Welcome</div>
				<p class="welcome-txt"></p>
				<p class="welcome-txt">To our wedding page!</p>
				<p class="welcome-txt">We are so blessed to have you be apart of this journey with us. This is a page for all of the need-to-know details in the lead up to our big day.</p>
				<p class="welcome-txt">Check out our schedule for the day, local accommodation options and places to visit for those travelling to Da Nang for the first time.</p>
				<p class="welcome-txt">You can also find some background information on key people joining us up at the altar so you can get acquainted before the big event.</p>
				<p class="welcome-txt">Hope it's helpful and don’t forget to RSVP and let us know about any dietary preferences, too.</p>
				<p class="welcome-txt">Thanks for all of your love and support.</p>
				<p class="welcome-txt">It’s wedding time!<br></p>
				<p class="welcome-txt">Kieran &amp; My<br><br></p>
				<p class="welcome-txt"></p>
			</div>
			</div>
</div>
		 
		

		<router-link to="/wedding/story">
                <button class="nextBtns"><i class="fa fa-angle-right"></i></button>
        </router-link>
	</div>

</template>

<script>
	export default {
		name: 'WelcomeMobile',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<style>
 	 
</style>