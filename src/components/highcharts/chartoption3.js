module.exports = {
  bar: {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Annual inventory share and revenue'
    },
    subtitle: {
      text: 'Click the slices to view versions. Source: <a href="http://127.0.0.1:8080/#/homes/two" target="_blank">http://127.0.0.1:8080/#/homes/two</a>'
    },
    xAxis: {
      categories: ['一月'],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: '收益(元)'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} 元</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: '前后油封',
      data: [480]

    }, {
      name: '连杆',
      data: [4200]

    }, {
      name: '活塞',
      data: [1600]

    }, {
      name: '曲轴',
      data: [54300]

    }, {
      name: '轴瓦',
      data: [2830]

    }, {
      name: '活塞销',
      data: [1200]

    }, {
      name: '活塞环',
      data: [4800]

    }, {
      name: '飞轮',
      data: [750]

    }, {
      name: '缸体',
      data: [60000]

    }, {
      name: '油底壳',
      data: [950]

    }]
  }
}