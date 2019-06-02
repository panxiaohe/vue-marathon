<template>
    <div class="login">
      <div class="wrap">
        <h2>登录</h2>

        <div class="clearfix">
          <div class="login-img"></div>

          <form class="login-form">
            <div class="title-bar"></div>
            <div class="form-item">
              <label for="">用户名：</label>
              <input type="text" name="userName" placeholder="请输入用户名">
            </div>

            <div class="form-item">
              <label for="">密码：</label>
              <input type="password" name="password" placeholder="请输入密码">
            </div>

            <div class="form-item">
              <label for="">验证码：</label>
              <input type="text" name="captcha" placeholder="请输入验证码">
              <span><img src="" alt="验证码" class="captcha"></span>
              <a href="javascript:;">换一换</a>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
  import '../../assets/css/pages/login.scss';

  export default{
      data(){
          return{

          }
      }
  }
</script>
