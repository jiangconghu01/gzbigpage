const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    right: '20%',
    top: '2%',
    itemWidth: 15,
    itemHeight: 15,
    textStyle: {
      fontSize: 14,
      color: '#BFE4F2'
    },
    data: ['挂账金额', '支付金额', '余额']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    name: '单位：万元',
    position: 'top',
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#388DD3'
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: '#C9EFFA'
      }
    },
    splitLine: {
      lineStyle: {
        color: '#163485'
      }
    }
  },
  yAxis: {
    type: 'category',
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#BFE3F2',
      clickable: true
    },
    axisLine: {
      lineStyle: {
        color: '#183888'
      }
    },
    data: ['公司甲', '公司乙', '公司丙', '公司丁']
  },
  series: [
    {
      name: '挂账金额',
      type: 'bar',
      barWidth: '20%',
      data: [732.45, 896.23, 628.06, 500.54],
      itemStyle: {
        color: '#16D4D2'
      },
      label: {
        show: true,
        position: 'right',
        color: '#BFE3F2',
        fontSize: 14,
        offset: [10, 0]
      }
    },
    {
      name: '支付金额',
      type: 'bar',
      barWidth: '20%',
      data: [567.15, 500.86, 754.53, 313.23],
      itemStyle: {
        color: '#F2DA32'
      },
      label: {
        show: true,
        position: 'right',
        color: '#BFE3F2',
        fontSize: 14,
        offset: [10, 0]
      }
    },
    {
      name: '余额',
      type: 'bar',
      barWidth: '20%',
      data: [682.15, 953.86, 754.53, 318.23],
      itemStyle: {
        color: '#58ABF1'
      },
      label: {
        show: true,
        position: 'right',
        color: '#58ABF1',
        fontSize: 14,
        offset: [10, 0]
      }
    }
  ]
}
export default option
