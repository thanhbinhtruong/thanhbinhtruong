<template>
    <div class="container">
     <div class="row" style="padding-top:80px">
            <div class="col-md-8">
                <div style=" margin:20px">
                <router-link style="color:black; text-decoration:none" :to=" 'blog/' + 'huong-dan-fucking'">
                <img class="img-fluid" src="@/image/blog/11-mẹo-JavaScript-696x522.png" />
                <h3>NGHỀ TELESALES – NHỮNG ĐIỀU CÓ THỂ BẠN CHƯA BIẾT</h3>
                </router-link>
                <p>Đây chính là lý do mà nhiều khách hàng từ chối bỏ thời gian của họ để nghe điện thoại của bạn, dựa trên thời gian tiện lợi cho bạn, nhằm mục đích kiếm lời của bạn</p>
                
                <p style="border-top:1px solid #e5e5e5;">Nếu bài viết có ích cho bạn, nó cũng sẽ có ích cho ngừời khác, sharing is caring!</p>
                <div style="text-align:center;">
                <button class="btn btn-outline-primary">Facebook</button>&nbsp;
                <button class="btn btn-outline-danger">Pinterest</button>
                </div>
                <br><br>
                </div>

                <div style=" margin:20px">
                <img class="img-fluid" src="@/image/blog/11-mẹo-JavaScript-696x522.png" />
                <h3>NGHỀ TELESALES – NHỮNG ĐIỀU CÓ THỂ BẠN CHƯA BIẾT</h3>
                <p>Đây chính là lý do mà nhiều khách hàng từ chối bỏ thời gian của họ để nghe điện thoại của bạn, dựa trên thời gian tiện lợi cho bạn, nhằm mục đích kiếm lời của bạn</p>
                
                <p style="border-top:1px solid #e5e5e5;">Nếu bài viết có ích cho bạn, nó cũng sẽ có ích cho ngừời khác, sharing is caring!</p>
                <button class="btn btn-secondary">Facebook</button>&nbsp;
                <button class="btn btn-secondary">Pinterest</button>
                </div>
                
            </div>

                
             
            <div class="col-md-4">
            <div style=" margin:20px">
            <img class="img-fluid" src="@/image/blog/11-mẹo-JavaScript-696x522.png" />
            </div>
            </div>
    </div>
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