<template>
  <div class="provider-keypointview">
    <div class="container top-box">
      <div class="top-left frame-back-box">
        <h2 class="chart-title">供应商列账情况统计图</h2>
        <div class="chart-box" id="keypoint-view-top-left"></div>
      </div>
      <div class="top-right frame-back-box">
        <h2 class="chart-title">信用信息分布情况统计图</h2>
        <div class="chart-box" id="keypoint-view-top-right"></div>
      </div>
    </div>
    <div class="container bottom-box">
      <div class="bottom-left frame-back-box">
        <h2 class="chart-title">供应商行业类型情况统计图</h2>
        <div class="chart-box" id="keypoint-view-bottom-left"></div>
      </div>
      <div class="bottom-center frame-back-box">
        <h2 class="chart-title">当年签订合同的采购方式分布统计图</h2>
        <div class="chart-box" id="keypoint-view-bottom-center"></div>
      </div>
      <div class="bottom-right frame-back-box">
        <h2 class="chart-title">注册资本和实缴资本差异分析</h2>
        <div class="chart-box" id="keypoint-view-bottom-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { inintCharts } from '../chartconfig/installchart'
export default defineComponent({
  name: '',
  setup() {
    inintCharts('providerKeypointView')
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
