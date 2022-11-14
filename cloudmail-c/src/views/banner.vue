<template>
    <div>
        <el-button type="primary" @click="handleClick()">添加轮播图</el-button>
        <el-table :data="tableData">
            <el-table-column  prop="id" label="名称" min-width="10%" align="center"/>
            <el-table-column label="图片" min-width="20%" prop="baner" align="center">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <el-image :src="scope.row.baner" contain/>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="prompt" label="提示信息" min-width="25%" align="center"/>
            <el-table-column prop="connect" label="上传时间" min-width="25%" align="center"/>
            <el-table-column  label="操作" min-width="20%" align="center">
            <template #default="scope">
                <el-button link type="primary" size="small" @click="handleDelete(scope.row._id)">删除</el-button>
            </template>
            </el-table-column>
            </el-table>

                <el-dialog v-model="dialogFormVisible" title="添加轮播图">
                <el-form :model="form">
                <el-form-item label="图片序号" :label-width="formLabelWidth">
                    <el-input v-model="form.id" autocomplete="off" />
                </el-form-item>
                <el-form-item label="图片地址" :label-width="formLabelWidth">
                    <el-input v-model="form.baner" autocomplete="off" />
                </el-form-item>
                <el-form-item label="提示信息" :label-width="formLabelWidth">
                    <el-input v-model="form.prompt" autocomplete="off" />
                </el-form-item>
                </el-form>
                <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="handleSendbanner">
                    确定
                    </el-button>
                </span>
                </template>
            </el-dialog>


            <el-dialog v-model="centerDialogVisible" title="提示" width="30%" center>
                    <span>
                    确定删除这张轮播图吗
                    </span>
                    <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="centerDialogVisible = false">取消</el-button>
                        <el-button type="primary" @click="handleDe(whichde)">
                        确定
                        </el-button>
                    </span>
                    </template>
                </el-dialog>
            </div>

</template>

<script setup>
import { defineComponent,ref,reactive,onMounted} from 'vue';
import http from '@/utils/http';

defineComponent({
    name:'BannerView'
})
//表格组件
const handleClick = () => {   //传回scope对象的index来修改或删除 scope对象就是tableData数据的映射
    dialogFormVisible.value =true;
}
const handleDelete = (index) => {   //传回scope对象的index来修改或删除 scope对象就是tableData数据的映射
    centerDialogVisible.value =true;
    whichde.value = index;
}

//拉取后端数据渲染轮播设置图
let tableData = ref([]);


onMounted(()=>{
    getList()
})



//表格最后的按钮组件

const dialogFormVisible = ref(false)    //控制弹出框显示隐藏
const formLabelWidth = '140px'     //控制宽度

//添加轮播图的响应式数据。 可以通过form来向后端传递数据，当作payload。发送这个值去更新
const form = reactive({
  id: '',
  baner:'',
  prompt:'',
})
//添加轮播图的事件，这个事件为让添加框消失，然后把数据发送给后端
const handleSendbanner = ()=>{
    http.post('banners/bnset',{id:form.id,baner:form.baner,prompt:form.prompt}).then((res)=>{
        if(res.data.errcode === '0'){
            console.log("添加成功");
            tableData.value  = res.data.datas;
        }
        getList();
        dialogFormVisible.value = false;
    })
}

//拉取删除完和添加完的数据
const getList = ()=>{
    http.get('banners/bnlist').then((res)=>{
            tableData.value  = res.data;
    });
}
//删除弹出框
const centerDialogVisible = ref(false)
const whichde = ref(0);

const handleDe = (b)=>{
    // whichde.value  发送这个值给后端进行删除
    http.delete('banners/bnupdate',{_id:b}).then((res)=>{
        if(res.data.errcode===0){
            console.log("删除成功");
            getList()
        }
    })
    centerDialogVisible.value = false;
}







</script>

<style lang="scss" scoped>

</style>