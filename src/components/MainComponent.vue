<template>
  <div class="tab__wrapper">
    <button class="btn-vue-store" @click="addTabToStore">
      Add to VueStore and console.log
    </button>
    <div class="section__header">
      <h3>Shop settings</h3>
      <p>
        Adjust the main settings here and check ‘Active’ to start your ticket
        shop
      </p>
    </div>
    <div class="section__main">
      <input type="checkbox" id="shop-active" v-model="mainTab.shopActive" />
      <label for="shop-active">Shop Active</label>
      <div class="section__main__wrapper">
        <hk-form-group>
          <hk-label required sign="*">Name</hk-label>
          <hk-input
            v-model="mainTab.nameInputValue"
            name="name-input"
            id="name-input"
          />
        </hk-form-group>
        <hk-form-group>
          <hk-label>Event Data</hk-label>
          <hk-input-date
            v-model="mainTab.time"
            value-type="format"
            format="YYYY-MM-DD"
          ></hk-input-date>
        </hk-form-group>
        <hk-form-group>
          <hk-label>Default Country</hk-label>
          <hk-select
            v-model="mainTab.selectedCountry"
            :options="countrySelectList"
            placeholder="FirstCountry"
        /></hk-form-group>
        <hk-form-group
          ><hk-label>Background type</hk-label>
          <hk-select
            v-model="mainTab.selectedBackgroundType"
            :options="backgroundTypes"
            placeholder="Fill"
        /></hk-form-group>
        <hk-form-group>
          <hk-label required sign="* ">Shop Style</hk-label>
          <hk-select
            v-model="mainTab.selectedShopStyle"
            :options="shopStyleList"
            placeholder="Black"
          />
        </hk-form-group>
        <hk-form-group>
          <hk-label required sign="* ">Widget size</hk-label>
          <hk-select
            v-model="mainTab.selectedWidgetSize"
            :options="widgetSize"
            placeholder="Sq"
          />
        </hk-form-group>
        <hk-form-group>
          <hk-label for="background-color-input">Background color</hk-label>
          <hk-input
            v-model="mainTab.backgroundColor"
            name="background-color-input"
            id="background-color-input"
          />
        </hk-form-group>
        <div class="section__main__banner">
          <hk-form-group>
            <hk-label>Banner</hk-label>
            <div>
              <hk-image-uploader
                v-model="mainTab.imageBanner"
                name="banner"
              />
            </div>
          </hk-form-group>
          <hk-form-group>
            <hk-label>Banner bottom</hk-label>
            <div>
              <hk-image-uploader
                v-model="mainTab.imageBannerBottom"
                name="banner-bottom"
              />
            </div>
          </hk-form-group>
          <hk-form-group>
            <hk-label>Banner top</hk-label>
            <div>
              <hk-image-uploader
                v-model="mainTab.imageBannerTop"
                name="banner-top"
              />
            </div>
          </hk-form-group>
        </div>
        <div class="section__main__footer">
          <hk-form-group>
            <hk-label for="timer-input">Checkout timer (in minutes)</hk-label>
            <hk-input
              name="timer-input"
              id="timer-input"
              required
              v-model="mainTab.checkoutTimer"
            />
            <span>Default value 15 minutes</span>
          </hk-form-group>
          <hk-form-group>
            <input
              v-model="mainTab.displayEvent"
              type="checkbox"
              id="display-event"
            />
            <label for="display-event">Shop Active</label>
          </hk-form-group>
          <hk-form-group>
            <input
              v-model="mainTab.showOrderedPage"
              type="checkbox"
              id="show-order"
            />
            <label for="show-order">Show Order Conformation page</label>
          </hk-form-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      activeItem: "main",
      files: [],
      countrySelectList: ["FirstCountry", "SecondCountry"],
      backgroundTypes: ["Fill", "RGBA"],
      shopStyleList: ["Black", "White"],
      widgetSize: ["sq", "sv"],
      mainTab: {
        id: "MAIN",
        name: "MAIN",
        shopActive: false,
        nameInputValue: "",
        time: null,
        selectedCountry: "",
        selectedBackgroundType: "",
        selectedShopStyle: "",
        selectedWidgetSize: "",
        backgroundColor: "black",
        imageBanner: [],
        imageBannerBottom: [],
        imageBannerTop: [],
        checkoutTimer: 15,
        displayEvent: false,
        showOrderedPage: false,
      },
    };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
    addTabToStore() {
      this.$store.commit("addTab", this.mainTab);
      console.log(this.mainTab, "MainObj");
    },
  },
};
</script>

<style lang="scss" scoped>
.tab__wrapper {
  border: 1px solid black;
  .btn-vue-store {
    display: flex;
    padding: 10px;
  }
  .section__main {
    &__wrapper{
      //indentation and add to center wrapper
      width: 94%;
      margin: 0 auto;
      .form-group{
        display: inline-block;
        width: 33%;
      }
    }
  }
}
</style>
