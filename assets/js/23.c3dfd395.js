(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{415:function(t,a,s){"use strict";s.r(a);var n=s(10),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"html2canvas的遇到的坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html2canvas的遇到的坑"}},[t._v("#")]),t._v(" html2canvas的遇到的坑")]),t._v(" "),s("blockquote",[s("p",[t._v("**需求点: ** 将页面生成海报,并在生成的页面中添加二维码 用户扫描二维 跳转到对应的页面中")])]),t._v(" "),s("h3",{attrs:{id:"第一个坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一个坑"}},[t._v("#")]),t._v(" 第一个坑")]),t._v(" "),s("blockquote",[s("p",[t._v("由于生成的页面中含有二维码, 一开始想到的是"),s("code",[t._v("react.qrcode")]),t._v("根据不同的连接来动态的生成 直接放到对应的位置上, 然后这时候利用"),s("code",[t._v("html2canvas")]),t._v("直接生成图片,二维码的区域为一片空白.")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("解决方案:")]),t._v(" 在的 "),s("code",[t._v("dom")]),t._v("中发现二维不是图片,而是"),s("code",[t._v("canvas")]),t._v("标签.")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("dom")]),t._v("直接使用"),s("code",[t._v("img")]),t._v("标签直接替换"),s("code",[t._v("react.qrocde")]),t._v("生成的二维码")])]),t._v(" "),s("h3",{attrs:{id:"第二个坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二个坑"}},[t._v("#")]),t._v(" 第二个坑")]),t._v(" "),s("blockquote",[s("p",[t._v("在"),s("code",[t._v("ios")]),t._v("中的某些机型直接生成卡住在 "),s("code",[t._v("clone")]),t._v("的阶段, 经过测试发现都是在"),s("code",[t._v("ios13.4")]),t._v("系统以上的机型")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("解决方案:")]),t._v(" 将"),s("code",[t._v("html2canvas")]),t._v("的版本替换成"),s("code",[t._v("1.0.0-rc.4")]),t._v("即可")])]),t._v(" "),s("h3",{attrs:{id:"第三个坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三个坑"}},[t._v("#")]),t._v(" 第三个坑")]),t._v(" "),s("blockquote",[s("p",[t._v("这个坑是在将"),s("code",[t._v("html2canvs")]),t._v("的版本降低后发现的, 在页面中一个"),s("code",[t._v("1px")]),t._v(" 分割线 颜色很深, ,这个情况在"),s("code",[t._v("安卓")]),t._v("和"),s("code",[t._v("ios")]),t._v("都会出现")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("line"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".line")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.08"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("// 解决方案: 不用opacity来控制,直接rgba\n.line")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0.08"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"第四个坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第四个坑"}},[t._v("#")]),t._v(" 第四个坑")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最好不要在参数设置 background为null 会导致出现dom填充不满的情况,会出现黑边, 最好的情况是同css来进行控制背景图")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("html2canvas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  background"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"第五个坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第五个坑"}},[t._v("#")]),t._v(" 第五个坑")]),t._v(" "),s("blockquote",[s("p",[t._v("通过"),s("code",[t._v("background-image")]),t._v("来设置背景图会导致,背景图失效的情况, 最好直接使用"),s("code",[t._v("img")]),t._v("标签来代替.")])])])}),[],!1,null,null,null);a.default=e.exports}}]);