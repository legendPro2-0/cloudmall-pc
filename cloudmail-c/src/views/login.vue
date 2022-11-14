<template>
  <div>
    <!-- <h2 style="text-align: center;">后台管理登录</h2> -->
    <el-form 
    ref="ruleFormRef" 
    :model="ruleForm"
    status-icon 
    :rules="rules" 
    label-width="120px" 
    class="demo-ruleForm">
      <!-- 登录 验证 收集数据 -->
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" type="text" autocomplete="on" />
      </el-form-item>

      <!-- 登录管理平台的使用者密码 -->
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" autocomplate="off" />
        
      </el-form-item>

      <!-- 登录按钮 -->
      <el-row :gutter="20">
        <el-col :span="20">
          <el-button class="login" type="success" :round="true" @click="submitForm(ruleFormRef)">登录</el-button>
        </el-col>
        <!--记住密码 -->
        <el-col :span="4">
          <el-switch v-model="controlswitch" inline-prompt active-text="是" inactive-text="否" />
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>



<script setup>
import { ref } from 'vue'
import { defineComponent } from 'vue';
const ruleFormRef = ref()
defineComponent({
  name:'LoginView'
});
  //控制记住密码
  const controlswitch = ref(true)
 
  
  // 收集用户名
  const ruleForm = ref( { username:'',password:''} );
  // 收集账号规则
  const rules = ref(
    {
      username:[{ required: true, message: '请输入用户名', trigger: 'blur' }],
      password:[
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 6, max: 6, message: '请输入六位密码', trigger: 'blur' }
               ]
    }
  );
    
  const submitForm=(formEl)=>{
    if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log(ruleForm.value)
      
    } else {
      console.log('error submit!')
      return false
    }
  })
    }

</script>

<style lang="scss" scoped>
h2{
 margin-top: 200px;
 font-size: 60px;
}
.el-form{
 width: 500px;
 margin: 20px auto;
 margin-top: 20px;
}
.login{
 width: 60%;
 margin-left: 140px;
}
#app{
 height: 100%;
 width: 100%;
 overflow: hidden;
}

</style>