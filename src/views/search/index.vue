<template>
  <div class='page-search'>
    <!-- 搜索列表头部 -->
    <div class="search-header">
      <input v-model="inputVal" type="text" class="search-input" placeholder="搜索漫画">
      <span @click="inputVal = ''"></span>
      <div class="searchBtn" @click="searchCartoon">搜索</div>
    </div>
    <!-- 搜索结果 -->
    <div class="search-res" v-if="isSearch">
      <div class="res-list" v-for="item in seachList" :key="item.comic_id">
        <img :src="item.comic_new_cover" alt="">
        <div class="res-main">
          <p class="res.title">{{item.comic_title}}</p>
          <span class="res.author">{{item.comic_author_name}}</span>
          <i class="res.type">{{item.comic_subject}}</i>
        </div>
      </div>

    </div>
    <!-- 无搜索结果 -->
    <div class="notsearch" v-else>
      <!-- 搜索记录 -->
      <div class="search-history" v-show="searchHis.length > 0">
        <div class="search-his-top">
          <p>搜索记录</p>
          <span @click="clearHis">清空记录 <i></i></span>
        </div>
        <div class="search-his-item">
          <div class="his-item-list" v-for="item in searchHis" :key="item">{{item}}</div>
        </div>
      </div>
      <!-- 热门搜索 -->
      <div class="hot-search">
        <div class="hot-search-top">热门搜索</div>
        <div class="hot-search-main">
          <div class="hot-search-list" v-for="( item, index) in hotSearchList" :key="item.content_id">
            <i :class="`item${index < 3 ? index + 1 : 4}`">{{index + 1}}</i>
            <p>{{item.title}}</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { hotSearch, searchRes } from '@/api/getCartoons.js'
export default {
  name: 'search',
  data () {
    return {
      hotSearchList: [],
      inputVal: '',
      isSearch: false,
      seachList: [],
      searchHis: []
    }
  },
  created () {
    hotSearch().then(res => {
      this.hotSearchList = res.data.data
    })
    this.getSearchHis()
  },
  methods: {
    // 清楚历史记录
    clearHis () {
      localStorage.setItem('searchHis', '')
      this.searchHis = []
      this.getSearchHis()
    },
    // 搜索按钮点击事件
    searchCartoon () {
      this.isSearch = !this.isSearch
      // 获取搜索内容
      searchRes(this.inputVal).then(res => {
        this.seachList = res.data.data
      })
      // 存入localstorage
      // 1、判断是否是第一次存入
      if (!localStorage.getItem('searchHis')) {
        // 是第一次 直接存入
        this.searchHis.push(this.inputVal)
        console.log(222)
        localStorage.setItem('searchHis', JSON.stringify(this.searchHis))
      } else {
        // 不是第一次存入
        var item = JSON.parse(localStorage.getItem('searchHis'))
        // 判断是否重复
        var a = item.findIndex(item => {
          return item === this.inputVal
        })
        if (a < 0) {
          // 数组里面没有 不是重复的
          console.log(111)
          item.push(this.inputVal)
          localStorage.setItem('searchHis', JSON.stringify(item))
        }
      }
      // 更新页面
      this.getSearchHis()
    },
    // 获取 localStorage 内的搜索历史记录
    getSearchHis () {
      if (localStorage.getItem('searchHis')) {
        this.searchHis = JSON.parse(localStorage.getItem('searchHis'))
        console.log(JSON.parse(localStorage.getItem('searchHis')))
      }
    }
  }
}
</script>

<style lang='scss'>
.page-search{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  // 搜索头部
  .search-header{
    height: 54px;
    border-bottom: 1px solid #e6e6e6;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    .search-input{
      display: block;
      width: 284px;
      height: 52px;
      border-radius: 2px;
      border: none;
      outline: none;
      font-size: 18px;
      color: #333;
    }
    span{
      display: inline-block;
      width: 9px;
      height: 9px;
      position: absolute;
      left: 280px;
      top: 22px;
      background: url('../../../public/img/del.png');
      background-size: 9px 9px;
    }
    .searchBtn{
      line-height: 54px;
      font-size: 15px;
      color: #333;

    }
  }
  // 搜索结果
  .search-res{

    flex: 1;
    padding: 15px 20px 0 20px;
    .res-list{
      width: 100%;
      height: 120px;
      overflow: hidden;
      margin-bottom: 20px;
      display: flex;
      img{
        width: 90px;
        display: inline-block;
        max-height: 120px;
        margin-right: 15px;
        border-radius: 3px;
      }
      .res-main{
        p{
          font-size: 15px;
          line-height: 15px;
          color: #1a1a1a;
          margin-top: 13.5px;
          margin-bottom: 25px;
        }
        span{
          display: block;
          font-size: 12px;
          line-height: 18px;
          color: #999;
        }
        i{
          font-size: 12px;
          line-height: 18px;
          color: #999;
        }
      }
    }
  }
  // 无搜索结果
  .notsearch{
    flex: 1;
    // 搜索记录
    .search-history{
      width: 100%;
      height: auto;
      padding: 20px 20px 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      margin-bottom: 10px;
      .search-his-top{
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        align-content: center;
        color: #666;
        i{
          display: inline-block;
          width: 13px;
          height: 13px;
          background: url('../../../public/img/empty.png');
          background-size: 100%;
          line-height: 13px;
        }
      }
      .search-his-item{
        width: 100%;
        height: auto;
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        .his-item-list{
          width: 50%;
          height: 44px;
          font-size: 15px;
          color: #1a1a1a;
          display: inline-block;
          line-height: 44px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin:0;
        }
      }

    }
    // 热门搜索
    .hot-search{
      padding: 15px 20px 10px 20px;
      .hot-search-top{
        color: #666;
        font-size: 12px;
        line-height: 12px;
      }
      .hot-search-main{
        margin-top: 12px;
        .hot-search-list{
          display: flex;
          align-items: center;
          i{
            width: 15px;
            height: 15px;
            font-size: 15px;
            line-height: 15px;
            text-align: center;
            color: #fff;
            margin-right: 10px;
          }
          .item1{
            background-color: #f33;
          }
          .item2{
            background-color: #ff7315;
          }
          .item3{
            background-color: #a2c200;
          }
          .item4{
            background-color: #fff;
            border: 1px solid #cbcbcb;
            color: #666;
          }
          p{
            font-size: 12px;
            color: #333;
            line-height: 44px;
          }
        }
      }
    }

  }
}
</style>
