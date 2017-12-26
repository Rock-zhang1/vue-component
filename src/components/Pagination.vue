<template>
    <div>
        <!-- mockAdapter 拦截数据 -->

        <el-table :data="tableData" stripe style="width: 100%" max-height="600" class="table"
            :default-sort = "{prop: 'date', order: 'descending'}">
            <el-table-column sortable prop="id" label="ID" width="180"></el-table-column> 
            <el-table-column sortable prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column sortable prop="age" label="年龄"></el-table-column>
            <el-table-column prop="address" label="籍贯"></el-table-column>
            <el-table-column sortable prop="date" label="注册时间"></el-table-column>
        </el-table>

        <el-pagination
            style="float:right;"
            @size-change="handleSizeChange" 
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 50, 100, 200]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="123">
        </el-pagination>
    </div>
  
</template>

<script>
import '../mock/mock';
export default {
    data(){
        return {
            /* 分页器配置参数 */
            currentPage: 1,     // 默认页
            pageSize: 10,       // 一页显示多少数据
            
            tableData: null     // 渲染table的数据
        }
    },
    methods:{
        dataChange(){    // 数据改变,根据页码与一页多少条数据来请求数据
            this.$axios('/api/admin',{
                pageIndex: this.currentPage,
                count: this.pageSize
            }).then(d => {
                this.tableData = d.data;
            })
        },
        handleCurrentChange(d){      // 点击页码请求数据
            this.currentPage = d;
            this.dataChange();
        },
        handleSizeChange(d){             // 一页显示多少数据
            this.pageSize = d;
            this.dataChange();
        }
    },
    mounted(){        // 页面初始化请求一次数据
        this.dataChange();
    }
}
</script>

<style>

</style>
