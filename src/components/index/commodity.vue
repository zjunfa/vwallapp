<template>
	<div >
		<div>
			<article class="breadcrumb prod-breadcrumb SCat-breadcrumb" id="breadcrumb">
		    <header>
		        <h1 id="pageTitle">购物车</h1>
		    </header>
		</article>
		<div class="hr-48"></div>
		</div>
		
		<div>
			<div>
				<section class="system-empty system-empty-small">
					<header class="h">
						<p class="system-empty-title"><i class="icon-sc"></i> <span>购物车中还没有商品，赶紧选购吧！</span></p>
					</header>
					<div class="f small">
						<a href="/index" class="button-style-2"><span>去逛逛</span></a>
					</div>
				</section>
				<section class="system-pro-list">
					<header  class="h"><span >热销推荐</span></header>
					<div  class="b">
						<ul >
							<li >
								<a  href="/product/10086885129494.html">
									<p  class="p-img"><img  data-src="https://res.vmallres.com/pimages/product/6901443260232//428_428_1539230426520mp.png" src="https://res.vmallres.com/pimages/product/6901443260232//428_428_1539230426520mp.png" lazy="loaded"></p>
									<p  class="p-name"><span ><em >HUAWEI Mate 20</em></span></p>
									<p  class="p-price"><b >¥ 3999</b></p>
								</a>
							</li>
							<li >
								<a  href="/product/10086785341226.html">
									<p  class="p-img"><img  data-src="https://res.vmallres.com/pimages/product/6901443232413//428_428_1535358175728mp.jpg" src="https://res.vmallres.com/pimages/product/6901443232413//428_428_1535358175728mp.jpg" lazy="loaded"></p>
									<p  class="p-name"><span><em >荣耀10 AI摄影手机</em></span></p>
									<p  class="p-price"><b >¥ 2199
		              <del >¥ 2599 </del></b></p>
									<!---->
								</a>
							</li>
						</ul>
						<ul >
							<li >
								<a  href="/product/10086211949427.html">
									<p  class="p-img"><img  data-src="https://res.vmallres.com/pimages/product/6901443262182//428_428_1539222271816mp.png" src="https://res.vmallres.com/pimages/product/6901443262182//428_428_1539222271816mp.png" lazy="loaded"></p>
									<p  class="p-name"><span ><em >HUAWEI Mate 20 X</em></span></p>
									<p  class="p-price"><b >¥ 4999
		              <!----></b></p>
									<!---->
								</a>
							</li>
							<li >
								<a  href="/product/993405255.html">
									<p  class="p-img"><img  data-src="https://res.vmallres.com/pimages/product/6901443183524//428_428_1538991695890mp.png" src="https://res.vmallres.com/pimages/product/6901443183524//428_428_1538991695890mp.png" lazy="loaded"></p>
									<p  class="p-name"><span ><em >荣耀手环3</em></span></p>
									<p  class="p-price"><b >¥ 129
		              <del >¥ 149 </del></b></p>
									<!---->
								</a>
							</li>
						</ul>
						<ul >
							<li >
								<a  href="/product/10086471194207.html">
									<p  class="p-img"><img  data-src="https://res.vmallres.com/pimages/product/6901443224098//428_428_1522651164449mp.jpg" src="https://res.vmallres.com/pimages/product/6901443224098//428_428_1522651164449mp.jpg" lazy="loaded"></p>
									<p  class="p-name"><span ><em >HUAWEI P20 Pro</em></span></p>
									<p  class="p-price"><b >¥ 4988
		              <!----></b></p>
									<!---->
								</a>
							</li>
							<li >
								<a  href="/product/875753311.html">
									<p  class="p-img"><img  data-src="https://res.vmallres.com/pimages/product/1303030003601//428_428_1527674500118mp.jpg" src="https://res.vmallres.com/pimages/product/1303030003601//428_428_1527674500118mp.jpg" lazy="loaded"></p>
									<p  class="p-name"><span ><em >荣耀xSport 运动蓝牙耳机</em></span></p>
									<p  class="p-price"><b >¥ 229
		              <del >¥ 249 </del></b></p>
									<!---->
								</a>
							</li>
						</ul>
					</div>
				</section>
			</div>
		</div>
		<div class="ding"></div>
	</div>
</template>

