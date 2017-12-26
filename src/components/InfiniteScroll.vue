<template>
    <ul class="mui-table-view" 
        v-infinite-scroll="loadMore" 
        infinite-scroll-disabled="moreLoading" 
        infinite-scroll-distance="10" 
        infinite-scroll-immediate-check="true">

        <!--li数据遍历循环部分-->
        <li class="mui-table-view-cell" v-for="(item,i) in list" :key="i">
            {{item.name}}({{item.id}})
        </li>
        <!--底部判断是加载图标还是提示“全部加载”-->
        <div class="more_loading" v-show="!queryLoading">
            <mt-spinner type="fading-circle" color="#f60" v-show="moreLoading&&!allLoaded"></mt-spinner>
            <span v-show="allLoaded">我也是有底线的！</span>
        </div>
    </ul>
</template>

<script>
import '../mock/mock';
export default {
    data() {
        return {
            //初始化无限加载相关参数
            list:[],
            queryLoading: false,
            moreLoading: false,
            allLoaded: false,
            pageIndex: 2,
        }
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
        //无限加载函数
        loadMore() {
            if(this.allLoaded){
                this.moreLoading = true;
                return;
            }
            if(this.queryLoading){
                return;
            }
            this.moreLoading = !this.queryLoading;
            var self = this;
            setTimeout(function() {
                self.$axios('/api/admin',{
                    pageIndex: self.pageIndex ++,
                    count: 20
                }).then(d => {
                    self.list = self.list.concat(d.data);
                    /* 
                        d.data.length == 0     获取数据长度为0，代表数据全部加载完成, 多加载一次
                        d.data.length !== 20   获取数据长度不是20，代表数据全部加载完成,
                    */
                    self.allLoaded = d.data.length !== 20;            
                    self.moreLoading = self.allLoaded;
                    console.log('加载获取的数据条数'+self.list.length);
                })
            }, 1000);
        }
    },
 }
</script>

<style scoped>

#app li {
  line-height: 60px;
  font-size: 20px;
  text-align: center;
  border-bottom: 1px solid #ccc;
}

.more_loading{
    height: 0.9rem;
    line-height: .9rem;
    text-align: center;
    color: #f60;
}
.more_loading span:first-child{
    vertical-align: middle;
    display: inline-block;
}
</style>
