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
            <router-link to="#">
                  <a class="nav-link" href="#">CODING</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="#">
                  <a class="nav-link" href="#">SERVER</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="#">
                  <a class="nav-link" href="#">HACKING</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="#">
                  <a class="nav-link" href="#">WEDDING</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/note">
                  <a class="nav-link" href="#">NOTE</a>
            </router-link>
          </li>


        </ul>
      </div>
    </nav>
  <router-view />

    <footer style="border-top:1px solid #e5e5e5;">
      <br><br>
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div style="font-weight:bold">LOGO</div><br>
                    <img style="border:1px solid black" class="img-fluid"   src="@/image/blog/logo.png"/> <br><br>
                    <span class="fa fa-instagram" style="font-size:25px"></span>
                    <span class="fa fa-facebook" style="padding-left:20px; font-size:25px"></span>
                    <span class="fa fa-youtube" style="padding-left:20px; font-size:25px"></span> <br> <br>
                    <span>© <a href="https://thanhbinhtruong.com">ThanhBinh Truong</a> 2020</span>
                <br> <br>    
                </div>
                <div class="col-sm-4">
                    <div style="font-weight:bold">BÀI VIẾT MỚI NHẤT</div><br>
                    <div>5 BƯỚC ĐỂ BỚT NHỎ NHEN | Vlog | Giang Ơi</div><br>
                    <div>5 BƯỚC ĐỂ BỚT NHỎ NHEN | Vlog | Giang Ơi</div><br>
                    <div>5 BƯỚC ĐỂ BỚT NHỎ NHEN | Vlog | Giang Ơi</div>
                <br><br>
                </div>
                <br> <br>
                <div class="col-sm-4">
                      <div style="font-weight:bold">NHẬN THÔNG BÁO</div><br>
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
