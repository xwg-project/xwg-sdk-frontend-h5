<template>
  <div class="container1">
    <home-nav></home-nav>
    <home-header></home-header>
    <div class="login">
      <div class="login_top"><img src="@/assets/images/banner3.jpg" alt=""></div>
      <div class="login_center">
        <p class="p1">
          <span class="span1">用户登录</span>
          <span class="noacc">
            没有账号，<router-link :to="{path: '/SignUp'}">马上注册</router-link>
          </span>
        </p>
      </div>
      <div class="login_bottom" v-show="IsShow">
        <div class="fombox">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
          >
            <el-form-item prop="phone" class="iten">
              <label for="phone" class="el-form-item__label">
                手&nbsp;&nbsp;机&nbsp;&nbsp;号
              </label>
              <el-input v-model="ruleForm.phone" placeholder="请输入手机号" class="myInput"></el-input>
            </el-form-item>
            <el-form-item prop="pass" class="iten">
              <label for="pass" class="el-form-item__label">
                密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码
              </label>
              <el-input
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
                placeholder="请输入密码"
              >
              </el-input>
            </el-form-item>
          </el-form>
          <el-row class="gird1"><el-button class="btn1">登录</el-button></el-row>
          <el-row class="girdrow">
            <div class="girdrow_1">
              <span class="span1" @click="toCodeLogin()">验证码登录</span>
              <span class="span2" @click="forgetPsd()">忘记密码</span>
            </div>
          </el-row>
        </div>
      </div>
      <div class="login_end" v-show="IsHide">
        <div class="fombox">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
          >
            <el-form-item prop="phone1" class="iten">
              <label for="phone1" class="el-form-item__label">
                手&nbsp;&nbsp;机&nbsp;&nbsp;号
              </label>
              <el-input
                v-model="ruleForm.phone1"
                class="input1"
                placeholder="请输入手机号"
              ></el-input>
            </el-form-item>
            <el-form-item prop="code" class="iten">
              <label for="code" class="el-form-item__label">
                验&nbsp;&nbsp;证&nbsp;&nbsp;码
              </label>
              <el-input v-model="ruleForm.code" class="input2" placeholder="请输入验证码"></el-input>
              <el-button class="sendBtn" @click="getCode" v-show="myShow">
                发送验证码
              </el-button>
              <el-button class="sendBtn" v-show="!myShow" disabled="disabled">
                {{count}}秒后重发
              </el-button>
            </el-form-item>
          </el-form>
          <el-row class="gird1"><el-button class="btn1">登录</el-button></el-row>
          <el-row class="girdrow">
            <div class="girdrow_1">
              <span class="span1" @click="toPsdLogin()">密码登录</span>
              <span class="span2" @click="forgetPsd()">忘记密码</span>
            </div>
          </el-row>
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
  name: 'Login',
  data() {
    const MyMobilePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('手机号不能为空！'));
      } else {
        if (value !== '') {
          const reg = /^1[3456789]\d{9}$/;
          if (!reg.test(value)) {
            callback(new Error('请输入有效的手机号码！'));
          }
        }
        callback();
      }
    };
    const validatePhone1 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('手机号不能为空！'));
      } else {
        if (value !== '') {
          const reg = /^1[3456789]\d{9}$/;
          if (!reg.test(value)) {
            callback(new Error('请输入有效的手机号码！'));
          }
        }
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空!'));
      } else if (value.length < 6) {
        callback(new Error('密码长度最小6位!'));
      } else {
        callback();
      }
    };
    const checkCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('验证码不能为空！'));
      } else if (value.length > 6 || value.length < 6) {
        callback(new Error('昵称长度为6!'));
      } else {
        callback();
      }
    };
    return {
      userId: '0665',
      IsShow: true,
      IsHide: false,
      myShow: true,
      count: '',
      timer: null,
      ruleForm: {
        phone: '',
        phone1: '',
        code: '',
        pass: '',
      },
      rules: {
        phone: [
          { validator: MyMobilePhone, trigger: 'blur' },
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' },
        ],
        phone1: [
          { validator: validatePhone1, trigger: 'blur' },
        ],
        code: [
          { validator: checkCode, trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    toCodeLogin() {
      this.IsShow = false;
      this.IsHide = true;
    },
    toPsdLogin() {
      this.IsShow = true;
      this.IsHide = false;
    },
    forgetPsd() {
      this.$router.push({ name: 'Page3', params: { Id: this.userId } });
    },
    getCode() {
      const num = 60;
      if (!this.timer) {
        this.count = num;
        this.myShow = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= num) {
            this.count--;
          } else {
            this.myShow = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
  },
};
</script>

<style scoped>
  .login{
    /* width: 100%; */
    width: 80%;
    max-width: 1000px;/*no*/
    /* width: 80%; */
    margin:0 auto;
    background: #fff;
  }
  .login_top{ text-align: center; }
  .login_top img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  .login_center{
    width: 100%;
    max-width: 1000px;/*no*/
    margin: 20px auto;/*no*/
    text-align: center;
  }
  .login_center .p1{
    height: 45px;/*no*/
    line-height: 45px;/*no*/
    text-align: center;/*no*/
    border-bottom:1px dotted #ccc;/*no*/
    margin-bottom: 40px;/*no*/
    margin: 0 15px;/*no*/
  }
  .login_center .p1 .span1{
    font-size: 24px;/*no*/
    margin-left: 108px;/*no*/
  }
  .login_center .p1 .noacc{
    float: right;
    font-size: 12px;/*no*/
  }
  .login_center .p1 .noacc a{ text-decoration: none; color: #09c; }
  .login_bottom,.login_end{
    width: 100%;
    max-width: 1000px;/*no*/
    height: 400px;/*no*/
    margin: 40px auto;/*no*/
  }
  .login_bottom .fombox, .login_end .fombox{
    width: 400px;/*no*/
    height: 320px;/*no*/
    margin: 0 auto;
  }
  .gird1{ text-align: right; }
  .gird1 .btn1{
    width: 80%;
    height: 65px;/*no*/
    background: #28c1cc;
    color: #fff;
    font-size: 18px;/*no*/
    border-radius: 8px;/*no*/
  }
  .girdrow{
    height: 50px;/*no*/
    line-height: 50px;/*no*/
    text-align: right;
    margin: 15px auto;/*no*/
  }
  .girdrow .girdrow_1{
    width: 80%;
    float: right;
    text-align: center;
    margin:0 auto;
    font-size: 16px;/*no*/
  }
  .girdrow .span1{ color: #28c1cc; margin-right: 10px;}
  .girdrow .span2{ color: #28c1cc; margin-left: 10px;}
  .girdrow .span1,
  .girdrow .span2{ cursor: pointer; text-decoration: underline; }
  .login_bottom >>> .el-form .el-input{width: 80%;/*no*/}
  .login_bottom .el-form .iten{margin-bottom: 25px;/*no*/}
  .login_bottom >>> .el-form .el-form-item__content {
    line-height: 40px;/*no*/
    position: relative;
    font-size: 14px;/*no*/
  }
  .login_bottom  >>> .el-form .iten .el-form-item__label{
    width: 80px;/*no*/
    text-align: center;
    font-size: 14px;/*no*/
    color: #606266;
    line-height: 40px;/*no*/
    padding: 0 12px 0 0;/*no*/
  }
  .login_bottom  >>> .el-form .el-form-item .el-input__inner {
    border-radius: 4px;/*no*/
    border: 1px solid #DCDFE6;/*no*/
    height: 40px;/*no*/
    /* line-height: 40px; */
    line-height: 1px;/*no*/
    outline: 0;
    padding: 0 15px;/*no*/
    width: 100%;
    /*此处为safair,css样式*/
    /* [;height: 16px;]
    [;padding: 12px 15px;]
    [;vertical-align: middle;] */
  }
  .login_bottom >>> .el-form .iten .el-form-item__error {
    position: absolute;
    left: 80px;/*no*/
  }
  .login_bottom >>> .el-input__suffix{ right: 5px;/*no*/}
  .login_bottom >>> .el-input__suffix .el-input__icon {
    height: 100%;
    width: 25px;/*no*/
    line-height: 40px;/*no*/
  }
  .login_end >>> .el-form .input1{width: 80%;}
  .login_end >>> .el-form .input2{width: 40%;}
  .login_end .el-form .iten{margin-bottom: 25px;/*no*/}
  .login_end >>> .el-form .iten .el-form-item__error {
    position: absolute;
    left: 80px;/*no*/
  }
  .login_end >>> .el-form .el-form-item__content {
    line-height: 40px;/*no*/
    position: relative;
    font-size: 14px;/*no*/
  }
  .login_end  >>> .el-form .iten .el-form-item__label{
    width: 80px;/*no*/
    text-align: center;
    font-size: 14px;/*no*/
    color: #606266;
    line-height: 40px;/*no*/
    padding: 0 12px 0 0;/*no*/
  }
  .login_end  >>> .el-form .el-form-item .el-input__inner {
    border-radius: 4px;/*no*/
    border: 1px solid #DCDFE6;/*no*/
    height: 40px;/*no*/
    /* line-height: 40px; */
    line-height: 1px;/*no*/
    outline: 0;
    padding: 0 15px;/*no*/
    width: 100%;
  }
  .login_end >>> .el-input__suffix{ right: 5px;/*no*/}
  .login_end >>> .el-input__suffix .el-input__icon {
    height: 100%;
    width: 25px;/*no*/
    line-height: 40px;/*no*/
  }
  .login_end .iten .sendBtn{
    width: 112px;/*no*/
    float: right;
    color: #28c1cc;
    border:1px solid #28c1cc;/*no*/
  }
  .login_end .el-button{
    border: 1px solid #DCDFE6;/*no*/
    padding: 12px 20px;/*no*/
    border-radius: 4px;/*no*/
  }
</style>
