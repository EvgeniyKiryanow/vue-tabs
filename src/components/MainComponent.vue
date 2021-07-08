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
      <div class="section__main__wrapper">
        <div class="flex">
          <input
            type="checkbox"
            id="shop-active"
            v-model="mainTab.shopActive"
          />
          <label for="shop-active">Shop Active</label>
        </div>
        <hk-form-group>
          <div class="width">
            <hk-label required sign="*">Name</hk-label>
            <hk-input
              v-model="mainTab.nameInputValue"
              name="name-input"
              id="name-input"
            />
          </div>

          <div class="width">
            <hk-label>Event Data</hk-label>
            <hk-input-date
              v-model="mainTab.time"
              value-type="format"
              format="YYYY-MM-DD"
            ></hk-input-date>
          </div>

          <div class="width">
            <hk-label>Default Country</hk-label>
            <hk-select
              v-model="mainTab.selectedCountry"
              :options="countrySelectList"
              placeholder="FirstCountry"
            />
          </div>
          <div class="width">
            <hk-label>Background type</hk-label>
            <hk-select
              v-model="mainTab.selectedBackgroundType"
              :options="backgroundTypes"
              placeholder="Fill"
            />
          </div>
          <div class="width">
            <hk-label required sign="* ">Shop Style</hk-label>
            <hk-select
              v-model="mainTab.selectedShopStyle"
              :options="shopStyleList"
              placeholder="Black"
            />
          </div>

          <div class="width">
            <hk-label required sign="* ">Widget size</hk-label>
            <hk-select
              v-model="mainTab.selectedWidgetSize"
              :options="widgetSize"
              placeholder="Sq"
            />
          </div>
        </hk-form-group>
        <div class="last-input">
          <hk-form-group style="display: block; margin: 5%">
            <hk-label for="background-color-input">Background color</hk-label>

            <hk-input
              v-model="mainTab.backgroundColor"
              name="background-color-input"
              id="background-color-input"
            />
          </hk-form-group>
        </div>

        <div class="section__main__banner">
          <hk-form-group>
            <div class="width">
              <hk-label>Banner</hk-label>
              <div>
                <hk-image-uploader
                  v-model="mainTab.imageBanner"
                  name="banner"
                />
              </div>
            </div>
            <div class="width">
              <hk-label>Banner bottom</hk-label>
              <div>
                <hk-image-uploader
                  v-model="mainTab.imageBannerBottom"
                  name="banner-bottom"
                />
              </div>
            </div>
            <div class="width">
              <hk-label>Banner top</hk-label>
              <div>
                <hk-image-uploader
                  v-model="mainTab.imageBannerTop"
                  name="banner-top"
                />
              </div>
            </div>
          </hk-form-group>
        </div>
        <div class="section__main__footer">
          <div class="width">
            <hk-label for="timer-input">Checkout timer (in minutes)</hk-label>
            <hk-input
              name="timer-input"
              id="timer-input"
              required
              v-model="mainTab.checkoutTimer"
            />
            <span>Default value 15 minutes</span>
          </div>

          <div class="flex">
            <input
              v-model="mainTab.displayEvent"
              type="checkbox"
              id="display-event"
            />
            <label for="display-event">Shop Active</label>
          </div>

          <div class="flex">
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

<style lang="scss">
.flex {
  display: flex;
  margin: 3% 0;
}
.width {
  width: 30%;
  margin: 3% 0;
}
.margin-and-center {
  width: 96%;
  margin: 0 auto;
}
.tab__wrapper {
  border: 1px solid black;
  .btn-vue-store {
    display: flex;
    padding: 10px;
  }
  .section__main {
    &__wrapper {
      //indentation and add to center wrapper
      width: 94%;
      margin: 0 auto;
      .last-input {
        width: 33%;
        .form-group {
          display: block;
          margin: 5%;
          .pos-r {
            display: flex;
            .pos-r {
              width: 90%;
            }
          }
        }
      }
      .form-group {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        .form-element {
          width: 94%;
        }
      }
    }
  }
}
</style>
