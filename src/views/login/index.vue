<template>
  <div class='page-login'>
    <!-- 头部 -->
    <div class="login-header">
      <div class="header-main">
        <span @click="back"></span>
        <p>登录</p>
      </div>
    </div>
    <!-- 登录注册 -->
    <div class="login-input">
      <div class="username-box">
        <input type="text" placeholder="请输入手机号" v-model="teleNum">
      </div>
      <div class="password-box">
        <input type="text" v-model="testCode" placeholder="请输入验证码">
        <span @click="getTestcode" >获取验证码</span>
      </div>
      <button class="login-btn" @click="toLogin">快速登录</button>
      <router-link to='register'>
        <button class="register-btn">账号注册</button>
      </router-link>
    </div>
    <!-- 自动补白 -->
    <div class="aotu-height"></div>
    <!-- 底部登录方式 -->
    <div class="other-login">
      <div class="other-top">
        <span class="text-line"></span>
        <p>其他登录</p>
        <span class="text-line"></span>
      </div>
      <div class="other-center">
        <router-link to='/paslogin'>
          <dl>
            <dt>
              <img src="../../../public/img/login-my.png" alt="">
            </dt>
            <dd>账号</dd>
          </dl>
        </router-link>
        <router-link to='/paslogin'>
          <dl>
            <dt>
              <img src="../../../public/img/login-wb.png" alt="">
            </dt>
            <dd>微博</dd>
          </dl>
        </router-link>
        <router-link to='/paslogin'>
          <dl>
            <dt>
              <img src="../../../public/img/login-qq.png" alt="">
            </dt>
            <dd>QQ</dd>
          </dl>
        </router-link>
      </div>
      <div class="other-bottom">
        登录即表示同意漫番的
        <a href="/service_agreement" class="">《服务协议》</a>
        和
        <a href="/privacy_policy" class="">《隐私策略》</a>
      </div>

    </div>
  </div>
</template>

<script>
import { getTestcode, sendTestcode } from '@/api/login.js'
export default {

  name: 'login',
  data () {
    return {
      teleNum: '',
      testCode: ''
    }
  },
  components: {

  },
  methods: {
    // 获取验证码点击事件
    getTestcode () {
      var obj = { tel: this.teleNum, type: 1, platfrom: 3 }
      getTestcode(obj).then(res => {
        console.log(res)
        if (res.data.code === 1) {
          alert('验证码发送成功')
        } else {
          alert(res.data.msg)
        }
      })
    },
    // 快速登录点击事件
    toLogin () {
      var data = { tel: this.teleNum, verify: this.testCode, platform: 3 }
      sendTestcode(data).then(res => {
        console.log(res)
        if (res.data.code === 1) {
          alert('登录成功,三秒后自动跳转到首页')
          setTimeout(() => {
            this.$router.push({ path: '/home' })
          }, 3000)
        } else {
          alert(res.data.msg)
        }
      })
    },
    back () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang='scss'>
.page-login{
  height: 100%;
  display: flex;
  flex-direction: column;
  // 头部
  .login-header{
    width: 100%;
    height: 130px;
    background: url('../../../public/img/login.jpg') no-repeat #d2fa00;
    background-size: 100% ;
    background-position-y: bottom;
    .header-main{
      height: 44px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      span{
        width: 14px;
        height: 14px;
        background: url('../../../public/img/login-esc.png') no-repeat;
        background-size: 13px;
      }
      p{
        flex: 1;
        display: flex;
        justify-content: center;
        font-size: 17px;
        color: #333;
        font-weight: 500;
      }
    }
  }
  // 登录注册
  .login-input{
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
    .login-btn{
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
    .register-btn{
      color: #999;
      background-color: #fff;
      width: 100%;
      height: 44px;
      line-height: 44px;
      text-align: center;
      font-size: 15px;
      outline: none;
      border: none;
    }

  }
  // 自动补白
  .aotu-height{
    flex: 1;
  }
  // 底部登录方式
  .other-login{
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    .other-top{
      display: flex;
      font-size: 13px;
      color: #bfbfbf;
      align-items: center;
      justify-content: center;
      .text-line{
        display: inline-block;
        width: 33px;
        border: 1px solid #f2f2f2;
      }
      p{
        display: inline-block;
        margin: 0 10px;
      }
    }
    .other-center{
      width: 100%;
      display: flex;
      box-sizing: border-box;
      padding: 0 15px;
      margin-top: 30px;
      a{
        flex: 1;
        display: inline-block;
        dl{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          dt{
            width: 54px;
            height: 54px;
            img{
              width: 100%;
            }
          }
          dd{
            font-size: 12px;
            color: #999;
            margin-top: 10px;
          }
        }
      }
    }
    .other-bottom{
      margin-top: 30px;
      margin-bottom: 20px;
      text-align: center;
      font-size: 13px;
      color: #bfbfbf;
      a{
        font-size: 13px;
        color: #a2c200;
      }
    }
  }
}
</style>
