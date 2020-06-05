<template>
  <div class="backgroundWeddingDesk">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand mx-auto" href="#">
        <div class="date">BLOG'S</div>
        <div class="date">THANHBINH TRUONG</div>
      </a> 
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>  
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 mx-auto">

          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <router-link to="/wedding/cover">
                  <a class="nav-link" href="#">COVER</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/wedding/cover">
                  <a class="nav-link" href="#">COVER</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/note">
                  <a class="nav-link" href="#">NOTE</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/wedding">
                  <a class="nav-link" href="#">WEDDING</a>
            </router-link>
          </li>


        </ul>
      </div>
    </nav>
  <router-view />

    <footer style="border-top:1px solid #e5e5e5; padding:20px">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div style="font-weight:bold">Logo</div><br>
                    <img class="img-fluid"   src="@/image/blog/logo.png"/> <br>
                    <span class="fa fa-instagram"></span>
                    <span class="fa fa-facebook"></span>
                    <span class="fa fa-youtube"></span>
                </div>
                <div class="col-sm-4">
                    <div style="font-weight:bold">Bài Viết Mới Nhất</div><br>
                    <div>5 BƯỚC ĐỂ BỚT NHỎ NHEN | Vlog | Giang Ơi</div><br>
                    <div>5 BƯỚC ĐỂ BỚT NHỎ NHEN | Vlog | Giang Ơi</div><br>
                    <div>5 BƯỚC ĐỂ BỚT NHỎ NHEN | Vlog | Giang Ơi</div>

                </div>
                <div class="col-sm-4">
                      <div style="font-weight:bold">Nhận Thông Báo</div><br>
                      <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                          <button class="btn btn-outline-success" type="button">Submit</button>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    
    </footer>

  </div>
</template>

<script>


export default {
  name: 'layout',
  data() {
    return {
      categories: []
    };
  },
  created(){
    document.title = "ThanhBinh Truong";
  },

};
</script>
<style>    
</style>
