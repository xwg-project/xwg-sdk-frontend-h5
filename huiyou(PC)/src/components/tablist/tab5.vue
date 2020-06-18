<template>
  <div class="test-page">

    <div class="wrapLeft">

      <div class="contentTop">
        <div class="date1">
            <img src="@/assets/images/date.png" alt="">
            <span class="span1">
              {{ currentYear }}年{{ currentMonth }}月{{ currentDay }}日
            </span>
        </div>
        <div class="date2">本月签到{{this.arrDate.length}}天</div>
      </div>

      <div class="content">
        <!-- 年份 月份 -->
        <ul class="month bottom-line">
          <!--点击会触发pickpre函数，重新刷新当前日期 -->
          <li class="arrow" @click="pickPre(currentYear,currentMonth)">
            <i class="el-icon-arrow-left"></i> 上个月
          </li>
          <li class="year-month">
            <span>{{ currentYear }}-{{ currentMonth }}</span>
          </li>
          <li class="arrow" @click="pickNext(currentYear,currentMonth)">
            下个月 <i class="el-icon-arrow-right"></i>
          </li>
        </ul>

        <!-- 星期 -->
        <ul class="weekdays">
          <li>周日</li>
          <li>周一</li>
          <li>周二</li>
          <li>周三</li>
          <li>周四</li>
          <li>周五</li>
          <li>周六</li>
        </ul>

        <!-- 日期 -->
        <ul class="days bottom-line">
          <li  v-for="(day, index) in days" :key="index">
            <!--本月已签到日期-->
            <span v-if="day.isSign && day.day.getMonth()+1 === currentMonth" class="cli">
              <img src="@/assets/images/calendar-sign-icon.png">
              {{ day.day.getDate() }}
            </span>
            <!--本月未签到日期-->
            <span
              v-if="!day.isSign && day.day.getMonth()+1 === currentMonth"
              class="cli"
            >
              {{ day.day.getDate() }}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="wrapRight">
      <div class="top">
        <div class="title">
          <div class="div1">
            <span></span>
          </div>
          <div class="div2">已累计签到{{this.arrDate.length}}天</div>
          <div class="div3">
            <span></span>
          </div>
        </div>
        <div class="button" v-if="!sign" @click="Sign">
          <img src="@/assets/images/edit.png" class="pictu">
          <div>立即去签到</div>
        </div>
        <div class="button" v-if="sign">
          <img src="@/assets/images/edit.png" class="pictu">
          <div @click="qiandao">已签到</div>
        </div>
        <!-- <div>已连续签到{{day}}天，继续加油!</div> -->
      </div>

      <div class="role">
        <div class="role-title">签到规则</div>
        <!-- <div class="role-content" v-html="role ? role : '暂无内容'"></div> -->
        <div class="role-content">
          <ul>
            <li>* 首次签到获得0.05元积分奖励</li>
            <li>* 连续签到每天增加0.01元积分奖励</li>
            <li>* 连续签到16天及以上每天获得0.02元积分奖励</li>
            <li>* 如果中间有一天间断未签到的，重新开始计算连续签到时间。</li>
            <li>* 连续签到获得奖励后分享到QQ空间、微信朋友圈后再获得一次奖励，每天只限分享一次。</li>
            <li>* 获得的奖励不能直接体现，只能消费后转卖变现。</li>
          </ul>
        </div>
      </div>
      <div class="gameImg">
        <img src="~@/assets/images/gamePic.png">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      currentDay: 1, // 当前天
      currentMonth: 1, // 当前月
      currentYear: 1970,
      currentWeek: 1, // 一号所在的星期
      days: [], // 当月所有天数
      content: {},
      arrDate: [], // 当月签到日期
      num: 0,
      day: 10,
      sign: false,
      // role: '<p>每天签到可获得5个能量</p>',
    };
  },
  created() {
    this.getSign();
  },
  methods: {
    qiandao() {
      this.$message({
        message: '恭喜你，成功签到！',
        type: 'success',
      });
    },
    /**
     * 获取签到日期
     */
    getSign() {
      // 接口未完成，模拟数据
      const signDays = [
        { day: 1 },
        { day: 2 },
        { day: 3 },
        { day: 4 },
        { day: 5 },
        // { day: 6 },
        // { day: 7 },
        // { day: 8 },
        // { day: 9 },
        // { day: 10 },
        // { day: 22 },
        // { day: 29 },
      ];
      // for (const i in signDays) {
      for (let i = 0; i < signDays.length; i++) {
        // this.arrDate.push(signDays[i].day);
        if (Object.prototype.hasOwnProperty.call(signDays, i)) {
          this.arrDate.push(signDays[i].day);
        }
      }
      this.initData(null);
    },
    initData(cur) {
      let date;
      if (cur) { // 切换日期
        date = new Date(cur);
      } else {
        const now = new Date();
        const d = new Date(this.formatDate(now.getFullYear(), now.getMonth() + 1, 1));
        d.setDate(35); // 设置天数为35天
        date = new Date(this.formatDate(d.getFullYear(), d.getMonth(), 1));
      }
      this.currentDay = date.getDate(); // 今日日期 几号
      this.currentYear = date.getFullYear(); // 当前年份
      this.currentMonth = date.getMonth() + 1; // 当前月份

      // this.curDay1 = getDate();
      this.currentWeek = date.getDay(); // 0,1...6 星期
      const str =
        this.formatDate(this.currentYear, this.currentMonth, this.currentDay); // 2020-01-01
      this.days.length = 0; // 初始化日期
      // 如果今天是周日，放在第一行第7个位置，前面6个 这里默认显示一周，如果需要显示一个月，则第二个循环为 i<= 35- this.currentWeek
      for (let i = this.currentWeek; i > 0; i--) {
        const d = new Date(str);
        d.setDate(d.getDate() - i);
        const dayobject = {}; // 用一个对象包装Date对象  以便为以后预定功能添加属性
        dayobject.day = d;
        this.days.push(dayobject); // 将日期放入data 中的days数组 供页面渲染使用
      }
      // 其他周 // 设置天数为35天,周日设置在第一位，循环从36开始
      this.num = 0;
      for (let j = 0; j <= 36 - this.currentWeek; j++) {
        const d = new Date(str);
        d.setDate(d.getDate() + j);
        const dddd = d.getDate();
        if (dddd === 1) {
          this.num++;
        }
        if (this.num === 2) {
          return;
        }
        const dayobject = { day: d, isSign: this.isVerDate(dddd) };
        this.days.push(dayobject);
      }
    },
    /**
     * 判断该日期是否有签到
     * @param v
     * @returns {boolean}
     */
    isVerDate(v) {
      return this.arrDate.includes(v);
    },
    /**
     * 上一月
     * @param year
     * @param month
     */
    pickPre(year, month) {
      const d = new Date(this.formatDate(year, month, 1));
      d.setDate(0);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    /**
     * 下一月
     * @param year
     * @param month
     */
    pickNext(year, month) {
      const d = new Date(this.formatDate(year, month, 1));
      d.setDate(35);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    // 返回 类似 2020-01-01 格式的字符串
    formatDate(year, month, day) {
      // month < 10 && (month = '0' + month);
      // day < 10 && (day = '0' + day);
      // const data = year + '-' + month + '-' + day;
      // month < 10 && (month = `0${month}`);
      // day < 10 && (day = `0${day}`);
      const data = `${year}-${month}-${day}`;
      return data;
    },
    /**
     * 点击签到
     * @param index
     */
    Sign() {
      const now = new Date();
      this.arrDate.push(now.getDate());
      this.initData();
      this.sign = true;
      // 接口待完成，虚拟提示
      // this.$fn.success('签到成功');
      this.qiandao();
    },
  },
};
</script>

 <style scoped>
  .test-page{
    /* border: 1px solid red; */
    /* height: 712px; */
    height: 814px;
    /* width: 1195px; */
    background: #fff;
    margin: 15px 5.5% 60px;
    padding: 42px 40px 50px;
  }
  .test-page .wrapLeft{
    width: 740px;
    /* height: 714px; */
    /* height: 814px; */
    height: auto;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    float: left;
    background: #eee;
  }
  .test-page .wrapRight{
    width: 340px;
    height: 714px;
    float: right;
  }
  .test-page .contentTop {
    height: 55px;
    background: #26c1cd;
    color: #fff;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .test-page .contentTop .date1{
    display: inline-block;
    float: left;
    height: 35px;
    padding: 10px 0;
    margin-left: 20px;
  }
  .test-page .contentTop .date1 .span1{
    display: inline-block;
    height: 35px;
    line-height: 35px;
    vertical-align: top;
    margin-left: 15px;
  }
  .test-page .contentTop .date2{
    display: inline-block;
    float: right;
    height: 35px;
    line-height: 35px;
    padding: 10px 0;
    margin-right: 20px;
  }
  .test-page .top {
    background: #fff;
    border: 1px solid #eee;
   /*  background: url('static/images/user-bg-img.jpg') no-repeat 0 0; */
    /* background-size: 100% 100%;
    overflow: hidden; */
    color: #fff;
    /* padding: 15px;
    height: 120px; */
    width: 340px;
    height: 162px;
    text-align: center;
    border-radius: 6px;
  }
  .test-page .top .button{
    display: flex;
    justify-content: center;
    border-radius: 10px;
    color: #ffffff;
    font-size: 18px;
    width: 310px;
    height: 74px;
    line-height: 74px;
    background: url('~@/assets/images/edit-icon.png') no-repeat center;
    cursor: pointer;
    /* padding: 20px 15px; */
    margin: 16px 15px;
  }
  .test-page .top .button .pictu {
    display: block;
    width: 30px;
    height: 30px;
    margin: 21px 12px 0;
    /* background: url('static/images/calendar-icon.png') no-repeat -6px -4px; */
    /* background-size: 114px 45px; */
  }
  .test-page .top .button:active{
    background-color: #5283c4;
    opacity: 0.8;
  }
  .test-page .top .title{
    height: 55px;
    line-height: 55px;
    background: #e0e0e0;
  }
  .test-page .top .title .div2{
    color: #000;
    margin: 0 0px 0 55px;
  }
  .test-page .top .title .div1,
  .test-page .top .title .div2{
    display: inline-block;
    float: left;
    height: 55px;
  }
  .test-page .top .title .div1,
  .test-page .top .title .div3{
    position: relative;
    width: 60px;
  }
  .test-page .top .title .div3{
    display: inline-block;
    float: right;
    height: 55px;
  }
  .test-page .top .title .div1 span,
  .test-page .top .title .div3 span{
    display: block;
    width: 16px;
    height: 16px;
    background: #c7c7c7;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  .test-page .content{
    margin: 0 0px;
    padding: 30px 40px 20px;
    border-radius: 8px;
    /* border: 1px solid #f60; */
    /* overflow: hidden;
    margin-top: -40px; */
    box-shadow: rgba(225,225,225,0.7) 0  10px 20px 0;
  }
  .test-page .month{
    /* background: #ffffff; */
    background: #fcd167;
    border-radius: 4px;
    margin: 0;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
  }
  .test-page .month li{
    text-transform: uppercase;
    letter-spacing: 0;
    list-style: none;
    line-height: 21px;
  }
  .test-page .month .arrow {
    /* color: #5283c4;
    font-size: 12px; */
    color: #09f;
    font-size: 14px;
    cursor: pointer;
  }
  .test-page .month li .arrow i{
    font-size: 13px;
    top: 2px;
  }
  .test-page .month li .year-month { font-size: 17px; }
  .test-page .weekdays {
    margin: 0;
    padding: 10px 0;
    /* background-color: #ffffff; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .test-page .weekdays li {
    display: inline-block;
    text-align: center;
    height: 42px;
    width: 90px;
    line-height: 42px;
    border-radius: 6px;
    background: #fcd167;
  }
  .test-page .days { /*日期*/
    padding: 0 0 10px;
    /* background: #FFFFFF; */
    /* background: #e0e0e0; */
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
  }
  .test-page .days li{
    list-style-type: none;
    /* width: 14.2%; */
    width: 13.66%;
    border-radius: 4px;
    background: #e0e0e0;;
    box-sizing: border-box;
    /* height: 40px; */
    height: 90px;
    margin: 4px 2px;
   /*  padding: 0 0.5%; */
    text-align: center;
    color: #000;
  }
  .test-page .days li .cli {
    position: relative;
    width: 100%;
    height: 90px;
    border-radius: 4px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    color: #5b5b5b;
  }
  .test-page .days li .cli img {
    /* height: 40px; */
    height: 60px;
    position: absolute;
  }
  .test-page .role {
    height: 336px;
    border: 1px solid #eee;
    /* padding: 20px 15px; */
    margin: 30px 0 22px;
    border-radius: 6px;
  }
  .test-page .role .role-title {
    height: 50px;
    line-height: 50px;
    padding-left: 15px;
    font-size: 18px;
    background: #eee;
    color: #5b5b5b;
  }
  .test-page .role .role-content {
    font-size: 14px;
    padding: 15px 15px;
  }
  .test-page .role .role-content ul li{
    list-style: none;
    line-height: 28px;
    color: #5b5b5b;
  }
  </style>
