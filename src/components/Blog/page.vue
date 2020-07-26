<template>
    <div class="container pad-nav" id='page'>
        <div style="text-align:center"  class="col-md-12">
            <img  class="img-fluid" src="@/image/blog/11-mẹo-JavaScript-696x522.png" />
        </div>
        <h3 style="text-align:center">NGHỀ TELESALES – NHỮNG ĐIỀU CÓ THỂ BẠN CHƯA BIẾT</h3>
        <ul class="breadcrumb">
  <li><a href="#">Home</a></li>
  <li>Blog</li>
</ul>
<div>
    Bây giờ là 03:33 phút sáng. Trong phút rảnh rang chờ phần mềm chỉnh sửa video bận render, mình đọc báo mạng. Một bài báo về nghề Telesales đập vào mắt và mình muốn tranh thủ viết về nó, có thể sẽ khá trần trụi nếu bạn không phải người trong ngành kinh tế, marketing. Nhưng phải viết. Để chứng minh luận điểm gì, mình cũng chưa biết. Nhưng nếu muốn hiểu thêm vài khía cạnh xung quanh cái nghề Telesales, bạn cứ đọc tiếp đã.

***LƯU Ý: Nghề nào lương thiện cũng đều đáng quý. Bài viết nêu ra một số khía cạnh dựa trên tiếp thu và phân tích cá nhân, không vơ đũa cả nắm, không đại diện cho toàn bộ các cơ quan đoàn thể và cá nhân làm nghề Telesales trên toàn quốc.

Telesales ý là sale qua telephone, là tên tây ngắn gọn của công việc chào bán hàng qua điện thoại. Đây thường được coi là nghề dành cho sinh viên và những bạn mới ra trường xin việc làm vì nó khá dễ xin, các công ty lớn nhỏ thường tuyển nhiều. Mô tả công việc: đi qua chương trình tập huấn, nắm sản phẩm, đọc script (kịch bản), nhận danh sách số điện thoại, ổn định tư thế xuống ghế và bắt đầu gọi. Gọi từ đầu đến cuối. Ai máy bận hoặc không nghe máy thì đánh dấu vàng (hoặc đỏ xanh gì đó), tí gọi lại. Nếu may mắn, bạn sẽ có cơ hội đi gặp những người đồng ý cho bạn cơ hội trình bày và tìm cách chốt một cuộc mua bán thành công. Nếu không may, bạn sẽ cứ ngồi lõm cả cái ghế ấy cả ngày, ngày nào cũng vậy, cứ thế gọi điện thoại.

Mô tả công việc sơ sơ là như vậy, thế còn lương lậu thì sao? Thường thì các bạn sẽ có lương cứng vài triệu, chẳng thấm vào đâu, nếu bán được hàng mới có tiền, gọi là commission và đây là một % nhỏ trong tổng giá trị đơn hàng mà bạn bán được cho công ty. Dễ hiểu đúng không? Nhưng đây là điều có thể bạn chưa biết: Commission chỉ được tính từ điểm mà nó vượt qua lương cứng. Ví dụ lương cứng của bạn là 3 triệu đồng/tháng. Một gói sản phẩm mà bạn cần bán có giá 300,000 đồng và bạn ăn (tính xông xênh) là 10% giá trị gói ấy, tức là 30,000 đồng/sản phẩm là của bạn. Vậy thì 100 sản phẩm đầu tiên bạn bán được sẽ coi như là lương, vì 30 ngàn nhân lên 100 món mới được 3 triệu đồng. Bán từ sản phẩm thứ 101 trở đi thì thu nhập của bạn tháng ấy mới là 3 triệu đồng + commission. Nếu tháng ấy bạn bán được 101 món, thu nhập của bạn là 3 triệu lẻ 30 ngàn đồng. Nhưng nếu chỉ bán được 99 món, 
</div>
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
 /* Style the list */
ul.breadcrumb {
  padding: 10px 16px;
  list-style: none;
  background-color: #eee;
}

/* Display list items side by side */
ul.breadcrumb li {
  display: inline;
  font-size: 18px;
}

/* Add a slash symbol (/) before/behind each list item */
ul.breadcrumb li+li:before {
  padding: 8px;
  color: black;
  content: "/\00a0";
}

/* Add a color to all links inside the list */
ul.breadcrumb li a {
  color: #0275d8;
  text-decoration: none;
}

/* Add a color on mouse-over */
ul.breadcrumb li a:hover {
  color: #01447e;
  text-decoration: underline;
} 
</style>
        

        