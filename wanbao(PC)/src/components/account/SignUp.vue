<template>
  <div class="container2">
    <home-nav></home-nav>
    <home-header></home-header>
    <div class="sign">
      <div class="sign_top"><img src="@/assets/images/banner3.jpg" alt=""></div>
      <div class="sign_center">
        <!-- <p>新用户注册</p> -->
        <p class="p1">
          <span class="span1">新用户注册</span>
          <span class="noacc">
            已有账号，<router-link :to="{path: '/Login'}">去登录</router-link>
          </span>
        </p>
      </div>
      <div class="sign_bottom">
        <div class="fombox">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
          >
            <el-form-item class="iten" prop="phones">
              <label for="phones" class="el-form-item__label phones">
                手&nbsp;&nbsp;机&nbsp;&nbsp;号
                <!-- 手机号 -->
              </label>
              <el-input v-model="ruleForm.phones" class="input1" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item class="iten" prop="nickname">
              <label for="nickname" class="el-form-item__label nickname">
                昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称
                <!-- 昵称 -->
              </label>
              <el-input v-model="ruleForm.nickname" class="input1" placeholder="请输入昵称"></el-input>
            </el-form-item>
            <el-form-item class="iten" prop="code">
              <label for="code" class="el-form-item__label code">
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
            <el-form-item class="iten" prop="pass">
              <label for="pass" class="el-form-item__label pass">
                密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码
              </label>
              <el-input
                class="input1"
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item class="iten" prop="pass2">
              <label for="pass2" class="el-form-item__label checkPass">
                确认密码
              </label>
              <el-input
                class="input1"
                type="password"
                v-model="ruleForm.pass2"
                autocomplete="off"
                placeholder="请再次输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item class="iten">
              <el-checkbox-group v-model="form.type" class="agree">
                <el-checkbox :checked="this.checked" label="同意《汇游用户注册协议》" name="type">
                </el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
          <el-row class="gird1"><el-button class="btn1">注册</el-button></el-row>
          <el-row class="girdrow">
            <div class="girdrow_1">
              <span class="span1">密码登录</span>
              <span class="span2">忘记密码</span>
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
  name: 'SignUp',
  data() {
    const checkPhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('手机号不能为空!'));
      } else {
        // callback();
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        console.log(reg.test(value));
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error('请输入正确的手机号!'));
        }
      }
    };
    const checkNickName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('昵称不能为空!'));
      } else if (value.length > 12) {
        callback(new Error('昵称长度不能超过12位!'));
      } else {
        callback();
      }
      // else {
      //   if (value !== '') {
      //     // 匹配2-8个中文4-16个英文字符
      //     // const reg = /(^[\u4e00-\u9fa5]{2,8}$)|(^[a-zA-Z]{4,16}$)/;
      //     // 长度限制16个字符(8个中文)，中文字母数字或者下划线组合
      //     // const reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
      //     if (!reg.test(value)) {
      //       callback(new Error('请输入2-8个中文或者4-16个英文的有效昵称！'));
      //     }
      //   }
      //   callback();
      // }
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
    const checkPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空！'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    const checkPass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('确认密码不能为空！'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      checked: true,
      myShow: true,
      count: '',
      timer: null,
      form: {
        type: [],
      },
      // type: [],
      ruleForm: {
        phones: '',
        nickname: '',
        code: '',
        name2: '',
        pass: '',
        pass2: '',
      },
      rules: {
        phones: [
          { validator: checkPhone, trigger: 'blur' },
        ],
        nickname: [
          { validator: checkNickName, trigger: 'blur' },
        ],
        code: [
          { validator: checkCode, trigger: 'blur' },
        ],
        pass: [
          { validator: checkPass, trigger: 'blur' },
        ],
        pass2: [
          { validator: checkPass2, trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
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
  .sign{
    width: 80%;
    max-width: 1000px;/*no*/
    height: 870px;/*no*/
    margin:0 auto;
    background: #fff;
  }
  .sign_top{ text-align: center; }
  .sign_top img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  .sign_center{
    width: 100%;
    max-width: 1000px;/*no*/
    margin: 20px auto;/*no*/
    text-align: center;
  }
  .sign_center .p1{
    height: 45px;/*no*/
    line-height: 45px;/*no*/
    text-align: center;
    border-bottom:1px dotted #ccc;/*no*/
    margin-bottom: 40px;/*no*/
    margin: 0 15px;/*no*/
  }
  .sign_center .p1 .span1{
    font-size: 24px;/*no*/
    margin-left: 108px;/*no*/
  }
  .sign_center .p1 .noacc{
    float: right;
    font-size: 12px;/*no*/
  }
  .sign_center .p1 .noacc a{ text-decoration: none; color: #09c; }
  .gird1{ text-align: right; }
  .gird1 .btn1{
    width: 80%;/*no*/
    height: 65px;/*no*/
    background: #28c1cc;
    color: #fff;
    font-size: 18px;/*no*/
    border-radius: 8px;/*no*/
  }
  .sign_bottom{
    width: 100%;
    max-width: 1000px;/*no*/
    height: 500px;/*no*/
    margin: 40px auto;/*no*/
  }
  .sign_bottom .fombox{
    width: 400px;/*no*/
    height: 320px;/*no*/
    margin: 0 auto;
  }
  .sign_bottom >>> .el-form .input1{width: 80%;}
  .sign_bottom >>> .el-form .input2{width: 40%;}
  .sign_bottom .el-form .iten{margin-bottom: 25px;/*no*/}
  .sign_bottom >>> .el-form .iten .el-form-item__error {
    position: absolute;
    left: 80px;/*no*/
  }
  .sign_bottom >>> .el-form .el-form-item__content {
    line-height: 40px;/*no*/
    position: relative;
    font-size: 14px;/*no*/
  }
  .sign_bottom  >>> .el-form .iten .el-form-item__label{
    width: 80px;/*no*/
    text-align: center;
    font-size: 14px;/*no*/
    color: #606266;
    line-height: 40px;/*no*/
    padding: 0 12px 0 0;/*no*/
  }
  .sign_bottom  >>> .el-form .el-form-item .el-input__inner {
    border-radius: 4px;/*no*/
    border: 1px solid #DCDFE6;/*no*/
    height: 40px;/*no*/
    /* line-height: 40px; */
    line-height: 1px;
    outline: 0;
    padding: 0 15px;/*no*/
    width: 100%;
  }
  .sign_bottom >>> .el-input__suffix{ right: 5px;/*no*/}
  .sign_bottom >>> .el-input__suffix .el-input__icon {
    height: 100%;
    width: 25px;/*no*/
    line-height: 40px;/*no*/
  }
  .sign_bottom .iten .sendBtn{
    width: 112px;/*no*/
    float: right;
    color: #28c1cc;
    border:1px solid #28c1cc;/*no*/
  }
  .sign_bottom .el-button{
    border: 1px solid #DCDFE6;/*no*/
    padding: 12px 20px;/*no*/
    border-radius: 4px;/*no*/
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
  .girdrow .span1{ color: #28c1cc; margin-right: 10px;/*no*/}
  .girdrow .span2{ color: #28c1cc; margin-left: 10px;/*no*/}
  .girdrow .span1,
  .girdrow .span2{ cursor: pointer; text-decoration: underline; }
  .sign_bottom .el-form .iten .agree{
    margin-left: 80px;/*no*/
  }
  .sign_bottom .el-form .iten .checkPass{
    letter-spacing: 2px;/*no*/
    text-align: right;
  }
  .sign_bottom .iten .el-checkbox {color: #606266;}
  .sign_bottom .iten >>> .el-checkbox__label{
    padding-left: 10px;/*no*/
    line-height: 19px;/*no*/
    font-size: 14px;/*no*/
  }
  .sign_bottom .iten >>> .el-checkbox__input.is-checked{color:#28c1cc;}
  .sign_bottom .iten >>> .el-checkbox.is-checked .el-checkbox__label{
    color: #28c1cc;
  }
  .sign_bottom .iten >>> .el-checkbox__input.is-checked .el-checkbox__inner,
  .sign_bottom .iten >>> .el-checkbox__input.is-indeterminate .el-checkbox__inner{
    background-color:#28c1cc;
    border-color: #28c1cc;
  }
  .sign_bottom .iten >>> .el-checkbox__inner:hover {
    border-color: #28c1cc;
  }
  .sign_bottom .iten >>> .el-checkbox__input.is-focus .el-checkbox__inner{
    border-color: #28c1cc;
  }
  .sign_bottom .iten >>> .el-checkbox__inner {
    border: 1px solid #DCDFE6;/*no*/
    border-radius: 2px;/*no*/
    width: 14px;/*no*/
    height: 14px;/*no*/
  }
  .sign_bottom .iten >>> .el-checkbox__inner::after {
    border: 1px solid #FFF;/*no*/
    border-left: 0;
    border-top: 0;
    height: 7px;/*no*/
    width: 3px;/*no*/
    left: 4px;/*no*/
    position: absolute;
    top: 1px;/*no*/
  }
</style>

