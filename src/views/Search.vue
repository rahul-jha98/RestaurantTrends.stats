<template>
  <div class="app-search">
    <div class="content-space">
      <div class="header">Enter name of city</div>
      

      <div class = "container">
        <div class="form-group" style="width: 50%;margin: auto;">
          <div class = "input-group">
            <input class="form-control form-control-lg" type="text" placeholder="City Name">  
            <div class="input-group-append">
              <button class="btn " type="button">Go</button>
            </div>
          </div>
          
        </div>
        <div class="row" style="margin-top: 10%">          
          <div class="card col-sm">
            <div class = "image">
              <img src="@/assets/scrape.svg" alt="Avatar" style="width:70%; margin: 8%;">
            </div>
            <div class="container"> 
              <p>Download all the restarurants data by scraping Zomato</p>
            </div>
          </div>

          <div class="card col-sm">
            <div class = "image">
              <img src="@/assets/processing.svg" alt="Avatar" style="width:63%; margin: 8%;">
            </div>
            <div class="container">
              <p>Analyze the data collected on the server</p>
            </div>
          </div>

          <div class="card col-sm">
            <div class = "image">
              <img src="@/assets/data.svg" alt="Avatar" style="width:70%; margin: 8%;">
            </div>
            <div class="container">
              <p>Provide the visualization in beautiful UI</p>
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  async mounted() {
    this.$http
      .get("/repair")
      .then(({ data }) => {
        console.log(data);
        this.repairs = data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  data() {
    return {
      repairs: []
    };
  }
};
</script>

<style lang="scss" scoped>
.app-search {
  height: 94vh;
  width: 100%;
  background-color: #FDFDFD;

  display: flex;

  padding: 4rem;
}

.content-space {
  width: 100%;

  .header {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .request-list {
    color: white;

    .list-group-item {
      background-color: #111111;
      display: flex;
    }
  }

  .card {
  /* Add shadows to create the "card" effect */
  margin: 2%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 20px 0 rgba(0,0,0,0.2);
  }

  /* Add some padding inside the card container */
  .container {
    padding: 2px 16px;
    }
}

  .form-control:focus {
    border-color: #c62828;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
  }

  .btn {
    background-color: #c62828;
    border-color: #c62828;
    color: white;
  }
</style>
