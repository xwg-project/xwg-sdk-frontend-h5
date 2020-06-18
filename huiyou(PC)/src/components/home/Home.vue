<template>
  <div class="home-box">
    <home-nav></home-nav>
    <home-header></home-header>
    <div class="InfoWrap">
      <div class="UserInfo">
       <!--  <div class="div1">11111</div> -->
        <div class="container cont1">
          <el-menu
          default-active="index"
          class="el-menu-vertical-demo box"
          @select="handleSelect"
          >
            <el-menu-item index="1"
              :class="['box_1', $route.meta.index === 1 ? 'is-active': '']"
              style="padding-left: 0;"
            >
              <div class="div1 home1">
                <span>首页</span>
              </div>
            </el-menu-item>
            <el-menu-item
              index="2"
              :class="['box_1', $route.meta.index === 2 ? 'is-active': '']"
              style="padding-left: 0;"
            >
              <div class="div1 game1">
                <span>游戏</span>
              </div>
            </el-menu-item>
            <el-menu-item
              index="3"
              :class="['box_1', $route.meta.index === 3 ? 'is-active': '']"
              style="padding-left: 0;"
            >
              <div class="div1 tool1">
                <span>道具</span>
              </div>
            </el-menu-item>
            <el-menu-item
              index="4"
              :class="['box_1', $route.meta.index === 4 ? 'is-active': '']"
              style="padding-left: 0;"
            >
              <div class="div1 my1">
                <span>我的</span>
              </div>
            </el-menu-item>
          </el-menu>
        </div>

        <div class="container">
          <router-view></router-view>
        </div>

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
  name: 'Tab1',
  data() {
    return {
      searchCriteria: '',
    };
  },
  methods: {
    handleSelect(key) {
      switch (key) {
        case '1':
          this.$router.push('/Tab1');
          this.breadcrumbItems = ['导航一'];
          break;
        case '2':
          this.$router.push('/Tab2');
          this.breadcrumbItems = ['导航二'];
          break;
        case '3':
          this.$router.push('/Tab3');
          this.breadcrumbItems = ['导航三'];
          break;
        case '4':
          this.$router.push('/Tab4');
          this.breadcrumbItems = ['导航四'];
          break;
        default:
          break;
      }
    },
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
 .InfoWrap{
   background-color: #f5f5f5;
   min-height:900px;
 }
.InfoWrap .UserInfo{
  margin: 0px 0 60px;
}
.InfoWrap .UserInfo .cont1{ background: #fff; }
.InfoWrap .UserInfo .container{
  padding: 0 5%;
  /* border: 1px solid red; */
}
.InfoWrap .UserInfo .el-menu{
  border-style: none;
  width: 80%;
  margin: 0 auto;
}
.InfoWrap .UserInfo .el-menu-item{
  width: 25%;
  height: 100px;
  line-height: 100px;
  padding: 0px;
  float: left;
  text-align: center;
}
.InfoWrap .UserInfo .box_1{padding: 0px;}
.InfoWrap .UserInfo .box_1 span{ margin-left: 25%; }
.InfoWrap .UserInfo .box_1:hover{
  background: url('~@/assets/images/xuanzhong.png') no-repeat center;
  background-size: 100% 100%;
}
.InfoWrap .UserInfo .box_1.is-active{
  background: url('~@/assets/images/xuanzhong.png') no-repeat center;
  background-size: 100% 100%;
  color: #fff;
}
.InfoWrap .UserInfo .el-menu-item .div1{
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
}
.InfoWrap .UserInfo .home1{
  background: url('~@/assets/images/shouye00.png') no-repeat 45% 50%;
  background-size: 16% 50%;
}
.InfoWrap .UserInfo .box_1:hover .home1,
.InfoWrap .UserInfo .box_1.is-active .home1{
  background: url('~@/assets/images/shouye01.png') no-repeat 45% 50%;
  color: #fff;
  background-size: 16% 50%;
}

.InfoWrap .UserInfo .game1{
  background: url('~@/assets/images/youxi00.png') no-repeat 45% 50%;
  background-size: 16% 50%;
}
.InfoWrap .UserInfo .box_1:hover .game1,
.InfoWrap .UserInfo .box_1.is-active .game1{
  background: url('~@/assets/images/youxi01.png') no-repeat 45% 50%;
  color: #fff;
  background-size: 16% 50%;
}
.InfoWrap .UserInfo .tool1{
  background: url('~@/assets/images/daoju00.png') no-repeat 45% 50%;
  background-size: 16% 50%;
}
.InfoWrap .UserInfo .box_1:hover .tool1,
.InfoWrap .UserInfo .box_1.is-active .tool1{
  background: url('~@/assets/images/daoju01.png') no-repeat 45% 50%;
  color: #fff;
  background-size: 16% 50%;
}
.InfoWrap .UserInfo .my1{
  background: url('~@/assets/images/wode00.png') no-repeat 45% 50%;
  background-size: 16% 50%;
}
.InfoWrap .UserInfo .box_1:hover .my1,
.InfoWrap .UserInfo .box_1.is-active .my1{
  background: url('~@/assets/images/wode01.png') no-repeat 45% 50%;
  color: #fff;
  background-size: 16% 50%;
}
</style>
