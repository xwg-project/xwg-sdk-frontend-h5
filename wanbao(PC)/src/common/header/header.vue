<template>
  <div class="header">
    <div class="title">
      <!-- <div class="title-img">
        <router-link :to="{path: '/Login'}" >
          <img src="./../../assets/images/logo.png" alt="">
        </router-link>
      </div> -->
      <div class="title-txt">一家专业的<strong>游戏充值 礼品兑换</strong>服务平台！</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
};
</script>
<style lang="css" scoped>
  .header {
    position: relative;
    height: 74px;
    padding: 37px 0;
    width: 100%;
    background: url('~@/assets/images/kv.jpg') no-repeat center;
  }
  .header .title{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 820px;
    height: 74px;
    margin-top: -37px;
    margin-left: -410px;
  }
  /* .header .title-img, */
  .header .title-txt{
    height: 74px;
    line-height: 74px;
    text-align: center;
    display: inline-block;
    float: left;
  }
  .header .title-txt{
    font-size: 24px;/*no*/
    color: #218c94;
    padding-left: 60px;/*no*/
    letter-spacing: 4px;/*no*/
  }
</style>
