<template>
  <div class="news">
    <el-table
      v-loading.fullscreen.lock="fullscreenLoading"
      highlight-current-row
      @row-click="xiangqing"
      :data="opt"
      height="400"
      style="width: 100%;"
      stripe
    >
      <el-table-column fixd prop="date" label="时间"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column show-overflow-tooltip prop="jian" label="简介"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button-group>
            <el-button icon="el-icon-edit" size="small" @click.stop="changes(scope.row)"></el-button>
            <el-button type="danger" icon="el-icon-refresh" size="small"></el-button>
            <!-- @click.stop="changes2(scope.row)" -->
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="news.title" :visible.sync="centerDialogVisible" center>
      <el-row>
        <el-col :span="14">
          <div class="sg">
            来源：
            <a :href="news.url" target="_blank">{{ news.lai }}</a>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="sg">发布时间：{{ news.date }}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div class="sg">{{ news.jian }}</div>
        </el-col>
      </el-row>
      <hr />
      <el-row>
        <!--图形化数据-->
        <el-col :span="24">
          <div class="grid-content">
            <div class="charts" id="myChart2">
              <x-chart ref="firstchart"></x-chart>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" style="margin:10px 0;text-align:center">
          <el-form ref="form" :model="form" label-width="100px" :inline="true" size="mini">
            <el-form-item>
              <el-select v-model="form.opt" placeholder="请选择查询月份">
                <el-option label="一月" value="1">
                  <span style="float: left">一月</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">January</span>
                </el-option>
                <el-option label="二月" value="2">
                  <span style="float: left">二月</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">February</span>
                </el-option>
                <el-option label="三月" value="3">
                  <span style="float: left">三月</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">March</span>
                </el-option>
                <el-option label="四月" value="4">
                  <span style="float: left">四月</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">April</span>
                </el-option>
                <el-option label="五月" value="5">
                  <span style="float: left">五月</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">May</span>
                </el-option>
                <el-option label="六月" value="6">
                  <span style="float: left">六月</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">June</span>
                </el-option>
                <el-option label="七月" value="7">
                  <span style="float: left">七月</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">July</span>
                </el-option>
                <el-option label="八月" value="8">
                  <span style="float: left">八月</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">August</span>
                </el-option>
                <el-option label="九月" value="9">
                  <span style="float: left">九月</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">September</span>
                </el-option>
                <el-option label="十月" value="10">
                  <span style="float: left">十月</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">October</span>
                </el-option>
                <el-option label="十一月" value="11">
                  <span style="float: left">十一月</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">November</span>
                </el-option>
                <el-option label="十二月" value="12">
                  <span style="float: left">十二月</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">December</span>
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <!--图形化数据-->
        <el-col :span="24">
          <div class="grid-content">
            <div class="charts" id="myChart3">
              <a-chart ref="mychild"></a-chart>
            </div>
          </div>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>

    <!-- change -->
    <el-dialog title="编辑信息" :visible.sync="dialogVisible" width="40%">
      <el-form :model="change" status-icon :rules="rules" ref="change" label-width="70px">
        <el-form-item label="标题" prop="title">
          <el-input type="text" v-model="change.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="简介" prop="jian">
          <el-input type="text" v-model="change.jian" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="日期" prop="date">
          <el-date-picker
            v-model="change.date"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('change')">确定</el-button>
        <!--  -->
        <el-tooltip class="item" effect="dark" content="修改库存占比" placement="right">
          <el-button type="danger" @click="editperdata(change.id)">修改数据</el-button>
        </el-tooltip>
      </span>
    </el-dialog>

    <!-- editperdata -->
    <el-dialog title="库存占比编辑" :visible.sync="dialogVisible2" width="40%">
      <hr style="margin-bottom:20px" />
      <el-form ref="editperdata" label-width="120px">
        <el-form-item label="当前id" prop="title"><span style="font-weight:bold">:</span>
          <el-input
            type="text"
            v-model="io"
            autocomplete="off"
            :disabled="true"
            style="width:250px;margin-left:5px"
            size="small"
          ></el-input>
        </el-form-item>
        <el-form-item v-for="(item,index) in arr" :label="item.name" :key="item.name"><span style="font-weight:bold">:</span>
          <el-input
            type="text"
            v-model="datas[index]"
            autocomplete="off"
            style="width:250px;margin-left:5px"
            size="small"
            placeholder="请如实填写"
          ></el-input>
          <span style="margin-left:10px">%</span>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="sure(io)">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// 导入highcharts2.vue子组件
