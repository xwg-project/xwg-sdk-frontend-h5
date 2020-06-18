<template>
  <div class="home-box">
    <home-nav></home-nav>
    <home-header></home-header>
    <div class="InfoWrap">
      <div class="UserInfo">
        <el-row :gutter="10" style="margin-left: 0; margin-right: 0;">
          <el-col :xs="6" :sm="6" :md="6" :lg="6">
            <div>
              <el-menu
              default-active="index"
              class="el-menu-vertical-demo"
              style="min-height:390px"
              @select="handleSelect"
              >
                <el-menu-item index="0">
                  <i class="el-icon-user"></i>昵称
                </el-menu-item>
                <el-menu-item index="1">
                  <i class="el-icon-user"></i>我的资料
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-coin"></i>实名认证
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-lock"></i>账户安全
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-connection"></i>道具记录
                </el-menu-item>
                <el-menu-item index="5">
                  <i class="el-icon-notebook-1"></i>操作记录
                </el-menu-item>
              </el-menu>
            </div>
          </el-col>
          <el-col :xs="18" :sm="18" :md="18" :lg="18">
            <div>
              <router-view></router-view>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeNav from '@/common/nav/nav';
import HomeHeader from '@/common/header/header';
import HomeFooter from '@/common/footer/footer';

export default {
  components: {
    HomeNav,
    HomeHeader,
    HomeFooter,
  },
  name: '',
  data() {
    return {
      searchCriteria: '',
    };
  },
  methods: {
    handleSelect(key) {
      switch (key) {
        case '0':
          this.$router.push('/Page0');
          this.breadcrumbItems = ['导航零'];
          break;
        case '1':
          this.$router.push('/Page1');
          this.breadcrumbItems = ['导航一'];
          break;
        case '2':
          this.$router.push('/Page2');
          this.breadcrumbItems = ['导航二'];
          break;
        case '3':
          this.$router.push('/Page3');
          this.breadcrumbItems = ['导航三'];
          break;
        case '4':
          this.$router.push('/Page4');
          this.breadcrumbItems = ['导航四'];
          break;
        case '5':
          this.$router.push('/Page5');
          this.breadcrumbItems = ['导航五'];
          break;
        default:
          break;
      }
    },
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
 .InfoWrap{
   /* border: 1px solid green; */
   /* background-color: #EBEBEB; */
   background-color: #f5f5f5;
   min-height:900px;
 }
.InfoWrap .UserInfo{
  /* margin: 25px 18.8% 60px; */
  margin: 25px 10% 60px;
  /* border: 1px solid red; */
}
.InfoWrap .UserInfo .el-menu-item{
  border-bottom: 1px solid #ccc;
}
</style>
