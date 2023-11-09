<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login-page">
    <video autoplay muted loop id="background-video">
      <source src="../assets/8.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="login-container">
      <div class="back">
        <img slot="logo" width="136px" class="logo" src="../assets/logo.png" alt="logo" />
        <tencent-login @login="handleLogin" class="telgin">
        </tencent-login>
      </div>
    </div>
    <div class="cnnta" >
      <img src="../assets/2.png" alt="" >
    </div>
  </div>
</template>
<script>

  import TencentLogin from '../components/TencentLogin.vue';
  export default {
    components: {
      'tencent-login': TencentLogin
    },
    data() {
      return {
        username: '',
        password: '',
        error: ''
      }
    },
    mounted() {
      this.drawOnCanvas();
    },
    methods: {
      handleLogin(formData) {

        // if (formData.account === 'admin' && formData.password === 'password') {
        //
        //   this.$router.push('/HomePage');
        // } else {
        //
        //   this.error = 'Invalid username or password.';
        // }
        let params = {
          "no": formData.account,
          "loginPassword": formData.password
        }
        //登录请求
        this.axios.post(`/admin/user/loginUser`, params).then(res => {
          if ("1" == res.status) {//登录成功 保存token到localStorage

            
            localStorage.setItem("loginPassword", res.resultSetData.loginPassword);
            localStorage.setItem("token", res.resultSetData.token);
            localStorage.setItem("userId", res.resultSetData.id);
            localStorage.setItem("userName", res.resultSetData.no);
            localStorage.setItem("isAdmin", JSON.stringify(res.resultSetData.isAdmin));
            //显示登录成功消息
            this.showMessage(res.msg, 'success');
            //跳转到首页
            this.$router.push("/HomePage");
          } else {
            this.showMessage(res.msg, 'error');
          }
        });
      },
      // 其他方法和逻辑
    },
    drawOnCanvas() {
      const canvas = document.getElementById('background-canvas');
      const context = canvas.getContext('2d');
      const backgroundImage = new Image();
      backgroundImage.src = require('../assets/3.png');
      backgroundImage.onload = () => {
        context.drawImage(backgroundImage, 10, -35, canvas.width, canvas.height);
        this.login();
      };
    }
  };
</script>
<style scoped>
  .login-page {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  #background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .cnnta {
    position: absolute;
    top: 0;
    left: 0;
  margin-top: 210px;
    z-index: 5;
    width: 56vw;
    height:65vh;
  }

  .cnnta img {
    width: 100%;
    
  }

  .login-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
        /* width:70vh; */
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .telgin {
    margin-left: 20px;
    margin-top: 160px;
  }

  .back {
    margin-left: 920px;

    width: 510px;
    height: 630px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid hsla(0, 0%, 100%, 0);
    display: flex;
    flex-direction: column;
    position: relative;

  }

  .logo {
    position: absolute;
    left: 26px;
    top: 42px;
  }
</style>
<!-- eslint-disable vue/multi-word-component-names -->
<!-- -->