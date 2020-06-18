<template>
  <div class="link6">
    <div class="InfoBox">
      <div class="UserInfo">
        <div class="info1">
          <div class="nickname">
            <img class="img" src="@/assets/images/shiyongtouxiang.png" alt="用户头像">
            <span class="span1">奇山异水天下独绝</span>
          </div>
          <!-- @select="handleSelect1" -->
          <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          style="min-height:390px"
          >
            <el-menu-item
              index="/Page1"
              :class="['myItem1','item']"
            >
              <router-link to="Page1" tag="div" class="exam exam1">我的资料</router-link>
            </el-menu-item>
            <el-menu-item
              index="/Page2"
              :class="['myItem2','item']"
            >
              <router-link to="Page2" tag="div" class="exam exam2">实名认证</router-link>
            </el-menu-item>
            <el-menu-item
              index="/Page3"
              :class="['myItem3','item']"
            >
              <router-link to="Page3" tag="div" class="exam exam3">账户安全</router-link>
            </el-menu-item>
            <el-menu-item
              index="/Page4"
              :class="['myItem4','item']"
            >
              <router-link to="Page4" tag="div" class="exam exam4">提现管理</router-link>
            </el-menu-item>
            <el-menu-item
              index="/Page5"
              :class="['myItem5','item']"
            >
              <router-link to="Page5" tag="div" class="exam exam5">提现查询</router-link>
            </el-menu-item>
            <el-menu-item
              index="/Page6"
              :class="['myItem6','item']"
            >
              <router-link to="Page6" tag="div" class="exam exam6">账户明细</router-link>
            </el-menu-item>
            <el-menu-item
              index="/Page7"
              :class="['myItem7','item']"
            >
              <router-link to="Page7" tag="div" class="exam exam7">操作记录</router-link>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="info2">
          <router-view></router-view>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  components: {
  },
  name: 'Tab6',
  data() {
    return {
      index: '',
      searchCriteria: '',
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.content{
  border: 1px solid #A6A6A6;
  border-radius: 6px;
  padding: 5px;
  margin: 2px;
  background-color: white;
}
.InfoBox{
  background-color: #f5f5f5;
  min-height:900px;
}
.InfoBox .UserInfo{
  /* width: 80%; */
  margin: 25px auto 60px;
}
.InfoBox .UserInfo .info1{
  float: left;
  width: 25%;
  margin-right: 2%;
}
.InfoBox .UserInfo .info2{
  float: left;
  width: 73%;
}
.InfoBox .UserInfo .info1 .el-menu { border-right: none; }
.InfoBox .UserInfo .el-menu-item{
  border-bottom: 1px solid #ccc;/*no*/
}
.InfoBox .UserInfo .nickname{
  height: 86px;/*no*/
  line-height: 86px;/*no*/
  /* height: 0.65rem;
  line-height: 0.65rem; */
  padding-left: 20px;
  background: #fff;
  border-bottom: 1px solid #ccc;/*no*/
}
.InfoBox .UserInfo .nickname .img{
  display: inline-block;
  float: left;
  /* width: 42px;
  height: 42px; */
  width: 0.3114rem;
  height: 0.3114rem;
  vertical-align: middle;
  /* margin-top: 22px; */
  margin-top: 0.163rem;
}
.InfoBox .UserInfo .nickname .span1{
  display: inline-block;
  float: left;
  /* width: 156px;
  margin-left: 10px; */
  /* font-size: 17px; */
  width: 1.156rem;
  font-size: 0.126rem;
  margin-left: 0.074rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.InfoBox .UserInfo .exam{
  /* font-size: 16px; */
  font-size: 0.1186rem;
}
.InfoBox .UserInfo .item{
  height: 0.410rem;
  line-height: 0.410rem;
}
.InfoBox .UserInfo .exam1{
  background: url('~@/assets/images/myInfo/wdzl00.png') no-repeat 0 50%;
  /* padding-left: 40px; */
  padding-left: 0.2965rem;
}
.InfoBox .UserInfo .myItem1.is-active .exam1{
  background: url('~@/assets/images/myInfo/wdzl01.png') no-repeat 0 50%;
  color: #409EFF;
}
.InfoBox .UserInfo .exam2{
  background: url('~@/assets/images/myInfo/smrz00.png') no-repeat 0 50%;
  padding-left: 0.2965rem;
}
.InfoBox .UserInfo .myItem2.is-active .exam2{
  background: url('~@/assets/images/myInfo/smrz01.png') no-repeat 0 50%;
  color: #409EFF;
}
.InfoBox .UserInfo .exam3{
  background: url('~@/assets/images/myInfo/zhaq00.png') no-repeat 0 50%;
  padding-left: 0.2965rem;
}
.InfoBox .UserInfo .myItem3.is-active .exam3{
  background: url('~@/assets/images/myInfo/zhaq01.png') no-repeat 0 50%;
  color: #409EFF;
}
.InfoBox .UserInfo .exam4{
  background: url('~@/assets/images/myInfo/txgl00.png') no-repeat 0 50%;
  padding-left: 0.2965rem;
}
.InfoBox .UserInfo .myItem4.is-active .exam4{
  background: url('~@/assets/images/myInfo/txgl01.png') no-repeat 0 50%;
  color: #409EFF;
}
.InfoBox .UserInfo .exam5{
  background: url('~@/assets/images/myInfo/txcx00.png') no-repeat 0 50%;
  padding-left: 0.2965rem;
}
.InfoBox .UserInfo .myItem5.is-active .exam5{
  background: url('~@/assets/images/myInfo/txcx01.png') no-repeat 0 50%;
  color: #409EFF;
}
.InfoBox .UserInfo .exam6{
  background: url('~@/assets/images/myInfo/zhmx00.png') no-repeat 0 50%;
  padding-left: 0.2965rem;
}
.InfoBox .UserInfo .myItem6.is-active .exam6{
  background: url('~@/assets/images/myInfo/zhmx01.png') no-repeat 0 50%;
  color: #409EFF;
}
.InfoBox .UserInfo .exam7{
  background: url('~@/assets/images/myInfo/czjl00.png') no-repeat 0 50%;
  padding-left: 0.2965rem;
}
.InfoBox .UserInfo .myItem7.is-active .exam7{
  background: url('~@/assets/images/myInfo/czjl01.png') no-repeat 0 50%;
  color: #409EFF;
}
</style>

