<template>
  <div id="nav">
    <a-spin tip="Loading..." :spinning="spinning">
      <pageContainerBox :config="{ width: 1920, height: 1080, isfix: false }">
        <pageCommonHeader></pageCommonHeader>
        <router-view class="router-page" />
      </pageContainerBox>
    </a-spin>
  </div>
</template>
<script lang="ts">
import pageContainerBox from './components/pageContainerBox.vue'
import pageCommonHeader from './components/pageCommonHeader.vue'
import { defineComponent, computed } from 'vue'
import store from './store/index'
export default defineComponent({
  name: 'app',
  components: {
    pageContainerBox,
    pageCommonHeader
  },
  setup() {
    const spinning = computed(() => store.state.isLoading)
    return {
      spinning
    }
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
  .ant-spin-nested-loading {
    height: 100%;
    background-color: rgb(0, 0, 0);
    // .ant-spin {
    //   background-color: rgba(0, 0, 0, 0.774);
    // }
  }
  .router-page {
    height: 990px;
    margin: 35px 30px 25px 30px;
  }
}
</style>
