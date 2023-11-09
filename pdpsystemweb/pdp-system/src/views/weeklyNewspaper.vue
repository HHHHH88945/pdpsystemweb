<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="excel-container">
        <div class="oTi">研发中心员工周度PDP计划</div>
        <!-- Left Table 1 -->
        <div class="excel-table">
            <table class="left-table" :style="{ height: leftTableHeight}" ref="leftTable">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>任务项目</th>
                        <th>项目内容</th>
                        <th>完成情况</th>
                        <th>权重</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in tableData1" :key="index">
                        <td class="cell" style="text-align: center">{{ index + 1 }}</td>
                        <td class="cell">{{ row.projectName }}</td>
                        <td class="cell">{{ row.projectLog }}</td>
                        <td class="cell">{{ row.projectSchedule }}</td>
                        <td class="cell">{{ row.projectWeight }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Right Table 1 -->
        <div class="excel-table">
            <table class="right-table" :style="{ height: rightTableHeight }" ref="rightTable">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>任务项目</th>
                        <th>项目内容</th>
                        <th>完成情况</th>
                        <th>权重</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in tableData2" :key="index">
                        <td class="cell" style="text-align: center">{{ index + 1 }}</td>
                        <td class="cell">{{ row.projectName }}</td>
                        <td class="cell">{{ row.projectLog }}</td>
                        <td class="cell">{{ row.projectSchedule }}</td>
                        <td class="cell">{{ row.projectWeight }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div style="width:100%;background-color: black;height: 6px ;"> </div>

        <!-- Left Table 2 -->
        <div class="excel-table">
            <table class="left-table" :style="{ height: leftTableHeight }" ref="leftTable2">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>任务项目</th>
                        <th>项目内容</th>
                        <th>完成情况</th>
                        <th>权重</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in tableData3" :key="index">
                        <td class="cell" style="text-align: center">{{ index + 1 }}</td>
                        <td class="cell">{{ row.projectName }}</td>
                        <td class="cell">{{ row.projectLog }}</td>
                        <td class="cell">{{ row.projectSchedule }}</td>
                        <td class="cell">{{ row.projectWeight }}</td>
                    </tr>
                </tbody>
            </table>
        </div>


        <!-- Right Table 2 -->
        <div class="excel-table">
            <table class="right-table" :style="{ height: rightTableHeight }" ref="rightTable2">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>任务项目</th>
                        <th>项目内容</th>
                        <th>完成情况</th>
                        <th>权重</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in tableData4" :key="index">
                        <td class="cell" style="text-align: center">{{ index + 1 }}</td>
                        <td class="cell">{{ row.projectName }}</td>
                        <td class="cell">{{ row.projectLog }}</td>
                        <td class="cell">{{ row.projectSchedule }}</td>
                        <td class="cell">{{ row.projectWeight }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="oTi">研发中心员工周度PDP总结</div>

        <!-- Right Table 2 -->
        <div class="excel-table">
            <table class="left-table" :style="{ height: leftTableHeight,width:leftTableWidth}" ref="leftTable3">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>任务项目</th>
                        <th>项目内容</th>
                        <th>完成情况</th>
                        <th>权重</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in tableData5" :key="index">
                        <td class="cell" style="text-align: center">{{ index + 1 }}</td>
                        <td class="cell">{{ row.projectName }}</td>
                        <td class="cell">{{ row.projectLog }}</td>
                        <td class="cell">{{ row.projectSchedule }}</td>
                        <td class="cell">{{ row.projectWeight }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Right Table 2 -->

        <div class="excel-table">
            <table class="right-table" :style="{ height: rightTableHeight }" ref="rightTable3">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>任务项目</th>
                        <th>项目内容</th>
                        <th>完成情况</th>
                        <th>权重</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in tableData6" :key="index">
                        <td class="cell" style="text-align: center">{{ index + 1 }}</td>
                        <td class="cell">{{ row.projectName }}</td>
                        <td class="cell">{{ row.projectLog }}</td>
                        <td class="cell">{{ row.projectSchedule }}</td>
                        <td class="cell">{{ row.projectWeight }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div style="width:100%;background-color: black;height: 6px;"></div>
        <!-- Right Table 2 -->
        <div class="excel-table">
            <table class="left-table" :style="{ height: leftTableHeight }" ref="leftTable4">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>任务项目</th>
                        <th>项目内容</th>
                        <th>完成情况</th>
                        <th>权重</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in tableData7" :key="index">
                        <td class="cell" style="text-align: center">{{ index + 1 }}</td>
                        <td class="cell">{{ row.projectName }}</td>
                        <td class="cell">{{ row.projectLog }}</td>
                        <td class="cell">{{ row.projectSchedule }}</td>
                        <td class="cell">{{ row.projectWeight }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Right Table 2 -->
        <div class="excel-table">
            <table class="right-table" :style="{ height: rightTableHeight }" ref="rightTable4">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>任务项目</th>
                        <th>项目内容</th>
                        <th>完成情况</th>
                        <th>权重</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(row, index) in tableData8" :key="index">
                        <td class="cell" style="text-align: center">{{ index + 1 }}</td>
                        <td class="cell" v-if="Object.keys(row).length > 0">{{ row.projectName }}</td>
                        <td class="cell" v-else></td>
                        <td class="cell" v-if="Object.keys(row).length > 0">{{ row.projectLog }}</td>
                        <td class="cell" v-else></td>
                        <td class="cell" v-if="Object.keys(row).length > 0">{{ row.projectSchedule }}</td>
                        <td class="cell" v-else></td>
                        <td class="cell" v-if="Object.keys(row).length > 0">{{ row.projectWeight }}</td>
                        <td class="cell" v-else></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                tableData1: Array(7).fill({}),
                tableData2: Array(7).fill({}),
                tableData3: Array(7).fill({}),
                tableData4: Array(7).fill({}),
                tableData5: Array(7).fill({}),
                tableData6: Array(7).fill({}),
                tableData7: Array(7).fill({}),
                tableData8: Array(7).fill({}),
                weekList: [] // 存储后台返回的数据
                
            };
        },
        mounted() {
            const subDate = this.$route.query.subDate;
            


            // const sunDate = subDate.replace(/\//g, "-");
            // console.info(sunDate);
            this.fetchData(subDate); // 在组件挂载后调用fetchData方法获取数据

        },

        methods: {

            fetchData(subDate) {
                const url = "/admin/pdp/getWeekList";

                const params = {
                    userId: localStorage.getItem("userId"),
                    userName: localStorage.getItem("userName"),
                    subDate: subDate
                };
                // 使用axios或其他方式向后台发送请求

                axios
                    .post(url, params)
                    .then((response) => {
                        // console.info(this.weekList);

                        this.weekList = response.resultSetData;
                        const leftTableData = this.weekList.filter(item => item.pdpStatus === 0);
                        const rightTableData = this.weekList.filter(item => item.pdpStatus === 1);
                        const leftTableData2 = this.weekList.filter(item => item.pdpStatus === 2);
                        const rightTableData2 = this.weekList.filter(item => item.pdpStatus === 3);
                        const leftTableData3 = this.weekList.filter(item => item.pdpStatus === 4);
                        const rightTableData3 = this.weekList.filter(item => item.pdpStatus === 5);
                        const leftTableData4 = this.weekList.filter(item => item.pdpStatus === 6);
                        const rightTableData4 = this.weekList.filter(item => item.pdpStatus === 7);
                        console.log(this.weekList)
                        this.tableData1 = leftTableData.slice(0, 7).concat(Array(7 - leftTableData.length).fill({}));
                        this.tableData2 = rightTableData.slice(0, 7).concat(Array(7 - rightTableData.length).fill({}));
                        this.tableData3 = leftTableData2.slice(0, 7).concat(Array(7 - leftTableData2.length).fill({}));
                        this.tableData4 = rightTableData2.slice(0, 7).concat(Array(7 - rightTableData2.length).fill({}));
                        this.tableData5 = leftTableData3.slice(0, 7).concat(Array(7 - leftTableData3.length).fill({}));
                        this.tableData6 = rightTableData3.slice(0, 7).concat(Array(7 - rightTableData3.length).fill({}));
                        this.tableData7 = leftTableData4.slice(0, 7).concat(Array(7 - leftTableData4.length).fill({}));
                        this.tableData8 = rightTableData4.slice(0, 7).concat(Array(7 - rightTableData4.length).fill({}));

                    })
                    .catch((error) => {
                        console.error(error);
                    });
            },
        },
    };
</script>

<style scoped>
    .oTi {
        width: 100%;
        background-color: #00b0f0;
        height: 50px;
        font-size: 30px;
        font-weight: bold;
        line-height: normal;
    }

    .excel-container {
        display: flex;
        justify-content: space-between;
        height: 100%;
        flex-wrap: wrap;
        gap: 60px;
        background-color: white;
        padding: 10px;
        background-image: url(../assets/6.png);
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: center 60px;

        height: auto;
    }

    .excel-table {
        display: flex;
        gap: 10px;
        flex-grow: 1;
        width: 48%;
    }

    /* 
     */
    .excel-table:nth-child(1),
    .excel-table:nth-child(2) {
        flex-grow: 1;
    }

    .excel-table:nth-child(3),
    .excel-table:nth-child(4) {
        flex-grow: 1;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        table-layout: auto;
    }

    table thead tr {
        justify-content: center;
    }

    table th {
        text-align: center;
    }

    table tbody tr td {
        font-family: Arial, sans-serif;
        font-size: 14px;

    }

    th,
    td {
        border: 1px solid #ccc;
        padding: 4px;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    th {
        background-color: #007bff;
        color: #fff;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    .cell {
        min-width: 50px;
        max-width: 60px;
    }

    .cell:nth-child(2) {
        min-width: 150px;
        max-width: 170px;
    }

    .cell:nth-child(3) {
        min-width: 400px;
        max-width: 438px;
    }
</style>