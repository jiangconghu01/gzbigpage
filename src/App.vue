<template>
  <div id="nav">
    <img src="./assets/page_back_hd.jpg" class="bk" />
    <pageContainerBox :config="{ width: 1920, height: 1080, isfix: false }">
      <router-view />
    </pageContainerBox>
  </div>
</template>
<script lang="ts">
import pageContainerBox from './components/pageContainerBox.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: '',
  components: {
    pageContainerBox
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
  }
}
</style>
