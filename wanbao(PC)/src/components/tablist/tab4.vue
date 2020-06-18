<template>
  <div class="link4">
    <div class="purse">钱包</div>
    <div class="myContent">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="我的货币" name="first" class="first">
          <div class="child3">
            <div class="box">
              <el-table
                :header-cell-style="tableHeaderColor"
                :data="tableData1.slice((currentPage1-1)*pageSize1,currentPage1*pageSize1)"
                style="width: 100%">
                <el-table-column
                  prop="Currency"
                  label="币种"
                >
                <template slot-scope="scope">
                  <img :src="scope.row.imgSRC" class="pic" />
                  <span class="text">{{scope.row.Currency}}</span>
                </template>
                </el-table-column>
                <el-table-column
                  prop="amount"
                  label="数量"
                >
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="child4">
            <el-pagination
              background
              @size-change="SizeChange1"
              @current-change="CurrentChange1"
              :current-page="currentPage1"
              :page-size="pageSize1"
              layout="total, prev, pager, next"
              :total="tableData1.length">
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="我的道具" name="second" class="second">
          <div class="child3">
            <div class="box">
              <el-table
                :header-cell-style="tableHeaderColor"
                :data="tableData2.slice((currentPage2-1)*pageSize2,currentPage2*pageSize2)"
                style="width: 100%">
                <el-table-column
                  prop="icon"
                  label="图标"
                >
                  <template slot-scope="scope">
                    <img :src="scope.row.icon" class="img" />
                  </template>
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="名称"
                >
                </el-table-column>
                <el-table-column
                  prop="toolNum"
                  label="道具编号"
                >
                </el-table-column>
                <el-table-column
                  prop="quality"
                  label="品质"
                >
                </el-table-column>
                <el-table-column
                  prop="generation"
                  label="代数"
                >
                </el-table-column>
                <el-table-column
                  prop="Star"
                  label="星级"
                >
                </el-table-column>
                <el-table-column
                  prop="RefePrice"
                  label="参考价"
                >
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="child4">
            <el-pagination
              background
              @size-change="SizeChange2"
              @current-change="CurrentChange2"
              :current-page="currentPage2"
              :page-size="pageSize2"
              layout="total, prev, pager, next"
              :total="tableData2.length">
            </el-pagination>
          </div>
        </el-tab-pane>

        <el-tab-pane label="提现" name="third">
          <div class="tixian">
            <el-form ref="form" :model="form" label-width="90px">
              <el-form-item label="提现方式">
                <el-radio-group v-model="radio1">
                  <el-radio :label="1">
                    <img src="@/assets/images/cd.png" class="bg" alt="银行卡">银行卡
                  </el-radio>
                  <el-radio :label="2">
                    <img src="@/assets/images/wc.png" class="bg" alt="微信">微信
                  </el-radio>
                  <el-radio :label="3">
                    <img src="@/assets/images/zfb.png" class="bg" alt="支付宝">支付宝
                  </el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="提现账号">
                <el-select v-model="form.region" placeholder="请选择账号">
                  <el-option label="账号一" value="001"></el-option>
                  <el-option label="账号二" value="002"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="账号余额">
                <p>{{this.delivery}}</p>
              </el-form-item>
              <el-form-item label="提现金额" class="coinItem">
                <el-input v-model="form.name" class="coinInput"></el-input>
                <el-button>全部提现</el-button>
              </el-form-item>
              <el-form-item label="手续费方式" class="shouxu">
                <el-radio-group v-model="radio2">
                  <el-radio :label="1">XWG</el-radio>
                  <el-radio :label="2">TCB</el-radio>
                </el-radio-group>
                <div :selectRadio="selectRadio(radio2)">
                  <div class="div1" v-show="isShow">
                    <img src="@/assets/images/tips.png" class="phot">
                    <p class="p1">用XWG支付手续费，手续费减半</p>
                  </div>
                  <div class="div1" v-show="noShow">
                    <img src="@/assets/images/tips.png" class="phot">
                    <p class="p1">用TCB支付手续费，手续费100%</p>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="锁定TCB">
                <p>{{this.delivery}}</p>
              </el-form-item>
              <el-form-item label="手续费">
                <p>{{this.delivery}}</p>
              </el-form-item>
              <el-form-item class="queding">
                <el-button class="myBtn">确定</el-button>
              </el-form-item>
            </el-form>

          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>

