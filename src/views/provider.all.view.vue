<template>
  <div class="provider-allview">
    <div class="left-top frame-back-box"></div>
    <div class="left-bottom frame-back-box"></div>
    <div class="center-list">
      <ul>
        <li class="item">
          <p class="text"><i>供应商总数</i> <i>需关注供应商</i></p>
          <p class="number">
            <span class="lum-1"><i class="num">120</i><i class="unit">个</i></span>
            <span class="lum-2 active"><i class="num">120</i><i class="unit">个</i></span>
          </p>
        </li>
        <li class="item">
          <p class="text"><i>新签合同额</i> <i>需关注合同</i></p>
          <p class="number">
            <span class="lum-1"><i class="num">638</i><i class="unit">万</i></span>
            <span class="lum-2 active"><i class="num">2</i><i class="unit">个</i></span>
          </p>
        </li>
        <li class="item">
          <p class="text"><i>列账总额</i> <i>需关注列账数</i></p>
          <p class="number">
            <span class="lum-1"><i class="num">4201</i><i class="unit">万</i></span>
            <span class="lum-2 active"><i class="num">264</i><i class="unit">万</i></span>
          </p>
        </li>
        <li class="item">
          <p class="text"><i>已付金额</i> <i>余额</i></p>
          <p class="number">
            <span class="lum-1"><i class="num">837</i><i class="unit">万</i></span>
            <span class="lum-2"><i class="num">269</i><i class="unit">万</i></span>
          </p>
        </li>
      </ul>
    </div>
    <div class="center-map"></div>
    <div class="center-bottom frame-back-box"></div>
    <div class="right-top frame-back-box"></div>
    <div class="right-bottom frame-back-box"></div>
  </div>
</template>

<script>
// import HelloWorld from '../components/allview/userChartLabel.vue'
import userChartLabel from '@/components/allview/userChartLabel.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'providerAllView',
  components: {
    // userChartLabel
  },
  setup() {
    return {}
  }
})
</script>
<style lang="scss" scoped>
.provider-allview {
  position: relative;
  & > div {
    position: absolute;
  }
  .left-top {
    left: 0;
    top: 0;
    width: 455px;
    height: 460px;
  }
  .left-bottom {
    left: 0;
    top: 480px;
    width: 455px;
    height: 460px;
  }
  .right-top {
    right: 0;
    top: 0;
    width: 455px;
    height: 460px;
  }
  .right-bottom {
    right: 0;
    top: 480px;
    width: 455px;
    height: 460px;
  }
  .center-list {
    left: 480px;
    top: 20px;
    width: 900px;
    height: 105px;
    ul {
      display: flex;
      height: 100%;
      .item {
        flex: 1;
        height: 100%;
        background: url('../assets/item_back.jpg') no-repeat;
        background-size: cover;
        .text {
          height: 20px;
          line-height: 20px;
          margin-left: 20px;
          margin-top: 25px;
          margin-bottom: 0;
          font-size: 15px;
          letter-spacing: -2px;
          i {
            font-weight: bold;
            display: inline-block;
            text-shadow: 2px 5px 3px rgba(0, 0, 0, 0.35), 5px 5px 3px rgba(0, 0, 0, 0.705);
          }
          i:nth-child(1) {
            width: 75px;
          }
          i:nth-child(2) {
            margin-left: 15px;
          }
        }
        .number {
          height: 40px;
          line-height: 40px;
          margin-bottom: 0;
          margin-left: 20px;
          .lum-1 {
            display: inline-block;
            width: 75px;
            white-space: nowrap;
          }
          .lum-2 {
            margin-left: 15px;
            display: inline-block;
            cursor: pointer;
          }
          .active {
            position: relative;
            &:hover {
              color: transparent;
              -webkit-background-clip: text;
              background-image: -webkit-linear-gradient(bottom, #17d3ba, #afebf7);
            }
            &:hover::after {
              content: '';
              display: block;
              position: absolute;
              height: 2px;
              width: 100%;
              background-color: #17d3ba;
              left: 0;
              bottom: 8px;
            }
          }
          .num {
            font-size: 28px;
            font-weight: bold;
          }
          .unit {
            margin-left: 3px;
            font-size: 14px;
            font-weight: bold;
          }
        }
      }
    }
  }
  .center-map {
    left: 480px;
    top: 130px;
    width: 900px;
    height: 500px;
  }
  .center-bottom {
    left: 480px;
    top: 640px;
    width: 900px;
    height: 300px;
  }
}
</style>
