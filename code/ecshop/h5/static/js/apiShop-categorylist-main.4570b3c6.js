(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apiShop-categorylist-main"],{"0690":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("cu-custom",{attrs:{bgColor:"bg-white",isBack:!0}},[e("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),e("template",{attrs:{slot:"content"},slot:"content"},[t._v("分类列表")])],2),e("div",{staticClass:"categoryList"},[e("v-uni-scroll-view",{staticClass:"head",attrs:{"scroll-x":"true","scroll-left":t.scrollLeft}},t._l(t.navData,(function(a,n){return e("div",{key:n,class:[t.nowIndex==n?"active":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab(n,a.id)}}},[t._v(t._s(a.name))])})),0),e("div",{staticClass:"info"},[e("p",[t._v(t._s(t.currentNav.name))]),e("p",[t._v(t._s(t.currentNav.front_desc))])]),e("div",{staticClass:"sortnav"},[e("div",{class:[0==t.nowIndex_filter?"active":""],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.filterchangeTab(0)}}},[t._v("综合")]),e("div",{staticClass:"price",class:[1==t.nowIndex_filter?t.activeClass:""],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.filterchangeTab(1)}}},[t._v("价格")]),e("div",{staticClass:"price",class:[2==t.nowIndex_filter?t.activeClass:""],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.filterchangeTab(2)}}},[t._v("销量")])]),null!=t.goodsList.length?e("div",{staticClass:"list"},t._l(t.goodsList,(function(a,n){return e("div",{key:n,staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goodsDetail(a.id)}}},[e("img",{attrs:{src:a.list_pic_url,alt:""}}),e("div",{staticClass:"goods-name"},[e("div",{staticClass:"name"},[t._v(t._s(a.name))])]),"1"==a.show_marketprice?e("p",{staticStyle:{"text-decoration":"line-through"}},[t._v("￥"+t._s(a.market_price))]):t._e(),e("p",{staticClass:"price"},[t._v("￥"+t._s(a.retail_price))]),e("span",[t._v("已售："+t._s(a.virtual_sales))])])})),0):e("div",{staticClass:"none"},[t._v("数据库暂无数据...")])],1)],1)},o=[]},"083b":function(t,a,e){var n=e("092d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("33fcd86f",n,!0,{sourceMap:!1,shadowMode:!1})},"092d":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.categoryList[data-v-9b9f25c2]{width:100%}.categoryList .head[data-v-9b9f25c2]{width:100%;height:%?84?%;line-height:%?84?%;background:#fff;white-space:nowrap}.categoryList .head div[data-v-9b9f25c2]{display:inline-block;padding:0 %?20?%;margin-left:%?20?%}.categoryList .head .active[data-v-9b9f25c2]{color:#ab2b2b;height:100%;border-bottom:.02rem solid #ab2b2b;box-sizing:border-box}.categoryList .info[data-v-9b9f25c2]{text-align:center;background:#fff;padding:%?30?%;margin-top:%?20?%;margin-bottom:%?5?%}.categoryList .info p[data-v-9b9f25c2]:nth-child(1){margin-bottom:%?18?%;font-size:%?30?%;color:#333}.categoryList .info p[data-v-9b9f25c2]:nth-child(2){display:block;height:%?24?%;font-size:%?24?%;color:#999}.categoryList .sortnav[data-v-9b9f25c2]{display:-webkit-box;display:-webkit-flex;display:flex;background:#fff;width:100%;height:%?78?%;line-height:%?78?%}.categoryList .sortnav div[data-v-9b9f25c2]{width:%?250?%;height:100%;text-align:center}.categoryList .sortnav .active[data-v-9b9f25c2]{color:#b4282d}.categoryList .sortnav .price[data-v-9b9f25c2]{background:url(https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/no.png) %?165?% 50% no-repeat;background-size:%?15?% %?21?%}.categoryList .sortnav .active.desc[data-v-9b9f25c2]{background:url(https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/down.png) %?165?% 50% no-repeat;background-size:%?15?% %?21?%}.categoryList .sortnav .active.asc[data-v-9b9f25c2]{background:url(https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/up.png) %?165?% 50% no-repeat;background-size:%?15?% %?21?%}.categoryList .list[data-v-9b9f25c2]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap}.categoryList .list .item[data-v-9b9f25c2]{width:%?372.5?%;margin-bottom:%?5?%;text-align:center;background:#fff;padding:%?15?% 0}.categoryList .list .item img[data-v-9b9f25c2]{display:block;width:%?302?%;height:%?302?%;margin:0 auto}.categoryList .list .item .goods-name[data-v-9b9f25c2]{height:%?72?%;display:-webkit-box;-webkit-box-orient:vertical;text-overflow:ellipsis;overflow:hidden;-webkit-line-clamp:2;line-clamp:2;line-height:%?36?%}.categoryList .list .item .goods-name .name[data-v-9b9f25c2]{margin:%?30?% 0 %?22?% 0;text-align:center;padding:0 %?20?%;font-size:%?24?%;text-overflow:ellipsis;overflow:hidden;white-space:normal;-webkit-line-clamp:2;line-clamp:2;line-height:%?36?%}.categoryList .list .item .goods-name .name .promotion_type[data-v-9b9f25c2]{margin-right:3px;background-color:#b4282d;color:#fff}.categoryList .list .item .price[data-v-9b9f25c2]{text-align:center;font-size:%?30?%;color:#b4282d}.categoryList .none[data-v-9b9f25c2]{text-align:center;margin-top:%?100?%;color:#999}',""]),t.exports=a},2066:function(t,a,e){"use strict";e.r(a);var n=e("8a66"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},"74cb":function(t,a,e){"use strict";var n=e("083b"),i=e.n(n);i.a},"8a66":function(t,a,e){"use strict";(function(t){var n=e("4ea4");e("99af"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("96cf");var i=n(e("1da1")),o=e("8502"),c={onReachBottom:function(){if(this.page=this.page+1,this.page>this.pagetotal)return!1;this.getAllData()},created:function(){},onUnload:function(){},onLoad:function(t){this.id=t.id},mounted:function(){this.categoryId=this.id,this.getAllData(!0),uni.removeStorageSync("s_cat_id")},data:function(){return{page:1,pagetotal:"",categoryId:"",s_cat_id:"",activeClass:"",order:"",type:"",nowIndex:0,nowIndex_filter:0,goodsList:[],navData:[],currentNav:{},scrollLeft:0}},components:{},methods:{changeTab:function(t,a){var e=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.nowIndex=t,e.page=1,uni.setStorageSync("s_cat_id",a),n.next=5,(0,o.categorylistGoodsListApi)({cat_id:a,page:e.page});case 5:i=n.sent,e.categoryId=a,e.goodsList=i.data.data,e.pagetotal=i.data.pagetotal,e.currentNav=i.data.currentNav,e.nowIndex>4&&(e.scrollLeft=60*e.nowIndex);case 11:case"end":return n.stop()}}),n)})))()},filterchangeTab:function(t){var a=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.nowIndex_filter=t,a.page=1,uni.getStorageSync("s_cat_id")?a.s_cat_id=uni.getStorageSync("s_cat_id"):a.s_cat_id=a.categoryId,1==t?(a.order="asc"==a.order?"desc":"asc",a.page=1,a.type="price",a.activeClass,a.activeClass=a.order+" active"):2==t&&(a.order="asc"==a.order?"desc":"asc",a.page=1,a.type="sales",a.activeClass=a.order+" active"),e.next=6,(0,o.categorylistGoodsListApi)({cat_id:a.s_cat_id,order:a.order,type:a.type,page:a.page});case 6:n=e.sent,a.goodsList=n.data.data,a.pagetotal=n.data.pagetotal,a.currentNav=n.data.currentNav,a.nowIndex_filter>4&&(a.scrollLeft=60*a.nowIndex_filter);case 11:case"end":return e.stop()}}),e)})))()},getAllData:function(a){var e=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var i,c,s,r,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!a){n.next=16;break}return n.next=3,(0,o.categorylistNavListApi)({cat_id:e.categoryId});case 3:for(i=n.sent,e.navData=i.data.navData,t.log(e.navData),e.currentNav=i.data.currentNav,c=0;c<e.navData.length;c++)s=e.navData[c].id,s==e.currentNav.id&&(e.nowIndex=c);return e.nowIndex>4?e.scrollLeft=60*e.nowIndex:e.scrollLeft=0,n.next=11,(0,o.categorylistGoodsListApi)({cat_id:e.categoryId,page:e.page});case 11:r=n.sent,e.goodsList=r.data.data,e.pagetotal=r.data.pagetotal,n.next=20;break;case 16:return n.next=18,(0,o.categorylistGoodsListApi)({cat_id:e.categoryId,page:e.page});case 18:d=n.sent,e.goodsList=e.goodsList.concat(d.data.data);case 20:case"end":return n.stop()}}),n)})))()},goodsDetail:function(a){t.log(a),uni.navigateTo({url:"/apiShop/goods/main?id="+a})}},computed:{}};a.default=c}).call(this,e("5a52")["default"])},ec49:function(t,a,e){"use strict";e.r(a);var n=e("0690"),i=e("2066");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("74cb");var c,s=e("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"9b9f25c2",null,!1,n["a"],c);a["default"]=r.exports}}]);