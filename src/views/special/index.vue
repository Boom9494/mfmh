<template>
  <div class='page-special'>
    <!-- 头部 -->
    <headerIndex>
      <div class="special-left">
        <span class="back" @click="back"></span>
        <p>专题</p>
      </div>
    </headerIndex>
    <!-- 主体内容 -->
    <div class="special-main">
      <div class="listItem" v-for="item in specialList" :key="item.topic_id">
        <a href="">
          <img :src="item.list_img_url" alt="">
          <p>{{item.name}}</p>
          <span>{{item.type_name}}</span>
        </a>
      </div>

    </div>
  </div>
</template>

<script>
import headerIndex from '@/components/header'
import { specialCartoon } from '@/api/getCartoons.js'
export default {
  data () {
    return {
      specialList: []
    }
  },
  name: 'special',
  components: {
    headerIndex
  },
  created () {
    specialCartoon().then(res => {
      this.specialList = res.data.data
    })
  },
  methods: {
    back () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-special{
  height: 100%;
  display: flex;
  flex-direction: column;
  .special-left{
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
  .special-main{
    flex:1;
    padding: 0 10px 20px 10px;
    .listItem{
      width: 100%;
      height: 198px;
      margin-top:20px;
      img{
        border-radius: 5px;
        width: 100%;
        height: 150px;
      }
      p{
        font-size: 15px;
        color: #333;
        margin: 10px 0;
      }
      span{
        float: left;
        font-size: 12px;
        color: #666;
      }
    }
  }
}
</style>
