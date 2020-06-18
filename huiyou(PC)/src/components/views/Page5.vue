<template>
  <div class="page5">
    <div class="myCoin">操作记录</div>
    <div class="myContent">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="账号密码" name="first">
          <div class="child3">
            <div class="box">
              <el-table
                :data="tables.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                :show-header="false"
                style="width: 100%">
                <el-table-column
                  prop="type"
                >
                  <template slot-scope="scope" class="div1">
                    <span style="margin-left: 10px" v-html="format(scope.row.type)"></span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="trandingHour"
                >
                <template slot-scope="scope" class="div2">
                  <span style="margin-left: 10px" v-html="format(scope.row.trandingHour)"></span>
                </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="child4">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-size="pageSize"
              layout="total, prev, pager, next"
              :total="total">
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="支付密码" name="second">
          <div class="child3">
            <div class="box">
              <el-table
                :data="tables.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                :show-header="false"
                style="width: 100%">
                <el-table-column
                  prop="type"
                >
                  <template slot-scope="scope">
                    <span style="margin-left: 10px" v-html="format(scope.row.type)"></span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="trandingHour"
                >
                <template slot-scope="scope">
                  <span style="margin-left: 10px" v-html="format(scope.row.trandingHour)"></span>
                </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="child4">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-size="pageSize"
              layout="total, prev, pager, next"
              :total="total">
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
  name: 'Page5',
  data() {
    return {
      activeName: 'first',
      value1: '',
      value2: '',
      scrollTop: 0,
      // 当前页默认为1
      currentPage: 1,
      // 每页10条
      pageSize: 10,
      tableData: [],
    };
  },
  created() {
    this.TableDataShow();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 前端过滤
    format(val) {
      val = val.toString();
      if (val.indexOf(this.search) !== -1 && this.search !== '') {
        return val.replace(this.search, `<font color="red">${this.search}</font>`);
      } else {
        return val;
      }
    },
    TableDataShow() {
      this.$http.get('/api/tool3').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.tableData = response.data;
        }
      });
    },
    handleSizeChange(size) {
      this.pageSize = size;
      // this.TableDataShow();
      console.log(`每页 ${size} 条`);
    },
    handleCurrentChange(page) {
      this.currentPage = page;
      // this.TableDataShow();
      // 置顶
      const that = this;
      const timer = setInterval(() => {
        const ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = that.scrollTop + ispeed;
        document.body.scrollTop = that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this;
      const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      that.scrollTop = scrollTop;
    },
  },
  computed: {
    // 前端过滤
    tables() {
      const search = this.search;
      if (search) {
        return this.tableData.filter(dataNews => {
          return Object.keys(dataNews).some(key => {
            return String(dataNews[key]).toLowerCase().indexOf(search) > -1;
          });
        });
      }
      return this.tableData;
    },
    // 总条数
    total() {
      return this.tables.length;
    },
  },
  watch: {
    // 检测表格数据过滤变化，自动跳到第一页
    tables() {
      this.currentPage = 1;
    },
  },
};
</script>
<style scoped>
  .page5{
    margin-left: 10px;/*no*/
    height: 900px;
    background: #fff;
  }
  .page5 .myCoin{
    background: #eee;
    height: 65px;/*no*/
    line-height: 65px;/*no*/
    padding-left: 40px;/*no*/
    font-size: 16px;/*no*/
  }
  .myContent{padding: 0 30px;/*no*/}
  .myContent >>> .el-tabs__item {
    padding: 0 20px;/*no*/
    height: 40px;/*no*/
    line-height: 40px;/*no*/
    font-size: 14px;/*no*/
  }
  .myContent .child1{border-bottom: 1px solid #e7e7e7;/*no*/}
  .myContent .child1 .grid2{ border-right: 1px solid #e7e7e7;/*no*/}
  .myContent .child1 .grid1 .div2{ color: #ee3844; }
  .myContent .child1 .grid2 .div2{ color: #a6a6a6; }
  .myContent .child1 .grid3 .div2{ color: #27c0ce; }
  .myContent .child1 .grid-content {
    height: 74px;
    padding: 20px 0;
    text-align: center;
  }
  .myContent .child2{height: 80px; padding: 0 40px;}
  .myContent .child2 .rightGird{position: relative;}
  .myContent .child2 .rightGird .search{
    position: relative;
    right: 0;
    height: 40px;
    margin: 32px auto 0;
  }
  .myContent .child2 .jilu{
    height: 40px;/*no*/
    line-height: 40px;/*no*/
    margin-top: 32px;/*no*/
  }
  .myContent .child3{
    margin: 5px 0px;
  }
  .myContent .child3 .box{
    margin: 20px auto;
  }
  .child3 .box >>> .el-table .cell .img{
    vertical-align: middle;
    width: 40px;/*no*/
    height: 40px;/*no*/
  }
  .child3 >>> .box .el-table td,
  .child3 >>> .box .el-table th{
    padding: 8px 0;/*no*/
  }
  .myContent >>> .el-tabs__nav-wrap {
    overflow: hidden;
    margin-bottom: -1px;/*no*/
    position: relative;
  }
  .myContent >>> .el-tabs--card .el-tabs__header {
    border-bottom: 1px solid #28c1cc;/*no*/
    margin: 30px 0 0;/*no*/
  }
  .myContent >>> .el-tabs--card>.el-tabs__header .el-tabs__item {
    border-bottom: 1px solid transparent;/*no*/
    border-left: 1px solid #E4E7ED;/*no*/
  }
  .myContent >>> .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    border-bottom-color: #FFF;
  }
  .myContent >>> .el-tabs--card>.el-tabs__header .el-tabs__nav {
    border: 1px solid #E4E7ED;/*no*/
    border-bottom: none;
    border-radius: 4px 4px 0 0;/*no*/
  }
  .myContent >>> .el-table__row td:nth-child(1) .cell{
    text-align: left;
  }
  .myContent >>> .el-table__row td:nth-child(2) .cell{
    text-align: right;
  }
  .search .item{ display: inline-block; float: left; }
  /* .search .item .el-date-editor.el-input,
  .search .item .el-date-editor.el-input__inner {
    width: 192px;
  } */
  .search .item .el-date-editor--datetimerange.el-input__inner {
    width: 400px;
  }
  .search .midLine{
    height: 40px;/*no*/
    line-height: 40px;/*no*/
    margin:0 5px;/*no*/
  }
  .search .inquiry{margin-left: 10px;}
  .search .inquiry .el-button{
    background: #27d3d3;
    border: 1px #27d3d3 solid;/*no*/
    color: #fff;
  }
  .myContent .child1 .grid-content .div1{
    margin: 5px 0px 15px;/*no*/
  }
  .myContent .child1 .grid-content .div2{ font-size: 25px; font-weight: bold; }

  .myContent .child4{ text-align: right; padding-right: 0px; }
  /*页码部分*/
  .myContent .child4 >>> .el-pagination.is-background .btn-next,
  .myContent .child4 >>> .el-pagination.is-background .btn-prev,
  .myContent .child4 >>> .el-pagination.is-background .el-pager li {
    margin: 0 5px;/*no*/
    background-color: #f4f4f5;
    color: #606266;
    min-width: 30px;/*no*/
    border-radius: 2px;/*no*/
  }
  .myContent .child4 >>> .el-pager li {
    padding: 0 4px;/*no*/
    font-size: 13px;/*no*/
    min-width: 35.5px;/*no*/
    height: 28px;/*no*/
    line-height: 28px;/*no*/
  }
  .myContent .child4 >>> .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #409EFF;
    color: #FFF;
  }
  .myContent .child4 >>> .el-pagination button,
  .myContent .child4 >>> .el-pagination span:not([class*=suffix]) {
    display: inline-block;
    font-size: 13px;/*no*/
    min-width: 35.5px;/*no*/
    height: 28px;/*no*/
    line-height: 28px;/*no*/
    vertical-align: top;
  }
  .myContent .child4 >>> .el-pagination.is-background .btn-next.disabled,
  .myContent .child4 >>> .el-pagination.is-background .btn-next:disabled,
  .myContent .child4 >>> .el-pagination.is-background .btn-prev.disabled,
  .myContent .child4 >>> .el-pagination.is-background .btn-prev:disabled,
  .myContent .child4 >>> .el-pagination.is-background .el-pager li.disabled {
    color: #C0C4CC;
  }
  .myContent .child4 >>> .el-pagination .btn-next .el-icon,
  .myContent .child4 >>> .el-pagination .btn-prev .el-icon{
    font-size: 12px;/*no*/
  }
</style>

