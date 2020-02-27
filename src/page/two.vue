<template>
  <div>
    <el-row :gutter="10">
      <!--图形化数据-->
      <el-col :span="12">
        <div class="grid-content">
          <div class="charts" id="myChart">
            <x-chart></x-chart>
          </div>
        </div>
      </el-col>
      <!--新闻中心-->
      <el-col :span="12">
        <div class="grid-content news">
          <news :opt="news" @fatherMethod="load()"></news>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <!--添加用户-->
      <el-col :span="24">
        <div class="grid-content" style="height:550px">
          <adduser></adduser>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <!-- 操作人操作 -->
      <el-col :span="24">
        <div class="grid-content" style="height:550px">
          <timeLine></timeLine>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 导入chart.vue子组件
import XChart from "../components/highcharts/highcharts";
import Vue from "vue";
import date from "@/utils/date.js";
import news from "../components/news";
import adduser from "../components/adduser";
import timeLine from "../components/timeLine";

export default {
  name: "two",
  data() {
    return {
      news: []
    };
  },
  computed: {},
  mounted() {this.load()},
  methods: {
    load() {
      // 获取新闻数据
      this.api.news().then(res => {
        if (res.data.code === "111") {
          let ss = res.data.res;
          // 时间格式转换
          for (let i = 0; i < ss.length; i++) {
            ss[i].date = date(ss[i].date, "yyyy-MM-dd HH:mm:ss");
          }
          this.news = ss;
        }
      });
    }
  },

  components: {
    XChart,
    news,
    adduser,
    timeLine
  }
};
</script>

<style scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  height: 400px;
}

.news {
  width: 100%;
  height: 400px;
  background: #fff;
}
</style>
