<template>
  <div class="page1">
    <div class="title">我的资料</div>
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
            <el-form-item prop="userName">
              <label for="userName" class="el-form-item__label">
                用&nbsp;户&nbsp;名
              </label>
              <el-input type="text" v-model="ruleForm.userName" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="loginAccount">
           <div class="accLeft">手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机</div>
           <div class="accRight">15648652568</div>
        </div>
        <div class="AvatarBox">
          <div class="myAvat">头&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;像</div>
          <!-- action="https://jsonplaceholder.typicode.com/posts/" -->
          <el-upload
            class="avatar-uploader"
            action=""
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            :on-change="onchange"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div class="text" slot="tip">
              <div class="el-upload__tip">支持JPG/JPEG/GIF/PNG图片格式，文件小于1M</div>
              <div class="tip_2">
                <el-button size="small">
                点击上传
                </el-button>
              </div>
            </div>
          </el-upload>

          <!-- <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="fileList"
            list-type="picture"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :limit="1"
            :on-exceed="handleExceed"
          >
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            <br>
            <el-button size="small">点击上传</el-button>
          </el-upload> -->
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
    const userNameFun = (rule, value, callback) => {
      // var reg = /^(?![^A-Za-z]+$)(?![^0-9]+$)[0-9A-Za-z_]{4,15}$/;
      const reg = /^[\u4E00-\u9FA5\uF900-\uFA2D|\w]{2,20}$/;
      const oUserName = reg.test(value);
      if (value === '') {
        callback(new Error('用户名不能为空!'));
      } else if (!oUserName) {
        callback(new Error('用户名要求是数字、字母、下划线的组合,长度为4-20个字符!'));
      } else {
        callback();
      }
    };
    return {
      // imageUrl: '',
      imageUrl: require('@/assets/images/shiyongtouxiang.png'),
      ruleForm: {
        userName: '',
      },
      rules: {
        userName: [
          {
            validator: userNameFun,
            trigger: 'blur',
          },
        ],
      },
      fileList: [
        {
          name: 'food.jpeg',
          url: require('@/assets/images/a2.jpg'),
        },
      ],
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
    // reg = /^(?![^A-Za-z]+$)(?![^0-9]+$)[0-9A-Za-z_]{4,15}$/;
    // handleRemove(file, fileList) {
    //   console.log(file, fileList);
    // },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 PNG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    onchange(file) {
      const that = this;
      const event = window.event;
      file = event.target.files[0];
      console.log(file);
      const reader = new FileReader();
      // 转base64
      reader.onload = (e) => {
        // 将图片路径赋值给src
        that.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>
<style scoped>
  .page1{
    /* margin-left: 10px; */
    margin-left: 0.0741rem;
  }
  .page1 .title{
    background: #eee;
    height: 65px;/*no*/
    line-height: 65px;/*no*/
    padding-left: 40px;/*no*/
    font-size: 16px;/*no*/
    /* background: #eee;
    height: 0.4818rem;
    line-height: 0.4818rem;
    padding-left: 0.2965rem;
    font-size: 0.1186rem; */
  }
  .page1 .myInfo{
    background: #fff;
    height: 840px;/*no*/
  }
  .page1 .myInfo .InfoCenter{
    padding: 25px 40px 50px;/*no*/
  }
  .InfoCenter .nickname .el-input{
   width: 40%;/*no*/
  }
 .InfoCenter .nickname >>> .el-form .el-form-item__error {
    position: absolute;
    left: 80px;/*no*/
  }
  .InfoCenter .nickname >>> .el-form-item .el-form-item__content{
    margin-left: 0;
    line-height: 40px;/*no*/
  }
  .InfoCenter .nickname  >>> .el-form-item .el-input__inner {
    border-radius: 4px;/*no*/
    border: 1px solid #DCDFE6;/*no*/
    height: 40px;/*no*/
    line-height: 40px;/*no*/
    outline: 0;
    padding: 0 15px;/*no*/
    width: 100%;
  }
  .myInfo .InfoCenter >>> .el-form-item__label{
    width: 80px;/*no*/
    text-align: center;
    font-size: 14px;/*no*/
    color: #606266;
    line-height: 40px;/*no*/
    padding: 0 12px 0 0;/*no*/
  }
  .InfoCenter .sex .el-select{
    width: 20%;
  }
  .InfoCenter .AvatarBox{
    width: 100%;
    height: 122px;/*no*/
    margin-bottom: 25px;/*no*/
  }
  .InfoCenter .bottm{ margin-top: 70px;/*no*/ }
  .InfoCenter .AvatarBox .myAvat{
    width: 68px;/*no*/
    padding-right: 12px;/*no*/
    height: 122px;/*no*/
    text-align: center;
    float: left;
    display: inline-block;
    font-size: 14px;/*no*/
    color: #4a4a4a;
  }
  .InfoCenter .AvatarBox .upload-demo{
    width: 450px;/*no*/
    height: 122px;/*no*/
    position: relative;
    float: left;
  }
  .upload-demo .el-upload-list{
    float: left;
    width: 20%;
  }
  .upload-demo .el-upload-list--picture .el-upload-list__item{
    padding: 10px 10px 10px 110px;/*no*/
    width: 30%;
  }
  .AvatarBox .upload-demo >>> .el-upload {
    float: right;
    position: relative;
    margin-top: 30px;/*no*/
    right: 40%;
    border: 1px solid red;/*no*/
  }
  .AvatarBox .upload-demo >>> .el-upload__tip {
    font-size: 12px;/*no*/
    color: #606266;
    margin-top: 7px;/*no*/
    position: relative;
    left: 35%;
    width: 260px;/*no*/
  }
  .AvatarBox .upload-demo >>> .el-upload-list {
    width: 30%;
    position: relative;
    left: 0;
    margin-top: -30px;/*no*/
  }
  .InfoCenter .personalNote{}
  .InfoCenter .personalNote .el-textarea{ width: 75%; }
  .InfoCenter .personalNote .area1 >>> .el-textarea__inner{
    min-height: 100px !important;/*no*/
  }
  .InfoCenter .birthday {width: 100%; height: 40px; margin-bottom: 25px;}
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
    width: 68px;/*no*/
    padding-right: 12px;/*no*/
    display: inline-block;
    text-align: center;
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
    font-size: 16px;/*no*/
  }
  /* -----------头像部分--------------------*/
  .AvatarBox >>> .avatar-uploader .el-upload {
    /* background: url('~@/assets/images/touxiang.png') no-repeat center; */
    width: 90px;/*no*/
    height: 90px;/*no*/
    border: 1px dashed #d9d9d9;/*no*/
    border-radius: 6px;/*no*/
    cursor: pointer;
    position: relative;
    overflow: hidden;
    float: left;
  }
  .AvatarBox >>> .avatar-uploader .text{ float: left; margin-left: 20px;/*no*/}
  .AvatarBox >>> .avatar-uploader .text .el-upload__tip{ margin-top: 0;}
  .AvatarBox >>> .avatar-uploader .text .tip_2{margin-top: 30px;/*no*/}
  .AvatarBox >>> .avatar-uploader .text .tip_2 .el-button--small{
    width: 112px;/*no*/
    height: 40px;/*no*/
    padding: 9px 15px;/*no*/
    color: #28c1cc;
    border: 1px solid #28c1cc;/*no*/
  }
  .AvatarBox >>> .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .AvatarBox >>> .avatar-uploader-icon {
    font-size: 28px;/*no*/
    color: #8c939d;
    width: 178px;/*no*/
    height: 178px;/*no*/
    line-height: 178px;/*no*/
    text-align: center;
  }
  .AvatarBox >>> .el-icon-plus:before {
    content: "";
  }
  .AvatarBox >>> .avatar {
    /* width: 108px;
    height: 108px; */
    width: 90px;/*no*/
    height: 90px;/*no*/

    text-align: center;
    border-radius: 50%;
    display: block;
  }
  .AvatarBox .avatar-uploader-icon {
    font-size: 28px;/*no*/
    color: #8c939d;
    width: 125px;/*no*/
    height: 125px;/*no*/
    line-height: 125px;/*no*/
    text-align: center;
  }
</style>
