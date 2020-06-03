<template>
  <div id="layout">
    <div class="collapse top-search" id="collapseExample">
      <div class="card card-block">
        <div class="newsletter-widget text-center">
          <form class="form-inline">
            <input
              type="text"
              class="form-control"
              placeholder="What you are looking for?"
            />
            <button type="submit" class="btn btn-primary">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
        <!-- end newsletter -->
      </div>
    </div>
    <!-- end top-search -->

    <div class="topbar-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6 hidden-xs-down">
            <div class="topsocial">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Facebook"
                ><i class="fa fa-facebook"></i
              ></a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Youtube"
                ><i class="fa fa-youtube"></i
              ></a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Pinterest"
                ><i class="fa fa-pinterest"></i
              ></a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Twitter"
                ><i class="fa fa-twitter"></i
              ></a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Flickr"
                ><i class="fa fa-flickr"></i
              ></a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Instagram"
                ><i class="fa fa-instagram"></i
              ></a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Google+"
                ><i class="fa fa-google-plus"></i
              ></a>
            </div>
            <!-- end social -->
          </div>
          <!-- end col -->

          <div class="col-lg-4 hidden-md-down"></div>
          <!-- end col -->

          <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="topsearch text-right">
              <a
                data-toggle="collapse"
                href="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
                ><i class="fa fa-search"></i> Search</a
              >
            </div>
            <!-- end search -->
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end header-logo -->
    </div>
    <!-- end topbar -->

    <div class="header-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="logo">
              <a href="/"
                ><img src="@/image/blog/logo.png" alt=""
              /></a>
            </div>
            <!-- end logo -->
          </div>
        </div>
        <!-- end row -->
      </div>
      <!-- end header-logo -->
    </div>
    <!-- end header -->

    <header class="header">
      <div class="container">
        <nav class="navbar   navbar-expand-lg navbar-light ">
      <button class="navbar-togglerGreen" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 mx-auto">
          <li class="nav-item active">
          <router-link to="/">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </router-link>
          </li>  
          <li class="nav-item">
            <router-link to="#">
                  <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">Blog</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">
                  <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">About</a>
            </router-link>
          </li>
          <li class="nav-item">
          <router-link to="/contact">
            <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">Contact</a>
          </router-link>
          </li>
        </ul>
      </div>
    </nav>
      </div>
      <!-- end container -->
    </header>
    <!-- end header -->
    
    <router-view />

    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="widget">
              <div class="footer-text text-center">
                <a href=""
                  ><img
                    src="@/image/blog/logo-footer.png"
                    alt=""
                    class="img-fluid"
                /></a>
                <p>
                 Too many people are thinking of security instead of opportunity. They seem more afraid of life than death.
                </p>                
                <div class="social">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Facebook"
                    ><i class="fa fa-facebook"></i
                  ></a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Twitter"
                    ><i class="fa fa-twitter"></i
                  ></a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Instagram"
                    ><i class="fa fa-instagram"></i
                  ></a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Google Plus"
                    ><i class="fa fa-google-plus"></i
                  ></a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Pinterest"
                    ><i class="fa fa-pinterest"></i
                  ></a>
                </div>

                <hr class="invis" />

                <div class="newsletter-widget text-center">
                  <form class="form-inline">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your email address"
                    />
                    <button type="submit" class="btn btn-primary">
                      Subscribe <i class="fa fa-envelope-open-o"></i>
                    </button>
                  </form>
                </div>
                <!-- end newsletter -->
              </div>
              <!-- end footer-text -->
            </div>
            <!-- end widget -->
          </div>
          <!-- end col -->
        </div>

        <div class="row">
          <div class="col-md-12 text-center">
            <br />
            <br />
             <!--<div class="copyright"> -->
               <!--&copy; Design By: -->
               <!--<a href="https://www.facebook.com/thanhbinh.truong.678">ThanhBinh Truong with love</a>. -->
             <!--</div> -->
          </div>
        </div>
      </div>
      <!-- end container -->
    </footer>
    <!-- end footer -->

    <div class="dmtop"><i class="fas fa-angle-up"></i>Scroll to Top</div>
  </div>
  <!-- end wrapper -->
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
<style src="@/css/versionGarden.css"></style>
<style>    
</style>
