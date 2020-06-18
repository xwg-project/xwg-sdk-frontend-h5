<template>
  <div class="wrapItem">
    <div class="oLeft">
      <img :src="imgSrc" alt="">
    </div>
    <div class="oRight">
      <p class="p1">{{txt}}</p>
      <p class="p2">{{description | ellipsis}}</p>
      <p class="p3"><a href="####">查看详情>></a></p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VmCard',
  props: {
    id: {
      type: String,
      default: 'vertical',
    },
    imgSrc: {
      type: String,
      default: require('@/assets/images/game/game1.png'),
    },
    txt: {
      type: String,
      default: '地下城与勇士',
    },
    description: {
      type: String,
      default: '地下城与勇士',
    },
  },
  data() {
    return {
    };
  },
  // 字符长度限制
  filters: {
    ellipsis(value) {
      if (!value) return '';
      if (value.length > 60) {
        return `${value.slice(0, 60)}...`;
      }
      return value;
    },
  },
  methods: {
  },
};
</script>
<style scoped>
  .gamebox .wrapItem .oLeft,
  .gamebox .wrapItem .oRight{
    display: inline-block;
    float: left;
    font-size: 14px;
  }
  .gamebox .wrapItem .oLeft{ width: 100px; height: 100px; margin-right: 20px; }
  .gamebox .wrapItem .oRight{ width: 390px; height: 100px; }
  .gamebox .wrapItem .oRight .p1{ font-size: 16px; font-weight: bold; margin-bottom: 10px; }
  .gamebox .wrapItem .oRight .p2{
    width: 100%;
    text-overflow:ellipsis;
    overflow:hidden;
    margin-bottom: 10px;
  }
  .gamebox .wrapItem .oRight .p3 a{
    color: #26c1cd;
    text-decoration: none;
  }
</style>
