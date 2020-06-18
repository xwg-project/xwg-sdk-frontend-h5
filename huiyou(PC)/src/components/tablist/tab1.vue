<template>
  <!-- <div class="contents"> -->
    <div class="contents_box">
      <div class="contents_box_left">
        <el-carousel :interval="5000" arrow="always" class="carousel-box banner">
          <el-carousel-item v-for="item in items" :key="item.id">
            <div class="images"><img :src="item.imgUrl" alt=""></div>
          </el-carousel-item>
        </el-carousel>
        <div class="games">
          <!-- 新版 -->
          <div class="gameTitle">
            <span class="span1">热门游戏</span>
            <span class="span2">more</span>
          </div>
          <div class="gameContainer">
            <div class="gamebox" v-for="gameOne in gameOnes" :key="gameOne.id">
              <img :src="gameOne.imgSrc" alt="" class="Img">
              <p class="p1">{{gameOne.txt}}</p>
            </div>
          </div>
        </div>
        <div class="tools">
          <p class="tools_title">
            <span class="span1">热门道具</span>
            <span class="span2">more</span>
          </p>
          <div class="tools_content">
            <div class="tools_list" v-for="tool in tools" :key="tool.id">
              <div class="photo">
                <img :src="tool.pic" class="pic">
                <p class="tool_desc">{{tool.desc}}</p>
              </div>
              <p class="mony"><span class="span1">{{tool.amount}}</span>金币</p>
            </div>
          </div>
        </div>
      </div>
      <div class="contents_box_right">
        <div class="login" v-show="noLogin">
          <div class="avat">
            <img src="@/assets/images/Avatar1.png" class="avatImg">
          </div>
          <div class="sign">
            <el-row class="row1">
              <el-button class="btn1">
                <router-link tag="span" :to="{path: '/Login'}">快速登陆</router-link>
              </el-button>
            </el-row>
            <el-row class="row2">
              <el-button class="btn2">
                <router-link tag="span" :to="{path: '/SignUp'}">免费注册</router-link>
              </el-button>
            </el-row>
          </div>
        </div>

        <div class="IsLogin" v-show="isLogin">
          <div class="avat">
            <img src="@/assets/images/shiyongtouxiang.png" class="avatImg">
          </div>
          <div class="text">
            <div class="text_1">
              <p class="p1">欢迎你，长风破浪会有时直挂云帆</p>
              <p class="p2">你尚未实名认证，你设置支付密码</p>
            </div>
            <div class="text_2">
              <a href="####" class="a1 a">完善资料</a>
              <a href="####" class="a2 a">退出</a>
            </div>
          </div>
        </div>

        <div class="news">
          <div class="title">
            <span class="span1">APP下载</span>
          </div>
          <div class="prompt">
            <!-- <div class="proitem" v-for="proitem in proitems" :key="proitem.id">
              <div class="text">
                <router-link :to="{path: '/News'}">
                  {{proitem.descr}}
                </router-link>
              </div>
              <div class="time">{{proitem.time}}</div>
            </div> -->
            <div class="android">
              <img src="@/assets/images/Android1.png" class="Image">
              <p>支持Android 2.3.3及以上</p>
            </div>
            <div class="ios">
              <img src="@/assets/images/Ios1.png" class="Image">
              <p>支持IOS 5.0及以上</p>
            </div>
          </div>
        </div>
        <div class="imgLink">
          <div class="photos">
            <p class="p1">
              <router-link :to="{path: '/DownLoad'}">
                <img src="@/assets/images/banner1.jpg" alt="">
              </router-link>
            </p>
            <p class="p1">
              <router-link :to="{path: '/DownLoad'}">
                <img src="@/assets/images/banner2.jpg" alt="">
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
   <!-- <keep-alive>
     <router-view></router-view>
   </keep-alive> -->

  <!-- </div> -->
</template>

