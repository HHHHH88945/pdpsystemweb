<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <!-- 使用UserProfile组件 -->
      <user-profile></user-profile>
    </div>
  </template>
  
  <script>
  // 导入UserProfile组件
  import UserProfile from '@/components/UserProfile.vue';
  
  export default {
    components: {
      UserProfile, // 注册UserProfile组件
    },
    // 其他页面逻辑
  };
  </script>
  
  <style>
  /* 其他页面样式 */
  </style>


  