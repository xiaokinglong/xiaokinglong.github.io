(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{343:function(t,e,n){"use strict";var s=n(2);e.a=new s.a},355:function(t,e,n){},397:function(t,e,n){"use strict";n(355)},409:function(t,e,n){"use strict";n.r(e);n(183);var s=n(343),u=n(105),i={data:function(){return{submitEvent:null}},computed:{enabled:function(){return Boolean(this.submitEvent)},message:function(){return this.submitEvent?"success"===this.submitEvent.result?"Thank you for subscribing!":"Request failed!":""},isError:function(){return!(!this.submitEvent||"error"!==this.submitEvent.result)}},created:function(){s.a.$on("submited",this.onSubmited)},methods:{onSubmited:function(t){var e=this;this.submitEvent=t,setTimeout((function(){e.submitEvent=null}),u.popupTimeout)}}},r=(n(397),n(10)),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"submit-popup"}},[t._t("default",(function(){return[t.enabled?n("div",{staticClass:"submit-popup",class:{error:t.isError},attrs:{"data-cy":"popup"}},[t._v("\n      "+t._s(t.message)+"\n    ")]):t._e()]}),{enabled:t.enabled,message:t.message,isError:t.isError})],2)}),[],!1,null,null,null);e.default=o.exports}}]);