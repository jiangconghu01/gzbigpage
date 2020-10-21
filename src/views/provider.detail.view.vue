<template>
  <div class="provider-detailview">
    <div class="container top-box"></div>
    <div class="container center-box">
      <div class="center-left frame-back-box"></div>
      <div class="center-center frame-back-box"></div>
      <div class="center-right frame-back-box"></div>
    </div>
    <div class="container bottom-box">
      <div class="bottom-left frame-back-box"></div>
      <div class="bottom-right frame-back-box"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: '',
  setup() {
    return {}
  }
})
</script>
<style lang="scss" scoped>
.provider-detailview {
  .top-box {
    height: 140px;
    background: url('../assets/box_top_back.jpg') no-repeat;
    background-size: contain;
  }
  .center-box {
    height: 380px;
    margin-top: 20px;
    display: flex;
    & > div {
      flex: 1;
    }
    .center-center {
      margin: 0 25px;
    }
  }
  .bottom-box {
    height: 380px;
    margin-top: 20px;
    display: flex;
    .bottom-left {
      width: 800px;
    }
    .bottom-right {
      margin-left: 20px;
      flex: 1;
    }
  }
}
</style>
