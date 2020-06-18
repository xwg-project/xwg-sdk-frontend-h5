<template>
  <div class="link3">
    <div class="content" v-show="isShow">
      <div class="titlewrap">
        <div class="title">全部道具</div>
      </div>
      <!-- // tab列表 -->
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="全部游戏" name="first">
          <div class="main">
            <div class="tools_content">
              <div
                class="tools_list"
                v-for="item in dataShow1.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                :key="item.id"
                @click="toDetail(item.id)"
              >
                <div class="photo">
                  <img :src="item.imgSrc" class="pic">
                  <p class="tool_desc">{{item.txt}}</p>
                </div>
              </div>
            </div>
            <div class="footer">
              <div class="block">
                <el-pagination
                  background
                  @size-change="SizeChange1"
                  @current-change="CurrentChange1"
                  :current-page="currentPage"
                  :page-size="pageSize"
                  layout="total, prev, pager, next"
                  :total="dataShow1.length">
                </el-pagination>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="角色扮演" name="second">
          <div class="main">
            <div class="tools_content">
              <div
                class="tools_list"
                v-for="item in dataShow2.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                :key="item.id"
                @click="toDetail(item.id)"
              >
                <div class="photo">
                  <img :src="item.imgSrc" class="pic">
                  <p class="tool_desc">{{item.txt}}</p>
                </div>
                <!-- <p><span class="span1">{{tool.goldCoin}}</span>金币</p> -->
              </div>
            </div>
            <div class="footer">
              <div class="block">
                <el-pagination
                  background
                  @size-change="SizeChange2"
                  @current-change="CurrentChange2"
                  :current-page="currentPage"
                  :page-size="pageSize"
                  layout="total, prev, pager, next"
                  :total="dataShow2.length">
                </el-pagination>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="动作冒险" name="third">
          <div class="main">
            <div class="tools_content">
              <div
                class="tools_list"
                v-for="item in dataShow3.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                :key="item.id"
                @click="toDetail(item.id)"
              >
                <div class="photo">
                  <img :src="item.imgSrc" class="pic">
                  <p class="tool_desc">{{item.txt}}</p>
                </div>
                <!-- <p><span class="span1">{{tool.goldCoin}}</span>金币</p> -->
              </div>
            </div>
            <div class="footer">
              <div class="block">
                <el-pagination
                  background
                  @size-change="SizeChange3"
                  @current-change="CurrentChange3"
                  :current-page="currentPage"
                  :page-size="pageSize"
                  layout="total, prev, pager, next"
                  :total="dataShow3.length">
                </el-pagination>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="益智策略" name="fourth">
          <div class="main">
            <div class="tools_content">
              <div
                class="tools_list"
                v-for="item in dataShow4.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                :key="item.id"
                @click="toDetail(item.id)"
              >
                <div class="photo">
                  <img :src="item.imgSrc" class="pic">
                  <p class="tool_desc">{{item.txt}}</p>
                </div>
                <!-- <p><span class="span1">{{tool.goldCoin}}</span>金币</p> -->
              </div>
            </div>
            <div class="footer">
              <div class="block">
                <el-pagination
                  background
                  @size-change="SizeChange4"
                  @current-change="CurrentChange4"
                  :current-page="currentPage"
                  :page-size="pageSize"
                  layout="total, prev, pager, next"
                  :total="dataShow4.length">
                </el-pagination>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="竞速竞技" name="five">
          <div class="main">
            <div class="tools_content">
              <div
                class="tools_list"
                v-for="item in dataShow5.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                :key="item.id"
                @click="toDetail(item.id)"
              >
                <div class="photo">
                  <img :src="item.imgSrc" class="pic">
                  <p class="tool_desc">{{item.txt}}</p>
                </div>
                <!-- <p><span class="span1">{{tool.goldCoin}}</span>金币</p> -->
              </div>
            </div>
            <div class="footer">
              <div class="block">
                <el-pagination
                  background
                  @size-change="SizeChange5"
                  @current-change="CurrentChange5"
                  :current-page="currentPage"
                  :page-size="pageSize"
                  layout="total, prev, pager, next"
                  :total="dataShow5.length">
                </el-pagination>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="模拟经营" name="six">
          <div class="main">
            <div class="tools_content">
              <div
                class="tools_list"
                v-for="item in dataShow6.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                :key="item.id"
                @click="toDetail(item.id)"
              >
                <div class="photo">
                  <img :src="item.imgSrc" class="pic">
                  <p class="tool_desc">{{item.txt}}</p>
                </div>
                <!-- <p><span class="span1">{{tool.goldCoin}}</span>金币</p> -->
              </div>
            </div>
            <div class="footer">
              <div class="block">
                <el-pagination
                  background
                  @size-change="SizeChange6"
                  @current-change="CurrentChange6"
                  :current-page="currentPage"
                  :page-size="pageSize"
                  layout="total, prev, pager, next"
                  :total="dataShow6.length">
                </el-pagination>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="content content2" v-show="noShow">
      <div class="titlewrap">
        <div class="title" @click="goBack()">游戏>全部道具>{{data1.txt}}</div>
      </div>
      <!-- // 详情 -->
      <div class="detile1">
        <div class="wrap">
          <div class="child1">
            <div class="box">
              <div class="left">
                <img :src="data1.imgSrc" class="img1">
              </div>
              <div class="right">
                <div class="son1">{{data1.txt}}</div>
                <div class="son2"><span>动作冒险</span></div>
                <div class="son3">
                  <div class="tip">
                    <img src="@/assets/images/anzhuo.png" class="img1">
                    <span class="span1">安卓下载</span>
                  </div>
                  <div class="tip">
                    <img src="@/assets/images/ios.png" class="img1">
                    <span class="span1">IOS下载</span>
                  </div>
                  <div class="tip">
                    <img src="@/assets/images/h5.png" class="img1">
                    <span class="span1">H5试玩</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="child2">
            <div class="box">
              <div class="tip tip1">
                <h4><img src="@/assets/images/news_title.png">内容提要</h4>
                <p>{{data1.description}}</p>
              </div>
              <div class="tip tip2">
                <h4>核心玩法：</h4>
                <p>{{data1.description}}</p>
              </div>
              <div class="tip tip3">
                <h4>特色游戏：</h4>
                <p>{{data1.description}}</p>
              </div>
            </div>
          </div>
          <div class="child3">
            <h4><img src="@/assets/images/news_title.png">图片介绍</h4>
            <ul>
              <li><img src="@/assets/images/pic1.png"></li>
              <li><img src="@/assets/images/pic2.png"></li>
              <li><img src="@/assets/images/pic3.png"></li>
              <li><img src="@/assets/images/pic4.png"></li>
              <li><img src="@/assets/images/pic5.png"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { state } from 'vuex';
