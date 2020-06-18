<template>
  <div class="wrapper">
      <div class="header2">
        <el-input
          placeholder="请输入内容"
          v-model="keyword"
          :handInput1="handInput1"
          :handInput2="handInput2"
          :handInput3="handInput3"
          :handInput4="handInput4"
          :handInput5="handInput5"
          :handInput6="handInput6"
          :handInput7="handInput7"
          clearable
          class="input1"
        >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
          <el-button
            type="primary"
            slot="append"
            class="btn1"
            @click="search1();search2();search3();search4();search5();search6();search7()"
          >
            搜索
          </el-button>
        </el-input>
      </div>
      <div class="content">
        <el-tabs v-model="activeName" @tab-click="handleClick" type="card" stretch>
          <el-tab-pane
            label="全部游戏"
            name="first"
            class="paneFirst"
          >
          <!--  ++++++++++++++++ 展示区域一开始 ++++++++++++++++++ -->
            <div class="image-list">
              <!-- // 上部显示模块 -->
              <div class="div1" v-show="isShow">
                <div class="gameContainer">
                  <div class="gamebox"
                    v-for="item in dataShow1"
                    :key="item.id"
                     @click="toDetail(item.id)"
                  >
                    <VmCard
                      :id ="item.id"
                      :imgSrc="item.imgSrc"
                      :txt="item.txt"
                      :description="item.description"
                    >
                    </VmCard>
                  </div>
                </div>
                <div class="block">
                  <!-- :total="data.length" -->
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
              <!-- // 下部隐藏模块 -->
              <div class="div2" v-show="noShow">
                <div class="toolsWrap">
                  <div class="wrap">
                    <div class="top">
                      <div class="pict">
                        <img :src="DataObj.picSrc">
                      </div>
                      <div class="imgList">
                        <div class="name">{{DataObj.txt}}</div>
                        <div class="ExchValue">
                          <div class="type1">
                            <span class="price">游戏类型</span>
                            <span class="price2">{{DataObj.type}}</span>
                          </div>
                          <div class="type2">
                            <span class="price">运营公司</span>
                            <span class="price3">{{DataObj.company}}</span>
                          </div>
                        </div>
                        <div class="ExchNum">
                          <div class="ExchNum_1">游戏备注</div>
                          <div class="ExchNum_2">
                            {{DataObj.Remarks}}
                          </div>
                        </div>
                        <div class="RemainNum">
                          <div class="RemainNum_1">
                            <div class="child">游戏描述</div>
                          </div>
                          <div class="RemainNum_2">{{DataObj.Introduction}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="botm">
                      <el-button type="primary" @click="goBack()">返回列表</el-button>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          <!--  ++++++++++++++++ 展示区域一结束 ++++++++++++++++++ -->
          </el-tab-pane>
          <el-tab-pane label="角色扮演" name="second" class="paneFirst">
            <!--  ++++++++++++++++ 展示区域二开始 ++++++++++++++++++ -->
            <div class="image-list">
              <div class="div1" v-show="isShow">
                <div class="gameContainer">
                  <div class="gamebox"
                    v-for="item in dataShow2"
                    :key="item.id"
                    @click="toDetail(item.id)"
                  >
                    <VmCard
                      :id ="item.id"
                      :imgSrc="item.imgSrc"
                      :txt="item.txt"
                      :description="item.description"
                    >
                    </VmCard>
                  </div>
                </div>
                <div class="block">
                  <!-- :total="data.length" -->
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
              <!-- // 下部隐藏模块 -->
              <div class="div2" v-show="noShow">
                <div class="toolsWrap">
                  <div class="wrap">
                    <div class="top">
                      <div class="pict">
                        <img :src="DataObj.picSrc">
                      </div>
                      <div class="imgList">
                        <div class="name">{{DataObj.txt}}</div>
                        <div class="ExchValue">
                          <div class="type1">
                            <span class="price">游戏类型</span>
                            <span class="price2">{{DataObj.type}}</span>
                          </div>
                          <div class="type2">
                            <span class="price">运营公司</span>
                            <span class="price3">{{DataObj.company}}</span>
                          </div>
                        </div>
                        <div class="ExchNum">
                          <div class="ExchNum_1">游戏备注</div>
                          <div class="ExchNum_2">
                            {{DataObj.Remarks}}
                          </div>
                        </div>
                        <div class="RemainNum">
                          <div class="RemainNum_1">
                            <div class="child">游戏描述</div>
                          </div>
                          <div class="RemainNum_2">{{DataObj.Introduction}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="botm">
                      <el-button type="primary" @click="goBack()">返回列表</el-button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          <!--  ++++++++++++++++ 展示区域二结束 ++++++++++++++++++ -->
          </el-tab-pane>
          <el-tab-pane label="射击游戏" name="third" class="paneFirst">
            <!--  ++++++++++++++++ 展示区域三开始 ++++++++++++++++++ -->
            <div class="image-list">
              <div class="div1" v-show="isShow">
                <div class="gameContainer">
                  <div class="gamebox"
                    v-for="item in dataShow3"
                    :key="item.id"
                    @click="toDetail(item.id)"
                  >
                    <VmCard
                      :id ="item.id"
                      :imgSrc="item.imgSrc"
                      :txt="item.txt"
                      :description="item.description"
                    >
                    </VmCard>
                  </div>
                </div>
                <div class="block">
                  <!-- :total="data.length" -->
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
              <!-- // 下部隐藏模块 -->
              <div class="div2" v-show="noShow">
                <div class="toolsWrap">
                  <div class="wrap">
                    <div class="top">
                      <div class="pict">
                        <img :src="DataObj.picSrc">
                      </div>
                      <div class="imgList">
                        <div class="name">{{DataObj.txt}}</div>
                        <div class="ExchValue">
                          <div class="type1">
                            <span class="price">游戏类型</span>
                            <span class="price2">{{DataObj.type}}</span>
                          </div>
                          <div class="type2">
                            <span class="price">运营公司</span>
                            <span class="price3">{{DataObj.company}}</span>
                          </div>
                        </div>
                        <div class="ExchNum">
                          <div class="ExchNum_1">游戏备注</div>
                          <div class="ExchNum_2">
                            {{DataObj.Remarks}}
                          </div>
                        </div>
                        <div class="RemainNum">
                          <div class="RemainNum_1">
                            <div class="child">游戏描述</div>
                          </div>
                          <div class="RemainNum_2">{{DataObj.Introduction}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="botm">
                      <el-button type="primary" @click="goBack()">返回列表</el-button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          <!--  ++++++++++++++++ 展示区域三结束 ++++++++++++++++++ -->
          </el-tab-pane>
          <el-tab-pane label="动作游戏" name="four" class="paneFirst">
            <!--  ++++++++++++++++ 展示区域四开始 ++++++++++++++++++ -->
            <div class="image-list">
              <div class="div1" v-show="isShow">
                <div class="gameContainer">
                  <div class="gamebox"
                    v-for="item in dataShow4"
                    :key="item.id"
                    @click="toDetail(item.id)"
                  >
                    <VmCard
                      :id ="item.id"
                      :imgSrc="item.imgSrc"
                      :txt="item.txt"
                      :description="item.description"
                    >
                    </VmCard>
                  </div>
                </div>
                <div class="block">
                  <!-- :total="data.length" -->
                  <el-pagination
                    background
                    @size-change="SizeChange4"
                    @current-change="CurrentChange4"
                    :current-page="currentPage"
                    :page-size="pageSize"
                    layout="total, prev, pager, next"
                    :total="data4.length">
                  </el-pagination>
                </div>
              </div>
              <!-- // 下部隐藏模块 -->
              <div class="div2" v-show="noShow">
                <div class="toolsWrap">
                  <div class="wrap">
                    <div class="top">
                      <div class="pict">
                        <img :src="DataObj.picSrc">
                      </div>
                      <div class="imgList">
                        <div class="name">{{DataObj.txt}}</div>
                        <div class="ExchValue">
                          <div class="type1">
                            <span class="price">游戏类型</span>
                            <span class="price2">{{DataObj.type}}</span>
                          </div>
                          <div class="type2">
                            <span class="price">运营公司</span>
                            <span class="price3">{{DataObj.company}}</span>
                          </div>
                        </div>
                        <div class="ExchNum">
                          <div class="ExchNum_1">游戏备注</div>
                          <div class="ExchNum_2">
                            {{DataObj.Remarks}}
                          </div>
                        </div>
                        <div class="RemainNum">
                          <div class="RemainNum_1">
                            <div class="child">游戏描述</div>
                          </div>
                          <div class="RemainNum_2">{{DataObj.Introduction}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="botm">
                      <el-button type="primary" @click="goBack()">返回列表</el-button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          <!--  ++++++++++++++++ 展示区域四结束 ++++++++++++++++++ -->
          </el-tab-pane>
          <el-tab-pane label="竞技游戏" name="five" class="paneFirst">
            <!--  ++++++++++++++++ 展示区域五开始 ++++++++++++++++++ -->
            <div class="image-list">
              <div class="div1" v-show="isShow">
                <div class="gameContainer">
                  <div class="gamebox"
                    v-for="item in dataShow5"
                    :key="item.id"
                    @click="toDetail(item.id)"
                  >
                    <VmCard
                      :id ="item.id"
                      :imgSrc="item.imgSrc"
                      :txt="item.txt"
                      :description="item.description"
                    >
                    </VmCard>
                  </div>
                </div>
                <div class="block">
                  <!-- :total="data.length" -->
                  <el-pagination
                    background
                    @size-change="SizeChange5"
                    @current-change="CurrentChange5"
                    :current-page="currentPage"
                    :page-size="pageSize"
                    layout="total, prev, pager, next"
                    :total="data5.length">
                  </el-pagination>
                </div>
              </div>
              <!-- // 下部隐藏模块 -->
              <div class="div2" v-show="noShow">
                <div class="toolsWrap">
                  <div class="wrap">
                    <div class="top">
                      <div class="pict">
                        <img :src="DataObj.picSrc">
                      </div>
                      <div class="imgList">
                        <div class="name">{{DataObj.txt}}</div>
                        <div class="ExchValue">
                          <div class="type1">
                            <span class="price">游戏类型</span>
                            <span class="price2">{{DataObj.type}}</span>
                          </div>
                          <div class="type2">
                            <span class="price">运营公司</span>
                            <span class="price3">{{DataObj.company}}</span>
                          </div>
                        </div>
                        <div class="ExchNum">
                          <div class="ExchNum_1">游戏备注</div>
                          <div class="ExchNum_2">
                            {{DataObj.Remarks}}
                          </div>
                        </div>
                        <div class="RemainNum">
                          <div class="RemainNum_1">
                            <div class="child">游戏描述</div>
                          </div>
                          <div class="RemainNum_2">{{DataObj.Introduction}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="botm">
                      <el-button type="primary" @click="goBack()">返回列表</el-button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          <!--  ++++++++++++++++ 展示区域五结束 ++++++++++++++++++ -->
          </el-tab-pane>
          <el-tab-pane label="休闲游戏" name="six" class="paneFirst">
            <!--  ++++++++++++++++ 展示区域六开始 ++++++++++++++++++ -->
            <div class="image-list">
              <div class="div1" v-show="isShow">
                <div class="gameContainer">
                  <div class="gamebox"
                    v-for="item in dataShow6"
                    :key="item.id"
                    @click="toDetail(item.id)"
                  >
                    <VmCard
                      :id ="item.id"
                      :imgSrc="item.imgSrc"
                      :txt="item.txt"
                      :description="item.description"
                    >
                    </VmCard>
                  </div>
                </div>
                <div class="block">
                  <!-- :total="data.length" -->
                  <el-pagination
                    background
                    @size-change="SizeChange6"
                    @current-change="CurrentChange6"
                    :current-page="currentPage"
                    :page-size="pageSize"
                    layout="total, prev, pager, next"
                    :total="data6.length">
                  </el-pagination>
                </div>
              </div>
              <!-- // 下部隐藏模块 -->
              <div class="div2" v-show="noShow">
                <div class="toolsWrap">
                  <div class="wrap">
                    <div class="top">
                      <div class="pict">
                        <img :src="DataObj.picSrc">
                      </div>
                      <div class="imgList">
                        <div class="name">{{DataObj.txt}}</div>
                        <div class="ExchValue">
                          <div class="type1">
                            <span class="price">游戏类型</span>
                            <span class="price2">{{DataObj.type}}</span>
                          </div>
                          <div class="type2">
                            <span class="price">运营公司</span>
                            <span class="price3">{{DataObj.company}}</span>
                          </div>
                        </div>
                        <div class="ExchNum">
                          <div class="ExchNum_1">游戏备注</div>
                          <div class="ExchNum_2">
                            {{DataObj.Remarks}}
                          </div>
                        </div>
                        <div class="RemainNum">
                          <div class="RemainNum_1">
                            <div class="child">游戏描述</div>
                          </div>
                          <div class="RemainNum_2">{{DataObj.Introduction}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="botm">
                      <el-button type="primary" @click="goBack()">返回列表</el-button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          <!--  ++++++++++++++++ 展示区域六结束 ++++++++++++++++++ -->
          </el-tab-pane>
          <el-tab-pane label="手机游戏" name="seven" class="paneFirst">
            <!--  ++++++++++++++++ 展示区域七开始 ++++++++++++++++++ -->
            <div class="image-list">
              <div class="div1" v-show="isShow">
                <div class="gameContainer">
                  <div class="gamebox"
                    v-for="item in dataShow7"
                    :key="item.id"
                    @click="toDetail(item.id)"
                  >
                    <VmCard
                      :id ="item.id"
                      :imgSrc="item.imgSrc"
                      :txt="item.txt"
                      :description="item.description"
                    >
                    </VmCard>
                  </div>
                </div>
                <div class="block">
                  <!-- :total="data.length" -->
                  <el-pagination
                    background
                    @size-change="SizeChange7"
                    @current-change="CurrentChange7"
                    :current-page="currentPage"
                    :page-size="pageSize"
                    layout="total, prev, pager, next"
                    :total="data7.length">
                  </el-pagination>
                </div>
              </div>
              <!-- // 下部隐藏模块 -->
              <div class="div2" v-show="noShow">
                <div class="toolsWrap">
                  <div class="wrap">
                    <div class="top">
                      <div class="pict">
                        <img :src="DataObj.picSrc">
                      </div>
                      <div class="imgList">
                        <div class="name">{{DataObj.txt}}</div>
                        <div class="ExchValue">
                          <div class="type1">
                            <span class="price">游戏类型</span>
                            <span class="price2">{{DataObj.type}}</span>
                          </div>
                          <div class="type2">
                            <span class="price">运营公司</span>
                            <span class="price3">{{DataObj.company}}</span>
                          </div>
                        </div>
                        <div class="ExchNum">
                          <div class="ExchNum_1">游戏备注</div>
                          <div class="ExchNum_2">
                            {{DataObj.Remarks}}
                          </div>
                        </div>
                        <div class="RemainNum">
                          <div class="RemainNum_1">
                            <div class="child">游戏描述</div>
                          </div>
                          <div class="RemainNum_2">{{DataObj.Introduction}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="botm">
                      <el-button type="primary" @click="goBack()">返回列表</el-button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          <!--  ++++++++++++++++ 展示区域七结束 ++++++++++++++++++ -->
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  <!--
    <div class="image-list">
      <div class="gameContainer">
        <div class="gamebox"
          v-for="item in dataShow1"
          :key="item.id"
        >
          <VmCard
            :id ="item.id"
            :imgSrc="item.imgSrc"
            :txt="item.txt"
            :description="item.description"
          >
          </VmCard>
        </div>
      </div>
      <div class="block">
        <el-pagination
          background
          @size-change="SizeChange"
          @current-change="CurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next"
          :total="data.length">
        </el-pagination>
      </div>
    </div>
  -->
</template>

<script>
import VmCard from '@/components/tablist/twotab/vm-card';

// const ERR_OK = 0;
export default {
  name: 'VmImageList',
  components: {
    VmCard,
  },
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
    data4: {
      type: Array,
      default() {
        return [];
      },
    },
    data5: {
      type: Array,
      default() {
        return [];
      },
    },
    data6: {
      type: Array,
      default() {
        return [];
      },
    },
    data7: {
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
      dataShow1: [],
      dataShow2: [],
      dataShow3: [],
      dataShow4: [],
      dataShow5: [],
      dataShow6: [],
      dataShow7: [],
      // 当前页默认为1
      currentPage: 1,
      // 每页10条
      pageSize: 10,
      isShow: true,
      noShow: false,
      DataObj: {},
      ID: null,
    };
  },
  created() {
  },
  // 字符长度限制
  filters: {
    ellipsis(value) {
      if (!value) return '';
      if (value.length > 60) {
        return `${value.slice(0, 60)}...`;
      }
      return value;
    },
  },
  methods: {
    // tab点击切换事件
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
        for (let i in elem) {
          if (elem[i].toString().indexOf(that.keyword) > -1) {
            that.dataShow1.push(elem);
            return;
          }
        }
        // for (let i = 0; i < elem.length; i++) {
        //   if (elem[i].toString().indexOf(that.keyword) > -1) {
        //     that.dataShow1.push(elem);
        //     return;
        //   }
        // }
      });
    },
    // ++++++++一区结束++++++++++++++
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
        for (let i in elem) {
          if (elem[i].toString().indexOf(that.keyword) > -1) {
            that.dataShow2.push(elem);
            return;
          }
        }
        // for (let i = 0; i < elem.length; i++) {
        //   if (elem[i].toString().indexOf(that.keyword) > -1) {
        //     that.dataShow2.push(elem);
        //     return;
        //   }
        // }
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
        for (let i in elem) {
          if (elem[i].toString().indexOf(that.keyword) > -1) {
            that.dataShow3.push(elem);
            return;
          }
        }
        // for (let i = 0; i < elem.length; i++) {
        //   if (elem[i].toString().indexOf(that.keyword) > -1) {
        //     that.dataShow3.push(elem);
        //     return;
        //   }
        // }
      });
    },
    // ++++++++三区结束++++++++++++++
    // ++++++++四区开始++++++++++++++
    updateDataShow4() {
      const startPage = (this.currentPage - 1) * this.pageSize;
      const endPage = this.currentPage * this.pageSize;
      this.dataShow4 = this.data4.slice(startPage, endPage);
    },
    SizeChange4(size) {
      this.pageSize = size;
      this.updateDataShow4();
      console.log(`每页 ${size} 条`);
    },
    CurrentChange4(page) {
      this.currentPage = page;
      this.updateDataShow4();
      console.log(`当前第 ${page} 页`);
    },
    // 点击搜索按钮事件
    search4() {
      const that = this;
      const tempData = that.data4;
      that.dataShow4 = [];
      tempData.forEach((elem) => {
        for (let i in elem) {
          if (elem[i].toString().indexOf(that.keyword) > -1) {
            that.dataShow4.push(elem);
            return;
          }
        }
      });
    },
    // ++++++++四区结束++++++++++++++
    // ++++++++五区开始++++++++++++++
    updateDataShow5() {
      const startPage = (this.currentPage - 1) * this.pageSize;
      const endPage = this.currentPage * this.pageSize;
      this.dataShow5 = this.data5.slice(startPage, endPage);
    },
    SizeChange5(size) {
      this.pageSize = size;
      this.updateDataShow5();
      console.log(`每页 ${size} 条`);
    },
    CurrentChange5(page) {
      this.currentPage = page;
      this.updateDataShow5();
      console.log(`当前第 ${page} 页`);
    },
    // 点击搜索按钮事件
    search5() {
      const that = this;
      const tempData = that.data5;
      that.dataShow5 = [];
      tempData.forEach((elem) => {
        for (let i in elem) {
          if (elem[i].toString().indexOf(that.keyword) > -1) {
            that.dataShow5.push(elem);
            return;
          }
        }
      });
    },
    // ++++++++五区结束++++++++++++++
    // ++++++++六区开始++++++++++++++
    updateDataShow6() {
      const startPage = (this.currentPage - 1) * this.pageSize;
      const endPage = this.currentPage * this.pageSize;
      this.dataShow6 = this.data6.slice(startPage, endPage);
    },
    SizeChange6(size) {
      this.pageSize = size;
      this.updateDataShow6();
      console.log(`每页 ${size} 条`);
    },
    CurrentChange6(page) {
      this.currentPage = page;
      this.updateDataShow6();
      console.log(`当前第 ${page} 页`);
    },
    // 点击搜索按钮事件
    search6() {
      const that = this;
      const tempData = that.data6;
      that.dataShow6 = [];
      tempData.forEach((elem) => {
        for (let i in elem) {
          if (elem[i].toString().indexOf(that.keyword) > -1) {
            that.dataShow6.push(elem);
            return;
          }
        }
      });
    },
    // ++++++++六区结束++++++++++++++
    // ++++++++七区开始++++++++++++++
    updateDataShow7() {
      const startPage = (this.currentPage - 1) * this.pageSize;
      const endPage = this.currentPage * this.pageSize;
      this.dataShow7 = this.data7.slice(startPage, endPage);
    },
    SizeChange7(size) {
      this.pageSize = size;
      this.updateDataShow7();
      console.log(`每页 ${size} 条`);
    },
    CurrentChange7(page) {
      this.currentPage = page;
      this.updateDataShow7();
      console.log(`当前第 ${page} 页`);
    },
    // 点击搜索按钮事件
    search7() {
      const that = this;
      const tempData = that.data7;
      that.dataShow7 = [];
      tempData.forEach((elem) => {
        for (let i in elem) {
          if (elem[i].toString().indexOf(that.keyword) > -1) {
            that.dataShow7.push(elem);
            return;
          }
        }
      });
    },
    // ++++++++七区结束++++++++++++++
    toDetail(id) {
      this.isShow = false;
      this.noShow = true;
      let that = this;
      this.$http.get('/api/gameIntrod').then((response) => {
        let resData = response.body;
        let arr1 = resData.data;
        // console.log(resData);
        // console.log(resData.data);
        that.ID = id;
        let newArr = arr1.filter(function(obj){
          return obj.id == that.ID;
        });
        console.log(newArr);
        let list = {};
        for(let i = 0; i < newArr.length; i++) {
          list =  newArr[i];
        }
        console.log(list);
        that.DataObj = list;
      });
    },
    goBack() {
      this.isShow = true;
      this.noShow = false;
    },
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
    data4() {
      this.updateDataShow4();
    },
    data5() {
      this.updateDataShow5();
    },
    data6() {
      this.updateDataShow6();
    },
    data7() {
      this.updateDataShow7();
    },
  },
  mounted() {
    this.updateDataShow1();
    this.updateDataShow2();
    this.updateDataShow3();
    this.updateDataShow4();
    this.updateDataShow5();
    this.updateDataShow6();
    this.updateDataShow7();
    // this.dataShow1 = this.data.slice(0, this.pageSize);
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
      // this.dataShow1 = this.data.slice(0, this.pageSize);
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
    handInput4() {
      const keyword = this.keyword;
      if (keyword) {
        return this.dataShow4.filter(dataNews => {
          return Object.keys(dataNews).some(key => {
            return String(dataNews[key]).toLowerCase().indexOf(keyword) > -1;
          });
        });
      }
      this.updateDataShow4();
    },
    handInput5() {
      const keyword = this.keyword;
      if (keyword) {
        return this.dataShow5.filter(dataNews => {
          return Object.keys(dataNews).some(key => {
            return String(dataNews[key]).toLowerCase().indexOf(keyword) > -1;
          });
        });
      }
      this.updateDataShow5();
    },
    handInput6() {
      const keyword = this.keyword;
      if (keyword) {
        return this.dataShow6.filter(dataNews => {
          return Object.keys(dataNews).some(key => {
            return String(dataNews[key]).toLowerCase().indexOf(keyword) > -1;
          });
        });
      }
      this.updateDataShow6();
    },
    handInput7() {
      const keyword = this.keyword;
      if (keyword) {
        return this.dataShow7.filter(dataNews => {
          return Object.keys(dataNews).some(key => {
            return String(dataNews[key]).toLowerCase().indexOf(keyword) > -1;
          });
        });
      }
      this.updateDataShow7();
    },
  },
  // 更新数据显示数据一旦更改
};
</script>
<style scoped>
  .content #pane-first{height: 1200px;}
  .content #pane-second{height: 1200px;}
  .content #pane-third{height: 1200px;}
  .content #pane-four{height: 1200px;}
  .content #pane-five{height: 1200px;}
  .content #pane-six{height: 1200px;}
  .content #pane-seven{height: 1200px;}
  .header2{
    position: relative;
    height: 50px;
    /* width: 1180px; */
    margin: 0px 5px 10px;
    background: #f0f0f0;
  }
  .header2 .input1{ width: 340px; margin:5px 0 5px 15px; }
  .header2 .input1 .btn1{
    background: #26c1cd;
    color: #fff;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .wrapper{
    position: relative;
    height: 1080px;
    padding-top: 5px;
  }
  .wrapper .content {
    position: relative;
    height: 1000px;
    margin: 0px auto;
    background: #fff;
  }
  .wrapper .content .gameContainer{
    position: relative;
    height: 840px;
    overflow-y: auto;
  }
  .wrapper .content .block{
    width: 100%;
    height: 32px;
    position: relative;
    top: 30px;
    text-align: center;
  }
  .gameContainer{
    position: relative;
    height: 840px;
  }
  /* .block{
    width: 100%;
    height: 32px;
    position: relative;
    top: 30px;
    text-align: center;
  }
 */
  .gamebox{
    width: 558px;
    height: 138px;
    float: left;
    padding: 15px;
  }
  .gamebox .wrapItem{
    width: 520px;
    height: 100px;
    padding: 20px;
    border: 1px solid #e7e7e7;
    cursor: pointer;
  }
  .gamebox .wrapItem:hover{
    border-color: #09c;
    box-shadow: darkgrey 5px 5px 20px 5px;
  }
  .gamebox .wrapItem .oLeft,
  .gamebox .wrapItem .oRight{
    display: inline-block;
    float: left;
    font-size: 14px;
  }
  .gamebox .wrapItem .oLeft{ width: 100px; height: 100px; margin-right: 20px; }
  .gamebox .wrapItem .oRight{ width: 390px; height: 100px; }
  .gamebox .wrapItem .oRight .p1{ font-size: 16px; font-weight: bold; margin-bottom: 10px; }
  .gamebox .wrapItem .oRight .p2{
    width: 100%;
    text-overflow:ellipsis;
    overflow:hidden;
    margin-bottom: 10px;
  }
  .gamebox .wrapItem .oRight .p3 a{
    color: #26c1cd;
    text-decoration: none;
  }
  /* 隐藏区域样式 */
  .toolsWrap .wrap .top{
    width: 1064px;
    height: 306px;
    padding: 32px 22px 32px 32px;
    border: 1px solid #e7e7e7;
  }
  .toolsWrap .wrap .top .pict{
    width: 500px;
    height: 306px;
    display: inline-block;
    float: left;
  }
  .toolsWrap .wrap .top .imgList{
    width: 515px;
    height: 305px;
    margin-left: 15px;
    display: inline-block;
    float: right;
  }
  .toolsWrap .wrap .top .imgList .name{
    height: 45px;
    line-height: 45px;
    border-bottom: 1px dashed #c5c5c5;
    color: #1ea6b0;
    font-size: 30px;
  }
  .toolsWrap .wrap .top .imgList .ExchValue{
    height: 28px;
    padding: 17px 0;
    /* line-height: 62px; */
    border-bottom: 1px dashed #c5c5c5;
  }
  .ExchValue .type1{float: left; width: 50%; display: inline-block;}
  .ExchValue .type2{float: left; width: 50%; display: inline-block;}
  .toolsWrap .wrap .top .imgList .ExchValue .price{
    width: 75px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
    background: #f0f0f0;
    border-radius: 5px;
    font-size: 14px;
  }
  .toolsWrap .wrap .top .imgList .ExchValue .price2{
    height: 28px;
    line-height: 28px;
    margin-left: 15px;
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    /* color: #fdb912; */
  }
  .toolsWrap .wrap .top .imgList .ExchValue .price3{
    height: 28px;
    line-height: 28px;
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    margin-left: 15px;
  }
  .toolsWrap .wrap .top .imgList .ExchNum{
    height: 62px;
    /* padding: 17px 0; */
    border-bottom: 1px dashed #c5c5c5;
  }
  .toolsWrap .wrap .top .imgList .ExchNum  .ExchNum_1{
    width: 75px;
    height: 28px;
    line-height: 28px;
    margin: 17px 0;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
    background: #f0f0f0;
    border-radius: 5px;
    font-size: 14px;
    float: left;
  }
  .toolsWrap .wrap .top .imgList .ExchNum  .ExchNum_2{
    height: 38px;
    line-height: 38px;
    margin: 12px 0 12px 15px;
    display: inline-block;
    vertical-align: middle;
    /* color: #fdb912; */
    font-size: 14px;
    float: left;
  }
  .toolsWrap .wrap .top .imgList .RemainNum{
    height: 112px;
    padding-top: 20px;
    height: 132px;
  }
  .toolsWrap .wrap .top .imgList .RemainNum .RemainNum_1{
    width: 75px;
    height: 100px;
    display: inline-block;
    float: left;
  }
  .toolsWrap .RemainNum .RemainNum_1 .child{
    height: 28px;
    line-height: 28px;
    text-align: center;
    vertical-align: middle;
    background: #f0f0f0;
    border-radius: 5px;
    font-size: 14px;
  }
  .toolsWrap .wrap .top .imgList .RemainNum .RemainNum_2{
    width: 420px;
    height: 100px;
    margin-left: 15px;
    line-height: 28px;
    display: inline-block;
    float: left;
    font-size: 14px;
  }
  /* .toolsWrap .wrap .top .imgList .RedeemNow{margin-top: 10px;}
  .toolsWrap .wrap .top .imgList .RedeemNow .el-button{
    width: 242px;
    height: 58px;
    background-color: #fdbe12;
    border-color: #fdbe12;
    color: #fff;
  } */
  .toolsWrap .wrap .botm{
    height: 56px;
    text-align: center;
    padding: 72px 0;
  }
  .toolsWrap .wrap .botm .el-button{
    width: 312px;
    height: 62px;
  }
</style>
