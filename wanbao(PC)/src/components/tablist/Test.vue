<template>
  <!-- page4拷贝 -->
  <div class="page4">
    <div class="myCoin">提现管理</div>
    <div class="myContent">
      <div class="ContWraps">
        <div class="child3">
          <div class="box">
            <el-table
              :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
              :header-cell-style="tableHeaderColor"
              :row-style="tableRowStyle"
              style="width: 100%">
              <el-table-column
                prop="type"
                label="类型"
              >
              </el-table-column>
              <el-table-column
                prop="icon"
                label="图标"
              >
                <template slot-scope="scope">
                  <img :src="scope.row.icon" class="img" />
                </template>
              </el-table-column>
              <el-table-column
                width="150"
                prop="toolNum"
                label="道具编号">
              </el-table-column>
              <el-table-column
                prop="name"
                label="名称"
              >
              </el-table-column>
              <el-table-column
                prop="quality"
                label="品质"
              >
              </el-table-column>
              <el-table-column
                prop="Algebra"
                label="代数"
              >
              </el-table-column>
              <el-table-column
                prop="Star"
                label="星级"
              >
              </el-table-column>
              <el-table-column
                prop="FightPower"
                label="战力"
              >
              </el-table-column>
              <el-table-column
                prop="ReferencePrice"
                label="参考价"
              >
              </el-table-column>
              <el-table-column
                width="140"
                prop="trandingHour"
                label="时间"
              >
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
            :total="tableData.length">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const ERR_OK = 0;
export default {
  name: 'Page4',
  data() {
    return {
      // value1: '',
      value2: '',
      scrollTop: 0,
      // 当前页默认为1
      currentPage: 1,
      // 每页12条
      pageSize: 12,
      tableData: [],
      formatDate: '',
    };
  },
  created() {
    this.TableDataShow();
  },
  methods: {
    tableHeaderColor({ rowIndex }) {
      if (rowIndex === 0) {
        return 'background-color: #c7cfe4; color: #3b3a3a; font-weight: bold;';
      }
    },
    tableRowStyle({ rowIndex }) {
      if ((rowIndex % 2) === 1) {
        return 'background: #f4f4f4;';
      }
    },
    TableDataShow() {
      this.$http.get('/api/PropRecord').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.tableData = response.data;
        }
      });
    },
    handleSizeChange(size) {
      this.pageSize = size;
      this.TableDataShow();
      console.log(`每页 ${size} 条`);
    },
    handleCurrentChange(page) {
      this.currentPage = page;
      this.TableDataShow();
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
  .myContent{}
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
    margin: 5px 40px;
    /* border-top: 1px solid #dfdfdf; */
  }
  .myContent .child3 .box{
    margin: 20px auto;/*no*/
  }
  .myContent .child3 .box >>> .el-table .cell{
    text-align: center;
  }
  .myContent .child3 .box >>> .el-table th>.cell{
    text-align: center;
  }
  .myContent .child3 .box >>> .el-table td {
    padding: 8px 0;/*no*/
  }
  .myContent .child3 .box >>> .el-table .cell .img{
    vertical-align: middle;
    width: 40px;/*no*/
    height: 40px;/*no*/
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
    padding-right: 40px;/*no*/
  }
</style>
