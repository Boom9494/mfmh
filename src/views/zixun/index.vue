<template>
  <div class='page-information'>
    <!-- 头部 -->
    <headerIndex>
      <div class="information-left">
        <span class="back" @click="back"></span>
        <p>资讯</p>
      </div>
    </headerIndex>
    <!-- 资讯主体内容 -->
    <div class="information-main" v-if="inforList.length > 0">
      <div class="aL-item" v-for="item in inforList" :key="item.id" >
        <a href="" v-if="item.content_type === 1">
          <div class="aL-item-title">
            <div class="logo">
              <img :src="item.avatar" alt="">
              <span>{{item.user_name}}</span>
            </div>
            <p class="time">发布于 {{item.public_time}}</p>
          </div>
          <img class="aL-item-img" :src="item.works_pic">
          <div class="aL-item-altTit">{{item.title}}</div>
        </a>

        <a href="" >
          <div class="aL-item2" v-show="item.content_type === 2">
              <div class="aL-item-box-left">
                <p class="left-title">{{item.title}}</p>
                <p class="left-alt">发布于 {{item.public_time}}</p>
              </div>
              <div class="aL-item-box-right">
                <img :src="item.avatar" alt="">
              </div>
          </div>
        </a>
      </div>

    </div>
  </div>
</template>

<script>
import headerIndex from '@/components/header'
import { inforCartoon } from '@/api/getCartoons.js'
export default {
  name: 'information',
  data () {
    return {
      inforList: []
    }
  },
  components: {
    headerIndex
  },
  created () {
    inforCartoon().then(res => {
      this.inforList = res.data.data
    })
  },
  methods: {
    back () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang='scss'>
.page-information{
  height: 100%;
  display: flex;
  flex-direction: column;
  .information-left{
    padding: 0 20px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
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
  .information-main{
    flex:1;
    padding: 16px 15px 0 15px;
    .aL-item{
      width: 100%;
      margin-bottom: 30px;
      .aL-item2{
        display: flex;
        justify-content: space-between;
        .aL-item-box-left{
          width: 194px;
          height: 90px;
          .left-title{
            font-size: 16px;
            color: #1a1a1a;
            line-height: 24px;
            margin-top: 5px;
            margin-bottom: 13px;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .left-alt{
            font-size: 12px;
            line-height: 18px;
            color: #999;
          }
        }
        .aL-item-box-right{
          width: 135px;
          height: 90px;
          img{
            width: 100%;
            height: 90px;
          }
        }

      }
      .aL-item-title{
        width: 100%;
        height: 30px;
        padding-bottom: 10px;
        line-height: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo{
          display: inline-block;
          height: 100%;
          color: #1a1a1a;
          font-size: 14px;
          line-height: 30px;
          width: 120px;
          display: flex;
          align-items: center;
          img{
            display: inline-block;
            width: 30px;
            height: 30px;
            border: 1px solid #191919;
            border-radius: 50%;
            margin-right: 10px;
          }
          span{
            line-height: 30px;
          }
        }
        .time{
          color: #999;
          font-size: 12px;
        }
      }
      .aL-item-img{
        display: block;
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
      }
      .aL-item-altTit{
        margin-top: 6px;
        font-size: 16px;
        color: #1a1a1a;
        line-height: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
