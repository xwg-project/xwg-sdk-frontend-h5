<template>
  <div class="link5">
    <div class="news" v-show="isShow">
      <div class="title">
        <span class="span1">消息</span>
      </div>
      <!-- // tab列表 -->
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="tabsBox">
        <el-tab-pane label="全部消息" name="first">
          <div class="main">
            <div class="Content">
              <div
                class="msgList"
                v-for="item in items.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                :key="item.id"
                @click="goNotic(item.id, item.type)"
              >
                <div class="text">
                  <img src="@/assets/images/biaozhu2.png" class="Img">
                  <span>{{item.type}}</span>
                  {{item.descr}}
                </div>
                <div class="time">{{item.time}}</div>
              </div>
            </div>
            <div class="block">
              <el-pagination
                background
                @size-change="SizeChange1"
                @current-change="CurrentChange1"
                :current-page="currentPage"
                :page-size="pageSize"
                layout="total, prev, pager, next"
                :total="items.length">
              </el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="系统消息" name="second">
          <div class="main">
            222222
          </div>
        </el-tab-pane>
        <el-tab-pane label="活动消息" name="third">
          <div class="main">
            33333333
          </div>
        </el-tab-pane>
        <el-tab-pane label="交易消息" name="fourth">
          <div class="main">
            444444444
          </div>
        </el-tab-pane>
        <el-tab-pane label="提现消息" name="five">
          <div class="main">
            55555
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="hideContent" v-show="systemShow">
      <div class="noticTop" @click="goNews1()">
        <span class="span1">消息 > 全部消息 > xxx系统消息</span>
        <!-- <span> > </span>
        <span class="span1">新闻公告</span> -->
      </div>
      <div class="noticCenter">
        <div class="oneDiv">
          <h3>系统消息标题名字</h3>
          <p>2018-06-21 11:41:54</p>
        </div>
        <div class="twoDiv">
          <div class="div1 item">
           <div>一、7月5日至7月8日，2018《绝地求生》亚洲对抗赛(简称：亚洲对抗赛)即将于大连体育中心体育馆举行。</div>
           <div>近4年称霸世界赛场的PCK赛区，也将对这唯一一座还未曾获得的官方赛事奖杯发起冲击。KZ、AFs、SKT、KT，</div>
           <div>显然已做好准备，这套战队阵容依旧十分强力，只是较以往而言，这一次，他们却又有所不同。KZ，2018PCK</div>
           <div>春季赛新科冠军。整个春季凶猛的抢分势头，整个LCK几乎无人能挡的进攻表现，也让他们成为了季中冠军赛</div>
           <div>的最大夺冠热门。</div>
          </div>
          <div class="div2 item">
            <div>二、中华人民共和国境内外的法人、自然人及其他组织（法律、法规及国家相关规定限制的除外），均可按</div>
            <div>
              《烟台市国有建设用地使用权网上挂牌出让规则》的要求,办理CA数字证书，申请参加竞买。本次出让宗地不接受联合竞买。</div>
            </div>
          <div class="div3 item">
            三、本次国有建设用地使用权挂牌出让按照价高者得的原则确定竞得人。
          </div>
          <div class="div4 item">
            <div class="div4_1">四、公告期、竞买保证金截止期限、挂牌出让期</div>
            <p>1. 本次国有建设用地使用权挂牌出让公告期为: 2018年2月13日至2018年3月5日;</p>
            <p>
              <span>2. 申请人可于2018年2月23日09时至2018年3月14日09时前登录烟台市国土资源网上交易系统，</span>
              <span>提交竞买申请并交纳竞买保证金(开户行：中国农业银行海阳市支行、中国建设银行海阳市支行)。</span>
              <span>竞买保证金到账截止时间为2018年3月14日09时（以烟台市国土资源网上交易系统服务器时间为准）。</span>
              <span>申请人须以办理CA数字证书的名称一次性足额交纳竞买保证金（竞买保证金帐号由系统自动生成）。</span>
              <span>过期，烟台市国土资源网上交易系统将自动停止受理申请。</span>
            </p>
            <p>
              <span>3. 本次国有建设用地使用权挂牌出让期为：</span>
              <span>2017-80号宗地：2018年3月6日9时至2018年3月16日9时；</span>
              <span>2018-10号宗地：2018年3月6日9时至2018年3月16日9时30分；</span>
              <span>2018-11号宗地：2018年3月6日9时至2018年3月16日10时。</span>
            </p>
          </div>
          <div class="div5 item">
            五、竞买资料的取得申请人可于2018年2月13日至2018年3月14日期间，登陆烟台市国土资源网上交易系统，
            在首页上方的“土地交易”栏中点击意向地块的“出让详情”，对意向地块的详细资料和具体要求进行查询或下载
            （包括出让公告、竞买须知、出让合同、相关图件、相关附件等）。
          </div>
          <div class="div6 item">
            六、本次出让公告若内容发生变更的，海阳市国土资源局将按原公告渠道发布补充公告，
            网上挂牌出让活动自变更公告之日起，相应顺延。
          </div>
        </div>
      </div>
    </div>
    <div class="hideContent" v-show="activityShow">
      <div class="noticTop" @click="goNews2()">
        <span class="span1">消息 > 全部消息 > xxx活动消息</span>
      </div>
      <div class="noticCenter">
        <div class="oneDiv">
          <h3>活动消息标题名字</h3>
          <p>2018-06-21 11:41:54</p>
        </div>
        <div class="twoDiv">
          <div class="div1 item">
           <div>千山鸟飞绝千山鸟飞绝千山鸟飞绝千山鸟飞绝千山鸟飞绝千山鸟飞绝千山鸟飞绝千山鸟飞绝千山鸟飞绝千山鸟飞绝</div>
           <div>近4年称霸世界赛场的PCK赛区，也将对这唯一一座还未曾获得的官方赛事奖杯发起冲击。KZ、AFs、SKT、KT，</div>
           <div>显然已做好准备，这套战队阵容依旧十分强力，只是较以往而言，这一次，他们却又有所不同。KZ，2018PCK</div>
           <div>春季赛新科冠军。整个春季凶猛的抢分势头，整个LCK几乎无人能挡的进攻表现，也让他们成为了季中冠军赛</div>
          </div>
        </div>
      </div>
    </div>
    <div class="hideContent" v-show="transactionShow">
      <div class="noticTop" @click="goNews3()">
        <span class="span1">消息 > 全部消息 > xxx交易消息</span>
      </div>
      <div class="noticCenter">
        <div class="tranSucess tran">
          <div class="div1">
            <img src="@/assets/images/cg.png" class="img">
            <p class="p1">恭喜你，交易成功！</p>
          </div>
          <div class="div2">
            <ul>
              <li>
                <div class="son1">委托标号</div>
                <div class="son2">WT2019112815654889</div>
              </li>
              <li>
                <div class="son1">委托数量</div>
                <div class="son2">买入XWG 3500.88</div>
              </li>
              <li>
                <div class="son1">委托金额</div>
                <div class="son2">3500.88 TCB</div>
              </li>
              <li>
                <div class="son1">成交数量</div>
                <div class="son2">买入XWG 2000</div>
              </li>
              <li>
                <div class="son1">成交金额</div>
                <div class="son2">2000 TCB</div>
              </li>
              <li>
                <div class="son1">交易时间</div>
                <div class="son2">2019-12-28 14 : 01</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="hideContent" v-show="withdraShow">
      <div class="noticTop" @click="goNews4()">
        <span class="span1">消息 > 全部消息 > xxx提现消息</span>
      </div>
      <div class="noticCenter">
        <div class="tranFailed tran">
          <div class="div1">
            <img src="@/assets/images/sb.png" class="img">
            <p class="p1">订单失败！ 交易失败！</p>
          </div>
          <div class="div2">
            <ul>
              <li>
                <div class="son1">委托标号</div>
                <div class="son2">WT2019112815654889</div>
              </li>
              <li>
                <div class="son1">委托数量</div>
                <div class="son2">买入XWG 3500.88</div>
              </li>
              <li>
                <div class="son1">委托金额</div>
                <div  class="son2">3500.88 TCB</div>
              </li>
              <li>
                <div class="son1">成交数量</div>
                <div class="son2">买入XWG 2000</div>
              </li>
              <li>
                <div class="son1">成交金额</div>
                <div class="son2">2000 TCB</div>
              </li>
              <li>
                <div class="son1">交易时间</div>
                <div class="son2">2019-12-28 14 : 01</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
