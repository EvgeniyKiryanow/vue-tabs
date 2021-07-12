<template>
  <div class="tab__main">
    <button class="btn-vue-store" @click="addTabToStore">
      Add to VueStore and console.log
    </button>
    <div class="tab__header">
      <h3>Shop settings</h3>
      <p>
        Adjust the main settings here and check ‘Active’ to start your ticket
        shop
      </p>
    </div>
    <div class="tab__body">
      <div class="tab__wrapper">
        <div class="first-group">
          <div>
            <input
              type="checkbox"
              id="shop-active"
              v-model="mainTab.shopActive"
            />
            <label for="shop-active">Shop Active</label>
          </div>
        </div>
        <div class="second-group">
          <div>
            <hk-label required sign="*">Name</hk-label>
            <hk-input
              v-model="mainTab.nameInputValue"
              name="name-input"
              id="name-input"
            />
          </div>

          <div>
            <hk-label>Event Data</hk-label>
            <hk-input-date
              v-model="mainTab.time"
              value-type="format"
              format="YYYY-MM-DD"
            ></hk-input-date>
          </div>

          <div>
            <hk-label>Default Country</hk-label>
            <hk-select
              v-model="mainTab.selectedCountry"
              :options="countrySelectList"
              placeholder="FirstCountry"
            />
          </div>
        </div>
        <div class="third-group">
          <div>
            <hk-label>Background type</hk-label>
            <hk-select
              v-model="mainTab.selectedBackgroundType"
              :options="backgroundTypes"
              placeholder="Fill"
            />
          </div>
          <div>
            <hk-label required sign="* ">Shop Style</hk-label>
            <hk-select
              v-model="mainTab.selectedShopStyle"
              :options="shopStyleList"
              placeholder="Black"
            />
          </div>
          <div>
            <hk-label required sign="* ">Widget size</hk-label>
            <hk-select
              v-model="mainTab.selectedWidgetSize"
              :options="widgetSize"
              placeholder="Sq"
            />
          </div>
        </div>
        <div class="fourth-group">
          <div>
            <hk-label for="background-color-input">Background color</hk-label>
            <hk-input
              v-model="mainTab.backgroundColor"
              name="background-color-input"
              id="background-color-input"
            />
          </div>
        </div>
        <div class="fifth-group">
          <div>
            <div>Banner first banner</div>
            <div>
              <hk-image-uploader v-model="mainTab.imageBanner" name="banner" />
            </div>
          </div>
          <div>
            <hk-label>Banner second bottom</hk-label>
            <div>
              <hk-image-uploader
                v-model="mainTab.imageBannerBottom"
                name="banner-bottom"
              />
            </div>
          </div>
          <div>
            <hk-label>Banner third top</hk-label>
            <div>
              <hk-image-uploader
                v-model="mainTab.imageBannerTop"
                name="banner-top"
              />
            </div>
          </div>
        </div>
        <div class="six-group">
          <div>
            <hk-label for="timer-input">Checkout timer (in minutes)</hk-label>
            <hk-input
              name="timer-input"
              id="timer-input"
              required
              v-model="mainTab.checkoutTimer"
            />
            <span>Default value 15 minutes</span>
          </div>
        </div>
        <div class="seven-group">
          <div>
            <input
              v-model="mainTab.displayEvent"
              type="checkbox"
              id="display-event"
            />
            <label for="display-event">Shop Active</label>
          </div>
        </div>

        <div class="eight-group">
          <div>
            <input
              v-model="mainTab.showOrderedPage"
              type="checkbox"
              id="show-order"
            />
            <label for="show-order">Show Order Conformation page</label>
          </div>
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