<script>
		export default {
  name: 'app',
  data () {
    return {
          
    }
  },
  mounted(){
    	title.innerHTML="购物车 - 华为商城官网"
    }
}
</script>

<style scoped>
.breadcrumb {
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 720px;
    height: 2.4rem;
    margin: 0 auto;
    z-index: 100;
    border-bottom: 1px solid #e5e5e5;
}
.breadcrumb header {
    padding: 0 .8rem;
    position: relative;
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
.breadcrumb header h1, .breadcrumb-search header em {
    display: block;
    width: 45%;
    height: 2.4rem;
    line-height: 2.4rem;
    margin-left: .4rem;
    vertical-align: middle;
    font-size: .7rem;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.SCat-breadcrumb header h1 {
    margin-left: 0;
}
.hr-48 {
    height: 2.4rem;
}
.system-error, .system-empty {
    padding: 35% .8rem;
    text-align: center;
}
.system-empty-small {
    padding: 1.25rem .8rem;
}
.system-empty-small .system-empty-title {
    line-height: 1.2rem;
    padding: 0;
}
.icon-sc {
    background-image: url(../../assets/img/home-page/icon32.a3370aa.png);
    height: 1.2rem;
    width: 1.2rem;
    display: inline-block;
    background-size: 100% auto;
    background-position: 0 0;
}
.system-empty-small .system-empty-title .icon-sc {
    position: relative;
    top: .3rem;
    margin-right: .5rem;
}
.system-empty-title span {
    font-size: .75rem;
    color: #888;
    display: block;
}
.system-empty-small .system-empty-title span {
    display: inline-block;
}
.system-empty .small {
    padding: .4rem 0 0;
}
.button-style-2{
	padding: 0 .65rem;
    height: 1.15rem;
    line-height: 1.2;
    border-radius: 1rem;
    text-align: center;
    min-width: 1.8rem;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-inline-box;
    display: -moz-inline-box;
    display: -ms-inline-flexbox;
    display: inline-box;
    display: -webkit-inline-flex;
    display: inline-flex;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    justify-content: center;
}
.button-style-2 {
    border: 1px solid #CA151E;
    color: #CA151E;
}
.system-empty .f a, .system-error .f a {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
}
.system-empty .small a {
    width: auto;
}

.button-style-2 span{
	font-size: .6rem;
    padding-top: .05rem;
    display: block;
}
.system-pro-list {
    background-color: #fff;
    overflow: hidden;
}
.system-pro-list .h {
    height: 1.75rem;
    line-height: 1.5rem;
    background-color: #fff;
    text-align: left;
    padding: 0 0.8rem;
    position: relative;
}
.system-pro-list .h span {
    font-size: 0.55rem;
    color: #222;
}
.system-pro-list .b {
    border-top: 1px solid #eaeaea;
}
.system-pro-list .b ul {
    width: 100%;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: box;
    display: -webkit-flex;
    display: flex;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
}
.system-pro-list .b ul li {
    width: 50%;
    position: relative;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    border-right: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
}
.system-pro-list .b ul li:nth-child(2) {
    border-right: 0;
}
.system-pro-list a {
    padding: 0.85rem 0.8rem 0.65rem;
    text-align: center;
    display: block;
}
.system-pro-list .p-img {
    color: #333;
    height: 4.25rem;
    width: 4.25rem;
    margin: 0 auto;
    position: relative;
}
.system-pro-list .p-name {
    font-size: 0.55rem;
    color: #333;
    text-align: center;
    height: 1.4rem;
    padding: 0.35rem 0 0;
    margin: 0 auto;
    display: table;
    white-space: normal;
}
.system-pro-list .p-name span{
    display: table-cell;
    vertical-align: middle;
}
.system-pro-list .p-name span em {
    line-height: 1.2;
    max-height: 1.35rem;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.system-pro-list .p-price b {
    font-size: 0.65rem;
    font-weight: normal;
    color: #ca151e;
    line-height: 1.2;
}
del{
    text-decoration: line-through;
}
.system-pro-list .p-price del {
    font-size: 0.65rem;
    color: #888;
    margin-left: 0.3rem;
    position: relative;
}
img{
    border: 0;
    max-width: 100%;
    height: auto;
    vertical-align: top;
}
.ding{
	width: 100%;
	height: 2.5rem;
}
</style>