<template>
	<div class="container-fluid padding-nav" style="height:100vh">
		
    <!-- ENTOURAGE -->
      <div class="row" style="margin-left:5%; margin-right:5%; padding:5%; background:#bdb3a2; opacity:0.9">
        <div class="col-sm-6 row" style="text-align:center">
            <div class="col-sm-6">
                <img src="@/image/dragon.jpg" width="100px" class="img-fluid rounded-circle" alt="">
                <div>Monica Crawford</div>
                <div>Mother</div><br>
            </div>
            <div class="col-sm-6">
                <img src="@/image/dragon.jpg" width="100px" class="img-fluid rounded-circle" alt="">
                <div>Monica Crawford</div>
                <div>Mother</div><br>
            </div>
            <div class="col-sm-6">
                <img src="@/image/dragon.jpg" width="100px" class="img-fluid rounded-circle" alt="">
                <div>Monica Crawford</div>
                <div>Mother</div><br>
            </div>
            <div class="col-sm-6">
                <img src="@/image/dragon.jpg" width="100px" class="img-fluid rounded-circle" alt="">
                <div>Monica Crawford</div>
                <div>Mother</div><br>
            </div>
        </div>
        <div class="col-sm-6" style="text-align:center">
          <img src="@/image/dragon.jpg" width="250px" class="img-fluid rounded-circle" alt="">
          <div>Monica Crawford</div>
          <div>Mother</div>
          <div>This beautiful soul is the brides best-friend and Maid of Honor.  They have known each other for a decade and have always supported and cheered each other on. I am over the moon to have this soul as my best friend and maid of honor.</div>
        </div>
       </div>
      <!-- ENTOURAGE -->
		

		<router-link to="/wedding/travel">
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