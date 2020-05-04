<template>
  <div class='page-my'>
    <!-- 头部 -->
    <myHeader>
      <div class="my-left">
        <span class="back" @click="back"></span>
        <p>我的</p>
      </div>
    </myHeader>
    <!-- 主体内容 -->
    <div class="my-main">
      <!-- 个人信息 -->
      <div class="my-info">
        <div class="info-left">
          <router-link to="login">
            <div>
              <p>登录</p>
              <span>登录享受更多功能</span>
            </div>
          </router-link>
        </div>
        <div class="info-right">
          <img src="../../../public/img/mylogo.png" alt="">
        </div>
      </div>
      <!-- 我的账户 -->
      <div class="my-account">
        <div class="account-left">
          <p>我的账户</p>
          <span>登录后查看</span>
        </div>
        <div class="account-right"></div>
      </div>
      <!-- 隔离带 -->
      <div class="black"></div>
      <!-- 观看记录 收藏 -->
      <div class="my-list">
        <!-- 观看记录 -->
        <div class="my-history">
          <div class="history-left">
            <i></i>
            <p>观看记录</p>
          </div>
          <div class="history-right">
            <span>暂无更多记录</span>
            <b></b>
          </div>
        </div>
        <!-- 我的收藏 -->
        <div class="my-love">
          <div class="love-left">
            <i></i>
            <p>我的收藏</p>
          </div>
          <div class="love-right">
            <span>登录后查看</span>
            <b></b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from '@/components/header'
export default {

  name: 'my',
  components: {
    myHeader
  },
  methods: {
    back () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang='scss'>
.page-my{
  display: flex;
  height: 100%;
  flex-direction: column;
  .my-left{
    padding: 0 20px;
    flex: 1;
    display: flex;
    align-items: center;
    span{
      margin-right: 10px;
      width: 9px;
      height: 16px;
      background: url('../../../public/img/back.png') no-repeat;
      background-size: 9px 16px;
    }
    p{
      font-size: 17px;
      color: #333;
      line-height: 44px;
    }
  }
  // 主体内容
  .my-main{
    flex: 1;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    // 个人信息
    .my-info{
      width: 100%;
      box-sizing: border-box;
      background-color: #fff;
      height: 132px;
      display: flex;
      align-items: center;
      .info-left{
        flex: 1;
        div{
          display: flex;
          flex-direction: column;
          p{
            width: 100%;
            font-size: 24px;
            color: #333;
            font-weight: 900;
          }
          span{
            margin: 0;
            font-size: 12px;
            color: #999;
            margin-top: 10px;
          }
        }
      }
      .info-right{
        height: 60px;
        width: 60px;
        img{
          width: 100%;
        }
      }
    }
    // 我的账户
    .my-account{
      width: 100%;
      height: 90px;
      background: url('../../../public/img/mybg.png') no-repeat;
      background-size: 100% 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      margin-bottom: 20px;
      box-sizing: border-box;
      .account-left{
        display: flex;
        flex-direction: column;
        p{
          font-size: 18px;
          font-weight: 500;
          color: #333;
          margin-bottom: 12px;
        }
        span{
          font-size: 14px;
          color: #999;
        }
      }
      .account-right{
        width: 7px;
        height: 12px;
        background: url('../../../public/img/my-right.png') no-repeat;
        background-size: 7px 12px;
      }
    }
    // 隔离带
    .black{
      background: #eeeeee;
      height: 15px
    }
    // 观看记录 我的收藏
    .my-list{
      width: 100%;
      height: 90px;
      // 观看记录
      .my-history{
        width: 100%;
        height: 64px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .history-left{
          display: flex;
          align-items: center;
          i{
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url('../../../public/img/my-history.png') no-repeat;
            background-size: 100%;
            margin-right: 10px;
          }
          p{
            font-size: 16px;
            color: #333;
          }
        }
        .history-right{
          display: flex;
          align-items: center;
          b{
            display: inline-block;
            width: 8px;
            height: 14px;
            background: url('../../../public/img/his-right.png') no-repeat;
            background-size: 100%;
            margin-left: 10px;
          }
          span{
            font-size: 14px;
            color: #999;
          }
        }

      }
      // 收藏
      .my-love{
        width: 100%;
        height: 64px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .love-left{
          display: flex;
          align-items: center;
          i{
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url('../../../public/img/my-love.png') no-repeat;
            background-size: 100%;
            margin-right: 10px;
          }
          p{
            font-size: 16px;
            color: #333;
          }
        }
        .love-right{
          display: flex;
          align-items: center;
          b{
            display: inline-block;
            width: 8px;
            height: 14px;
            background: url('../../../public/img/his-right.png') no-repeat;
            background-size: 100%;
            margin-left: 10px;
          }
          span{
            font-size: 14px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>
