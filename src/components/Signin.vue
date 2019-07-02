<template>
  <div>
    <div class="box" v-if="this.$store.state.usr">
      <p class="p">个人信息</p>
      <p>{{ $store.state.usr }}</p>
      <p>积分:0</p>
      <p><i>“这家伙很懒，什么个性签名都没有留下”</i></p>
    </div>
    <el-card class="box-card" v-else>
      <div class="text item">
        <p>CNode：Node.js专业中文社区</p>
        <p>
          您可以<router-link to="/signins" class="a">登录</router-link> 或
          <router-link to="/signins" class="a">注册</router-link>
        </p>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "Signin",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
.p {
  background: pink;
  display: inline-block;
  width: 250px;
  line-height: 40px;
}
.text {
  font-size: 14px;
}
.item {
  padding: 18px 0;
}
.box {
  margin-right: 50px;
  box-shadow: 0 0 10px wheat;
}
.a {
  color: pink;
  margin: 0 5px;
  text-decoration: none;
}
</style>
