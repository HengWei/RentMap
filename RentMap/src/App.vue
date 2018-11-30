<template>  
  <div id="app" class="h-100" >
    <GmapMap
  :center="{lat: 25.137937, lng: 121.546514}"
  :zoom="15"
  icon  
  map-type-id="roadmap"
  style="width: 100%; height:100%;"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in data"
    :position="m.position"
    :clickable="true"
    :draggable="false" 
    :icon="icon"  
    @click="callInfo(m.id)"
  />
</GmapMap>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h3>地點資訊</h3>
        <hr>
        <p>房東：{{info.owner}}</p>
        <p>電話：{{info.phone}}</p>
        <p>地址：{{info.address}}</p>
        <h3>房間資訊</h3>
        <hr>
        <div v-for="item in info.detail" :key="item.id">
        <p v-if="item.type===0">不明</p>
        <p v-if="item.type===1">雅房</p>
        <p v-if="item.type===2">套房</p>
        <p>{{item.area}}坪</p>
        <p>{{item.amount}}/每學期</p>
        <br>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>        
      </div>
    </div>
  </div>
</div>
  </div>
</template>

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
                "area":0                
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


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  color: #2c3e50;  
}

</style>
