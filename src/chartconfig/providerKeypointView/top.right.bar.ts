const option = {
  grid: {
    top: '12%',
    left: '1%',
    right: '1%',
    bottom: '8%',
    containLabel: true,
  },
  legend: {
    itemGap: 20,
    right: '20%',
    top: '2%',
    textStyle: {
      color: '#C7EBF9',
      fontSize: 14
    },
    itemWidth: 15,
    itemHeight: 15,
    data: ['法律诉讼', '经营异常', '行政处罚'],
  },
  xAxis: [{
    axisLabel: {
      color: '#398FD1'
    },
    axisLine: {
      lineStyle: {
        color: '#183888',
      }
    },
    axisTick: {
      alignWithLabel: true,
      lineStyle: {
        width: 2,
        color: '#398FD1'
      }
    },
    splitLine: {
      lineStyle: {
        color: '#183888'
      }
    },
    data: ['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月', '10月', '11月', '12月'],
  }],
  yAxis: {
    axisTick: {
      show: false
    },
    axisLabel: {
      textStyle: {
        color: '#398FD1'
      }
    },
    splitLine: {
      lineStyle: {
        color: '#183688'
      }
    },
    axisLine: { //坐标轴轴线相关设置。数学上的x轴
      show: false,
    },
  },
  series: [
    {
      name: '法律诉讼',
      type: 'bar',
      barWidth: 20,
      barGap: '0%',
      color: '#16D4D2',
      itemStyle: {
        normal: {
          barBorderRadius: 3,
        }
      },
      data: [370, 250, 180, 320, 340, 220, 550, 370, 250, 180, 320, 340]
    }, {
      name: '经营异常',
      type: 'bar',
      barWidth: 20,
      color: '#F2DA32',
      itemStyle: {
        normal: {
          barBorderRadius: 3,
        }
      },
      data: [160, 320, 120, 160, 350, 240, 440, 160, 320, 120, 160, 350]
    }, {
      name: '行政处罚',
      type: 'bar',
      barWidth: 20,
      color: '#E85089',
      itemStyle: {
        normal: {
          barBorderRadius: 3,
        }
      },
      data: [160, 320, 120, 160, 350, 240, 440, 160, 320, 120, 160, 350]
    }
  ]
}
export default option
