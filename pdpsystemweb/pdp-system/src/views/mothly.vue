<template>
    <el-container style="width: 100%;">
      <el-main>
        <el-button style="width: 200px; margin-bottom: 20px;" @click="$router.push('/root')" >填写月报</el-button>
        <el-table v-loading="loading" :data="list" border row-key="id" style="width: 100%" @row-click="handleRowClick">
          <el-table-column prop="userName" label="用户名" />
  
          <el-table-column prop="status" label="当前状态">
            <template slot-scope="scope">
              <el-tag v-if="scope.row.status === '0'" type="warning">已提交</el-tag>
              <el-tag v-else type="success">已通过审核</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="subDate" label="提交时间" />
  
          <el-table-column label="功能区" @click="$router.push('/resource')">
            <template slot-scope="scope">
          
              <el-button @click="goToviewMonthlyReport(scope.row.subDate)">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page.pageNumber"
            :page-sizes="[10]"
            :page-size="page.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>
      </el-main>
    </el-container>
  </template>
  
  <script>

  import axios from 'axios';

  export default {
    data() {
      const page = { pageNumber: 1, pageSize: 10 };
      return {
        loading: false, // 加载状态
        params: { ...page }, // 请求参数
        page: page, // 分页状态
        total: 0, // 数据总量
        list: [], // 数据列表
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      goToviewMonthlyReport(subDate) {
    this.$router.push({ path:'/viewMonthlyReport', query: { subDate: subDate } });
  },
      fetchData() {
        const url = '/admin/mission/checkPdpById';
        const params = { ...this.params, userId:localStorage.getItem("userId") , userName: localStorage.getItem("userName"), missionStatus:"months"};
        this.loading = true;
        axios
          .post(url, params)   
          .then(response => {
            const data = (response.resultSetData || []).map(item => ({
              ...item,
              subDate:item.monthDate.toLocaleString()
            }))
            console.log(this.List)
            const start = (this.params.pageNumber - 1) * this.params.pageSize;
            const end = start + this.params.pageSize;
            this.list = data.slice(start, end);
            this.total = response.total || 100;
            this.page.pageNumber = params.pageNumber;
            this.page.pageSize = params.pageSize;
          })
          .catch(error => {
            console.error('请求数据失败:', error);
          }).finally(() => {
            this.loading = false;
          });
      },
      handleSizeChange(val) {
        this.params.pageSize = val;
        this.fetchData();
      },
      handleCurrentChange(val) {
        this.params.pageNumber = val;
        this.fetchData();
      },
      viewDetails(row) {
        this.$router.push({ name: 'details', params: { id: row.id } });
      },
      toggleDatePicker(row) {
        row.showDatePicker = !row.showDatePicker;
      }
    },
  };
  </script>
  
  <style scoped></style>