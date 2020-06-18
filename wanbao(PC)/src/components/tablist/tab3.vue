<template>
  <div class="link3">

    <div class="Delegate">
      <p class="title">
        <span class="span1">委托</span>
      </p>
      <div class="content">
        <div class="wrap">
          <!-- <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select> -->
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="交易类型">
              <el-select v-model="value1" clearable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="币种">
              <el-select v-model="value2" clearable placeholder="请选择">
                <el-option
                  v-for="otem in otems"
                  :key="otem.value"
                  :label="otem.label"
                  :value="otem.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="交易类型">
              <el-select v-model="value3" clearable placeholder="请选择">
                <el-option
                  v-for="atem in atems"
                  :key="atem.value"
                  :label="atem.label"
                  :value="atem.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <div class="list">
          <el-table
            :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
            style="width: 100%">
            <el-table-column
              prop="OrderNumber"
              label="委托单号"
              width="140"
            >
            </el-table-column>
            <el-table-column
              prop="type"
              label="类型"
              width="90"
            >
            </el-table-column>
            <el-table-column
              prop="Currency"
              label="币种"
              width="90"
            >
            </el-table-column>
            <el-table-column
              prop="amount"
              label="数量"
              width="90"
            >
            </el-table-column>
            <el-table-column
              prop="unitPrice"
              label="单价(TCB)"
            >
            </el-table-column>
            <el-table-column
              prop="TotalPrice"
              label="总价(TCB)"
            >
            </el-table-column>
            <el-table-column
              prop="timelimit"
              label="时限"
              width="90"
            >
            </el-table-column>
            <el-table-column
              prop="time"
              label="时间"
              width="140"
            >
            </el-table-column>
            <!-- prop="operating" -->
            <el-table-column
              label="操作"
              width="90"
            >
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="CancelOrder(scope.$index, scope.row)"
                >
                  撤单
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="child1">
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
    <!-- 页面弹出模态框 -->
    <el-dialog
      title="撤单成功"
      :visible.sync="centerDialogVisible"
      width="40%"
    >
      <div class="dialogContent">
        <img src="@/assets/images/chedanchenggong.png" class="Img">
        <p class="p1">恭喜你，撤单成功！</p>
      </div>
      <div slot="footer" class="dialog-footer">
      </div>
    </el-dialog>

    <!-- <el-dialog
      title="撤单失败"
      :visible.sync="centerDialogVisible"
      width="40%"
    >
      <div class="dialogContent">
        <img src="@/assets/images/chedanshibai.png" class="Img">
        <p class="p1">很抱歉，撤单失败！</p>
        <p class="p2">您的该笔订单已经交易完成。</p>
      </div>
      <div slot="footer" class="dialog-footer">
      </div>
    </el-dialog> -->

  </div>
</template>
<script>
const ERR_OK = 0;
export default {
  data() {
    return {
      centerDialogVisible: false,
      // 当前页默认为1
      currentPage: 1,
      // 每页12条
      pageSize: 12,
      tableData: [],
      options: [
        {
          value: '选项1',
          label: '买入',
        },
        {
          value: '选项2',
          label: '卖出',
        },
        {
          value: '选项3',
          label: '兑换',
        },
        {
          value: '选项4',
          label: '回收',
        },
        {
          value: '选项5',
          label: '结算',
        },
      ],
      otems: [
        {
          value: '选项1',
          label: 'ETH',
        },
        {
          value: '选项2',
          label: 'WXG',
        },
        {
          value: '选项3',
          label: 'UED',
        },
        {
          value: '选项4',
          label: 'CNY',
        },
        {
          value: '选项5',
          label: 'USD',
        },
      ],
      atems: [
        {
          value: '选项1',
          label: '4H',
        },
        {
          value: '选项2',
          label: '8H',
        },
        {
          value: '选项3',
          label: '12H',
        },
        {
          value: '选项4',
          label: '16H',
        },
        {
          value: '选项5',
          label: '24H',
        },
      ],
      value1: '',
      value2: '',
      value3: '',
    };
  },
  created() {
    this.TableDataShow();
  },
  methods: {
    TableDataShow() {
      this.$http.get('/api/weituo').then((response) => {
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
    },
    CancelOrder(index, row) {
      console.log(index, row);
      this.centerDialogVisible = true;
    },
  },
};
</script>
<style scoped>
.link3{
  position: relative;
  width:100%;
  height: 920px;/*no*/
  background: #fff;
  /* border: 1px solid red; */
}
.Delegate{
  position: relative;
  background: #fff;
}
.Delegate .title{
  height: 55px;/*no*/
  background: #e3e3e3;
  line-height: 55px;/*no*/
  font-size: 20px;/*no*/
}
.Delegate .title .span1{
  margin-left: 25px;/*no*/
}
.Delegate .content{
 /*  width: 100%; */
  width: 96%;
  padding: 0 2%;
}
.Delegate .content .wrap >>> .el-form-item{
  margin-top: 22px;/*no*/
}
.Delegate .content .list{
  width: 100%;
  height: 650px;/*no*/
  position: relative;
}
.Delegate .content .list .span1{
  color: #ed3942;
  margin-right: 5px;
}
.Delegate .content .list .photo{
  position: relative;
}
.Delegate .content .list .mony{font-size: 14px;}
.Delegate .content .list .photo .tool_desc{
  position: relative;
  top: 126px;
  color: #fff;
}
.Delegate .content .child1{
  position: relative;
  top: 60px;/*no*/
  text-align: center;
}
.dialogContent{text-align: center;}
.dialogContent .Img{
  width: 100px;/*no*/
  height: 100px;/*no*/
  margin-top: 70px;/*no*/
}
.dialogContent .p1{margin-top: 50px;/*no*/}
.dialogContent .p2{margin-top: 20px;/*no*/}
.link3 >>> .el-dialog__header .el-dialog__title{font-size: 14px;/*no*/ }
.link3 >>> .el-dialog__header {
  padding: 15px 15px 15px 25px;/*no*/
  background: #f0f0f0;
}
.link3 >>> .el-dialog__footer {
  padding: 10px 20px 20px;/*no*/
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.link3 >>> .dialog-footer{height: 40px;}
</style>
