<template>
	<section>
		<div class="app">
			<div>
				<div>
					<header  class="breadcrumb-search">
						<div  class="search">
							<div  class="swiper-container swiper-container-vertical swiper-container-ios">
								<div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, -62px, 0px);">
									<div  class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="1" style="height: 31px;">
										<input  type="text" placeholder="荣耀8X" readonly="readonly">
									</div>
									<!--<div class="swiper-slide swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index="0" style="height: 31px;">
										<input  type="text" placeholder="HUAWEI Mate 20" readonly="readonly">
									</div>
									<div  class="swiper-slide swiper-slide-active" data-swiper-slide-index="1" style="height: 31px;">
										<input  type="text" placeholder="荣耀8X" readonly="readonly">
									</div>
									<div  class="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index="0" style="height: 31px;">
										<input  type="text" placeholder="HUAWEI Mate 20" readonly="readonly">
									</div>-->
								</div>
								<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
						</div>
						<section  class="shortcut">
							<ul >
								<li >
									<a  href="/message/index" class="icon-message-black"></a>
								</li>
							</ul>
						</section>
					</header>
					<article class="category category-list">
						<section class="category-left">
							<ul>
								<li v-for="(v,i) in  list" @click="change(i)">
									<a href="javascript:;" id="1" :class="{current:num==i}"><span>{{v}}</span></a>
								</li>
								<!--<li>
									<a href="javascript:;" id="241" class=""><span>华为手机</span></a>
								</li>
								<li>
									<a href="javascript:;" id="3" class=""><span>荣耀手机</span></a>
								</li>
								<li>
									<a href="javascript:;" id="5" class=""><span>笔记本&amp;平板</span></a>
								</li>
								<li>
									<a href="javascript:;" id="7" class=""><span>智能穿戴</span></a>
								</li>
								<li>
									<a href="javascript:;" id="9" class=""><span>智能家居</span></a>
								</li>
								<li>
									<a href="javascript:;" id="11" class=""><span>专属配件</span></a>
								</li>
								<li>
									<a href="javascript:;" id="13" class=""><span>通用配件</span></a>
								</li>
								<li>
									<a href="javascript:;" id="301" class=""><span>生态产品</span></a>
								</li>
								<li>
									<a href="javascript:;" id="353" class=""><span>增值服务</span></a>
								</li>-->
							</ul>
						</section>
						<section class="category-right-box">
							<section class="category-right" v-if="num==0">
								<div>
									<div class="system-ads">
										<a href="https://m.vmall.com/product/10086983017283.html"><img alt="荣耀" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1542109566825.jpg" src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1542109566825.jpg" lazy="loaded"></a>
									</div>
									<div class="system-ads">
										<a href="https://msale.vmall.com/hwmate.html"><img alt="华为" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1540626085347.png" src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1540626085347.png" lazy="loaded"></a>
									</div>
									<div class="system-ads">
										<a href="https://msale.vmall.com/vmallsmarthome.html"><img alt="智慧生活馆" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1527668727340.jpg" src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1527668727340.jpg" lazy="loaded"></a>
									</div>
								</div>
								<div>
									<div class="system-ads category-ads">
										<div class="category-ads-list">
											<div class="swiper-container swiper-container-horizontal swiper-container-free-mode swiper-container-ios">
												<div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
													<div class="swiper-slide swiper-slide-active" style="width: 83.8806px;">
														<a href="https://m.vmall.com/product/guideDetail?param=5&amp;guideType=2"><img alt="拍照神器" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500726202455.jpg" src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500726202455.jpg" lazy="loaded"></a>
													</div>
													<div class="swiper-slide swiper-slide-next" style="width: 83.8806px;">
														<a href="https://m.vmall.com/product/guideDetail?param=7&amp;guideType=2"><img alt="旗舰机型" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500726262819.jpg" src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500726262819.jpg" lazy="loaded"></a>
													</div>
													<div class="swiper-slide" style="width: 83.8806px;">
														<a href="https://m.vmall.com/product/guideDetail?param=11&amp;guideType=2"><img alt="千元机型" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500726291458.jpg" src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500726291458.jpg" lazy="loaded"></a>
													</div>
													<div class="swiper-slide" style="width: 83.8806px;">
														<a href="https://m.vmall.com/product/guideDetail?param=13&amp;guideType=2"><img alt="商务机型" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500726312709.jpg" src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500726312709.jpg" lazy="loaded"></a>
													</div>
													<div class="swiper-slide" style="width: 83.8806px;">
														<a href="https://m.vmall.com/product/guideDetail?param=17&amp;guideType=2"><img alt="游戏达人" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500726341314.jpg" src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500726341314.jpg" lazy="loaded"></a>
													</div>
												</div><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
										</div>
									</div>
								</div>
								<div class="category-list">
									<div>
										<div class="header-title"><h3><span>热销推荐</span></h3></div>
										<div class="b">
											<ul class="clearfix">
												<li>
													<a href="https://m.vmall.com/product/10086983017283.html#10086315919643">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀Magic2" data-src="https://res.vmallres.com/pimages/product/6901443269754/428_428_1540899617711mp.png" src="https://res.vmallres.com/pimages/product/6901443269754/428_428_1540899617711mp.png" lazy="loaded"></p>
															<p class="p-name"><span>荣耀Magic2</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086885129494.html#10086511497719">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI Mate 20" data-src="https://res.vmallres.com/pimages/product/6901443260232/428_428_1539230426520mp.png" src="https://res.vmallres.com/pimages/product/6901443260232/428_428_1539230426520mp.png" lazy="loaded"></p>
															<p class="p-name"><span>HUAWEI Mate 20</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086785341226.html#10086431508342">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀10" data-src="https://res.vmallres.com/pimages/product/6901443232413/428_428_1535358175728mp.jpg" src="https://res.vmallres.com/pimages/product/6901443232413/428_428_1535358175728mp.jpg" lazy="loaded"></p>
															<p class="p-name"><span>荣耀10</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086393052224.html#10086002115494">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI Mate 20 Pro" data-src="https://res.vmallres.com/pimages/product/6901443260225/428_428_1539222514790mp.png" src="https://res.vmallres.com/pimages/product/6901443260225/428_428_1539222514790mp.png" lazy="loaded"></p>
															<p class="p-name"><span>HUAWEI Mate 20 Pro</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086286769025.html#10086339328421">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀8X" data-src="https://res.vmallres.com/pimages/product/6901443261475/428_428_1536628129335mp.jpg" src="https://res.vmallres.com/pimages/product/6901443261475/428_428_1536628129335mp.jpg" lazy="loaded"></p>
															<p class="p-name"><span>荣耀8X</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086915330134.html#10086425688564">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI P20" data-src="https://res.vmallres.com/pimages/product/6901443223459/428_428_1522652355294mp.jpg" src="https://res.vmallres.com/pimages/product/6901443223459/428_428_1522652355294mp.jpg" lazy="loaded"></p>
															<p class="p-name"><span>HUAWEI P20</span></p>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div>
										<div class="header-title"><h3><span>超值精选</span></h3></div>
										<div class="b">
											<ul class="clearfix">
												<li>
													<a href="https://m.vmall.com/product/10086211949427.html#10086058453007">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI Mate 20 X" data-src="https://res.vmallres.com/pimages/product/6901443262182/428_428_1539222271816mp.png" src="https://res.vmallres.com/pimages/product/6901443262182/428_428_1539222271816mp.png" lazy="loaded"></p>
															<p class="p-name"><span>HUAWEI Mate 20 X</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086291890006.html#10086565205556">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀9i" data-src="https://res.vmallres.com/pimages/product/2601010042602/428_428_1541564133685mp.png" src="https://res.vmallres.com/pimages/product/2601010042602/428_428_1541564133685mp.png" lazy="loaded"></p>
															<p class="p-name"><span>荣耀9i</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086316198953.html#10086579327293">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI 麦芒7" data-src="https://res.vmallres.com/pimages/product/6901443257980/428_428_1540630588357mp.png" src="https://res.vmallres.com/pimages/product/6901443257980/428_428_1540630588357mp.png" lazy="loaded"></p>
															<p class="p-name"><span>HUAWEI 麦芒7</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086883263315.html#10086812262517">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀畅玩7C" data-src="https://res.vmallres.com/pimages/product/6901443218967/428_428_1538992869225mp.png" src="https://res.vmallres.com/pimages/product/6901443218967/428_428_1538992869225mp.png" lazy="loaded"></p>
															<p class="p-name"><span>荣耀畅玩7C</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086195106339.html#10086221210400">
														<div class="pro-panels">
															<p class="p-img"><img alt="华为畅享8 Plus " data-src="https://res.vmallres.com/pimages/product/6901443224418/428_428_1521296102232mp.jpg" src="https://res.vmallres.com/pimages/product/6901443224418/428_428_1521296102232mp.jpg" lazy="loaded"></p>
															<p class="p-name"><span>华为畅享8 Plus </span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086305784772.html#10086617332760">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀 Note10" data-src="https://res.vmallres.com/pimages/product/2601010050702/428_428_1541563540767mp.jpg" src="https://res.vmallres.com/pimages/product/2601010050702/428_428_1541563540767mp.jpg" lazy="loaded"></p>
															<p class="p-name"><span>荣耀 Note10</span></p>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div>
										<div class="header-title"><h3><span>移动4G+专区</span></h3></div>
										<div class="b">
											<ul class="clearfix">
												<li>
													<a href="https://m.vmall.com/product/135859985.html#927509148">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI nova 2s" data-src="https://res.vmallres.com/pimages/product/6901443211005/428_428_1530668729541mp.jpg" src="https://res.vmallres.com/pimages/product/6901443211005/428_428_1530668729541mp.jpg" lazy="loaded"></p>
															<p class="p-name"><span>HUAWEI nova 2s</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086612047184.html#10086276179107">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀9青春版" data-src="https://res.vmallres.com/pimages/product/6901443211821/428_428_1520586237115mp.jpg" src="https://res.vmallres.com/pimages/product/6901443211821/428_428_1520586237115mp.jpg" lazy="loaded"></p>
															<p class="p-name"><span>荣耀9青春版</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086580593850.html#10086346014528">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀V10" data-src="https://res.vmallres.com/pimages/product/6901443210138/428_428_1520567761515mp.jpg" src="https://res.vmallres.com/pimages/product/6901443210138/428_428_1520567761515mp.jpg" lazy="loaded"></p>
															<p class="p-name"><span>荣耀V10</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/85827792.html#250638904">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀畅玩7X" data-src="https://res.vmallres.com/pimages/product/6901443206131/428_428_1510904889711mp.jpg" src="https://res.vmallres.com/pimages/product/6901443206131/428_428_1510904889711mp.jpg" lazy="loaded"></p>
															<p class="p-name"><span>荣耀畅玩7X</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086733534868.html#10086840957223">
														<div class="pro-panels">
															<p class="p-img"><img alt="华为畅享8" data-src="https://res.vmallres.com/pimages/product/6901443218622/428_428_1521287060323mp.jpg" src="https://res.vmallres.com/pimages/product/6901443218622/428_428_1521287060323mp.jpg" lazy="loaded"></p>
															<p class="p-name"><span>华为畅享8</span></p>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</section>
							<section class="category-right" v-if="num==1">
								<div class="category-list">
									<div>
										<div class="header-title">
											<h3><span>精选手机</span></h3></div>
										<div class="b">
											<ul class="clearfix">
												<li>
													<a href="https://m.vmall.com/product/10086885129494.html#10086511497719">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI Mate 20" data-src="https://res.vmallres.com/pimages/product/6901443260232/428_428_1539230426520mp.png" src="https://res.vmallres.com/pimages/product/6901443260232/428_428_1539230426520mp.png" lazy="loaded"></p>
															<p class="p-name"><span>HUAWEI Mate 20</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086393052224.html#10086002115494">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI Mate 20 Pro" data-src="https://res.vmallres.com/pimages/product/6901443260225/428_428_1539222514790mp.png" src="https://res.vmallres.com/pimages/product/6901443260225/428_428_1539222514790mp.png" lazy="loaded"></p>
															<p class="p-name"><span>HUAWEI Mate 20 Pro</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086211949427.html#10086058453007">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI Mate 20 X" data-src="https://res.vmallres.com/pimages/product/6901443262182/428_428_1539222271816mp.png" src="https://res.vmallres.com/pimages/product/6901443262182/428_428_1539222271816mp.png" lazy="loaded"></p>
															<p class="p-name"><span>HUAWEI Mate 20 X</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086550008459.html#10086031103555">
														<div class="pro-panels">
															<p class="p-img">
																<img alt="华为畅享9 Plus" data-src="https://res.vmallres.com/pimages/product/6901443263752/428_428_1538100198239mp.jpg" src="https://res.vmallres.com/pimages/product/6901443263752/428_428_1538100198239mp.jpg" lazy="loaded"></p>
															<p class="p-name">
																<span>华为畅享9 Plus</span>
															</p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086568474763.html#10086795400652">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI nova 3" data-src="https://res.vmallres.com/pimages/product/6901443250592/428_428_1531368626642mp.jpg" src="https://res.vmallres.com/pimages/product/6901443250592/428_428_1531368626642mp.jpg" lazy="loaded"></p>
															<p class="p-name"><span>HUAWEI nova 3</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086915330134.html#10086071672264">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI P20" data-src="https://res.vmallres.com/pimages/product/6901443224104/428_428_1522652416476mp.jpg" src="https://res.vmallres.com/pimages/product/6901443224104/428_428_1522652416476mp.jpg" lazy="loaded"></p>
															<p class="p-name"><span>HUAWEI P20</span></p>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div>
										<div class="header-title">
											<h3><span>手机分类</span></h3></div>
										<div class="b">
											<ul class="clearfix">
												<li>
													<a href="https://m.vmall.com/category/detail-285-285?name=HUAWEI P系列">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI P系列" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1522200315077.jpg" src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1522200315077.jpg" lazy="loaded"></p>
															<p class="p-name"><span>HUAWEI P系列</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-76-76?name=HUAWEI Mate系列">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI Mate系列" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1539770358008.png" src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1539770358008.png" lazy="loaded"></p>
															<p class="p-name"><span>HUAWEI Mate系列</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-277-277?name=HUAWEI nova系列">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI nova系列" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1522314424430.jpg" src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1522314424430.jpg" lazy="loaded"></p>
															<p class="p-name"><span>HUAWEI nova系列</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-81-81?name=HUAWEI 麦芒系列">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI 麦芒系列" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1536722896777.jpg" src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1536722896777.jpg" lazy="loaded"></p>
															<p class="p-name"><span>HUAWEI 麦芒系列</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-275-275?name=华为畅享系列">
														<div class="pro-panels">
															<p class="p-img"><img alt="华为畅享系列" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1522307142377.jpg" src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1522307142377.jpg" lazy="loaded"></p>
															<p class="p-name"><span>华为畅享系列</span></p>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</section>
							<section class="category-right"  v-if="num==2">
								<div class="category-list">
									<div>
										<div class="header-title">
											<h3><span>精选手机</span></h3></div>
										<div class="b">
											<ul class="clearfix">
												<li>
													<a href="https://m.vmall.com/product/10086983017283.html#10086315919643">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀Magic2" data-src="https://res.vmallres.com/pimages/product/6901443269754/428_428_1540899617711mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀Magic2</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086785341226.html#10086431508342">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀10" data-src="https://res.vmallres.com/pimages/product/6901443232413/428_428_1535358175728mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀10</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086286769025.html#10086339328421">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀8X" data-src="https://res.vmallres.com/pimages/product/6901443261475/428_428_1536628129335mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀8X</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086291890006.html#10086671638910">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀9i " data-src="https://res.vmallres.com/pimages/product/6901443240708/428_428_1538987967606mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀9i </span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/570379791.html#909703834">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀V10" data-src="https://res.vmallres.com/pimages/product/6901443210237/428_428_1511747458684mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀V10</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086576787089.html#10086729542271">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀Play" data-src="https://res.vmallres.com/pimages/product/2601010042502/428_428_1541572039970mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀Play</span></p>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div>
										<div class="header-title">
											<h3><span>手机分类</span></h3></div>
										<div class="b">
											<ul class="clearfix">
												<li>
													<a href="https://m.vmall.com/category/detail-75-75?name=荣耀系列">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀系列" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1541065472948.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀系列</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-77-77?name=荣耀畅玩系列">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀畅玩系列" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1539593385317.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀畅玩系列</span></p>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</section>
							<section class="category-right"  v-if="num==3">
								<div class="category-list">
									<div>
										<div class="header-title">
											<h3><span>精选笔记本</span></h3></div>
										<div class="b">
											<ul class="clearfix">
												<li>
													<a href="https://m.vmall.com/product/10086000689735.html#10086514290855">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI MateBook X Pro" data-src="https://res.vmallres.com/pimages/product/6901443227792/428_428_1539915415114mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>HUAWEI MateBook X Pro</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086350349834.html#10086165908070">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀MagicBook" data-src="https://res.vmallres.com/pimages/product/6901443233212/428_428_1538989328772mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀MagicBook</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/21046116.html#882934630">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI MateBook D" data-src="https://res.vmallres.com/pimages/product/6901443184262/428_428_1495006446190mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>HUAWEI MateBook D</span></p>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div>
										<div class="header-title">
											<h3><span>精选平板</span></h3></div>
										<div class="b">
											<ul class="clearfix">
												<li>
													<a href="https://m.vmall.com/product/10086893318670.html#10086612323957">
														<div class="pro-panels">
															<p class="p-img"><img alt="华为平板 M5 青春版 10.1英寸" data-src="https://res.vmallres.com/pimages/product/6901443268023/428_428_1539856424056mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>华为平板 M5 青春版 10.1英寸</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086527872485.html#10086466203116">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀平板5" data-src="https://res.vmallres.com/pimages/product/6901443265206/428_428_1539243364035mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀平板5</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086749611489.html#10086567817541">
														<div class="pro-panels">
															<p class="p-img"><img alt="华为畅享平板 10.1英寸" data-src="https://res.vmallres.com/pimages/product/6901443267514/428_428_1539854934680mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>华为畅享平板 10.1英寸</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/516255415.html#553104015">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀Waterplay" data-src="https://res.vmallres.com/pimages/product/6901443204526/428_428_1506671611280mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀Waterplay</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086868573443.html#10086385882893">
														<div class="pro-panels">
															<p class="p-img"><img alt="华为平板 M5 10.8英寸" data-src="https://res.vmallres.com/pimages/product/6901443223138/428_428_1531379309228mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>华为平板 M5 10.8英寸</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/405225095.html#852174199">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀畅玩平板2 9.6英寸" data-src="https://res.vmallres.com/pimages/product/6901443192458/428_428_1539913537863mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀畅玩平板2 9.6英寸</span></p>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div>
										<div class="header-title">
											<h3><span>笔记本&amp;平板分类</span></h3></div>
										<div class="b">
											<ul class="clearfix">
												<li>
													<a href="https://m.vmall.com/category/detail-41-41?name=平板电脑">
														<div class="pro-panels">
															<p class="p-img"><img alt="平板电脑" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500716674404.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>平板电脑</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-42-42?name=笔记本电脑">
														<div class="pro-panels">
															<p class="p-img"><img alt="笔记本电脑" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500716688182.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>笔记本电脑</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-317-317?name=笔记本配件">
														<div class="pro-panels">
															<p class="p-img"><img alt="笔记本配件" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500716702627.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>笔记本配件</span></p>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</section>
							<section class="category-right"  v-if="num==4">
								<div class="category-list">
									<div>
										<div class="header-title">
											<h3><span>精选智能穿戴</span></h3></div>
										<div class="b">
											<ul class="clearfix">
												<li>
													<a href="https://m.vmall.com/product/10086653392602.html#10086354651877">
														<div class="pro-panels">
															<p class="p-img"><img alt="华为儿童手表 3 Pro" data-src="https://res.vmallres.com/pimages/product/6901443254323/428_428_1542266481382mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>华为儿童手表 3 Pro</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086268042691.html#10086253509221">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀手表" data-src="https://res.vmallres.com/pimages/product/6901443267248/428_428_1540544249192mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀手表</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086572258093.html#10086972979696">
														<div class="pro-panels">
															<p class="p-img"><img alt="华为手环 B5" data-src="https://res.vmallres.com/pimages/product/6901443239160/428_428_1539569436793mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>华为手环 B5</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086686072684.html#10086455419044">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀手环4 标准版" data-src="https://res.vmallres.com/pimages/product/6901443262472/428_428_1540628828647mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀手环4 标准版</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/270976970.html#976288056">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI WATCH 2 Pro" data-src="https://res.vmallres.com/pimages/product/6901443204212/428_428_1507769117117mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>HUAWEI WATCH 2 Pro</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086913521308.html#10086949141018">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀手环4 Running版" data-src="https://res.vmallres.com/pimages/product/6901443262977/428_428_1536202224705mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀手环4 Running版</span></p>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div>
										<div class="header-title">
											<h3><span>智能穿戴分类</span></h3></div>
										<div class="b">
											<ul class="clearfix">
												<li>
													<a href="https://m.vmall.com/category/detail-241-241?name=手环">
														<div class="pro-panels">
															<p class="p-img"><img alt="手环" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1503989859376.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>手环</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-247-247?name=手表">
														<div class="pro-panels">
															<p class="p-img"><img alt="手表" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500717013538.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>手表</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-329-329?name=VR">
														<div class="pro-panels">
															<p class="p-img"><img alt="VR" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1516844622106.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>VR</span></p>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</section>
							<section class="category-right"  v-if="num==5">
								<div class="category-list">
									<div>
										<div class="header-title">
											<h3><span>精选智能家居</span></h3></div>
										<div class="b">
											<ul class="clearfix">
												<li>
													<a href="https://m.vmall.com/product/10086423109158.html#10086794601109">
														<div class="pro-panels">
															<p class="p-img"><img alt="华为AI音箱" data-src="https://res.vmallres.com/pimages/product/6901443266425/428_428_1541666262523mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>华为AI音箱</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086007028117.html#10086094709326">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀路由 X2" data-src="https://res.vmallres.com/pimages/product/6901443258871/428_428_1539912533064mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀路由 X2</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086500145070.html#10086061866500">
														<div class="pro-panels">
															<p class="p-img"><img alt="华为子母路由 Q2" data-src="https://res.vmallres.com/pimages/product/6901443219940/428_428_1521184530843mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>华为子母路由 Q2</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086958063836.html#10086943604110">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀路由2S" data-src="https://res.vmallres.com/pimages/product/6901443257485/428_428_1534918214626mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀路由2S</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/23860218.html#136877951">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀路由X1 增强版" data-src="https://res.vmallres.com/pimages/product/6901443181803/428_428_1538985163609mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀路由X1 增强版</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/190355030.html#10904718">
														<div class="pro-panels">
															<p class="p-img"><img alt="华为路由 A1 畅享版" data-src="https://res.vmallres.com/pimages/product/6901443169702/428_428_1492767526549mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>华为路由 A1 畅享版</span></p>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div>
										<div class="header-title">
											<h3><span>智能家居分类</span></h3></div>
										<div class="b">
											<ul class="clearfix">
												<li>
													<a href="https://m.vmall.com/category/detail-45-45?name=路由器">
														<div class="pro-panels">
															<p class="p-img"><img alt="路由器" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1527753308524.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>路由器</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-263-263?name=子母/分布式路由">
														<div class="pro-panels">
															<p class="p-img"><img alt="子母/分布式路由" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500717371446.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>子母/分布式路由</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-44-44?name=电力猫/wifi放大器">
														<div class="pro-panels">
															<p class="p-img"><img alt="电力猫/wifi放大器" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500717426499.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>电力猫/wifi放大器</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-97-97?name=随行wifi">
														<div class="pro-panels">
															<p class="p-img"><img alt="随行wifi" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500717445480.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>随行wifi</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-46-46?name=电视盒子">
														<div class="pro-panels">
															<p class="p-img"><img alt="电视盒子" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1516593258642.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>电视盒子</span></p>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</section>
							<section class="category-right"  v-if="num==6">
								<div class="category-list">
									<div>
										<div class="header-title">
											<h3><span>精选专属配件</span></h3></div>
										<div class="b">
											<ul class="clearfix">
												<li>
													<a href="https://m.vmall.com/product/10086366473453.html#10086512383861">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI Mate 20 Pro 硅胶保护壳" data-src="https://res.vmallres.com/pimages/product/6901443252275/428_428_1539248897253mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>HUAWEI Mate 20 Pro 硅胶保护壳</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/862627470.html#177748386">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀V10 PU磁吸保护套" data-src="https://res.vmallres.com/pimages/product/6901443208760/428_428_1512723194616mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀V10 PU磁吸保护套</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086349114241.html#10086288019034">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI P20智能视窗保护套" data-src="https://res.vmallres.com/pimages/product/6901443214075/428_428_1522229463300mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>HUAWEI P20智能视窗保护套</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086121296044.html#10086273209340">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀平板5 屏幕保护膜" data-src="https://res.vmallres.com/pimages/product/6901443250332/428_428_1538205297131mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀平板5 屏幕保护膜</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086974424499.html#10086229642128">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI P20 Pro 星钻保护壳" data-src="https://res.vmallres.com/pimages/product/6901443231881/428_428_1541993816365mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>HUAWEI P20 Pro 星钻保护壳</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/100667556.html#249481832">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI WATCH 2 表带" data-src="https://res.vmallres.com/pimages/product/GB3101040001201/428_428_1515374504627mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>HUAWEI WATCH 2 表带</span></p>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div>
										<div class="header-title">
											<h3><span>专属配件分类</span></h3></div>
										<div class="b">
											<ul class="clearfix">
												<li>
													<a href="https://m.vmall.com/category/detail-48-48?name=保护壳">
														<div class="pro-panels">
															<p class="p-img"><img alt="保护壳" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1540607847559.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>保护壳</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-49-49?name=保护套">
														<div class="pro-panels">
															<p class="p-img"><img alt="保护套" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1540607817580.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>保护套</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-50-50?name=贴膜">
														<div class="pro-panels">
															<p class="p-img"><img alt="贴膜" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1511940620204.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>贴膜</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-223-223?name=盒子专属配件">
														<div class="pro-panels">
															<p class="p-img"><img alt="盒子专属配件" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500717572048.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>盒子专属配件</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-225-225?name=表带">
														<div class="pro-panels">
															<p class="p-img"><img alt="表带" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1523171345598.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>表带</span></p>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</section>
							<section class="category-right" v-if="num==7">
								<div class="category-list">
									<div>
										<div class="header-title">
											<h3><span>精选配件</span></h3></div>
										<div class="b">
											<ul class="clearfix">
												<li>
													<a href="https://m.vmall.com/product/10086335437779.html#10086738650172">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀FlyPods无线耳机" data-src="https://res.vmallres.com/pimages/product/6901443270521/428_428_1540862995742mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀FlyPods无线耳机</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/936223974.html#534967719">
														<div class="pro-panels">
															<p class="p-img"><img alt="华为智能体脂秤" data-src="https://res.vmallres.com/pimages/product/6901443207077/428_428_1512699241768mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>华为智能体脂秤</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/875753311.html#189161731">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀xSport 运动蓝牙耳机" data-src="https://res.vmallres.com/pimages/product/6901443174256/428_428_1489548822739mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀xSport 运动蓝牙耳机</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/706470980.html#937100113">
														<div class="pro-panels">
															<p class="p-img"><img alt="华为10000mAh 移动电源" data-src="https://res.vmallres.com/pimages/product/6901443158379/428_428_1484107261446mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>华为10000mAh 移动电源</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086687727933.html#10086858982353">
														<div class="pro-panels">
															<p class="p-img"><img alt="华为无线充电器" data-src="https://res.vmallres.com/pimages/product/6901443259298/428_428_1540802820764mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>华为无线充电器</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/194128141.html#553811697">
														<div class="pro-panels">
															<p class="p-img"><img alt="荣耀体脂秤" data-src="https://res.vmallres.com/pimages/product/6901443173129/428_428_1538985401864mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>荣耀体脂秤</span></p>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div>
										<div class="header-title">
											<h3><span>通用配件分类</span></h3></div>
										<div class="b">
											<ul class="clearfix">
												<li>
													<a href="https://m.vmall.com/category/detail-56-56?name=移动电源">
														<div class="pro-panels">
															<p class="p-img"><img alt="移动电源" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500717632625.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>移动电源</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-229-229?name=耳机">
														<div class="pro-panels">
															<p class="p-img"><img alt="耳机" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500717645088.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>耳机</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-58-58?name=充电器/线材">
														<div class="pro-panels">
															<p class="p-img"><img alt="充电器/线材" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500717672494.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>充电器/线材</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-231-231?name=自拍杆/支架">
														<div class="pro-panels">
															<p class="p-img"><img alt="自拍杆/支架" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500717724267.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>自拍杆/支架</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-55-55?name=音箱">
														<div class="pro-panels">
															<p class="p-img"><img alt="音箱" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500717750877.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>音箱</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-83-83?name=U盘/存储卡">
														<div class="pro-panels">
															<p class="p-img"><img alt="U盘/存储卡" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1540606483683.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>U盘/存储卡</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-235-235?name=摄像机/镜头">
														<div class="pro-panels">
															<p class="p-img"><img alt="摄像机/镜头" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1510221193787.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>摄像机/镜头</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-239-239?name=智能硬件">
														<div class="pro-panels">
															<p class="p-img"><img alt="智能硬件" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1512641984553.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>智能硬件</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-237-237?name=生活周边">
														<div class="pro-panels">
															<p class="p-img"><img alt="生活周边" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1500717893806.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>生活周边</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-568-568?name=取卡针">
														<div class="pro-panels">
															<p class="p-img"><img alt="取卡针" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1540966867912.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>取卡针</span></p>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</section>
							<section class="category-right"  v-if="num==8">
								<div class="category-list">
									<div>
										<div class="header-title">
											<h3><span>精选智能产品</span></h3></div>
										<div class="b">
											<ul class="clearfix">
												<li>
													<a href="https://m.vmall.com/product/10086312412951.html#10086619231827">
														<div class="pro-panels">
															<p class="p-img"><img alt="华为智选全效空气净化器" data-src="https://res.vmallres.com/pimages/product/GB3102150050701/428_428_1540988079208mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>华为智选全效空气净化器</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086203472371.html#10086231514149">
														<div class="pro-panels">
															<p class="p-img"><img alt="华为智选读写台灯" data-src="https://res.vmallres.com/pimages/product/GB3102150039901/428_428_1540952549939mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>华为智选读写台灯</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086833471847.html#10086066461369">
														<div class="pro-panels">
															<p class="p-img"><img alt="海雀智能摄像头H1" data-src="https://res.vmallres.com/pimages/product/GB3102150043501/428_428_1541644086994mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>海雀智能摄像头H1</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086045171328.html#10086749233933">
														<div class="pro-panels">
															<p class="p-img"><img alt="55度智能降温杯" data-src="https://res.vmallres.com/pimages/product/GB3102160013001/428_428_1541641100313mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>55度智能降温杯</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086132466242.html#10086361738676">
														<div class="pro-panels">
															<p class="p-img"><img alt="科沃斯扫地机器人D36F" data-src="https://res.vmallres.com/pimages/product/GB3102150001201/428_428_1541761166239mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>科沃斯扫地机器人D36F</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086541811502.html#10086705859297">
														<div class="pro-panels">
															<p class="p-img"><img alt="极米无屏电视Z6X" data-src="https://res.vmallres.com/pimages/product/GB3102150042701/428_428_1539572631283mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>极米无屏电视Z6X</span></p>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div>
										<div class="header-title">
											<h3><span>生态产品分类</span></h3></div>
										<div class="b">
											<ul class="clearfix">
												<li>
													<a href="https://m.vmall.com/category/detail-371-371?name=照明">
														<div class="pro-panels">
															<p class="p-img"><img alt="照明" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1520582668647.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>照明</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-421-421?name=清洁">
														<div class="pro-panels">
															<p class="p-img"><img alt="清洁" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1525772175202.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>清洁</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-423-423?name=节能">
														<div class="pro-panels">
															<p class="p-img"><img alt="节能" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1532071108316.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>节能</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-373-373?name=环境">
														<div class="pro-panels">
															<p class="p-img"><img alt="环境" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1541065506702.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>环境</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-379-379?name=安防">
														<div class="pro-panels">
															<p class="p-img"><img alt="安防" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1541386227925.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>安防</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-403-403?name=健康">
														<div class="pro-panels">
															<p class="p-img"><img alt="健康" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1541386135905.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>健康</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-377-377?name=厨电">
														<div class="pro-panels">
															<p class="p-img"><img alt="厨电" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1534142703813.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>厨电</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-407-407?name=影音">
														<div class="pro-panels">
															<p class="p-img"><img alt="影音" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1532070938839.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>影音</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-375-375?name=卫浴">
														<div class="pro-panels">
															<p class="p-img"><img alt="卫浴" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1525772203363.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>卫浴</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/category/detail-381-381?name=其他">
														<div class="pro-panels">
															<p class="p-img"><img alt="其他" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1530670587228.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>其他</span></p>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</section>
							<section class="category-right"  v-if="num==9">
								<div>
									<div class="system-ads">
										<a href="https://coop.aihuishou.com/huawei?app=false"><img alt="以旧换新" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1522831589734.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></a>
									</div>
									<div class="system-ads">
										<a href="https://m.vmall.com/product/10086344499475.html#10086230774569"><img alt="礼品包装" data-src="https://res.vmallres.com/pimages/common/mobile/frontCategory/1522831666286.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></a>
									</div>
								</div>
								<div class="category-list">
									<div>
										<div class="header-title">
											<h3><span>礼品包装精选商品</span></h3></div>
										<div class="b">
											<ul class="clearfix">
												<li>
													<a href="https://m.vmall.com/product/10086915330134.html#10086100716467">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI P20" data-src="https://res.vmallres.com/pimages/product/6901443237784/428_428_1525340794041mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>HUAWEI P20</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/10086471194207.html#10086994950476">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI P20 Pro" data-src="https://res.vmallres.com/pimages/product/6901443224098/428_428_1522651164449mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>HUAWEI P20 Pro</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/396602535.html#894429566">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI Mate 10" data-src="https://res.vmallres.com/pimages/product/6901443201990/428_428_1539940869900mp.png" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>HUAWEI Mate 10</span></p>
														</div>
													</a>
												</li>
												<li>
													<a href="https://m.vmall.com/product/357339492.html#120151168">
														<div class="pro-panels">
															<p class="p-img"><img alt="HUAWEI Mate 10 Pro" data-src="https://res.vmallres.com/pimages/product/2601010009803/428_428_1518318882828mp.jpg" src="https://res.vmallres.com/nwap/20181015/staticm/img/mask.png" lazy="loading"></p>
															<p class="p-name"><span>HUAWEI Mate 10 Pro</span></p>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div>
									</div>
								</div>
							</section>-->

						</section>
					</article>
				</div>
			</div>
		</div>
	</div>
		
	</section>
