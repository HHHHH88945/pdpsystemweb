<template>
  <div>
    <t-space style="width: 350px;">
      <t-form :data="formData" ref="form" @reset="onReset" @submit="onSubmit" :colon="true" :labelWidth="0">
        <div class="systemName">PDP管理系统</div>
        <t-form-item name="account">
          <t-input clearable v-model="formData.account" placeholder="请输入账户名">
            <desktop-icon slot="prefix-icon"></desktop-icon>
          </t-input>
        </t-form-item>
        <t-form-item name="password">
          <t-input type="password" clearable v-model="formData.password" placeholder="请输入密码">
            <lock-on-icon slot="prefix-icon"></lock-on-icon>
          </t-input>
        </t-form-item>
        <t-form-item>
          <t-button theme="primary" type="submit" block>登录</t-button>
        </t-form-item>
           <!-- 注册按钮 -->

      </t-form>
    </t-space>
  </div>
</template>


<script>
  import { DesktopIcon, LockOnIcon } from 'tdesign-icons-vue';
  const INITIAL_DATA = {
    account: '',
    password: '',
  };
  export default {
    components: {
      DesktopIcon,
      LockOnIcon,
    },
    data() {
      return {
        formData: { ...INITIAL_DATA },
      };
    },
    methods: {
      onReset() {
        this.$message.success('重置成功');
      },
      onSubmit({ validateResult, firstError }) {
        if (validateResult === true) {
          this.$emit('login', this.formData);
        } else {
          console.log('Errors: ', validateResult);
          this.$message.warning(firstError);
        }
      },
      onRegister() {
    //注册账号
    },
    },
  };
</script>
<style scoped>
  .systemName{
    font-size: 36px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: 0;
    text-transform: none;
    margin-bottom:60px;
    color: #323232;
    font-style: normal;

  }
</style>
