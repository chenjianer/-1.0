<template>
  <div class="chart" id="myChart3">
    <div class="emcs_charts" :id="id"></div>
  </div>
</template>

<script>
import Highcharts from "highcharts";
import data from "./chartoption3";

export default {
  name: "highcharts3",
  data() {
    // 将引入的数据写在自己的组件中
    let dataObj = data.bar;
    return {
      id: "chart3",
      dataObj: dataObj
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      // this.$el.style.width = (this.styles.width || 800) + "px";
      // this.$el.style.height = (this.styles.height || 400) + "px";
      this.chart = new Highcharts.chart(this.id, this.dataObj);
    },
    /**
     * datas: 每条news的cont数
     * datas2: news.vue 选项的月份数
     */
    getchart(datas, datas2) {
      var cont = 0;
      var otherObj = this.dataObj;
      this.api.getchart(datas, datas2).then(res => {
        for (let i = 0; i < res.data.length; i++) {
          var obj, yue;
          if (res.data.length === 10) {
            obj = `[{name:'${res.data[0].name}',data:[${res.data[0].data}]},{name:'${res.data[1].name}',data:[${res.data[1].data}]},{name:'${res.data[2].name}',data:[${res.data[2].data}]},{name:'${res.data[3].name}',data:[${res.data[3].data}]},{name:'${res.data[4].name}',data:[${res.data[4].data}]},{name:'${res.data[5].name}',data:[${res.data[5].data}]},{name:'${res.data[6].name}',data:[${res.data[6].data}]},{name:'${res.data[7].name}',data:[${res.data[7].data}]},{name:'${res.data[8].name}',data:[${res.data[8].data}]},{name:'${res.data[9].name}',data:[${res.data[9].data}]}]`;
            yue = `['${res.data[0].categories}']`;
          } else if (res.data.length === 21) {
            obj = `[{name:'${res.data[0].name}',data:[${res.data[0].data}]},{name:'${res.data[1].name}',data:[${res.data[1].data}]},{name:'${res.data[2].name}',data:[${res.data[2].data}]},{name:'${res.data[3].name}',data:[${res.data[3].data}]},{name:'${res.data[4].name}',data:[${res.data[4].data}]},{name:'${res.data[5].name}',data:[${res.data[5].data}]},{name:'${res.data[6].name}',data:[${res.data[6].data}]},{name:'${res.data[7].name}',data:[${res.data[7].data}]},{name:'${res.data[8].name}',data:[${res.data[8].data}]},{name:'${res.data[9].name}',data:[${res.data[9].data}]},{name:'${res.data[10].name}',data:[${res.data[10].data}]},{name:'${res.data[11].name}',data:[${res.data[11].data}]},{name:'${res.data[12].name}',data:[${res.data[12].data}]},{name:'${res.data[13].name}',data:[${res.data[13].data}]},{name:'${res.data[14].name}',data:[${res.data[14].data}]},{name:'${res.data[15].name}',data:[${res.data[15].data}]},{name:'${res.data[16].name}',data:[${res.data[16].data}]},{name:'${res.data[17].name}',data:[${res.data[17].data}]},{name:'${res.data[18].name}',data:[${res.data[18].data}]},{name:'${res.data[19].name}',data:[${res.data[19].data}]},{name:'${res.data[20].name}',data:[${res.data[20].data}]}]`;
            yue = `['${res.data[0].categories}']`;
          } else if (res.data.length === 5) {
            obj = `[{name:'${res.data[0].name}',data:[${res.data[0].data}]},{name:'${res.data[1].name}',data:[${res.data[1].data}]},{name:'${res.data[2].name}',data:[${res.data[2].data}]},{name:'${res.data[3].name}',data:[${res.data[3].data}]},{name:'${res.data[4].name}',data:[${res.data[4].data}]}]`;
            yue = `['${res.data[0].categories}']`;
          } else if (res.data.length === 7) {
            obj = `[{name:'${res.data[0].name}',data:[${res.data[0].data}]},{name:'${res.data[1].name}',data:[${res.data[1].data}]},{name:'${res.data[2].name}',data:[${res.data[2].data}]},{name:'${res.data[3].name}',data:[${res.data[3].data}]},{name:'${res.data[4].name}',data:[${res.data[4].data}]},{name:'${res.data[5].name}',data:[${res.data[5].data}]},{name:'${res.data[6].name}',data:[${res.data[6].data}]}]`;
            yue = `['${res.data[0].categories}']`;
          } else if (res.data.length === 8) {
            obj = `[{name:'${res.data[0].name}',data:[${res.data[0].data}]},{name:'${res.data[1].name}',data:[${res.data[1].data}]},{name:'${res.data[2].name}',data:[${res.data[2].data}]},{name:'${res.data[3].name}',data:[${res.data[3].data}]},{name:'${res.data[4].name}',data:[${res.data[4].data}]},{name:'${res.data[5].name}',data:[${res.data[5].data}]},{name:'${res.data[6].name}',data:[${res.data[6].data}]},{name:'${res.data[7].name}',data:[${res.data[7].data}]}]`;
            yue = `['${res.data[0].categories}']`;
          } else if (res.data.length === 12) {
            obj = `[{name:'${res.data[0].name}',data:[${res.data[0].data}]},{name:'${res.data[1].name}',data:[${res.data[1].data}]},{name:'${res.data[2].name}',data:[${res.data[2].data}]},{name:'${res.data[3].name}',data:[${res.data[3].data}]},{name:'${res.data[4].name}',data:[${res.data[4].data}]},{name:'${res.data[5].name}',data:[${res.data[5].data}]},{name:'${res.data[6].name}',data:[${res.data[6].data}]},{name:'${res.data[7].name}',data:[${res.data[7].data}]},{name:'${res.data[8].name}',data:[${res.data[8].data}]},{name:'${res.data[9].name}',data:[${res.data[9].data}]},{name:'${res.data[10].name}',data:[${res.data[10].data}]},{name:'${res.data[11].name}',data:[${res.data[11].data}]}]`;
            yue = `['${res.data[0].categories}']`;
          } else if (res.data.length === 6) {
            obj = `[{name:'${res.data[0].name}',data:[${res.data[0].data}]},{name:'${res.data[1].name}',data:[${res.data[1].data}]},{name:'${res.data[2].name}',data:[${res.data[2].data}]},{name:'${res.data[3].name}',data:[${res.data[3].data}]},{name:'${res.data[4].name}',data:[${res.data[4].data}]},{name:'${res.data[5].name}',data:[${res.data[5].data}]}]`;
            yue = `['${res.data[0].categories}']`;
          } else if (res.data.length === 16) {
            obj = `[{name:'${res.data[0].name}',data:[${res.data[0].data}]},{name:'${res.data[1].name}',data:[${res.data[1].data}]},{name:'${res.data[2].name}',data:[${res.data[2].data}]},{name:'${res.data[3].name}',data:[${res.data[3].data}]},{name:'${res.data[4].name}',data:[${res.data[4].data}]},{name:'${res.data[5].name}',data:[${res.data[5].data}]},{name:'${res.data[6].name}',data:[${res.data[6].data}]},{name:'${res.data[7].name}',data:[${res.data[7].data}]},{name:'${res.data[8].name}',data:[${res.data[8].data}]},{name:'${res.data[9].name}',data:[${res.data[9].data}]},{name:'${res.data[10].name}',data:[${res.data[10].data}]},{name:'${res.data[11].name}',data:[${res.data[11].data}]},{name:'${res.data[12].name}',data:[${res.data[12].data}]},{name:'${res.data[13].name}',data:[${res.data[13].data}]},{name:'${res.data[14].name}',data:[${res.data[14].data}]},{name:'${res.data[15].name}',data:[${res.data[15].data}]}]`;
            yue = `['${res.data[0].categories}']`;
          } else if (res.data.length === 19) {
            obj = `[{name:'${res.data[0].name}',data:[${res.data[0].data}]},{name:'${res.data[1].name}',data:[${res.data[1].data}]},{name:'${res.data[2].name}',data:[${res.data[2].data}]},{name:'${res.data[3].name}',data:[${res.data[3].data}]},{name:'${res.data[4].name}',data:[${res.data[4].data}]},{name:'${res.data[5].name}',data:[${res.data[5].data}]},{name:'${res.data[6].name}',data:[${res.data[6].data}]},{name:'${res.data[7].name}',data:[${res.data[7].data}]},{name:'${res.data[8].name}',data:[${res.data[8].data}]},{name:'${res.data[9].name}',data:[${res.data[9].data}]},{name:'${res.data[10].name}',data:[${res.data[10].data}]},{name:'${res.data[11].name}',data:[${res.data[11].data}]},{name:'${res.data[12].name}',data:[${res.data[12].data}]},{name:'${res.data[13].name}',data:[${res.data[13].data}]},{name:'${res.data[14].name}',data:[${res.data[14].data}]},{name:'${res.data[15].name}',data:[${res.data[15].data}]},{name:'${res.data[16].name}',data:[${res.data[16].data}]},{name:'${res.data[17].name}',data:[${res.data[17].data}]},{name:'${res.data[18].name}',data:[${res.data[18].data}]}]`;
            yue = `['${res.data[0].categories}']`;
          }
          cont++;
          if (cont == res.data.length) {
            /**功能强大的 eval */
            otherObj.xAxis.categories = eval(yue);
            otherObj.series = eval(obj);
            this.chart = new Highcharts.chart(this.id, otherObj);
          }
        }
      });
    },
    choose(datas1, datas2) {
      this.getchart(datas1, datas2);
    }
  }
};
</script>

<style scoped>
