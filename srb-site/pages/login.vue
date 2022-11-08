<template>
  <!--登录-->
  <div class="wrap">
    <div class="tdbModule loginPage">
      <div class="registerTitle">用户登录</div>
      <div class="registerCont">
        <ul>
          <li>
            <span class="dis"></span>
            <input v-model="userInfo.userType" type="radio" value="1" />
            投资人
            <input v-model="userInfo.userType" type="radio" value="2" />
            借款人
          </li>
          <li>
            <span class="dis">手机号：</span>
            <input class="input" v-model="userInfo.mobile" />
          </li>

          <li>
            <span class="dis">密码：</span>
            <input class="input" v-model="userInfo.password" type="password" />
          </li>
          <li class="btn">
            <button @click="login()" :class="{ disabled: !isValid }">
              立即登录
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "~/assets/css/register.css";
import cookie from "js-cookie";

export default {
  data() {
    return {
      userInfo: {
        userType: 1,
      },
      isValid: true, //表单校验是否成功
    };
  },

  methods: {
    //登录 登陆页面有几个action 发送的请求是同步请求还是异步请求
    // 只有一个行为 登陆 使用的是异步请求 请求成功 跳转页面
    //不加$是http的响应报文
    // 加$自动取出报文中data
    // post("/api/core/userInfo/login",this.userInfo) 注意参数传递
    // 发送请求的时候注意参数的传递
    login() {
      this.$axios.$post("/api/core/userInfo/login",this.userInfo).then((response) => {
        this.$message.success("登陆成功");
        cookie.set("userInfo", response.data.userInfoVO);
        window.location.href="/user";
      });
    },
  },
};
</script>
