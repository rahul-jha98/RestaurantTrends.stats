<template>
  <div>
    <nav class="app-navbar navbar navbar-expand-lg navbar-dark">
      <div>
        <a class="navbar-brand" href="#">
          <img src="@/assets/logo.png" class="header-logo" />
          Zomato Visualizer
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="app-navbar--clock">
        {{ time }}
      </div>
      <div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <router-link
              tag="li"
              class="nav-item"
              active-class="active-item"
              :to="{ name: 'Search' }"
              exact-active-class
            >
              <a class="nav-link" href="#">Search</a>
            </router-link>
            <router-link
              tag="li"
              class="nav-item"
              active-class="active-item"
              :to="{ name: 'Results' }"
            >
              <a class="nav-link" href="#">Results</a>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: "Header",
  data() {
    return {
      time: ""
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.app-navbar { 
  height: 6vh;
  padding: 0 4rem;
  background-color: #c62828;
  display: flex;
  justify-content: space-between;

  .header-logo {
    height: 30px;
    width: auto;
    margin-right: 5px;
  }

  &--clock {
    color: white;
  }
}

.active-item {
  a {
    color: white;
  }
}
</style>
