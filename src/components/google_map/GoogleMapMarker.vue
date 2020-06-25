<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCphwtfDm-RCIA6tFd6wRF-vCcqipZa0w&callback=initMap">
</script>

<script>
import { POINT_MARKER_ICON_CONFIG } from "@/constants/mapSettings";

export default {
  props: {
    google: {
      type: Object,
      required: true
    },
    map: {
      type: Object,
      required: true
    },
    marker: {
      type: Object,
      required: true
    }
  },

  methods: {
  },

  mounted() {
    const { Marker } = this.google.maps;

    var marker = new Marker({
      position: this.marker.position,
      marker: this.marker,
      map: this.map,
      icon: POINT_MARKER_ICON_CONFIG,
    });  
  }, 
};
</script>
