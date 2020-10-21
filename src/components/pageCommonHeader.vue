<template>
  <div class="page-header">
    <div class="left-select">
      <a-month-picker @change="handleDateChange" placeholder="选择年月" :locale="zhLocale" :default-value="moment(defDate, dateFmater)">
        <template v-slot:suffixIcon><CaretDownFilled /></template>
      </a-month-picker>
      <a-select v-model:value="cityValue" style="width: 120px" @change="handleCityChange">
        <template v-slot:suffixIcon><CaretDownFilled /></template>
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
        <a-select-option value="disabled" disabled>Disabled</a-select-option>
        <a-select-option value="Yiminghe">yiminghe</a-select-option>
      </a-select>
      <a-select v-model:value="typeValue" style="width: 120px" @change="handleTypeChange">
        <template v-slot:suffixIcon><CaretDownFilled /></template>
        <a-select-option value="1">类型</a-select-option>
        <a-select-option value="2">类型2</a-select-option>
        <a-select-option value="disabled" disabled>类型2</a-select-option>
        <a-select-option value="Yiminghe">类型4</a-select-option>
      </a-select>
    </div>
    <div class="center-title">
      <h1>贵州省电信管会系统-供应商{{ titleText }}情况</h1>
    </div>
    <div class="right-date">
      <i>{{ rightDate }}</i>
      <i>{{ rightTime }}</i>
      <i>{{ rightWeek }}</i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, onMounted, onUnmounted } from 'vue'
import { CaretDownFilled } from '@ant-design/icons-vue'
import { getFormatDate } from '../utils/commFun'
import store from '../store/index'
import moment from 'moment'
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
type dateFmater = 'YYYY/MM' | 'YYYY/MM/DD'
export default defineComponent({
  name: 'pageCommonHeader',
  components: {
    CaretDownFilled
  },
  setup() {
    //时间选择
    const dateValue = ref<Date>(new Date())
    const zhLocale = ref<Record<string, any>>(locale)
    const dateFmater: dateFmater = 'YYYY/MM'
    const curDate = new Date()
    const defDate = curDate.getFullYear() + '/' + (curDate.getMonth() + 1)
    const handleDateChange = (value: string) => {
      console.log(value)
    }

    //城市选择
    const cityValue = ref('')
    const handleCityChange = (value: string) => {
      console.log(value, cityValue.value)
    }
    //类型选择
    const typeValue = ref('1')
    const handleTypeChange = (value: string) => {
      console.log(value)
    }
    //当前时间显示
    const rightDate = ref('')
    const rightTime = ref('')
    const rightWeek = ref('')
    const updateDate = () => {
      rightDate.value = getFormatDate().date
      rightTime.value = getFormatDate().time
      rightWeek.value = getFormatDate().week
    }
    let timer: number
    onMounted(() => {
      timer = window.setInterval(updateDate, 1000)
      console.log(zhLocale)
    })
    onUnmounted(() => {
      window.clearInterval(timer)
    })
    //标题
    type Dictionary<T> = { [key: string]: T }
    const Titles: Dictionary<string> = {
      allview: '整体',
      detailview: '详细',
      keypointview: '重点'
    }
    const currntPage = computed(() => store.state.currntPage)
    const titleText = computed(() => {
      return Titles[currntPage.value]
    })
    return {
      dateValue,
      cityValue,
      typeValue,
      zhLocale,
      dateFmater,
      defDate,
      handleTypeChange,
      handleDateChange,
      handleCityChange,
      moment,
      rightDate,
      rightTime,
      rightWeek,
      titleText
    }
  }
})
</script>
<style lang="scss" scoped>
.page-header {
  height: 85px;
  display: flex;
  .left-select {
    flex: 1;
    display: flex;
    align-items: flex-end;
    padding-left: 50px;
    /deep/ .ant-select {
      margin-left: 20px;
    }
  }
  .center-title {
    width: 45%;
    text-align: center;
    margin-top: 30px;
    h1 {
      color: rgb(0, 183, 255);
      //   color: #4cefff;4cefff
      //   color: #fff;
      //   font-family: Georgia;
      font-size: 40px;
      font-weight: bold;
      animation: text-pop-up-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
  }
  .right-date {
    flex: 1;
    padding-right: 50px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    i {
      font-size: 20px;
      font-weight: bold;
      margin-right: 10px;
    }
  }
  .ant-calendar-picker {
    background-color: #3a5697;
    color: #fff;
  }
  ::v-deep .ant-calendar-picker-input {
    background-color: #3a5697;
    border-color: rgba(0, 0, 0, 0);
    color: #fff;
    font-weight: bold;
  }
  .ant-select ::v-deep .ant-select-selection {
    background-color: #3a5697;
    border-color: rgba(0, 0, 0, 0);
    color: #fff;
    font-weight: bold;
  }
  ::v-deep .ant-select-arrow {
    font-size: 14px;
    color: #6197ef;
  }
  ::v-deep .ant-calendar-picker-icon {
    font-size: 14px;
    color: #6197ef;
  }
  ::v-deep .ant-calendar-picker-clear {
    font-size: 14px;
    color: #6197ef;
  }
}
@keyframes text-pop-up-top {
  0% {
    transform: translateY(0);
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    transform: translateY(-20px);
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #4cefff, 0 2px 0 #4cefff, 0 3px 0 #4cefff, 0 3px 0 #4cefff, 0 4px 0 #4cefff, 0 3px 0 #4cefff, 0 4px 0 #4cefff, 0 4px 0 #4cefff, 0 5px 0 #4cefff,
      5px 10px 9px rgba(0, 0, 0, 0.35), 15px 12px 5px rgba(0, 0, 0, 0.705);
  }
}
</style>
