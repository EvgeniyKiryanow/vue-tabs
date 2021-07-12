<template>
  <div class="tab__seo">
    <button @click="addTabToStore">Add to VueStore and console.log</button>
    <div class="tab__header">
      <h3>SEO required information about Ticket Shop</h3>
    </div>
    <div class="tab__body">
      <div class="tab__wrapper">
        <div class="first-group">
          <div>
            <hk-label>Short Tickets Shop description for Google</hk-label>
            <hk-textarea
              cols="40"
              :maxlength="295"
              v-model="seoTab.descriptionGoogle"
            />
          </div>
        </div>

        <div class="second-group">
          <div>
            <hk-label>Google analize key</hk-label>
            <textarea
              v-model="seoTab.analyticsKey"
              name="analyticsKey"
              cols="40"
              rows="1"
            />
          </div>
          <div>
            <hk-label>Facebook pixel</hk-label>
            <textarea
              v-model="seoTab.facebookPixel"
              name="facebookPixel"
              cols="40"
              rows="1"
            />
          </div>
        </div>

        <div class="third-group">
          <div>
            <hk-label>Google Tag Manager key</hk-label>
            <textarea
              v-model="seoTab.managerKey"
              name="managerKey"
              cols="40"
              rows="1"
            />
          </div>
        </div>

        <div class="fourth-group">
          <div>
            <hk-label>General preview title(including facebook)</hk-label>
            <hk-textarea
              cols="40"
              :maxlength="60"
              v-model="seoTab.facebookTitle"
            />
          </div>
          <div>
            <hk-label>General preview description(including facebook)</hk-label>
            <hk-textarea
              cols="40"
              :maxlength="295"
              v-model="seoTab.facebookDescription"
            />
          </div>
        </div>

        <div class="fifth-group">
          <div>
            <hk-label>Facebook preview image</hk-label>
            <div>
              <hk-image-uploader
                v-model="seoTab.facebookImage"
                name="facebookImage"
              />
            </div>
          </div>
        </div>

        <div class="six-group">
          <div>
            <hk-label>Twitter preview title</hk-label>
            <hk-textarea
              cols="40"
              :maxlength="60"
              v-model="seoTab.twitterTitle"
            />
          </div>
          <div>
            <hk-label>Twitter preview description</hk-label>
            <hk-textarea
              cols="40"
              :maxlength="295"
              v-model="seoTab.twitterDescription"
            />
          </div>
        </div>

        <div class="seven-group">
          <div>
            <hk-label>Twitter preview image</hk-label>
            <div>
              <hk-image-uploader
                v-model="seoTab.twitterImage"
                name="twitterImage"
              />
            </div>
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
