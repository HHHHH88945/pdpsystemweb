<template>
  <el-container style="width: 100%;">
    <el-main>
      <el-date-picker v-model="selectedDateRange" type="daterange" align="right" unlink-panels range-separator="至"
        start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions" @change="fetchData"
        @input="fetchData">
      </el-date-picker>
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
            <el-button @click="$router.push('/weeklyNewspaper')">查看详情</el-button>
            
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="page.pageNumber" :page-sizes="[10]" :page-size="page.pageSize"
          layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      const page = { pageNumber: 1, pageSize: 20 };
      return {
        loading: false,
        params: { ...page },
        page: page,
        total: 0,
        list: [],
        selectedDateRange: [],
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        }
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        const url = '/admin/mission/checkPdpById';
        const params = {
          ...this.params,
          userId: localStorage.getItem("userId"),
          userName: localStorage.getItem("userName"),
          startDate: this.selectedDateRange[0] ? this.selectedDateRange[0].toISOString().slice(0, 10) : null,
          endDate: this.selectedDateRange[1] ? this.selectedDateRange[1].toISOString().slice(0, 10) : null
        };
        this.loading = true;
        axios.post(url, params)
          .then(response => {
            const data = (response.resultSetData || []).map(item => ({
              ...item,
              subDate: new Date(item.subDate).toLocaleString()
            }));
            const start = (this.params.pageNumber - 1) * this.params.pageSize;
            const end = start + this.params.pageSize;
            this.list = data.slice(start, end);
            this.total = response.total || 100;
            this.page.pageNumber = params.pageNumber;
            this.page.pageSize = params.pageSize;
          })
          .catch(error => {
            console.error('请求数据失败:', error);
          })
          .finally(() => {
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
    }
  };
</script>

<style scoped></style>