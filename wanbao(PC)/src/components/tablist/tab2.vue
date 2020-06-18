<template>
  <div class="link2">
    <div class="content">
      <div class="titlewrap">
        <div class="title">行情</div>
      </div>
      <div class="chart">
        <trading-chart></trading-chart>
      </div>
      <div class="list">
        <div class="list_1">
          <div class="gameContainer">
            <div class="gamebox">
              <el-table
                :data="myData"
                style="width: 100%"
              >
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
        <div class="list_2">
          <el-tabs :stretch=true v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="买入" name="first">
              <div class="child1">
                <div class="son1 son">
                  <div class="demo-input-size">
                    <el-input
                      placeholder="出价"
                      v-model="input1">
                      <template slot="append">TCB</template>
                    </el-input>
                  </div>
                </div>
                <div class="son2 son">
                  <div class="demo-input-size">
                    <el-input
                      placeholder="数量"
                      v-model="input2">
                      <template slot="append">XWG</template>
                    </el-input>
                  </div>
                </div>
                <div class="son3">
                  <el-select v-model="select" placeholder="时限：24h">
                    <el-option label="2H" value="1"></el-option>
                    <el-option label="4H" value="2"></el-option>
                    <el-option label="8H" value="3"></el-option>
                    <el-option label="12H" value="4"></el-option>
                    <el-option label="24H" value="5"></el-option>
                  </el-select>
                </div>
                <div class="son4">
                  <p>预计支出： <span class="span2">0TCB</span></p>
                  <p>账户余额： <span class="span2">100TCB</span></p>
                </div>
                <div class="son5">
                  <el-button class="myBtn">买入</el-button>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="卖出" name="second">
              <div class="child2">
                <div class="son1 son">
                  <div class="demo-input-size">
                    <el-input
                      placeholder="出价"
                      v-model="input1">
                      <template slot="append">TCB</template>
                    </el-input>
                  </div>
                </div>
                <div class="son2 son">
                  <div class="demo-input-size">
                    <el-input
                      placeholder="数量"
                      v-model="input2">
                      <template slot="append">XWG</template>
                    </el-input>
                  </div>
                </div>
                <div class="son3">
                  <el-select v-model="select" placeholder="时限：24h">
                    <el-option label="2H" value="1"></el-option>
                    <el-option label="4H" value="2"></el-option>
                    <el-option label="8H" value="3"></el-option>
                    <el-option label="12H" value="4"></el-option>
                    <el-option label="24H" value="5"></el-option>
                  </el-select>
                </div>
                <div class="son4">
                  <p>预计支出： <span class="span2">0TCB</span></p>
                  <p>账户余额： <span class="span2">100TCB</span></p>
                </div>
                <div class="son5">
                  <el-button class="myBtn">卖出</el-button>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// const ERR_OK = 0;
import TradingChart from '@/components/tablist/echart/TradingChart';

export default {
  components: {
    TradingChart,
  },
  data() {
    return {
      activeName: 'first',
      input1: '',
      input2: '',
      input3: '',
      select: '',
      myData: [
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
    };
  },
  created() {
  },
  mounted() {
  },
  destroyed() {
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style scoped>
  .link2{
    position: relative;
    height: auto;
    margin: 20px auto 30px;
    background: #fff;
  }
  .link2 .content{
    position: relative;
    height: 1100px;/*no*/
  }
  .link2 .content .titlewrap{
    position: relative;
  }
  .link2 .content .title{
    position: relative;
    height: 55px;/*no*/
    background: #f0f0f0;
    line-height: 55px;/*no*/
    padding-left: 20px;/*no*/
    font-size: 20px;/*no*/
  }
  .link2 .content .chart,
  .link2 .content .list{
    width: 72%;
    padding: 0 14%;
    margin: 10px auto;/*no*/
  }
  .link2 .content .list .list_1{
    margin-bottom: 10px;/*no*/
  }
  .link2 .content .list .list_2{
    height: 340px;/*no*/
  }
  .link2 .content .list .list_1 >>> .el-table__row td:nth-child(1),
  .link2 .content .list .list_1 >>> .el-table__row td:nth-child(2),
  .link2 .content .list .list_1 >>> .el-table__row td:nth-child(3){
    background-color: #e8faec;
  }
  .link2 .content .list .list_1 >>> .el-table__row td:nth-child(4),
  .link2 .content .list .list_1 >>> .el-table__row td:nth-child(5),
  .link2 .content .list .list_1 >>> .el-table__row td:nth-child(6){
    background-color: #fff2f1;
  }
  .link2 .content .list .list_1 >>> .el-table__row td:nth-child(3) .cell{
    color: #37b877;
  }
  .link2 .content .list .list_1 >>> .el-table__row td:nth-child(4) .cell{
    color: #fb4940;
  }
  .link2 .content .list .gamebox >>> .el-table td,
  .link2 .content .list .gamebox >>> .el-table th{
    text-align: center;
  }
  .link2 .content .list .gamebox >>> .el-table th{
    background-color: #c7cfe4;
    color: #3b3a3a;
    font-weight: bold;
  }
  .link2 .content .list .gamebox >>> .el-table__header-wrapper {
    border-radius: 5px;/*no*/
  }
  .link2 .content .list .gamebox >>> .el-table .cell{white-space: nowrap;}
  .link2 .content >>> .el-select{
    width: 100%;
  }
  .link2 .content >>> .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .link2 .content .child1 .myBtn{
    width: 100%;
    padding: 16px 20px;/*no*/
    font-size: 20px;/*no*/
    background-color: #37b877;
    color: #fff;
  }
  .link2 .content .child2 .myBtn{
    width: 100%;
    padding: 16px 20px;/*no*/
    font-size: 20px;/*no*/
    background-color: #fd372d;
    color: #fff;
  }
  .link2 .content .son{
    margin-bottom: 10px;/*no*/
  }
  .link2 .content .son3{margin-bottom: 10px;/*no*/}
  .link2 .content .son4{margin-bottom: 20px;/*no*/}
  .link2 .content .son4 p{font-size: 18px;/*no*/color: #969696; }
  .link2 .content .son4 p .span2{ color: #535353; }
  .link2 .content .son >>> .demo-input-size{
    border: 1px solid #DCDFE6;/*no*/
    border-radius: 5px;/*no*/
  }
  .link2 .content .son >>> .el-input__inner,
  .link2 .content .son >>> .el-input-group__append{
    border-style: none;
    outline: none;
    box-shadow: none;
    background: none;
    text-align: center;
  }
  .link2 .content .son3 >>> .el-select .el-input__inner{
    text-align: center;
  }
  .link2 .content >>> #tab-first{
    background: #e3e3e3;
  }
  .link2 .content >>> #tab-second{
    background: #e3e3e3;
  }
  .link2 .content >>> .el-tabs__item:hover{
    color: #000;
  }
  /* .el-tabs__item.is-active {
    color: #fff;
    background: #37b877;
  } */
  .link2 .content >>> #tab-first.is-active{
    color: #fff;
    background: #37b877;
  }
  .link2 .content >>> #tab-second.is-active{
    color: #fff;
    background: #fd372d;
  }
  .link2 .content >>> .el-tabs__active-bar{
    background-color: transparent;
  }
</style>

