<template>
  <div>
    <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%;" ref="multipleTable"
      @selection-change="xuanzhong" tooltip-effect="dark">
      <el-table-column type="selection" width="55px"></el-table-column>
      <el-table-column label="时间" prop="date" width="190px"></el-table-column>
      <el-table-column label="配件名" prop="name" width="140px"></el-table-column>
      <el-table-column label="配件条码" prop="code" width="160px"></el-table-column>
      <el-table-column label="仓储/数量" prop="outbound" width="130px"></el-table-column>
      <el-table-column label="入库/数量" prop="warehouse" width="130px"></el-table-column>
      <el-table-column label="车系" prop="whichsort" width="130px"></el-table-column>
      <el-table-column label="单价" prop="price" width="130px"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input size="mini" v-model="search" @keyup.enter.native="sousuo" placeholder="输入关键字搜索" />
        </template>

        <template slot-scope="scope">
          <el-button size="mini" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" icon="el-icon-delete" @click="dialogVisible2=true">删除</el-button>
          <el-dialog title="提示" :visible.sync="dialogVisible2" width="30%" center>
            <span>是否要删除该条信息栏?</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible2 = false">取 消</el-button>
              <el-button type="primary" @click="handleDelete(scope.$index, scope.row)">确 定</el-button>
            </span>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-col :span="12">
        <div style="margin-top: 20px;text-align: left">
          <el-button @click="toggleSelection" type="danger">批量删除</el-button>
        </div>
      </el-col>
      <el-col :span="12">
        <el-pagination style="margin-top: 20px;text-align: right" background @current-change="handleCurrentChange"
          :current-page="currentPage" :page-size="pagesize" layout="prev, pager, next" :total="zong"></el-pagination>
      </el-col>
    </el-row>

    <el-dialog title="编辑信息" :visible.sync="dialogVisible" width="40%">
      <el-form :model="me" status-icon :rules="rules" ref="me" label-width="100px">
        <el-form-item label="配件名" prop="name">
          <el-input type="text" v-model="me.name" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="配件条码" prop="code">
          <el-input type="text" v-model="me.code" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="仓储/数量" prop="outbound">
          <el-input-number v-model="me.outbound" :min="1" :max="me.outbound"></el-input-number>
        </el-form-item>
        <el-form-item label="入库/数量" prop="warehouse">
          <el-input v-model.number="me.warehouse" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="单价" prop="price">
          <el-input v-model.number="me.price" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="车系" prop="whichsort">
          <el-input v-model.number="me.whichsort" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="修改时间" prop="warehousetime">
          <div class="block">
            <el-date-picker v-model="me.warehousetime" format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd" :disabled="true"></el-date-picker>
          </div>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" :loading="loginLoadingState" @click="submitForm('me')">{{ yes }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import date from "@/utils/date.js";

  export default {
    inject: ["reload"],
    data() {
      // 姓名验证
      let names = (rule, value, callback) => {
        var reg = /^(([a-zA-Z+\.?\·?a-zA-Z+]{2,30}$)|([\u4e00-\u9fa5+\·?\u4e00-\u9fa5+]{2,30}$))/;
        if (!value) {
          return callback(new Error("姓名不能为空"));
        } else {
          if (!reg.test(value)) {
            return callback(new Error("姓名输入有误，请重新输入"));
          } else {
            callback();
          }
        }
      };
      // 手机号验证
      let codes = (rule, value, callback) => {
        if (!value) {
          return callback(new Error("配件条码不能为空"));
        } else {
          if (value.length !== 12 && !/^[A-z0-9]{12}$/.test(value)) {
            return callback(new Error("请输入正确的配件条码"));
          } else {
            callback();
          }
        }
      };
      // 出入库
      let nums = (rule, value, callback) => {
        if (!value) {
          return callback(new Error("仓储、入库数量不能为空"));
        } else {
          if (!/^[0-9]{2,6}$/.test(value)) {
            return callback(new Error("请输入正确的出入库数量"));
          } else {
            callback();
          }
        }
      };

      return {
        sel: [],
        currentPage: 1, //初始页
        pagesize: 10, //    每页的数据
        zong: 1,
        loginLoadingState: false,
        yes: "确 定",
        tableData: [],
        search: "",
        dialogVisible: false,
        dialogVisible2: false,
        options2: "",
        me: {
          id: "",
          name: "",
          code: "",
          outbound: "",
          warehouse: "",
          control: "",
          whichsort: "",
          price: "",
          warehousetime: ""
        },
        ids: [],
        rules: {
          warehousetime: [{
            required: true,
            trigger: "blur"
          }],
          price: [{
            required: true,
            trigger: "blur"
          }],
          name: [{
            validator: names,
            required: true,
            trigger: "blur"
          }],
          warehouse: [{
            validator: nums,
            required: true,
            message: "入库数量不能为空",
            trigger: "blur"
          }],
          whichsort: [{
            required: true,
            message: "请选择车系",
            trigger: "blur"
          }]
        }
      };
    },
    methods: {
      toggleSelection() {
        this.sel.forEach(item => {
          this.ids.push(item.id);
        });
        this.$confirm("确认删除选中记录吗？", "提示", {
          type: "warning"
        }).then(() => {
          this.api.removeall(this.ids).then(res => {
            if (res.data.code === "111") {
              this.$message({
                message: "删除成功",
                type: "success"
              });
              this.reload();
            }
          });
        });
      },
      // 搜索
      sousuo() {
        if (this.search) {
          let sh = this.tableData.filter(
            data =>
            !this.search ||
            data.name.toLowerCase().includes(this.search.toLowerCase())
          );
          this.tableData = sh;
          this.zong = sh.length;
        } else if (this.search === "") {
          this.reload();
          this.$message({
            message: "搜索条件不能为空",
            type: "warning"
          });
        }
      },
      // 分页
      handleCurrentChange: function(currentPage) {
        this.currentPage = currentPage;
      },
      // 编辑
      handleEdit(index, row) {
        this.dialogVisible = true;
        this.me.name = row.name;
        this.me.code = row.code;
        this.me.outbound = row.outbound;
        this.me.warehouse = row.warehouse;
        this.me.whichsort = row.whichsort;
        this.me.control = row.control;
        this.me.id = row.id;
        this.me.price = row.price;
        this.me.warehousetime = row.warehousetime;
      },
      // 提交编辑
      submitForm(v) {
        this.$refs[v].validate(valid => {
          if (valid) {
            // 向后台提交更改后的数据
            // 改变编辑按钮状态
            // 更改成功后关闭编辑页面
            this.api.edit(this.me).then(data => {
              this.loginLoadingState = true;
              this.yes = "修改中...";
              if (data.data.code === "111") {
                this.loginLoadingState = false;
                this.yes = data.data.msg;
                this.dialogVisible = false;
                // 让修改的数据刷新（app.vue需要配置）
                this.reload();
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
      // 删除
      handleDelete(index, row) {
        // console.log(index, row);
        this.api.dalete(row).then(data => {
          if (data.data.code === "111") {
            this.$message({
              message: data.data.msg,
              type: "success"
            });
            this.reload();
          } else {
            this.$message({
              message: "删除失败",
              type: "error"
            });
          }
        });
      },
      // 选中
      xuanzhong(row) {
        this.sel = row;
      }
    },
    mounted() {
      this.api.lists().then(data => {
        //  获取后台数据
        let ss = data.data.res;
        this.zong = ss.length;
        // 时间格式转换
        for (let i = 0; i < ss.length; i++) {
          ss[i].date = date(ss[i].date, "yyyy-MM-dd HH:mm:ss");
        }
        this.tableData = ss;
      });
      this.api.getOption2().then(data => {
        this.options2 = data.data.res;
      });
    }
  };
</script>

<style scoped>
</style>
