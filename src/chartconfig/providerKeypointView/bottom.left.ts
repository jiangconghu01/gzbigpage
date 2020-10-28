const option = {
  title: {
    text: '供应商业务类型',
    left: 'center',
    top: '49%',
    textStyle: {
      fontSize: 13,
      color: '#fff',
      fontStyle: 'normal',
      fontWeight: '400',
      fontFamily: 'PingFangSC-Regular,PingFang SC;'
    }
  },
  color: ['#D55CE7','#6B51FE','#E85089','#AD6BE7','#F5952F','#58ABF1','#F2DA32','#16D4D2'],
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  series: [
    {
      name: '统计',
      type: 'pie',
      radius: [70, 150],
      center: ['50%', '50%'],
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
          value: 4.37,
          name: 'rose1'
        },
        {
          value: 1.46,
          name: 'rose2'
        },
        {
          value: 12.5,
          name: 'rose3'
        },
        {
          value: 14.58,
          name: 'rose4'
        },
        {
          value: 15.00,
          name: 'rose5'
        },
        {
          value: 19.38,
          name: 'rose6'
        },
        {
          value: 16.67,
          name: 'rose7'
        },
        {
          value: 16.04,
          name: 'rose8'
        }
      ]
    },
  ]
}
export default option
