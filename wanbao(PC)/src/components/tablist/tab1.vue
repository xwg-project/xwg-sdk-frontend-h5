<template>
  <div class="contents">
    <div class="contents_box">
      <div class="contents_box_left">
        <div class="container">
          <div class="gameTitle">
            <span class="span1">行情</span>
          </div>
          <div class="banner">
            <div id="echarts" ref="echarts" style="width:100%; height: 370px;"></div>
          </div>
        </div>
        <div class="games">
          <!-- 新版 -->
          <div class="gameContainer">
            <div class="gamebox">
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="buy"
                  label="买"
                >
                </el-table-column>
                <el-table-column
                  prop="num1"
                  label="数量"
                >
                </el-table-column>
                <el-table-column
                  prop="price1"
                  label="价格"
                >
                </el-table-column>
                <el-table-column
                  prop="price2"
                  label="价格"
                >
                </el-table-column>
                <el-table-column
                  prop="num2"
                  label="数量"
                >
                </el-table-column>
                <el-table-column
                  prop="sell"
                  label="卖">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
        <div class="tools">
          <p class="tools_title">
            <span class="span1">委托</span>
            <span class="span2">more</span>
          </p>
          <div class="tools_content">
            <div class="tools_list">
              <el-table
                :data="tableData1"
                style="width: 100%">
                <el-table-column
                  prop="transType"
                  label="交易类型"
                  width="100"
                >
                </el-table-column>
                <el-table-column
                  prop="Currency"
                  label="币种"
                  width="90"
                >
                </el-table-column>
                <el-table-column
                  prop="amount"
                  label="数量"
                  width="90"
                >
                </el-table-column>
                <el-table-column
                  prop="unitPrice"
                  label="单价(TCB)"
                >
                </el-table-column>
                <el-table-column
                  prop="TotalPrice"
                  label="总价(TCB)"
                >
                </el-table-column>
                <el-table-column
                  prop="timelimit"
                  label="时限"
                  width="90"
                >
                </el-table-column>
                <el-table-column
                  prop="time"
                  label="时间"
                  width="140"
                >
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
      <div class="contents_box_right">
        <div class="login" v-show="noLogin">
          <div class="avat">
            <img src="@/assets/images/Avatar1.png" class="avatImg">
          </div>
          <div class="sign">
            <el-row class="row1"><el-button class="btn1">快速登陆</el-button></el-row>
            <el-row class="row2"><el-button class="btn2">免费注册</el-button></el-row>
          </div>
        </div>

        <div class="IsLogin" v-show="isLogin">
          <div class="avat">
            <img src="@/assets/images/shiyongtouxiang.png" class="avatImg">
          </div>
          <div class="text">
            <div class="text_1">
              <p class="p1">欢迎你，长风破浪会有时直挂云帆</p>
              <p class="p2">你尚未实名认证，你设置支付密码</p>
            </div>
            <div class="text_2">
              <p>
                <a href="####" class="a1 a">完善资料</a>
              </p>
              <p>
                <a href="####" class="a2 a">退出账号</a>
              </p>
            </div>
          </div>
        </div>
        <div class="wallet">
          <div class="title">
            <span class="span1">钱包</span>
            <span class="span2">more</span>
          </div>
          <div class="container">
            <div class="items" v-for="item in items" :key="item.id">
              <div class="child1"><img :src="item.imgUrl" alt=""></div>
              <div class="child2">{{item.TotalPrice}}</div>
              <div class="child3">{{item.currency}}</div>
            </div>
          </div>
        </div>
        <div class="news">
          <div class="title">
            <span class="span1">最新消息</span>
            <span class="span2">more</span>
          </div>
          <div class="container">
            <div class="proitem" v-for="proitem in proitems" :key="proitem.id">
              <div class="text">
                <!-- <router-link :to="{path: '/News'}"> -->
                  {{proitem.descr}}
                <!-- </router-link> -->
              </div>
              <div class="time">{{proitem.time}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import echarts from 'echarts';

const ERR_OK = 0;
// let echarts = require('echarts');
export default {
  components: {
  },
  mounted() {
    this.youFunc();
  },
  name: 'Tab1',
  data() {
    return {
      activeName: 'first',
      noLogin: false,
      isLogin: true,
      tableData: [
        {
          buy: '买一',
          num1: '9999999',
          price1: '9.01',
          price2: '102',
          num2: '123333',
          sell: '卖一',
        },
        {
          buy: '买二',
          num1: '9999999',
          price1: '9.01',
          price2: '102',
          num2: '123333',
          sell: '卖二',
        },
        {
          buy: '买三',
          num1: '9999999',
          price1: '9.01',
          price2: '102',
          num2: '123333',
          sell: '卖三',
        },
        {
          buy: '买四',
          num1: '9999999',
          price1: '9.01',
          price2: '102',
          num2: '123333',
          sell: '卖四',
        },
        {
          buy: '买五',
          num1: '9999999',
          price1: '9.01',
          price2: '102',
          num2: '123333',
          sell: '卖五',
        },
      ],
      tableData1: [
        {
          transType: '买入',
          Currency: 'WXG',
          amount: '10',
          unitPrice: '666666',
          TotalPrice: '9999999',
          timelimit: '24H',
          time: '2020-05-09 18:00',
        },
        {
          transType: '买入',
          Currency: 'WXG',
          amount: '10',
          unitPrice: '666666',
          TotalPrice: '9999999',
          timelimit: '24H',
          time: '2020-05-09 18:00',
        },
        {
          transType: '买入',
          Currency: 'WXG',
          amount: '10',
          unitPrice: '666666',
          TotalPrice: '9999999',
          timelimit: '24H',
          time: '2020-05-09 18:00',
        },
        {
          transType: '买入',
          Currency: 'WXG',
          amount: '10',
          unitPrice: '666666',
          TotalPrice: '9999999',
          timelimit: '24H',
          time: '2020-05-09 18:00',
        },
      ],
      items: [
        {
          id: 1,
          imgUrl: require('@/assets/images/circle1.png'),
          TotalPrice: '123,456,789,012.30',
          currency: 'WXG',
        },
        {
          id: 2,
          imgUrl: require('@/assets/images/circle2.png'),
          TotalPrice: '123,456,789,012.30',
          currency: 'WXG',
        },
        {
          id: 3,
          imgUrl: require('@/assets/images/circle3.png'),
          TotalPrice: '123,456,789,012.30',
          currency: 'WXG',
        },
      ],
      proitems: [
        {
          id: '001',
          descr: '【公告】2018年快递紧急停运延迟配送',
          time: '2018.06.29',
        },
        {
          id: '002',
          descr: '【公告】国庆假期快递紧急停运延迟配送公告',
          time: '2018.03.19',
        },
        {
          id: '003',
          descr: '【公告】飞行棋游戏地垫下架公告',
          time: '2018.04.25',
        },
        {
          id: '004',
          descr: '【公告】2018年快递紧急停运延迟配送',
          time: '2018.06.01',
        },
        {
          id: '005',
          descr: '【公告】国庆假期快递紧急停运延迟配送通知',
          time: '2018.05.01',
        },
      ],
      resData: '',
      KlineData: [],
      youEchartData: [],
    };
  },
  methods: {
    // getFunData() {
    //   this.$http.get('/api/kLine').then((response) => {
    //     response = response.body;
    //     if (response.errno === ERR_OK) {
    //       this.KlineData = response.data;
    //     }
    //   });
    // },
    // 函数结束
    // ---------------------------------
    youFunc() {
      let myData = '';
      this.$http.get('/api/YoukLine').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.youEchartData = response.data;
          myData = this.youEchartData;
          console.log('+++++++++++++++++++++++++++++++++');
          console.log(myData);
          console.log('+++++++++++++++++++++++++++++++++');
        }
        const rawData = this.youEchartData.reverse();
        function calculateMA(dayCount, data) {
          const result = [];
          for (let i = 0, len = data.length; i < len; i++) {
            if (i < dayCount) {
              result.push('-');
              continue;
            }
            let sum = 0;
            for (let j = 0; j < dayCount; j++) {
              sum += data[i - j][1];
            }
            result.push(sum / dayCount);
          }
          return result;
        }
        const dates = rawData.map((item) => {
          return item[0];
        });
        const data = rawData.map((item) => {
          return [+item[1], +item[2], +item[5], +item[6]];
        });
        const option = {
          backgroundColor: '#21202D',
          legend: {
            data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30'],
            inactiveColor: '#777',
            textStyle: {
              color: '#fff',
            },
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              animation: false,
              type: 'cross',
              lineStyle: {
                color: '#376df4',
                width: 2,
                opacity: 1,
              },
            },
          },
          xAxis: {
            type: 'category',
            data: dates,
            axisLine: { lineStyle: { color: '#8392A5' } },
          },
          yAxis: {
            scale: true,
            axisLine: { lineStyle: { color: '#8392A5' } },
            splitLine: { show: false },
          },
          grid: {
            // bottom: 80,
            left: 50,
            right: 50,
            bottom: 80,
          },
          dataZoom: [
            {
              textStyle: {
                color: '#8392A5',
              },
              handleSize: '80%',
              dataBackground: {
                areaStyle: {
                  color: '#8392A5',
                },
                lineStyle: {
                  opacity: 0.8,
                  color: '#8392A5',
                },
              },
              handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2,
              },
            },
            {
              type: 'inside',
            },
          ],
          animation: false,
          series: [
            {
              type: 'candlestick',
              name: '日K',
              // data: data,
              data,
              itemStyle: {
                color: '#FD1050',
                color0: '#0CF49B',
                borderColor: '#FD1050',
                borderColor0: '#0CF49B',
              },
            },
            {
              name: 'MA5',
              type: 'line',
              data: calculateMA(5, data),
              smooth: true,
              showSymbol: false,
              lineStyle: {
                width: 1,
              },
            },
            {
              name: 'MA10',
              type: 'line',
              data: calculateMA(10, data),
              smooth: true,
              showSymbol: false,
              lineStyle: {
                width: 1,
              },
            },
            {
              name: 'MA20',
              type: 'line',
              data: calculateMA(20, data),
              smooth: true,
              showSymbol: false,
              lineStyle: {
                width: 1,
              },
            },
            {
              name: 'MA30',
              type: 'line',
              data: calculateMA(30, data),
              smooth: true,
              showSymbol: false,
              lineStyle: {
                width: 1,
              },
            },
          ],
        };
        // 初始化图表
        const charts = echarts.init(document.getElementById('echarts'));
        charts.setOption(option);
        charts.resize();
      // },
      });
    },
    // ---------------------------------
  },
};
</script>

