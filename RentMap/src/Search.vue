<template>
  <div>
    <header>
      <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-8 py-8">
              <h4 class="text-white">搜尋</h4>
              <!-- <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p> -->
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">房型</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                  <option selected>不限</option>
                  <option value="1">套房</option>
                  <option value="2">雅房</option>                  
                </select>
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">性別</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                  <option selected>不限</option>
                  <option value="1">男生</option>
                  <option value="2">女生</option>                  
                </select>
              </div>      
              <div class="input-group mb-3">
                <label for="customRange1" class="text-white">距離學校</label>
                <input type="range" class="custom-range" id="customRange1">
              </div>
              <div class="input-group mb-3">
                <label for="customRange1" class="text-white">每月租金上限</label>
                <input type="range" class="custom-range" min="0" max="100000" step="" id="customRange1">
              </div>
            </div>
            
            <div class="col-sm-4 offset-md-1 py-4">
              <h4 class="text-white">Contact</h4>
              <ul class="list-unstyled">
                <li><a href="#" class="text-white">Follow on Twitter</a></li>
                <li><a href="#" class="text-white">Like on Facebook</a></li>
                <li><a href="#" class="text-white">Email me</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container d-flex justify-content-between">
          <a href="#" class="navbar-brand d-flex align-items-center">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="mr-2" viewBox="0 0 24 24" focusable="false"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg> -->
            <strong>草山租屋網</strong>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
      <main role="main">

  <!-- <section class="jumbotron text-center">
    <div class="container">
      <h1 class="jumbotron-heading">Album example</h1>
      <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
      <p>
        <a href="#" class="btn btn-primary my-2">Main call to action</a>
        <a href="#" class="btn btn-secondary my-2">Secondary action</a>
      </p>
    </div>
  </section> -->

  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row">
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="/src/image/C_1.jpg"> 

            <div class="card-body">
              <p class="card-text">
                地址: 士林區菁山路110巷17號<br>
                租金: 5000元/月<br>
                房型: 套房<br>

              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">詳細資料</button>
                  <!-- <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> -->
                </div>
                <!-- <small class="text-muted">9 mins</small> -->
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>
  </div>

</main>

  </div>
  
  

</template>

<style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>



<script>
import json from './data.json'
export default {
  name: 'app',
  data () {
    return {      
      icon: { url: 'house.png' },
      data: json,
      info: {
        "id":0,
        "position":{"lat":0, "lng":0},        
        "address":"",
        "owner":"",
        "phone":"",        
        "detail":[
            {
                "img":"",
                "amount":"",
                "type":0,
                "area":0,
                "floor":0                
            }
        ]	    
    }
    }
  },
  methods:{
    callInfo(id) {      
      this.info = this.data.find(d=> d.id ===id);
      $('#exampleModal').modal('show');
    }
  }
}
</script>