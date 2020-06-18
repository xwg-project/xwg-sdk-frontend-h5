<template>
  <div class="link3">
    <TabImageList
      ref="imageList"
      :data1="gameOnes"
      :data2="gameTwos"
      :data3="gameThrees"
    >
    </TabImageList>
  </div>
</template>
<script>
import TabImageList from '@/components/tablist/twotab/tab-image-list';

const ERR_OK = 0;
// let oId = null;
export default {
  components: {
    TabImageList,
  },
  name: 'Tab3',
  data() {
    return {
      activeName: 'first',
      scrollTop: 0,
      gameOnes: [],
      gameTwos: [],
      gameThrees: [],
    };
  },
  created() {
    this.DataOne();
    this.DataTwo();
    this.DataThree();
  },
  mounted() {
    // this.getDetail();
    window.addEventListener('scroll', this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollToTop);
  },
  methods: {
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this;
      const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      that.scrollTop = scrollTop;
    },
    backScroll() {
      const that = this;
      const timer = setInterval(() => {
        const ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = that.scrollTop + ispeed;
        document.body.scrollTop = that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 10);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    DataOne() {
      this.$http.get('/api/gameHero').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.gameOnes = response.data;
        }
      });
    },
    DataTwo() {
      this.$http.get('/api/gameHero').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.gameTwos = response.data;
        }
      });
    },
    DataThree() {
      this.$http.get('/api/gameHero').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.gameThrees = response.data;
        }
      });
    },
  },
  // ---------------tab1区开始-------------
};
</script>
<style scoped>
  .link3{
    position: relative;
    width: 80%;
    max-height: 9rem;
    height: auto;
    margin: 20px auto 30px;
    background: #fff;
  }
  .link3 .content{
    position: relative;
    height: 100%;
  }
</style>
