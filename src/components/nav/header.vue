<template>
	<section>
		<!--<h1>这是头部</h1>-->
		<div class="home-page-head">
			<head class="page-head" style="background-color: rgba(255, 255, 255, 0); position: relative;">
				<a   class="logo" title="华为商城"></a>
				<div class="search">
					<div class="swiper-container search-in">
						
					</div>
				</div>
				<section  class="shortcut">
					<ul>
						<li >
						<router-link to="/login" class="icon-message-black " title="消息">
						</router-link>
					</li> 
					<li>
						<router-link to="/login" rel="nofollow" title="登录" class="icon-text-black">
							<span >登录</span>
						</router-link>
					</li>
					</ul>
				</section>
			</head>
			<div  class="sub-nav-out" style="background-color: rgba(255, 255, 255, 0);">
				<div class="sub-nav">
					<ul >
						<li >
							<router-link to="/groom" class="sub-nav-item ">
								<span >推荐</span>
							</router-link>
						</li>
						<li >
							<router-link to='/huawei'  class="sub-nav-item">
								<span >华为</span>
							</router-link>
						</li>
						<li >
							<router-link to='/glory'  class="sub-nav-item">
								<span >荣耀</span>
							</router-link>
						</li>
						<li >
							<router-link to='/news'   class="sub-nav-item">
								<span >新品</span>
							</router-link>
						</li>
						<li >
							<router-link to='/cipher'  class="sub-nav-item">
								<span>数码惠</span>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
			<div class="shadow" style="opacity: 1;"></div>
		</div>
		<div style="height: 3.7rem;"></div>
		<router-view></router-view>
		<div>
					<section class="bottom-area">
						<p class="login">
							<a href="/account/applogin?url=/" rel="nofollow">登录</a>
							<a href="http://club.huawei.com/thread-1144534-1-1.html" rel="nofollow">反馈</a>
						</p>
						<p class="touch">
							<a href="/app/download"><i></i> <span>客户端</span></a>
							<a href="/index" class="current"><i></i> <span>触屏版</span></a>
							<a href="javascript:;"><i></i> <span>电脑版</span></a>
						</p>
						<p>
							<p class="copyright clearfix">
								<a id="policy-link" href="javascript:void(0)" rel="nofollow">隐私政策</a>
								<a id="agreement-link" href="javascript:void(0)" rel="nofollow">用户协议</a><br>
								<a href="http://www.miitbeian.gov.cn" rel="nofollow">苏ICP备17040376号-6</a>
								<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011402010009" rel="nofollow">苏公网安备32011402010009号</a><br><span> Copyright © 2012-2018  VMALL.COM 版权所有</span> </p>
						</p>
						
					</section>
					<section class="hungBar"><a class="button-top"><span>返回顶部</span></a></section>
				</div>
				<div class="ding"></div>
	</section>
</template>

<script>
</script>

