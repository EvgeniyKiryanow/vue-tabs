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

      <div class="tabs" id="myTabContent">
        <div
          class="tab tab-fade"
          :class="{ 'active show': isActive('main') }"
          id="main"
        >
          <MainComponent />
        </div>
        <div
          class="tab tab-fade"
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
@import "src/utils/flex-mixins";
.nav {
  display: flex;
  .nav__link {
    padding: 15px;
  }
}
.tabs {
  .tab-fade {
    display: none;
    &.active {
      display: block;
    }
  }
  .tab {
    border: 1px solid black;
    &__seo {
      & .tab__header {
        padding: 20px;
        text-align: left;
        border-bottom: 1px solid black;
        margin-bottom: 15px;
      }
      & .tab__wrapper {
        .first-group{
          width: 100%;
        }
        .second-group{
          @include d-flex;
          justify-content: space-between;
          & > div {
            width: 48%;
          }
        }
        .third-group{
          display: flex;
          width: 48%;
          align-items: center;
          justify-content: center;
        }
        .fourth-group{
          @include d-flex;
          justify-content: space-between;
          & > div {
            width: 48%;
          }
        }
        .fifth-group{
          display: flex;
          width: 48%;
          align-items: center;
          justify-content: center;

        }
        .six-group{
          @include d-flex;
          justify-content: space-between;
          & > div {
            width: 48%;
          }
        }
        .seven-group{
          display: flex;
          width: 48%;
          align-items: center;
          justify-content: center;
        }

      }
    }
    &__main {
      & .tab__header {
        padding: 20px;
        text-align: left;
        border-bottom: 1px solid black;
        margin-bottom: 15px;
      }
      & .tab__wrapper {
        .first-group{
          width: 100%;
        }
        .second-group{
          @include d-flex;
          justify-content: space-between;
          & > div {
            width: 33%;
          }
        }
        .third-group{
          @include d-flex;
          justify-content: space-between;
          & > div {
            width: 33%;
          }
        }
        .fourth-group{
          @include d-flex;
        }
        .fifth-group{
          @include d-flex;
          justify-content: space-between;
          & > div {
            width: 33%;
          }
        }
        .six-group{
          @include d-flex;
        }
        .seven-group{
          @include d-flex;
        }
        .eight-group{
          @include d-flex;
        }
      }
    }
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
