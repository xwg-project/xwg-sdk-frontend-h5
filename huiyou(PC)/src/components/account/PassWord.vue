<template>
  <div class="home-box">
    <home-nav></home-nav>
    <home-header></home-header>
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
  name: 'PassWord',
  data() {
    return {
    };
  },
};
</script>

<style scoped>
</style>
