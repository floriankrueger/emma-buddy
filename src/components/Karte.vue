<!-- Karte um Service-stellen anzuzeigen, die grade offen sind (wohl aktuell eher weniger) -->
<template>
    <div>
        Karte
        <GoogleMapLoader
  :mapConfig="mapConfig"
  apiKey="yourApiKey"
>
  <template slot-scope="{ google, map }">
    <GoogleMapMarker
      v-for="marker in markers"
      :key="marker.id"
      :marker="marker"
      :google="google"
      :map="map"
    />
    <GoogleMapLine
      v-for="line in lines"
      :key="line.id"
      :path.sync="line.path"
      :google="google"
      :map="map"
    />
  </template>
</GoogleMapLoader>
</div>
</template>
        
<script>
import GoogleMapLoader from './GoogleMapLoader'
import GoogleMapMarker from './GoogleMapMarker'
import GoogleMapLine from './GoogleMapLine'
import { mapSettings } from '@/constants/mapSettings'

export default {
  components: {
    GoogleMapLoader,
    GoogleMapMarker,
    GoogleMapLine
  },

  data () {
    return {
      markers: [
      { id: 'a', position: { lat: 51.9456253051757, lng: 7.630627632141110 } },
      { id: 'b', position: { lat: 51.95608139038080, lng: 7.6254777908325100 } },
      { id: 'c', position: { lat: 51.95888137817380, lng: 7.63306999206543 } },
      { id: 'd', position: { lat: 51.95331954956050, lng: 7.642856597900390 } },
      { id: 'e', position: { lat: 51.95616912841790, lng: 7.6343536376953100 } },
      { id: 'f', position: { lat: 51.954044342041000, lng: 7.631182670593260} },
      { id: 'g', position: { lat: 6, lng: 97 } },
      ],
      lines: [
      ],
    }
  },

  computed: {
    mapConfig () {
      return {
        ...mapSettings,
        center: this.mapCenter
      }
    },

    mapCenter () {
      return this.markers[1].position
    }
  },
}
</script>
