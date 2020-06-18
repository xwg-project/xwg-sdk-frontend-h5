<template>
  <div class="page1">
    <div class="title">实名认证</div>
    <div class="myInfo">
      <div class="InfoCenter">
        <div class="nickname">
          <el-form
            :model="ruleForm"
             status-icon
             :rules="rules"
             ref="ruleForm"
             class="demo-ruleForm"
          >
            <el-form-item prop="name">
              <label for="name" class="el-form-item__label">
               姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名
              </label>
              <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="nickname">
           <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
           >
            <el-form-item prop="IdCard">
              <label for="IdCard" class="el-form-item__label">
                身&nbsp;&nbsp;份&nbsp;&nbsp;证
              </label>
              <el-input type="text" v-model="ruleForm.IdCard" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="Avatar">
          <div class="myAvat">证件照片</div>
          <el-upload
            ref="upload"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="fileList"
            list-type="picture"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :limit="1"
          >
          <!-- :limit="1" -->
          <!-- :on-exceed="handleExceed" -->
            <div slot="tip" class="el-upload__tip">支持JPG/JPEG/GIF/PNG图片格式，文件小于1M</div>
            <br>
            <el-button size="small">点击上传</el-button>
          </el-upload>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="fileList2"
            list-type="picture"
            :on-preview="handlePreview2"
            :on-remove="handleRemove2"
            style="margin-left: 80px;"
            :limit="1"
          >
          <!-- :limit="1" -->
          <!-- :on-exceed="handleExceed2" -->
            <div slot="tip" class="el-upload__tip">支持JPG/JPEG/GIF/PNG图片格式，文件小于1M</div>
            <br>
            <el-button size="small">点击上传</el-button>
          </el-upload>
        </div>
        <div class="bottm">
          <el-form
            status-icon
            ref="ruleForm"
            class="demo-ruleForm"
          >
            <el-form-item class="item2">
              <el-button class="btn1">确定</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Page1',
  data() {
    const validateName = (rule, value, callback) => {
      const nameReg = /^([a-zA-Z0-9\u4e00-\u9fa5]{1,10})$/;
      const Name = nameReg.test(value);
      if (value === '') {
        callback(new Error('真实姓名不能为空!'));
      } else if (!Name) {
        callback(new Error('您的真实姓名格式错误,请输入英文或汉字!'));
      } else {
        callback();
      }
    };
    const validateIdCard = (rule, value, callback) => {
      const value2 = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
      const card = value2.test(value);
      if (value === '') {
        callback(new Error('身份证号不能为空！'));
      } else if (!card) {
        callback(new Error('证件号格式错误！'));
      } else {
        callback();
      }
    };
    return {
      // form: {
      //   name: '',
      // },
      ruleForm: {
        name: '',
        IdCard: '',
      },
      rules: {
        name: [
          {
            validator: validateName,
            trigger: 'blur',
          },
        ],
        IdCard: [
          {
            validator: validateIdCard,
            trigger: 'blur',
          },
        ],
      },
      fileList: [
        // {
        //   name: 'cardId1.png',
        //   url: require('@/assets/images/id/cardId1.png'),
        // },
      ],
      fileList2: [
        // {
        //   name: 'cardId1.png',
        //   url: require('@/assets/images/id/cardId2.png'),
        // },
        //
      ],
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleRemove2(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview2(file) {
      console.log(file);
    },
  },
};
</script>
<style scoped>
  .page1{ margin-left: 10px; /*no*/}
  .page1 .title{
    background: #eee;
    height: 65px;/*no*/
    line-height: 65px;/*no*/
    padding-left: 40px;/*no*/
    font-size: 16px;/*no*/
  }
  .page1 .myInfo{
    background: #fff;
    height: 840px;/*no*/
  }
  .page1 .myInfo .InfoCenter{
    padding: 25px 40px 50px;/*no*/
  }
  .InfoCenter .nickname .el-input{
   width: 45%;
  }
  .InfoCenter .nickname >>> .el-form .el-form-item__error {
    position: absolute;
    left: 80px;/*no*/
  }
  .InfoCenter .nickname .el-form-item .el-form-item__content{
    margin-left: 0;
  }
 .myInfo .InfoCenter .el-form-item__label{
    width: 80px;/*no*/
    text-align: center;
  }
  .InfoCenter .Avatar{
    width: 100%;
    height: 122px;/*no*/
    margin-bottom: 25px;/*no*/
  }
  .Avatar .upload-demo >>> .el-upload-list--picture .el-upload-list__item{
    position: absolute;
    top: 0;
    width: 350px;/*no*/
    height: 200px;/*no*/
  }
  .Avatar .upload-demo >>> .el-upload-list--picture .el-upload-list__item-thumbnail {
    width: 320px;/*no*/
    height: 180px;/*no*/
    float: left;
    position: relative;
    z-index: 1;
    margin-left: -80px;/*no*/
    margin-top: 0;
  }
  .Avatar .upload-demo >>> .el-upload-list--picture .el-upload-list__item {margin-top: 0;}
  .Avatar .upload-demo .el-button--small,
  .Avatar .upload-demo .el-button--small.is-round {
    width: 112px;/*no*/
    height: 40px;/*no*/
    padding: 9px 15px;/*no*/
    color: #28c1cc;
    border: 1px solid #28c1cc;/*no*/
  }
  .InfoCenter .Avatar .myAvat{
    width: 68px;/*no*/
    padding-right: 12px;/*no*/
    height: 122px;/*no*/
    margin-top: 15px;/*no*/
    float: left;
    display: inline-block;
    text-align: center;
    font-size: 14px;/*no*/
    color: #4a4a4a;
  }
  .InfoCenter .Avatar .upload-demo{
    width: 450px;/*no*/
    height: 230px;/*no*/
    position: relative;
    float: left;
  }
  .upload-demo .el-upload-list{
    float: left;
    width: 20%;
  }
  .upload-demo .el-upload-list--picture .el-upload-list__item{
    padding: 0px 10px 10px 110px;/*no*/
    width: 30%;
    margin-top: 0;
  }
  .Avatar .upload-demo >>> .el-upload {
    float: right;
    position: relative;
    margin-top: 30px;/*no*/
    right: -45px;/*no*/
  }
  .Avatar .upload-demo >>> .el-upload__tip {
    font-size: 12px;/*no*/
    color: #606266;
    margin-top: 7px;/*no*/
    position: relative;
    left: 85%;
    width: 260px;/*no*/
  }
  .Avatar .upload-demo >>> .el-upload-list {
    position: relative;
    left: 0;
    margin-top: -15px;/*no*/
    width: 350px;/*no*/
    height: 200px;/*no*/
    background: url('~@/assets/images/id/cardId1.png') no-repeat;
    background-size: 100% 100%;
  }
  .InfoCenter .personalNote{}
  .InfoCenter .personalNote .el-textarea{ width: 75%; }
  .InfoCenter .personalNote .area1 >>> .el-textarea__inner{
    min-height: 100px !important;
  }
  .InfoCenter .birthday {
    width: 100%;
    height: 40px;/*no*/
    margin-bottom: 25px;/*no*/
  }
  .InfoCenter .birthday .birthTxt{
    display: inline-block;
    float: left;
    width: 70px;/*no*/
    height: 40px;/*no*/
    line-height: 40px;/*no*/
    padding-right: 12px;/*no*/
    color: #4a4a4a;
    font-size: 14px;/*no*/
  }
  .InfoCenter .birthday .select-box{
    display: inline-block;
    float: left;
  }
  .InfoCenter .birthday .select-box .el-select{ margin-right: 10px;/*no*/ }
  .InfoCenter .bottm .el-input{ width: 40%; }
  .InfoCenter .bottm .item1 >>> .el-form-item__error{ position: absolute; left: 26%; }
  .InfoCenter .bottm .item2 .btn1{
     width: 145px;/*no*/
     height: 50px;/*no*/
     cursor: pointer;
     background: #fdbe12;
     border: 1px solid #fdbe12;/*no*/
     color: #fff;
     margin-left: 80px;/*no*/
   }
  .loginAccount{
    height: 40px;/*no*/
    margin-bottom: 20px;/*no*/
    color: #4a4a4a;
  }
  .loginAccount .accLeft{
    display: inline-block;
    float: left;
    vertical-align: middle;
    height: 22px;/*no*/
    margin: 9px 0;/*no*/
    font-size: 14px;/*no*/
  }
  .loginAccount .accRight{
    display: inline-block;
    float: left;
    vertical-align: middle;
    line-height: 22px;/*no*/
    height: 22px;/*no*/
    margin: 9px 0;/*no*/
  }

</style>
