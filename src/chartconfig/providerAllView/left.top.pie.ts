const option = {
  title: {
    text: '供应商\n业务类型',
    left: 'center',
    top: '45%',
    textStyle: {
      fontSize: 30,
      color: '#fff',
      lineHeight: 32,
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontFamily: 'PingFangSC-Regular,PingFang SC;'
    }
  },
  color: ['#F2DA32', '#16D4D2', '#AD6BE7', '#58ABF1'],
  tooltip: {
    trigger: 'item',
    textStyle: {
      fontSize: 14
    },
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  series: [
    {
      name: '统计',
      type: 'pie',
      radius: [70, 150],
      center: ['50%', '50%'],
      roseType: 'radius',
      label: {
        show: true,
        formatter: '{d}%'
      },
      emphasis: {
        label: {
          show: true
        }
      },
      data: [
        {
          value: 47.59,
          name: 'rose1'
        },
        {
          value: 32.41,
          name: 'rose2'
        },
        {
          value: 20,
          name: 'rose3'
        }
      ]
    }
  ]
}
export default option
