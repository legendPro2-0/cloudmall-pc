<template>
    <div>
    <el-input v-model="input" placeholder="输入您要查询的用户" style="width:200px"/> <el-button type="primary" @click="handleSearch()">搜索</el-button>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="date" label="编号" min-width="30%" />
        <el-table-column prop="name" label="邮箱" min-width="30%" />
        <el-table-column fixed="right" label="操作" min-width="30%">
        <template #default>
            <el-button link type="primary" size="small" @click="handleClick"
            >Detail</el-button
            >
            <el-button link type="primary" size="small">Edit</el-button>
        </template>
        </el-table-column>
    </el-table>
    <div class="demo-pagination-block">
                        <div class="demonstration">每页显示条数</div>
                        <el-pagination
                        :currentPage="currentPage2"
                        :page-size="pageSize2"
                        :page-sizes="[5, 10, 20, 50]"
                        :small="small"
                        :disabled="disabled"
                        :background="background"
                        layout="sizes, prev, pager, next"
                        :total="10"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        />

                        </div>
    </div>
</template>

<script setup>

import { defineComponent,ref } from 'vue';

defineComponent({
    name:'UserSetView'
});

const handleClick = () => {
  console.log('click')
}

const tableData = [
  {
    date: '1',
    name: '1234@qq.com',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '3',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '4',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
]

const currentPage2 = ref(5);
const pageSize2 = ref(5);
const small = ref(false);
const background = ref(false);
const disabled = ref(false);
const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}



//搜索框
const input = ref('');

const handleSearch =()=>{

}

</script>

<style lang="scss" scoped>

</style>