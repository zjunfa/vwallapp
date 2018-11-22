<template>
	<!--<h1>这是登录</h1>-->
<section>
	<div class="userAccountLogin">
		<div class="content-EMUI5">
			<!--页面头部：标题副标题   开始 -->
			<div id="head">
				<div class="head-content" id="headContent">
						<b class="login_logo"></b>
						<div class="title-main center">华为帐号</div>
				</div>
			</div>
			<!--页面头部：标题副标题   结束 -->
			<!--填写帐号 -->
			<div class="line8-EMUI5">
				<div class="dinput-UI5" id="usernameDiv">			
					<input type="text" class="ar-eg" id="username" name="username" maxlength="50" placeholder="手机号/邮件地址 " validator="validator11542552041903">	
				</div>
				<div id="user_msg" class="error-tips-EMUI5 line-EMUI5"></div>
			</div>
			<!--填写密码 -->
			<div class="line8-EMUI5">
				<div class="dinput-UI5" id="passwordDiv">
					<div class="ico-div ico-div-waplogin"><img class="eyeoff" id="passwdEye" src="https://hwid1.vmall.com/CAS/up/idmw_rss_23/css/mobile/standard_rss/images/eyeoff_wap_ui9.png?cas20180928"></div>
					<div class="input-div"><input type="password" oncut="return false;" oncopy="return false" maxlength="32" autocomplete="off" id="password" placeholder="密码" validator="validator21542552041903"></div>
				</div>
				<div id="passwd_msg" class="error-tips-EMUI5 line-EMUI5"></div>
			</div>
			<!--填写验证码 -->
			<div class="line8-EMUI5">
					<div id="picAuthCode" class="verify-td">
					</div>
				<div id="randomCode_msg" class="error-tips-EMUI5 line-EMUI5"></div>
			</div>
			<div class="line-EMUI5 marginTop16 wap_sms_container">
				<div class="left"><router-link  to='/message-login' class="changeLoginType medium" data-type="userAccountLogin" style="visibility: visible;">短信验证码登录</router-link></div>
				<div class="right"><img src="https://hwid1.vmall.com/CAS/up/idmw_rss_23/css/mobile/standard_rss/images/tick-off.png?cas20180928" class="tick wrapLogin-remName" id="remember_name"><span class="wrapLogin-remName">记住帐号</span></div>
			</div>
			<div class="line-EMUI5">	
				<div class="btn-EMUI5 disabled login_btn_50p" id="btnLogin" href="javascript:void(0)">登录</div>
				<span id="msg_login"></span>
			</div>
			<div class="line8-EMUI9 center fontsize_0">
				 <a id="registerLink" class="a-EMUI5 line-EMUI5 display-inline-block fontsize_13 medium" href="https://m.vmall.com/upCallback.html?ifmUrl=https%3A%2F%2Fhwid1.vmall.com%2FCAS%2Fmobile%2Fstandard%2Fregister%2FwapRegister.html%3FreqClientType%3D26%26loginChannel%3D26000002%26countryCode%3Dcn%26loginUrl%3Dhttps%253A%252F%252Fhwid1.vmall.com%252FCAS%252Fmobile%252Fstandard%252FwapLogin.html%26service%3Dhttps%253A%252F%252Fm.vmall.com%252Faccount%252Fcaslogin%253Furl%253D%25252FupCallback.html%25253FifmUrl%25253D%2525252F%26lang%3Dzh-cn%26themeName%3Dred%26bizIfmUrl%3Dhttps%253A%252F%252Fm.vmall.com%252FupCallback.html">注册帐号</a>
				<br>
				<a id="resetPwdLink" href="https://m.vmall.com/upCallback.html?ifmUrl=https%3A%2F%2Fhwid1.vmall.com%2FCAS%2Fmobile%2Fstandard%2FresetPwd%2Fforgetbyid.html%3FreqClientType%3D26%26loginChannel%3D26000002%26countryCode%3Dcn%26loginUrl%3Dhttps%253A%252F%252Fhwid1.vmall.com%252FCAS%252Fmobile%252Fstandard%252FwapLogin.html%26service%3Dhttps%253A%252F%252Fm.vmall.com%252Faccount%252Fcaslogin%253Furl%253D%25252FupCallback.html%25253FifmUrl%25253D%2525252F%26lang%3Dzh-cn%26themeName%3Dred%26bizIfmUrl%3Dhttps%253A%252F%252Fm.vmall.com%252FupCallback.html" class="a-EMUI5 fontsize_13 medium">忘记密码</a>
			</div>
			<!-- 相同手机号码，不同 国家码选择弹窗 -->
			<div id="selectCountryCodeDiv"></div>
			<div id="blank" class="height_112"></div>
		</div>
		<div class="center wap_login_footer_EMUI9 ">
				<div class="thirdAccountLogin"></div>
				<div class="thirdAccountPicture"> <span class="qqLogin_wap" title="QQ" onclick="thirdAccountLogin(this)"><img data-src="wap_qq" href="javascript:void(0);" tourl="/qq/authorize" src="https://hwid1.vmall.com/CAS/up/idmw_rss_23/css/mobile/standard_rss/images/wap_qq_emui9.png?cas20180928"></span><span class="alipayLogin_wap" title="Alipay" onclick="thirdAccountLogin(this)"><img data-src="wap_alipay" href="javascript:void(0);" tourl="/alipay/authorize" src="https://hwid1.vmall.com/CAS/up/idmw_rss_23/css/mobile/standard_rss/images/wap_alipay_emui9.png?cas20180928"></span></div>
				<!-- 更多 -->
				<div id="loginMoreBtn" class="a-EMUI5 position_relative display-inline-block medium">更多
					<div id="loginMoreMenu" class="login_more_touch">
						<ul>
							<li id="goConFaq" class="bottom_border ">
								遇到问题
								<div class="click_div click_div1"></div>
							</li>
							<li id="appealLink" class="bottom_border">
								更换手机号
								<div class="click_div click_div2"></div>
							</li>
							<li id="goSecurity" class="bottom_border">
								安全中心
								<div class="click_div click_div3"></div>
							</li>
						</ul>
					</div>
				</div>
			</div>
	</div>
	<!--<div class="smsValidateLogin hidden">
		<div class="actionbar">短信验证码登录</div>
		<div class="content-EMUI5">
			<!-- 国家/地区
			<div class="line8-EMUI5">
				<div class="" id="chooseCountry">
					<div class="countryCode flexLayout">	    
						<div class="countryCode-content">
							<div class="countryCodeH-EMUI5 countryCideH-EMUI5-up">国家/地区</div>
						</div>
						<div class="flexItemRight text-right selectedCountry-text" id="smsLoginCountryCode">
							<span id="selectedCountry" class="selectedCountryName" data-regions="cn" data-countrycode="+86" data-countrysite="1">中国  +86</span>
						</div>
						<div class="r">
							<span id="selectCountryImg" class="item-value item-forward-userAgr"></span>
							<div id="selectCountryRegionDiv"></div>
						</div>
					</div>
				</div>
			</div>
			<!--填写手机号 
			<div class="marginTop16">
				<div class="dinput-UI5" id="phoneNumDiv">
					<input oncut="return false;" oncopy="return false" type="text" autocomplete="off" class="ar-eg" id="phoneNum" name="username" maxlength="50" placeholder="手机号" validator="validator31542552041910">
				</div>
				<div id="phoneNum_errMsg" class="error-tips-EMUI5 line-EMUI5"></div>
			</div>
			
			<!--填写验证码 
				
			
			<!--填写短信验证码 
			<div class="marginTop16">
				<div class="dinput-UI5" id="smsAuthcodeDiv">
					<div class="getAuthbtn select-text btnUnable" id="getValiCode" intervaltime="60">
						<a class="getValiCodeFont medium" href="javascript:void(0)">获取验证码</a>
					</div>
					<span id="msg_getPhoneRandomCode"></span>
					<div class="input-div">
						<input maxlength="8" id="smsAuthcode" type="tel" autocomplete="off" placeholder="短信验证码" validator="validator41542552041911">
					</div>
				</div>
				<div id="smsAuthcode_msg" class="error-tips-EMUI5 line-EMUI5"></div>
			</div> 
			
			<div class="marginTop16">
				<div class="halfWidthRight r">
					<img src="https://hwid1.vmall.com/CAS/up/idmw_rss_23/css/mobile/standard_rss/images/tick-off.png?cas20180928" class="tick wrapLogin-remName" id="smsRemember_name"><span class="wrapLogin-remName">记住帐号</span>
				</div>	
				<div class="halfWidthleft">
					<a class="changeLoginType medium" data-type="smsValidateLogin" style="visibility: visible;">密码登录</a>
				</div>	
			</div>

			<div class="marginTop16">	
				<div class="btn-EMUI5 disabled login_btn_50p" id="smsBtnLogin" href="javascript:void(0)">登录</div>
				<span id="msg_login"></span>
			</div>
		</div>
	</div>-->
	<article class="tourist-login" style="display: block;">
    <div class="tips-style-3 agree-protocol">
          <p>继续访问即代表您已同意<a href="javascript:;" id="agreement-link">华为商城服务协议</a>和<a href="javascript:;" id="policy-link">华为隐私政策</a></p>
     </div>
