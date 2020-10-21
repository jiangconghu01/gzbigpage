<template>
  <div id="nav">
    <pageContainerBox :config="{ width: 1920, height: 1080, isfix: false }">
      <pageCommonHeader></pageCommonHeader>
      <router-view class="router-page" />
    </pageContainerBox>
  </div>
</template>
<script lang="ts">
import pageContainerBox from './components/pageContainerBox.vue'
import pageCommonHeader from './components/pageCommonHeader.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'app',
  components: {
    pageContainerBox,
    pageCommonHeader
  },
  setup() {
    return {}
  }
})
</script>
<style lang="scss">
html,
body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  color: #fff;
  //   background-image: url('./assets/page_back_hd.jpg');
  //   background-repeat: no-repeat;
  //   background-size: cover;
}
#nav {
  height: 100%;
  img.bk {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
  .router-page {
    height: 990px;
    margin: 35px 30px 25px 30px;
  }
}
</style>
