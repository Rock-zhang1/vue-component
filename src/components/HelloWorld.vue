<template>
  <div class="hello">
    <!-- header -->
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <!-- 轮播图 -->
    <mt-swipe :auto="4000" class="banner">
      <mt-swipe-item style="background: red;">
        1
      </mt-swipe-item>
      <mt-swipe-item style="background: yellow;">
        2
      </mt-swipe-item>
      <mt-swipe-item style="background: blue;">
        3
      </mt-swipe-item>
    </mt-swipe>

    <!-- 手机端项目 -->
    <el-dropdown trigger="click" style="margin-bottom:1rem;">
      <span class="el-dropdown-link">
        手机端项目<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="clearfix">
          <router-link to="/loadmore">下拉刷新</router-link>
        </el-dropdown-item>
        <el-dropdown-item class="clearfix">
          <router-link to="/loadmore-d">下拉刷新(数据)</router-link>
        </el-dropdown-item>
        <el-dropdown-item class="clearfix">
          <router-link to="/infiniteScroll">无限滚动条-预加载(数据)</router-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <!-- PC端项目 -->
    <el-dropdown trigger="click" style="margin-bottom:1rem; margin-left:1rem;;">
      <span class="el-dropdown-link">
        PC端项目<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="clearfix">
          <router-link to="/pagination">分页器</router-link>
        </el-dropdown-item>
        <el-dropdown-item class="clearfix">
          <router-link to="/echarts">echarts图表</router-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <!-- 开关 -->
    <mt-switch v-model="value" @change="aaa">{{value}}</mt-switch>

    <!-- 弹出框删除 -->
    <mt-button @click.native="handleClick">点击触发 handleClick</mt-button>
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>

    <!-- 正在加载 -->
    <mt-spinner type="snake"></mt-spinner>
    <mt-spinner type="double-bounce" color="#26a2ff"></mt-spinner>
    <mt-spinner type="triple-bounce"></mt-spinner>
    <mt-spinner type="fading-circle"></mt-spinner>

    <!-- 模拟系统弹出框 -->
    <mt-button @click.native="handle1">点击触发确认框</mt-button>
    <mt-button @click.native="handle2">点击触发输入框</mt-button>
    <mt-button @click.native="handle3">点击触发loading</mt-button>

  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
import { Indicator } from 'mint-ui';

export default {
  name: 'HelloWorld',
  data () {
    return {
      value: true,   // 开关初始值
      actions :[
        {
          name: '删除',
          method(){
            console.log('删除')
          }
        },
        {
          name: '彻底删除',
          method(){
            console.log('彻底删除')
          }
        }
      ],
      sheetVisible: false        // 是否隐藏
    }
  },
  methods:{
    aaa(d){
      console.log(d)
    },
    handleClick(){
      this.sheetVisible = true;
    },
    handle1(){
      MessageBox.confirm('确定执行此操作?','删除').then(action => {
          console.log('确定')
      })
    },
    handle2(){
      MessageBox.prompt('请输入姓名','实名认证').then(({ value, action }) => {
        console.log(value,action)
      });
    },
    handle3(){
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
    },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.mint-swipe{
  height: 4rem;
}
.banner{
  font-size: 1rem;
  text-align: center;
}
</style>
