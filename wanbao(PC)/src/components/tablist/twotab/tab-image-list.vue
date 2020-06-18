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
    width: 1200px;
    max-height: 1166px;
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
    height: 46px;
    background: #f0f0f0;
    line-height: 46px;
    padding-left: 30px;
    padding-right: 40px;
  }
  .wrapper .content .title{
    display: inline-block;
    float: left;
    /* position: relative;
    height: 46px;
    background: #f0f0f0;
    line-height: 46px;
    padding-left: 20px; */
  }
  .wrapper .content .header2{
    display: inline-block;
    float: right;
  }
  .wrapper .content .main{
    max-height: 1190px;
    height: auto;
    margin: 40px 30px 0;
    /* border: 1px solid green; */
  }
  .wrapper .content .main .tools_content{
    height: 808px;
    /* padding-left: 4px; */
  }
  .content >>> .el-tabs__header{margin: 30px 30px 15px;}
  .content >>> .el-tabs--card .el-tabs__header {
    border-bottom: 1px solid #28c1cc;/*no*/
  }
  .tools_content .tools_list{
    /* width: 100px;
    margin: 0 21px 25px; */
    width: 112px;
    margin: 0 1.33% 35px;
    float: left;
    display: inline-block;
    text-align: center;
    /* border: 1px solid pink; */
  }
  .tools_content .tools_list .span1{
    color: #ed3942;
    margin-right: 5px;
  }
  .tools_content .tools_list .photo{
    position: relative;
    /* width: 100px;
    height: 136px; */
    width: 112px;
    height: 176px;
    /* a2a2a2 */
  }
  .tools_content .tools_list .photo .top{
    height: 150px;
    background: #a2a2a2;
    border-radius: 6px;
  }
  .tools_content .tools_list .photo .top .div1{
    height: 120px;
    background: #ececec;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  .tools_content .photo .top .div1 .pic{
    margin-top: 15px;
    border-radius: 50%;
  }
  .tools_content .tools_list .photo .tool_desc{
    margin: 5px 0;
    font-size: 14px;
    color: #fff;
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
    border-bottom:1px dotted #dbdbdb;
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
    border: 1px solid #28c1cc;
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
  .content2 .wrap .child2 .box{ height: 328px; border-bottom:1px dotted #dbdbdb;  }
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
  .content2 .wrap .child2 .tip2 .son .div1{width: 160px; margin: 0 106px 0 30px;}
  .content2 .wrap .child2 .tip2 .son .div2{width: 190px;}
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
</style>

