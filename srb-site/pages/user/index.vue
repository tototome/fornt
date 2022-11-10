<template>
  <div class="personal-main">
    <div class="pmain-profile">
      <div class="pmain-welcome">
        <span class="fr">上次登录时间： 2020-09-11 14:05:07 </span>
      </div>
      <div class="pmain-user">
        <div class="user-head">
          <span class="head-img" title="点击更换头像">
            <span>
              <img
                src="~/assets/images/touxiang.png"
                style="width:88px;height:88px;z-index:0;"
              />
              <i class="headframe" style="z-index:0;"></i>
            </span>
          </span>
        </div>
        <div class="user-info">
          <ul>
            <li>
              用户名<span>{{nickName}}</span>
              <NuxtLink v-if="$parent.userType === 2" to="/user/borrower">
                立即借款
              </NuxtLink>
            </li>
            <li v-if="status===0">
              您还未开通第三方支付账户，请
              <NuxtLink to="/user/bind">立即开通</NuxtLink>
              以确保您的正常使用和资金安全。
            </li>
          </ul>
        </div>
      </div>
      <div class="pmain-money">
        <ul v-if="$parent.userType === 1">
          <li class="none">
            <span>
              <em>账户余额</em>
              <i class="markicon"></i>
            </span>
            <span class="truemoney"><i class="f26 fb">0.00 </i> 元</span>
          </li>
          <li>
            <span>
              <em>冻结金额</em>
              <i class="markicon"></i>
            </span>
            <span class="truemoney"><i class="f26 fb">0.00 </i>元</span>
          </li>
          <li>
            <span>
              <em>累计收益</em>
              <i class="markicon"></i>
            </span>
            <span class="truemoney"><i class="f26 fb c-pink">0.00 </i> 元</span>
          </li>
        </ul>
        <ul>
          <li class="none">
            <span>
              <em>账户余额</em>
              <i class="markicon"></i>
            </span>
            <span class="truemoney"><i class="f26 fb">0.00 </i> 元</span>
          </li>
          <li>
            <span>
              <em>当前借款金额</em>
              <i class="markicon"></i>
            </span>
            <span class="truemoney"><i class="f26 fb">0.00 </i> 元</span>
          </li>
          <li>
            <span>
              <em>累计借款金额</em>
              <i class="markicon"></i>
            </span>
            <span class="truemoney"><i class="f26 fb c-pink">0.00 </i> 元</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import cookie from 'js-cookie'
export default {
data() {
    return {
      //userInfo: null,
      nickName: null,
      status:0
    }
  },

  created () {
    this.showInfo()
  
  },

  methods: {
    //显示用户信息
    showInfo() {
      let userInfo=cookie.get("userInfo");
      console.log("userinfo-------");
      if (userInfo && userInfo !== "undefined" && userInfo!=="null"){
        console.log(JSON.parse(userInfo))
         //this.userInfo = JSON.parse(userInfo);
         this.nickName = JSON.parse(userInfo).nickName;
         this.status=JSON.parse(userInfo).status;
      }
    },
  },

}
</script>
