<template>
  <div>
    <app-header @clickedbutton="btntoggled" :navinfo="visible"></app-header>
    <router-view class="routes" :class="{ notvisible: visible }"></router-view>
    <app-sidebar class="app-sidebar" @buttontoggled="btntoggled" :class="{ visible: visible }"></app-sidebar>
    <app-footer v-if="(routervalue == '/' && !visible) || (routervalue == '/about' && !visible) ||
     (routervalue == '/contact' && !visible)" :class="{ notvisible: visible }"></app-footer>
  </div>
</template>

<script>
import header from '@/components/header'
import sidebar from '@/components/sidebar'
import footer from '@/components/footer'
export default {
  components : {
    appHeader : header,
    appSidebar : sidebar,
    appFooter : footer
  },
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    routervalue() {
      return this.$route.path;
    },
  },
  methods: {
    btntoggled() {
      this.visible = !this.visible;
    },
  },
}
</script>

<style>
  @font-face {
  font-family: "Poppins";
  src: local("Poppins"),
   url(./assets/fonts/Poppins-Regular.ttf) format("truetype");
}
* {
margin: 0;
padding: 0;}
.routes {
width: 100%;}
.app-sidebar {
  display: none;
}
@media screen and (max-width : 750px) {
        .visible {
          display: block;
        }
        .notvisible {
          display: none;
        }
    }
</style>