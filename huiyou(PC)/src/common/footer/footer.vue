<template>
  <div class="footer">
      <div class="footer-1">
      <el-row class="footer-content">
        <el-col :span="6" class="weixin item-1">
          <div class="attention">
            <img src="~@/assets/images/guanzhu.png" class="atten1">
            <p class="atten2">关注官方微信</p>
          </div>
          <div class="code">
            <img src="~@/assets/images/code.png" alt="">
          </div>
        </el-col>
        <el-col :span="6" class="Links item-1">
          <div class="title title1">
            <div class="underline">
              <a href="###">友情链接</a>
              <span></span>
            </div>
          </div>
          <ul>
            <li>友情QQ</li>
            <li>友情百度</li>
            <li>友情百度</li>
            <li>友情百度</li>
          </ul>
        </el-col>
        <el-col :span="6" class="HelpCenter item-1">
          <div class="title title2">
            <div class="underline">
              <a href="###">帮助中心</a>
              <span></span>
            </div>
          </div>
          <ul>
            <li>如何获得道具？</li>
            <li>道具有什么用？</li>
            <li>忘记密码则么办？</li>
          </ul>
        </el-col>
        <el-col :span="6" class="CustomerService item-1">
          <div class="title title3">
            <div class="underline">
              <a href="###">客服服务</a>
              <span></span>
            </div>
          </div>
          <ul>
            <li>服务时间：10：00~22：00</li>
            <li>客服热线：400-558-8888</li>
            <li>邮箱：huiyou@163.com</li>
            <li class="qq">
              <p class="qq_text">客服QQ：</p>
              <img src="~@/assets/images/talk_qq.png" class="qq_pic">
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <div class="footer-2">
      <el-row>
        <el-col :span="24">
          copyright@2019 HY All Rights Resvered &nbsp;&nbsp;&nbsp;&nbsp; 沪ICP备19123456号-1
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeFooter',
};
</script>
<style lang="css" scoped>
  .footer{ clear: both; }
  .footer-1{
    /* padding: 40px 20%; */
    padding: 40px 14%;/*no*/
    height: 170px;/*no*/
    background: #333;
    color: #fff;
  }
  .footer-1 .footer-content{ margin: 0 auto; }
  .footer-1 .footer-content .item-1{ padding: 0 2%; }
  .footer-1 .footer-content .item-1 ul li{
    list-style: none;
    line-height: 28px;/*no*/
    height: 28px;/*no*/
    font-size: 14px;
  }
  .footer-1 .footer-content .item-1 ul li:hover {color: #20c1cd;}
  .footer-1 .footer-content .item-1 .title a{ text-decoration: none;  color: #fff; }
  .weixin .attention, .weixin .code{ text-align: center;}
  .weixin .attention{
    height: 36px;/*no*/
    text-align: center;
    margin-bottom: 10px;/*no*/
  }
  .weixin .code img{
    /* width: 120px;
    height: 120px; */
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  .weixin .attention .atten1{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin-left: 10px;/*no*/
    display: inline-block;
    float: left;
  }
  .weixin .attention .atten2{
    display: inline-block;
    float: left;
    height: 36px;/*no*/
    line-height: 36px;/*no*/
    font-size: 14px;/*no*/
    margin-left: 8px;/*no*/
  }
  .footer-1 .footer-content .item-1 .title{
    height: 36px;/*no*/
    margin-bottom: 21px;/*no*/
  }
  .footer-1 .footer-content .item-1 .title1{
    border-bottom: 1px solid #545454;/*no*/
  }
  .footer-1 .footer-content .item-1 .title1 .underline{
    height: 37px;/*no*/
    background: url('~@/assets/images/grey_line1.jpg') no-repeat bottom left;
  }
  .footer-1 .footer-content .item-1 .title2{
    border-bottom: 1px solid #545454;/*no*/
  }
  .footer-1 .footer-content .item-1 .title2 .underline{
    height: 37px;/*no*/
    background: url('~@/assets/images/grey_line2.jpg') no-repeat bottom left;
  }
  .footer-1 .footer-content .item-1 .title3{
    border-bottom: 1px solid #545454;/*no*/
  }
  .footer-1 .footer-content .item-1 .title3 .underline{
    height: 37px;/*no*/
    background: url('~@/assets/images/grey_line3.jpg') no-repeat bottom left;
  }

  .footer-1 .footer-content .item-1 .title1 span{
    float: right;
    background: url('~@/assets/images/add.png') no-repeat center;
    width: 23px;/*no*/
    height: 23px;/*no*/
  }
  .footer-1 .footer-content .item-1 .title2 span{
    float: right;
    background: url('~@/assets/images/add.png') no-repeat center;
    width: 23px;/*no*/
    height: 23px;/*no*/
  }
   .footer-1 .footer-content .CustomerService{ padding-right: 0; }
  .CustomerService .qq_pic{
    /* width:74px;
    height: 23px; */
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  .qq .qq_text, .qq .qq_pic{ display: inline-block; float: left; }

  .footer-2{
    height: 50px;/*no*/
    line-height: 50px;/*no*/
    text-align: center;
    background: #232323;
    color: #fff;
    clear: both;
  }
  /* @media (min-width: 765) and (max-width: 900) {
    font-size: 14px;
  } */
  /* @media (min-width: 1024px) and (max-width: 1199px) {
    .footer-1{padding: 40px 15%;}
    .footer-1 .footer-content .item-1 ul li{ font-size: 12px; }
  }
  @media (min-width: 1200px) and (max-width: 1365px) {
    .footer-1{padding: 40px 18%;}
    .footer-1 .footer-content .item-1 ul li{ font-size: 13px; }
  } */
</style>
