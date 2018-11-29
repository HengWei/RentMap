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
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="false" 
    :icon="icon"  
    @click="center=m.position"
  />
</GmapMap>
  </div>  
</template>

<script>
export default {
  name: 'app',
  data () {
    return {      
      icon: { url: 'house.png' },
      markers: [
        {
          "position":{lat: 25.137937, lng: 121.546514}          
        },
        {
          "position":{lat: 25.137607, lng: 121.542532}          
        }         
        ]
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
