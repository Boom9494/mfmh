<template>
  <div class="page-paslogin">
    <!-- 头部 -->
    <div class="paslogin-header">
      <span @click="back"></span>
      <p>登录</p>
    </div>
    <!-- 主体内容 -->
    <div class="paslogin-main">
      <div class="username-box">
        <input type="text" placeholder="请输入手机号" v-model="username">
      </div>
      <div class="password-box">
        <input type="password"  placeholder="请输入密码" v-model="password">
      </div>
      <button class="paslogin-btn" @click="sendLogin">登录</button>
    </div>
  </div>
</template>

<script>
import { pasLogin } from '@/api/login.js'
export default {
  name: 'page-paslogin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    back () {
      this.$router.back(-1)
    },
    // 登录按钮点击事件
    sendLogin () {
      var data = { tel: this.username, password: this.password, paltform: 3 }
      pasLogin(data).then(res => {
        console.log(res)
        if (res.data.code === 1) {
          alert('登录成功，三秒后自动跳转到首页~')
          return
        }
        if (res.data.code === 0) {
          alert('手机号码输入错误')
        } else {
          alert(res.data.msg)
        }
      })
    }
  }

}
</script>

<style lang='scss'>
.page-paslogin{
  height: 100%;
  display: flex;
  flex-direction: column;
  // 头部
  .paslogin-header{
    padding: 0 20px;
    height: 44px;
    display: flex;
    align-items: center;
    span{
      height: 13px;
      width: 13px;
      background: url('../../../public/img/login-esc.png') no-repeat;
      background-size: 100%;
    }
    p{
      flex:1;
      font-size: 17px;
      color: #333;
      font-weight: 500;
      text-align: center;
    }
  }
  // 主体内容
  .paslogin-main{
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    .username-box{
      width: 100%;
      height: 64px;
      font-size: 15px;
      border-bottom: 1px solid #e6e6e6;
      input{
        width: 100%;
        display: block;
        outline: none;
        height: 64px;
        border: none;
        padding: 0;
        font-size: 100%;
      }
    }
    .password-box{
      width: 100%;
      height: 64px;
      font-size: 15px;
      border-bottom: 1px solid #e6e6e6;
      input{
        width: 100%;
        display: block;
        outline: none;
        height: 64px;
        border: none;
        padding: 0;
        font-size: 100%;
      }
    }
    .paslogin-btn{
      background-color: #d2fa00;
      color: #333;
      border-radius: 2px;
      margin-top: 30px;
      margin-bottom: 15px;
      width: 100%;
      height: 44px;
      line-height: 44px;
      text-align: center;
      font-size: 15px;
      outline: none;
      border: none;
    }
  }
}
</style>
