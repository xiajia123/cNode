<template>
  <div>
    <div class="div1">
      <div class="div2">
        欢迎来到cNode社区
      </div>
      <div class="div3">
        <span>请输入用户名</span>
        <el-input v-model="input1" class="np"></el-input>
      </div>
      <div class="div3">
        <span>请输入密码</span>
        <el-input v-model="input2" show-password class="np"></el-input>
      </div>
      <div class="div3">
        <span>请确认密码</span>
        <el-input v-model="input3" show-password class="np"></el-input>
      </div>
      <el-button type="primary" class="but" @click="cli">立即登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signins",
  components: {},
  props: {},
  data() {
    return {
      input1: "",
      input2: "",
      input3: ""
    };
  },
  methods: {
    cli() {
      if (this.input2 !== this.input3) {
        alert("输入密码需一致");
      } else if (
        this.input1.length > 0 &&
        this.input2.length > 0 &&
        this.input3.length > 0
      ) {
        localStorage.setItem("usr", this.input1);
        this.$store.state.usr = this.input1;
        this.$router.push("/");
      } else {
        alert("用户名,密码不能为空");
      }
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.div1 {
  box-shadow: 0 0 5px pink;
  margin: 200px auto;
  width: 500px;
  height: 350px;
}
.div2 {
  font-size: 18px;
  line-height: 50px;
  text-align: center;
  border-bottom: pink solid 1px;
}
.div3 {
  margin: 20px 20px;
}
.but {
  margin-left: 200px;
}
.np {
  width: 300px;
  margin-left: 20px;
}
span {
  display: inline-block;
  width: 100px;
  text-align: center;
}
</style>
