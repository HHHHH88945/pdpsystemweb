<template>
  <div>
    <el-select v-model="selectedDepartment" placeholder="请选择部门">
      <el-option
        v-for="item in departments"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <el-table :data="members" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="role" label="职位" width="180"></el-table-column>
      <el-table-column label="操作">  
        <template slot-scope="scope">
          <el-button @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-button @click="handleAdd">添加成员</el-button>

    <el-dialog title="添加成员" :visible.sync="dialogVisible">
      <el-form ref="form" :model="newMember">
        <el-form-item label="姓名">
          <el-input v-model="newMember.name"></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="newMember.role" placeholder="请选择角色">
            <el-option
              v-for="option in roleOptions"
              :key="option.value"
              :label="option.label"
              :value="option.label">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedDepartment: 'department1',
      departments: [
        { value: 'department1', label: '研发中心' },
        { value: 'department2', label: '其他' },
        // 更多部门...
      ],
      members: [],
      dialogVisible: false,
      newMember: {
        name: '',
        role: ''
      },
      roleOptions: [
        { value: '1', label: '软件' },
        { value: '2', label: '硬件' },
        { value: '3', label: '测试' },
        { value: '4', label: '产品' },
        { value: '5', label: '结构' }
      ]
    };
  },
  methods: {
    handleAdd() { 
      this.dialogVisible = true;
    },
    handleDelete(index, member) {
      axios
        .post('/admin/user/deleteById', {
          id: member.id,
          no: this.newMember.name
        })
        .then(response => {
          if (response.status == "1") {
            this.members.splice(index, 1);
            this.$message.success('删除成功');
          } else {
            this.$message.error('删除失败');
          }
        })
        .catch(error => {
          this.$message.error('删除失败');
        });
    },
    handleConfirm() {
      if (this.newMember.name && this.newMember.role) {
        this.newMember.departNum = this.roleOptions.find(option => option.label === this.newMember.role).value;
        axios
          .post('/admin/user/insertUser', {
            no: this.newMember.name,
            departNum: this.newMember.departNum,
            workPosition: 1
          })
          .then(response => {
            // console.log('传入的departNum值为：',  this.newMember.name); 
            this.members.push({
              name: this.newMember.name,
              role: this.newMember.role
            });
            this.dialogVisible = false;
            this.newMember.name = '';
            this.newMember.role = '';
          })
          .catch(error => {
            this.$message.error('添加用户失败');
          });
      } else {
        this.$message.error('姓名和角色不能为空');
      }
    }
  },
  created() {
    axios
      .post('/admin/user/getUserList')
      .then(response => {
        this.members = response.resultSetData;
        this.members.forEach(member => {
          member.name = member.no;
          // this.roleOptions.find(option => option.value === member.departNum).label;
          // member.role = this.roleOptions.find(option => option.value ===  member.departNum).label;
          const roleOption = this.roleOptions.find(option => option.value === member.departNum);
        this.$set(member, 'role', roleOption ? roleOption.label : '');
        return member;
        });
      })
      .catch(error => {
        this.$message.error('获取成员列表失败');
      });
  }
};
</script>

<!-- console.log('传入的departNum值为：', this.newMember.departNum);  -->