</article>
</section>
</template>
<script>
	export default {
  name: 'app',
  data () {
    return {
          
    }
  },
  mounted(){
    	title.innerHTML="登录"
    }
}
</script>
<style scoped>
section {
    background: #fff;
    max-width: 530px;
    margin: 0 auto;
    color: #191919;
    font-family: Regular,Droid Sans, Droid Sans Fallback, STHeiti, SimHei, Hei;
    font-size: 13px;
}
a {
    font-size: .8rem;
    color: #267eff;
    line-height: 1rem;
    position: relative;
}
.userAccountLogin{
	height: 548px;
	position: relative;
}
.content-EMUI5 {
    padding: 0 16px;
}
.head-content {
    padding: 48px 0 24px;
    position: relative;
}
.login_logo {
    background-image: url(../../assets/img/wap_login_logo.png);
    background-repeat: no-repeat;
    width: 49px;
    height: 49px;
    display: inline-block;
    background-position: 50%;
    margin: 0 0 24px 0;
    background-size: 100%;
    left: 50%;
    margin-left: -24.5px;
    position: relative;
}
.center {
    text-align: center;
    justify-content: center;
    -webkit-box-pack: center;
}
.title-main {
    font-size: 24px;
    line-height: 1.3;
}
.line8-EMUI5 {
    margin-bottom: 8px;
}
.dinput-UI5, .uc-index-item-right, .dinput-UI6 {
    position: relative;
}
.dinput-UI5 * {
    font-size: 15px;
    line-height: 1;
}
.dinput-UI5 input {
    height: 32px;
    border: none;
    outline: 0;
    font-size: 15px;
    color: #191919;
    width: 100%;
}
.dinput-UI5 input {
    font-size: 16px;
    color: #191919;
}
.dinput-UI5:after, .dinput-UI6:after, .uc-index-item-right:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #ccc;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
}
.line-EMUI5 {
    margin-bottom: 16px;
}
.error-tips-EMUI5 {
    font-size: 10px;
    color: #fa2a2d;
    margin-top: 4px;
}
.dinput-UI5 .ico-div {
    padding-left: 8px;
    float: right;
}
.dinput-UI5 .ico-div-waplogin {
    padding-left: 16px;
}
.dinput-UI5 .eyeoff {
    display: inline-block;
    height: 24px;
    width: 24px;
    margin-top: 7px;
}
.dinput-UI5 .input-div {
    margin-right: 6px;
    overflow: hidden;
}
.line-EMUI5 {
    margin-bottom: 16px;
}
.marginTop16 {
    margin-top: 16px;
}
 .wap_sms_container{
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    -webkit-box-pack: justify;
    -moz-box-pack: justify;
    -ms-box-pack: justify;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.left {
    text-align: left;
    line-height: 1.3;
}
.left {
    float: left;
}
.left a{
	font-size: 13px;
}
.changeLoginType {
    visibility: hidden;
    color: #005BBA;
    line-height: 24px;
}
.medium {
    font-weight: 500;
}
.right {
    float: right;
}
.tick {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    cursor: pointer;
    vertical-align: middle;
}
.wrapLogin-remName {
    vertical-align: middle;
}
.line-EMUI5 .tick {
    width: 24px;
    height: 24px;
    margin: 0 8px 0 0;
}
.btn-EMUI5 {
    font-weight: 500;
    padding: 0 8px;
    margin: 0 auto;
    background: #007dff;
    border-radius: 4px;
    font-size: 15px;
    color: #fff;
    height: 32px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    justify-content: center;
    -webkit-box-pack: center;
}
.login_btn_50p {
    width: 50%;
    margin: auto;
    padding: 0 16px;
}
.btn-EMUI5.disabled {
    opacity: 0.3;
}
.fontsize_0 {
    font-size: 0;
}
.line8-EMUI9 {
    margin-bottom: 24px;
}
.a-EMUI5 {
    color: #005bba;
    font-size: 13px;
    font-weight: 500;
}
.line-EMUI5 {
    margin-bottom: 16px;
}
.display-inline-block {
    display: inline-block;
}
.medium {
    font-weight: 500;
}
.fontsize_13 {
    font-size: 13px;
}
.wap_login_footer_EMUI9 {
    position: absolute;
    bottom: 16px;
    width: 100%;
}
.thirdAccountLogin {
    margin: 8px auto;
    width: 90%;
    height: 0px;
    position: relative;
    top: 3px;
}
.thirdAccountPicture {
    text-align: center;
    position: relative;
    margin-bottom: 24px;
}
.thirdAccountPicture span {
    display: inline-block;
    width: 68px;
    text-align: center;
}
.thirdAccountPicture img {
    width: 40px;
    height: 40px;
}
.position_relative {
    position: relative;
}
.login_more_touch {
    display: none;
    position: absolute;
    bottom: 30px;
    left: -3px;
    padding: 0 16px;
    border-radius: 8px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    background: #fff;
    text-align: left;
    overflow: hidden;
}
.tourist-login {
    padding: 1.7rem .8rem 0;
    text-align: center;
}
.tourist-login .agree-protocol {
    padding: .7rem 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
}
.tips-style-3 p {
    font-size: .55em;
    line-height: 1.3;
}
.tourist-login .tips-style-3 p {
    font-size: .61rem;
    color: #888;
}
.tourist-login .tips-style-3 p a {
    font-size: .61rem;
}
.tourist-login .button-tourist-login a:after, .tourist-login .tips-style-3 a:after {
    content: '';
    border-bottom: 1px solid #267eff;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>