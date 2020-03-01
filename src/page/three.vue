<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card class="box-card" :body-style="{ padding: '0px' }">
          <div slot="header" class>
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <span>宝马</span>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <el-button style="float: right; padding: 0" type="text" @click="open(1)">查看参数配置</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src="static/img/bm.png" alt />
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card" :body-style="{ padding: '0px' }">
          <div slot="header" class>
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <span>奔驰</span>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <el-button style="float: right; padding: 0" type="text" @click="open(2)">查看参数配置</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src="static/img/bc.png" alt />
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card" :body-style="{ padding: '0px' }">
          <div slot="header" class>
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <span>本田</span>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <el-button style="float: right; padding: 0" type="text"  @click="open(3)">查看参数配置</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src="static/img/h.png" alt />
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card" :body-style="{ padding: '0px' }">
          <div slot="header" class>
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <span>丰田</span>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <el-button style="float: right; padding: 0" type="text">操作按钮</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src="static/img/t.png" alt />
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- detail1 -->
    <el-dialog title="请选择车系" :visible.sync="detail1" width="850px" center>
      <hr />
      <el-row style="padding-top:20px">
        <el-col :span="24">
          <div
            class="sg"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;宝马(BMW)是享誉世界的豪华汽车品牌，宝马的车系有i、X、Z、纯数字4个车型，1、2、3、4、5、6、7、8等几个系列，</div>
        </el-col>
      </el-row>
      <el-row style="padding-top:15px">
        <el-col :span="24">
          <div class="sg">还有在各系基础上进行改进的M系（宝马官方的高性能改装部门），宝马公司创建于1916年，总部设在德国巴伐利亚州慕尼黑，</div>
        </el-col>
      </el-row>
      <el-row style="padding-top:15px">
        <el-col :span="24">
          <div class="sg">BMW的蓝白标志宝马总部所在地巴伐利亚州州旗的颜色，百年来，宝马汽车由最初的一家飞机引擎生产厂发展成为以高级轿车</div>
        </el-col>
      </el-row>
      <el-row style="padding-top:15px">
        <el-col :span="24">
          <div class="sg">为主导，并生产享誉全球的飞机引擎、越野车和摩托车的企业集团，名列世界汽车公司前列，其全称为Bavarian Motor Work。</div>
        </el-col>
      </el-row>
      <el-row style="padding-top:50px;padding-left:180px">
        <el-col :span="24">
          <el-form style="width:450px" :inline="true">
            <el-form-item label="查看配置参数">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in option"
                  :key="item.baomaoption"
                  :label="item.baomaoption"
                  :value="item.baomaoption"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item style="width:100px">
              <el-button type="primary" @click="change">立即查看</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="init">关 闭</el-button>
      </span>
    </el-dialog>

    <!-- detail2 -->
    <el-dialog title="请选择车系" :visible.sync="detail2" width="850px" center>
      <hr />
      <el-row style="padding-top:20px">
        <el-col :span="24">
          <div
            class="sg"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;奔驰，德国汽车品牌，汽车的发明者，被认为是世界上最成功的高档汽车品牌之一，其完美的技术水平、过硬的质量标准、</div>
        </el-col>
      </el-row>
      <el-row style="padding-top:15px">
        <el-col :span="24">
          <div class="sg">推陈出新的创新能力，以及一系列经典轿跑车款式令人称道。奔驰三叉星已成为世界上最著名的汽车及品牌标志之一。</div>
        </el-col>
      </el-row>
      <el-row style="padding-top:50px;padding-left:180px">
        <el-col :span="24">
          <el-form style="width:450px" :inline="true">
            <el-form-item label="查看配置参数">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in option"
                  :key="item.benchioption"
                  :label="item.benchioption"
                  :value="item.benchioption"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item style="width:100px">
              <el-button type="primary" @click="change">立即查看</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="init">关 闭</el-button>
      </span>
    </el-dialog>

