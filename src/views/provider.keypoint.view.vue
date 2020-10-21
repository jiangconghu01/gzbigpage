<template>
  <div class="provider-keypointview">
    <div class="container top-box">
      <div class="top-left frame-back-box"></div>
      <div class="top-right frame-back-box"></div>
    </div>
    <div class="container bottom-box">
      <div class="bottom-left frame-back-box"></div>
      <div class="bottom-center frame-back-box"></div>
      <div class="bottom-right frame-back-box"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: '',
  setup() {
    return {}
  }
})
</script>
<style lang="scss" scoped>
.provider-keypointview {
  .top-box {
    height: 460px;
    display: flex;
    .top-left {
      width: 780px;
    }
    .top-right {
      margin-left: 20px;
      flex: 1;
    }
  }
  .bottom-box {
    margin-top: 25px;
    height: 460px;
    display: flex;
    .bottom-left {
      width: 460px;
    }
    .bottom-center {
      margin-left: 20px;
      flex: 1;
    }
    .bottom-right {
      margin-left: 20px;
      flex: 1;
    }
  }
}
</style>
