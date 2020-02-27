<template>
  <div class="chart" id="myChart2">
    <div class="emcs_charts" :id="id"></div>
  </div>
</template>

<script>
import Highcharts from "highcharts";
import data from "./chartoption";

export default {
  name: "highcharts2",
  data() {
    // 将引入的数据写在自己的组件中
    let dataObj = data.bar;
    return {
      id: "chart2",
      dataObj: dataObj
    };
  },
  mounted() {
    // this.initChart();
  },
  methods: {
    initChart() {
      // this.$el.style.width = (this.styles.width || 800) + "px";
      // this.$el.style.height = (this.styles.height || 400) + "px";
      this.chart = new Highcharts.chart(this.id, this.dataObj);
    },
    getchart(datas) {
      this.api.getfchart(datas).then(res => {
        const r = res.data;
        const obj = this.dataObj;
        obj.series[0].data = r;
        this.chart = new Highcharts.chart(this.id, obj);
      });
    }
  }
};
</script>

<style scoped>
