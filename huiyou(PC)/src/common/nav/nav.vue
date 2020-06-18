<template>
    <div class="nav">
      <el-row>
        <el-col  :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col  :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="grid-content bg-purple">
            <!-- 非登录状态 -->
            <div class="contentTwo" v-show="IsNav">
              <div class="wrap">
                <div class="div1 examp1">
                  <router-link :to="{path: '/DownLoad'}" class="download">
                    汇游APP下载
                  </router-link>
                  <span>|</span>
                </div>
                <div class="div1 examp2 btnSize">
                  <router-link :to="{path: '/Login'}" class="a1">
                    <el-button size="mini">登录</el-button>
                  </router-link>
                  <router-link :to="{path: '/SignUp'}">
                    <el-button size="mini">注册</el-button>
                  </router-link>
                </div>
              </div>
            </div>
            <!-- 登录状态 -->
            <div class="content" v-show="NoNav">
              <div class="wrap">
                <div class="div1 iten1">
                  你好，<span class="name">长风破浪会有</span>
                </div>
                <div class="div1">
                  <router-link :to="{path: '/DownLoad'}" class="download">
                    汇游APP下载
                  </router-link>
                  <span>|</span>
                </div>
                <div class="div1">
                  <router-link :to="{path: '/Tab4'}" class="userCenter">个人中心</router-link>
                  <span>|</span>
                </div>
                <div class="div1 help" @click="centerDialogVisible = true">
                  <!-- <router-link :to="{path: '/DownLoad'}">帮助</router-link> -->
                  <div>帮助</div>
                </div>
                <div class="div1 btnSize">
                  <router-link :to="{path: '/Login'}">
                    <el-button size="mini">注销</el-button>
                  </router-link>
                </div>
              </div>
            </div>

          </div>
        </el-col>
      </el-row>
      <!-- // 弹出框 -->
      <el-dialog
        title="帮助中心"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <div class="box">
          <div class="child1">帮助</div>
          <div class="child2">
            <div class="son">
              <h4>1.道具有什么用？</h4>
              <p class="p1">
                英雄联盟策略卡牌游戏Legends of Runeterra(简称：LOR)，
                在过去两周已经陆续发布了一些新卡的预览，在本月底即将到来的新版本中，
                我们将会看到茂凯、瑟庄妮、斯维因、奎因等新英雄
              </p>
            </div>
            <div class="son">
              <h4>1.道具有什么用？</h4>
              <p class="p1">
                英雄联盟策略卡牌游戏Legends of Runeterra(简称：LOR)，
                在过去两周已经陆续发布了一些新卡的预览，在本月底即将到来的新版本中，
                我们将会看到茂凯、瑟庄妮、斯维因、奎因等新英雄
              </p>
            </div>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
</template>
<script>
export default {
  name: 'HomeNav',
  data() {
    return {
      IsNav: false,
      NoNav: true,
      centerDialogVisible: false,
    };
  },
};
</script>
<style lang="css" scoped>
  .nav{
    /* height: 50px;
    line-height: 50px; */
    height: 0.372rem;
    line-height: 0.372rem;
  }
  .nav .el-row {
    background: #232323;
  }
  .nav .el-row:last-child{margin-bottom: 0;}
  .nav .el-col {
    color: #d7d7d7;
    font-size: 14px;
  }
  .nav .grid-content {
    /* min-height: 50px;
    line-height: 50px; */
    min-height: 0.372rem;
    line-height: 0.372rem;
  }
  .nav .grid-content .content{
    width: 560px;/*no*/
    height: 0.372rem;
    line-height: 0.372rem;
    /* height: 50px; */
    /* text-align: center; */
    margin: 0 auto;
  }
  .nav .grid-content .content .wrap{
    width: auto;
    max-width: 100%;
    margin: 0 auto;
    padding-left: 30px;/*no*/
  }
  .nav .grid-content .content .wrap .iten1{
    width: auto;
    max-width: 196px;/*no*/
    margin-right: 20px;/*no*/
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .grid-content .content .iten1 .name{
    color:#28c1cc;
  }
  .nav .grid-content .content .div1{
    display: inline-block;
    float: left;
    margin: 0 5px;
  }
  .nav .grid-content .content .div1 .download,
  .nav .grid-content .content .div1 .userCenter,
  .nav .grid-content .contentTwo .div1 .download{text-decoration: none; color: #fff;}
  /* userCenter */
  .nav .grid-content .content .help{cursor: pointer;}
  .nav .grid-content .content span{ margin-left: 10px; }

  .contentTwo{
    width: 560px;
    /* height: 50px; */
    height: 0.372rem;
    margin: 0 auto;
  }
  .contentTwo .wrap{
    /* width: 260px; */
    /* height: 50px; */
    /* width: 1.8rem; */
    width: 80%;
    height: 0.372rem;
    margin: 0 auto;
  }
  .contentTwo .wrap .div1{
    display: inline-block;
    float: left;
    margin: 0 0 0 20px;
  }
  .contentTwo .wrap .examp1{margin:0 0px 0 5px;}
  .contentTwo .wrap .examp1 span{margin-left: 15px;}
  .contentTwo .wrap .examp2 .a1{margin-right: 10px;}
  .nav .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .btnSize .el-button--mini{
    /* width: 55px;
    height: 26px; */
    /* padding: 5px 8px; */
    width: 0.4078rem;
    height: 0.1928rem;
    background: #2ac5d1;
    color: #fff;
    border: none;
  }
  .help a{ text-decoration: none; color: #d7d7d7;}
  .nav .box .child1{
    border-bottom: 1px dotted #070404;
    height: 65px;
    line-height: 65px;
    font-size: 16px;
    text-align: center;
    font-weight: bold;
  }
  .nav .box .child2 .son{margin-top: 20px;}
  .nav .box .child2 .son h4{line-height: 30px;}
  .nav .box .child2 .son .p1{line-height: 20px;}
  .nav >>> .el-dialog--center .el-dialog__body {padding: 0px 25px 30px;}
  .nav >>> .el-dialog__header {
    padding: 0px 20px;
    background: #f0f0f0;
    text-align: left;
  }
  .nav >>> .el-dialog__title{font-size: 14px;}
  .nav >>> .el-dialog__headerbtn {
    position: absolute;
    top: 15px;
  }
</style>
