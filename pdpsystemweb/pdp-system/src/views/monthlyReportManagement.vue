<template>
    <el-container style="width: 100%;">
        <el-main>
            <div class="filter-container">

                <el-date-picker v-model="selectedDateRange" type="daterange" align="right" unlink-panels
                    range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions"
                    @change="fetchData" @input="fetchData">
                </el-date-picker>

                <el-select v-model="selectedUser" placeholder="请选择用户" @change="selectedUserId = selectedUser">
                    <el-option v-for="(user, index) in users" :key="index" :label="user.name" :value="user.name"></el-option>
                </el-select>
                <!-- <el-select v-model="selectedDepartment" placeholder="请选择科室">
                    <el-option v-for="(department,index) in departments" :key="index" :label="department"
                        :value="department.name"></el-option>
                </el-select> -->
                <el-button type="primary" @click="fetchData">查询</el-button>
            </div>
            <el-table v-loading="loading" :data="list" border row-key="id" style="width: 100%"
                @row-click="handleRowClick">
                <el-table-column prop="userName" label="用户名" />
                <!-- <el-table-column prop="administrativeOffice" label="科室" /> -->
                <el-table-column prop="status" label="当前状态">
                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.status === '0'" type="warning">已提交</el-tag>
                        <el-tag v-else type="success">已通过审核</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="subDate" label="提交时间" />
                <el-table-column label="功能区" @click="$router.push('/resource')">
                    <template slot-scope="scope">
                        <el-button @click="goToviewPdp(scope.row.subDate, scope.row.userName, scope.row.userId)">查看详情</el-button>

                    </template>
                </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="page.pageNumber" :page-sizes="[50]" :page-size="page.pageSize"
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
            return {
                loading: false,
                params: { pageNumber: 1, pageSize: 20 },
                page: { pageNumber: 1, pageSize: 20 },
                total: 0,
                list: [],
                selectedDateRange: [],
                pickerOptions: {
                    shortcuts: [
                        {
                            text: '最近一周',
                            onClick(picker) {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                picker.$emit('pick', [start, end]);
                            },
                        },
                        {
                            text: '最近一个月',
                            onClick(picker) {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                picker.$emit('pick', [start, end]);
                            },
                        },
                        {
                            text: '最近三个月',
                            onClick(picker) {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                picker.$emit('pick', [start, end]);
                            },
                        },
                    ],
                },

                //     data() {
                userId: [],
                users: [], // 存储用户的姓名列表
                departments: ["软件室", "硬件室", "测试室", "产品室", "结构室"],// 存储科室列表
                selectedUser: '', // 存储用户选择的姓名
                selectedDepartment: '', // 存储用户选择的科室、
                selectedUserId: '',

            };
        },
        created() {
            
            const url = '/admin/mission/checkPdpById';
            const url2 = '/admin/user/getUserList';

            axios.post(url2)
                .then((response) => {
                    this.userIds = response.resultSetData.map((user) => user.id);
                    console.info(this.userIds);
                    const promises = this.userIds.map((userId) => {
                        const params = {
                            ...this.params,
                            userId: userId,
                            missionStatus:"months",
                            userName: localStorage.getItem("userName"),
                            startDate: this.selectedDateRange[0] ? this.selectedDateRange[0].toISOString().slice(0, 10) : null,
                            endDate: this.selectedDateRange[1] ? this.selectedDateRange[1].toISOString().slice(0, 10) : null,
                            department: this.selectedDepartment,
                        };
                        return axios.post(url, params);
                    });

                    this.loading = true;
                    axios.all(promises)
                        .then((responses) => {
                            const data = responses.flatMap((response) => {
                                return (response.resultSetData || []).map((item) => ({
                                    ...item,
                                    subDate: item.subDate.toLocaleString()
                                }));
                            });
                           
                            const start = (this.params.pageNumber - 1) * this.params.pageSize;
                            const end = start + this.params.pageSize;
                            this.list = data.slice(start, end);
                            this.total = data.length || 10000;
                            this.page.pageNumber = this.params.pageNumber;
                            this.page.pageSize = this.params.pageSize;
                        })
                        .catch((error) => {
                            console.error('请求数据失败:', error);
                        })
                        .finally(() => {
                            this.loading = false;
                        });
                })
                .catch((error) => {
                    console.error('获取用户列表失败:', error);
                });
        },
        mounted() {
            this.fetchUsers();  // 获取用户姓名列表
            this.fetchDepartments(); // 获取科室列表
            this.fetchData(); // 获取数据列表
            
        },
        
        methods: {

            goToviewPdp(subDate, userName, userId) {
                this.$router.push({ path: '/viewMonth', query: { subDate: subDate, userName: userName, userId: userId } });
            },
            fetchUsers() {
                const url = '/admin/user/getUserList';
                axios
                    .post(url)
                    .then((response) => {
                        // this.users = response.resultSetData.map((user) => user.);
                        this.users = response.resultSetData.map((user) => ({
                            id: user.id,
                            name: user.no
                        }));
                        // console.log(this.users)
                        // console.log(selectedUserId)
                        
                        if (this.selectedUser) {
                            const selectedUser = this.users.find((user) => user.name === this.selectedUser);
                            this.selectedUserId = selectedUser ? selectedUser.id : '';
                        }
                    })
                    .catch((error) => {
                        console.error('获取用户列表失败:', error);
                    });
            },
            fetchDepartments() {
                const url = '/admin/mission/checkPdpById';

                // const params = {
                //     userId: 1,
                //     userName: admin,
                //     // 添加dePartNum参数
                // };

                axios
                    .post(url, params)
                    .then((response) => {
                        this.departments = ["软件室", "硬件室", "测试室", "产品室", "结构室"];
                    })
                    .catch((error) => {
                        console.error('获取科室列表失败:', error);
                    });
            },
            fetchData() {
                console.info(item.subDate.toLocaleString())
                debugger;
                const url = '/admin/mission/checkPdpById';
                // const url = '/admin/pdp/getWeekList';
                const selectedUser = this.users.find(user => user.name === this.selectedUser);
                debugger;
                const params = {  userId: selectedUser.id, userName: selectedUser.name, missionStatus:"months"};
                this.loading = true;
                debugger;

                axios
                    .post(url, params)
                    .then(response => {
                        const data = (response.resultSetData || []).map(item => ({
                            ...item,
                            subDate: item.subDate.toLocaleString()
                        }))
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
            },
        },
    };
</script>
