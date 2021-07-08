<template>
  <div class="tab__wrapper">
    <button @click="addTabToStore">Add to VueStore and console.log</button>
    <div class="section__header">
      <h3>SEO required information about Ticket Shop</h3>
    </div>
    <div class="section__main">
      <div class="section__main__wrapper">
        <hk-form-group>
          <hk-label>Short Tickets Shop description for Google</hk-label>
          <textarea
            v-model="seoTab.descriptionGoogle"
            name="descriptionGoogle"
            cols="30"
            rows="3"
            maxlength="295"
          />
        </hk-form-group>

        <p>Simple analytics</p>
        <hk-form-group>
          <hk-label>Google analize key</hk-label>
          <textarea
            v-model="seoTab.analyticsKey"
            name="analyticsKey"
            cols="20"
            rows="1"
          />
        </hk-form-group>
        <hk-form-group>
          <hk-label>Facebook pixel</hk-label>
          <textarea
            v-model="seoTab.facebookPixel"
            name="facebookPixel"
            cols="20"
            rows="1"
          />
        </hk-form-group>
        <p>Advanced analytics</p>
        <hk-form-group>
          <hk-label>Google Tag Manager key</hk-label>
          <textarea
            v-model="seoTab.managerKey"
            name="managerKey"
            cols="20"
            rows="1"
          />
        </hk-form-group>
        <hk-form-group>
          <hk-label>General preview title(including facebook)</hk-label>
          <textarea
            max-lenght="60"
            v-model="seoTab.facebookTitle"
            name="facebookTitle"
            cols="20"
            rows="1"
          />
        </hk-form-group>
        <hk-form-group>
          <hk-label>General preview description(including facebook)</hk-label>
          <textarea
            max-lenght="295"
            v-model="seoTab.facebookDescription"
            name="facebookDescription"
            cols="20"
            rows="1"
          />
        </hk-form-group>
        <hk-form-group>
          <hk-label>Facebook preview image</hk-label>
          <div>
            <hk-image-uploader
              v-model="seoTab.facebookImage"
              name="facebookImage"
            />
          </div>
        </hk-form-group>
        <hk-form-group>
          <hk-label>Twitter preview title</hk-label>
          <textarea
            max-lenght="60"
            v-model="seoTab.twitterTitle"
            name="twitterTitle"
            cols="20"
            rows="1"
          />
        </hk-form-group>
        <hk-form-group>
          <hk-label>Twitter preview description</hk-label>
          <textarea
            max-lenght="295"
            v-model="seoTab.twitterDescription"
            name="twitterDescription"
            cols="20"
            rows="1"
          />
        </hk-form-group>
        <hk-form-group>
          <hk-label>Twitter preview image</hk-label>
          <div>
            <hk-image-uploader
              v-model="seoTab.twitterImage"
              name="twitterImage"
            />
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
        facebookImage: "",
        twitterTitle: "",
        twitterDescription: "",
        twitterImage: "",
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
.tab__wrapper {
  button {
    display: flex;
    padding: 10px;
  }
  border: 1px solid black;
  .section__main {
    p{
      border-top: 1px solid black;
      border-bottom: 1px solid black;
    }
    &__wrapper {

      .form-group{
        margin: 15px;
        display: inline-block;
        width: 40%;
      }
    }
  }
}
</style>
