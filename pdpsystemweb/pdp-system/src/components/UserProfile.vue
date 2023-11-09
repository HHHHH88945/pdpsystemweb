<template>
  <div id="person">
      <div class="thed"> 账号信息</div>
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
                  <li>用户名 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-input v-model="username" size="mini" style="width: 190px;" placeholder="输入用户名"></el-input></li>
                  <li>昵称 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <el-input v-model="nickname" size="mini" style="width: 190px;" placeholder="输入昵称"></el-input></li>
                  <li>性别 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <select name="gender">
                          <option value="male"> 男 </option>
                          <option value="female"> 女 </option>
                          <option value="other"> 其他 </option>
                      </select>
                  </li>
                  <li> 生日 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <el-date-picker v-model="date" type="date" placeholder="选择日期" size="mini"></el-date-picker></li>
              </ul>
          </div>
      </div>
      <div class="tyed">
          <p><span> 安全 设置 </span></p>
          <div class="ava">
              <ul>
                  <li>
                       登录密码 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-button @click="changePassword" size="mini">修改密码</el-button>
                    </li>
                    <li>
                       昵称 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-button @click="changeNickname" size="mini">修改昵称</el-button>
                    </li>
                    <li>
                       性别 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-button @click="changeGender" size="mini">修改性别</el-button>
                    </li>
                    <li>
                       用户 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-button @click="manageAuthentication" size="mini">认证管理</el-button>
                    </li>
                </ul>  
          </div>
      </div>
  </div>
</template>

<script>
  
export default {
  data() {
  return {
    username: '', // 绑定用户名的数据
    nickname: '', // 绑定昵称的数据
    date: ''
  };
},
  methods: {
modifyPassword() {
  
  if (confirm("是否要修改密码？")) {
    
    console.log("密码已修改");
  }
},
modifyNickname() {
  
  const newNickname = prompt("请输入新的昵称：");
  if (newNickname !== null) {
 
    console.log("昵称已修改为：" + newNickname);
  }
},
modifyGender() {
 
  const newGender = prompt("请输入新的性别：");
  if (newGender !== null) {
  
    console.log("性别已修改为：" + newGender);
  }
},
manageAuthentication() {

  console.log("跳转到用户认证管理页面");
},
},
};
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