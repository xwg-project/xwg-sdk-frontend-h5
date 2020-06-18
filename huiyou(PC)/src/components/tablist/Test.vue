<template>
  <div class="contents">
    <div class="contents_box">
      <div class="contents_box_left">
        <el-carousel :interval="5000" arrow="always" class="carousel-box banner">
          <el-carousel-item v-for="item in items" :key="item.id">
            <div class="images"><img :src="item.imgUrl" alt=""></div>
          </el-carousel-item>
        </el-carousel>
        <div class="games">
          <!-- <div class="gameLeft">游戏</div> -->
          <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
            <el-tab-pane label="热门游戏" name="first" class="paneFirst">
              <div class="gameContainer">
                <div class="gamebox" v-for="gameOne in gameOnes" :key="gameOne.id">
                  <img :src="gameOne.imgSrc" alt="">
                  <p>{{gameOne.txt}}</p>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="角色扮演" name="second" class="paneFirst">
              <div class="gameContainer">
                <div class="gamebox" v-for="gameTwo in gameTwos" :key="gameTwo.id">
                  <img :src="gameTwo.imgSrc" alt="">
                  <p>{{gameTwo.txt}}</p>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="射击游戏" name="third" class="paneFirst">
              <div class="gameContainer">
                <div class="gamebox" v-for="gameThree in gameThrees" :key="gameThree.id">
                  <img :src="gameThree.imgSrc" alt="">
                  <p>{{gameThree.txt}}</p>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="动作游戏" name="four" class="paneFirst">
              <div class="gameContainer">
                <div class="gamebox" v-for="gameFour in gameFours" :key="gameFour.id">
                  <img :src="gameFour.imgSrc" alt="">
                  <p>{{gameFour.txt}}</p>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="竞技游戏" name="five" class="paneFirst">
              <div class="gameContainer">
                <div class="gamebox" v-for="gameFive in gameFives" :key="gameFive.id">
                  <img :src="gameFive.imgSrc" alt="">
                  <p>{{gameFive.txt}}</p>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="休闲游戏" name="six" class="paneFirst">
              <div class="gameContainer">
                <div class="gamebox" v-for="gameSix in gameSixs" :key="gameSix.id">
                  <img :src="gameSix.imgSrc" alt="">
                  <p>{{gameSix.txt}}</p>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="手机游戏" name="seven" class="paneFirst">
              <div class="gameContainer">
                <div class="gamebox" v-for="gameSeven in gameSevens" :key="gameSeven.id">
                  <img :src="gameSeven.imgSrc" alt="">
                  <p>{{gameSeven.txt}}</p>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="tools">
          <p class="tools_title">
            <span class="span1">道具</span>
            <span class="span2">more</span>
          </p>
          <div class="tools_content">
            <div class="tools_list" v-for="tool in tools" :key="tool.id">
              <div class="photo">
                <p class="tool_desc">{{tool.desc}}</p>
                <img :src="tool.pic" alt="">
              </div>
              <p><span class="span1">{{tool.amount}}</span>金币</p>
            </div>
          </div>
        </div>
      </div>
      <div class="contents_box_right">
        <div class="login">
          <div class="total">近期，汇游网玩家累计：</div>
          <div class="people">
            <div class="up1">
              <div class="up1_1"><img src="@/assets/images/game/coin.jpg" alt=""></div>
              <div class="up1_2"><span>46,738,578</span>人累计金币</div>
            </div>
            <div class="up2">
              <div class="up2_1"><img src="@/assets/images/game/shopcart.jpg" alt=""></div>
              <div class="up2_2"><span>46,738,578</span>人累计金币</div>
            </div>
          </div>
          <div class="sign">
            <el-row class="row1"><el-button class="btn1">快速登陆</el-button></el-row>
            <el-row class="row2"><el-button class="btn2">免费注册</el-button></el-row>
          </div>
        </div>
        <div class="news">
          <div class="title">
            <span class="span1">最新公告</span>
            <span class="span2">more</span>
          </div>
          <div class="prompt">
            <div class="proitem" v-for="proitem in proitems" :key="proitem.id">
              <div class="text">
                <router-link :to="{path: '/News'}">
                  {{proitem.descr}}
                </router-link>
              </div>
              <div class="time">{{proitem.time}}</div>
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
            <p>
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
   <div class="div2">
     <img src="@/assets/images/k1.png" alt="">
   </div>

  </div>
</template>