<script>
export default {
  components: {
  },
  name: 'Tab1',
  data() {
    return {
      activeName: 'first',
      noLogin: true,
      isLogin: false,
      items: [
        {
          id: 1,
          imgUrl: require('@/assets/images/banner1.png'),
        },
        {
          id: 2,
          imgUrl: require('@/assets/images/banner2.png'),
        },
        {
          id: 3,
          imgUrl: require('@/assets/images/banner3.png'),
        },
        {
          id: 4,
          imgUrl: require('@/assets/images/banner4.png'),
        },
      ],
      gameOnes: [
        {
          id: '001',
          imgSrc: require('@/assets/images/game/game1.png'),
          txt: '地下城与勇士',
        },
        {
          id: '002',
          imgSrc: require('@/assets/images/game/game2.png'),
          txt: '穿越火线',
        },
        {
          id: '003',
          imgSrc: require('@/assets/images/game/game3.png'),
          txt: '英雄联盟',
        },
        {
          id: '004',
          imgSrc: require('@/assets/images/game/game4.png'),
          txt: '王者荣耀',
        },
        {
          id: '005',
          imgSrc: require('@/assets/images/game/game5.png'),
          txt: '天涯明月刀',
        },
        {
          id: '006',
          imgSrc: require('@/assets/images/game/game6.png'),
          txt: '阴阳师',
        },
        {
          id: '007',
          imgSrc: require('@/assets/images/game/game7.png'),
          txt: '魔兽世界',
        },
        {
          id: '008',
          imgSrc: require('@/assets/images/game/game8.png'),
          txt: 'QQ飞车手游',
        },
        {
          id: '009',
          imgSrc: require('@/assets/images/game/game9.png'),
          txt: '剑侠情缘三',
        },
        {
          id: '010',
          imgSrc: require('@/assets/images/game/game10.png'),
          txt: '第五人格',
        },
        {
          id: '011',
          imgSrc: require('@/assets/images/game/game11.png'),
          txt: '梦三国2',
        },
        {
          id: '012',
          imgSrc: require('@/assets/images/game/game12.png'),
          txt: '魔力宝贝手游',
        },
      ],
      tools: [
        {
          id: '0001',
          pic: require('@/assets/images/game/tool1.png'),
          desc: '超级火箭',
          amount: '￥2.00',
        },
        {
          id: '0002',
          pic: require('@/assets/images/game/tool2.png'),
          desc: '火箭',
          amount: '￥2.00',
        },
        {
          id: '0003',
          pic: require('@/assets/images/game/tool3.png'),
          desc: '剪刀',
          amount: '￥2.00',
        },
        {
          id: '0004',
          pic: require('@/assets/images/game/tool4.png'),
          desc: '锤子',
          amount: '￥2.00',
        },
        {
          id: '0005',
          pic: require('@/assets/images/game/tool5.png'),
          desc: '炸弹',
          amount: '￥2.00',
        },
        {
          id: '0006',
          pic: require('@/assets/images/game/tool5.png'),
          desc: '扇子',
          amount: '￥2.00',
        },
      ],
      proitems: [
        {
          id: '001',
          descr: '【提示】2018年快递紧急停运延迟配送',
          time: '2018.06.29',
        },
        {
          id: '002',
          descr: '【通知】国庆假期快递紧急停运延迟配送通知',
          time: '2018.03.19',
        },
        {
          id: '003',
          descr: '【通知】飞行棋游戏地垫下架通知',
          time: '2018.04.25',
        },
        {
          id: '004',
          descr: '【提示】2018年快递紧急停运延迟配送',
          time: '2018.06.01',
        },
        {
          id: '005',
          descr: '【通知】国庆假期快递紧急停运延迟配送通知',
          time: '2018.05.01',
        },
        {
          id: '006',
          descr: '【通知】飞行棋游戏地垫下架通知',
          time: '2018.11.27',
        },
      ],
    };
  },
  methods: {
    // handleClick(tab, event) {
    //   console.log(tab, event);
    // },
  },
};
</script>

