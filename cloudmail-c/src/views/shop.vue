<template>
    <h4>商品列表</h4>
    <div class="up">
        <div class="up-content">
            <el-select v-model="value1" multiple placeholder="请选择">
                <el-option v-for="item in optionsCellPhone" :key="item.value" :label="item.label" :value="item.value" />
                <el-option v-for="item in optionsTV" :key="item.value" :label="item.label" :value="item.value" />
                <el-option v-for="item in optionsHouseholdAppliances" :key="item.value" :label="item.label"
                    :value="item.value" />
            </el-select>
        </div>
        <div class="searchContent">
            <el-input v-model="search" placeholder="请输入关键词" clearable style="width: 200px" />
            <el-button type="primary" :icon="Search" @click="searchBtn" style="width: 80px">搜索</el-button>
        </div>
    </div>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column label="序号" width="60">
            <template #default="scope">
                <div style="display: flex; align-items: center">

                    <span style="margin-left: 10px">{{ scope.row.item }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="产品名称" width="120">
            <template #default="scope">
                <el-popover effect="light" trigger="hover" placement="top" width="auto">
                    <template #default>
                        <div>name: {{ scope.row.name }}</div>
                        <!-- <div>address: {{ scope.row.address }}</div> -->
                    </template>
                    <template #reference>
                        <el-tag>{{ scope.row.name }}</el-tag>
                    </template>
                </el-popover>
            </template>
        </el-table-column>
        <el-table-column label="图片" min-width="20%" prop="baner" align="center">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <el-image :src="scope.row.image" contain />
                </div>
            </template>
        </el-table-column>
        <el-table-column label="产品描述" width="180">
            <template #default="scope">
                <el-popover effect="light" trigger="hover" placement="top" width="auto">
                    <template #default>
                        <div>name: {{ scope.row.description }}</div>

                    </template>
                    <template #reference>
                        {{ scope.row.description }}
                    </template>
                </el-popover>
            </template>
        </el-table-column>
        <el-table-column label="单价" width="80">
            <template #default="scope">
                <el-popover effect="light" trigger="hover" placement="top" width="auto">
                    <template #default>
                        <div>name: {{ scope.row.price }}</div>

                    </template>
                    <template #reference>
                        {{ scope.row.price }}
                    </template>
                </el-popover>
            </template>
        </el-table-column>
        <el-table-column label="操作" style="width: 180px">
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
                    style="background: #699cff;color:aliceblue">编辑</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue';
import { defineComponent } from 'vue';
import { ref } from 'vue'
const search = ref('')
defineComponent({
    name: 'ShopView'
})
// const searchBtn = computed(() =>
//   filterTableData.listdata.filter(
//     (data: any) =>
//       !search.value ||
//       data.name.toLowerCase().includes(search.value.toLowerCase())
//   )
// );
// interface User {
//   date: string
//   name: string
//   address: string
// }

// const handleEdit = (index: number, row: User) => {
//   console.log(index, row)
// }
// const handleDelete = (index: number, row: User) => {
//   console.log(index, row)
// }

const tableData = [
    {
        item: '1',
        name: '小米S13',
        pic: '',
        description: '抗摔',
        image:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1638950311.52976915.png',
        price: '2999'
    },
    {
        item: '2',
        name: '小米S13',
        pic: '',
        description: '抗摔',
        image:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1653379001.74977175.png',
        price: '2999'
    },
    {
        item: '3',
        name: '小米S13',
        pic: '',
        description: '抗摔',
        image:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1656916095.89126677.png',
        price: '2999'
    },
    {
        item: '4',
        name: '小米S13',
        pic: '',
        description: '抗摔',
        image:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1648538952.68964350.png',
        price: '2999'
    },
    {
        item: '5',
        name: '小米S13',
        pic: '',
        description: '抗摔',
        image:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1640680211.34933571.png',
        price: '2999'
    }
]
const optionsCellPhone = [
    {
        value: "手机",
        label: "手机"
    }
];
const optionsTV = [
    {
        value: "电视",
        label: "电视"
    }
];
const optionsHouseholdAppliances = [
    {
        value: "家电",
        label: "家电"
    }
];
</script>

<style lang="scss" scoped>
.up {
    display: flex;
    width: 100%;
}

.up-content {
    width: 100px;
    margin-right: 6px;
}

.el-input {
    width: 200px;
    margin-right: 6px;
}
</style>