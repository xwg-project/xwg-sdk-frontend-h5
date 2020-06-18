<template>
  <div class="link3">
    <div class="content">

      <div class="titlewrap">
        <div class="title">全部道具</div>
      </div>

      <div class="main">
        <div class="toolsWrap">
          <!-- v-for="item in detaildata"
          :key= "item.id"
          @click="selectItem" -->
          <div class="wrap">
            <div class="top">
              <div class="pict">
                <img :src="data1.picSrc">
              </div>
              <div class="imgList">
                <div class="name">{{data1.txt}}</div>
                <div class="ExchValue">
                  <span class="price">兑换价值</span>
                  <span class="price2">{{data1.price}}</span>
                  <span class="price3">金币</span>
                </div>
                <div class="ExchNum">
                  <div class="ExchNum_1">兑换数量</div>
                  <div class="ExchNum_2">
                    <el-input-number
                      v-model="num"
                      @change="handleChange"
                      :min="1"
                      :max="10"
                      label="描述文字"
                    >
                    </el-input-number>
                  </div>
                </div>
                <div class="RemainNum">
                  <div class="RemainNum_1">剩余数量</div>
                  <div class="RemainNum_2">{{data1.endNum}} &nbsp;件</div>
                </div>
                <div class="RedeemNow">
                  <el-button>立即兑换</el-button>
                </div>
              </div>
            </div>
            <div class="botm">
              <el-button type="primary" @click="goBack()">返回列表</el-button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// const ERR_OK = 0;
export default {
  props: {
    id: String,
  },
  data() {
    return {
      num: 1,
      // detaildata: [],
      data1: {},
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      const that = this;
      this.$http.get('/api/gameDetail').then((response) => {
        const resData = response.body;
        const arr1 = resData.data;
        console.log(resData);
        console.log(resData.data);
        console.log(that.id);
        const newArr = arr1.filter((obj) => {
          return obj.id === that.id;
        });
        console.log(newArr);
        let list = {};
        for (let i = 0; i < newArr.length; i++) {
          list = newArr[i];
          // console.log(f);
        }
        console.log(list);
        that.data1 = list;
        // that.data1 = f.that.id;
        // console.log(resData[that.id]);
        // console.log(resData.data[0].id);
        // if (resData.errno === ERR_OK) {
        if (resData && resData.length > 0) {
          console.log(`信息${that.data1}`);
        } else {
          console.log('没有数据！');
        }
      });
    },
    handleChange(value) {
      console.log(value);
    },
    goBack() {
      this.$router.back(-1);
    },
    // this.$router.back(-1);
  },
};
</script>

<style scoped>
  .link3{
    position: relative;
    width: 1190px;
    max-height: 1166px;
    height: auto;
    margin: 20px auto 62px;
    /* border: 1px solid red; */
    background: #fff;
  }
  .link3 .content{
    position: relative;
  }
  .link3 .content .titlewrap{
    position: relative;
    top: 5px;
  }
  .link3 .content .title{
    position: relative;
    height: 46px;
    background: #f0f0f0;
    margin: 5px;
    line-height: 46px;
    padding-left: 20px;
  }
  .link3 .content .main{
    max-height: 1014px;
    height: auto;
    margin: 25px 35px;
    /* border: 1px solid green; */
  }


  .link3 .toolsWrap .wrap .top{
    width: 1064px;
    height: 306px;
    padding: 32px 22px 32px 32px;
    border: 1px solid #e7e7e7;
  }
  .link3 .toolsWrap .wrap .top .pict{
    width: 500px;
    height: 305px;
    display: inline-block;
    float: left;
  }
  .link3 .toolsWrap .wrap .top .imgList{
    width: 515px;
    height: 305px;
    margin-left: 15px;
    display: inline-block;
    float: right;
  }
  .link3 .toolsWrap .wrap .top .imgList .name{
    height: 45px;
    line-height: 45px;
    border-bottom: 1px dashed #c5c5c5;
    color: #1ea6b0;
    font-size: 30px;
  }
  .link3 .toolsWrap .wrap .top .imgList .ExchValue{
    height: 28px;
    padding: 17px 0;
    /* line-height: 62px; */
    border-bottom: 1px dashed #c5c5c5;
  }
  .link3 .toolsWrap .wrap .top .imgList .ExchValue .price{
    width: 75px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
    background: #f0f0f0;
    border-radius: 5px;
    font-size: 14px;
  }
  .toolsWrap .wrap .top .imgList .ExchValue .price2{
    height: 28px;
    line-height: 28px;
    margin-left: 18px;
    display: inline-block;
    vertical-align: middle;
    font-size: 26px;
    color: #fdb912;
  }
  .toolsWrap .wrap .top .imgList .ExchValue .price3{
    height: 28px;
    line-height: 28px;
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
  }
  .toolsWrap .wrap .top .imgList .ExchNum{
    height: 62px;
    /* padding: 17px 0; */
    border-bottom: 1px dashed #c5c5c5;
  }
  .toolsWrap .wrap .top .imgList .ExchNum  .ExchNum_1{
    width: 75px;
    height: 28px;
    line-height: 28px;
    margin: 17px 0;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
    background: #f0f0f0;
    border-radius: 5px;
    font-size: 14px;
    float: left;
  }
  .toolsWrap .wrap .top .imgList .ExchNum  .ExchNum_2{
    height: 38px;
    line-height: 38px;
    margin: 12px 0;
    display: inline-block;
    vertical-align: middle;
    color: #fdb912;
    float: left;
    margin-left: 18px;
  }
  .toolsWrap .wrap .top .imgList .RemainNum{
    height: 28px;
    padding: 17px 0;
    /* border-bottom: 1px dashed #c5c5c5; */
  }
  .toolsWrap .wrap .top .imgList .RemainNum .RemainNum_1{
    width: 75px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
    background: #f0f0f0;
    border-radius: 5px;
    font-size: 14px;
  }
  .toolsWrap .wrap .top .imgList .RemainNum .RemainNum_2{
    height: 28px;
    line-height: 28px;
    margin-left: 18px;
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
  }
  .toolsWrap .wrap .top .imgList .RedeemNow{margin-top: 10px;}
  .toolsWrap .wrap .top .imgList .RedeemNow .el-button{
    width: 242px;
    height: 58px;
    background-color: #fdbe12;
    border-color: #fdbe12;
    color: #fff;
  }
  .toolsWrap .wrap .botm{
    height: 56px;
    text-align: center;
    padding: 72px 0;
  }
  .toolsWrap .wrap .botm .el-button{
    width: 312px;
    height: 62px;
  }
</style>