</template>
<script>
	export default {
		data(){
			return{
				num:0,
				list:['为您推荐','华为手机','荣耀手机','笔记本&平板','智能穿戴','智能家居','专属配件','通用配件','生态产品','增值服务']
			}
		},
		mounted(){
			title.innerHTML="分类 - 华为商城官网"
		},
		methods:{
			change(a){
				this.num=a;
			}
		}
}
</script>
<style scoped>
.breadcrumb-search{
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
.breadcrumb-search .search {
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
.breadcrumb-search .swiper-container {
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
.swiper-container-vertical > .swiper-wrapper {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
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
input{
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: .72rem;
    -webkit-border-radius: .72rem;
    font-size: .7rem;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #FFFFFF;
    width: 3.43rem;
    height: 1.72rem;
    padding: 0 .6rem;
    text-align: center;
    color: #888;
    vertical-align: middle;
}
.breadcrumb-search .search input {
    font-size: 0.65rem;
    color: #333333;
    width: 100%;
    height: 1.55rem;
    line-height: 1.55rem;
    text-align: left;
    border-radius: 0.2rem;
    -webkit-border-radius: 0.2rem;
    background-color: transparent;
    border: 0;
    padding: 0 0.4rem 0 1.6rem;
}
.swiper-container .swiper-notification {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    z-index: -1000;
}
.shortcut {
    padding: 0 0.4rem;
}
.shortcut ul {
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
.shortcut ul li {
    position: relative;
    text-align: center;
}
.icon-message-black {
    background: transparent url(../../assets/img/home-page/news.png) scroll no-repeat;
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
.category {
    position: fixed;
    top: 2rem;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 720px;
    margin: 0 auto;
    background-color: #fff;
}
.category .category-left {
    width: 23.62%;
    height: 100%;
    border-right: 1px solid #eaeaea;
    overflow-y: scroll;
    overflow-x: hidden;
    float: left;
    position: relative;
    z-index: 9;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    box-shadow: 0 0 3px #eaeaea;
    -webkit-box-shadow: 0 0 3px #eaeaea;
    -moz-box-shadow: 0 0 3px #eaeaea;
}
.category .category-left ul {
    padding-bottom: 2.45rem;
    position: relative;
    min-height: 91.5%;
}
.category .category-left ul a {
    height: 2.25rem;
    border-bottom: 1px solid #eaeaea;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
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
    padding: 0 .3rem;
}
.category .category-left ul a.current {
    color: #e01d20!important;
    z-index: 10;
    overflow: hidden;
    border-left: 2px solid #ca141d;
    background-color: #f6f6f6;
}
.category .category-left ul a span {
    font-size: .65rem;
    font-weight: bold;
    line-height: 1.3;
    text-align: center;
    width: 100%;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    position: relative;
    top: .09rem;
}
.category .category-right-box {
    width: 76.38%;
    float: left;
    height: 100%;
    z-index: 8;
}
.category .category-right-box .category-right {
    width: 100%;
    height: 100%;
    overflow: auto;
}
.category .category-right-box .category-right .category-list {
    margin-bottom: 2.5rem;
}
.system-ads {
    margin-top: .6rem;
}
.category .category-right-box .category-right .system-ads img {
    width: 100%;
}
.category .category-right-box .category-right .system-ads {
    padding: 0 .25rem;
    margin-top: .25rem;
    position: relative;
    top: 0;
}
.category .category-right-box .category-right .category-ads {
    padding: 0 0 0 .25rem;
}
.category .category-right-box .category-right .category-ads .swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
.swiper-container-free-mode > .swiper-wrapper {
    -webkit-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    margin: 0 auto;
}
.swiper-container .swiper-notification {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    z-index: -1000;
}
.category .category-right-box .category-right .category-list div .header-title {
    padding: .55rem 0 .6rem;
    text-align: center;
    overflow: hidden;
}
.category .category-right-box .category-right .category-list div .header-title h3 {
    display: -webkit-inline-box;
    display: -moz-inline-box;
    display: -ms-inline-flexbox;
    display: inline-box;
    display: -webkit-inline-flex;
    display: inline-flex;
    padding: 0 2rem;
    position: relative;
}
.category .category-right-box .category-right .category-list div .header-title h3:after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #eaeaea;
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -2px;
}
.category .category-right-box .category-right .category-list div .header-title h3 span {
    font-size: .65rem;
    line-height: 1.2;
    font-weight: bold;
    background-color: #fff;
    position: relative;
    z-index: 2;
    padding: 0 .5rem;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.category .category-right-box .category-right .category-list div .b {
    padding: 0 .35rem;
}
.category .category-right-box .category-right .category-list div .b ul {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
}
.category .category-right-box .category-right .category-list div .b ul li {
    width: 33.33%;
    position: relative;
    display: block;
    float: left;
}
.category .category-right-box .category-right .category-list div .b ul li .pro-panels {
    border-top: 0;
    padding: .45rem 0 .4rem;
    width: 100%;
    box-sizing: border-box;
}
.category .category-right-box .category-right .category-list div .b ul li .pro-panels .p-img {
    width: 2.75rem;
    height: 2.75rem;
    margin: 0 auto;
    float: none;
    position: relative;
    padding: .1rem 0;
}
.category .category-right-box .category-right .category-list div .b ul li .pro-panels .p-img img {
    border: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    vertical-align: top;
    overflow: hidden;
    max-width: 100%;
}
.category .category-right-box .category-right .category-list div .b ul li .pro-panels .p-name {
    color: #333;
    max-height: 1.9rem;
    line-height: 1;
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
    margin-top: .2rem;
    height: 1.3rem;
    padding: 0 .3rem;
}
.category .category-right-box .category-right .category-list div .b ul li .pro-panels .p-name span {
    font-size: .55rem;
    line-height: 1.2;
    max-height: 1.3rem;
    color: #333;
    text-align: center;
    width: 100%;
    position: relative;
    top: 0;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>