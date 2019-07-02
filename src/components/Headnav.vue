<template>
  <div>
    <div class="dv">
      <div class="dv1">
        <router-link to="/home"
          ><img src="../../public/logo.png" alt="" class="im"
        /></router-link>
      </div>
      <div class="div">
        <img src="../../public/搜索.svg" alt="" class="mg" />
        <input type="text" class="inp" />
      </div>
      <div class="dv2">
        <router-link to="/home">首页</router-link>
        <a href="">新手入门</a>
        <a href="">API</a>
        <a href="">关于</a>
        <router-link to="/signins">注册</router-link>
        <router-link to="/signins">登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
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
.im {
  height: 40px;
}
.dv {
  display: flex;
  background: #444444;
  width: 100%;
  height: 40px;
  position: relative;
}
.dv1 {
  margin-left: 100px;
}
.dv2 {
  position: absolute;
  right: 50px;
}
a {
  color: white;
  line-height: 40px;
  font-size: 14px;
  margin-right: 30px;
  text-decoration: none;
}
.inp {
  width: 220px;
  height: 22px;
  border-radius: 30px;
  background: #7a7a7a;
  border: 0;
  margin-top: 10px;
}
.div {
  position: relative;
}
.mg {
  position: absolute;
  left: 5px;
  top: 14px;
}
</style>
