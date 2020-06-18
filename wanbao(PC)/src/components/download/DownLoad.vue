<template>
  <div class="my-box">
    <home-nav></home-nav>
    <home-header></home-header>
    <div class="banner">
      <el-col :span="12" class="gird1">&nbsp;&nbsp;</el-col>
      <el-col :span="4" class="gird1 download">
        <div class="gird1-conent">
          <div class="download-android">
            <button class="btn1"></button>
            <p>支持安卓2.3.3及以上</p>
          </div>
          <div class="download-ios">
            <button class="btn2"></button>
            <p>支持ios3.0及以上</p>
          </div>
        </div>
      </el-col>
      <el-col :span="8" class="gird1">&nbsp;&nbsp;</el-col>
    </div>
    <home-footer></home-footer>
  </div>
</template>
<script>
import HomeNav from '@/common/nav/nav';
import HomeHeader from '@/common/header/header';
import HomeFooter from '@/common/footer/footer';

export default {
  name: 'DownLoad',
  components: {
    HomeNav,
    HomeHeader,
    HomeFooter,
  },
};
</script>
<style scoped>
  .banner{
    /* width: auto; */
    width: 100%;
    height: 702px;/*no*/
    background: url('~@/assets/images/pagedownloadbg.jpg') no-repeat center;
    position: relative;
  }
  .banner .gird1{
    height: 702px;/*no*/
    position: relative;
  }
  .banner .download .gird1-conent{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 184px;/*no*/
    height: 212px;/*no*/
    margin-left: -92px;/*no*/
    margin-top: -46px;/*no*/
    color: #fff;
    text-align: center;
  }
  .banner .download .download-android{ margin-bottom: 10px;/*no*/}
  .banner .download .download-android p,
  .banner .download .download-ios p {
    margin-top: 0px;
  }
  .banner .download .download-android .btn1{
    width: 184px;/*no*/
    height: 76px;/*no*/
    background: url('~@/assets/images/btn_az.png') no-repeat center;
    border: none;
    cursor: pointer;
    outline: none;
  }
  .banner .download .download-ios .btn2{
    width: 184px;/*no*/
    height: 76px;/*no*/
    background: url('~@/assets/images/btn_apple.png') no-repeat center;
    border: none;
    cursor: pointer;
    outline: none;
  }
</style>

