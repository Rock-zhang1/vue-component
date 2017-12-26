<template>
    <mt-loadmore :top-method="loadTop" 
        :bottom-method="loadBottom" 
        :bottom-all-loaded="allLoaded" 
        :max-distance="150"
        @top-status-change="handleTopChange" 
        ref="loadmore">

        <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus === 'pull'">↓</span>
            <span v-show="topStatus === 'loading'">loading...</span>
            <span v-show="topStatus === 'drop'">释放更新</span>
        </div>

        <ul class="scroll-wrapper">
            <li v-for="(item,i) in list" @click="itemClick(item)" :key="i">{{ item }}</li>
        </ul>

    </mt-loadmore>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      allLoaded: false,
      topStatus: ""
    };
  },
  created() {
    var i = 0,
      len = 20;
    for (; i < len; i++) {
      this.list.push("demo" + i);
    }
  },
  methods: {
    loadTop() {
      // 刷新数据的操作
      var self = this;
      setTimeout(function() {
        self.list.splice(0, self.list.length);
        var i = 1,
          len = 20;
        for (; i < len; i++) {
          self.list.push("刷新后的数据" + i);
        }
        self.$refs.loadmore.onTopLoaded();
      }, 2000);
    },
    loadBottom() {
      // 加载更多数据的操作
      //this.allLoaded = true;// 若数据已全部获取完毕
      var self = this;
      setTimeout(function() {
        var i = 0,
          len = 10;
        for (; i < len; i++) {
          self.list.push("新增数据" + i);
        }
        self.$refs.loadmore.onBottomLoaded();
      }, 2000);
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    itemClick(data) {
      console.log("item click,: " + data);
    }
  }
};
</script>

<style>
.scroll-wrapper {
  margin: 0;
  padding: 0;
  list-style: none;
}
.scroll-wrapper li {
  line-height: 60px;
  font-size: 20px;
  text-align: center;
  border-bottom: 1px solid #ccc;
}

</style>
