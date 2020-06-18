<template>
  <div class="link4">
    <div class="InfoBox">
      <div class="UserInfo">
        <el-row :gutter="10" style="margin-left: 0; margin-right: 0;">
          <el-col :xs="6" :sm="6" :md="6" :lg="6" style="padding-left: 0; padding-right: 0;">
            <div>
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
                <!-- <el-menu-item index="0">
                  <i class="el-icon-user"></i>昵称
                </el-menu-item> -->
                <el-menu-item
                  index="/Page1"
                  :class="['myItem1','item']"
                >
                  <!-- <div class="exam exam1">我的资料</div> -->
                  <router-link to="Page1" tag="div" class="exam exam1">我的资料</router-link>
                </el-menu-item>
                <el-menu-item
                  index="/Page2"
                  :class="['myItem2','item']"
                >
                  <!-- <div class="exam exam2">实名认证</div> -->
                  <router-link to="Page2" tag="div" class="exam exam2">实名认证</router-link>
                </el-menu-item>
                <el-menu-item
                  index="/Page3"
                  :class="['myItem3','item']"
                >
                  <!-- <div class="exam exam3">账户安全</div> -->
                  <router-link to="Page3" tag="div" class="exam exam3">账户安全</router-link>
                </el-menu-item>
                <el-menu-item
                  index="/Page4"
                  :class="['myItem4','item']"
                >
                  <!-- <div class="exam exam4">道具记录</div> -->
                  <router-link to="Page4" tag="div" class="exam exam4">道具记录</router-link>
                </el-menu-item>
                <el-menu-item
                  index="/Page5"
                  :class="['myItem5','item']"
                >
                  <!-- <div class="exam exam5">操作记录</div> -->
                  <router-link to="Page5" tag="div" class="exam exam5">操作记录</router-link>
                </el-menu-item>
              </el-menu>
            </div>
          </el-col>
          <el-col :xs="18" :sm="18" :md="18" :lg="18" style="padding-left: 0; padding-right: 0;">
            <div>
              <router-view></router-view>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  components: {
  },
  name: 'Tab4',
  data() {
    return {
      index: '',
      searchCriteria: '',
    };
  },
  methods: {
    // handleSelect1(key) {
    //   switch (key) {
    //     case '1':
    //       this.$router.push('/Page1');
    //       this.breadcrumbItems = ['导航一'];
    //       break;
    //     case '2':
    //       this.$router.push('/Page2');
    //       this.breadcrumbItems = ['导航二'];
    //       break;
    //     case '3':
    //       this.$router.push('/Page3');
    //       this.breadcrumbItems = ['导航三'];
    //       break;
    //     case '4':
    //       this.$router.push('/Page4');
    //       this.breadcrumbItems = ['导航四'];
    //       break;
    //     case '5':
    //       this.$router.push('/Page5');
    //       this.breadcrumbItems = ['导航五'];
    //       break;
    //     default:
    //       break;
    //   }
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  width: 80%;
  margin: 25px auto 60px;
}
.InfoBox .UserInfo .el-menu-item{
  border-bottom: 1px solid #ccc;/*no*/
}
.InfoBox .UserInfo .nickname{
  /* height: 86px;
  line-height: 86px; */
  height: 0.65rem;
  line-height: 0.65rem;
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
.InfoBox .UserInfo .exam1{
  background: url('~@/assets/images/my/wd00.png') no-repeat 0 50%;
  /* padding-left: 40px; */
  padding-left: 0.2965rem;
}
.InfoBox .UserInfo .item{
  height: 0.410rem;
  line-height: 0.410rem;
}
.InfoBox .UserInfo .myItem1.is-active .exam1{
  background: url('~@/assets/images/my/wd01.png') no-repeat 0 50%;
  color: #409EFF;
}
.InfoBox .UserInfo .exam2{
  background: url('~@/assets/images/my/sm00.png') no-repeat 0 50%;
  padding-left: 0.2965rem;
}
.InfoBox .UserInfo .myItem2.is-active .exam2{
  background: url('~@/assets/images/my/sm01.png') no-repeat 0 50%;
  color: #409EFF;
}
.InfoBox .UserInfo .exam3{
  background: url('~@/assets/images/my/z00.png') no-repeat 0 50%;
  padding-left: 0.2965rem;
}
.InfoBox .UserInfo .myItem3.is-active .exam3{
  background: url('~@/assets/images/my/zh01.png') no-repeat 0 50%;
  color: #409EFF;
}
.InfoBox .UserInfo .exam4{
  background: url('~@/assets/images/my/dj00.png') no-repeat 0 50%;
  padding-left: 0.2965rem;
}
.InfoBox .UserInfo .myItem4.is-active .exam4{
  background: url('~@/assets/images/my/dj01.png') no-repeat 0 50%;
  color: #409EFF;
}
.InfoBox .UserInfo .exam5{
  background: url('~@/assets/images/my/cz00.png') no-repeat 0 50%;
  padding-left: 0.2965rem;
}
.InfoBox .UserInfo .myItem5.is-active .exam5{
  background: url('~@/assets/images/my/cz01.png') no-repeat 0 50%;
  color: #409EFF;
}
</style>

