<template>
  <div class="chart" id="myChart">
    <div class="emcs_charts" :id="id"></div>
  </div>
</template>

<script>
  import $ from "jquery";
  import Highcharts from "highcharts";
  import data from './chart'
  import HighchartsMore from 'highcharts/highcharts-more';
  import HighchartsDrilldown from 'highcharts/modules/drilldown';
  import Highcharts3D from 'highcharts/highcharts-3d';
  import Highmaps from 'highcharts/modules/map';

  HighchartsMore(Highcharts)
  HighchartsDrilldown(Highcharts);
  Highcharts3D(Highcharts);
  Highmaps(Highcharts);

  export default {
    data() {
      // 将引入的数据写在自己的组件中
      let dataObj = data.bar
      return {
        id: 'chart',
        dataObj: dataObj
      }
    },
    mounted() {
      this.initChart();
    },
    methods: {
      initChart() {
        this.api.uChart1().then(res => {
          var obj = this.dataObj;
          if(res.data.code==='000'){
            obj.series[0].data[0].y = null;
          }else{
            obj.series[0].data[0].y = res.data[0]["SUM(price*(warehouse-outbound))"];
          }
          this.chart = new Highcharts.chart(this.id, obj);
        });
        this.api.uChart2().then(res => {
          var obj = this.dataObj;
          if(res.data.code==='000'){
            obj.series[0].data[1].y = null;
          }else{
            obj.series[0].data[1].y = res.data[0]["SUM(price*(warehouse-outbound))"];
          }
          this.chart = new Highcharts.chart(this.id, obj);
        });
        this.api.uChart3().then(res => {
          var obj = this.dataObj;
          if(res.data.code==='000'){
            obj.series[0].data[2].y = null;
          }else{
            obj.series[0].data[2].y = res.data[0]["SUM(price*(warehouse-outbound))"];
          }
          this.chart = new Highcharts.chart(this.id, obj);
        });
        this.api.uChart4().then(res => {
          var obj = this.dataObj;
          if(res.data.code==='000'){
            obj.series[0].data[3].y = null;
          }else{
            obj.series[0].data[3].y = res.data[0]["SUM(price*(warehouse-outbound))"];
          }
          this.chart = new Highcharts.chart(this.id, obj);
        });
        this.api.uChart5().then(res => {
          var obj = this.dataObj;
          if(res.data.code==='000'){
            obj.series[0].data[4].y = null;
          }else{
            obj.series[0].data[4].y = res.data[0]["SUM(price*(warehouse-outbound))"];
          }
          this.chart = new Highcharts.chart(this.id, obj);
        });
        this.api.uChart6().then(res => {
          var obj = this.dataObj;
          if(res.data.code==='000'){
            obj.series[0].data[5].y = null;
          }else{
            obj.series[0].data[5].y = res.data[0]["SUM(price*(warehouse-outbound))"];
          }
          this.chart = new Highcharts.chart(this.id, obj);
        });
        this.api.uChart7().then(res => {
          var obj = this.dataObj;
          if(res.data.code==='000'){
            obj.series[0].data[6].y = null;
          }else{
            obj.series[0].data[6].y = res.data[0]["SUM(price*(warehouse-outbound))"];
          }
          this.chart = new Highcharts.chart(this.id, obj);
        });
        this.api.uChart8().then(res=>{
          var obj = this.dataObj;
          if(res.data.code==='000'){
            obj.series[0].data[7].y = null;
          }else{
            obj.series[0].data[7].y = res.data[0]["SUM(price*(warehouse-outbound))"];
          }
          this.chart = new Highcharts.chart(this.id, obj);
        });
        this.api.uChart9().then(res=>{
          var obj = this.dataObj;
          if(res.data.code==='000'){
            obj.series[0].data[8].y = null;
          }else{
            obj.series[0].data[8].y = res.data[0]["SUM(price*(warehouse-outbound))"];
          }
          this.chart = new Highcharts.chart(this.id, obj);
        });
        this.api.uChart10().then(res=>{
          var obj = this.dataObj;
          if(res.data.code==='000'){
            obj.series[0].data[9].y = null;
          }else{
            obj.series[0].data[9].y = res.data[0]["SUM(price*(warehouse-outbound))"];
          }
          this.chart = new Highcharts.chart(this.id, obj);
        });
        this.api.uChart11().then(res=>{
          var obj = this.dataObj;
          if(res.data.code==='000'){
            obj.series[0].data[10].y = null;
          }else{
            obj.series[0].data[10].y = res.data[0]["SUM(price*(warehouse-outbound))"];
          }
          this.chart = new Highcharts.chart(this.id, obj);
        });
        this.api.uChart12().then(res=>{
          var obj = this.dataObj;
          if(res.data.code==='000'){
            obj.series[0].data[11].y = null;
          }else{
            obj.series[0].data[11].y = res.data[0]["SUM(price*(warehouse-outbound))"];
          }
          this.chart = new Highcharts.chart(this.id, obj);
        });
      }
    }
  }
</script>

<style scoped>
