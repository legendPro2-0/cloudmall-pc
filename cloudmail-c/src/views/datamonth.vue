<template>
    <div class="dataweek">
 
        <div ref="showElem" class="showContainer"></div>
    </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { defineComponent, onMounted,ref} from 'vue';
const showElem = ref();
defineComponent({
    name:'DataMonthView'
});
onMounted(()=>{
    console.log(123);
   // 基于准备好的dom，初始化echarts实例
   var myChart = echarts.init(showElem.value);

// 指定图表的配置项和数据
let option = {
    title: {
    text: '月报表'
  },
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 250],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
        { value: 32, name: 'rose 3' },
        { value: 30, name: 'rose 4' },
        { value: 28, name: 'rose 5' },
        { value: 26, name: 'rose 6' },
        { value: 22, name: 'rose 7' },
        { value: 18, name: 'rose 8' }
      ]
    }
  ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
})

</script>


<style lang="scss" scoped>
.dataweek{
    display: flex;
    justify-content: center;
    align-items: center;
}
.showContainer{
    width: 600px;
    height: 550px;

}
</style>