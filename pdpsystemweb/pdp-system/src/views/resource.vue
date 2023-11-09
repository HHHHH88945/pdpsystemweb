<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="excel-container">
    <div class="oTi">研发中心周度总结</div>
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
          <tr v-for="(row, index) in leftTableData" :key="index">
            <td class="cell" style="text-align: center">{{ index + 1 }}</td>
            <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[1] }}</td>
            <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[2] }}</td>
            <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[3] }}</td>
            <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[4] }}</td>
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
          <tr v-for="(row, index) in rightTableData" :key="index">
            <td class="cell" style="text-align: center">{{ index + 1 }}</td>
            <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[1] }}</td>
            <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[2] }}</td>
            <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[3] }}</td>
            <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[4] }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="width:100%;background-color: black;height: 6px ;">  </div>

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
          <tr v-for="(row, index) in leftTable2Data" :key="index">
            <td class="cell" style="text-align: center">{{ index + 1 }}</td>
            <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[1] }}</td>
            <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[2] }}</td>
            <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[3] }}</td>
            <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[4] }}</td>
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
          <tr v-for="(row, index) in rightTable2Data" :key="index">
            <td class="cell" style="text-align: center">{{ index + 1 }}</td>
            <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[1] }}</td>
            <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[2] }}</td>
            <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[3] }}</td>
            <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[4] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  <div class="oTi" >研发中心周度计划</div>
<!-- Right Table 2 -->
<div class="excel-table">
  <table class="left-table" :style="{ height: leftTableHeight,width:leftTableWidth}" ref="leftTable3">
    <thead>
      <tr>
        <th >序号</th>
        <th>任务项目</th>
        <th>项目内容</th>
        <th>完成情况</th>
        <th>权重</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in leftTable3Data" :key="index">
        <td class="cell" style="text-align: center">{{ index + 1 }}</td>
        <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[1] }}</td>
        <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[2] }}</td>
        <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[3] }}</td>
        <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[4] }}</td>
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
      <tr v-for="(row, index) in rightTable3Data" :key="index">
        <td class="cell" style="text-align: center">{{ index + 1 }}</td>
        <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[1] }}</td>
        <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[2] }}</td>
        <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[3] }}</td>
        <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[4] }}</td>
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
      <tr v-for="(row, index) in leftTable4Data" :key="index">
        <td class="cell" style="text-align: center">{{ index + 1 }}</td>
        <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[1] }}</td>
        <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[2] }}</td>
        <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[3] }}</td>
        <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[4] }}</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Right Table 2 -->

<div class="excel-table">
  <table class="right-table" :style="{ height: rightTableHeight }" ref="rightTable4">
    <thead>
      <tr >
        <th>序号</th>
        <th>任务项目</th>
        <th>项目内容</th>
        <th>完成情况</th>
        <th>权重</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in rightTable4Data" :key="index">
        <td class="cell" style="text-align: center">{{ index + 1 }}</td>
        <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[1] }}</td>
        <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[2] }}</td>
        <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[3] }}</td>
        <td class="cell" contenteditable="true" @input="adjustTableHeight">{{ row[4] }}</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="oBtn">
  <button class="save" @click="saveData" >保存</button>
  <button class="submit" @click="submitData">提交</button>
