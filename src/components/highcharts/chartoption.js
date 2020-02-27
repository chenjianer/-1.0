module.exports = {
  bar: {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Annual inventory share and revenue'
    },
    subtitle: {
      text: 'Click the slices to view versions. Source: <a href="http://127.0.0.1:8080/#/homes/two" target="_blank">http://127.0.0.1:8080/#/homes/two</a>'
    },
    plotOptions: {
    },

    tooltip: {
    },

    series: [
      {
        name: "库存占比",
        colorByPoint: true,
        data: [
          {
            name: "空库",
            y: 4
          },
          {
            name: "前后油封",
            y: 10.57
          },
          {
            name: "连杆",
            y: 15.23
          },
          {
            name: "活塞",
            y: 10.68
          },
          {
            name: "曲轴",
            y: 5.78
          },
          {
            name: "轴瓦",
            y: 34.54
          },
          {
            name: "活塞销",
            y: 10.56
          },
          {
            name: "活塞环",
            y: 36.55
          },
          {
            name: "飞轮",
            y: 2.58
          },
          {
            name: "连杆螺栓",
            y: 10.16
          },
          {
            name: "缸体",
            y: 2.71
          },
          {
            name: "油底壳",
            y: 4.78
          }
        ]
      }
    ]
  }
}