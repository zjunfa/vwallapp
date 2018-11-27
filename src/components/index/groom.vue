<template>
	<section style="background-color: rgb(249, 249, 249);">
		<div class="home-load">
			<section class="pro-gallery backpic-slider" style="background-image: url(&quot;&quot;);">
				<div class="swiper-container swiper-container-horizontal swiper-container-ios" style="height: 7.35em;">
					<mt-swipe :auto="4000">
					  <mt-swipe-item v-for="v in carousel"><img :src=v.img></mt-swipe-item>
					</mt-swipe>
				</div>
			</section>
			<div class="backpic-squared">
				<div class="swiper-container channel-floor-squared swiper-container-horizontal swiper-container-ios">
					<ul class="swiper-wrapper">
						<li class="swiper-slide swiper-slide-active" style="width: 71.8px;" v-for="v in wrap">
							<a href="#">
								<i><img :src=v.img></i>
								<p style="color: rgb(155, 155, 155);">{{v.name}}</p>
							</a>
						</li>
					</ul>
					<div class="swiper-pagination-line swiper-pagination-clickable swiper-pagination-bullets"></div>
				</div>
				<div class="channel-headline">
					<div class="title">
						<a href="#">
							<img src="../../assets/img/home-page/icon_headLine.png"></a>
					</div>
					<div >
						<div class="swiper-container swiper-container-vertical swiper-container-ios">
						</div>
					</div>
					<div class="more">
						<a href="#">更多</a>
					</div>
				</div>
			</div>
			<section class="seckill">
				<h3>
					<span class="time" style="font-size: 0.8rem;">限时特惠</span>
					<span class="icon-seckill-title"></span>
					<span class="count-down time">03:22:55 </span>
					<span class="tip-name">后结束</span>
				</h3>
				<div class="swiper-container swiper-container-horizontal swiper-container-ios">
					<div  class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
						<div class="swiper-slide swiper-slide-active" style="width: 85.0819px;" v-for="v in con">
							<a href="https://m.vmall.com/product/ord-2901020004607.html" class="type1" v-if="v.bool==1">
								<div class="img-area">
									<p class="p-img"><img :src=v.img alt="华为手环 B5"></p>
									<p class="p-abbr">{{v.abbr}}</p>
								</div>
								<p class="p-name"><b>{{v.name}}</b><del></del></p>
							</a>
							<a href="https://msale.vmall.com/hwpj.html" v-if="v.bool==0">
								<img :src='v.img' />
							</a>
						</div>
						<!--<div class="swiper-slide swiper-slide-next" style="width: 85.0819px;">
							<a href="https://m.vmall.com/product/ord-2601010042602.html" class="type1">
								<div class="img-area">
									<p class="p-img"><img src="../../assets/imgaes/groom/home-page06 (3).png" alt="荣耀9i"></p>
									<p class="p-abbr">荣耀9i</p>

								</div>
								<p class="p-name"><b>最高降200</b> <del></del></p>
							</a>
						</div>-->
						<!--<div class="swiper-slide" style="width: 85.0819px;">
							<a href="https://msale.vmall.com/hwpj.html">
								<img src="https://res.vmallres.com/pimages/pages/rushBuy/1542106044673.png">
							</a>
						</div>-->
						<!--<div class="swiper-slide" style="width: 85.0819px;">
							<a href="https://m.vmall.com/product/ord-2901010004801.html" class="type1">
								<div class="img-area">
									<p class="p-img"><img src="../../assets/img/home-page/home-page17.png" alt="荣耀手表"></p>
									<p class="p-abbr">荣耀手表</p>
								</div>
								<p class="p-name"><b>下单立减20元</b> <del></del></p>
							</a>
						</div>-->
						<!--<div class="swiper-slide" style="width: 85.0819px;">
							<a href="https://m.vmall.com/product/ord-3102050007102.html" class="type1">
								<div class="img-area">
									<p class="p-img"><img src="../../assets/img/home-page/home-page17.png" alt="荣耀无线耳机"></p>
									<p class="p-abbr">荣耀无线耳机</p>
								</div>
								<p class="p-name"><b>购机赢手机</b> <del></del></p>
							</a>
						</div>-->
						<!--<div class="swiper-slide" style="width: 85.0819px;">
							<a href="https://m.vmall.com/product/ord-2701010008503.html" class="type1">
								<div class="img-area">
									<p class="p-img"><img src="../../assets/img/home-page/home-page17.png" alt="平板 M5 青春版"></p>
									<p class="p-abbr">平板 M5 青春版</p>
								</div>
								<p class="p-name"><b>新品3期免息</b> <del></del></p>
							</a>
						</div>-->
						<!--<div class="swiper-slide" style="width: 85.0819px;">
							<a href="https://m.vmall.com/product/ord-2801010003501.html" class="type1">
								<div class="img-area">
									<p class="p-img"><img src="../../assets/img/home-page/home-page17.png" alt="荣耀MagicBook"></p>
									<p class="p-abbr">荣耀MagicBook</p>
								</div>
								<p class="p-name"><b>购机享免息</b> <del></del></p>
							</a>
						</div>-->
						<!--<div class="swiper-slide" style="width: 85.0819px;">
							<a href="https://m.vmall.com/product/ord-1304030000902.html" class="type1">
								<div class="img-area">
									<p class="p-img"><img src="../../assets/img/home-page/home-page17.png" alt="华为全景相机"></p>
									<p class="p-abbr">华为全景相机</p>
								</div>
								<p class="p-price"><b>¥499</b> <del>¥599</del></p>
							</a>
						</div>-->
						<!--<div class="swiper-slide" style="width: 85.0819px;">
							<a href="https://msale.vmall.com/honorsmart.html"><img src="../../assets/img/home-page/home-page17.png"></a>
						</div>-->
						<!--<div class="swiper-slide" style="width: 85.0819px;">
							<a href="https://m.vmall.com/product/ord-3102020003501.html" class="type1">
								<div class="img-area">
									<p class="p-img"><img src="../../assets/img/home-page/home-page17.png" alt="华为多口充电器"></p>
									<p class="p-abbr">华为多口充电器</p>
								</div>
								<p class="p-price"><b>¥99</b> <del>¥149</del></p>
							</a>
						</div>-->
						<!--<div class="swiper-slide" style="width: 85.0819px;">
							<a href="https://msale.vmall.com/honorsmart.html"><img src="../../assets/img/home-page/home-page17.png"></a>
						</div>-->
					</div>
					<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
				</div>
			</section>
			<section class="channel-floor channel-ads">
				<article class="b" style="text-align: left;">
					<ul>
						<li>
							<div class="normal">
								<a href="https://msale.vmall.com/hwmate.html">
									<img src="https://res.vmallres.com/pimages//sale/2018-10/20181027085823194.png" title="WAP广告投放区一第1帧" style="float: none;"></a>
							</div>
						</li>
						<li>
							<div class="normal">
								<a href="https://m.vmall.com/product/10086785341226.html">
									<img src="https://res.vmallres.com/pimages//sale/2018-11/2018111523094603.png" title="WAP广告投放区一第2帧" style="float: none;"></a>
							</div>
							<div class="normal">
								<a href="https://m.vmall.com/product/10086286769025.html">
									<img src="https://res.vmallres.com/pimages//sale/2018-11/20181111231336615.jpg" title="WAP广告投放区一第3帧" style="float: none;"></a>
							</div>
						</li>
					</ul>
					<ul>
						<li>
							<div class="normal">
								<a href="https://msale.vmall.com/p20.html">
									<img src="https://res.vmallres.com/pimages//sale/2018-11/20181112113839846.png" title="WAP广告投放区一第4帧" style="float: none;"></a>
							</div>
						</li>
						<li>
							<div class="normal">
								<a href="https://m.vmall.com/product/10086372796926.html">
									<img src="https://res.vmallres.com/pimages//sale/2018-11/20181115160020617.png" title="WAP广告投放区一第5帧" style="float: none;"></a>
							</div>
						</li>
					</ul>
					<ul>
						<li>
							<div class="normal">
								<a href="https://msale.vmall.com/cx9.html">
									<img src="https://res.vmallres.com/pimages//sale/2018-11/20181112091027287.png" title="WAP广告投放区一第6帧" style="float: none;"></a>
							</div>
						</li>
						<li>
							<div class="normal">
								<a href="https://m.vmall.com/product/570379791.html">
									<img src="https://res.vmallres.com/pimages//sale/2018-11/20181115231001977.jpg" title="WAP广告投放区一第7帧" style="float: none;"></a>
							</div>
						</li>
					</ul>
				</article>
				<div class="channel-floor-list3">
					<ul>
						<li>
							<a href="https://m.vmall.com/product/10086568474763.html#10086525488984">
								<div class="img-area">
									<p class="p-img">
										<img data-src="https://res2.vmallres.com/pimages/frontLocation/content/5436346/1540604133954.png" src="https://res2.vmallres.com/pimages/frontLocation/content/5436346/1540604133954.png" lazy="loaded">
									</p>
								</div>
								<p class="p-name"><span>HUAWEI nova 3</span></p>
								<p class="p-promotion">领券最高减200</p>
								<p class="p-price"><b> ¥2599</b></p>
							</a>
						</li>
						<li>
							<a href="https://m.vmall.com/product/10086712964531.html#10086906323992">
								<div class="img-area">
									<p class="p-img"><img data-src="https://res6.vmallres.com/pimages/product/6901443256013/428_428_1538985711338mp.png" src="https://res6.vmallres.com/pimages/product/6901443256013/428_428_1538985711338mp.png" lazy="loaded"></p>
								</div>
								<p class="p-name"><span>荣耀8X Max</span></p>
								<p class="p-promotion">7.12英寸珍珠屏</p>
								<p class="p-price"><b> ¥1499</b></p>
							</a>
						</li>
						<li>
							<a href="https://m.vmall.com/product/10086283844446.html#10086727804026">
								<div class="img-area">
									<p class="p-img">
										<img data-src="https://res3.vmallres.com/pimages/frontLocation/content/5957062/1542186981899.png" src="https://res3.vmallres.com/pimages/frontLocation/content/5957062/1542186981899.png" lazy="loaded"></p>
								</div>
								<p class="p-name"><span>HUAWEI nova 3i</span></p>
								<p class="p-promotion">64GB版本减200</p>
								<p class="p-price"><b>¥1999 </b></p>
							</a>
						</li>
					</ul>
				</div>
			</section>
			<section id="chaozhiDiv" class="channel-floor">
				<header><h2>精品推荐</h2></header>
				<div class="channel-floor-roll">
					<div class="swiper-container swiper-container-horizontal swiper-container-free-mode swiper-container-ios">
						<div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
							<div class="swiper-slide swiper-slide-active">
								<a href="https://m.vmall.com/product/10086305784772.html#10086617332760">
									<div class="img-area">
										<p class="p-img"><img data-src="https://res3.vmallres.com/pimages/frontLocation/content/2920021/1539427439317.png" src="https://res3.vmallres.com/pimages/frontLocation/content/2920021/1539427439317.png" lazy="loaded"></p>
										<p class="p-promotion">直降100 高配赠礼包</p>
									</div>
									<p class="p-name"><span>荣耀Note10</span></p>
									<p class="p-price"><b>¥2699<del>¥2799</del></b></p>
								</a>
							</div>
							<div class="swiper-slide swiper-slide-next">
								<a href="https://m.vmall.com/product/270976970.html#976288056">
									<div class="img-area">
										<p class="p-img"><img data-src="https://res6.vmallres.com/pimages/frontLocation/content/3037517/1542178035113.png" src="https://res6.vmallres.com/pimages/frontLocation/content/3037517/1542178035113.png" lazy="loaded"></p>
										<p class="p-promotion">赠充电底座</p>
									</div>
									<p class="p-name"><span>HUAWEI WATCH 2 Pro</span></p>
									<p class="p-price"><b> ¥2288</b></p>
								</a>
							</div>
							<div class="swiper-slide">
								<a href="https://m.vmall.com/product/10086686072684.html#10086455419044">
									<div class="img-area">
										<p class="p-img"><img data-src="https://res0.vmallres.com/pimages/product/6901443262472/428_428_1540628828647mp.png" src="https://res0.vmallres.com/pimages/product/6901443262472/428_428_1540628828647mp.png" lazy="loaded"></p>
										<p class="p-promotion">爆款新品放量购</p>
									</div>
									<p class="p-name"><span>荣耀手环4</span></p>
									<p class="p-price"><b>暂无报价</b></p>
								</a>
							</div>
							<div class="swiper-slide">
								<a href="https://m.vmall.com/product/10086209439106.html#10086469441567">
									<div class="img-area">
										<p class="p-img"><img data-src="https://res0.vmallres.com/pimages/product/6901443265084/428_428_1538290840512mp.jpg" src="https://res0.vmallres.com/pimages/product/6901443265084/428_428_1538290840512mp.jpg" lazy="loaded"></p>
										<p class="p-promotion">赠配件好礼</p>
									</div>
									<p class="p-name"><span>华为畅享 MAX </span></p>
									<p class="p-price"><b>¥1699</b></p>
								</a>
							</div>
							<div class="swiper-slide">
								<a href="https://m.vmall.com/product/10086527872485.html#10086108080224">
									<div class="img-area">
										<p class="p-img"><img data-src="https://res3.vmallres.com/pimages/product/6901443265213/428_428_1539243116157mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
										<p class="p-promotion">新品上市 晒单赢大奖</p>
									</div>
									<p class="p-name"><span>荣耀平板5</span></p>
									<p class="p-price"><b>¥1599</b></p>
								</a>
							</div>
							<div class="swiper-slide">
								<a href="https://m.vmall.com/product/889979598.html#787776707">
									<div class="img-area">
										<p class="p-img"><img data-src="https://res0.vmallres.com/pimages/product/6901443184293/428_428_1539767835928mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
										<p class="p-promotion">享6期免息</p>
									</div>
									<p class="p-name"><span>HUAWEI MateBook E</span></p>
									<p class="p-price"><b>¥7388</b></p>
								</a>
							</div>
							<div class="swiper-slide">
								<a href="https://m.vmall.com/product/478362844.html#98670947">
									<div class="img-area">
										<p class="p-img"><img data-src="https://res1.vmallres.com/pimages/product/6901443204793/428_428_1538987469994mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
										<p class="p-promotion">最高优惠300</p>
									</div>
									<p class="p-name"><span>荣耀畅玩7X</span></p>
									<p class="p-price"><b>
								      ¥999<del>¥1299</del></b></p>
								</a>
							</div>
							<div class="swiper-slide">
								<a href="https://m.vmall.com/product/10086000689735.html#10086488837838">
									<div class="img-area">
										<p class="p-img"><img data-src="https://res2.vmallres.com/pimages/product/6901443227815/428_428_1539915445299mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
										<p class="p-promotion">享6期免息</p>
									</div>
									<p class="p-name"><span>HUAWEI MateBook X Pro</span></p>
									<p class="p-price"><b> ¥8688</b></p>
								</a>
							</div>
							<div class="swiper-slide">
								<a href="https://m.vmall.com/product/10086291890006.html#10086565205556">
									<div class="img-area">
										<p class="p-img"><img data-src="https://res6.vmallres.com/pimages/frontLocation/content/3195677/1539587871291.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
										<p class="p-promotion">最高优惠200</p>
									</div>
									<p class="p-name"><span>荣耀9i</span></p>
									<p class="p-price"><b>
								      ¥1199<del>¥1399 </del></b></p>
								</a>
							</div>
							<div class="swiper-slide">
								<a href="https://m.vmall.com/product/194128141.html#553811697">
									<div class="img-area">
										<p class="p-img"><img data-src="https://res2.vmallres.com/pimages/product/6901443173129/428_428_1538985401864mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
										<p class="p-promotion">科学指导减脂</p>
									</div>
									<p class="p-name"><span>荣耀智能体脂秤</span></p>
									<p class="p-price"><b>
								      ¥129<del>¥169</del></b></p>
								</a>
							</div>
							<div class="swiper-slide">
								<a href="https://m.vmall.com/product/405225095.html#887012722">
									<div class="img-area">
										<p class="p-img"><img data-src="https://res1.vmallres.com/pimages/product/6901443182770/428_428_1539913210943mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
										<p class="p-promotion">高清大屏</p>
									</div>
									<p class="p-name"><span>荣耀畅玩平板2 9.6英寸</span></p>
									<p class="p-price"><b> ¥999</b></p>
								</a>
							</div>
							<div class="swiper-slide">
								<a href="https://m.vmall.com/product/10086158977116.html#10086138654132">
									<div class="img-area">
										<p class="p-img"><img data-src="https://res2.vmallres.com/pimages/product/6901443229925/428_428_1526973272209mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
										<p class="p-promotion">赠配件礼包</p>
									</div>
									<p class="p-name"><span>华为畅享 8e 青春</span></p>
									<p class="p-price"><b> ¥799</b></p>
								</a>
							</div>
						</div> <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
				</div>
			</section>
			<section class="channel-floor region-area">
					<header>
						<h2>手机</h2></header>
					<div class="b">
						<ul>
							<li>
								<a href="https://m.vmall.com/product/357339492.html#346533524">
									<div class="img-area big">
										<p class="p-img"><img data-src="https://res6.vmallres.com/pimages/frontLocation/content/4421243/1531302511734.jpg" src="https://res6.vmallres.com/pimages/frontLocation/content/4421243/1531302511734.jpg" lazy="loaded"></p>
										<p class="p-promotion">领券立减200+赠好礼</p>
									</div>
									<p class="p-name"><span>HUAWEI Mate 10 Pro</span></p>
									<p class="p-price"><b> ¥3999</b></p>
								</a>
							</li>
							<li>
								<a href="https://m.vmall.com/product/10086883263315.html#10086132132169">
									<div class="img-area big">
										<p class="p-img"><img data-src="https://res6.vmallres.com/pimages/frontLocation/content/4728221/1540021489047.png" src="https://res6.vmallres.com/pimages/frontLocation/content/4728221/1540021489047.png" lazy="loaded"></p>
										<p class="p-promotion">降100 送好礼</p>
									</div>
									<p class="p-name"><span>荣耀畅玩7C</span></p>
									<p class="p-price"><b>  ¥799 <del>¥899 </del></b></p>
								</a>
							</li>
						</ul>
						<ul>
							<li>
								<a href="https://m.vmall.com/product/10086733534868.html#10086212501655">
									<div class="img-area big">
										<p class="p-img"><img data-src="https://res1.vmallres.com/pimages/frontLocation/content/5807576/1541836518961.jpg" src="https://res1.vmallres.com/pimages/frontLocation/content/5807576/1541836518961.jpg" lazy="loaded"></p>
										<p class="p-promotion">领券立减+赠好礼</p>
									</div>
									<p class="p-name"><span>华为畅享8 </span></p>
									<p class="p-price"><b>¥1099</b></p>
								</a>
							</li>
							<li>
								<a href="https://m.vmall.com/product/10086070385182.html#10086765914411">
									<div class="img-area big">
										<p class="p-img"><img data-src="https://res4.vmallres.com/pimages/frontLocation/content/4167269/1540021540742.png" src="https://res4.vmallres.com/pimages/frontLocation/content/4167269/1540021540742.png" lazy="loaded"></p>
										<p class="p-promotion">优惠100</p>
									</div>
									<p class="p-name"><span>荣耀畅玩7A</span></p>
									<p class="p-price"><b> ¥699 <del>¥799</del></b></p>
								</a>
							</li>
						</ul>
					</div>
					<div class="channel-floor-roll">
						<div class="swiper-container swiper-container-horizontal swiper-container-free-mode swiper-container-ios">
							<div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
								<div class="swiper-slide swiper-slide-active">
									<a href="https://m.vmall.com/product/10086576787089.html#10086608202937">
										<div class="img-area">
											<p class="p-img"><img data-src="https://res7.vmallres.com/pimages/frontLocation/content/5605290/1540554503257.png" src="https://res7.vmallres.com/pimages/frontLocation/content/5605290/1540554503257.png" lazy="loaded"></p>
											<p class="p-promotion">最高优惠400元</p>
										</div>
										<p class="p-name"><span>荣耀Play</span></p>
										<p class="p-price"><b> ¥1699<del>¥1999</del></b></p>
									</a>
								</div>
								<div class="swiper-slide swiper-slide-next">
									<a href="https://m.vmall.com/product/10086316198953.html#10086905745003">
										<div class="img-area">
											<p class="p-img"><img data-src="https://res0.vmallres.com/pimages/product/6901443258000/428_428_1540630399670mp.png" src="https://res0.vmallres.com/pimages/product/6901443258000/428_428_1540630399670mp.png" lazy="loaded"></p>
											<p class="p-promotion">领券减200 享6期免息</p>
										</div>
										<p class="p-name"><span>HUAWEI 麦芒7 </span></p>
										<p class="p-price"><b> ¥2399</b></p>
									</a>
								</div>
								<div class="swiper-slide">
									<a href="https://m.vmall.com/product/478362844.html#98670947">
										<div class="img-area">
											<p class="p-img"><img data-src="https://res1.vmallres.com/pimages/product/6901443204793/428_428_1538987469994mp.png" src="https://res1.vmallres.com/pimages/product/6901443204793/428_428_1538987469994mp.png" lazy="loaded"></p>
											<p class="p-promotion">最高优惠300</p>
										</div>
										<p class="p-name"><span>荣耀畅玩7X</span></p>
										<p class="p-price"><b>¥999<del>¥1299</del></b></p>
									</a>
								</div>
								<div class="swiper-slide">
									<a href="https://m.vmall.com/product/501317311.html#791783665">
										<div class="img-area">
											<p class="p-img"><img data-src="https://res2.vmallres.com/pimages/product/2601010016412/428_428_1541564459279mp.jpg" src="https://res2.vmallres.com/pimages/product/2601010016412/428_428_1541564459279mp.jpg" lazy="loaded"></p>
											<p class="p-promotion">最高降600 送好礼</p>
										</div>
										<p class="p-name"><span>荣耀9青春版</span></p>
										<p class="p-price"><b> ¥1199<del>¥1799 </del></b></p>
									</a>
								</div>
								<div class="swiper-slide">
									<a href="https://m.vmall.com/product/10086094364044.html#10086270455635">
										<div class="img-area">
											<!---->
											<p class="p-img"><img data-src="https://res2.vmallres.com/pimages/frontLocation/content/5218657/1540021366908.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
											<p class="p-promotion">小巧全面屏</p>
										</div>
										<p class="p-name"><span>荣耀畅玩7</span></p>
										<!---->
										<p class="p-price"><b> ¥599</b></p>
									</a>
								</div>
								<div class="swiper-slide">
									<a href="https://m.vmall.com/product/570379791.html#574239706">
										<div class="img-area">
											<p class="p-img"><img data-src="https://res7.vmallres.com/pimages/frontLocation/content/5158401/1539657891115.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
											<p class="p-promotion">限时最高优惠1000元</p>
										</div>
										<p class="p-name"><span>荣耀V10 </span></p>
										<p class="p-price"><b> ¥1999<del>¥2799</del></b></p>
									</a>
								</div>
							</div> <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
					</div>
					<footer>
						<a href="https://m.vmall.com/category-36" class="more"><span>发现更多手机</span></a>
					</footer>
				</section>

		</div>
	</section>
