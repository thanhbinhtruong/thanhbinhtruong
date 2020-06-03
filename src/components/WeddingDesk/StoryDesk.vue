<template>
	<div class="container-fluid padding-nav" style="height:100vh">
		
		<!-- STORIES -->
      <div class="row" style="margin-left:5%; margin-right:5%; padding:5%; background:#bdb3a2; opacity:0.9">
      <div class="col-md-6">
          <div style="">
              <img style="position:absolute; transform: rotate(-15deg); opacity:0.3" width="50%"  src="@/image/storyBg.jpg" alt="Card image cap">
              <img style="position:absolute; transform: rotate(-25deg); opacity:0.5" width="50%"  src="@/image/storyBg.jpg" alt="Card image cap">
              <img style="position:absolute; border:10px solid white; border-bottom: 30px solid white" width="50%"  src="@/image/story.jpg" alt="Card image cap"> 
          </div>
         

        
      </div>
       <div class="col-md-6" style="color:white;">
          <p>The chance to love and beloved exits no matter where you are.</p>
          <p>This is our incredible story. </p>
          <p>The boy moved to Da Nang on August 2016. The girl cames to Da Nang on October 2016. 
        Both are new commers and need to widen friends. "Wechat" brings them together. After missing a few boats. They finally decided to date and give each other a chance. Language Barrier was the main point that the girl worried about, but the boy confidently persuaded " I will teach you". Their beginning brings them more than they expected. They fell in love, dedicated their time and effort to build up the sturdiness of the relationship. The boy was so patient, thoughtful and generous to the girl.They are atonished themself how far they have been together. They acknowledge that It's ok to be scared of experience new things. But give yourself a chance to come out of the shell. You will always learn something when you try something new. Meet new people, share a laugh and see how things go.</p>
       </div>
        
      </div>
     <!-- STORIES -->  
		<router-link to="/wedding/entourage">
                <button class="nextBtns"><i class="fa fa-angle-right"></i></button>
        </router-link>
	</div>

</template>

<script>
	export default {
		name: 'StoryMobile',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<style>
 	 
</style>