import XChart from "./highcharts/highcharts2";
import AChart from "./highcharts/highcharts3";
export default {
  name: "news",
  options3: "",
  props: {
    opt: [Array]
  },
  data() {
    return {
      centerDialogVisible: false,
      news: {},
      input1: "",
      input2: "",
      input3: "",
      select: "",
      form: {
        opt: ""
      },
      dialogVisible: false,
      dialogVisible2: false,
      fullscreenLoading: false,
      change: {
        title: "",
        jian: "",
        date: "",
        id: ""
      },
      arr: "",
      datas: {},
      io: "",
      rules: {
        title: [
          {
            required: true,
            trigger: "blur",
            message: "标题不能为空"
          }
        ],
        jian: [
          {
            required: true,
            trigger: "blur",
            message: "简介不能为空"
          }
        ],
        date: [
          {
            required: true,
            trigger: "blur",
            message: "日期不能为空"
          }
        ]
      }
    };
  },
  methods: {
    xiangqing(row) {
      this.centerDialogVisible = true;
      this.news = row;
      /* 注意此处需要延时，由于 ref 在未点击的时候是不存在的 */
      setTimeout(() => {
        this.$refs.firstchart.getchart(this.news.cont);
      });
      setTimeout(() => {
        this.$refs.mychild.getchart(this.news.cont, 1);
      });
    },
    onSubmit() {
      this.$refs.mychild.choose(this.news.cont, this.form.opt);
    },
    changes(row) {
      this.dialogVisible = true;
      this.change.title = row.title;
      this.change.jian = row.jian;
      this.change.id = row.id;
    },
    openFullScreen1() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 1000);
    },
    submitForm(el) {
      /**检验数据是否合格 */
      this.$refs[el].validate(valid => {
        if (valid) {
          this.api.change(this.change).then(res => {
            if (res.data.code === "111") {
              this.dialogVisible = false;
              /**调用父组件方法 */
              /**
               * 1. 父组件挂载引入子组件，可以绑定方法或者数据
               * 2. 通过this.$parent.父组件方法
               * 3. 通过this.$emit('父组件方法名')
               * 4. 父组件对子组件绑定方法，子组件直接调用父组件方法
               */
              this.$emit("fatherMethod");
            } else {
              return;
            }
          });
        } else {
          console.log("编辑失败");
          return false;
        }
      });
    },
    editperdata(datas) {
      /**获取库存图标中的数据 */
      this.api.getperdatas(datas).then(res => {
        this.dialogVisible2 = true;
        this.arr = res.data;
        this.io = datas;
      });
      this.datas = {};
    },
    sure(data) {
      var arr = [];
      for (let i in this.datas) {
        arr.push(this.datas[i]);
      }
      if (arr.length === this.arr.length) {
        this.api.setdatay(data, arr).then(res => {
          if (res.data.code == "111") {
            this.$message({
              message: "修改成功",
              type: "success"
            });
            this.dialogVisible2 = false;
          }
        });
      } else {
        this.$message.error("修改错误，数据未完整");
      }
    }
  },
  components: {
    XChart,
    AChart
  },
  mounted() {
    this.openFullScreen1();
  }
};
</script>

<style scoped>
.news {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.sg {
  line-height: 2;
}
.grid-content {
  height: 400px;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
