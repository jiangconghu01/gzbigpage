const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    textStyle: {
      color: '#C7EBF9',
      fontSize: 14
    },
    itemWidth: 15,
    itemHeight: 15,
    data: ['实缴资本', '实收资本','资本差异']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis:{
      axisLabel: {
        interval:0, //强制显示文字
        color: '#398FD1'
      },
      axisLine: {
        lineStyle: {
          color: '#183888'
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
      data: ['菜鸟网络', '长亭科技', '字节跳动', '字节跳动', '字节跳动', '字节跳动', '字节跳动']
    },
  yAxis: [
    {
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
      axisLine: {
        //坐标轴轴线相关设置。数学上的x轴
        show: false
      }
    }
  ],
  color: ['#58ABF1', '#F4962F','#F2DA32'],
  series: [
    {
      name: '实缴资本',
      type: 'bar',
      barWidth: '25%',
      stack: '广告',
      data: [4.2, 9, 6.5, 2.4, 4.3, 4.1, 7.5]
    },
    {
      name: '实收资本',
      type: 'bar',
      stack: '广告',
      data: [2, 0, 3, 1, 0, 4, 3]
    },
    {
      name: '资本差异',
      type: 'bar',
      stack: '广告',
      data: [2, 0, 3, 1, 0, 4, 3]
    }
  ]
}
export default option
