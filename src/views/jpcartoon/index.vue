<template>
  <div class='page-jpcartoon'>
    <!-- 头部 -->
    <headerIndex>
      <div class="jpcartoon-left">
        <span class="back" @click="back"></span>
        <p>日漫</p>
      </div>
    </headerIndex>
    <!-- 主题内容 -->
    <div class="jpcartoon-main">
      <a href="" v-for="item in jpCartoonList" :key="item.comic_id">
        <img :src="item.region_pic" alt="">
      </a>

    </div>
  </div>
</template>

<script>
import { getComic } from '@/api/getCartoons.js'
import headerIndex from '@/components/header'
export default {
  name: 'jpcartoon',
  data () {
    return {
      jpCartoonList: []
    }
  },
  components: {
    headerIndex
  },
  methods: {
    back () {
      this.$router.back(-1)
    }
  },
  created () {
    getComic().then(res => {
      this.jpCartoonList = res.data.data
    })
  }
}
</script>

<style lang="scss" scoped>
.page-jpcartoon{
  height: 100%;
  display: flex;
  flex-direction: column;
  .jpcartoon-left{
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
  .jpcartoon-main{
    flex: 1;
    padding: 25px 20px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: top;
    overflow-y: auto;
    img{
      width: 155px;
      height: 222px;
      margin-bottom: 40px;
    }
  }
}
</style>
