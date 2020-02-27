<template>
  <div class="main">
    <el-row :span="24">
      <h3>业务流程</h3>
      <div class="block">
        <el-timeline :reverse="reverse">
          <el-timeline-item timestamp="收货" placement="top">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>系统操作员</span>
                <el-button style="float: right; padding: 3px 0" type="text"><a href="../static/打印.html">操作按钮</a></el-button>
              </div>
              <div class="text item">
                1、打印收货单
              </div>
            </el-card>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>入库员</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div class="text item">1、确认收获单</div>
              <div class="text item">2、接货并对货车进行拍照</div>
              <div class="text item">3、上托盘，对物料件数进行核对</div>
              <div class="text item">4、有误，在卡车司机签字的回执单上记录错误；无误则保留回执单，注意货运单号、货物编号、票据编码必须齐全</div>
              <div class="text item">5、初步理货结束，安排叉车司机将物料卸入理货区等待二次理货</div>
              <div class="text item">6、进入理货流程</div>

            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="入库理货" placement="top">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>保管员</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div class="text item">1、根据收货清单对物料类型、数量进行二次核对</div>
              <div class="text item">2、二次理货结束</div>
              <div class="text item">3、有错误，填写索赔单报上异样，上交索赔单，安排叉车司机将物料移入暂存区；无误则在收货清单上签名，上交收货清单</div>
            </el-card>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>仓库主任</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div class="text item">1、收取索赔单，联系厂商</div>
              <div class="text item">2、安排退货或者补货流程</div>
            </el-card>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>信息操作员</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div class="text item">1、收取售货员签名的收货清单</div>
              <div class="text item">2、将收货清单递交给入库员</div>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="入库作业" placement="top">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>入库员</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div class="text item">1、接收收货清单</div>
              <div class="text item">2、按照<a href="javascript:void(0)" @click="fangan">汽车配件储存方案</a>确定可用的库位、架号、零件代码将物料归位</div>
              <div class="text item">3、安排叉车司机将物料上架到规划好的位置，填写配件条码(配件零件代码、位置代码)</div>
              <div class="text item">4、上交收货单，执行入库</div>
            </el-card>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>信息操作员</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div class="text item">1、接收收货清单</div>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="写入系统" placement="top">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>信息操作员</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div class="text item">1、接收收货清单，货运单</div>
              <div class="text item">2、按照收货清单，货运单上的信息进行系统写入</div>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="出货\盘点" placement="top">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>需求</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div class="text item">1、获取出库单(信息操作员打出，并签名)</div>
              <div class="text item">2、填写需求信息，将出库单递交给仓库主任</div>
            </el-card>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>仓库主任</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div class="text item">1、获取出库单</div>
              <div class="text item">2、登入配件管理系统查询配件条码，填写出库数量出库签名许可，安排入库员出库</div>
            </el-card>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>入库员</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div class="text item">1、获取签了名的出库单，按照配件条码进行出库</div>
              <div class="text item">2、签名上交出库单至信息操作员处</div>
            </el-card>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>信息操作员</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div class="text item">1、接收出库单</div>
              <div class="text item">2、更新系统数据</div>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-row>

    <el-dialog title="汽车配件储存方案" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="sort" label="配件类别"></el-table-column>
        <el-table-column property="ssort" label="配件类别缩写"></el-table-column>
        <el-table-column property="area" label="区位"></el-table-column>
        <el-table-column property="things" label="零件码(零件开头两位首字母)"></el-table-column>
        <el-table-column property="jiahao" label="架号(total:2500)"></el-table-column>
        <el-table-column property="cenghao" label="层级(total:04)"></el-table-column>
      </el-table>
      <el-table :data="gridData2">
          <el-table-column property="which" label="车系" width="150"></el-table-column>
          <el-table-column property="num" label="编号" width="200"></el-table-column>
        </el-table>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "timeLine",
    data() {
      return {
        reverse: false,
        dialogTableVisible: false,
        gridData: [{
          sort: '曲柄连杆机构',
          ssort:'qb',
          area: 'A1',
          things: '例如：(曲轴：qz)',
          jiahao:'0001-2500',
          cenghao:'01-04'
        }, {
          sort: '配气机构',
          ssort:'pq',
          area: 'A2',
          things: '例如：(空气滤清器：kq)',
          jiahao:'0001-2500',
          cenghao:'01-04'
        }, {
          sort: '冷却系统',
          ssort:'lq',
          area: 'A3',
          things: '例如：(散热器：sr)',
          jiahao:'0001-2500',
          cenghao:'01-04'
        }, {
          sort: '润滑系统',
          ssort:'rh',
          area: 'A4',
          things: '例如：(机油滤清器：jy)',
          jiahao:'0001-2500',
          cenghao:'01-04'
        }, {
          sort: '启动系统',
          ssort:'qd',
          area: 'A5',
          things: '例如：(永磁起动机：yc)',
          jiahao:'0001-2500',
          cenghao:'01-04'
        }, {
          sort: '供油系统',
          ssort:'gy',
          area: 'A6',
          things: '例如：(燃油滤清器：yy)',
          jiahao:'0001-2500',
          cenghao:'01-04'
        }, {
          sort: '点火系统',
          ssort:'dh',
          area: 'A7',
          things: '例如：(火花塞：hh)',
          jiahao:'0001-2500',
          cenghao:'01-04'
        }, {
          sort: '行驶系统',
          ssort:'xs',
          area: 'A8',
          things: '例如：(车桥：cq)',
          jiahao:'0001-2500',
          cenghao:'01-04'
        }, {
          sort: '转向系统',
          ssort:'zx',
          area: 'A9',
          things: '例如：(转向电机：zx)',
          jiahao:'0001-2500',
          cenghao:'01-04'
        }, {
          sort: '制动系统',
          ssort:'zd',
          area: 'A10',
          things: '例如：(制动片：zd)',
          jiahao:'0001-2500',
          cenghao:'01-04'
        }, {
          sort: '传动系统',
          ssort:'cd',
          area: 'A11',
          things: '例如：(传动轴：cd)',
          jiahao:'0001-2500',
          cenghao:'01-04'
        }],
        gridData2:[{
          which:'宝马',
          num:'01'
        },{
          which:'奔驰',
          num:'02'
        },{
          which:'本田',
          num:'03'
        },{
          which:'丰田',
          num:'04'
        },{
          which:'日产',
          num:'05'
        },{
          which:'大众',
          num:'06'
        },{
          which:'福特',
          num:'07'
        },{
          which:'广汽传祺',
          num:'08'
        },{
          which:'东风标致',
          num:'09'
        },{
          which:'奥迪',
          num:'10'
        },{
          which:'比亚迪',
          num:'11'
        },{
          which:'现代',
          num:'12'
        }]
      };
    },
    methods: {
      fangan() {
        this.dialogTableVisible = true;
      },
    }
  }
</script>

<style scoped>
  .main {
    width: 100%;
    height: 100%;
    margin-top: 10px;
    background: #fff;
    overflow: scroll;
  }

  h3 {
    text-align: center;
    margin: 35px 0;
  }

  span {
    line-height: 24px;
    font-size: 16px;
  }

  .text {
    font-size: 14px;
    line-height: 20px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 980px;
    margin-left: 50px;
    margin-top: 20px;
  }

  .el-timeline {
    margin-left: 90px;
    margin-top: 50px;
  }
</style>
