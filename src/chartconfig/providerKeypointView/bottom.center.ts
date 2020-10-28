const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    textStyle: {
      color: '#C7EBF9',
      fontSize: 14
    },
    itemWidth: 15,
    itemHeight: 15,
    data: ['公开招标', '公开竞争性谈判', '公开比选', '单一来源采购(公示)', '单一来源采购(非公示)']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
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
      data: ['菜鸟网络', '长亭科技', '字节跳动', '字节跳动', '字节跳动', '字节跳动']
    }
  ],
  yAxis: [
    {
      name: '单位：个',
      axisTick: {
        lineStyle: {
            width: 2,
            color: '#398FD1'
        }
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
        lineStyle: {
          color: '#C9EFFA',
        }
      },
    }
  ],
  color: ['#16D4D2', '#F2DA32', '#58ABF1', '#6A50FF', '#D55CE7'],
  series: [
    {
      name: '公开招标',
      type: 'bar',
      barWidth: '25%',
      stack: '广告',
      label: {
        normal: {
          show: true,
          position: 'inside',
          formatter: function(p:any){
            console.log(p)
            return p.value >0 ? p.value : ''
          },
          textStyle: {
            align: 'center',
            baseline: 'middle',
            fontSize: 14,
            fontWeight: '400',
          }
        },
      },
      data: [5, 3, 6, 5, 4, 2]
    },
    {
      name: '公开竞争性谈判',
      type: 'bar',
      stack: '广告',
      label: {
        normal: {
          show: true,
          position: 'inside',
          formatter: function(p:any){
            return p.value >0 ? p.value : ''
          },
          textStyle: {
            align: 'center',
            baseline: 'middle',
            fontSize: 14,
            fontWeight: '400',
          }
        },
      },
      data: [2, 0, 0, 0, 5, 0]
    },
    {
      name: '公开比选',
      type: 'bar',
      stack: '广告',
      label: {
        normal: {
          show: true,
          position: 'inside',
          formatter: function(p:any){
            return p.value >0 ? p.value : ''
          },
          textStyle: {
            align: 'center',
            baseline: 'middle',
            fontSize: 14,
            fontWeight: '400',
          }
        },
      },
      data: [1, 0, 0, 4, 0, 0]
    },
    {
      name: '单一来源采购(公示)',
      type: 'bar',
      stack: '广告',
      label: {
        normal: {
          show: true,
          position: 'inside',
          formatter: function(p:any){
            return p.value >0 ? p.value : ''
          },
          textStyle: {
            align: 'center',
            baseline: 'middle',
            fontSize: 14,
            fontWeight: '400',
          }
        },
      },
      data: [0, 4, 0, 0, 0, 0]
    },
    {
      name: '单一来源采购(非公示)',
      type: 'bar',
      stack: '广告',
      label: {
        normal: {
          show: true,
          position: 'inside',
          formatter: function(p:any){
            return p.value >0 ? p.value : ''
          },
          textStyle: {
            align: 'center',
            baseline: 'middle',
            fontSize: 14,
            fontWeight: '400',
          }
        },
      },
      data: [0, 0, 3, 2, 0, 4]
    },
  ]
}
export default option