<!-- detail3 -->
    <el-dialog title="请选择车系" :visible.sync="detail3" width="850px" center>
      <hr />
      <el-row style="padding-top:20px">
        <el-col :span="24">
          <div
            class="sg"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本田指的是本田株式会社（本田技研工业株式会社）是世界上最大的摩托车生产厂家，汽车产量和规模也名列世界十大汽车</div>
        </el-col>
      </el-row>
      <el-row style="padding-top:15px">
        <el-col :span="24">
          <div class="sg">厂家之列。</div>
        </el-col>
      </el-row>
      <el-row style="padding-top:20px">
        <el-col :span="24">
          <div
            class="sg"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1946年10月创立，1948年9月成立公司，创始人是传奇式人物本田宗一郎。公司总部在东京，雇员总数达18万人左右。现</div>
        </el-col>
      </el-row>
      <el-row style="padding-top:20px">
        <el-col :span="24">
          <div
            class="sg"
          >在，本田公司已是一个跨国汽车、摩托车生产销售集团。它的产品除汽车、摩托车外，还有发电机、农机等动力机械产品。</div>
        </el-col>
      </el-row>
      <el-row style="padding-top:20px">
        <el-col :span="24">
          <div
            class="sg"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2017年BrandZ全球最具价值品牌100强，本田(Honda) 汽车以121.63亿美元排名第91名。2018年7月19日，《财富》世界</div>
        </el-col>
      </el-row>
      <el-row style="padding-top:20px">
        <el-col :span="24">
          <div
            class="sg"
          >500强排行榜发布，本田汽车位列30位。2019年2月19日，日本汽车厂商本田正准备宣布关闭其在英国斯文登(Swindon)的</div>
        </el-col>
      </el-row>
      <el-row style="padding-top:20px">
        <el-col :span="24">
          <div
            class="sg"
          >工厂。2019年10月，Interbrand发布的全球品牌百强榜排名21。</div>
        </el-col>
      </el-row>
      <el-row style="padding-top:50px;padding-left:180px">
        <el-col :span="24">
          <el-form style="width:450px" :inline="true">
            <el-form-item label="查看配置参数">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in option"
                  :key="item.bentianoption"
                  :label="item.bentianoption"
                  :value="item.bentianoption"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item style="width:100px">
              <el-button type="primary" @click="change">立即查看</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="init">关 闭</el-button>
      </span>
    </el-dialog>


    <el-row :gutter="10">
      <el-col :span="6">
        <el-card class="box-card" :body-style="{ padding: '0px' }">
          <div slot="header" class>
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <span>日产</span>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <el-button style="float: right; padding: 0" type="text">操作按钮</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src="static/img/n.png" alt />
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card" :body-style="{ padding: '0px' }">
          <div slot="header" class>
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <span>大众</span>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <el-button style="float: right; padding: 0" type="text">操作按钮</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src="static/img/dz.png" alt />
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card" :body-style="{ padding: '0px' }">
          <div slot="header" class>
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <span>福特</span>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <el-button style="float: right; padding: 0" type="text">操作按钮</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src="static/img/ford.png" alt />
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card" :body-style="{ padding: '0px' }">
          <div slot="header" class>
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <span>广汽传祺</span>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <el-button style="float: right; padding: 0" type="text">操作按钮</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src="static/img/gq.png" alt />
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card class="box-card" :body-style="{ padding: '0px' }">
          <div slot="header" class>
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <span>奥迪</span>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <el-button style="float: right; padding: 0" type="text">操作按钮</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src="static/img/ad.png" alt />
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card" :body-style="{ padding: '0px' }">
          <div slot="header" class>
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <span>比亚迪</span>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <el-button style="float: right; padding: 0" type="text">操作按钮</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src="static/img/byd.png" alt />
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card" :body-style="{ padding: '0px' }">
          <div slot="header" class>
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <span>标志</span>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <el-button style="float: right; padding: 0" type="text">操作按钮</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src="static/img/bz.png" alt />
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card" :body-style="{ padding: '0px' }">
          <div slot="header" class>
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <span>别克</span>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <el-button style="float: right; padding: 0" type="text">操作按钮</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src="static/img/bk.png" alt />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "three",
  data() {
    return {
      currentDate: new Date(),
      detail1: false,
      detail2: false,
      detail3:false,
      value: "",
      textarea: "",
      option: []
    };
  },
  methods: {
    open(data) {
      if (data === 1) {
        this.detail1 = true;
        this.api.getOption3(data).then(res => {
          this.option = res.data.res;
        });
      } else if (data === 2) {
        this.detail2 = true;
        this.api.getOption3(data).then(res => {
          this.option = res.data.res;
        });
      } else if (data === 3) {
        this.detail3 = true;
        this.api.getOption3(data).then(res => {
          this.option = res.data.res;
        });
      }
    },
    init() {
      this.value = "";
      this.detail1 = false;
      this.detail2 = false;
      this.detail3 = false;
    },
    change() {
      if (this.value === "宝马1系列") {
        this.$router.push({ name: "baomaone" });
      } else if (this.value === "宝马2系列") {
        this.$router.push({ name: "baomatwo" });
      } else if (this.value === "宝马3系列") {
        this.$router.push({ name: "baomathree" });
      } else if (this.value === "宝马5系列") {
        this.$router.push({ name: "baomafive" });
      } else if (this.value === "宝马7系列") {
        this.$router.push({ name: "baomaseven" });
      } else if (this.value === "宝马X1") {
        this.$router.push({ name: "baomaX1" });
      } else if (this.value === "宝马X2") {
        this.$router.push({ name: "baomaX2" });
      } else if (this.value === "宝马X3") {
        this.$router.push({ name: "baomaX3" });
      } else if (this.value === "宝马X4") {
        this.$router.push({ name: "baomaX4" });
      } else if (this.value === "宝马X5") {
        this.$router.push({ name: "baomaX5" });
      } else if (this.value === "宝马X6") {
        this.$router.push({ name: "baomaX6" });
      } else if (this.value === "宝马X7") {
        this.$router.push({ name: "baomaX7" });
      } else if (this.value === "奔驰A级") {
        this.$router.push({ name: "benchia" });
      } else if (this.value === "奔驰C级") {
        this.$router.push({ name: "benchic" });
      } else if (this.value === "奔驰E级") {
        this.$router.push({ name: "benchie" });
      } else if (this.value === "奔驰GLA") {
        this.$router.push({ name: "benchiga" });
      } else if (this.value === "奔驰GLC") {
        this.$router.push({ name: "benchigc" });
      } else if (this.value === "奔驰V级") {
        this.$router.push({ name: "benchiv" });
      } else if (this.value === "奔驰CLA级") {
        this.$router.push({ name: "benchica" });
      } else if (this.value === "奔驰CLS级") {
        this.$router.push({ name: "benchics" });
      } else if (this.value === "奔驰S级") {
        this.$router.push({ name: "benchis" });
      } else if (this.value === "奔驰A级(进口)") {
        this.$router.push({ name: "benchiap" });
      } else if (this.value === "奔驰GLE") {
        this.$router.push({ name: "benchige" });
      } else if (this.value === "奔驰GLB") {
        this.$router.push({ name: "benchigb" });
      } else if (this.value === "杰德") {
        this.$router.push({ name: "bentianjd" });
      } else if (this.value === "思域") {
        this.$router.push({ name: "bentiansy" });
      } else if (this.value === "思铂睿") {
        this.$router.push({ name: "bentiansr" });
      } else if (this.value === "哥瑞") {
        this.$router.push({ name: "bentiangr" });
      } else if (this.value === "享域") {
        this.$router.push({ name: "bentianxy" });
      } else if (this.value === "本田XR-V") {
        this.$router.push({ name: "bentianxrv" });
      } else if (this.value === "本田CR-V") {
        this.$router.push({ name: "bentiancrv" });
      } else if (this.value === "本田UR-V") {
        this.$router.push({ name: "bentianurv" });
      } else if (this.value === "飞度") {
        this.$router.push({ name: "bentianfd" });
      } else if (this.value === "锋范") {
        this.$router.push({ name: "bentianff" });
      } else if (this.value === "雅阁") {
        this.$router.push({ name: "bentianyg" });
      } else if (this.value === "冠道") {
        this.$router.push({ name: "bentiangd" });
      }
    }
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 10px;
}
.text {
  font-size: 14px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.grid-content {
  line-height: 20px;
}
.bg-purple {
  text-align: left;
}
</style>