const ERR_OK = 0;
export default {
  components: {
  },
  data() {
    return {
      activeName: 'first',
      currentPage: 1,
      pageSize: 10,
      items: [],
      isShow: true,
      systemShow: false,
      activityShow: false,
      transactionShow: false,
      withdraShow: false,
    };
  },
  created() {
    this.TableDataShow1();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    TableDataShow1() {
      this.$http.get('/api/ALLMess').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.items = response.data;
        }
      });
    },
    SizeChange1(size) {
      this.pageSize = size;
      this.TableDataShow1();
      console.log(`每页 ${size} 条`);
    },
    CurrentChange1(page) {
      this.currentPage = page;
      this.TableDataShow1();
    },
    goNotic(id, type) {
      // this.isShow = false;
      // this.noShow = true;
      // this.systemShow = true;
      // this.activityShow = true;
      // this.transactionShow = true;
      // this.withdraShow = true;
      console.log(id);
      console.log(type);
      if (type === '【系统】') {
        this.isShow = false;
        this.systemShow = true;
      } else if (type === '【活动】') {
        this.isShow = false;
        this.activityShow = true;
      } else if (type === '【交易】') {
        this.isShow = false;
        this.transactionShow = true;
      } else if (type === '【提现】') {
        this.isShow = false;
        this.withdraShow = true;
      }
    },
    goNews1() {
      this.isShow = true;
      this.systemShow = false;
    },
    goNews2() {
      this.isShow = true;
      this.activityShow = false;
    },
    goNews3() {
      this.isShow = true;
      this.transactionShow = false;
    },
    goNews4() {
      this.isShow = true;
      this.withdraShow = false;
    },
  },
};
</script>

