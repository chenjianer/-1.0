<template>
  <div class="homes">
    <el-container style="border: 1px solid #eee;">
      <el-header style="text-align: right; font-size: 12px">
        <el-menu
          router
          :default-active="$route.path"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="/homes" style="border-bottom:none"><img src="static/logo.png" alt=""></el-menu-item>
          <el-menu-item index="/homes">汽配列表项</el-menu-item>
          <el-menu-item index="/homes/two">添加仓储配件</el-menu-item>
          <el-menu-item index="/homes/three">参数配置</el-menu-item>
          <el-submenu index="/homes/four">
            <template slot="title">订单管理</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="n-m">当前用户：{{ user }}&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">
                <router-link tag="li" :to="{name:'admin'}">查看</router-link>
              </el-dropdown-item>
              <el-dropdown-item command="b">新增</el-dropdown-item>
              <el-dropdown-item command="c">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Copyright/© 2019-4 Computer society competition aut/Errrl</el-footer>
    </el-container>
  </div>
</template>

<script>
import api from "@/api/index.js";

export default {
  name: "Homes",
  data() {
    return {
      user: "",
      uri: "/homes",
      circleUrl:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    };
  },
  methods: {
    // 用户操作
    handleCommand(m) {
      switch (m) {
        case "a":
          console.log("a");
          break;
        case "b":
          console.log("b");
          break;
        case "c":
          this.$confirm("确认退出吗", "提示", {}).then(() => {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            this.$router.push("/");
          });
          break;
      }
    }
  },
  mounted() {
    api
      .homes()
      .then(res => {
        // 解析成功
        this.user = localStorage.getItem("user");
      })
      .catch(err => {
        console.log(`错误 - ${err}`);
      });
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: left;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-main {
  line-height: 0;
}

.el-dropdown,
.n-m {
  color: #fff;
}
</style>

