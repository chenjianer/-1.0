module.exports = {
  bar: {
    chart: {
      type: 'column'
    },
    title: {
      text: `${new Date().getFullYear()}-${new Date().getFullYear()+1} 盈利报表`
    },
    subtitle: {
      text: '数据来源于：http://127.0.0.1:8080/#/homes/two'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: '利润'
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}'
        }
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.1f}</b> yuan<br/>'
    },
    series: [{
      name: '利润',
      colorByPoint: true,
      data: [{
        name: '曲柄连杆机构',
        y: 646660,
        drilldown: '曲柄连杆机构'
      }, {
        name: '配气机构',
        y: 596000,
        drilldown: '配气机构'
      }, {
        name: '冷却系统',
        y: 314200,
        drilldown: '冷却系统'
      }, {
        name: '润滑系统',
        y: 443200,
        drilldown: '润滑系统'
      }, {
        name: '启动系统',
        y: 221000,
        drilldown: '启动系统'
      }, {
        name: '供油系统',
        y: 532000,
        drilldown: '供油系统'
      }, {
        name: '点火系统',
        y: 426800,
        drilldown: '点火系统'
      }, {
        name: '行驶系统',
        y: 545000,
        drilldown: '行驶系统'
      }, {
        name: '转向系统',
        y: 343200,
        drilldown: '转向系统'
      }, {
        name: '制动系统',
        y: 544220,
        drilldown: '制动系统'
      }, {
        name: '传动系统',
        y: 593200,
        drilldown: '传动系统'
      }, {
        name: '照明舒适系统',
        y: 593200,
        drilldown: '传动系统'
      }]
    }],
    drilldown: {
      series: [{
        name: '曲柄连杆机构',
        id: '曲柄连杆机构',
        data: [
          [
            '一月',
            60000
          ],
          [
            '二月',
            40000
          ],
          [
            '三月',
            59000
          ],
          [
            '四月',
            65000
          ],
          [
            '五月',
            59500
          ],
          [
            '六月',
            85000
          ],
          [
            '七月',
            55000
          ],
          [
            '八月',
            30000
          ],
          [
            '九月',
            76000
          ],
          [
            '十月',
            24000
          ],
          [
            '十一月',
            65000
          ],
          [
            '十二月',
            38000
          ]
        ]
      }, {
        name: 'Chrome',
        id: 'Chrome',
        data: [
          [
            'v40.0',
            5
          ],
          [
            'v41.0',
            4.32
          ],
          [
            'v42.0',
            3.68
          ],
          [
            'v39.0',
            2.96
          ],
          [
            'v36.0',
            2.53
          ],
          [
            'v43.0',
            1.45
          ],
          [
            'v31.0',
            1.24
          ],
          [
            'v35.0',
            0.85
          ],
          [
            'v38.0',
            0.6
          ],
          [
            'v32.0',
            0.55
          ],
          [
            'v37.0',
            0.38
          ],
          [
            'v33.0',
            0.19
          ],
          [
            'v34.0',
            0.14
          ],
          [
            'v30.0',
            0.14
          ]
        ]
      }, {
        name: 'Firefox',
        id: 'Firefox',
        data: [
          [
            'v35',
            2.76
          ],
          [
            'v36',
            2.32
          ],
          [
            'v37',
            2.31
          ],
          [
            'v34',
            1.27
          ],
          [
            'v38',
            1.02
          ],
          [
            'v31',
            0.33
          ],
          [
            'v33',
            0.22
          ],
          [
            'v32',
            0.15
          ]
        ]
      }, {
        name: 'Safari',
        id: 'Safari',
        data: [
          [
            'v8.0',
            2.56
          ],
          [
            'v7.1',
            0.77
          ],
          [
            'v5.1',
            0.42
          ],
          [
            'v5.0',
            0.3
          ],
          [
            'v6.1',
            0.29
          ],
          [
            'v7.0',
            0.26
          ],
          [
            'v6.2',
            0.17
          ]
        ]
      }, {
        name: 'Opera',
        id: 'Opera',
        data: [
          [
            'v12.x',
            0.34
          ],
          [
            'v28',
            0.24
          ],
          [
            'v27',
            0.17
          ],
          [
            'v29',
            0.16
          ]
        ]
      }]
    }
  }

}