<style scoped>
.contents_box{
  /* max-width: 1200px; */
  width: 80%;
  /* height: 1305px; */
  height: 7rem;
  margin: 0 auto;
}
.contents_box .contents_box_left{
  /* width: 836px; */
  width: 73%;
  height: 1100px;
  /* margin-right: 18px; */
  padding-right: 2%;
  float: left;
}
.contents_box .contents_box_right{
  /*  width: 344px; */
  width: 25%;
  height: 1100px;
  float: left;
}
.contents_box_left .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}
.contents_box_left .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
.contents_box_left .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
/* .contents_box_left .el-carousel__item h3{
  text-align: center;
} */
.contents_box_left .carousel-box{
  /* width: 830px; */
  width: 100%;
  height: 370px;
  margin-top: 20px;
}
.contents_box_left .carousel-box .images img{
  /* width: 830px; */
  /* width: 100%;
  height: 370px; */
  overflow: hidden;
}
.contents_box_left >>> .carousel-box .el-carousel__arrow{
  position: absolute;
  top: 60%;
}
.contents_box_left .games{
  background: #fff;
  margin-top: 20px;
  height: 550px;
 /*  height: 394px; */
}
.contents_box_left .games .gameContainer{
  /* width: 780px; */
  width: 95%;
  height: 400px;
  /* height: 280px; */
  /* padding: 35px 25px; */
  padding: 35px 2.5%;
}
.contents_box_left .games .gameTitle{
  height: 55px;/*no*/
  background: #e3e3e3;
  line-height: 55px;/*no*/
  font-size: 16px;/*no*/
}
 .games .gameTitle .span2{
  width: 50px;/*no*/
  height: 20px;/*no*/
  line-height: 20px;/*no*/
  margin-right: 20px;/*no*/
  margin-top: 17px;/*no*/
  color: #27c1cd;
  float: right;
  border: 1px solid #27c1cd;/*no*/
  border-radius: 5px;/*no*/
  text-align: center;
  font-size: 14px;/*no*/
}
.contents_box_left .games .gameTitle .span1{
  margin-left: 25px;/*no*/
}
.contents_box_left .games .gameContainer .gamebox{
  float: left;
  /* width: 100px; */
  width: 0.74rem;
  height: 0.74rem;
  margin:3% 0.8%;
  text-align: center;
}
.contents_box_left .games .gameContainer .gamebox .Img{
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.contents_box_left .games .gameContainer .gamebox .p1{
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.contents_box_left .tools{
  /* height: 326px; */
  height: 1.9rem;
  margin-top: 20px;
  background: #fff;
}
.contents_box_left .tools .tools_title{
  height: 55px;/*no*/
  background: #e3e3e3;
  line-height: 55px;/*no*/
}
.contents_box_left .tools .tools_title .span1{
  margin-left: 25px;/*no*/
  font-size: 16px;/*no*/
}
.contents_box_left .tools .tools_title .span2{
  width: 50px;/*no*/
  height: 20px;/*no*/
  line-height: 20px;/*no*/
  margin-right: 20px;/*no*/
  margin-top: 17px;/*no*/
  color: #27c1cd;
  float: right;
  border: 1px solid #27c1cd;/*no*/
  border-radius: 5px;/*no*/
  text-align: center;
  font-size: 14px;/*no*/
}
.contents_box_left .tools .tools_content{
  /* width: 762px; */
  /* height: 180px; */
  height: 1.2rem;
  margin: 2.5% 3.5%;
  /* margin: 25px 35px; */
}
.contents_box_left .tools .tools_content .tools_list{
  /* width: 100px; */
  /* height: 164px; */
  /* width: 148px; */
  width: 0.7rem;
  height: 211px;
  float: left;
  display: inline-block;
  /* margin:0 1.30%; */
  margin:0 1.25%;
  text-align: center;
}
.contents_box_left .tools .tools_content .tools_list:first-child{margin-left: 0;}
.contents_box_left .tools .tools_content .tools_list:last-child{margin-right: 0;}
.contents_box_left .tools .tools_content .tools_list .span1{
  color: #ed3942;
  margin-right: 5px;
}
.contents_box_left .tools .tools_content .tools_list .photo{
  position: relative;
  /* border: 1px solid red; */
  height: 1rem;
}
.contents_box_left .tools .tools_content .tools_list .photo .pic{
  /* margin-top: 20px; */
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.contents_box_left .tools .tools_content .tools_list .mony{
  font-size: 14px;
  margin-top: 10px;
}
.contents_box_left .tools .tools_content .tools_list .photo .tool_desc{
  position: relative;
  /* top: -0.2rem; */
  top: -20%;
  color: #fff;
}
.contents_box_left .el-carousel__item,
.contents_box_left .el-carousel__mask{
  height: 370px;
}
.contents_box_right{ margin-top: 20px; }
.contents_box_right .login{
  /* width: 312px; */
  width: 305px;
  height: 370px;
  background: #fff;
  padding: 0 20px;
}
.contents_box_right .login .avat{
  height: 210px;
  margin:0 auto;
  text-align: center;
}
.contents_box_right .login .avat .avatImg{
  /* margin-top:25px; */
  margin-top: 0.05rem;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.contents_box_right .imgLink{
  width: 342px;
  /* height: 1.95rem; */
  height: 2.18rem;
  background: #fff;
  margin-top: 20px;
  padding-top: 0.2rem;
}
/* .contents_box_right .imgLink .p1{
  margin-top: 0.2rem;
} */
.contents_box_right .imgLink .p1 img{
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 0;
}
.contents_box_right .login .el-button{ width: 100%; }
.contents_box_right .login .sign{ margin-top: 15px; }
.contents_box_right .login .row1 .btn1{
  height: 55px;
  background: #32cbd1;
  color: #fff;
  margin-bottom: 15px;
}
.contents_box_right .login .row2 .btn2{height: 55px; background: #fff; color: #32cbd1; }
.contents_box_right .login .total{ height: 60px; line-height: 60px; }
.contents_box_right .login .people .up1,
.contents_box_right .login .people .up2{
  height: 65px;
  /* border: 1px solid red; */
}
.contents_box_right .login .people .up1 .up1_1 img,
.contents_box_right .login .people .up2 .up2_1 img{ vertical-align: middle; }

.contents_box_right .login .people .up1 .up1_1,
.contents_box_right .login .people .up2 .up2_1{
  width: 60px;
  text-align: center;
  background: #e7e7e7;
}

.contents_box_right .login .people .up1 .up1_2,
.contents_box_right .login .people .up2 .up2_2{
  width: 250px;
  text-align: center;
  background: #f5f5f5;
}
.contents_box_right .login .people .up1 .up1_2 span{
  color: #25c1cd;
  font-size: 22px;
  margin-right: 15px;
}
.contents_box_right .login .people .up2 .up2_2 span{
  color: #ffb713;
  font-size: 22px;
  margin-right: 15px;
}
.contents_box_right .login .people .up1 .up1_1,
.contents_box_right .login .people .up1 .up1_2{
  display: inline-block;
  float: left;
  height: 63px;
  line-height: 63px;
}
.contents_box_right .login .people .up2 .up2_1,
.contents_box_right .login .people .up2 .up2_2{
  display: inline-block;
  float: left;
  height: 63px;
  line-height: 63px;
}
.contents_box_right .IsLogin{
  width: 312px;
  height: 370px;
  background: #fff;
  padding: 0 20px;
}
.contents_box_right .IsLogin .avat{
  height: 210px;
  margin:0 auto;
  text-align: center;
}
.contents_box_right .IsLogin .text {height: 158px;}
.contents_box_right .IsLogin .text .text_1{height: 80px; text-align: center;}
.contents_box_right .IsLogin .text .text_1 .p1{
  margin-bottom: 15px;
  font-size: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
}
.contents_box_right .IsLogin .text .text_2{height: 65px; line-height: 65px; text-align: center;}
.contents_box_right .IsLogin .text .text_2 .a{color: #28c1cc;}
.contents_box_right .IsLogin .text .text_2 .a1{margin-right: 30px;}
.contents_box_right .IsLogin .avat .avatImg{
  margin-top:25px;
  border:2px solid #28c1cc;
  border-radius: 50%;
}
.contents_box_right .news{
   width: 342px;
   /* height: 335px; */
   /*  height: 360px; */
   height: 2.4rem;
   background: #fff;
   margin-top: 20px;
 }
.contents_box_right .news .prompt{
  /* padding: 35px 57px 25px; */
  padding: 20% 0.296875rem;
  font-size: 14px;
}
.contents_box_right .news .prompt .android{
  text-align: center;
  margin-bottom: 25px;
}
.contents_box_right .news .prompt .android .Image,
.contents_box_right .news .prompt .ios .Image{
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.contents_box_right .news .prompt .ios{
  text-align: center;
}
.contents_box_right .news .prompt .android p,
.contents_box_right .news .prompt .ios p{ margin-top: 10px; }
.contents_box_right .news .prompt .proitem .text{
  display: inline-block;
  float: left;
  width: 240px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
}
.contents_box_right .news .prompt .proitem .time{
  display: inline-block;
  float: right;
  font-size: 14px;
}

.contents_box_right .news .title{
  height: 55px;/*no*/
  background: #e3e3e3;
  line-height: 55px;/*no*/
  font-size: 16px;/*no*/
}
.contents_box_right .news .title .span1{
  margin-left: 15px;
}
.contents_box_right .news .title .span2{
  width: 50px;
  height: 20px;
  line-height: 20px;
  margin-right: 15px;
  margin-top: 17px;
  color: #27c1cd;
  float: right;
  border: 1px solid #27c1cd;
  border-radius: 5px;
  text-align: center;
}
.imgLink .photos .p1{ margin-bottom: 15px; }
.imgLink .photos .p1 a{text-decoration: none;}
.imgLink .photos .p1 img{border-style: none;}
</style>
