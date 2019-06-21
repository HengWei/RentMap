<template>
    <div>
        <header>
      <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-6 py-6">
              <h4 class="text-white">搜尋</h4>
              <!-- <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p> -->              
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
    </div>
</template>
