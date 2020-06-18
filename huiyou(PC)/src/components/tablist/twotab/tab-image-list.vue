<template>
  <div class="wrapper">
    <div class="content" v-show="isShow">

      <div class="titlewrap">
        <div class="title">道具</div>
        <div class="header2">
        <el-input
          placeholder="请输入内容"
          v-model="keyword"
          :handInput1="handInput1"
          :handInput2="handInput2"
          :handInput3="handInput3"
          clearable
          class="input1"
        >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
          <el-button
            type="primary"
            slot="append"
            class="btn1"
            @click="search1();search2();search3()"
          >
            搜索
          </el-button>
        </el-input>
      </div>
      </div>
      <!-- // tab列表 -->
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="全部道具" name="first">
          <div class="main">
            <div class="tools_content">
              <div
                class="tools_list"
                v-for="item in dataShow1"
                :key="item.id"
                @click="toDetail(item.id)"
              >
                <div class="photo">
                  <div class="top">
                    <div class="div1">
                      <img :src="item.picSrc" class="pic">
                    </div>
                    <div class="div2">
                      <p class="tool_desc">{{item.hero}}</p>
                    </div>
                  </div>
                  <div class="bottom">剩余：{{item.endMony}}</div>
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
                  :total="data1.length">
                </el-pagination>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已拥有" name="second">
          <div class="main">
            <div class="tools_content">
              <div
                class="tools_list"
                v-for="item in dataShow2"
                :key="item.id"
                @click="toDetail(item.id)"
              >
                <div class="photo">
                  <div class="top">
                    <div class="div1">
                      <img :src="item.picSrc" class="pic">
                    </div>
                    <div class="div2">
                      <p class="tool_desc">{{item.hero}}</p>
                    </div>
                  </div>
                  <div class="bottom">剩余：{{item.endMony}}</div>
                </div>
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
                  :total="data2.length">
                </el-pagination>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="未拥有" name="third">
          <div class="main">
            <div class="tools_content">
              <div
                class="tools_list"
                v-for="item in dataShow3"
                :key="item.id"
                @click="toDetail(item.id)"
              >
                <div class="photo">
                  <div class="top">
                    <div class="div1">
                      <img :src="item.picSrc" class="pic">
                    </div>
                    <div class="div2">
                      <p class="tool_desc">{{item.hero}}</p>
                    </div>
                  </div>
                  <div class="bottom">剩余：{{item.endMony}}</div>
                </div>
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
                  :total="data3.length">
                </el-pagination>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="content content2" v-show="noShow">
      <div class="titlewrap">
        <div class="title" @click="goBack()">游戏>全部道具>{{DataObj.hero}}</div>
      </div>
      <!-- // 详情 -->
      <div class="detile1">
        <div class="wrap">
          <div class="child1">
            <div class="box">
              <div class="left">
                <img :src="DataObj.picSrc" class="img1">
              </div>
              <div class="right">
                <div class="son1">{{DataObj.hero}}</div>
                <div class="son2">发行量：{{DataObj.Circulation}}</div>
                <div class="son3">剩余量： {{DataObj.surplus}}</div>
                <div class="son4">来源： {{DataObj.source}}</div>
              </div>
            </div>
          </div>
          <div class="child2">
            <div class="box">
              <div class="tip tip1">
                <h4><img src="@/assets/images/news_title.png">基础属性</h4>
              </div>
              <div class="tip tip2">
                <div class="tip2_1 son">
                  <div class="div1">
                    <img src="@/assets/images/icon1.png">
                    生命：{{DataObj.life}}
                  </div>
                  <div class="div2">
                    <img src="@/assets/images/icon2.png">
                    攻击：{{DataObj.attack}}
                  </div>
                </div>
                <div class="tip2_2 son">
                  <div class="div1">
                    <img src="@/assets/images/icon3.png">
                    命中：{{DataObj.Hit1}}
                  </div>
                  <div class="div2">
                    <img src="@/assets/images/icon4.png">
                    闪避：{{DataObj.dodge}}
                  </div>
                </div>
                <div class="tip2_3 son">
                  <div class="div1">
                    <img src="@/assets/images/icon5.png">
                    命中：{{DataObj.Hit2}}
                  </div>
                  <div class="div2">
                    <img src="@/assets/images/icon6.png">
                    暴击倍数：{{DataObj.CriMultiple}}
                  </div>
                </div>
                <div class="tip2_4 son">
                  <div class="div1">
                    <img src="@/assets/images/icon7.png">
                    命中：{{DataObj.Hit3}}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="child3">
            <h4><img src="@/assets/images/news_title.png">角色简介</h4>
            <p>{{DataObj.descr}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { state } from 'vuex';
// const ERR_OK = 0;
// let oId = null;
export default {
  name: 'TabImageList',
  props: {
    // 原始数据
    data1: {
      type: Array,
      default() {
        return [];
      },
    },
    data2: {
      type: Array,
      default() {
        return [];
      },
    },
    data3: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      keyword: '',
      activeName: 'first',
      isShow: true,
      noShow: false,
      scrollTop: 0,
      // 当前页默认为1
      currentPage: 1,
      // 每页35条
      pageSize: 32,
      // 数据
      dataShow1: [],
      dataShow2: [],
      dataShow3: [],
      DataObj: {},
      ID: null,
    };
  },
  created() {
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // ++++++++一区开始++++++++++++++
    updateDataShow1() {
      const startPage = (this.currentPage - 1) * this.pageSize;
      // const endPage = startPage + this.pageSize;
      // this.dataShow1 = this.data.slice(startPage, endPage);
      const endPage = this.currentPage * this.pageSize;
      this.dataShow1 = this.data1.slice(startPage, endPage);
    },
    SizeChange1(size) {
      this.pageSize = size;
      this.updateDataShow1();
      console.log(`每页 ${size} 条`);
    },
    CurrentChange1(page) {
      this.currentPage = page;
      this.updateDataShow1();
      console.log(`当前第 ${page} 页`);
    },
    // 点击搜索按钮事件
    search1() {
      const that = this;
      const tempData = that.data1;
      that.dataShow1 = [];
      tempData.forEach((elem) => {
        // for (const i of Object.keys(elem)) {
        //   if (elem[i].toString().indexOf(that.keyword) > -1) {
        //     that.dataShow1.push(elem);
        //     return;
        //   }
        //   console.log(elem[i]);
        // }
        Object.keys(elem).forEach(i => {
          if (elem[i].toString().indexOf(that.keyword) > -1) {
            that.dataShow1.push(elem);
            return;
          }
          console.log(elem[i]);
        });
      });
    },
    // ++++++++一区结束++++++++++++++
    // 公共点击事件方法
    toDetail(id) {
      this.isShow = false;
      this.noShow = true;
      const that = this;
      this.$http.get('/api/HeroDetail').then((response) => {
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
        that.DataObj = list;
      });
    },
    // ++++++++二区开始++++++++++++++
    updateDataShow2() {
      const startPage = (this.currentPage - 1) * this.pageSize;
      const endPage = this.currentPage * this.pageSize;
      this.dataShow2 = this.data2.slice(startPage, endPage);
    },
    SizeChange2(size) {
      this.pageSize = size;
      this.updateDataShow2();
      console.log(`每页 ${size} 条`);
    },
    CurrentChange2(page) {
      this.currentPage = page;
      this.updateDataShow2();
      console.log(`当前第 ${page} 页`);
    },
    // 点击搜索按钮事件
    search2() {
      const that = this;
      const tempData = that.data2;
      that.dataShow2 = [];
      tempData.forEach((elem) => {
        // for (let i = 0; i < elem.length; i++) {
        //   if (elem[i].toString().indexOf(that.keyword) > -1) {
        //     that.dataShow2.push(elem);
        //     return;
        //   }
        // }
        Object.keys(elem).forEach(i => {
          if (elem[i].toString().indexOf(that.keyword) > -1) {
            that.dataShow2.push(elem);
            return;
          }
          console.log(elem[i]);
        });
      });
    },
    // ++++++++二区结束++++++++++++++
    // ++++++++三区开始++++++++++++++
    updateDataShow3() {
      const startPage = (this.currentPage - 1) * this.pageSize;
      const endPage = this.currentPage * this.pageSize;
      this.dataShow3 = this.data3.slice(startPage, endPage);
    },
    SizeChange3(size) {
      this.pageSize = size;
      this.updateDataShow3();
      console.log(`每页 ${size} 条`);
    },
    CurrentChange3(page) {
      this.currentPage = page;
      this.updateDataShow3();
      console.log(`当前第 ${page} 页`);
    },
    // 点击搜索按钮事件
    search3() {
      const that = this;
      const tempData = that.data3;
      that.dataShow3 = [];
      tempData.forEach((elem) => {
        // for (let i = 0; i < elem.length; i++) {
        //   if (elem[i].toString().indexOf(that.keyword) > -1) {
        //     that.dataShow3.push(elem);
        //     return;
        //   }
        // }
        Object.keys(elem).forEach(i => {
          if (elem[i].toString().indexOf(that.keyword) > -1) {
            that.dataShow3.push(elem);
            return;
          }
          console.log(elem[i]);
        });
      });
    },
    // ++++++++三区结束++++++++++++++
    goBack() {
      this.isShow = true;
      this.noShow = false;
    },
    handleChange(value) {
      console.log(value);
    },
  },
  mounted() {
    this.updateDataShow1();
    this.updateDataShow2();
    this.updateDataShow3();
  },
  watch: {
    data1() {
      this.updateDataShow1();
    },
    data2() {
      this.updateDataShow2();
    },
    data3() {
      this.updateDataShow3();
    },
  },
  computed: {
    // 输入框事件
    handInput1() {
      const keyword = this.keyword;
      if (keyword) {
        return this.dataShow1.filter(dataNews => {
          return Object.keys(dataNews).some(key => {
            return String(dataNews[key]).toLowerCase().indexOf(keyword) > -1;
          });
        });
      }
      this.updateDataShow1();
    },
    handInput2() {
      const keyword = this.keyword;
      if (keyword) {
        return this.dataShow2.filter(dataNews => {
          return Object.keys(dataNews).some(key => {
            return String(dataNews[key]).toLowerCase().indexOf(keyword) > -1;
          });
        });
      }
      this.updateDataShow2();
    },
    handInput3() {
      const keyword = this.keyword;
      if (keyword) {
        return this.dataShow3.filter(dataNews => {
          return Object.keys(dataNews).some(key => {
            return String(dataNews[key]).toLowerCase().indexOf(keyword) > -1;
          });
        });
      }
      this.updateDataShow3();
    },
  },
};
</script>
<style scoped>
  .wrapper{
    position: relative;
    /* width: 1200px; */
    width: 100%;
    /* max-height: 1166px; */
    max-height: 9rem;
    height: auto;
    margin: 20px auto 30px;
    /* border: 1px solid red; */
    background: #fff;
  }
  .wrapper .content{
    position: relative;
    height: 100%;
  }
  .wrapper .content .titlewrap{
    position: relative;
    position: relative;
    height: 46px;/*no*/
    background: #f0f0f0;
    line-height: 46px;/*no*/
    padding-left: 30px;/*no*/
    padding-right: 40px;/*no*/
  }
  .wrapper .content .title{
    display: inline-block;
    float: left;
    font-size: 16px;/*no*/
  }
  .wrapper .content .header2{
    display: inline-block;
    float: right;
  }
  .wrapper .content .header2 >>> .el-input__inner:focus {
    border-color: #09c;
  }
  .wrapper .content .header2 >>> .el-input__inner {
    width: 100%;
    border-radius: 4px;/*no*/
    border: 1px solid #DCDFE6;/*no*/
    height: 40px;/*no*/
    line-height: 40px;/*no*/
    line-height: 1px;/*no*/
    padding: 0 15px;/*no*/
  }
  .wrapper .content .header2 >>> .el-input__prefix{left: 5px;/*no*/}
  .wrapper .content .header2 >>> .el-input__icon {
    height: 100%;
    width: 25px;/*no*/
    line-height: 40px;/*no*/
  }
  .wrapper .content .header2 >>> .el-input--prefix .el-input__inner {
    padding-left: 30px;/*no*/
  }
  .wrapper .content .header2 >>> .el-input--suffix .el-input__inner {
    padding-right: 30px;/*no*/
  }
  .wrapper .content .header2 >>> .el-input-group--append .el-input__inner,
  .wrapper .content .header2 >>> .el-input-group__prepend {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .wrapper .content .main{
    /* max-height: 1190px; */
    max-height: 8rem;
    height: auto;
    margin: 40px 30px 0;
  }
  .wrapper .content .main .tools_content{
    height: 5.6rem;
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
  .tools_content .tools_list{
    width: 0.68rem;
    /* margin: 0 1.25% 0.182292rem; */
    margin: 0 1.2% 0.182292rem;
    float: left;
    display: inline-block;
    text-align: center;
    cursor: pointer;
  }
  /* @-moz-document url-prefix() {
    .tools_content .tools_list{
      margin: 0 0.8% 0.182292rem;
    }
  } */
  .tools_content .tools_list .span1{
    color: #ed3942;
    margin-right: 5px;
  }
  .tools_content .tools_list .photo{
    /* width: 112px; */
    position: relative;
    width: 0.68rem;
    height: 1.2rem;
    /* height: 176px; */
  }
  .tools_content .tools_list .photo .top{
    /* height: 150px; */
    height: 1rem;
    background: #a2a2a2;
    border-radius: 6px;/*no*/
  }
  .tools_content .tools_list .photo .top .div1{
    /* height: 120px; */
    height: 0.8rem;
    background: #ececec;
    border-top-left-radius: 6px;/*no*/
    border-top-right-radius: 6px;/*no*/
    position: relative;
  }
  .tools_content .photo .top .div1 .pic{
    /* margin-top: 15px; */
    border-radius: 50%;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .tools_content .photo .top .div2{
    height: 0.2rem;
    line-height: 0.2rem;
  }
  .tools_content .photo .top .div2 .tool_desc{
    margin: 0 auto;
    font-size: 14px;
    color: #fff;
    height: 0.2rem;
    line-height: 0.2rem;
  }
  .tools_content .tools_list .photo .bottom{
    font-size: 14px;
    margin-top: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
  }
  .wrapper .content .footer{
    position: relative;
    height: 70px;
    margin: 38px 0;
  }
  .wrapper .content .footer .block{
    position: relative;
    width: 100%;
    height: 32px;
    top: 20px;
    text-align: center;
  }
  .content2{ height: 1000px; }
  .content2 .title{cursor: pointer;}
  .content2 .wrap .child1{
    height: 241px;
    padding: 18px 20px 13px;
  }
  .content2 .wrap .child1 .box{
    border-bottom:1px dotted #dbdbdb;/*no*/
    height: 182px;
    padding: 30px 0 30px 15px;
  }
  .content2 .wrap .child1 .left{
    float: left;
    margin-right: 45px;
    /* width: 210px;
    height: 236px; */
    width: 180px;
    height: 180px;
    text-align: center;
    background: #e3e3e3;
    border-radius: 6px;
  }
  .content2 .wrap .child1 .left .img1{
    width: 130px;
    height: 130px;
    border-radius: 50%;
    margin-top: 25px;
  }
  .content2 .wrap .child1 .right{ float: left; height: 180px;}
  .content2 .wrap .child1 .right .son1{font-size: 20px; font-weight: bold;}
  .content2 .wrap .child1 .right .son1{margin-bottom: 40px;}
  .content2 .wrap .child1 .right .son2,
  .content2 .wrap .child1 .right .son3{
    margin-bottom: 20px;
  }
  .content2 .wrap .child1 .right .son2,
  .content2 .wrap .child1 .right .son3,
  .content2 .wrap .child1 .right .son4{
    font-size: 18px;
  }
  .content2 .wrap .child1 .right .son2 span{
    width: 105px;
    height: 42px;
    line-height: 42px;
    display: block;
    text-align: center;
    border-radius: 6px;
    border: 1px solid #28c1cc;/*no*/
  }
  .content2 .wrap .child1 .right .son3 .tip{
    width: 142px;
    height: 60px;
    line-height: 60px;
    float: left;
    background: #28c1cc;
    margin-right: 30px;
    border-radius: 6px;
    cursor: pointer;
    text-align: center;
  }
  .content2 .wrap .child1 .right .son3 .tip .img1{vertical-align: middle; margin-right: 10px;}
  .content2 .wrap .child1 .right .son3  .span1{color: #fff;}
  .content2 .detile1 .child2{height: 325px; padding: 0 20px 15px;}
  .content2 .wrap .child2 .box{
    height: 328px;
    border-bottom:1px dotted #dbdbdb;/*no*/
  }
  /* .content2 .wrap .child2 .tip{ margin-bottom: 20px; } */
  .content2 .wrap .child2 .tip h4{
    height: 45px;
    line-height: 45px;
    font-size: 18px;
    font-weight: bold;
  }
  .content2 .wrap .child2 .tip1 h4 img{
    vertical-align: middle;
    margin-right: 10px;
    position: relative;
    top: -2px;
  }
  .content2 .wrap .child2 .tip1{height: 45px; margin-bottom: 12px;}
  .content2 .wrap .child2 .tip2{height: 267px; font-size: 16px;}
  .content2 .wrap .child2 .tip2 .son{
    height: 50px;
    line-height: 50px;
  }
  .content2 .wrap .child2 .tip2 .son .div1,
  .content2 .wrap .child2 .tip2 .son .div2{
    display: inline-block;
    float: left;
  }
  .content2 .wrap .child2 .tip2 .son .div1 img,
  .content2 .wrap .child2 .tip2 .son .div2 img{
   vertical-align: middle;
   margin-right: 25px;
  }
  .content2 .wrap .child2 .tip2 .son .div1{
    width: 180px;/*no*/
    margin: 0 106px 0 30px;/*no*/
  }
  .content2 .wrap .child2 .tip2 .son .div2{
    width: 210px;/*no*/
  }
  .content2 .wrap .child3{height: 400px; padding: 0px 20px;}
  .content2 .wrap .child3 h4{
    height: 45px;
    line-height: 45px;
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: bold;
  }
  .content2 .wrap .child3 h4 img{
    vertical-align: middle;
    margin-right: 10px;
    position: relative;
    top: -2px;
  }
  .content2 .wrap .child3 p{padding-left: 25px;line-height: 30px; font-size: 16px;}
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

