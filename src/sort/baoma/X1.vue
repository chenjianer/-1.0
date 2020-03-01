<template>
  <div class="wraper">
    <template>
      <el-backtop target=".wraper">
        <div
          style="{
                        height: 100%;
                        width: 100%;
                        background-color: #f2f5f6;
                        box-shadow: 0 0 6px rgba(0,0,0, .12);
                        text-align: center;
                        line-height: 40px;
                        color: #1989fa;
                    }"
        >UP</div>
      </el-backtop>
    </template>
    <h2 style="padding-top:15px">基本参数</h2>
    <el-table :data="tableData1" style="width: 100%" :border="true" :stripe="true">
      <el-table-column fixed="left" label="参数列表" prop="data1" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 时型" prop="data2" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 尊享型" prop="data3" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive20Li 领先型" prop="data4" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 尊享型" prop="data5" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 型" prop="data6" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 时型" prop="data7" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 尊享型" prop="data8" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive20Li 领先型" prop="data9" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 尊享型" prop="data10" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 型" prop="data11" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive25Li 型" prop="data12" width="217px"></el-table-column>
    </el-table>
    <h2>车身</h2>
    <el-table :data="tableData2" style="width: 100%" :border="true" :stripe="true">
      <el-table-column fixed="left" label="参数列表" prop="data1" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 时型" prop="data2" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 尊享型" prop="data3" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive20Li 领先型" prop="data4" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 尊享型" prop="data5" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 型" prop="data6" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 时型" prop="data7" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 尊享型" prop="data8" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive20Li 领先型" prop="data9" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 尊享型" prop="data10" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 型" prop="data11" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive25Li 型" prop="data12" width="217px"></el-table-column>
    </el-table>
    <h2>发动机</h2>
    <el-table :data="tableData3" style="width: 100%" :border="true" :stripe="true">
      <el-table-column fixed="left" label="参数列表" prop="data1" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 时型" prop="data2" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 尊享型" prop="data3" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive20Li 领先型" prop="data4" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 尊享型" prop="data5" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 型" prop="data6" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 时型" prop="data7" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 尊享型" prop="data8" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive20Li 领先型" prop="data9" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 尊享型" prop="data10" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 型" prop="data11" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive25Li 型" prop="data12" width="217px"></el-table-column>
    </el-table>
    <h2>变速箱</h2>
    <el-table :data="tableData4" style="width: 100%" :border="true" :stripe="true">
      <el-table-column fixed="left" label="参数列表" prop="data1" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 时型" prop="data2" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 尊享型" prop="data3" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive20Li 领先型" prop="data4" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 尊享型" prop="data5" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 型" prop="data6" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 时型" prop="data7" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 尊享型" prop="data8" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive20Li 领先型" prop="data9" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 尊享型" prop="data10" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 型" prop="data11" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive25Li 型" prop="data12" width="217px"></el-table-column>
    </el-table>
    <h2>底盘转向</h2>
    <el-table :data="tableData5" style="width: 100%" :border="true" :stripe="true">
      <el-table-column fixed="left" label="参数列表" prop="data1" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 时型" prop="data2" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 尊享型" prop="data3" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive20Li 领先型" prop="data4" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 尊享型" prop="data5" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 型" prop="data6" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 时型" prop="data7" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 尊享型" prop="data8" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive20Li 领先型" prop="data9" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 尊享型" prop="data10" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 型" prop="data11" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive25Li 型" prop="data12" width="217px"></el-table-column>
    </el-table>
    <h2>车轮制动</h2>
    <el-table :data="tableData6" style="width: 100%" :border="true" :stripe="true">
      <el-table-column fixed="left" label="参数列表" prop="data1" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 时型" prop="data2" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 尊享型" prop="data3" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive20Li 领先型" prop="data4" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 尊享型" prop="data5" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 型" prop="data6" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 时型" prop="data7" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 尊享型" prop="data8" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive20Li 领先型" prop="data9" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 尊享型" prop="data10" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 型" prop="data11" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive25Li 型" prop="data12" width="217px"></el-table-column>
    </el-table>
    <h2>主/被动安全配置</h2>
    <el-table :data="tableData7" style="width: 100%" :border="true" :stripe="true">
      <el-table-column fixed="left" label="参数列表" prop="data1" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 时型" prop="data2" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 尊享型" prop="data3" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive20Li 领先型" prop="data4" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 尊享型" prop="data5" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 型" prop="data6" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 时型" prop="data7" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 尊享型" prop="data8" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive20Li 领先型" prop="data9" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 尊享型" prop="data10" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 型" prop="data11" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive25Li 型" prop="data12" width="217px"></el-table-column>
    </el-table>
    <h2>辅助/操控配置</h2>
    <el-table :data="tableData8" style="width: 100%" :border="true" :stripe="true">
      <el-table-column fixed="left" label="参数列表" prop="data1" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 时型" prop="data2" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 尊享型" prop="data3" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive20Li 领先型" prop="data4" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 尊享型" prop="data5" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 型" prop="data6" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 时型" prop="data7" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 尊享型" prop="data8" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive20Li 领先型" prop="data9" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 尊享型" prop="data10" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 型" prop="data11" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive25Li 型" prop="data12" width="217px"></el-table-column>
    </el-table>
    <h2>外部/防盗配置</h2>
    <el-table :data="tableData9" style="width: 100%" :border="true" :stripe="true">
      <el-table-column fixed="left" label="参数列表" prop="data1" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 时型" prop="data2" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 尊享型" prop="data3" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive20Li 领先型" prop="data4" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 尊享型" prop="data5" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 型" prop="data6" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 时型" prop="data7" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 尊享型" prop="data8" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive20Li 领先型" prop="data9" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 尊享型" prop="data10" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 型" prop="data11" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive25Li 型" prop="data12" width="217px"></el-table-column>
    </el-table>
    <h2>内部配置</h2>
    <el-table :data="tableData10" style="width: 100%" :border="true" :stripe="true">
      <el-table-column fixed="left" label="参数列表" prop="data1" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 时型" prop="data2" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 尊享型" prop="data3" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive20Li 领先型" prop="data4" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 尊享型" prop="data5" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 型" prop="data6" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 时型" prop="data7" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 尊享型" prop="data8" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive20Li 领先型" prop="data9" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 尊享型" prop="data10" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 型" prop="data11" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive25Li 型" prop="data12" width="217px"></el-table-column>
    </el-table>
    <h2>座椅配置</h2>
    <el-table :data="tableData11" style="width: 100%" :border="true" :stripe="true">
      <el-table-column fixed="left" label="参数列表" prop="data1" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 时型" prop="data2" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 尊享型" prop="data3" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive20Li 领先型" prop="data4" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 尊享型" prop="data5" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 型" prop="data6" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 时型" prop="data7" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 尊享型" prop="data8" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive20Li 领先型" prop="data9" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 尊享型" prop="data10" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 型" prop="data11" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive25Li 型" prop="data12" width="217px"></el-table-column>
    </el-table>
    <h2>多媒体配置</h2>
    <el-table :data="tableData12" style="width: 100%" :border="true" :stripe="true">
      <el-table-column fixed="left" label="参数列表" prop="data1" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 时型" prop="data2" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 尊享型" prop="data3" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive20Li 领先型" prop="data4" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 尊享型" prop="data5" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 型" prop="data6" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 时型" prop="data7" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 尊享型" prop="data8" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive20Li 领先型" prop="data9" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 尊享型" prop="data10" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 型" prop="data11" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive25Li 型" prop="data12" width="217px"></el-table-column>
    </el-table>
    <h2>灯光配置</h2>
    <el-table :data="tableData13" style="width: 100%" :border="true" :stripe="true">
      <el-table-column fixed="left" label="参数列表" prop="data1" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 时型" prop="data2" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 尊享型" prop="data3" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive20Li 领先型" prop="data4" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 尊享型" prop="data5" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 型" prop="data6" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 时型" prop="data7" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 尊享型" prop="data8" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive20Li 领先型" prop="data9" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 尊享型" prop="data10" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 型" prop="data11" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive25Li 型" prop="data12" width="217px"></el-table-column>
    </el-table>
    <h2>玻璃/后视镜</h2>
    <el-table :data="tableData14" style="width: 100%" :border="true" :stripe="true">
      <el-table-column fixed="left" label="参数列表" prop="data1" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 时型" prop="data2" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 尊享型" prop="data3" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive20Li 领先型" prop="data4" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 尊享型" prop="data5" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 型" prop="data6" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 时型" prop="data7" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 尊享型" prop="data8" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive20Li 领先型" prop="data9" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 尊享型" prop="data10" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 型" prop="data11" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive25Li 型" prop="data12" width="217px"></el-table-column>
    </el-table>
    <h2>空调</h2>
    <el-table :data="tableData15" style="width: 100%" :border="true" :stripe="true">
      <el-table-column fixed="left" label="参数列表" prop="data1" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 时型" prop="data2" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive18Li 尊享型" prop="data3" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2019款 sDrive20Li 领先型" prop="data4" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 尊享型" prop="data5" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2019款 xDrive20Li 型" prop="data6" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 时型" prop="data7" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive18Li 尊享型" prop="data8" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 sDrive20Li 领先型" prop="data9" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 尊享型" prop="data10" width="217px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive20Li 型" prop="data11" width="218px"></el-table-column>
      <el-table-column label="宝马X1 2018款 xDrive25Li 型" prop="data12" width="217px"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "baomax1",
  data() {
    return {
      tableData1: [],
      tableData2: [],
      tableData3: [],
      tableData4: [],
      tableData5: [],
      tableData6: [],
      tableData7: [],
      tableData8: [],
      tableData9: [],
      tableData10: [],
      tableData11: [],
      tableData12: [],
      tableData13: [],
      tableData14: [],
      tableData15: []
    };
  },
  methods: {},
  mounted() {
    let data = "canshux1"
    this.api.getbaoma1(data).then(res => {
      this.tableData1 = res.data.res;
    });
    this.api.getbaoma2(data).then(res => {
      this.tableData2 = res.data.res;
    });
    this.api.getbaoma3(data).then(res => {
      this.tableData3 = res.data.res;
    });
    this.api.getbaoma4(data).then(res => {
      this.tableData4 = res.data.res;
    });
    this.api.getbaoma5(data).then(res => {
      this.tableData5 = res.data.res;
    });
    this.api.getbaoma6(data).then(res => {
      this.tableData6 = res.data.res;
    });
    this.api.getbaoma7(data).then(res => {
      this.tableData7 = res.data.res;
    });
    this.api.getbaoma8(data).then(res => {
      this.tableData8 = res.data.res;
    });
    this.api.getbaoma9(data).then(res => {
      this.tableData9 = res.data.res;
    });
    this.api.getbaoma10(data).then(res => {
      this.tableData10 = res.data.res;
    });
    this.api.getbaoma11(data).then(res => {
      this.tableData11 = res.data.res;
    });
    this.api.getbaoma12(data).then(res => {
      this.tableData12 = res.data.res;
    });
    this.api.getbaoma13(data).then(res => {
      this.tableData13 = res.data.res;
    });
    this.api.getbaoma14(data).then(res => {
      this.tableData14 = res.data.res;
    });
    this.api.getbaoma15(data).then(res => {
      this.tableData15 = res.data.res;
    });
  }
};
</script>

<style scoped>
h2 {
  height: 25px;
  padding-top: 30px;
}
.wraper {
  height: 100vh;
  overflow-x: hidden;
}
</style>