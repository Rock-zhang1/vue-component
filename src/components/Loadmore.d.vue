<template>
    <mt-loadmore :top-method="loadTop"
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        :max-distance="150"
        :auto-fill="false"
        @top-status-change="handleTopChange"
        ref="loadmore">

        <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus === 'pull'">↓</span>
            <span v-show="topStatus === 'loading'">loading...</span>
            <span v-show="topStatus === 'drop'">释放更新</span>
        </div>

        <ul class="scroll-wrapper">
            <li v-for="(item,i) in list" @click="itemClick(item)" :key="i">
              {{ item.name }}({{ item.id }})
            </li>
        </ul>

    </mt-loadmore>
</template>
<script>
import '../mock/mock';
export default {
  data() {
    return {
      list: [],
      allLoaded: false,
      pageIndex: 2,
      topStatus: ""
    };
  },
  created() {
    this.$axios('/api/admin',{
        pageIndex: 1,
        count: 20
    }).then(d => {
        this.list = d.data;
        console.log('初始化获取的数据条数'+this.list.length);
    })
  },
  methods: {
    loadTop() {
      // 刷新数据的操作
      var self = this;
      setTimeout(function() {
        self.$axios('/api/admin',{
            pageIndex: 1,
            count: 20
        }).then(d => {
            self.list = d.data;
            console.log('刷新获取的数据条数'+self.list.length);
        })
        self.$refs.loadmore.onTopLoaded();
      }, 2000);
    },
    loadBottom() {
        // 加载更多数据的操作
        // this.allLoaded = true;   // 若数据已全部获取完毕
        var self = this;
        setTimeout(function() {
            self.$axios('/api/admin',{
                pageIndex: self.pageIndex ++,
                count: 20
            }).then(d => {
                self.list = self.list.concat(d.data);
                console.log('加载后获取的数据条数'+self.list.length);
            })
            self.$refs.loadmore.onBottomLoaded();
        }, 2000);
    },
    handleTopChange(status) {
        this.topStatus = status;
    },
    itemClick(data) {
        console.log("item click,: " + data.name);
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
