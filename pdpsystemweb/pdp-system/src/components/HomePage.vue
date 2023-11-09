<!--  eslint-disable vue/valid-template-root -->
<!--  eslint-disable vue/multi-word-component-names  -->
<template>
  <div class="tdesign-demo-item--layout">
    <t-layout>
      <t-header>
        <t-head-menu value="item1" height="120px">
          <img slot="logo" width="136" class="logo" src="../assets/logo.png" alt="logo" />
          <template>
            <div class="center-text">PDP管理系统</div>
          </template>
          <template #operations>

            <a href="javascript:;" @mouseover="showDay" @mouseout="hideDay" class="reminder-link">
              <icon class="t-menu__operations-icon" name="notification-filled" />
              <div v-if="show" class="time-popup" style="width:500px;height:100%;text-align: center;margin-bottom: 30px;font-size: 14px;">
                {{currentDay}}
            </div>
            </a>
            <a @click="confirmLogout">
              <icon class="t-menu__operations-icon" name="user-arrow-left" />
            </a>
          </template>
        </t-head-menu>
      </t-header>
      <t-layout>
        <t-aside style="border-top: 1px solid var(--component-border);height: 100vh;">
          <t-menu theme="light"  style="margin-right: 50px" height="550px">
            <t-menu-item value="dashboard" @click="$router.push('/dashboard')" >
              <icon slot="icon" name="dashboard" />
              首页
            </t-menu-item>
            <t-submenu value="resource" >
              <template #title>
                <icon slot="icon" name="sticky-note" />
                PDP计划表
              </template>
              <t-menu-item value="subitem3"  @click="$router.push('/adminiPage')">我的周报</t-menu-item>
              <t-menu-item value="subitem4" @click="$router.push('/mothly')">我的月报</t-menu-item>
            </t-submenu>
            <t-submenu value="root">
              <template #title>
                <icon slot="icon" name="chart-combo" />
                统计分析
              </template>
              <t-menu-item value="subitem5" @click="$router.push('/platform')">数据统计</t-menu-item>
              <!-- <t-menu-item value="subitem6">图标信息</t-menu-item> -->
            </t-submenu>


            <t-submenu value="departmentManagement">
              <template #title>
                <icon slot="icon" name="user-setting" />
                科室管理
              </template>
              <t-menu-item value="subitem15" @click="$router.push('/softwareRoom')">科室周报管理</t-menu-item>

              <t-menu-item value="subitem16" @click="$router.push('/platform')">科室月报管理</t-menu-item>
              <!-- <t-menu-item value="subitem6">图标信息</t-menu-item> -->
            </t-submenu>

            <t-submenu value="platform">
              <template #title>
                <icon slot="icon" name="brightness" />
                系统管理
              </template>
              <t-menu-item value="subitem7" @click="$router.push('/administratorPage')">周报管理</t-menu-item>
              <t-menu-item value="subitem10" @click="$router.push('/monthlyReportManagement')">月报管理</t-menu-item>
              <!-- <t-menu-item value="subitem11" @click="$router.push('/departmentWeeklyReport')">月报超级管理</t-menu-item> -->
              <t-menu-item value="subitem8" @click="$router.push('/personnelManagement')">人员管理</t-menu-item>
            </t-submenu>
            <t-submenu value="loda">
              <template #title>
                <icon slot="icon" name="user-circle" />
                个人中心
              </template>
              <t-menu-item value="subitem9" @click="$router.push('/PersonalInfo')">个人信息</t-menu-item>
              <!-- <t-menu-item value="subitem01">修改密码</t-menu-item> -->
            </t-submenu>
            <!-- <t-submenu value="plat">
              <template #title>
                <icon slot="icon" name="c-platform"/>
                统计分析
              </template>
              <t-menu-item value="subitem11">子菜单11</t-menu-item>
              <t-menu-item value="subitem12">子菜单12</t-menu-item>
            </t-submenu> -->

          </t-menu>
        </t-aside>
        <t-layout style="height: 91vh; overflow: auto;">
          <t-content>
            <router-view></router-view>
          </t-content>
          <t-footer>
            Copyright @ 2019-
            {{ new Date().getFullYear() }} infohand. All Rights Reserved
          </t-footer>
        </t-layout>
      </t-layout>
    </t-layout>
  </div>
</template>

<script>
  import { Icon } from 'tdesign-icons-vue';
  export default {

    components: {
      Icon,
    },
    data: () => {
      return { 
        subitem3: null ,
        show:true,
        currentDay: '',
        
      }
    },
    methods: {
   
      confirmLogout() {
        if (confirm("确定要退出登录吗？")) {
          this.$router.push('/');
        }
      },
      showDay() {
        this.show = true;
        const days = ['星期天', '星期一', '星期二', '星期三', '星期四', '周五', '星期六'];
        const today = new Date().getDay();
        this.currentDay = days[today];
        
        if (this.currentDay === '周五') {
            this.currentDay = '今天是周五,你的pdp完成了吗';
        }else{
          this.currentDay = '今天是' + this.currentDay;
        }
    },
    hideDay() {
        this.show = false;
    },
    isActive(value) {
        return this.activeMenuItem === value;
      },
      handleClick(value) {
        this.activeMenuItem = value;
        this.$router.push('/dashboard');
      }
  }
}
</script>

<style>
  body {
    overflow: hidden;
  }

  
  .center-text {
    text-align: center;
    font-size: 42px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #323232;
    font-size: 36px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: 0;
    text-transform: none;
    font-style: normal;
  }


</style>