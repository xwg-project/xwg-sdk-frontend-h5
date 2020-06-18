<template>
  <div class="page7">
    <div class="myCoin">操作记录</div>
    <div class="myContent">
      <div class="child3">
        <el-table
          :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
          style="width: 100%"
        >
          <el-table-column
            prop="operating"
            label="操作"
          >
          </el-table-column>
          <el-table-column
            prop="date"
            label="日期"
          >
          </el-table-column>
        </el-table>
      </div>
      <div class="child4">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next"
          :total="tableData.length">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
const ERR_OK = 0;
export default {
  name: 'Page7',
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
    TableDataShow() {
      this.$http.get('/api/Operating').then((response) => {
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
};
</script>
<style scoped>
  .page7{
    height: 900px;/*no*/
    background: #fff;
  }
  .page7 .myCoin{
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
    margin: 20px auto 0;/*no*/
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
  .myContent >>> .el-tabs--card .el-tabs__header {
    border-bottom: 1px solid #28c1cc;/*no*/
    margin: 30px 0 0;/*no*/
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
