<template>
  <div>
    <div class="dv6">
      <div class="dv8">
        <span :class="{ sp3: obj.top }" v-if="obj.top === true">置顶</span>
        <h3 class="h3">{{ obj.title }}</h3>
      </div>
      <ul class="ul" v-if="obj.author">
        <li>发布于{{ obj.month }}月前</li>
        <li>作者{{ obj.author.loginname }}</li>
        <li>{{ obj.visit_count }}次浏览</li>
        <li>来自 分享</li>
      </ul>
      <hr />
      <div v-html="obj.content"></div>
    </div>
    <div class="dv10">
      <div class="dv9">{{ obj.reply_count }}回复</div>
      <div v-for="(item, index) in obj.replies" :key="item.id">
        <div class="dv11">
          <img :src="item.author.avatar_url" alt="" class="im1" />
          <span class="sp5">{{ item.author.loginname }}</span>
          <a href="#" class="a6">{{ index + 1 }}楼·{{ item.month1 }}个月前</a>
          <p v-html="item.content" class="p1"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  components: {},
  props: {},
  data() {
    return {
      id: "",
      obj: {}
    };
  },
  methods: {
    getData() {
      this.$axios
        .req("/api/api/v1/topic/" + this.id)
        .then(res => {
          if (res) {
            this.$nextTick(() => {
              this.$loading().close();
            });
            this.obj = res.data.data;
            console.log(res.data.data);
            let date = new Date();
            let d = date.getTime();
            let times =
              this.$moment(d).valueOf() -
              this.$moment(this.obj.create_at.valueOf());
            this.obj.month = parseInt(times / 1000 / 60 / 60 / 24 / 30);
            this.obj.replies.map(item => {
              let times1 =
                this.$moment(d).valueOf() -
                this.$moment(item.create_at.valueOf());
              item.month1 = parseInt(times1 / 1000 / 60 / 60 / 24 / 30);
            });
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getData();
    this.$loading({
      text: "加载中..."
    });
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.dv6 {
  width: 1100px;
  margin-left: 100px;
  box-shadow: 0 0 10px pink;
}
.dv6 img {
  width: 1100px;
}
.dv6 li {
  margin-left: 40px;
  margin-top: 15px;
}
.dv6 a {
  text-decoration: none;
  color: cornflowerblue;
}
.dv6 p {
  margin: 10px 20px;
}
.dv6 h2 {
  margin: 10px 20px;
}
.dv6 pre {
  margin: 10px 20px;
}
.dv8 {
  display: flex;
}
.h3 {
  margin: 10px 0;
}
.sp3 {
  margin: 15px 10px;
  font-size: 14px;
  color: white;
  background: #80bd01;
  border-radius: 3px;
}
.ul {
  display: flex;
  font-size: 12px;
  color: #7a7a7a;
  margin: 0 20px;
}
.ul li {
  margin: 0 10px;
}
hr {
  margin: 10px 0;
}
.dv9 {
  line-height: 40px;
  background: pink;
}
.dv10 {
  width: 1100px;
  margin-left: 100px;
  box-shadow: 0 0 10px pink;
  margin-top: 20px;
}
.im1 {
  width: 40px;
  height: 40px;
}
.dv11 {
  border-bottom: wheat solid 1px;
}
.sp5 {
  vertical-align: top;
  font-size: 14px;
}
.a6 {
  vertical-align: top;
  font-size: 14px;
  color: cornflowerblue;
}
.p1 {
  margin-left: 60px;
  margin-bottom: 30px;
}
.dv10 a {
  color: cornflowerblue;
  font-size: 14px;
}
</style>
