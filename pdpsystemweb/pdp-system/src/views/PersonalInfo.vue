<template>
  <div id="person">
    <div class="thed">账号信息</div>
    <div class="tzed">
      <p><span>基本信息</span></p>
      <div class="avatar-wrapper">
        <el-upload class="avatar-uploader" action="" :show-file-list="false" :before-upload="beforeAvatarUpload"
                   :on-success="handleAvatarSuccess">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>

      <div class="ava">
        <ul>
          <li>用户名 <el-input v-model="username" size="mini" style="width: 190px;" placeholder="输入用户名"></el-input></li>
          <li>昵称 <el-input v-model="nickname" size="mini" style="width: 190px;" placeholder="输入昵称"></el-input></li>       
          <li>生日 <el-date-picker v-model="date" type="date" placeholder="选择日期" size="mini"></el-date-picker></li>
        </ul>
      </div>
    </div>
    <div class="tyed">
      <p><span>安全设置</span></p>
      <div class="ava">
        <ul>
          <li>登录密码 
            <el-button @click="changePassword" size="mini">修改密码</el-button>
          </li>
          <li>用户 
            <el-button @click="manag" size="mini">认证管理</el-button>
            <el-button v-if="showButton" @click="manageAuthentication" size="mini">认证管理</el-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from "axios";
export default {
  data() {
    return {
      username: localStorage.getItem("userId"), // 绑定用户名的数据
      nickname: localStorage.getItem("userName"), // 绑定昵称的数据
      date: '',
      showButton: true//  改成true ,用于新增管理员账号
    };
  },
  methods: {
  changePassword() {
    this.$prompt('请输入现在的密码', '修改密码', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      inputType: 'password',
      showPassword: false,
    }).then(({ value }) => {
      const oldPassword = value; // 获取用户输入的旧密码
      // 进行旧密码的验证逻辑
      // if (oldPassword === localStorage.getItem("loginPassword")) {
        // 旧密码验证通过，继续进行新密码的输入和更新逻辑
        this.$prompt('请输入新密码', '修改密码', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputType: 'password',
          showPassword: false
        }).then(({ value }) => {
          const newPassword = value; // 获取用户输入的新密码
          this.$prompt('请确认新密码', '修改密码', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputType: 'password',
            showPassword: false
          }).then(({ value }) => {
            const confirmPassword = value; // 获取用户输入的确认密码
            if (newPassword === confirmPassword) {
              // 进行新密码的更新逻辑
              const data = {
                token: localStorage.getItem("token"),
                id: localStorage.getItem("userId"),
                loginPassword: newPassword,
                oldPassword: oldPassword // 使用用户输入的旧密码
              };
              axios.post("admin/user/updateUserPassword", data)
                .then(response => {
                  console.log(response.data);
                  alert("密码修改成功,重新登录!!!");
                  this.$router.push("/");
                })
                .catch(error => {
                  console.error(error);
                  alert("密码修改失败");
                });
            } else {
              alert("两次输入的密码不一致");
            }
          }).catch(() => {
            console.log('取消修改密码');
          });
        }).catch(() => {
          console.log('取消修改密码');
        });
      // } else {
      //   alert("旧密码输入错误");
      // }
    }).catch(() => {
      console.log('取消修改密码');
    });
  },
  
  manageAuthentication() {

    const data = {
    id: localStorage.getItem("userId"),
    no: localStorage.getItem("userName"),
    isAdmin:1,
    isLock:0,
  };
  axios
  .post("admin/user/updateUserById", data)
    .then(response => {
  
      console.log(data);
      alert("账号已成功变为管理员账号");
    })
    .catch(error => {
      console.error(error);
      alert("账号变更失败");
    });
  }
},
}

</script>

<style>
#person {
  position: relative;
  width: 100%;
  font-family: PingFang-SC-Medium;
  font-size: 16px;
  text-align: left;
}

.thed {
  height: 80px;
  position: absolute;
  left: 0;
  margin-left: 30px;
  margin-top: 35px;
}

.tzed {
  width: 26%;
  height: 600px;
  background-color: red;
  position: absolute;
  margin-top: 90px;
  margin-left: 25px;
  padding: 32px;
  min-width: 360px;
  z-index: 10;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
  background: #fff;
}

.tyed {
  padding: 32px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
  width: 73%;
  background: #fff;
  height: 600px;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 90px;
}

.avatar-wrapper {
  margin-top: 50px;
}

.ava {
  width: 100%;
  height: 350px;
  margin-top: 20px;
  padding-top: 32px;
  font-size: 14px;
  color: rgba(0, 0, 0, .6);
}
.ava ul {
  list-style: none;
}
.ava ul li {
  height: 50px;
}


</style>
