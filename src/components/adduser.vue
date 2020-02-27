<template>
  <div class="adds">
    <el-row :span="24">
      <h3>添加配件</h3>
      <el-form :inline="true" :model="me" status-icon :rules="rules" ref="me" label-width="140px">
        <el-form-item label="配件名" prop="name">
          <el-input type="text" v-model="me.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="配件条码" prop="code">
          <el-input type="text" v-model="me.code" autocomplete="off" style="width: 200px;margin-right: 5px;"></el-input><i class="header-icon el-icon-info"></i>
        </el-form-item>
        <el-form-item label="仓储/数量" prop="outbound">
          <el-input v-model="me.outbound" autocomplete="off" placeholder="/件"></el-input>
        </el-form-item>
        <el-form-item label="入库/数量" prop="warehouse">
          <el-input v-model="me.warehouse" autocomplete="off" placeholder="/件"></el-input>
        </el-form-item>
        <el-form-item label="配件单价" prop="price">
          <el-input v-model="me.price" autocomplete="off" placeholder="请输入配件单价"></el-input>
        </el-form-item>
        <el-form-item label="入库时间" prop="warehousetime">
          <div class="block">
            <el-date-picker v-model="me.warehousetime" type="month" placeholder="选择配件入库时间" format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"></el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="配件分类" prop="sort">
          <el-select v-model="me.sort" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.value" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="车系" prop="whichsort">
          <el-select v-model="me.whichsort" placeholder="请选择">
            <el-option v-for="item in options2" :key="item.value2" :label="item.value2" :value="item.value2"></el-option>
          </el-select>
        </el-form-item>
        <h3 style="margin-top:5px">配件详情</h3>
        <el-form-item label="货运单号" prop="number1">
          <el-input v-model="me.number1" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="货物编号" prop="number2">
          <el-input v-model="me.number2" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="票据编码" prop="number3">
          <el-input v-model="me.number3" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="操作人" prop="control">
          <el-input v-model="me.control" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="配件描述/参数说明" prop="textarea">
          <el-input type="textarea" max placeholder="请输入内容" v-model="me.textarea"></el-input>
        </el-form-item>

        <el-form-item style="width:100%;text-align:center;margin-top:20px">
          <el-button type="primary" @click="submitForm('me')">提交</el-button>
          <el-button @click="resetForm('me')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>

<script>
  import api from "@/api/index";

  export default {
    name: "adduser",
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
          return callback(new Error("条码不能为空"));
        } else {
          if (value.length !== 14 && !/^[A-z0-9]{14}$/.test(value)) {
            return callback(new Error("请输入正确的条码"));
          } else {
            callback();
          }
        }
      };
      // 操作人
      let controls = (rule, value, callback) => {
        if (!value) {
          return callback(new Error("操作人不能为空"));
        } else {
          if (!/^[\u4e00-\u9fa5]{2,4}$/.test(value)) {
            return callback(new Error("请输入正确的操作人姓名"));
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
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
              text: "今天",
              onClick(picker) {
                picker.$emit("pick", new Date());
              }
            },
            {
              text: "昨天",
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit("pick", date);
              }
            },
            {
              text: "一周前",
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit("pick", date);
              }
            }
          ]
        },
        options: "",
        options2: "",
        me: {
          name: "",
          pass: "000000", //默认密码
          code: "",
          outbound: "",
          warehouse: "",
          control: "",
          sort: "",
          warehousetime: "",
          textarea: "",
          number1: "",
          number2: "",
          number3: "",
          whichsort: "",
          price: ''
        },
        rules: {
          whichsort: [{
            required: true,
            trigger: "blur"
          }],
          sort: [{
            required: true,
            trigger: "blur"
          }],
          number1: [{
            validavalidator: codes,
            required: true,
            trigger: "blur"
          }],
          number2: [{
            validavalidator: codes,
            required: true,
            trigger: "blur"
          }],
          number3: [{
            validator: codes,
            required: true,
            trigger: "blur"
          }],
          name: [{
            validator: names,
            required: true,
            trigger: "blur"
          }],
          price: [{
            required: true,
            trigger: "blur",
            message: '单价不能为空'
          }],
          code: [{
            validator: codes,
            required: true,
            message: "配件条码不能为空",
            trigger: "blur"
          }],
          outbound: [{
            validator: nums,
            required: true,
            message: "仓储数量不能为空",
            trigger: "blur"
          }],
          warehouse: [{
            validator: nums,
            required: true,
            message: "入库数量不能为空",
            trigger: "blur"
          }],
          control: [{
            validator: controls,
            required: true,
            message: "操作人不能为空",
            trigger: "blur"
          }],
          warehousetime: [{
            required: true,
            message: "入库时间不能为空",
            trigger: "blur"
          }]
        }
      };
    },
    mounted() {
      api.getOption().then(data => {
        this.options = data.data.res;
      });
      api.getOption2().then(data => {
        this.options2 = data.data.res;
      });
    },
    methods: {
      handleChange() {},
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            //  获取到数据，发送后台
            api.adduser(this.me).then(res => {
              if (res.data.code === "000") {
                this.$message({
                  message: res.data.msg,
                  type: "error"
                });
              } else {
                this.$message({
                  message: res.data.msg,
                  type: "success"
                });
                this.$refs[formName].resetFields();
              }
            });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
    // 随机添加姓名
    // mounted() {
    //   function ad() {
    //     let xing = ["赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈",
    //       "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
    //       "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏",
    //       "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
    //       "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦",
    //       "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳",
    //       "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺",
    //       "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常",
    //       "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余",
    //       "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹"];
    //     let ming = ["子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛",
    //       "昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊",
    //       "东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政",
    //       "美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建",
    //       "建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋",
    //       "涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅",
    //       "子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡",
    //       "佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕",
    //       "佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵",
    //       "清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌"];
    //     let x = parseInt(10 * Math.random())* 10 + parseInt(10 * Math.random());
    //     xing = xing[x];
    //     let m = parseInt(10 * Math.random())* 10 + parseInt(10 * Math.random());
    //     ming = ming[m];
    //     var o = '';
    //     return  o = xing+ming;
    //   };
    //  this.me.name = ad()
    // }
  };
</script>
<style scoped>
  .adds {
    width: 100%;
    height: 100%;
    line-height: 30px;
    margin-top: 10px;
    background: #fff;
  }

  h3 {
    margin: 25px 0;
  }

  .el-form-item {
    width: 28%;
  }

  el-form>el-form-item {
    float: left;
  }

  h3 {
    text-align: center;
  }
</style>
