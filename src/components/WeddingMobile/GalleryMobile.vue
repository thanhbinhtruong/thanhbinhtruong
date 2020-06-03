<template>
	<div  class="container-fluid padding-nav">
    
		 <div id="gallery" class="row ">
        <div class="col-md-12 title">
            <h5>Gallery</h5>           
         </div> 
        
         
         <div class="col-lg-3 col-md-4 col-6">
          <a class="d-block mb-4 h-100">
            <img @click="showPhotoSwipe(0)" data-width="1280" data-height="853" class="img-fluid img-thumbnail" src="@/image/gallery1.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a  class="d-block mb-4 h-100">
            <img @click="showPhotoSwipe(1)" data-width="1280" data-height="796" class="img-fluid img-thumbnail" src="@/image/gallery2.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a  class="d-block mb-4 h-100">
            <img @click="showPhotoSwipe(2)" data-width="1280" data-height="853" class="img-fluid img-thumbnail" src="@/image/gallery3.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a  class="d-block mb-4 h-100">
            <img @click="showPhotoSwipe(3)" data-width="1280" data-height="853" class="img-fluid img-thumbnail" src="@/image/gallery4.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a  class="d-block mb-4 h-100">
            <img @click="showPhotoSwipe(4)" data-width="1280" data-height="853" class="img-fluid img-thumbnail" src="@/image/gallery7.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a  class="d-block mb-4 h-100">
            <img @click="showPhotoSwipe(5)" data-width="1280" data-height="853" class="img-fluid img-thumbnail" src="@/image/gallery8.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a  class="d-block mb-4 h-100">
            <img @click="showPhotoSwipe(6)" data-width="1142" data-height="1280" class="img-fluid img-thumbnail" src="@/image/gallery5.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a  class="d-block mb-4 h-100">
            <img @click="showPhotoSwipe(7)" data-width="930" data-height="1280" class="img-fluid img-thumbnail" src="@/image/gallery6.jpg" alt="">
          </a>
        </div>
        
     </div>
		 <v-photoswipe :isOpen="isOpen" :items="items" :options="options" @close="hidePhotoSwipe"></v-photoswipe>
     		<router-link to="/wedding/rsvp">
                <button class="nextBtns"><i class="fa fa-angle-right"></i></button>
        </router-link>
	</div>

</template>

<script>    
import { PhotoSwipe, PhotoSwipeGallery } from 'v-photoswipe'	
	export default {
    name:'GalleryMobile',
		components: {
    'v-photoswipe': PhotoSwipe,
    'v-photoswipe-gallery': PhotoSwipeGallery
  },
  mounted() {
     this.getListPhoto();    
    },
  data () { 
  
    return {
      isOpen: false,
      isOpenGallery: false,
      options: {
        index: 0
      },
      optionsGallery: {},
      items: [],
    }
  },
  methods: {
    showPhotoSwipe (index) {
      this.isOpen = true
      this.$set(this.options, 'index', index)
    },
    hidePhotoSwipe () {
      this.isOpen = false
    },
    getListPhoto (){
      var container = [];      
      $('#gallery').find('a').each(function() { 
        var $link = $(this).find('img');        
            var item = {
              src: $link.attr('src'),
              w:  $link.data('width'),
              h:  $link.data('height'),              
              }
      container.push(item)
      });   
      this.items = container;   
      return this.items;
    }
  }
}
</script>

<style>
 	 
</style>