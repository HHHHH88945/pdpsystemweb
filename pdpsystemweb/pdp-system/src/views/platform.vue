<template>
  <div class="chart-container-wrapper">
    <div id="container1" class="chart-container-half chart-container"></div>
    <div id="container2" class="chart-container-half chart-container"></div>     
  </div>
</template>

<script>
import { Chart } from '@antv/g2';
const events = [
 { name: '软件室', startTime: 1, endTime: 4 },
 { name: '硬件室', startTime: 3, endTime: 13 },
 { name: '产品室', startTime: 5, endTime: 8 },
 { name: '结构室', startTime: 9, endTime: 13 },
 { name: '其他', startTime: 10, endTime: 14 },
];

export default {
name: 'YourPageName',
mounted() {
  this.renderChart1();
  this.renderChart2();
},

methods: {
  renderChart1() {
    const chart = new Chart({
      container: 'container1',
      width: this.container1Width, // 使用data中定义的变量
      height: this.container1Height,
    });
    chart.coordinate({ type: 'theta' });
    chart
.interval()

.data([
{ genre: '软件室', sold: 200 },
        { genre: '硬件室', sold: 200 },
        { genre: '结构室', sold: 200 },
        { genre: '产品室', sold: 200 },
        { genre: '其他', sold: 200 },
])
.transform({ type: 'stackY' })
.encode('color', 'genre')
.encode('y', 'sold')
.animate('enter', { type: 'waveIn', duration: 1000 });
chart.render();
  },
  renderChart2() {
    const chart = new Chart({
      container: 'container2',    
      width: this.container2Width, 
      height: this.container2Height,
    });
    chart.coordinate({ transform: [{ type: 'transpose' }]});
    chart
      .interval()
      .data(events) 
      .encode('x', 'name')
      .encode('y', ['endTime', 'startTime'])
      .encode('color', 'name')
      .encode('enterDuration', (d) => d.endTime - d.startTime)
      .encode('enterDelay', 'startTime')
      .scale('enterDuration', { 
        zero: true,
        range: [0, 3000],
      });
    chart.render();
  },
  getContainerWidth(containerId) {
    const container = document.getElementById(containerId);
    return container.offsetWidth;
  },
  getContainerHeight(containerId) {
    const container = document.getElementById(containerId);
    return container.offsetHeight;
  },
},
};
</script>

<style>

.chart-container {
background-color: white;
box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
margin-bottom: 20px;
}

.chart-container-wrapper {
display: flex;
justify-content: space-between;
width: 100%;
height:80%;
margin-top:120px;
padding-left: 100px;
padding-right: 100px;
}

.chart-container-half {
flex: 1;
width: 50%;
height: 100%;
}

</style>


