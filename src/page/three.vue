<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card class="box-card"  :body-style="{ padding: '0px' }">
          <div slot="header" class="">
            <el-row>
              <el-col :span="12"><div class="grid-content bg-purple"><span>卡片名称</span></div></el-col>
              <el-col :span="12"><div class="grid-content bg-purple-light"><el-button style="float: right; padding: 0" type="text" @click="detail1=true">操作按钮</el-button></div></el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src='http://127.0.0.1:8000/bm.png' alt="">
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card"  :body-style="{ padding: '0px' }">
          <div slot="header" class="">
            <el-row>
              <el-col :span="12"><div class="grid-content bg-purple"><span>卡片名称</span></div></el-col>
              <el-col :span="12"><div class="grid-content bg-purple-light"><el-button style="float: right; padding: 0" type="text">操作按钮</el-button></div></el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src='http://127.0.0.1:8000/bc.png' alt="">
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card"  :body-style="{ padding: '0px' }">
          <div slot="header" class="">
            <el-row>
              <el-col :span="12"><div class="grid-content bg-purple"><span>卡片名称</span></div></el-col>
              <el-col :span="12"><div class="grid-content bg-purple-light"><el-button style="float: right; padding: 0" type="text">操作按钮</el-button></div></el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src='http://127.0.0.1:8000/h.png' alt="">
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card"  :body-style="{ padding: '0px' }">
          <div slot="header" class="">
            <el-row>
              <el-col :span="12"><div class="grid-content bg-purple"><span>卡片名称</span></div></el-col>
              <el-col :span="12"><div class="grid-content bg-purple-light"><el-button style="float: right; padding: 0" type="text">操作按钮</el-button></div></el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src='http://127.0.0.1:8000/t.png' alt="">
          </div>
        </el-card>
      </el-col>
    </el-row>

<!-- detail1 -->
<el-dialog
  title="请选择车系"
  :visible.sync="detail1"
  width="400px"
  center>
  <el-select v-model="value" placeholder="请选择"  @change="change">
    <el-option
      v-for="item in option1"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  {{detailvalue1}}
  <span slot="footer" class="dialog-footer">
    <el-button @click="init">关 闭</el-button>
  </span>
</el-dialog>

     <el-row :gutter="10">
      <el-col :span="6">
        <el-card class="box-card"  :body-style="{ padding: '0px' }">
          <div slot="header" class="">
            <el-row>
              <el-col :span="12"><div class="grid-content bg-purple"><span>卡片名称</span></div></el-col>
              <el-col :span="12"><div class="grid-content bg-purple-light"><el-button style="float: right; padding: 0" type="text">操作按钮</el-button></div></el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src='http://127.0.0.1:8000/n.png' alt="">
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card"  :body-style="{ padding: '0px' }">
          <div slot="header" class="">
            <el-row>
              <el-col :span="12"><div class="grid-content bg-purple"><span>卡片名称</span></div></el-col>
              <el-col :span="12"><div class="grid-content bg-purple-light"><el-button style="float: right; padding: 0" type="text">操作按钮</el-button></div></el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src='http://127.0.0.1:8000/dz.png' alt="">
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card"  :body-style="{ padding: '0px' }">
          <div slot="header" class="">
            <el-row>
              <el-col :span="12"><div class="grid-content bg-purple"><span>卡片名称</span></div></el-col>
              <el-col :span="12"><div class="grid-content bg-purple-light"><el-button style="float: right; padding: 0" type="text">操作按钮</el-button></div></el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src='http://127.0.0.1:8000/ford.png' alt="">
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card"  :body-style="{ padding: '0px' }">
          <div slot="header" class="">
            <el-row>
              <el-col :span="12"><div class="grid-content bg-purple"><span>卡片名称</span></div></el-col>
              <el-col :span="12"><div class="grid-content bg-purple-light"><el-button style="float: right; padding: 0" type="text">操作按钮</el-button></div></el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src='http://127.0.0.1:8000/gq.png' alt="">
          </div>
        </el-card>
      </el-col>
    </el-row>
     <el-row :gutter="10">
      <el-col :span="6">
        <el-card class="box-card"  :body-style="{ padding: '0px' }">
          <div slot="header" class="">
            <el-row>
              <el-col :span="12"><div class="grid-content bg-purple"><span>卡片名称</span></div></el-col>
              <el-col :span="12"><div class="grid-content bg-purple-light"><el-button style="float: right; padding: 0" type="text">操作按钮</el-button></div></el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src='http://127.0.0.1:8000/ad.png' alt="">
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card"  :body-style="{ padding: '0px' }">
          <div slot="header" class="">
            <el-row>
              <el-col :span="12"><div class="grid-content bg-purple"><span>卡片名称</span></div></el-col>
              <el-col :span="12"><div class="grid-content bg-purple-light"><el-button style="float: right; padding: 0" type="text">操作按钮</el-button></div></el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src='http://127.0.0.1:8000/byd.png' alt="">
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card"  :body-style="{ padding: '0px' }">
          <div slot="header" class="">
            <el-row>
              <el-col :span="12"><div class="grid-content bg-purple"><span>卡片名称</span></div></el-col>
              <el-col :span="12"><div class="grid-content bg-purple-light"><el-button style="float: right; padding: 0" type="text">操作按钮</el-button></div></el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src='http://127.0.0.1:8000/bz.png' alt="">
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card"  :body-style="{ padding: '0px' }">
          <div slot="header" class="">
            <el-row>
              <el-col :span="12"><div class="grid-content bg-purple"><span>卡片名称</span></div></el-col>
              <el-col :span="12"><div class="grid-content bg-purple-light"><el-button style="float: right; padding: 0" type="text">操作按钮</el-button></div></el-col>
            </el-row>
          </div>
          <div class="text item">
            <img src='http://127.0.0.1:8000/bk.png' alt="">
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
        detail1:false,
        detailvalue1:'',
        value:'',
        option1:[{
          value: '宝马1系列',
          label: '宝马1系列'
        }, {
          value: '宝马2系列',
          label: '宝马2系列'
        }, {
          value: '宝马3系列',
          label: '宝马3系列'
        }, {
          value: '宝马5系列',
          label: '宝马5系列'
        }, {
          value: '宝马7系列',
          label: '宝马7系列'
        }, {
          value: '宝马X5',
          label: '宝马X5'
        }]
      };
    },
    methods:{
      init(){
        this.value = '';
        this.detail1 = false;
      },
      change(){
        console.log(1)
      }
    }
  }
</script>

<style scoped>
  .el-row{
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
    clear: both
  }
  .grid-content {
    line-height: 20px;
   }
  .bg-purple{
    text-align: left;
  }
</style>
