<template>
  <div class="app-dashboard">
    <div class="dashboard-map">
      <div id="dash-map" ref="dashmap"></div>
    </div>
    <div class="dashboard-stats">
      <div class="menu-selector">
        <div class="repaired-selector">
          <div>
            Restaurants Analyzed
          </div>
          <div class="count">{{ reported_count }}</div>
        </div>
      </div>
      <div class="stats-list">
        <ul>
          <li
            class="pothole"
            v-for="pothole in potholes"
            :key="pothole['_id']['$oid']"
          >
            <div class="pothole-data">
              {{ pothole.latitude }} N, {{ pothole.longitude }} E
            </div>
            <div class="pothole-actions">
              <div
                class="circle-button location"
                @click="refocusMap(pothole.latitude, pothole.longitude)"
              >
                <img src="@/assets/locate.svg" />
              </div>
              <router-link
                :to="{
                  name: 'Pothole',
                  params: { pothole_id: pothole['_id']['$oid'] }
                }"
                tag="div"
                class="circle-button view"
              >
                <img src="@/assets/right.svg" />
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import gmapsInit from "@/assets/gmaps";

import moment from "moment";

export default {
  name: "Results",
  data() {
    return {
      potholes: null,
      decoder: null,
      google: null,
      reported_count: 0,
      map: null,
      markers: []
    };
  },
  methods: {
    milliseconds_to_time(mil) {
      return moment(parseInt(mil)).format("MMM Do YYYY");
    },
    refocusMap(lat, lon) {
      console.log(lat, lon);

      const newLatitude = parseFloat(lat);
      const newLongitude = parseFloat(lon);

      this.map.setCenter({ lat: newLatitude, lng: newLongitude });
      this.map.setZoom(16);

      this.markers.forEach(marker => {
        marker.setMap(null);
      });

      let current_marker = new this.google.maps.Marker({
        position: { lat: newLatitude, lng: newLongitude },
        map: this.map
      });

      this.markers.push(current_marker);
    },
    refocusAll() {
      this.map.setZoom(8);

      this.markers.forEach(marker => {
        marker.setMap(null);
      });

      this.potholes.forEach(pothole => {
        const newLatitude = parseFloat(pothole.latitude);
        const newLongitude = parseFloat(pothole.longitude);

        let current_marker = new this.google.maps.Marker({
          position: { lat: newLatitude, lng: newLongitude },
          map: this.map
        });

        this.markers.push(current_marker);
      });
    }
  },
  computed: {
    length_of_stats() {
      if (this.potholes) {
        return this.potholes.length;
      } else {
        return 0;
      }
    }
  },
  async mounted() {
    try {
      this.google = await gmapsInit();
      this.geocoder = new this.google.maps.Geocoder();

      this.$http
        .get("/potholes")
        .then(({ data }) => {
          this.potholes = data;
          this.reported_count = 2;

          this.map = new this.google.maps.Map(this.$refs.dashmap, {
            center: { lat: 25.42, lng: 81.76 },
            zoom: 8,
            mapTypeId: "satellite"
          });

          data.forEach(pothole => {
            const newLatitude = parseFloat(pothole.latitude);
            const newLongitude = parseFloat(pothole.longitude);

            let current_marker = new this.google.maps.Marker({
              position: { lat: newLatitude, lng: newLongitude },
              map: this.map
            });

            this.markers.push(current_marker);
          });
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style lang="scss" scoped>
.circle-button {
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #443695;
  margin-right: 4px;
  cursor: pointer;

  img {
    height: 75%;
  }
}

.location {
  img {
    height: 50%;
  }
}

.app-dashboard {
  width: 100%;
  background-color: #F5F5F5;
  height: 94vh;
  display: flex;
  justify-content: stretch;

  .dashboard-map {
    flex: 0 0 73%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    #dash-map {
      width: 100%;
      height: 100%;
      background-color: #FDFDFD;
    }
  }

  .dashboard-stats {
    flex: 0 0 27%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .stats-list {
    height: 75%;
    width: 75%;
    background-color: #F5F5F5;
  }

  .pothole {
    padding: 1rem;
    padding-bottom: 0.8rem;
    padding-top: 0.8rem;
    border-bottom: 2px solid #E0E0E0;

    display: flex;
    align-items: center;
    justify-content: space-between;
  

    .pothole-actions {
      display: flex;
    }
  }

  .menu-selector {
    width: 75%;
    height: 6rem;
    color: white;
    background-color: #E0E0E0;
    margin-bottom: 1.5rem;
    border-radius: 0.5rem;

    display: flex;
    overflow: hidden;

    .count {
      font-size: 2rem;
    }

    .reported-selector {
      flex: 1;
      background-color: #443695;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-right: 2rem;
      align-items: flex-end;
      cursor: pointer;

      &:hover {
        box-shadow: 0px 0px 5px #444444;
        transition: all 100ms ease-in;
      }
    }

    .repaired-selector {
      flex: 1;
      background-color: #E65100;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 2rem;
      align-items: flex-start;
      cursor: pointer;
      &:hover {
        box-shadow: 0px 0px 5px #444444;
        transition: all 100ms ease-in;
      }
    }
  }
}
</style>
