<template>
  <div class="page3">
    <div class="myTools">账户安全</div>
    <div class="ToolsList">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="账号密码" name="first">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
          >
            <el-form-item prop="oldPass" class="iten">
              <label for="oldPass" class="el-form-item__label">
                旧&nbsp;&nbsp;密&nbsp;&nbsp;码
              </label>
              <el-input type="password" v-model="ruleForm.oldPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="pass" class="iten">
              <label for="pass" class="el-form-item__label">
                新&nbsp;&nbsp;密&nbsp;&nbsp;码
              </label>
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass" class="iten">
              <label for="checkPass" class="el-form-item__label">
               确认密码
              </label>
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item class="iten">
              <el-button class="btn1" @click="submitForm('ruleForm')">修改</el-button>
            </el-form-item>
          </el-form>
          <!-- 路由传参 -->
          <!-- <div>{{this.$route.params.Id}}</div> -->
        </el-tab-pane>
        <el-tab-pane label="支付密码" name="second" class="two">
          <div class="box" v-show="isShow">
            <div class="title">
              你已设置支付密码，<span class="modify" @click="modify()">去修改</span>
            </div>
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              class="demo-ruleForm"
            >
              <el-form-item prop="oldPass" class="iten">
                <label for="oldPass" class="el-form-item__label">
                  旧&nbsp;&nbsp;密&nbsp;&nbsp;码
                </label>
                <el-input type="password" v-model="ruleForm.oldPass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item prop="pass" class="iten">
                <label for="pass" class="el-form-item__label">
                  新&nbsp;&nbsp;密&nbsp;&nbsp;码
                </label>
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item prop="checkPass" class="iten">
                <label for="checkPass" class="el-form-item__label">
                 确认密码
                </label>
                <el-input
                  type="password"
                  v-model="ruleForm.checkPass"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item class="iten">
                <el-button class="btn1" @click="submitForm('ruleForm')">修改</el-button>
              </el-form-item>
            </el-form>
          </div>
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
            v-show="isHide"
          >
            <el-form-item prop="pass" class="iten">
              <label for="pass" class="el-form-item__label">
                新&nbsp;&nbsp;密&nbsp;&nbsp;码
              </label>
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass" class="iten">
              <label for="checkPass" class="el-form-item__label">
               确认密码
              </label>
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item class="iten">
              <el-button class="btn1" @click="setUp">设置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Page3',
  data() {
    const validatePass1 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入旧密码'));
      } else {
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    const validatePass3 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      isShow: true,
      isHide: false,
      activeName: 'first',
      ruleForm: {
        oldPass: '',
        pass: '',
        checkPass: '',
      },
      rules: {
        oldPass: [
          { validator: validatePass1, trigger: 'blur' },
        ],
        pass: [
          { validator: validatePass2, trigger: 'blur' },
        ],
        checkPass: [
          { validator: validatePass3, trigger: 'blur' },
        ],
      },
    };
  },
  created() {
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    modify() {
      this.isShow = false;
      this.isHide = true;
    },
    setUp() {
      this.isShow = true;
      this.isHide = false;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
};
</script>
<style scoped>
  .page3{
    height: 1000px;/*no*/
    background: #fff;
  }
  .page3 .myTools{
    background: #eee;
    height: 65px;/*no*/
    line-height: 65px;/*no*/
    padding-left: 40px;/*no*/
    font-size: 16px;/*no*/
  }
  .page3 .ToolsList{
    padding: 0 30px;/*no*/
    height: 935px;/*no*/
  }
  .ToolsList .two .title{
    height: 40px;/*no*/
    line-height: 40px;/*no*/
    margin-bottom: 30px;/*no*/
    font-size: 16px;/*no*/
  }
  .ToolsList .two .title .modify{
    color: #28c1cc;
    border-bottom: 1px solid #28c1cc;/*no*/
    cursor: pointer;
  }
  .ToolsList >>> .el-tabs--card .el-tabs__header {
    border-bottom: 1px solid #28c1cc;/*no*/
    margin: 30px 0;/*no*/
  }
  .ToolsList >>> .el-form .el-input{width: 50%;}
  .ToolsList .el-form .iten{margin-bottom: 30px;/*no*/}
  .ToolsList .el-form .iten .el-form-item__label{
    width: 80px;/*no*/
    text-align: center;
  }
  .ToolsList >>> .el-form .iten .el-form-item__error {
    position: absolute;
    left: 80px;/*no*/
  }
  .ToolsList .el-form .iten .btn1{
    width: 146px;/*no*/
    height: 60px;/*no*/
    margin-left: 80px;/*no*/
    font-size: 22px;/*no*/
    background-color: #fdba12;
    color: #fff;
    border-style: none;
  }

  .page3 .ToolsList .fenye{
    margin-top: 5px;/*no*/
    text-align: center;
  }
  .ToolWrap .CardBox{
    width: 22%;
    float: left;
    margin: 0 1.5% 30px;/*no*/
  }
  .ToolWrap .CardBox >>> .el-card{
    border-radius: 10px;/*no*/
    border-bottom: 5px solid #e1e1e1;/*no*/
  }
  .ToolWrap .CardBox >>> .el-card .el-card__body{
    text-align: center;
  }
  .ToolWrap .CardBox >>> .el-card .el-card__body .oDiv{ background: #f7f7f7; }
  .ToolWrap .CardBox .oDiv .txt1{ padding: 15px 0;/*no*/ }
  .ToolWrap .CardBox .oDiv .txt2{ padding: 12px 0;/*no*/ }
  .ToolWrap .CardBox .oDiv .image{ border: 1px solid #fff;/*no*/ }
  .ToolWrap .CardBox .bottom {
    width: 100%;
    height: 45px;/*no*/
  }
  .ToolWrap .CardBox .bottom .chaozuo {
    display: inline-block;
    float: left;
    height: 45px;/*no*/
    line-height: 45px;/*no*/
  }
  .ToolWrap .CardBox .bottom .money {
    display: inline-block;
    float: left;
    height: 45px;/*no*/
    line-height: 45px;/*no*/
    color: #ee3a42;
  }
  .ToolWrap .CardBox .bottom .chaozuo .btn1{
    background: #26c1cd;
    border: 1px solid #26c1cd;/*no*/
    color: #fff;
    padding: 5px 8px;/*no*/
    margin: 0 10px 0 10px;/*no*/
  }
</style>
