<template>
  <div class="tab__wrapper">
    <button @click="addTabToStore">Add to VueStore and console.log</button>
    <div class="section__header">
      <h3>SEO required information about Ticket Shop</h3>
    </div>
    <div class="section__main">
      <div class="section__main__wrapper">
        <hk-form-group class="first-item">
          <div>
            <hk-label>Short Tickets Shop description for Google</hk-label>
            <hk-textarea :maxlength="295" v-model="seoTab.descriptionGoogle" />
          </div>
        </hk-form-group>

        <p>Simple analytics</p>

        <hk-form-group class="flex-between">
          <div class="width">
            <hk-label>Google analize key</hk-label>
            <textarea
              v-model="seoTab.analyticsKey"
              name="analyticsKey"
              cols="20"
              rows="1"
            />
          </div>
          <div class="width">
            <hk-label>Facebook pixel</hk-label>
            <textarea
              v-model="seoTab.facebookPixel"
              name="facebookPixel"
              cols="20"
              rows="1"
            />
          </div>
        </hk-form-group>
        <p>Advanced analytics</p>
        <hk-form-group class="flex-between">
          <div class="width">
            <hk-label>Google Tag Manager key</hk-label>
            <textarea
              v-model="seoTab.managerKey"
              name="managerKey"
              cols="20"
              rows="1"
            />
            <span>some text</span>
          </div>
        </hk-form-group>
        <hk-form-group class="flex-between">
          <div class="width">
            <hk-label>General preview title(including facebook)</hk-label>
            <hk-textarea :maxlength="60" v-model="seoTab.facebookTitle" />
          </div>
          <div class="width">
            <hk-label>General preview description(including facebook)</hk-label>
            <hk-textarea :maxlength="295" v-model="seoTab.facebookDescription" />
          </div>
        </hk-form-group>
        <hk-form-group class="flex-between">
          <div class="width">
            <hk-label>Facebook preview image</hk-label>
            <div>
              <hk-image-uploader
                v-model="seoTab.facebookImage"
                name="facebookImage"
              />
            </div>
          </div>
        </hk-form-group>
        <hk-form-group class="flex-between">
          <div class="width">
            <hk-label>Twitter preview title</hk-label>
            <hk-textarea :maxlength="60" v-model="seoTab.twitterTitle" />
          </div>
          <div class="width">
            <hk-label>Twitter preview description</hk-label>
            <hk-textarea :maxlength="50" v-model="seoTab.twitterDescription" />
          </div>
        </hk-form-group>
        <hk-form-group class="flex-between">
          <div class="width">
            <hk-label>Twitter preview image</hk-label>
            <div>
              <hk-image-uploader
                v-model="seoTab.twitterImage"
                name="twitterImage"
              />
            </div>
          </div>
        </hk-form-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      seoTab: {
        id: "SEO",
        name: "SEO",
        descriptionGoogle: "",
        analyticsKey: "Gp-",
        facebookPixel: "",
        managerKey: "",
        facebookTitle: "",
        facebookDescription: "",
        facebookImage: [],
        twitterTitle: "",
        twitterDescription: "",
        twitterImage: [],
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
      this.$store.commit("addTab", this.seoTab);
      console.log(this.seoTab, "SeoObj");
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  width: 100%;
}
.first-item {
  display: flex;
  justify-content: flex-start !important;
}
.flex-between {
  justify-content: space-between !important;
}
.width {
  width: 45%;
}
.tab__wrapper {
  button {
    display: flex;
    padding: 10px;
  }
  border: 1px solid black;
  .section__main {
    p {
      border-top: 1px solid black;
      border-bottom: 1px solid black;
    }
    &__wrapper {
    }
  }
}
</style>