const ERR_OK = 0;
// let oId = null;
export default {
  data() {
    return {
      activeName: 'first',
      num: 1,
      isShow: true,
      noShow: false,
      scrollTop: 0,
      // 当前页默认为1
      currentPage: 1,
      // 每页35条
      pageSize: 40,
      // 数据
      dataShow1: [],
      dataShow2: [],
      dataShow3: [],
      dataShow4: [],
      dataShow5: [],
      dataShow6: [],
      // detaildata: [],
      data1: {},
      ID: null,
    };
  },
  created() {
    this.getData1();
    this.getData2();
    this.getData3();
    this.getData4();
    this.getData5();
    this.getData6();
    // let sta1 = this.$store.state.name;
    // console.log(sta1);
  },
  mounted() {
    // this.getDetail();
    window.addEventListener('scroll', this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollToTop);
  },
  methods: {
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this;
      const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      that.scrollTop = scrollTop;
    },
    backScroll() {
      const that = this;
      const timer = setInterval(() => {
        const ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = that.scrollTop + ispeed;
        document.body.scrollTop = that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 10);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // ---------------tab1区开始-------------
    getData1() {
      this.$http.get('/api/gameOnes').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.dataShow1 = response.data;
        }
      });
    },
    SizeChange1(size) {
      this.pageSize = size;
      this.getData1();
      console.log(`每页 ${size} 条`);
    },
    CurrentChange1(page) {
      this.currentPage = page;
      this.getData1();
      this.backScroll();
    },
    // 公共点击事件方法
    toDetail(id) {
      this.isShow = false;
      this.noShow = true;
      const that = this;
      this.$http.get('/api/gameOnes').then((response) => {
        const resData = response.body;
        const arr1 = resData.data;
        // console.log(resData);
        // console.log(resData.data);
        that.ID = id;
        const newArr = arr1.filter((obj) => {
          return obj.id === that.ID;
        });
        console.log(newArr);
        let list = {};
        for (let i = 0; i < newArr.length; i++) {
          list = newArr[i];
        }
        console.log(list);
        that.data1 = list;
      });
      this.$emit('click', () => {
        alert('inner');
      });
    },
    // ---------------tab1区结束-------------
    // ---------------tab2区开始-------------
    getData2() {
      this.$http.get('/api/gameTwos').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.dataShow2 = response.data;
        }
      });
    },
    SizeChange2(size) {
      this.pageSize = size;
      this.getData2();
      console.log(`每页 ${size} 条`);
    },
    CurrentChange2(page) {
      this.currentPage = page;
      this.getData2();
      this.backScroll();
    },
    // ---------------tab2区结束-------------
    // ---------------tab3区开始-------------
    getData3() {
      this.$http.get('/api/gameThrees').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.dataShow3 = response.data;
        }
      });
    },
    SizeChange3(size) {
      this.pageSize = size;
      this.getData3();
      console.log(`每页 ${size} 条`);
    },
    CurrentChange3(page) {
      this.currentPage = page;
      this.getData3();
      this.backScroll();
    },
    // ---------------tab3区结束-------------
    // ---------------tab4区开始-------------
    getData4() {
      this.$http.get('/api/gameFours').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.dataShow4 = response.data;
        }
      });
    },
    SizeChange4(size) {
      this.pageSize = size;
      this.getData4();
      console.log(`每页 ${size} 条`);
    },
    CurrentChange4(page) {
      this.currentPage = page;
      this.getData4();
      this.backScroll();
    },
    // ---------------tab4区结束-------------
    // ---------------tab5区开始-------------
    getData5() {
      this.$http.get('/api/gameFives').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.dataShow5 = response.data;
        }
      });
    },
    SizeChange5(size) {
      this.pageSize = size;
      this.getData5();
      console.log(`每页 ${size} 条`);
    },
    CurrentChange5(page) {
      this.currentPage = page;
      this.getData5();
      this.backScroll();
    },
    // ---------------tab5区结束-------------
    // ---------------tab6区开始-------------
    getData6() {
      this.$http.get('/api/gameSixs').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.dataShow6 = response.data;
        }
      });
    },
    SizeChange6(size) {
      this.pageSize = size;
      this.getData6();
      console.log(`每页 ${size} 条`);
    },
    CurrentChange6(page) {
      this.currentPage = page;
      this.getData6();
      this.backScroll();
    },
    // ---------------tab6区结束-------------
    goBack() {
      this.isShow = true;
      this.noShow = false;
    },
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>
<style scoped>
  .link3{
    position: relative;
    /* width: 1200px; */
    width: 80%;
    /* max-height: 1166px; */
    max-height: 9rem;
    height: auto;
    margin: 20px auto 30px;
    /* border: 1px solid red; */
    background: #fff;
  }
  .link3 .content{
    position: relative;
    height: 100%;
  }
  .link3 .content .titlewrap{
    position: relative;
  }
  .link3 .content .title{
    position: relative;
    height: 46px;/*no*/
    background: #f0f0f0;
    line-height: 46px;/*no*/
    padding-left: 20px;/*no*/
    font-size: 16px;/*no*/
  }
  .link3 .content .main{
    max-height: 1190px;
    height: auto;
    margin: 40px 30px 0;/*no*/
    /* border: 1px solid green; */
  }
  .link3 .content .main .tools_content{
    /* height: 808px; */
    height: 4.808333rem;
  }
  .content >>> .el-tabs__item {
    padding: 0 20px;/*no*/
    height: 40px;/*no*/
    line-height: 40px;/*no*/
    font-size: 14px;/*no*/
  }
  .content >>> .el-tabs__header{margin: 30px 30px 15px;}
  .content >>> .el-tabs__nav-wrap {
    overflow: hidden;
    margin-bottom: -1px;/*no*/
    position: relative;
  }
  .content >>> .el-tabs--card .el-tabs__header {
    border-bottom: 1px solid #28c1cc;/*no*/
  }
  .content >>> .el-tabs--card>.el-tabs__header .el-tabs__item {
    border-bottom: 1px solid transparent;/*no*/
    border-left: 1px solid #E4E7ED;/*no*/
  }
  .content >>> .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    border-bottom-color: #FFF;
  }
  .content >>> .el-tabs--card>.el-tabs__header .el-tabs__nav {
    border: 1px solid #E4E7ED;/*no*/
    border-bottom: none;
    border-radius: 4px 4px 0 0;/*no*/
  }
  /* .content >>> .el-tabs .el-tabs__nav-wrap::after{
    background-color: #28c1cc;
  } */
  .tools_content .tools_list{
    /* width: 100px; */
    width: 0.64rem;
    /* margin: 0 21px 25px; */
    margin: 0 1.30% 25px;
    float: left;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    /* border: 1px solid pink; */
  }
  .tools_content .tools_list .span1{
    color: #ed3942;
    margin-right: 5px;
  }
  .tools_content .tools_list .photo{
    position: relative;
    /* width: 100px; */
    width: 0.64rem;
    /* height: 136px; */
    height: 0.86rem;
  }
  .tools_content .tools_list .photo .pic{
    /* margin-top: -10px; */
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  .tools_content .tools_list .photo .tool_desc{
    margin-top: 10px;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .link3 .content .footer{
    position: relative;
    height: 70px;
    margin: 38px 0;
  }
  .link3 .content .footer .block{
    position: relative;
    width: 100%;
    height: 32px;
    top: 20px;
    text-align: center;
  }
  .content2{ height: 1000px; }
  .content2 .title{cursor: pointer;}
  .content2 .detile1 .child2{height: 345px; padding: 25px 20px 0 20px;}
  .content2 .wrap .child1{height: 280px; padding: 22px 20px;}
  .content2 .wrap .child1 .box{border-bottom:1px dotted #dbdbdb; height: 236px;}
  .content2 .wrap .child1 .left{
    float: left;
    margin-right: 25px;
    width: 210px;
    height: 236px;
    text-align: center;
  }
  .content2 .wrap .child1 .left .img1{
    width: 182px;
    height: 182px;
    margin-top: 25px;
  }
  .content2 .wrap .child1 .right{ float: left; height: 186px; padding:25px 0;}
  .content2 .wrap .child1 .right .son1{font-size: 20px; font-weight: bold;}
  .content2 .wrap .child1 .right .son1,
  .content2 .wrap .child1 .right .son2{margin-bottom: 30px;}
  .content2 .wrap .child1 .right .son2 span{
    width: 105px;
    height: 42px;
    line-height: 42px;
    display: block;
    text-align: center;
    border-radius: 6px;/*no*/
    border: 1px solid #28c1cc;/*no*/
  }
  .content2 .wrap .child1 .right .son3 .tip{
    /* width: 142px; */
    width: 0.8rem;
    height: 60px;
    line-height: 60px;
    float: left;
    background: #28c1cc;
    margin-right: 30px;
    border-radius: 6px;/*no*/
    cursor: pointer;
    text-align: center;
  }
  .content2 .wrap .child1 .right .son3 .tip .img1{
    /* margin-right: 10px; */
    margin-right: 5%;
    vertical-align: middle;
    width: 20%;
    display: inline-block;
    float: left;
    position: relative;
    top: 18%;
    left: 10%;
  }
  .content2 .wrap .child1 .right .son3  .span1{
    display: inline-block;
    color: #fff;
    font-size: 14px;
    width: 70%;
    float: left;
  }
  .content2 .wrap .child2 .box{ border-bottom:1px dotted #dbdbdb;/*no*/ }
  .content2 .wrap .child2 .tip{ margin-bottom: 20px; }
  .content2 .wrap .child2 .tip h4{ margin-bottom: 15px; }
  .content2 .wrap .child2 .tip1 h4 img{
    vertical-align: middle;
    margin-right: 10px;
    position: relative;
    top: -2px;
  }
  .content2 .wrap .child2 .tip1{height: 95px;}
  .content2 .wrap .child2 .tip2{height: 85px;}
  .content2 .wrap .child2 .tip3{height: 100px;}
  .content2 .wrap .child3{
    /* height: 400px; */
    height: 2.66rem;
    padding: 25px 20px;
  }
  .content2 .wrap .child3 h4{height: 35px; line-height: 35px;}
  .content2 .wrap .child3 h4 img{
    vertical-align: middle;
    margin-right: 10px;
    position: relative;
    top: -2px;
  }
  .content2 .wrap .child3 ul{
    width: 100%;
    height: auto;
    max-height: 300px;/*no*/
    margin-top: 30px;
    list-style: none;
    padding: 0;
  }
  .content2 .detile1 .child3 ul li{
    width: 17%;
    margin: 0 1.5%;
    list-style: none;
    float: left;
  }
  .content2 .detile1 .child3 ul li img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  /*页码部分*/
  .content .footer >>> .el-pagination.is-background .btn-next,
  .content .footer >>> .el-pagination.is-background .btn-prev,
  .content .footer >>> .el-pagination.is-background .el-pager li {
    margin: 0 5px;/*no*/
    background-color: #f4f4f5;
    color: #606266;
    min-width: 30px;/*no*/
    border-radius: 2px;/*no*/
  }
  .content .footer >>> .el-pager li {
    padding: 0 4px;/*no*/
    font-size: 13px;/*no*/
    min-width: 35.5px;/*no*/
    height: 28px;/*no*/
    line-height: 28px;/*no*/
  }
  .content .footer >>> .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #409EFF;
    color: #FFF;
  }
  .content .footer >>> .el-pagination button,
  .content .footer >>> .el-pagination span:not([class*=suffix]) {
    display: inline-block;
    font-size: 13px;/*no*/
    min-width: 35.5px;/*no*/
    height: 28px;/*no*/
    line-height: 28px;/*no*/
    vertical-align: top;
  }
  .content .footer >>> .el-pagination.is-background .btn-next.disabled,
  .content .footer >>> .el-pagination.is-background .btn-next:disabled,
  .content .footer >>> .el-pagination.is-background .btn-prev.disabled,
  .content .footer >>> .el-pagination.is-background .btn-prev:disabled,
  .content .footer >>> .el-pagination.is-background .el-pager li.disabled {
    color: #C0C4CC;
  }
  .content .footer >>> .el-pagination .btn-next .el-icon,
  .content .footer >>> .el-pagination .btn-prev .el-icon{
    font-size: 12px;/*no*/
  }
</style>

