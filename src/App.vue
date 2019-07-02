<template>
  <div id="app">
    <router-view v-if="$route.path === '/signins'"></router-view>
    <el-container v-else>
      <el-header>
        <headnav></headnav>
      </el-header>
      <el-container>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
          <el-aside class="as">
            <signin></signin>
          </el-aside>
        </el-container>
        <el-footer>
          <div class="dv1"></div>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Signin from "./components/Signin";
import Headnav from "./components/Headnav";
export default {
  components: {
    Signin,
    Headnav
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.dv1 {
  height: 40px;
  background: pink;
  width: 100%;
}
.as {
  margin-top: 20px;
  margin-right: 40px;
}
p {
  margin-top: 10px;
}

</style>
