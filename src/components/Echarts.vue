<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-left:50px;">
            <el-tab-pane label="柱状图" name="first"></el-tab-pane>
            <el-tab-pane label="折线图" name="second"></el-tab-pane>
            <el-tab-pane label="饼图" name="third"></el-tab-pane>
            <el-tab-pane label="雷达图" name="fourth"></el-tab-pane>
            <el-tab-pane label="漏斗图" name="fifth"></el-tab-pane>
        </el-tabs>
        <div id="main" style="width:1000px;height:500px;"></div>
    </div>
</template>

<script>
const echarts = require('echarts');
import data from '../mock/datas/echarts'

export default {
    data() {
        return {
            data:data,
            activeName: 'first',
            ind: 0,
        };
    },
    methods: {
        handleClick(tab, event) {
            this.ind = tab.index;
            var myChart = echarts.init(document.getElementById('main'));
            myChart.setOption(this.data[this.ind],true);
        },
    },
    mounted(){
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption(this.data[this.ind],true);
    }
}
</script>

<style>

</style>
