<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div :style="{ width: '100%' }">
      <t-swiper :duration="1000" :interval="5000" :navigation="{ size: 'large' }">
        <t-swiper-item >
          <div class="swiper-image" :style="{ height: '300px', backgroundImage: 'url(' + require('../assets/lb.png') + ')' }" @click="$router.push('/adminipage')" />
        </t-swiper-item>
        <t-swiper-item>
          <div class="swiper-image" :style="{ height: '300px', backgroundImage: 'url(' + require('../assets/nb.png') + ')' }" @click="$router.push('/mothly')"/>
        </t-swiper-item>
        <t-swiper-item>
          <div class="swiper-image" :style="{ height: '300px', backgroundImage: 'url(' + require('../assets/kb.png') + ')' }" />
        </t-swiper-item>
      </t-swiper>
    </div>
    <a-calendar>
      <ul slot="dateCellRender" slot-scope="value" class="events">
        <li v-for="item in getListData(value)" :key="item.content">
          <a-badge :status="item.type" :text="item.content" />
        </li>
      </ul>
      <template slot="monthCellRender" slot-scope="value">
        <div v-if="getMonthData(value)" class="notes-month">
          <section>{{ getMonthData(value) }}</section>
          <span>Backlog number</span>
        </div>
      </template>
    </a-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselOptions: {
        
      },
    };
  },
  methods: {

    getListData(value) {
      let listData;
      switch (value.date()) {
        case 8:
          listData = [
            { type: 'warning', content: '项目内容1' },
            { type: 'success', content: '项目内容2' },
          ];
          break;
        case 10:
          listData = [
            { type: 'warning', content: '项目内容1' },
            { type: 'success', content: '项目内容2' },
            { type: 'error', content: '项目内容3' },
          ];
          break;
        case 15:
          listData = [
            { type: 'warning', content: '项目内容1' },
            { type: 'success', content: '项目内容2' },
            { type: 'error', content: '项目内容3' },
            { type: 'error', content: '项目内容4' },
            { type: 'error', content: '项目内容5' },
            { type: 'error', content: '项目内容6' },
          ];
          break;
        default:
      }
      return listData || [];
    },

    getMonthData(value) {
      if (value.month() === 8) {
        return 1394;
      }
    },
    navigateToRoot() {
      // Code to navigate to the root.vue page
    },
  },
};
</script>

<style scoped>
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}

.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}

.notes-month {
  text-align: center;
  font-size: 28px;
}

.notes-month section {
  font-size: 28px;
}

.swiper-image {
  background-size: 1200px auto;
  background-repeat: no-repeat;
  background-position: center top -425px;
  background-color:#ccc;
}
</style>