<style scoped>
.link5{
  height: 920px;/*no*/
  background: #fff;
}
.link5 .news{
  width: 100%;
  height: 335px;
  background: #fff;
  margin-top: 20px;
}
.link5 .news .tabsBox{
  padding: 15px 30px;/*no*/
}
.link5 .news .tabsBox .block{
  margin: 50px 0;
  text-align: right;
}
.link5 .news .Content{ padding: 0; }
.link5 .news .Content .msgList{
  height: 55px;/*no*/
  line-height: 55px;/*no*/
  margin: 0 auto 10px;/*no*/
  border-bottom: 1px dotted #ccc;/*no*/
}
.link5 .news .Content .msgList .text{
  display: inline-block;
  float: left;
  position: relative;
  width: 80%;
  font-size: 14px;/*no*/
  color: #5f5f5f;
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
}
.link5 .news .Content .msgList .text .Img{
  position: relative;
  top: -2px;/*no*/
  margin-right: 30px;
  /* vertical-align: middle; */
}
.link5 .news .Content .msgList .time{
  display: inline-block;
  float: right;
  font-size: 14px;/*no*/
  color: #5f5f5f;
}

.link5 .news .title{
  height: 55px;
  background: #e3e3e3;
  line-height: 55px;
}
.link5 .news .title .span1{
  margin-left: 15px;
}
.hideContent{
  background: #fff;
  position: relative;
}
.hideContent .noticTop{
  position: relative;
  height: 50px;/*no*/
  line-height: 50px;/*no*/
  font-size: 14px;/*no*/
  padding-left: 15px;/*no*/
  background: #eee;
}
.hideContent .noticTop .span1{cursor: pointer;}
.noticCenter .oneDiv{
  height: 135px;
  margin: 10px 30px;
  text-align: center;
  border-bottom: 1px dotted #dfdfdf;
}
.noticCenter .oneDiv h3{
  font-size: 30px;
  margin: 50px auto 20px;
}
.noticCenter .oneDiv p {font-size: 14px;}
.noticCenter .twoDiv{padding:30px 100px 90px;}
.noticCenter .twoDiv .item{ line-height: 30px; margin-bottom: 45px; }
.noticCenter .twoDiv .div4_1{margin-bottom: 35px;}

.noticCenter .tran .div1{
  height: 220px;/*no*/
  margin:0 30px;/*no*/
  border-bottom: 1px dotted #d2d2d2;/*no*/
  text-align: center;
}
.noticCenter .tran .div1 .img{margin-top: 55px;/*no*/}
.noticCenter .tran .div1 .p1{margin:20px 0 0px;/*no*/ font-size: 28px;/*no*/}
.noticCenter .tran .div2{}
.noticCenter .tran .div2 ul li{
  list-style: none;
  height: 60px;/*no*/
  line-height: 60px;/*no*/
}
.noticCenter .tran .div2 ul {
  width: 70%;
  margin: 40px auto 0;/*no*/
}
.noticCenter .tran .div2 ul li .son1{
  display: inline-block;
  float: left;
}
.noticCenter .tran .div2 ul li .son2{
  display: inline-block;
  float: right;
}
</style>