<script>
const ERR_OK = 0;
export default {
  data() {
    return {
      activeName: 'first',
      value1: '',
      value2: '',
      scrollTop: 0,
      // 当前页默认为1
      currentPage1: 1,
      // 每页10条
      pageSize1: 10,
      currentPage2: 1,
      // 每页10条
      pageSize2: 10,
      tableData1: [],
      tableData2: [],
      isShow: true,
      noShow: false,
      radio1: 1,
      radio2: 1,
      delivery: '47,800.89',
      form: {
        name: '',
        region: '',
        // type: [],
        resource: '',
        desc: '',
      },
    };
  },
  created() {
    this.TableDataShow1();
    this.TableDataShow2();
  },
  methods: {
    tableHeaderColor({ rowIndex }) {
      if (rowIndex === 0) {
        return 'background-color: #c7cfe4; color: #3b3a3a; font-weight: bold;';
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    TableDataShow1() {
      this.$http.get('/api/myCurrency').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.tableData1 = response.data;
        }
      });
    },
    SizeChange1(size) {
      this.pageSize1 = size;
      // this.TableDataShow();
      console.log(`每页 ${size} 条`);
    },
    CurrentChange1(page) {
      this.currentPage1 = page;
      // this.TableDataShow();
      // 置顶
      // const that = this;
      // const timer = setInterval(() => {
      //   const ispeed = Math.floor(-that.scrollTop / 5);
      //   document.documentElement.scrollTop = that.scrollTop + ispeed;
      //   document.body.scrollTop = that.scrollTop + ispeed;
      //   if (that.scrollTop === 0) {
      //     clearInterval(timer);
      //   }
      // }, 16);
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    // scrollToTop() {
    //   const that = this;
    //   const scrollTop =
    //   window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    //   that.scrollTop = scrollTop;
    // },
    TableDataShow2() {
      this.$http.get('/api/myProps').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.tableData2 = response.data;
        }
      });
    },
    SizeChange2(size) {
      this.pageSize2 = size;
      // this.TableDataShow();
      console.log(`每页 ${size} 条`);
    },
    CurrentChange2(page) {
      this.currentPage2 = page;
    },
    selectRadio(tab) {
      if (tab === 2) {
        this.isShow = false;
        this.noShow = true;
      } else if (tab === 1) {
        this.isShow = true;
        this.noShow = false;
      }
    },
  },
};
</script>
<style scoped>
  .link4{
    height: 920px;/*no*/
    background: #fff;
  }
  .link4 .purse{
    background: #eee;
    height: 53px;/*no*/
    line-height: 53px;/*no*/
    padding-left: 30px;/*no*/
    font-size: 20px;/*no*/
  }
  .myContent{padding: 0 30px;}
  .myContent .child3{
    margin: 5px 0px;
  }
  .myContent .child3 .box{
    margin: 20px auto;/*no*/
  }
  .myContent .first .child3 .box >>> .el-table td {
    padding: 15px 0;/*no*/
  }
  .myContent .second .child3 .box >>> .el-table td {
    padding: 7px 0;/*no*/
    text-align: center;
  }
  .myContent .child3 .box Img{ vertical-align: middle; }
  .myContent .child4{ margin-top: 50px;/*no*/ }
  .myContent >>> .el-tabs--card .el-tabs__header {
    border-bottom: 1px solid #28c1cc;/*no*/
    margin: 30px 0 40px;/*no*/
  }
  .myContent >>> .el-table .el-table__header-wrapper{
    border-radius: 6px;/*no*/
  }
  .myContent >>> .el-table th {
    padding: 8px 0;/*no*/
  }
  .myContent >>> .second .el-table th {text-align: center;}
  .myContent >>> .first .el-table th div{padding-left: 30px;/*no*/}
  .myContent >>> .first .el-table__row td:nth-child(1) .cell{
    text-align: left;
  }
  .myContent >>> .first .el-table__row td:nth-child(1) .cell .pic{
    margin-right: 10px;/*no*/
    vertical-align: middle;
  }
  .myContent >>> .first .el-table__row td:nth-child(1) .cell .text{padding: 1px 0;/*no*/}
  .myContent >>> .first .el-table__row td:nth-child(2) .cell{
    text-align: left;
  }
  .myContent .child4{ text-align: right; padding-right: 0px; }
  .tixian .el-form {
    width: 500px;/*no*/
  }
  .tixian .coinItem .coinInput{
    width: 60%;
    margin-right: 20px;/*no*/
  }
  .tixian .bg{
    width: 20px;/*no*/
    height: 20px;/*no*/
    line-height: 20px;/*no*/
    vertical-align: middle;
    margin-right: 5px;/*no*/
  }
  .tixian >>> .el-form-item__label{text-align: left;}
  .tixian .shouxu .div1{
    height: 40px;/*no*/
  }
  .tixian .shouxu .div1 .p1,
  .tixian .shouxu .div1 .phot{display: inline-block; float: left;}
  .tixian .shouxu .div1 .phot{
    /* vertical-align: middle; */
    margin-top: 11px;/*no*/
    margin-right: 15px;/*no*/
  }
  .tixian .queding .myBtn{
    width: 145px;/*no*/
    background: #fdba12;
    color: #fff;
    font-size: 22px;/*no*/
    outline: none;
    border: 1px solid #fdba12;/*no*/
  }
</style>

