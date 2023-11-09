import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 导入组件
import Login from '../components/Login.vue';
import HomePage from '../components/HomePage.vue';
import dashboard from '../views/dashboard.vue';
import resource from '../views/resource.vue';
import platform  from '../views/platform.vue';
import root  from '../views/root.vue';
import PersonalInfo  from '../views/PersonalInfo.vue';
import managementpage from '../views/managementpage.vue';
import adminPage from '../views/adminPage.vue';
import personnelManagement from '../views/personnelManagement.vue';
import adminiPage from '../views/adminiPage.vue';
import weeklyNewspaper from '../views/weeklyNewspaper.vue';
import mothly from '../views/mothly.vue';
import viewMonthlyReport from '../views/viewMonthlyReport.vue';
import administratorPage from '../views/administratorPage.vue';
import modificationSubmission from '../views/modificationSubmission.vue';
import viewPdp from '../views/viewPdp.vue';
import viewMonth from '../views/viewMonth.vue';
import monthlyReportManagement from '../views/monthlyReportManagement.vue';
import departmentWeeklyReport from '../views/departmentWeeklyReport.vue';
import departmentManagement from '../views/departmentManagement.vue';
import hardwareRoom from '../views/hardwareRoom.vue';
import softwareRoom from '../views/softwareRoom.vue';
import structureRoom from '../views/structureRoom.vue';
import productRoom from '../views/productRoom.vue';
import testRoom from '../views/testRoom.vue';
    







// 创建路由实例
const router = new VueRouter({
  routes: [
     { path: '/', component: Login },  
     {
      path: '/HomePage', 
      component: HomePage, 
      children: [
        
        {
          path:"/",
          component:dashboard,
        },

        {
          path: '/dashboard',
          component: dashboard, 
        },  

        {
          path: '/resource',
          component: resource, 
         
        },

        {
          path: '/platform',
          component: platform, 
        },

        {
          path: '/root',
          component: root, 
         
        },

        {
          path: '/PersonalInfo',
          component: PersonalInfo, 
        },

      {
      path: '/managementpage', 
      component: managementpage,
    },
    {
    path: '/adminPage', 
    component: adminPage,
   
  },
  
  {
    path: '/adminiPage', 
    component: adminiPage,
  },

  {
    path: '/personnelManagement', 
    component:personnelManagement,
    meta: { requiresAdmin: true },
  }, 
   {
    path: '/weeklyNewspaper', 
    component:weeklyNewspaper,
   },
   {
    path: '/mothly', 
    component:mothly,
   },
   {
    path: '/viewMonthlyReport', 
    component:viewMonthlyReport,
   },
   {
    path: '/administratorPage', 
    component:administratorPage,
    meta: { requiresAdmin: true },
    props: route => ({ key: route.fullPath }),//共用同一个页面路由,使用唯一key,
   },
   {
    path: '/modificationSubmission', 
    component:modificationSubmission,
   },
   {
    path: '/viewPdp', 
    component:viewPdp,
   },
   {
    path: '/viewMonth', 
    component:viewMonth,
   },
   {
    path: '/monthlyReportManagement', 
    component:monthlyReportManagement,
   },
   {
    path: '/departmentWeeklyReport', 
    component:departmentWeeklyReport,
   },
   {
    path: '/departmentManagement', 
    component:departmentManagement,
   },
   {
    path: '/softwareRoom', 
    component:softwareRoom,
   },
   {
    path: '/hardwareRoom', 
    component:hardwareRoom,
   },
   {
    path: '/testRoom', 
    component:testRoom,
   },
   {
    path: '/structureRoom', 
    component:structureRoom,
   },
   {
    path: '/productRoom', 
    component:productRoom,
   },
   
   
   
  
   

   
   
   
      ]
    },
  ]
});

router.beforeEach((to, from, next) => {
  const userRole = JSON.parse(localStorage.getItem("isAdmin"));
  if (to.meta.requiresAdmin && userRole !== true) {
    // 不是管理员，弹出提示框
    Vue.prototype.$alert("抱歉 你还没有相关权限 请认证管理", "权限提示", {
      confirmButtonText: "确定",
    }).then(() => {
      // 用户点击确定后，导航到默认页面
      next('/dashboard');
    }).catch(() => {
      // 用户点击取消或关闭弹窗时，可以选择执行其他操作
      // 例如：跳转到其他页面或显示默认页面
      next('/dashboard');
    });
  } else {
    next(); // 继续导航
  }
});


export default router;
