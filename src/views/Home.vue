<template>
  <div class="home">
    <div class="dv3">
      <span
        v-for="(item, index) in arr"
        :key="item"
        class="sp"
        @click="cli(item, index)"
        :class="{ spa1: ind === index }"
        >{{ item }}</span
      >
    </div>
    <div class="dv5" v-if="num">
      <div
        v-for="item in num.slice((val2 - 1) * val1, val1 * val2)"
        :key="item.id"
        class="dv4"
      >
        <img :src="item.author.avatar_url" class="img" />
        <span class="sp2">{{ item.reply_count }}/{{ item.visit_count }}</span>
        <span :class="{ spa: item.top }" v-if="item.top === true">置顶</span>
        <span
          :class="{ sp1: true }"
          v-if="item.tab === 'share' && item.top === false"
          >分享</span
        >
        <span :class="{ sp1: true }" v-if="item.tab === 'ask'">问答</span>
        <a href="#" id="a" @click="cliickItem(item)">{{ item.title }}</a>
        <span v-if="item.day > 0">{{ item.day }}天前</span>
        <span v-if="item.day === 0 && item.hours > 0"
          >{{ item.hours }}小时前</span
        >
        <span v-if="item.hours <= 0">{{ item.minutes }}分钟前</span>
      </div>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage1"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="40"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "Homepage",
  props: {},
  data() {
    return {
      arr: ["全部", "精华", "分享", "招聘", "客户端测试"],
      ind: 0,
      currentPage1: 1,
      val1: 10,
      val2: 1
    };
  },
  methods: {
    cli(item, index) {
      this.ind = index;
    },
    cliickItem(item) {
      this.$router.push({ name: "details", params: { id: item.id } });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.val1 = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.val2 = val;
    }
  },
  mounted() {
    this.$store.dispatch("getData");
    this.$loading({
      text: "加载中..."
    });
  },
  created() {},
  filters: {},
  computed: {
    num() {
      return this.$store.state.data.data;
    }
  },
  watch: {
    num(val) {
      if (val) {
        this.$nextTick(() => {
          this.$loading().close();
        });
      }
    }
  },
  directives: {}
};
</script>
<style lang="scss">
.dv4 {
  border-top: pink solid 1px;
  padding: 10px 0;
  font-size: 14px;
}
.dv4:hover {
  background: #f6f6f6;
}
.dv5 {
  box-shadow: 0 0 10px pink;
  width: 1100px;
  margin-left: 100px;
}
.img {
  height: 30px;
  vertical-align: middle;
  margin-left: 5px;
}
#a {
  color: black;
  font-size: 16px;
  text-decoration: none;
  margin-left: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  width: 800px;
  vertical-align: middle;
}
#a:hover {
  text-decoration: underline;
}
.dv3 {
  background: pink;
  width: 1100px;
  margin-left: 101px;
  height: 40px;
}
.sp {
  color: #80bd01;
  margin: 0 20px;
  line-height: 40px;
}
.spa {
  color: white;
  background: #80bd01;
  border-radius: 3px;
  margin-left: 5px;
}
.spa1 {
  color: white;
  background: #80bd01;
  border-radius: 3px;
}
.sp1 {
  background: #7a7a7a;
  border-radius: 3px;
  color: whitesmoke;
  margin-left: 5px;
}
.sp2 {
  font-size: 12px;
  display: inline-block;
  width: 80px;
  text-align: center;
}
span {
  vertical-align: middle;
}
.block {
  margin-left: 100px;
}
</style>
