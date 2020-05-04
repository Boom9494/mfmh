<template>
  <!-- 头部内容 -->
    <div class="home-header">
      <div class="header-left">
        <!-- 不同的分页填充不同的内容 -->
        <slot></slot>
      </div>
      <ul class="header-right">
        <li>
          <router-link to="home">
            <a href="">
              <img src="../../../public/img/index.png" alt="">
            </a>
          </router-link>
        </li>
        <li>
          <router-link to="search">
            <a href="">
              <img src="../../../public/img/search.png" alt="">
            </a>
          </router-link>
        </li>
        <li>
          <router-link to="my">
            <a href="">
              <img src="../../../public/img/my.png" alt="">
            </a>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'headerindex'
}
</script>

<style lang='scss' scoped>
@import '@/assets/reset/mixin.scss';
// 头部
  .home-header{
    @include border-bottom;
    height: 44px;
    width: 100%;
    display: flex;
    .header-left{
      width: 230px;
      display: flex;
      align-items: center;
      img{
        width: 48px;
        height: 24px;
        margin-left:20px;
      }
    }
    .header-right{
      flex: 1;
      display: flex;
      box-sizing: border-box;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      li{
        height: 100%;
      }
      a{
        display: inline-block;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          height: 20px;
          width: 20px;
        }
      }
    }
  }
</style>
