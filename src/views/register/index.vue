<template>
  <div class='page-register'>
    <!-- 头部 -->
    <div class="register-header">
      <span @click="back"></span>
      <p>注册</p>
    </div>
    <!-- 主体内容 -->
    <div class="register-main">
      <div class="username-box">
        <input type="text" placeholder="请输入手机号" v-model="teleNum">
      </div>
      <div class="password-box">
        <input type="text" v-model="testcode" placeholder="请输入验证码">
        <span disabled='disabled' @click="getCode">获取验证码</span>
      </div>
      <span class="register-checkedbox" style="padding: 0px;">
        <input type="checkbox" v-model="isChecked">
        同意漫番的
        <a href="" >《服务协议》</a>
        和
        <a href="">《隐私策略》</a>
      </span>
      <!-- 注册按钮 -->
      <button  @click="signup" class="register-btn">注册</button>
    </div>
  </div>
</template>

<script>
import { getTestcode, sendTestcode } from '@/api/login.js'
export default {
  name: 'register',
  data () {
    return {
      teleNum: '',
      isChecked: false,
      testcode: ''
    }
  },
  methods: {
    back () {
      this.$router.back(-1)
    },
    // 获取验证码按钮
    getCode () {
      var data = { tel: this.teleNum, type: '1', platfrom: 3 }
      getTestcode(data).then(res => {
        console.log(res)
        if (res.data.code === 1) {
          alert('验证码发送成功')
        } else {
          alert(res.data.msg)
        }
      })
    },
    // 注册账号按钮
    signup () {
      if (!this.isChecked) {
        alert('请先同意协议')
        return
      }
      if (this.teleNum && this.testcode) {
        var data = { tel: this.teleNum, verify: this.testcode, platfrom: 3 }
        sendTestcode(data).then(res => {
          // console.log(res)
          if (res.data.code === 1) {
            alert('注册成功,3秒后自动跳转到首页~')
            setTimeout(() => {
              this.$router.push({ path: '/home' })
            }, 3000)
          } else {
            alert(res.data.msg)
          }
        })
      } else {
        alert('手机号码或者验证码不能为空！')
      }
    }
  }
}
</script>

<style lang='scss'>
.page-register{
  height: 100%;
  display: flex;
  flex-direction: column;
  // 头部
  .register-header{
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
  // 主体
  .register-main{
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    padding: 0 20px;
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
        font-size: 100%;
        padding: 0;
      }
    }
    .password-box{
      width: 100%;
      height: 64px;
      line-height: 64px;
      font-size: 15px;
      border-bottom: 1px solid #e6e6e6;
      input{
        float: left;
        width: calc(100% - 108px);
        outline: none;
        height: 64px;
        font-size: 100%;
        border: none;
        padding: 0;
      }
      span{
        color: rgb(162, 194, 0);
        display: inline-block;
        width: 88px;
        float: right;
        color: #a2c200;
      }
    }
    .register-checkedbox{
      display: inline-block;
      width: 100%;
      display: flex;
      color: #bfbfbf;
      margin-top: 15px;
      font-size: 13px;
      align-items: center;
      input{
        display: inline-block;
        outline: none;
        width: 13px;
        height: 13px;
        border: 1px solid #333;
        background-color: #fff;
        margin-right: 10px;
        margin: 0 10px 0 0;
      }
      a{
        color:#a2c200;
      }
    }
    .register-btn{
      width: 100%;
      height: 44px;
      line-height: 44px;
      text-align: center;
      font-size: 15px;
      outline: none;
      border: none;
      background-color: #d2fa00;
      color: #333;
      border-radius: 2px;
      margin-top: 30px;
      margin-bottom: 15px;
    }
  }
}

</style>