</template>

<script>
export default {
  data(){
    return {
          carousel:"",
          wrap:"",
          con:""
    }
  },
  mounted(){
		var a=this;
    	title.innerHTML="华为商城（VMALL.COM）_华为手机、荣耀手机、官网正品保障";
    	this.$http.get('./data/groom.json').then( function(res) {
//  		console.log(this)
    		a.carousel=res.data.carousel;
    		a.wrap=res.data.swiper;
    		a.con=res.data.container;
    		console.log(a.carousel);
    		console.log(a.wrap);
    		console.log(a.con)
    	})
    }
}
</script>

<style scoped>
.backpic-slider, .backpic-squared {
    background-color: #FFFFFF;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
}
.backpic-slider.pro-gallery {
    overflow: visible;
}
.swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}
.pro-gallery .swiper-container {
    border-radius: .5rem;
    padding-top: .2rem;
}
.swiper-container img{
	width: 100%;
}
.backpic-squared {
    background-size: 100% auto;
    background-position: top center;
    background-repeat: repeat-y;
     background-image: url(../../assets/img/home-page/bg3Light.png);
}
.channel-floor-squared{
    padding: 1.8rem .4rem 0.05rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
}
.swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
}
.swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
}
.channel-floor-squared a {
    display: block;
    text-align: center;
    position: relative;
}
.channel-floor-squared a i {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    margin-bottom: .2rem;
}
.channel-floor-squared a p {
    font-size: .55rem;
    color: #9B9B9B;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.3;
}
.channel-floor-squared a i img {
    width: 100%;
    height: 100%;
}
.swiper-pagination-line {
    text-align: center;
    height: .5rem;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 10px;
    left: 0;
    width: 100%;
}
.channel-headline {
    margin: 0 .9rem;
    height: 2rem;
    position: relative;
}
.channel-headline .title {
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
    float: left;
    height: 2rem;
    position: relative;
}
.channel-headline .title a{
    height: 0.6rem;
    width: auto;
    display: block;
    padding: .5rem 0;
}
img {
    border: 0;
    max-width: 100%;
    height: auto;
    vertical-align: top;
}
.channel-headline .title a img {
    width: auto;
    height: 0.6rem;
}
.channel-headline .swiper-container {
    padding-right: 1.5rem;
    height: 2rem;
    line-height: 2rem;
    vertical-align: middle;
    position: relative;
    overflow: hidden;
}
.channel-headline .more {
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -0.3rem;
    z-index: 2;
}
.channel-headline .more a {
    display: block;
    font-size: .6rem;
    color: #999999;
}
.seckill {
    text-align: center;
    background-image: linear-gradient(-180deg, #F9F9F9 0%, #FFFFFF 100%);
}
.seckill h3 {
    padding: .7rem 0 .5rem;
    position: relative;
    text-align: center;
    margin: 0 auto;
    display: inline-block;
    font-size: 0;
}
.seckill h3 .time {
    display: block;
    float: left;
    font-size: .9rem;
    color: #4D4D4D;
    line-height: .8rem;
}
.seckill h3 .icon-seckill-title {
    display: block;
    float: left;
    height: .75rem;
    width: .75rem;
    background: url(../../assets/img/home-page/lightning.png) no-repeat center center;
    background-size: 100% 100%;
    margin: 0 0.15rem;
}
.seckill h3 .tip-name {
    font-size: .5rem;
    color: #9B9B9B;
    margin-left: .1rem;
    display: block;
    float: left;
    line-height: .75rem;
}
.seckill .swiper-container {
    padding-bottom: .4rem;
    padding-right: .3rem;
}
.seckill .swiper-slide {
    height: 5.15rem;
    /*overflow: hidden;*/
}
.seckill .swiper-slide a {
    margin-left: .3rem;
    display: block;
    height: 100%;
}
.seckill .swiper-slide .img-area {
    position: relative;
    padding-top: .2rem;
    padding-bottom: .15rem;
    background: #FFFFFF;
    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.05);
    border-radius: .5rem;
}
.seckill p {
    word-break: break-all;
    overflow: hidden;
    max-width: 100%;
    font-size: 0;
}
.seckill .swiper-slide .img-area .p-img {
    width: 3.05rem;
    min-height: 3.05rem;
    margin: 0 auto;
}
.seckill .swiper-slide .img-area .p-abbr {
    font-size: .45rem;
    color: #999999;
    line-height: 1.2;
    padding: .2rem 0 0;
    margin: 0 .25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.seckill .swiper-slide .p-name, .seckill .swiper-slide .p-price {
    line-height: 1;
}
.seckill .swiper-slide img {
    height: 100%;
    width: 100%;
}
.seckill .swiper-slide .p-name{
	display: block;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	 -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

}
.seckill .swiper-slide .p-name b, .seckill .swiper-slide .p-price b {
    font-size: .525rem;
    color: #CA141D;
    line-height: 1.2rem;
}
.channel-floor {
    margin-bottom: .5rem;
    background-color: #fff;
    text-align: center;
    padding: 0 .3rem;
}
.channel-ads {
    margin-bottom: 0;
    padding-bottom: .5rem;
    padding-top: .2rem;
}
.channel-ads .b {
    border-top-right-radius: .5rem;
    border-top-left-radius: .5rem;
    overflow: hidden;
}
.channel-floor ul {
    width: 100%;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
}
.channel-floor ul li {
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    max-width: 50%;
    margin-left: .3rem;
}
.channel-ads ul li {
    width: 50%;
    margin-left: .1rem;
    margin-top: .1rem;
}
.channel-floor ul li:first-child {
    margin-left: 0;
}
.channel-ads ul:first-child li {
    margin-top: 0;
}
.channel-floor ul li a {
    display: block;
    position: relative;
}
.channel-ads ul li img {
    display: block;
}
.channel-ads ul:first-child li div:nth-child(2n) {
    margin-top: .1rem;
}
.channel-ads .channel-floor-list3 {
    border-bottom-right-radius: .5rem;
    border-bottom-left-radius: .5rem;
    overflow: hidden;
    margin-top: .1rem;
}
.channel-ads .channel-floor-list3 li {
    background-color: #F9F9F9;
    width: 33.33%;
}
.channel-ads .channel-floor-list3 a {
    padding: 0 .5rem;
    font-size: 0;
}
.channel-floor .img-area {
    background: #F9F9F9;
    border-radius: .5rem;
    position: relative;
    overflow: hidden;
}
.channel-ads .channel-floor-list3 .img-area {
    border-radius: 0;
}
.channel-floor .img-area .p-img {
    position: relative;
    height: 6.1rem;
    width: 6.1rem;
    margin: 1.05rem auto 0;
}
.channel-ads .channel-floor-list3 .img-area .p-img {
    margin-top: .85rem;
    width: 4rem;
    height: 4rem;
}
.channel-floor .img-area .p-img img {
    height: 100%;
    width: 6.1rem;
}
.channel-ads .channel-floor-list3 .img-area .p-img img {
    width: 100%;
    display: block;
}
.channel-floor .p-name {
    padding-top: .4rem;
    margin: 0 auto;
    white-space: normal;
}
.channel-ads .channel-floor-list3 .p-name {
    padding-top: .4rem;
}
.channel-floor .p-name span {
    max-height: 2.4rem;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #333333;
    font-size: .6rem;
    line-height: 1.2;
}
.channel-ads .channel-floor-list3 .p-name span {
    max-height: initial;
    line-height: 1.4;
}
.channel-floor .p-promotion {
    padding: .25rem .3rem 0;
    bottom: 1rem;
    background: none;
    color: #9B9B9B;
    font-size: .55rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-height: 1.2;
}
.channel-ads .channel-floor-list3 .p-promotion {
    padding: .2rem 0 .15rem;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
}
.channel-floor .p-price {
    padding: .15rem 0 .6rem;
}
.channel-ads .channel-floor-list3 .p-price {
    padding-bottom: .5rem;
}
.channel-ads .channel-floor-list3 .p-price b {
    color: #333333;
    font-size: .6rem;
}
#chaozhiDiv {
    padding: 0 0 .85rem;
}
.channel-floor header {
    padding: 1rem 0 .7rem;
}
.channel-floor header h2 {
    font-size: .9rem;
    color: #444444;
}
.swiper-container-free-mode > .swiper-wrapper {
    -webkit-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    margin: 0 auto;
}
.channel-floor-roll .swiper-slide {
    margin-left: .3rem;
    width: 6.2rem;
}
.channel-floor-roll .img-area {
    height: 6.4rem;
}
.channel-floor-roll .img-area .p-img {
    width: 4.2rem;
    height: 4.2rem;
    margin-top: .945rem;
}
.channel-floor .img-area .p-promotion {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-sizing: border-box;
    background: rgba(155, 155, 155, 0.1);
    color: #9B9B9B;
    height: 1.2rem;
    line-height: 2.3;
    padding: 0 .55rem 0;
}
.channel-floor-roll .img-area .p-promotion {
    height: 1rem;
    line-height: 2;
    color: #9b9b9b;
}
.channel-floor-roll .p-name {
    padding: .45rem .35rem 0;
}
.channel-floor-roll .p-price {
    padding: 0;
}
.channel-floor .p-price b {
    font-size: .65rem;
    color: #CA141D;
}
.channel-floor .p-price b del {
    padding-left: .05rem;
    color: #999999;
}
.region-area .b {
    margin: .3rem .3rem .2rem;
}
.region-area .b .img-area {
    height: 8.55rem;
    width: 100%;
}
.channel-floor .img-area.big .p-img {
    height: 8.55rem;
    width: 8.55rem;
    margin-top: 0;
}
.region-area .b .img-area .p-img {
    position: absolute;
    left: 50%;
}
.channel-floor .img-area.big .p-img img {
    width: initial;
}
.region-area .b .img-area .p-img img {
    margin-left: -100%;
    max-width: initial;
}
.channel-floor .img-area.big .p-promotion {
    background: rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 0.9);
}
.region-area .b .p-name {
    padding: .4rem .6rem 0 .5rem;
}
.region-area .b .p-name span {
    line-height: 1.43;
    font-size: .65rem;
}
.region-area.channel-floor .p-price {
    font-size: 0;
    padding: .2rem 0 .8rem;
}
.channel-floor footer {
    padding-bottom: .3rem;
}
.channel-floor footer .more {
    padding: .55rem;
    display: table;
    margin: 0 auto;
    background: url(../../assets/img/home-page/to-right.png) no-repeat right center;
    background-size: .4rem .6rem;
}
.channel-floor footer .more span {
    font-size: .7rem;
    color: #4A4A4A;
    display: table-cell;
    }
</style>