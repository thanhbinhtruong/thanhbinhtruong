<template>
    <div id="index">
        <section class="section first-section">
            <div class="container-fluid">
                <div class="masonry-blog clearfix">
                    <div v-for="(topPost,index) in topPosts"  v-if="index == 0" class="left-side">
                        <div class="masonry-box post-media">
                             <img :src="require('@/image/blog/'+topPost.thumbnail)" alt="" class="img-fluid">
                             <div class="shadoweffect">
                                <div class="shadow-desc">
                                    <div class="blog-meta">
                                        <span class="bg-aqua"><a href="blog-category-01.html" title="">{{topPost.category != null ? topPost.category : 'No'}}</a></span>
                                        <h4>
                                        <router-link :to=" 'page/' +topPost.slug">
                                            {{topPost.title}}
                                        </router-link>                                        
                                        </h4>
                                        <small><a href="" title="">{{topPost.createdAt}}</a></small>
                                        <small><a href="" title="">by {{topPost.createdBy}}</a></small>
                                    </div><!-- end meta -->
                                </div><!-- end shadow-desc -->
                            </div><!-- end shadow -->
                        </div><!-- end post-media -->
                    </div><!-- end left-side -->

                    <div v-for="(topPost,index) in topPosts"  v-if="index == 1" class="center-side">
                        <div class="masonry-box post-media">
                             <img :src="require('@/image/blog/'+topPost.thumbnail)" alt="" class="img-fluid">
                             <div class="shadoweffect">
                                <div class="shadow-desc">
                                    <div class="blog-meta">
                                        <span class="bg-aqua"><a href="blog-category-01.html" title="">{{topPost.category != null ? topPost.category : 'No'}}</a></span>
                                        <h4>
                                        <router-link :to=" 'page/' +topPost.slug">
                                            {{topPost.title}}
                                        </router-link>    
                                        </h4>
                                        <small><a href="" title="">{{topPost.createdAt}}</a></small>
                                        <small><a href="#" title="">by {{topPost.createdBy}}</a></small>
                                    </div><!-- end meta -->
                                </div><!-- end shadow-desc -->
                            </div><!-- end shadow -->
                        </div><!-- end post-media -->
                    </div><!-- end left-side -->

                    <div v-for="(topPost,index) in topPosts"  v-if="index == 2" class="right-side hidden-md-down">
                        <div class="masonry-box post-media">
                             <img :src="require('@/image/blog/'+topPost.thumbnail)" alt="" class="img-fluid">
                             <div class="shadoweffect">
                                <div class="shadow-desc">
                                    <div class="blog-meta">
                                        <span class="bg-aqua"><a href="blog-category-01.html" title="">{{topPost.category != null ? topPost.category : 'No'}}</a></span>
                                        <h4>
                                        <router-link :to=" 'page/' +topPost.slug">
                                            {{topPost.title}}
                                        </router-link>
                                        </h4>
                                        <small><a href=" " title="">{{topPost.createdAt}}</a></small>
                                        <small><a href="#" title="">by {{topPost.createdBy}}</a></small>
                                    </div><!-- end meta -->
                                </div><!-- end shadow-desc -->
                             </div><!-- end shadow -->
                        </div><!-- end post-media -->
                    </div><!-- end right-side -->
                </div><!-- end masonry -->
            </div>
        </section>

        <section class="section wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div v-for="post in posts" class="blog-list clearfix">
                                <div class="blog-box row">
                                    <div class="col-md-4">
                                        <div class="post-media">
                                            <router-link :to=" 'page/' + post.slug">
                                            <img :src="require('@/image/blog/'+post.thumbnail)" alt="" class="img-fluid">
                                                <div class="hovereffect"></div>
                                            </router-link>
                                                                                            
                                        </div><!-- end media -->
                                    </div><!-- end col -->

                                    <div class="blog-meta big-meta col-md-8">
                                        <span class="bg-aqua"><a href="" title="">{{post.category != null ? post.category : "No" }}</a></span>                                        
                                        <h4><router-link :to=" 'page/' + post.slug">{{post.title}}</router-link></h4>
                                        <p>{{post.description}}</p>
                                        <small><a href="" title=""><i class="fa fa-eye"></i> 1887</a></small>
                                        <small><a href="" title="">{{post.createdAt}}</a></small>
                                        <small><a href="" title="">by {{post.createdBy}}</a></small>
                                    </div><!-- end meta -->
                                </div><!-- end blog-box -->

                                <hr class="invis">

                            </div><!-- end blog-list -->
                        </div><!-- end page-wrapper -->

                        <hr class="invis">

                        <div class="row">
                            <div class="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul class="pagination justify-content-start">
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a @click="addPost()" class="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div><!-- end col -->
                        </div><!-- end row -->
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
  name: 'index',

  data() {
    return {
        posts: [],
        viewestposts: [],
        topPosts:[],
        categories: [],
        testCollection:[],
        publicPath: require('@/image/blog/ads.png')
    }
  },
  components: {
    "side-bar": SideBar
  },
  created(){
        this.getPosts();
        this.getTopPosts();
        console.log(this.publicPath);
    },
  methods:{
	  	getPosts : function(){
        firebase.firestore().collection('posts').get().then((snapshot) => {
          const postsCollection = [];
          snapshot.forEach((doc) => {
            postsCollection.push(doc.data());
          });
          this.posts = postsCollection;
        }).catch((err) => {
            console.log('Error getting documents', err);
          });
	  	},

      getTopPosts: function(){
                firebase.firestore().collection('posts').limit(3).get().then((snapshot) => {
                const topPostsCollection = [];
                snapshot.forEach((doc) => {
                    topPostsCollection.push(doc.data());
                });
                this.topPosts = topPostsCollection;

                console.log(this.topPosts);
                }).catch((err) => {
                    console.log('Error getting documents', err);
                });
            },
      addPost: function(){
                firebase.firestore().collection('posts').add({
                  title: 'Tokyo',
                  slug:'cc',
                  description: 'Japan',
                  content:'cc',
                  thumbnail:'ads.png',
                  category:'cc',
                  createdAt:'cc',
                  createdBy:'ThanhBinh Truong'

                }).then(ref => {
                  console.log('Added document with ID: ', ref.id);
              });
            },

  }
 
};

</script>

<style>
</style>