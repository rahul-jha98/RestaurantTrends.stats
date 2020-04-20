<template>
  <div class="app-search">
    <div class="content-space">
      <div class="header">{{header_message}}</div>
      <img src='@/assets/Progress.svg' alt="Progress" style="width:30%; margin: 4%;" v-if="path_img == 'Progress'">
      <img src='@/assets/server.svg' alt="Server Down" style="width:30%; margin: 4%;" v-if="path_img == 'server'">
      <img src='@/assets/no-data.svg' alt="No Data" style="width:30%; margin: 4%;" v-if="path_img == 'nodata'"/>
      <p>{{bottom_message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Processing",
  props: ['header_message', 'path_img', 'bottom_message'],
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