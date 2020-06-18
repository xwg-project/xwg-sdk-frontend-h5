<template>
  <div class="page4">
    <div class="myCoin">提现管理</div>
    <div class="myContent">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="银行卡" name="first">
          <div class="child3">
            <el-table
              :data="tableData1.slice((currentPage1-1)*pageSize1,currentPage1*pageSize1)"
              style="width: 100%"
            >
              <el-table-column
                prop="bank"
                label="银行"
                width="90"
              >
              </el-table-column>
              <el-table-column
                prop="cardNumber"
                label="卡号"
                width="140"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="90"
              >
              </el-table-column>
              <el-table-column
                prop="SubBranch"
                label="支行"
                width="170"
              >
              </el-table-column>
              <el-table-column
                prop="phone"
                label="手机"
              >
              </el-table-column>
              <el-table-column
                label="操作"
              >
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="Operat1(scope.$index, scope.row)"
                  >
                   <img src="@/assets/images/de.png">
                  </el-button>
                  <el-button size="mini">
                    <img src="@/assets/images/re.png">
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
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
        <el-tab-pane label="微信" name="second">
          <div class="child3">
            <el-table
              :data="tableData2.slice((currentPage2-1)*pageSize2,currentPage2*pageSize2)"
              style="width: 100%"
            >
              <el-table-column
                prop="bank"
                label="银行"
                width="90"
              >
              </el-table-column>
              <el-table-column
                prop="cardNumber"
                label="卡号"
                width="140"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="90"
              >
              </el-table-column>
              <el-table-column
                prop="SubBranch"
                label="支行"
                width="170"
              >
              </el-table-column>
              <el-table-column
                prop="phone"
                label="手机"
              >
              </el-table-column>
              <el-table-column
                label="操作"
              >
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="Operat2(scope.$index, scope.row)"
                  >
                   <img src="@/assets/images/de.png">
                  </el-button>
                  <el-button size="mini">
                    <img src="@/assets/images/re.png">
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
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
        <el-tab-pane label="支付宝" name="third">
          <div class="child3">
            <el-table
              :data="tableData3.slice((currentPage3-1)*pageSize3,currentPage3*pageSize3)"
              style="width: 100%"
            >
              <el-table-column
                prop="bank"
                label="银行"
                width="90"
              >
              </el-table-column>
              <el-table-column
                prop="cardNumber"
                label="卡号"
                width="140"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="90"
              >
              </el-table-column>
              <el-table-column
                prop="SubBranch"
                label="支行"
                width="170"
              >
              </el-table-column>
              <el-table-column
                prop="phone"
                label="手机"
              >
              </el-table-column>
              <el-table-column
                label="操作"
              >
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="Operat3(scope.$index, scope.row)"
                  >
                   <img src="@/assets/images/de.png">
                  </el-button>
                  <el-button size="mini">
                    <img src="@/assets/images/re.png">
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="child4">
            <el-pagination
              background
              @size-change="SizeChange3"
              @current-change="CurrentChange3"
              :current-page="currentPage3"
              :page-size="pageSize3"
              layout="total, prev, pager, next"
              :total="tableData3.length">
            </el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
