import echarts from 'echarts'
const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: '#96B2CC'
      },
    },
  },
  grid: {
    top: '15%',
    left: '5%',
    right: '5%',
    bottom: '15%',
    // containLabel: true
  },
  xAxis: {
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
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],

  },

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
  series: [{
    name: '注册总量',
    type: 'line',
    // smooth: true, //是否平滑
    showAllSymbol: true,
    // symbol: 'image://./static/images/guang-circle.png',
    symbol: 'circle',
    symbolSize: 25,
    lineStyle: {
      normal: {
        color: "#6c50f3",
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowBlur: 0,
        shadowOffsetY: 5,
        shadowOffsetX: 5,
      },
    },
    itemStyle: {
      color: "#6c50f3",
      borderColor: "#fff",
      borderWidth: 3,
      shadowColor: 'rgba(0, 0, 0, .3)',
      shadowBlur: 0,
      shadowOffsetY: 2,
      shadowOffsetX: 2,
    },
    tooltip: {
      show: false
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(150,135,62)'
        },
        {
          offset: 1,
          color: 'rgba(24,24,77)'
        }
        ], false),
        shadowColor: 'rgba(108,80,243, 0.9)',
        shadowBlur: 20
      }
    },
    data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02,]
  },
  ]
}
export default option
