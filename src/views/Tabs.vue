<template>
  <div id="app">
    <div class="container">
      <button id="store" @click="showVuex">Show Vuex in console.log</button>
      <div class="nav">
        <button
          class="nav__link"
          @click.prevent="setActive('main')"
          :class="{ active: isActive('main') }"
        >
          MAIN
        </button>
        <button
          class="nav__link"
          @click.prevent="setActive('seo')"
          :class="{ active: isActive('seo') }"
        >
          SEO
        </button>
      </div>

      <div class="tab__content" id="myTabContent">
        <div
          class="tab__pane tab__pane-fade"
          :class="{ 'active show': isActive('main') }"
          id="main"
        >
          <MainComponent />
        </div>
        <div
          class="tab__pane tab__pane-fade"
          :class="{ 'active show': isActive('seo') }"
          id="seo"
        >
          <SeoComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SeoComponent from "@/components/SeoComponent";
import MainComponent from "@/components/MainComponent";
export default {
  data: function () {
    return {
      activeItem: "main",
    };
  },
  components: { SeoComponent, MainComponent },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
    showVuex() {
      console.log(this.$store.state.allTabs);
    },
  },
};
</script>

<style lang="scss">
button{
  &:hover{
    background: #42b983;
  }
}
.nav{
  display: flex;
  &__link{
    padding: 20px;
  }
}
.tab__pane-fade {
  display: none;
  &.active {
    display: block;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<!--.nav {
  display: flex;
  .nav__link {
    padding: 15px;
  }
}

.tab__content {
  .tab__pane-fade {
    display: none;
    &.active {
      display: block;
    }
  }
  .tab__wrapper {
    border: 1px solid black;
    .section__header {
      width: 96%;
      margin: 0 auto;
      text-align: left;
    }
    .section__main {
      border-top: 1px solid black;
      .section__main__wrapper {
        .section__main__banner {
          width: 100%;
        }
        .form-group {
          display: inline-block;
          width: 33%;
        }
        .section__main__footer {
          .form-group {
            display: block;
          }
        }
      }
    }
  }
}-->