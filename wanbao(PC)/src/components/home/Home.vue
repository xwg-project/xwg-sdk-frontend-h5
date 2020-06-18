<template>
  <div class="home-box">
    <home-nav></home-nav>
    <home-header></home-header>
    <div class="InfoWrap">
      <div class="UserInfo">

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
                <span>行情</span>
              </div>
            </el-menu-item>
            <el-menu-item
              index="3"
              :class="['box_1', $route.meta.index === 3 ? 'is-active': '']"
              style="padding-left: 0;"
            >
              <div class="div1 tool1">
                <span>委托</span>
              </div>
            </el-menu-item>
            <el-menu-item
              index="4"
              :class="['box_1', $route.meta.index === 4 ? 'is-active': '']"
              style="padding-left: 0;"
            >
              <div class="div1 my1">
                <span>钱包</span>
              </div>
            </el-menu-item>
            <el-menu-item
              index="5"
              :class="['box_1', $route.meta.index === 5 ? 'is-active': '']"
              style="padding-left: 0;"
            >
              <div class="div1 my2">
                <span>消息</span>
              </div>
            </el-menu-item>
            <el-menu-item
              index="6"
              :class="['box_1', $route.meta.index === 6 ? 'is-active': '']"
              style="padding-left: 0;"
            >
              <div class="div1 my3">
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
        case '5':
          this.$router.push('/Tab5');
          this.breadcrumbItems = ['导航五'];
          break;
        case '6':
          this.$router.push('/Tab6');
          this.breadcrumbItems = ['导航六'];
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
  padding: 0 10%;
  position: relative;
  margin-top: 20px;
}
.InfoWrap .UserInfo .el-menu{
  border-style: none;
}
.InfoWrap .UserInfo .el-menu-item{
  /* width: 20%; */
  width: 16.66%;
  height: 100px;
  line-height: 100px;
  padding: 0px;
  float: left;
  text-align: center;
}
.InfoWrap .UserInfo .box_1{padding: 0px;}
.InfoWrap .UserInfo .box_1 span{ margin-left: 28%; }
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
  background: url('~@/assets/images/shouye00.png') no-repeat 35% 50%;
}
.InfoWrap .UserInfo .box_1:hover .home1,
.InfoWrap .UserInfo .box_1.is-active .home1{
  background: url('~@/assets/images/shouye01.png') no-repeat 35% 50%;
  color: #fff;
}

.InfoWrap .UserInfo .game1{
  background: url('~@/assets/images/hangqing00.png') no-repeat 35% 50%;
}
.InfoWrap .UserInfo .box_1:hover .game1,
.InfoWrap .UserInfo .box_1.is-active .game1{
  background: url('~@/assets/images/hangqing01.png') no-repeat 35% 50%;
  color: #fff;
}
.InfoWrap .UserInfo .tool1{
  background: url('~@/assets/images/weituo00.png') no-repeat 35% 50%;
}
.InfoWrap .UserInfo .box_1:hover .tool1,
.InfoWrap .UserInfo .box_1.is-active .tool1{
  background: url('~@/assets/images/weituo01.png') no-repeat 35% 50%;
  color: #fff;
}
.InfoWrap .UserInfo .my1{
  background: url('~@/assets/images/qianbao00.png') no-repeat 35% 50%;
}
.InfoWrap .UserInfo .box_1:hover .my1,
.InfoWrap .UserInfo .box_1.is-active .my1{
  background: url('~@/assets/images/qianbao01.png') no-repeat 35% 50%;
  color: #fff;
}
.InfoWrap .UserInfo .my2{
  background: url('~@/assets/images/xiaoxi00.png') no-repeat 35% 50%;
}
.InfoWrap .UserInfo .box_1:hover .my2,
.InfoWrap .UserInfo .box_1.is-active .my2{
  background: url('~@/assets/images/xiaoxi01.png') no-repeat 35% 50%;
  color: #fff;
}
.InfoWrap .UserInfo .my3{
  background: url('~@/assets/images/me.png') no-repeat 35% 50%;
}
.InfoWrap .UserInfo .box_1:hover .my3,
.InfoWrap .UserInfo .box_1.is-active .my3{
  background: url('~@/assets/images/me1.png') no-repeat 35% 50%;
  color: #fff;
}
</style>
