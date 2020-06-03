<template>
<div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div class="sidebar">
                            <div class="widget">
                                <h2 class="widget-title">Search</h2>
                                <form class="form-inline search-form">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Search on the site">
                                    </div>
                                    <button type="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>
                                </form>
                            </div><!-- end widget -->

                            <div class="widget">
                                <h2 class="widget-title">Recent Posts</h2>
                                <div class="blog-list-widget">
                                    <div v-for="topPost in topPosts" class="list-group">
                                        <router-link class="list-group-item list-group-item-action flex-column align-items-start" :to="{ path: '', params: {slug: topPost.slug}}">
                                            <div class="w-100 justify-content-between" replace>
                                                <img :src="topPost.thumbnail" alt="" class="img-fluid float-left">
                                                <h5 class="mb-1">{{topPost.title}}</h5>
                                                <small>{{topPost.createdDate}}</small>
                                            </div>                                            
                                        </router-link>
                                    </div>
                                </div><!-- end blog-list -->
                            </div><!-- end widget -->

                            <div class="widget">
                                <h2 class="widget-title">Advertising</h2>
                                <div class="banner-spot clearfix">
                                    <div class="banner-img">
                                        <img src="@/image/blog/ads.png" alt="" class="img-fluid">
                                    </div><!-- end banner-img -->
                                </div><!-- end banner -->
                            </div><!-- end widget -->

                            

                            <div class="widget">
                                <h2 class="widget-title">Popular Categories</h2>
                                <div class="link-widget">
                                    <ul>
                                        <li><a href="#">Dev<span>(1)</span></a></li>  
                                         <li><a href="#">Server<span>(3)</span></a></li>                                          
                                    </ul>
                                </div><!-- end link-widget -->
                            </div><!-- end widget -->
                        </div><!-- end sidebar -->
                    </div><!-- end col -->
                            </template>

<script>
import firebase from 'firebase';
export default {
  name: 'side-bar',
  data () {
    return {
      topPosts:[]
    }
  },
  created(){   
          this.getTopPosts(); 
    },
    methods: {
             
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
            }
    },
}
</script>

<style>
 
</style>