</div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  data() {
  return {
    leftTableHeight: 'auto',
    rightTableHeight: 'auto',
    leftTableData: Array(7).fill([]),
    rightTableData: Array(7).fill([]),
    // 其他表格数据也添加7个空的数组元素
    leftTable2Data: Array(7).fill([]),
    rightTable2Data: Array(7).fill([]),
    leftTable3Data: Array(7).fill([]),
    rightTable3Data: Array(7).fill([]),
    leftTable4Data: Array(7).fill([]),
    rightTable4Data: Array(7).fill([])
  };
},
  created() {
    const savedData = localStorage.getItem('tableData');
    if (savedData) {
      const data = JSON.parse(savedData);
      this.leftTableData = data.leftTableData || [];
      this.rightTableData = data.rightTableData || [];
      this.leftTable2Data = data.leftTable2Data || [];
      this.rightTable2Data = data.rightTable2Data || [];
      this.leftTable3Data = data.leftTable3Data || [];
      this.rightTable3Data = data.rightTable3Data || [];
      this.leftTable4Data = data.leftTable4Data || [];
      this.rightTable4Data = data.rightTable4Data || [];
    }
  },
  methods: {
    saveData() {
      const data = {
        leftTableData: this.getTableData(this.$refs.leftTable),
          rightTableData: this.getTableData(this.$refs.rightTable),
          leftTable2Data: this.getTableData(this.$refs.leftTable2),
          rightTable2Data: this.getTableData(this.$refs.rightTable2),
          leftTable3Data: this.getTableData(this.$refs.leftTable3),
          rightTable3Data: this.getTableData(this.$refs.rightTable3),
          leftTable4Data: this.getTableData(this.$refs.leftTable4),
          rightTable4Data: this.getTableData(this.$refs.rightTable4),        
      };
      localStorage.setItem('tableData', JSON.stringify(data));
           alert('数据已保存！');
    },
    submitData() {
      if (confirm("本周周报只可提交一次请检查,是否确认提交？")) {
        const data1 = {
          leftTableData: this.getTableData(this.$refs.leftTable),
          rightTableData: this.getTableData(this.$refs.rightTable),
          leftTable2Data: this.getTableData(this.$refs.leftTable2),
          rightTable2Data: this.getTableData(this.$refs.rightTable2),
          leftTable3Data: this.getTableData(this.$refs.leftTable3),
          rightTable3Data: this.getTableData(this.$refs.rightTable3),
          leftTable4Data: this.getTableData(this.$refs.leftTable4),
          rightTable4Data: this.getTableData(this.$refs.rightTable4),
        };
       console.log(data1);
        const params = {
          userId: localStorage.getItem("userId"),
          userName: localStorage.getItem("userName"),
          list: JSON.stringify(data1)
        };
        axios
        .post(`/admin/pdp/writePdp`, params)
        .then(res => {
          
          this.showMessage(res.msg, 'success');
          
          //提交成功后发送请求，获取最新数据
        
        });
        this.$router.push('/dashboard');
      } 
    },
    getTableData(tableRef) {
      const table = tableRef;
      const rows = Array.from(table.querySelectorAll('tbody tr'));
      const data = rows.map(row => {
        const cells = Array.from(row.querySelectorAll('.cell'));
        return cells.map(cell => cell.textContent);
      });
      return data;
    },
    
  },
  
};
</script>
<style scoped>
.oTi{
  width: 100%;
  background-color: #00B0F0;
  height: 50px;
  font-size: 30px;
  font-weight: 1000;
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
    /* table thead tr:nth-child(4),
    table thead tr:nth-child(5),
    table thead tr:nth-child(6),
    table thead tr:nth-child(7),
    table thead tr:nth-child(8) {
  background-color: #FF0000;
} */
table tbody tr td{
        font-family: Arial, sans-serif;
         font-size: 14px;
        
    }
th, td {
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
.cell{
  min-width: 64px;
  max-width: 64px;
}
.cell:nth-child(2) {
  min-width: 150px;
  max-width: 170px;
}
.cell:nth-child(3) {
  min-width: 400px;
  max-width: 438px;
}
.oBtn {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 45px;
  font-size: 30px;
  font-weight: 1000px;
  position: fixed;
  bottom: 0;
  background-color: #ADD8E6;
  box-shadow: 0 0 5px #FFA500, 0 0 10px #FFA500;
  border: 1px solid cyan;
  border-radius: 10%;
}

.submit {
  width: 50%;
  height: 100%;
  background-color: #00B0F0;
  border: 0;
}

.save {
  width: 50%;
  height: 100%;
  background-color: #D3D3D3;
  border: 0;
}
.oBtn:hover{
  box-shadow: 0 0 5px #FFA500,0 0 10px #FFFFFF , 0 0 20px #D3D3D3, 0 0 30px #FFFF00, 0 0 50px #FF0000;
}
</style>
<!-- eslint-disable vue/multi-word-component-names -->
