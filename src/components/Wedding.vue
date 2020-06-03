<template>
  <div id="wedding">
<nav class="navbar fixed-top navbar-expand-lg shadow-sm navbar-light bg-light">
      <a class="navbar-brand" href="#">
        KIERAN & MY<br>
        18 FEBRUARY 2021
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
            <a class="nav-link" href="#">COVER</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">WELCOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">STORIES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">KEY PEOPLE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">TRAVEL</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">GUESTBOOK</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">GALLERY</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">RSVP</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">

      <br><br><br><br><br>
       
      <div class="col-sm-12" style="text-align:center">
        <h1>K I E R A N  & MY</h1>
        <p>18 FEBRUARY 2021</p>
      </div>

      <div class="offset-sm-4 col-sm-4">
        <img style="border:3px solid lightgray;" width="100%" src="@/image/avatar.jpg" class="mx-auto d-block rounded-circle" alt="..."/>
      </div>
      <div class="col-sm-4"></div>

      <!-- STORIES -->
      <div class="row">

        <div class="offset-sm-4 col-sm-4">
          <div class="title">
            <h5>STORIES</h5>
          </div>
        </div>
        <div class="offset-sm-4"></div>

        <div class="col-lg-3 col-md-4 col-6">
          <div class="card">
            <a  data-toggle="modal" data-target="#modalStory1">
            <img style="padding:10px" class="card-img-top" src="@/image/story.jpg" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">NY to London</p>
            </div>
          </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-6">
          <div class="card">
            <a  data-toggle="modal" data-target="#modalStory2">
            <img style="padding:10px" class="card-img-top" src="@/image/story.jpg" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">NY to London</p>
            </div>
          </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-6">
          <div class="card">
            <a  data-toggle="modal" data-target="#modalStory3">
            <img style="padding:10px" class="card-img-top" src="@/image/story.jpg" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">NY to London</p>
            </div>
          </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-6">
          <div class="card">
            <a  data-toggle="modal" data-target="#modalStory4">
            <img style="padding:10px" class="card-img-top" src="@/image/story.jpg" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">NY to London</p>
            </div>
          </a>
          </div>
        </div>
      </div>
      <!-- STORIES -->

      <!-- ENTOURAGE -->
      <div class="row">

        <div class="offset-sm-4 col-sm-4">
          <div class="title">
            <h5>ENTOURAGE</h5>
          </div>
        </div>
        <div class="offset-sm-4"></div>

        <div class="offset-sm-2 col-sm-4" style="text-align:center">
          <div class="offset-sm-3 col-sm-6">
            <div class="title">
              <h5>BRIDESMAIDS</h5>
            </div>      
          </div>
          <div class="card">
            <div class="row no-gutters">
              <div class="col-auto">
                <img src="@/image/bridesmaid1.jpg" width="100px" class="img-fluid" alt="">
              </div>
              <div class="col">
                <div class="card-block px-2">
                  <h4 class="card-title">Olivia</h4>
                  <p class="card-text">Sister and Maid of Honor</p>

                </div>
              </div>
            </div>
          </div>
          <br>
          <div class="card">
            <div class="row no-gutters">
              <div class="col-auto">
                <img src="@/image/bridesmaid1.jpg" width="100px" class="img-fluid" alt="">
              </div>
              <div class="col">
                <div class="card-block px-2">
                  <h4 class="card-title">Olivia</h4>
                  <p class="card-text">Sister and Maid of Honor</p>

                </div>
              </div>
            </div>
          </div>
          <br>
          <div class="card">
            <div class="row no-gutters">
              <div class="col-auto">
                <img src="@/image/bridesmaid1.jpg" width="100px" class="img-fluid" alt="">
              </div>
              <div class="col">
                <div class="card-block px-2">
                  <h4 class="card-title">Olivia</h4>
                  <p class="card-text">Sister and Maid of Honor</p>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-4" style="text-align:center">
          <div class="offset-sm-3 col-sm-6">
            <div class="title">
              <h5>GROOMSMEN</h5>
            </div>
          </div>
          <div class="card">
            <div class="row no-gutters">
              <div class="col-auto">
                <img src="@/image/bridesmaid1.jpg" width="100px" class="img-fluid" alt="">
              </div>
              <div class="col">
                <div class="card-block px-2">
                  <h4 class="card-title">Olivia</h4>
                  <p class="card-text">Sister and Maid of Honor</p>

                </div>
              </div>
            </div>
          </div>
          <br>
          <div class="card">
            <div class="row no-gutters">
              <div class="col-auto">
                <img src="@/image/bridesmaid1.jpg" width="100px" class="img-fluid" alt="">
              </div>
              <div class="col">
                <div class="card-block px-2">
                  <h4 class="card-title">Olivia</h4>
                  <p class="card-text">Sister and Maid of Honor</p>

                </div>
              </div>
            </div>
          </div>
          <br>
          <div class="card">
            <div class="row no-gutters">
              <div class="col-auto">
                <img src="@/image/bridesmaid1.jpg" width="100px" class="img-fluid" alt="">
              </div>
              <div class="col">
                <div class="card-block px-2">
                  <h4 class="card-title">Olivia</h4>
                  <p class="card-text">Sister and Maid of Honor</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ENTOURAGE -->

      <!-- WELCOME TO DA NANG -->
      <div class="row">
        <div class="offset-sm-4 col-sm-4">
          <div class="title">
            <h5>WELCOME TO DA NANG</h5>
          </div>
        </div>
        <div class="col-sm-4"></div>
        <div style="background:#ffffff" class="offset-sm-3 col-sm-6">
          <img src="@/image/travel.jpg" class="img-fluid" alt="">
          <div class="title">
            <h5>SIGHT SEEING</h5>
          </div>
          <div class="card">
            <div class="row no-gutters">
              <div class="col">
                <div class="card-block px-2">
                  <h5 class="card-title">Dragon Bridge Fire Show</h5>
                  <p class="card-text">The fire show takes place on Saturdays and Sundays at 9pm, only for a few minutes.</p>
                </div>
              </div>
              <div class="col-auto">
                <img src="@/image/dragon.jpg" width="100px" class="img-fluid rounded-circle" alt="">
              </div>
            </div>
            
            <div class="row no-gutters">            
              <div class="col">
                <div class="card-block px-2">                     
                  <h5 class="card-title">Lady Buddha</h5>
                  <p class="card-text">The fire show takes place on Saturdays and Sundays at 9pm, only for a few minutes.</p>

                </div>
              </div>

              <div class="col-auto">
                <img src="@/image/3d.jpg" width="100px" class="img-fluid rounded-circle" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- WELCOME TO DA NANG -->

      <!-- Gallery -->
      <div class="row">
        <div class="offset-sm-4 col-sm-4 ">
          <div class="title">
            <h5>GALLERY</h5>
          </div>
        </div>
        <div class="offset-sm-4"></div>

        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail" src="@/image/gallery1.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail" src="@/image/gallery2.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail" src="@/image/gallery3.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail" src="@/image/gallery4.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail" src="@/image/gallery5.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail" src="@/image/gallery6.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail" src="@/image/gallery7.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail" src="@/image/gallery8.jpg" alt="">
          </a>
        </div>
      </div>
      <!-- Gallery -->


    </div>


    <div class="row">

      <nav class=" navbar fixed-bottom navbar-light bg-faded">
        <button class="btn btn-secondary mx-auto navbar-brand ">RSVP</button>
      </nav>
    </div>




<!-- Modal -->
<div class="modal fade" id="modalStory1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->


<!-- Modal -->
<div class="modal fade" id="modalStory2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->

<!-- Modal -->
<div class="modal fade" id="modalStory3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->

<!-- Modal -->
<div class="modal fade" id="modalStory4" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...4
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<p></p>
<!-- Modal -->
    
  </div>

</template>

<script>

  export default {
    name: 'Wedding',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
<script src="@/js/myjs.js"></script>
<style>
.title { 
  background: #bdb3a2;
  text-align: center;
  font-family:"khotijah";
  margin-top:20px;
  margin-bottom:20px;
  border-radius: 50px;
  opacity: 0.8;
  border: 1px solid gray;
  color:white;
}
.card img {
  padding:10px
}
.card {
  background: FloralWhite;
  
}
  .flag {
      opacity: 0.8;
      width: 40px;
      height: 20px;
      box-sizing: content-box;
      padding-top: 15px;
      position: relative;
      background: #bdb3a2;
      color: white;
      font-size: 9px;
      letter-spacing: 0.2em;
      text-align: center;
      text-transform: uppercase;
    }
    .flag:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 0;
      border-bottom: 10px solid #eee;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
    }


</style>