<script>
export default {
  components: {
  },
  name: 'Test',
  data() {
    return {
      activeName: 'first',
      items: [
        {
          id: 1,
          imgUrl: require('@/assets/images/a2.jpg'),
        },
        {
          id: 2,
          imgUrl: require('@/assets/images/a3.jpg'),
        },
        {
          id: 3,
          imgUrl: require('@/assets/images/a4.jpg'),
        },
        {
          id: 4,
          imgUrl: require('@/assets/images/a5.jpg'),
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
      gameTwos: [
        {
          id: '001',
          imgSrc: require('@/assets/images/game/game1.png'),
          txt: '地下城与勇士',
        },
        {
          id: '002',
          imgSrc: require('@/assets/images/game/game1.png'),
          txt: '地下城与勇士',
        },
        {
          id: '003',
          imgSrc: require('@/assets/images/game/game1.png'),
          txt: '地下城与勇士',
        },
        {
          id: '004',
          imgSrc: require('@/assets/images/game/game1.png'),
          txt: '地下城与勇士',
        },
        {
          id: '005',
          imgSrc: require('@/assets/images/game/game1.png'),
          txt: '地下城与勇士',
        },
        {
          id: '006',
          imgSrc: require('@/assets/images/game/game1.png'),
          txt: '地下城与勇士',
        },
        {
          id: '007',
          imgSrc: require('@/assets/images/game/game1.png'),
          txt: '地下城与勇士',
        },
        {
          id: '008',
          imgSrc: require('@/assets/images/game/game1.png'),
          txt: '地下城与勇士',
        },
        {
          id: '009',
          imgSrc: require('@/assets/images/game/game1.png'),
          txt: '地下城与勇士',
        },
        {
          id: '010',
          imgSrc: require('@/assets/images/game/game1.png'),
          txt: '地下城与勇士',
        },
        {
          id: '011',
          imgSrc: require('@/assets/images/game/game1.png'),
          txt: '地下城与勇士',
        },
        {
          id: '012',
          imgSrc: require('@/assets/images/game/game1.png'),
          txt: '地下城与勇士',
        },
      ],
      gameThrees: [
        {
          id: '001',
          imgSrc: require('@/assets/images/game/game2.png'),
          txt: '穿越火线',
        },
        {
          id: '002',
          imgSrc: require('@/assets/images/game/game2.png'),
          txt: '穿越火线',
        },
        {
          id: '003',
          imgSrc: require('@/assets/images/game/game2.png'),
          txt: '穿越火线',
        },
        {
          id: '004',
          imgSrc: require('@/assets/images/game/game2.png'),
          txt: '穿越火线',
        },
        {
          id: '005',
          imgSrc: require('@/assets/images/game/game2.png'),
          txt: '穿越火线',
        },
        {
          id: '006',
          imgSrc: require('@/assets/images/game/game2.png'),
          txt: '穿越火线',
        },
        {
          id: '007',
          imgSrc: require('@/assets/images/game/game2.png'),
          txt: '穿越火线',
        },
        {
          id: '008',
          imgSrc: require('@/assets/images/game/game2.png'),
          txt: '穿越火线',
        },
        {
          id: '009',
          imgSrc: require('@/assets/images/game/game2.png'),
          txt: '穿越火线',
        },
        {
          id: '010',
          imgSrc: require('@/assets/images/game/game2.png'),
          txt: '穿越火线',
        },
        {
          id: '011',
          imgSrc: require('@/assets/images/game/game2.png'),
          txt: '穿越火线',
        },
        {
          id: '012',
          imgSrc: require('@/assets/images/game/game2.png'),
          txt: '穿越火线',
        },
      ],
      gameFours: [
        {
          id: '001',
          imgSrc: require('@/assets/images/game/game3.png'),
          txt: '英雄联盟',
        },
        {
          id: '002',
          imgSrc: require('@/assets/images/game/game3.png'),
          txt: '英雄联盟',
        },
        {
          id: '003',
          imgSrc: require('@/assets/images/game/game3.png'),
          txt: '英雄联盟',
        },
        {
          id: '004',
          imgSrc: require('@/assets/images/game/game3.png'),
          txt: '英雄联盟',
        },
        {
          id: '005',
          imgSrc: require('@/assets/images/game/game3.png'),
          txt: '英雄联盟',
        },
        {
          id: '006',
          imgSrc: require('@/assets/images/game/game3.png'),
          txt: '英雄联盟',
        },
        {
          id: '007',
          imgSrc: require('@/assets/images/game/game3.png'),
          txt: '英雄联盟',
        },
        {
          id: '008',
          imgSrc: require('@/assets/images/game/game3.png'),
          txt: '英雄联盟',
        },
        {
          id: '009',
          imgSrc: require('@/assets/images/game/game3.png'),
          txt: '英雄联盟',
        },
        {
          id: '010',
          imgSrc: require('@/assets/images/game/game3.png'),
          txt: '英雄联盟',
        },
        {
          id: '011',
          imgSrc: require('@/assets/images/game/game3.png'),
          txt: '英雄联盟',
        },
        {
          id: '012',
          imgSrc: require('@/assets/images/game/game3.png'),
          txt: '英雄联盟',
        },
      ],
      gameFives: [
        {
          id: '001',
          imgSrc: require('@/assets/images/game/game4.png'),
          txt: '王者荣耀',
        },
        {
          id: '002',
          imgSrc: require('@/assets/images/game/game4.png'),
          txt: '王者荣耀',
        },
        {
          id: '003',
          imgSrc: require('@/assets/images/game/game4.png'),
          txt: '王者荣耀',
        },
        {
          id: '004',
          imgSrc: require('@/assets/images/game/game4.png'),
          txt: '王者荣耀',
        },
        {
          id: '005',
          imgSrc: require('@/assets/images/game/game4.png'),
          txt: '王者荣耀',
        },
        {
          id: '006',
          imgSrc: require('@/assets/images/game/game4.png'),
          txt: '王者荣耀',
        },
        {
          id: '007',
          imgSrc: require('@/assets/images/game/game4.png'),
          txt: '王者荣耀',
        },
        {
          id: '008',
          imgSrc: require('@/assets/images/game/game4.png'),
          txt: '王者荣耀',
        },
        {
          id: '009',
          imgSrc: require('@/assets/images/game/game4.png'),
          txt: '王者荣耀',
        },
        {
          id: '010',
          imgSrc: require('@/assets/images/game/game4.png'),
          txt: '王者荣耀',
        },
        {
          id: '011',
          imgSrc: require('@/assets/images/game/game4.png'),
          txt: '王者荣耀',
        },
        {
          id: '012',
          imgSrc: require('@/assets/images/game/game4.png'),
          txt: '王者荣耀',
        },
      ],
      gameSixs: [
        {
          id: '001',
          imgSrc: require('@/assets/images/game/game5.png'),
          txt: '天涯明月刀',
        },
        {
          id: '002',
          imgSrc: require('@/assets/images/game/game5.png'),
          txt: '天涯明月刀',
        },
        {
          id: '003',
          imgSrc: require('@/assets/images/game/game5.png'),
          txt: '天涯明月刀',
        },
        {
          id: '004',
          imgSrc: require('@/assets/images/game/game5.png'),
          txt: '天涯明月刀',
        },
        {
          id: '005',
          imgSrc: require('@/assets/images/game/game5.png'),
          txt: '天涯明月刀',
        },
        {
          id: '006',
          imgSrc: require('@/assets/images/game/game5.png'),
          txt: '天涯明月刀',
        },
        {
          id: '007',
          imgSrc: require('@/assets/images/game/game5.png'),
          txt: '天涯明月刀',
        },
        {
          id: '008',
          imgSrc: require('@/assets/images/game/game5.png'),
          txt: '天涯明月刀',
        },
        {
          id: '009',
          imgSrc: require('@/assets/images/game/game5.png'),
          txt: '天涯明月刀',
        },
        {
          id: '010',
          imgSrc: require('@/assets/images/game/game5.png'),
          txt: '天涯明月刀',
        },
        {
          id: '011',
          imgSrc: require('@/assets/images/game/game5.png'),
          txt: '天涯明月刀',
        },
        {
          id: '012',
          imgSrc: require('@/assets/images/game/game5.png'),
          txt: '天涯明月刀',
        },
      ],
      gameSevens: [
        {
          id: '001',
          imgSrc: require('@/assets/images/game/game6.png'),
          txt: '阴阳师',
        },
        {
          id: '002',
          imgSrc: require('@/assets/images/game/game6.png'),
          txt: '阴阳师',
        },
        {
          id: '003',
          imgSrc: require('@/assets/images/game/game6.png'),
          txt: '阴阳师',
        },
        {
          id: '004',
          imgSrc: require('@/assets/images/game/game6.png'),
          txt: '阴阳师',
        },
        {
          id: '005',
          imgSrc: require('@/assets/images/game/game6.png'),
          txt: '阴阳师',
        },
        {
          id: '006',
          imgSrc: require('@/assets/images/game/game6.png'),
          txt: '阴阳师',
        },
        {
          id: '007',
          imgSrc: require('@/assets/images/game/game6.png'),
          txt: '阴阳师',
        },
        {
          id: '008',
          imgSrc: require('@/assets/images/game/game6.png'),
          txt: '阴阳师',
        },
        {
          id: '009',
          imgSrc: require('@/assets/images/game/game6.png'),
          txt: '阴阳师',
        },
        {
          id: '010',
          imgSrc: require('@/assets/images/game/game6.png'),
          txt: '阴阳师',
        },
        {
          id: '011',
          imgSrc: require('@/assets/images/game/game6.png'),
          txt: '阴阳师',
        },
        {
          id: '012',
          imgSrc: require('@/assets/images/game/game6.png'),
          txt: '阴阳师',
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
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>
.contents{}
.contents .contents_box{
  max-width: 1200px;
  height: 1100px;
  /* border: 1px solid red; */
  margin: 0 auto;
}
.contents .contents_box .contents_box_left{
  width: 836px;
  height: 1100px;
  margin-right: 18px;
  float: left;
}
.contents .contents_box .contents_box_right{
  width: 344px;
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
  width: 830px;
  height: 370px;
  margin-top: 20px;
}
.contents_box_left .carousel-box .images img{ width: 830px; height: 370px; overflow: hidden; }

.contents_box_left .games{ background: #fff; margin-top: 20px; height: 394px; }
/* .contents_box_left .games .gameLeft{ width: 20%; }
.contents_box_left .games .el-tabs__header{ width: 80%; } */
.contents_box_left .games .paneFirst{
  width: 780px;
  height: 280px;
  padding: 7px 25px;
}
.contents_box_left .games .gameContainer{
  /* width: 830px; */
  height: 280px;
  display: block;
  float: left;
  margin: 0 auto;

}
.contents_box_left .games .gameContainer .gamebox{
  float: left;
  width: 100px;
  height: 125px;
  margin: 10px 15px;
  text-align: center;
}
.contents_box_left .tools{ height: 285px; margin-top: 20px; background: #fff; }
.contents_box_left .tools .tools_title{
  height: 55px;
  background: #e3e3e3;
  line-height: 55px;
}
.contents_box_left .tools .tools_title .span1{
  margin-left: 25px;
}
.contents_box_left .tools .tools_title .span2{
  width: 50px;
  height: 20px;
  line-height: 20px;
  margin-right: 20px;
  margin-top: 17px;
  color: #27c1cd;
  float: right;
  border: 1px solid #27c1cd;
  border-radius: 5px;
  text-align: center;
}
.contents_box_left .tools .tools_content{
  width: 762px;
  height: 180px;
  margin: 25px 35px;
}
.contents_box_left .tools .tools_content .tools_list{
  width: 100px;
  height: 164px;
  float: left;
  display: inline-block;
  margin:0 16px;
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

}
.contents_box_left .tools .tools_content .tools_list .photo .tool_desc{
  position: relative;
  top: 126px;
  color: #fff;
}
.contents_box_left .el-carousel__item,
.contents_box_left .el-carousel__mask{
  height: 370px;
}
.contents_box_right{ margin-top: 20px; }
.contents_box_right .login{ width: 312px; height: 370px; background: #fff; padding: 0 15px; }
.contents_box_right .news{ width: 342px; height: 335px; background: #fff; margin-top: 20px;}
.contents_box_right .imgLink{ width: 342px; height: 344px; background: #fff; margin-top: 20px;}
.contents_box_right .login .el-button{ width: 100%; }
.contents_box_right .login .sign{ margin-top: 20px; }
.contents_box_right .login .row1 .btn1{ background: #32cbd1; color: #fff; margin-bottom: 15px; }
.contents_box_right .login .row2 .btn2{ background: #fff; color: #32cbd1; }
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
.contents_box_right .news .prompt{ padding: 0 15px; }
.contents_box_right .news .prompt .proitem{
  height: 30px;
  line-height: 30px;
  margin: 12px auto;
  border-bottom: 1px dotted #ccc;
}
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
  height: 55px;
  background: #e3e3e3;
  line-height: 55px;
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
.contents .div2{ margin: 50px auto; text-align: center; }
.contents .div2 img{ border-radius: 50%; }
</style>
