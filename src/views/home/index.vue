<template>
  <div class='page-home'>
    <!-- 头部内容 -->
    <headerindex>
      <img src="../../../public/img/myflogo.png" alt="">
    </headerindex>
    <!-- 主体内容 -->
    <div class="home-main">
      <!-- 轮播图 -->
      <indexSwiper v-if='bannerList.length > 0'>
        <swiperItem v-for="item in bannerList" :key="item.recommend_id" >
          <img :src="item.image" alt="" />
        </swiperItem>
      </indexSwiper>
      <!-- 导航栏 -->
      <div class="home-nav">
        <router-link to="/jpcartoon">
          <dl>
            <dt><img src="../../../public/img/nav1.png" alt=""></dt>
            <dd>日漫</dd>
          </dl>
        </router-link>
        <router-link to="/chcartoon">
          <dl>
            <dt><img src="../../../public/img/nav2.png" alt=""></dt>
            <dd>国漫</dd>
          </dl>
        </router-link>
        <router-link to="/special">
          <dl>
            <dt><img src="../../../public/img/nav3.png" alt=""></dt>
            <dd>专题</dd>
          </dl>
        </router-link>
        <router-link to="/update">
          <dl>
            <dt><img src="../../../public/img/nav4.png" alt=""></dt>
            <dd>追番</dd>
          </dl>
        </router-link>
        <router-link to="/zixun">
          <dl>
            <dt><img src="../../../public/img/nav5.png" alt=""></dt>
            <dd>资讯</dd>
          </dl>
        </router-link>
      </div>
      <!-- 今日更新栏 -->
      <div class="update-now">
        <p>今日更新</p>
        <b>共<span>0</span>部</b>
        <i><a href="">全部追番</a></i>
      </div>
      <!-- 今日更新内容 -->
      <div class="updata-main">

      </div>
      <!-- 日漫列表栏 -->
      <div class="home-cartoon">
        <p class="cartoon-title">日漫</p>
        <div class="cartoon-list">
          <a class="cartoon-item" v-for="item in jpCartoonList" :key="item.recommend_id">
            <img :src="item.image" alt="">
            <p>{{ item.comic_title }}</p>
            <span>{{ item.subtitle}}</span>
          </a>
        </div>
        <div class="more">
          <a href="">更多日漫 ></a>
        </div>
      </div>
      <!-- 国漫列表栏 -->
      <div class="home-cartoon">
        <p class="cartoon-title">国漫</p>
        <div class="cartoon-list">
          <a class="cartoon-item" v-for="item in chCartoonList" :key="item.recommend_id">
            <img :src="item.image" alt="">
            <p>{{ item.comic_title }}</p>
            <span>{{ item.subtitle}}</span>
          </a>
        </div>
        <div class="more">
          <a href="">更多国漫 ></a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import headerindex from '@/components/header'
import indexSwiper from '@/components/swiper/swiper.vue'
import swiperItem from '@/components/swiper/swiperItem.vue'
// 引入接口请求文件
import { getBanner, getJpcartoon, getCncartoon } from '@/api/getCartoons.js'

export default {
  name: 'home',
  components: {
    // 头部
    headerindex,
    indexSwiper,
    swiperItem
  },
  data () {
    return {
      bannerList: [],
      jpCartoonList: [],
      chCartoonList: []
    }
  },

  created () {
    // 获取接口请求
    getBanner().then(res => {
      this.bannerList = res.data.data.banners
    })

    getJpcartoon().then(res => {
      if (res.data.code === 1) {
        this.jpCartoonList = res.data.data.recommend
      }
    })

    getCncartoon().then(res => {
      if (res.data.code === 1) {
        this.chCartoonList = res.data.data.recommend
      }
    })
  }

}
</script>
<style lang="scss" scoped>
.page-home{
  height: 100%;
  display: flex;
  flex-direction: column;
  // 主体部分
  .home-main{
    overflow-y: auto;
    flex: 1;
    width: 100%;
    img {
      width: 100%;
    }
    // 导航栏
    .home-nav{
      margin-top: 25px;
      width: 100%;
      height: 78px;
      box-sizing: border-box;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;

        dl{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }
        img{
          width: 45px;
        }
        dd{
          margin-top: 9px;
          color: #333;
          font-size: 16px;
        }

    }
    // 今日更新栏
    .update-now{
      width: 100%;
      height: 44px;
      display: flex;
      padding: 0 20px;
      box-sizing: border-box;
      align-items: center;
      margin-top:14px;
      p{
        font-size: 20px;
        color: #333;
        font-weight: 700;
        margin-right: 5px;
      }
      b{
        font-size: 12px;
        color: #999;
        span{
          color: red;
        }
      }
      i{
        flex: 1;
        a{
          font-size: 12px;
          color: #999;
          float: right;
        }
      }
    }
    // 今日更新内容
    .updata-main{
      width: 100%;
      margin-bottom: 40px;
    }
    // 动漫列表页面
    .home-cartoon{
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      .cartoon-title{
        width: 100%;
        font-size: 20px;
        font-weight: 700;
        color: #333;
        line-height: 1;
        margin-bottom: 20px;
        display: flex;

      }
      .cartoon-list{
        display: flex;
        width: 100%;
        flex-wrap:wrap;
        justify-content: space-between;
      }
      .cartoon-item{
          display: inline-block;
          width: 162px;
          margin-bottom:20px;
          img{
            width: 100%;
          }
          p{
            font-size: 14px;
            color: #333;
            font-weight: 700;
            margin-top: 13px;
            margin-bottom: 8px;
          }
          span{
            width:100%;
            font-size: 12px;
            color: #999;
            line-height: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            float: left;
          }
        }
    }
    .more{
      width: 100%;
      height: 36px;
      background-color: #f7f7f7;
      text-align: center;
      line-height: 36px;
      font-size: 12px;
      color: #999;
      margin-bottom: 40px;
      a{
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>