<style scoped>
.contents .contents_box{
  width: 100%;
  height: 1120px;/*no*/
  margin: 20px auto;/*no*/
  /* border: 1px solid blue; */
}
.contents .contents_box .contents_box_left{
  /* width: 836px; */
  width: 70%;
  height: 1120px;/*no*/
  margin-right: 1.5%;
  float: left;
  /* border: 1px solid red; */
}
.contents .contents_box .contents_box_right{
  /* width: 344px; */
  width: 28%;
  height: 1120px;/*no*/
  float: left;
  /* border: 1px solid green; */
}
.contents_box_left .container .gameTitle{
  height: 55px;
  background: #e3e3e3;
  line-height: 55px;
  font-size: 14px;
}
.contents_box_left .container .gameTitle .span1{
  margin-left: 25px;
}
.contents_box_left .banner{
  width: 100%;/*no*/
  height: 370px;/*no*/
  /* background: #09c; */
}
.contents_box_left .games{
  background: #fff;
  margin-top: 20px;/*no*/
  width: 100%;
  height: 394px;/*no*/
}
.contents_box_left .games .gameContainer{
  width: 100%;
  height: 280px;
  padding: 35px 0px;
}
.contents_box_left .games .gameTitle{
  height: 55px;
  background: #e3e3e3;
  line-height: 55px;
}
.contents_box_left .games .gameTitle .span1{
  margin-left: 25px;
}
.contents_box_left .games .gameContainer .gamebox{
  float: left;
  width: 100%;
  height: 125px;
  /* margin: 10px 15px; */
  text-align: center;
}
.contents_box_left .games .gameContainer .gamebox .p1{
  font-size: 14px;
}
.contents_box_left .tools{
  height: 280px;/*no*/
  margin-top: 20px;/*no*/
  background: #fff;
}
.contents_box_left .tools .tools_title{
  height: 55px;
  background: #e3e3e3;
  line-height: 55px;
}
.contents_box_left .tools .tools_title .span1{
  margin-left: 25px;
}
.contents_box_left .tools .tools_title .span2{
  width: 50px;
  height: 20px;
  line-height: 20px;
  margin-right: 20px;
  margin-top: 17px;
  color: #27c1cd;
  float: right;
  border: 1px solid #27c1cd;
  border-radius: 5px;
  text-align: center;
}
.contents_box_left .tools .tools_content{
  width: 100%;
  height: 180px;
  /* margin: 25px 35px; */
}
.contents_box_left .tools .tools_content .tools_list{
  width: 100%;
  height: 164px;
  float: left;
  display: inline-block;
  text-align: center;
}
.contents_box_left .tools .tools_content .tools_list .span1{
  color: #ed3942;
  margin-right: 5px;
}
.contents_box_left .tools .tools_content .tools_list .photo{
  position: relative;
}
.contents_box_left .tools .tools_content .tools_list .mony{font-size: 14px;}
.contents_box_left .tools .tools_content .tools_list .photo .tool_desc{
  position: relative;
  top: 126px;
  color: #fff;
}
.contents_box_right .login{
  width: 100%;
  height: 370px;
  background: #fff;
  /* padding: 0 20px; */
}
.contents_box_right .login .avat{
  height: 210px;
  margin:0 auto;
  text-align: center;
}
.contents_box_right .login .avat .avatImg{margin-top:25px;}
.contents_box_right .imgLink{ width: 342px; height: 344px; background: #fff; margin-top: 20px;}
.contents_box_right .login .el-button{ width: 100%; }
.contents_box_right .login .sign{ margin-top: 15px; }
.contents_box_right .login .row1 .btn1{
  height: 55px;
  background: #32cbd1;
  color: #fff;
  margin-bottom: 15px;
}
.contents_box_right .login .row2 .btn2{height: 55px; background: #fff; color: #32cbd1; }
.contents_box_right .login .total{ height: 60px; line-height: 60px; }
.contents_box_right .login .people .up1,
.contents_box_right .login .people .up2{
  height: 65px;
  /* border: 1px solid red; */
}
.contents_box_right .login .people .up1 .up1_1 img,
.contents_box_right .login .people .up2 .up2_1 img{ vertical-align: middle; }

.contents_box_right .login .people .up1 .up1_1,
.contents_box_right .login .people .up2 .up2_1{
  width: 60px;
  text-align: center;
  background: #e7e7e7;
}

.contents_box_right .login .people .up1 .up1_2,
.contents_box_right .login .people .up2 .up2_2{
  width: 250px;
  text-align: center;
  background: #f5f5f5;
}
.contents_box_right .login .people .up1 .up1_2 span{
  color: #25c1cd;
  font-size: 22px;
  margin-right: 15px;
}
.contents_box_right .login .people .up2 .up2_2 span{
  color: #ffb713;
  font-size: 22px;
  margin-right: 15px;
}
.contents_box_right .login .people .up1 .up1_1,
.contents_box_right .login .people .up1 .up1_2{
  display: inline-block;
  float: left;
  height: 63px;
  line-height: 63px;
}
.contents_box_right .login .people .up2 .up2_1,
.contents_box_right .login .people .up2 .up2_2{
  display: inline-block;
  float: left;
  height: 63px;
  line-height: 63px;
}
.contents_box_right .IsLogin{
  width: 100%;
  height: 410px;/*no*/
  background: #fff;
  /* padding: 0 20px; */
}
.contents_box_right .IsLogin .avat{
  height: 210px;/*no*/
  margin:0 auto;
  text-align: center;
}
.contents_box_right .IsLogin .text {height: 158px;}
.contents_box_right .IsLogin .text .text_1{height: 80px; text-align: center;}
.contents_box_right .IsLogin .text .text_1 .p1{
  margin-bottom: 15px;
  font-size: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
}
.contents_box_right .IsLogin .text .text_2{
  height: 65px;
  line-height: 65px;
  text-align: center;
  font-size: 20px;/*no*/
}
.contents_box_right .IsLogin .text .text_2 .a1{color: #28c1cc;}
.contents_box_right .IsLogin .text .text_2 .a2{
  width: 90%;
  height: 65px;/*no*/
  line-height: 65px;/*no*/
  color: #fff;
  display: block;
  background: #f6613f;
  margin: 0 auto;
  text-decoration: none;
  border-radius: 6px;/*no*/
}
.contents_box_right .IsLogin .avat .avatImg{
  margin-top:25px;
  border:2px solid #28c1cc;
  border-radius: 50%;
}
.contents_box_right .news,
.contents_box_right .wallet{
  width: 100%;
  height: 335px;/*no*/
  background: #fff;
  margin-top: 20px;/*no*/
}
.contents_box_right .news .title,
.contents_box_right .wallet .title{
  height: 55px;
  background: #e3e3e3;
  line-height: 55px;
}
.contents_box_right .news .title .span1,
.contents_box_right .wallet .title .span1{
  margin-left: 15px;
}
.contents_box_right .news .title .span2,
.contents_box_right .wallet .title .span2{
  width: 50px;
  height: 20px;
  line-height: 20px;
  margin-right: 15px;
  margin-top: 17px;
  color: #27c1cd;
  float: right;
  border: 1px solid #27c1cd;
  border-radius: 5px;
  text-align: center;
}
.contents_box_right .wallet .container{
  height: 252px;/*no*/
  padding: 10px;/*no*/
}
.contents_box_right .wallet .container .items{
  /* height: 80px; */
  height: 44px;/*no*/
  line-height: 44px;/*no*/
  padding:18px 0;/*no*/
  background: #f2f2f2;
  margin-bottom: 10px;/*no*/
  border-radius: 6px;/*no*/
}
.contents_box_right .wallet .container .items .child1,
.contents_box_right .wallet .container .items .child2,
.contents_box_right .wallet .container .items .child3{
  float: left;
}
.contents_box_right .wallet .container .items .child1{
  margin:0 15px;/*no*/
  height: 44px;/*no*/
  line-height: 44px;/*no*/
}
.contents_box_right .wallet .container .items .child2{
  margin-right: 10px;/*no*/
  font-size: 18px;/*no*/
  color: #ef4e10;
}
.contents_box_right .wallet .container .items .child3{
  font-size: 18px;
}
.contents_box_right .news .container{
  height: 263px;/*no*/
  padding: 0 15px 15px;
  margin-top: 10px;/*no*/
}
.contents_box_right .news .proitem{
  width: 100%;
  height: 54px;/*no*/
  line-height: 54px;/*no*/
  border-bottom: 1px dotted #ccc;/*no*/
}
.contents_box_right .news .proitem .text{
  display: inline-block;
  float: left;
  width: 200px;/*no*/
  font-size: 14px;/*no*/
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
}
.contents_box_right .news .proitem .time{
  display: inline-block;
  float: right;
  font-size: 14px;/*no*/
}
</style>
