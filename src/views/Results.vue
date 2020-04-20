<template>
  <div class="app-dashboard">
    <div class="dashboard-map ">
      <div class = 'contatiner' style='width: 100%; margin: 5%' >
        <div class="header" align='right'><img src='@/assets/locate.svg' style="margin-bottom: 5px;"/>{{city_name}}
        </div>
        <div class = "title">{{title}}</div>
        <div class = 'content-space' style=""> 
            <img :src="url" width="auto" height="100%"/>
        </div>
        </div>
    </div>
    <div class="dashboard-stats">
      <div class="menu-selector">
        <div class="repaired-selector">
          <div>
            Restaurants Analyzed
          </div>
          <div class="count">{{ analyzed }}</div>
        </div>
      </div>
      <div class="stats-list">
    
          <div class="btn-group btn-group-toggle" data-toggle="buttons"
            v-for="visualization in all_list"
            :key="visualization.name"
            style="width: 100%;"  
          >
            <label class="btn" :class="{selected: visualization.name === selectedName}">
              <input type="radio" name="options" v-id="visualization.name" autocomplete="off" checked @click="showItem(visualization.name)"> {{visualization.name}}
           </label>

          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Results",
  props: ['city_name', 'analyzed', 'all_list'],
  data() {
    return {
      url: "",
      selectedName: "",
      title: ""
    };
  },
  methods: {
   showItem(name) {
     this.selectedName = name;
     let info = this.all_list[name];
     this.url = info.url;
     this.title = info.longtext;
   }
  },
  mounted() {
    this.showItem(Object.keys(this.all_list)[0]);
  },
};
</script>

<style lang="scss" scoped>
.header {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

.content-space {
  height: 80vh;
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
    flex: 0 0 77%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FDFDFD;

    #dash-map {
      width: 100%;
      height: 100%;
      background-color: #FDFDFD;
    }
  }

  .dashboard-stats {
    flex: 0 0 23%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .stats-list {
    height: 75%;
    width: 75%;
    background-color: #F5F5F5;
  }

  .pothole {
    padding: 1rem;
    padding-bottom: 0.9rem;
    padding-top: 0.9rem;
    border-bottom: 2px solid #BDBDBD;
    background-color: #FDFDFD;
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

  .btn {
      background-color: #F5F5F5;
      border-color: #F5F5F5;
      margin: .2rem;
      border-radius: 10px;
    }

    .selected {
        background-color:#EF6C00;
        color:white;
      }
}
</style>
