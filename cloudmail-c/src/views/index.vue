<template>
   <div class="common-layout">
    <el-container>
      <el-aside width="220px"><img class="logo" src="" alt=""> <el-menu
    default-active="1-1"
    class="el-menu-vertical-demo"
    router
  >
    <el-sub-menu index="/data">
      <template #title>
        <el-icon><TurnOff /></el-icon>
        <span>图表展示</span>
      </template>
        <el-menu-item index="/data/week"><el-icon><TrendCharts /></el-icon>周销量</el-menu-item>
        <el-menu-item index="/data/month"><el-icon><TrendCharts /></el-icon>月销量</el-menu-item>
    </el-sub-menu>

    <el-menu-item index="/banner">
      <el-icon><Money /></el-icon>
      <template #title>轮播图管理</template>
    </el-menu-item>

    <el-menu-item index="/shop">
      <el-icon><Document /></el-icon>
      <template #title>产品管理</template>
    </el-menu-item>
    <el-menu-item index="/userset">
      <el-icon><UserFilled /></el-icon>
      <template #title>用户管理</template>
    </el-menu-item>

  </el-menu></el-aside>
      <el-container>

        
        <el-header><div><el-icon @click="ace"><CaretLeft /></el-icon></div><div class="ace">您好：<el-button type="danger">退出</el-button></div></el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>

  </div>
  
</template>

<script setup>
import { defineComponent } from 'vue';
defineComponent({
    name:'IndexView'
});
const ace = ()=>{
 console.log(123);
}
</script>


<style lang="scss" scoped>

.el-header{
    background-color: #808080;
    display: flex;
    justify-content:space-between;
    align-items: center;

}
.el-aside{
    border-right: 2px solid #ccc;
    /* height: 300px;
 */
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.logo{
    width: 30px;
    height: 30px;
    margin-left: calc(50% - 15px);
    margin-top: 85px;
}
.ace{
    color: #fff;
}
</style>