const ERR_OK = 0;
export default {
  name: 'Page4',
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
      pageSize2: 10,
      currentPage3: 1,
      pageSize3: 10,
      tableData1: [],
      tableData2: [],
      tableData3: [],
    };
  },
  created() {
    this.TableDataShow1();
    this.TableDataShow2();
    this.TableDataShow3();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 银行卡
    TableDataShow1() {
      this.$http.get('/api/BackCard').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.tableData1 = response.data;
        }
      });
    },
    SizeChange1(size) {
      this.pageSize1 = size;
      this.TableDataShow1();
      console.log(`每页 ${size} 条`);
    },
    CurrentChange1(page) {
      this.currentPage1 = page;
      this.TableDataShow1();
    },
    // 微信
    TableDataShow2() {
      this.$http.get('/api/WeChat').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.tableData2 = response.data;
        }
      });
    },
    SizeChange2(size) {
      this.pageSize2 = size;
      this.TableDataShow2();
      console.log(`每页 ${size} 条`);
    },
    CurrentChange2(page) {
      this.currentPage2 = page;
      this.TableDataShow2();
    },
    // 支付宝
    TableDataShow3() {
      this.$http.get('/api/Alipay').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.tableData3 = response.data;
        }
      });
    },
    SizeChange3(size) {
      this.pageSize3 = size;
      this.TableDataShow3();
      console.log(`每页 ${size} 条`);
    },
    CurrentChange3(page) {
      this.currentPage3 = page;
      this.TableDataShow3();
    },
    Operat1(index, row) {
      console.log(index, row);
    },
    Operat2(index, row) {
      console.log(index, row);
    },
    Operat3(index, row) {
      console.log(index, row);
    },
  },
};
</script>
<style scoped>
  .page4{
    height: 900px;/*no*/
    background: #fff;
  }
  .page4 .myCoin{
    background: #eee;
    height: 65px;/*no*/
    line-height: 65px;/*no*/
    padding-left: 40px;/*no*/
    font-size: 16px;/*no*/
  }
  .myContent{padding: 0 30px;/*no*/}
  .myContent .child1{border-bottom: 1px solid #e7e7e7;/*no*/}
  .myContent .child1 .grid2{ border-right: 1px solid #e7e7e7;/*no*/}
  .myContent .child1 .grid1 .div2{ color: #ee3844; }
  .myContent .child1 .grid2 .div2{ color: #a6a6a6; }
  .myContent .child1 .grid3 .div2{ color: #27c0ce; }
  .myContent .child1 .grid-content {
    height: 74px;/*no*/
    padding: 20px 0;/*no*/
    text-align: center;
  }
  .myContent .child2{
    height: 80px;/*no*/
    padding: 0 40px;/*no*/
  }
  .myContent .child2 .rightGird{position: relative;}
  .myContent .child2 .rightGird .search{
    position: relative;
    right: 0;
    height: 40px;/*no*/
    margin: 32px auto 0;/*no*/
  }
  .myContent .child2 .jilu{
    height: 40px;/*no*/
    line-height: 40px;/*no*/
    margin-top: 32px;/*no*/
  }
  .myContent .child3{
    margin: 60px auto 0;/*no*/
  }
  .myContent .child3 .box >>> .el-table td {
    padding: 8px 0;/*no*/
  }
  .myContent .child3 >>> .el-table td,
  .myContent .child3 >>> .el-table th{
    text-align: center;
  }
  .myContent .child3 >>> .el-table th{
    background-color: #c7cfe4;
    color: #3b3a3a;
    font-weight: bold;
  }
  .myContent .child3 >>> .el-table__header-wrapper {
    border-radius: 5px;/*no*/
  }
  .myContent .child3 >>> .el-table .cell{white-space: nowrap;}
  .myContent .child3 >>> .el-table .cell .el-button--mini,
  .myContent .child3 >>> .el-table .cell .el-button--mini.is-round {
    padding: 4px 4px;
  }
  .myContent >>> .el-tabs--card .el-tabs__header {
    border-bottom: 1px solid #28c1cc;/*no*/
    margin: 30px 0 0;/*no*/
  }
  .myContent >>> .el-table__row td:nth-child(1) .cell{
    text-align: left;
  }
  .myContent >>> .el-table__row td:nth-child(2) .cell{
    text-align: right;
  }
  .search .item{ display: inline-block; float: left; }
  .search .item .el-date-editor--datetimerange.el-input__inner {
    width: 400px;/*no*/
  }
  .search .midLine{
    height: 40px;/*no*/
    line-height: 40px;/*no*/
    margin:0 5px;/*no*/
  }
  .search .inquiry{margin-left: 10px;/*no*/}
  .search .inquiry .el-button{
    background: #27d3d3;
    border: 1px #27d3d3 solid;/*no*/
    color: #fff;
  }
  .myContent .child1 .grid-content .div1{
    margin: 5px 0px 15px;/*no*/
  }
  .myContent .child1 .grid-content .div2{
    font-size: 25px;/*no*/
    font-weight: bold;
  }
  .myContent .child4{
    text-align: right;
    padding-right: 0;
    margin-top: 50px;/*no*/
  }
</style>
