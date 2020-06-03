<template>
    <div id='page'>
    <div class="page-title wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h2><i class="fa fa-leaf bg-green"></i> Blog</h2>
                    </div><!-- end col -->
                    <div class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Blog</li>
                        </ol>
                    </div><!-- end col -->                    
                </div><!-- end row -->
            </div><!-- end container -->
        </div><!-- end page-title -->

        <section class="section wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-title-area">
                                 <span class="color-green"><a href="garden-category.html" title="">{{post.category}}</a></span> 

                                <h3>{{post.title}}</h3>

                                <div class="blog-meta big-meta">
                                    <small><a href="garden-single.html" title="">{{post.createdAt}}</a></small>
                                    <small><a href="blog-author.html" title="">by {{post.createdBy}}</a></small>
                                    <small><a href="#" title=""><i class="fa fa-eye"></i> 2344</a></small>
                                </div><!-- end meta -->

                                <div class="post-sharing">
                                    <ul class="list-inline">
                                        <li><a href="#" class="fb-button btn btn-primary"><i class="fa fa-facebook"></i> <span class="down-mobile">Share on Facebook</span></a></li>
                                        <li><a href="#" class="tw-button btn btn-primary"><i class="fa fa-twitter"></i> <span class="down-mobile">Tweet on Twitter</span></a></li>
                                        <li><a href="#" class="gp-button btn btn-primary"><i class="fa fa-google-plus"></i> <span class="down-mobile">Share on Google</span> </a></li>
                                    </ul>
                                </div><!-- end post-sharing -->
                            </div><!-- end title -->

                            <div class="single-post-media">
                                <img :src="post.thumbnail" alt="" class="img-fluid">
                            </div><!-- end media -->

                            <div v-html="post.content" class="blog-content">  
                                              
                            </div><!-- end content -->

                            <div class="blog-title-area">
                                <div class="tag-cloud-single">
                                    <span>Tags</span>
                                    <small><a href="#" title="">lifestyle</a></small>
                                    <small><a href="#" title="">colorful</a></small>
                                    <small><a href="#" title="">trending</a></small>
                                    <small><a href="#" title="">another tag</a></small>
                                </div><!-- end meta -->

                                <div class="post-sharing">
                                    <ul class="list-inline">
                                        <li><a href="#" class="fb-button btn btn-primary"><i class="fa fa-facebook"></i> <span class="down-mobile">Share on Facebook</span></a></li>
                                        <li><a href="#" class="tw-button btn btn-primary"><i class="fa fa-twitter"></i> <span class="down-mobile">Tweet on Twitter</span></a></li>
                                        <li><a href="#" class="gp-button btn btn-primary"><i class="fa fa-google-plus"></i> <span class="down-mobile">Share on Google</span></a></li>
                                    </ul>
                                </div><!-- end post-sharing -->
                            </div><!-- end title -->
 <!--
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="banner-spot clearfix">
                                        <div class="banner-img">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_QVdb2_PR2oj-t9wLReVaaBAmKPc1sdALa-aglkWdCAcnJO0AFw&s" alt="" class="img-fluid">
                                        </div> 
                                    </div> 
                                </div> 
                            </div> 
-->
                            <hr class="invis1">

                            <div class="custombox authorbox clearfix">
                                <h4 class="small-title">About author</h4>
                                <div class="row">
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                        <img src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/p720x720/65857690_2424861067742475_1013424119338762240_o.jpg?_nc_cat=109&_nc_ohc=jAtgNW7Lat8AQklq5WRdHGKelVFab48JKE8-tkAYFeuwl5uJ5BrlkFzVQ&_nc_ht=scontent.fsgn5-6.fna&oh=ead8b60385c9c306e3e59dcbca1b0246&oe=5EADB740" alt="" class="img-fluid rounded-circle"> 
                                    </div><!-- end col -->

                                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                                        <h4><a href="#">Truong Thanh Binh</a></h4>
                                        <p>Đẹp trai, tài năng, tư duy đỉnh cao, tố chất lãnh đạo và nhiều phẩm chất quý khác là những gì tôi không có. Tôi chỉ có kiến thức để chia sẻ với các bạn. Welcome to my blog.</p>

                                        <div class="topsocial">
                                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i class="fa fa-facebook"></i></a>
                                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Youtube"><i class="fa fa-youtube"></i></a>
                                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i class="fa fa-pinterest"></i></a>
                                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i class="fa fa-twitter"></i></a>
                                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i class="fa fa-instagram"></i></a>
                                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Website"><i class="fa fa-link"></i></a>
                                        </div><!-- end social -->

                                    </div><!-- end col -->
                                </div><!-- end row -->
                            </div><!-- end author-box -->

                            <hr class="invis1">

                            <div class="custombox clearfix">
                                <h4 class="small-title">You may also like</h4>
                                
                            </div><!-- end custom-box -->

                            <hr class="invis1">

                            <div class="custombox clearfix">
                                <h4 class="small-title">Comments</h4>
                                 
                            </div><!-- end custom-box -->

                            <hr class="invis1">

                            <div class="custombox clearfix">
                                <h4 class="small-title">Leave a Reply</h4>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <form class="form-wrapper">
                                            <input type="text" class="form-control" placeholder="Your name">
                                            <input type="text" class="form-control" placeholder="Email address">
                                            <input type="text" class="form-control" placeholder="Website">
                                            <textarea class="form-control" placeholder="Your comment"></textarea>
                                            <button type="submit" class="btn btn-primary">Submit Comment</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div><!-- end page-wrapper -->
                    </div><!-- end col -->

                    <side-bar></side-bar>
                </div><!-- end row -->
            </div><!-- end container -->
        </section>
    </div>
</template>
<script>
import firebase from 'firebase';
import SideBar from "@/components/Core/SideBar"

export default {
    name: 'page',

    data() {
        return {
            post: [],            
            viewestposts: [],
            topPosts:[],
            categories: [],
        }
    },
components: {
    "side-bar": SideBar
  },
     watch: {
    '$route.params.slug': function (slug) {
      this.getPost();
    }
  },

    created(){   
          this.getPost();
          this.getTopPosts(); 
    },

    methods: {
            getPost: function(){
                firebase.firestore().collection('posts').where('slug', '==', this.$route.params.slug).get().then(snapshot => {
                    if (snapshot.empty) {
                    console.log('No matching documents.');
                    return;
                    }  
                    snapshot.forEach(doc => {
                    this.post = doc.data();
                    });
                    }).catch((err) => {
                        console.log('Error getting documents', err);
                    });
            },
             
    },


};

</script>

<style>
</style>
        

        