<style scoped>
.home-page-head{
    background-color: #FFFFFF;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
}
.home-page-head{
	position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    margin: 0 auto;
    max-width: 720px;
    z-index: 100;
    background-size: 100% auto;
    background-position: bottom center;
}
.page-head{
	background-color: #ffffff;
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 720px;
    min-height: 2rem;
    margin: 0 auto;
    z-index: 100;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
}
.logo{
	 width: 3.05rem;
    height: 0.65rem;
    display: block;
    position: relative;
    left: 0.4rem;
    background-image: url(../../assets/img/logo.png);
    background-position: center center;
    background-size: 100% 100%;
}
.search{
	-webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    position: relative;
    padding-left: 0.4rem;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
}
.swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}
.search-in{
	width: 100%;
    height: 1.5rem;
    background: url(../../assets/img/home-page/search.png) no-repeat 0.4rem center;
    background-size: 0.9rem 0.9rem;
    background-color: rgba(155, 155, 155, 0.1);
    border-radius: 0.2rem;
    -webkit-border-radius: 0.2rem;
    margin-left: 0.4rem;
    overflow: hidden;
}
.shortcut {
    padding: 0 0.4rem;
}
.shortcut ul{
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
}
.shortcut ul li{
    position: relative;
    text-align: center;
}
.shortcut ul li a {
    display: block;
    position: relative;
    margin: 0 0.3rem;
    height: 1.2rem;
    width: 1.2rem;
    background-size: 100% 100%;
    background-position: center;
}
.shortcut .icon-message-black {
    background-image: url(../../assets/img/home-page/news.png);
}
.shortcut .icon-text-black {
    width: auto;
    line-height: 1rem;
}
.shortcut .icon-text-black span{
    text-align: center;
    font-size: 0.65rem;
    color: #4c4c4c;
}
.sub-nav-out{
    height: 1.7rem;
    overflow: hidden;
}
.sub-nav ul {
    overflow-x: auto;
    white-space: nowrap;
    font-size: 0;
}
.sub-nav li {
    display: inline-block;
    width: auto;
}
.sub-nav .sub-nav-item {
    display: inline-block;
    position: relative;
    height: 1.7rem;
    text-align: center;
    font-size: 0.7rem;
    color: #777777;
    float: left;
    padding: 0 .75rem;
}
.sub-nav .router-link-active{
    color: #cc0e11;
    box-sizing: border-box;
}
.sub-nav .router-link-active:before {
    content: "";
    position: absolute;
    left: 0.9rem;
    right: 0.9rem;
    bottom: .2rem;
    width: auto;
    height: 0.1rem;
    border-radius: 0.05rem;
    background-color: #cc0e11;
}
.sub-nav .sub-nav-item span {
    padding: 0.45rem 0 0.35rem;
    display: block;
}
.backpic-head .shadow {
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
.bottom-area {
    position: relative;
    bottom: 0;
    z-index: 19;
    width: 100%;
    background-color: #ffffff;
    margin-top: 0.4rem;
    padding: 0 0.3rem;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
}
.bottom-area p.login {
    padding: 0.25rem 0;
    height: 1.5rem;
    display: block;
    font-size: 0;
}
.bottom-area p.login a {
    display: inline-block;
    width: 3.7rem;
    font-size: 0.7rem;
    height: 1.5rem;
    line-height: 1.5rem;
    position: relative;
}
.bottom-area p.touch {
    padding: 0.5rem 0;
    height: 2.45rem;
    text-align: center;
    display: block;
    font-size: 0;
}
.bottom-area p.touch a {
    display: inline-block;
    margin-left: 1.8rem;
}
.bottom-area p.touch a:first-child {
    margin-left: 0;
}
.bottom-area p.touch a i {
    display: block;
    height: 1.8rem;
    width: 1.8rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
}
.bottom-area p.touch a:first-child i {
    background-image: url(../../assets/img/home-page/mobile.png);
}
.bottom-area p.touch a span {
    display: block;
    font-size: 0.6rem;
    line-height: 1.3;
    color: #9b9b9b;
}
.bottom-area p.touch a:nth-of-type(2) i {
    background-image: url(../../assets/img/home-page/clicking.png);
}
.bottom-area p.touch a:nth-of-type(3) i {
    background-image: url(../../assets/img/home-page/Computer.png);
}
.bottom-area p.touch a.current span {
    color: #4d4d4d;
}
.bottom-area p.copyright {
    padding: 0.25rem 0 0.9rem 0;
    line-height: 0.7;
}
.bottom-area p.copyright a, .bottom-area p.copyright span {
    font-size: 0.5rem;
    color: #9b9b9b;
    position: relative;
    padding: 0 0.2rem;
}
.bottom-area p.copyright a:first-child, .bottom-area p.copyright a:nth-child(2) {
    padding: 0 0.5rem;
    font-size: 0.6rem;
    line-height: 1.5;
}
.hungBar {
    position: fixed;
    z-index: 103;
    bottom: 2.9rem;
    right: 0.4rem;
    font-size: 0;
}
.hungBar .button-top {
    display: inline-block;
    background: url(../../assets/img/home-page/button-top.a9c21c9.png) no-repeat center;
    background-size: 2.5rem 2.5rem;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    background-position: 0 0;
}
.ding{
	width: 100%;
	height: 2.5rem;
}
</style>