<template>
  <div>
    <header>
      <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-6 py-6">
              <h4 class="text-white">搜尋</h4>
              <!-- <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p> -->
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">房型</label>
                </div>
                <select v-model="rentType" class="custom-select" id="inputGroupSelect01">
                  <option value="0">不限</option>
                  <option value="1">套房</option>
                  <option value="2">雅房</option>                  
                </select>
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">性別</label>
                </div>
                <select v-model="sex" class="custom-select" id="inputGroupSelect01">
                  <option value="0">不限</option>
                  <option value="1">男生</option>
                  <option value="2">女生</option>                  
                </select>
              </div>
            </div>
            
            <div class="col-sm-6 col-md-6 py-6">
                <div class="input-group mb-3">
                <label for="distinct" class="text-white">距離學校 {{distinct}} KM </label>
                <input type="range" v-model="distinct" class="custom-range"  id="distinct" min="0" max="15" step="1">
              </div>
              <div class="input-group mb-3">
                <label for="customRange1" class="text-white">每月租金上限 {{amount}} NTD/月 </label>
                <input type="range" v-model="amount" class="custom-range" min="0" max="50000" step="500" id="customRange1">
              </div>
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

  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row">
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <!-- <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="/src/image/C_1.jpg">  -->
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
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

  <footer class="text-muted">    
  <div class="container">  
    <p class="float-right">
      <span><div class="line-it-button" data-lang="zh_Hant" data-type="share-a" data-ver="3" data-url="https://media.line.me/zh_TW/how_to_install" data-color="grey" data-size="large" data-count="false" style="display: none;"></div></span>
    </p>  
    <p>想刊登或是問題可透過<span><div class="line-it-button" data-lang="zh_Hant" data-type="friend" data-lineid="swatduck" style="display: none;"></div></span>聯繫，好用的話可以幫我分享 BY 達克</p>    
    
  </div>
</footer>
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

      .py-6{        
        padding-top: 1.5rem!important;
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
      distinct: 0,
      amount : 0,
      rentType : 1,
      sex: 0    
      
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