(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{166:function(t,e,n){var content=n(168);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("19fb8024",content,!0,{sourceMap:!1})},167:function(t,e,n){"use strict";var r=n(166);n.n(r).a},168:function(t,e,n){(t.exports=n(40)(!1)).push([t.i,".container{width:60vw;margin:0 auto;padding:1rem 0}.container,.input_item,.textarea_item{font-size:1.2rem}.input__container{width:100%;margin-bottom:2rem}.input__box{width:100%}.input_item{width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:5px;padding:.5rem}.textarea_item{border:1px solid grey;width:100%;height:10rem}.submit_button__container{display:flex;justify-content:flex-end}.submit_button{background-color:#fff;padding:.5rem 2rem;font-size:1rem;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:3px}",""])},169:function(t,e,n){"use strict";n.r(e);n(39),n(21),n(22),n(12),n(28),n(60);var r=n(7),o=n(17);navigator.mediaDevices||alert("mediaDevices is unavailable");var c=null,d={};var l={recStart:function(){navigator.mediaDevices.getUserMedia({audio:!0}).then(function(t){d=t,(c=new MediaRecorder(t)).start()}).catch(function(t){console.log(t)})},stopRecording:function(){return new Promise(function(t,e){c.stop(),c.ondataavailable=function(e){t(e.data)},d.getTracks().forEach(function(track){return track.stop()})})}},m=n(74);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}var v,_={layout:"body",data:function(){return{formData:{inputText:"",inputTitle:"",inputUserName:""},previewAudioData:null}},created:function(){this.initPosts()},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(source,!0).forEach(function(e){Object(o.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(m.b)("post",["initPosts","addPostToFB"]),{addPost:function(){this.addPostToFB(this.formData),this.formData={inputText:"",inputTitle:"",inputUserName:""},this.previewAudioData=null},startRecording:function(){l.recStart()},stopRecording:(v=Object(r.a)(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.stopRecording();case 2:e=t.sent,n=URL.createObjectURL(e),this.previewAudioData=n;case 5:case"end":return t.stop()}},t,this)})),function(){return v.apply(this,arguments)})})},w=(n(167),n(16)),component=Object(w.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("p",[t._v("新規登録")]),t._v(" "),n("div",{staticClass:"input__container"},[n("div",{staticClass:"input__box"},[n("p",[t._v("タイトル")]),t._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.inputTitle,expression:"formData.inputTitle"}],staticClass:"input_item",attrs:{type:"text"},domProps:{value:t.formData.inputTitle},on:{input:function(e){e.target.composing||t.$set(t.formData,"inputTitle",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"input__box"},[n("p",[t._v("ユーザー名")]),t._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.inputUserName,expression:"formData.inputUserName"}],staticClass:"input_item",attrs:{type:"text"},domProps:{value:t.formData.inputUserName},on:{input:function(e){e.target.composing||t.$set(t.formData,"inputUserName",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"input__box"},[n("p",[t._v("内容")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.inputText,expression:"formData.inputText"}],staticClass:"textarea_item",domProps:{value:t.formData.inputText},on:{input:function(e){e.target.composing||t.$set(t.formData,"inputText",e.target.value)}}})]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){return t.startRecording()}}},[t._v("\n      start!!\n    ")]),t._v(" "),n("button",{on:{click:function(e){return t.stopRecording()}}},[t._v("\n      stop!!\n    ")]),t._v(" "),t.previewAudioData?n("audio",{attrs:{src:t.previewAudioData,controls:""}}):t._e()]),t._v(" "),n("div",{staticClass:"submit_button__container"},[n("button",{staticClass:"submit_button",on:{click:function(e){return t.addPost()}}},[t._v("\n      送信\n    ")])])])},[],!1,null,null,null);e.default=component.exports}}]);