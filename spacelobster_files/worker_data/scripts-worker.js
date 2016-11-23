"use strict";var Utils=function(){function a(){this._cache={},this.CONST_ADI_SUPPORT_WIDGET_CODE="63ff21be-9556-4f52-9ac9-4d441bd3dae4",this.CONST_EDITOR_WIDGET_CODE="cb6480f3-768b-4737-ab8f-10fe2e4fa2ab";try{document.domain="wix.com"}catch(a){console.warn("failed to set domain")}}return a.prototype.isInWix=function(){return _.isUndefined(this._cache.isInWix)?(this._cache.isInWix=top!==self&&document.location.search.indexOf("instance=")>=0,this._cache.isInWix):this._cache.isInWix},a.prototype.hashToInt=function(a){var b=0;if(_.isUndefined(a)||0===a.length)return b;for(var c=0;c<a.length;c++)b+=a.charCodeAt(c);return b},a.prototype.isDemo=function(){return"1"===this.parseGetParam("demo")},a.prototype.addItemHashParam=function(a,b){var c=a.indexOf("pro-gallery-item=");c>0&&(a=a.substr(0,a.indexOf("pro-gallery-item=")-1));var d="",e=a.split("#")[1];if(e||""==e){var f=e.split("?")[1];d=f?"&":"?"}else d="#?";return a+d+"pro-gallery-item="+b},a.prototype.removeItemHashParam=function(a){var b=a.indexOf("pro-gallery-item="),c=a.substr(0,b>0?b-1:a.length);return c+=c.indexOf("#")>0?"":"#"},a.prototype.parsePathParam=function(a){for(var b=location.pathname,c=b.split("/"),d=0;d<c.length;d++){var e=c[d];if(e.indexOf(a)>=0)return e}return""},a.prototype.parseGetParam=function(a,b){var c="",d=[],e=location;if(b&&(e={search:"?"+(b.split("?")[1]||""),pathname:(b.split("?")[0]||"").split("/")[1]||""}),e.search.substr(1).split("&").forEach(function(b){d=b.split("="),d[0]===a&&(c=decodeURIComponent(d[1]))}),!c){var f=decodeURIComponent(e.pathname).split("?")[1];if(!f)return"";f.split("&").forEach(function(b){d=b.split("="),d[0]===a&&(c=decodeURIComponent(d[1]))})}return c},a.prototype.parseHashParam=function(a){var b="",c=[],d=location.href.split("#")[1]||"";return d?(d.substr(1).split("&").forEach(function(d){c=d.split("="),c[0]===a&&(b=decodeURIComponent(c[1]))}),b):""},a.prototype.stripSlashes=function(a){var b="";return"string"==typeof a&&(b=a.replace(/\\\//g,"/").replace(/\\'/g,"'").replace(/\\"/g,'"').replace(/\\0/g,"\0").replace(/\\\\/g,"\\")),b},a.prototype.isSmallScreen=function(){return window.innerWidth<640||this.isMobile()},a.prototype.isVerticalScreen=function(){return window.innerWidth<window.innerHeight},a.prototype.getDevicePixelRatio=function(){return window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI},a.prototype.isWixMobile=function(){if(this.isSite()&&!_.isUndefined(this._cache.isWixMobile))return this._cache.isWixMobile;var a=this.parseGetParam("deviceType");return a?(this._cache.isWixMobile=String(a).indexOf("mobile")>=0,this._cache.isWixMobile):void 0},a.prototype.getDeviceType=function(){return this.isWixMobile()?"mobile":"desktop"},a.prototype.getProviderData=function(){if(1==window.providers.length)return window.providers[0]},a.prototype.isUserAgentMobile=function(){if(this.isSite()&&!_.isUndefined(this._cache.isUserAgentMobile))return this._cache.isUserAgentMobile;var a=!1;return function(b){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,4)))&&(a=!0)}(navigator.userAgent||navigator.vendor||window.opera),this._cache.isUserAgentMobile=a,this._cache.isUserAgentMobile},a.prototype.isMobile=function(){if(this.isSite()&&!_.isUndefined(this._cache.isMobile))return this._cache.isMobile;var a=this.isWixMobile(),b=this.isUserAgentMobile();return this._cache.isMobile=_.isUndefined(a)?b:a,this._cache.isMobile},a.prototype.isMobileViewer=function(){if(this.isSite()&&!_.isUndefined(this._cache.isMobileViewer))return this._cache.isMobileViewer;var a=this.isWixMobile(),b=this.isUserAgentMobile();return this._cache.isMobileViewer=a&&!b,this._cache.isMobileViewer},a.prototype.isiOS=function(){return _.isUndefined(this._cache.isiOS)?(this._cache.iOS=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,this._cache.iOS):this._cache.isiOS},a.prototype.isiPhone=function(){return _.isUndefined(this._cache.isiPhone)?(this._cache.isiPhone=/iPhone/.test(navigator.userAgent)&&!window.MSStream,this._cache.isiPhone):this._cache.isiPhone},a.prototype.isTouch=function(){return _.isUndefined(this._cache.isTouch)?(this._cache.isTouch="ontouchstart"in document.documentElement,this._cache.isTouch):this._cache.isTouch},a.prototype.browserIs=function(a){if(_.isUndefined(this._cache.browsers)){var b={chrome:!1,chromeIos:!1,explorer:!1,firefox:!1,safari:!1,opera:!1};b.chrome=navigator.userAgent.indexOf("Chrome")>-1,b.chromeIos=navigator.userAgent.indexOf("CriOS")>-1,b.explorer=navigator.userAgent.indexOf("MSIE")>-1,b.firefox=navigator.userAgent.indexOf("Firefox")>-1,b.safari=navigator.userAgent.indexOf("Safari")>-1,b.opera=navigator.userAgent.toLowerCase().indexOf("op")>-1,b.chrome&&b.safari&&(b.safari=!1),b.chrome&&b.opera&&(b.chrome=!1),this._cache.browsers=b}return this._cache.browsers[a]},a.prototype.getUrlPrefix=function(){return"http://"+(this.isDev()?"local.wix.com:9001":"progallery.wix.com")+"/"},a.prototype.generateUrl=function(a){var b=this.isStoreGallery(),c=this.getUrlPrefix()+a;return b&&(c+=c.indexOf("?")>-1?"&isStore=true":"?isStore=true"),c},a.prototype.getManageMediaUrl=function(){return this.generateUrl("photos.html")},a.prototype.getStoreProviderSettingsUrl=function(a){return this.generateUrl("store-settings.html")+"&providerId="+a},a.prototype.getExpandSettingsUrl=function(){return this.generateUrl("settings-expand.html")},a.prototype.isDev=function(){var a=/([0-9]{1,3}\.){3}[0-9]{1,3}:[0-9]{1,5}/;if(!_.isUndefined(this._cache.isDev))return this._cache.isDev;this._cache.isDev=!1;var b=window.location.hostname;return"local.wix.com"==b&&(this._cache.isDev=!0),b.indexOf("localhost")>=0&&(this._cache.isDev=!0),"true"==this.parseGetParam("debug")&&(this._cache.isDev=!0),null!==a.exec(b)&&(this._cache.isDev=!0),this._cache.isDev},a.prototype.isEditor=function(){return!!this.isInWix()&&(Wix.Utils&&"editor"==Wix.Utils.getViewMode())},a.prototype.isPreview=function(){return!!this.isInWix()&&(Wix.Utils&&"preview"==Wix.Utils.getViewMode())},a.prototype.isPlayground=function(){if(this.isInWix())return!1;var a=!1;try{a=top.location.href.indexOf("playground.html")>0}catch(b){a=!1}return a},a.prototype.isSite=function(){return!this.isPlayground()&&!this.isEditor()&&!this.isPreview()},a.prototype.getUUID=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"==a?b:3&b|8;return c.toString(16)})},a.prototype.hexToRgba=function(a,b){a=a.replace("#","");var c=parseInt(a.substring(0,2),16),d=parseInt(a.substring(2,4),16),e=parseInt(a.substring(4,6),16);return"rgba("+c+", "+d+", "+e+", "+b+")"},a.prototype.setStateAndLog=function(a,b,c,d){var e=this;if(this.isDev()){console.log("State Change Called ("+b+")",c);var f=_.clone(a.state);a.setState(c,function(){var c=_.clone(a.state),g=e.printableObjectsDiff(f,c,"state");_.keys(g).length>0&&console.log("State Change Completed ("+b+")",g),_.isFunction(d)&&d.bind(a)()})}else a.setState(c,function(){_.isFunction(d)&&d.bind(a)()})},a.prototype.printableObjectsDiff=function(a,b,c){void 0===c&&(c="");var d=function(a){return""==a?a="''":_.isUndefined(a)&&(a="undefined"),_.toString(a)},e=function(a,b,c){var f=_.reduce(a,function(a,f,g){return _.isEqual(f,b[g])||(_.isArray(b[g])?(f.length!=b[g].length&&(a[g+".length"]="["+f.length+"] => ["+b[g].length+"]"),a=_.merge(a,e(f,b[g],(c?c+".":"")+g))):_.isObject(b[g])?a=_.merge(a,e(f,b[g],(c?c+".":"")+g)):a[(c?c+".":"")+g]=d(f)+" => "+d(b[g])),a},{});return f};return e(a,b,c)},a.prototype.getWorker=function(){if(!_.isUndefined(this._cache.worker))return this._cache.worker;for(var a=0;a<window.parent.frames.length;a++)try{window.parent.frames[a].document.location.href.indexOf(this.getUrlPrefix()+"worker")>=0&&(this._cache.worker=window.parent.frames[a])}catch(a){}return _.isUndefined(this._cache.worker)?window:this._cache.worker},a.prototype.getGalleryByCompId=function(a){_.isUndefined(this._cache.galleries)&&(this._cache.galleries={});for(var b=0;b<window.parent.frames.length;b++)try{window.parent.frames[b].document.location.href.indexOf(this.getUrlPrefix()+"gallery")>=0&&window.parent.frames[b].document.location.href.indexOf(a)>=0&&(this._cache.galleries[a]=window.parent.frames[b])}catch(a){}return this._cache.galleries[a]},a.prototype.getViewportScaleRatio=function(){var a=this.isiPhone();return a=!1,!a&&this.isMobile()&&this.isSite()?320/this.getScreenWidth():1},a.prototype.isLandscape=function(){if(!_.isUndefined(this._cache.isLandscape))return this._cache.isLandscape;if(this.isMobile()||(this._cache.isLandscape=!1),_.isUndefined(window.orientation)){var a=window.matchMedia("(orientation: landscape)");a&&1==a.matches?this._cache.isLandscape=!0:this._cache.isLandscape=!1}else this._cache.isLandscape=90==window.orientation||window.orientation==-90;return this._cache.isLandscape},a.prototype.getScreenWidth=function(){return this.isLandscape()?Math.max(window.screen.width,window.screen.height):window.screen.width},a.prototype.getScreenHeight=function(){return this.isLandscape()?Math.min(window.screen.width,window.screen.height):window.screen.height},a.prototype.fixViewport=function(a){var b=this.isiPhone();if(b=!1,this._cache.isLandscape=void 0,!b&&this.isSite()&&this.isMobile()){console.log(a+" BEFORE: Screen width: "+window.screen.width),console.log(a+" BEFORE: window.innerWidth: "+window.innerWidth),console.log(a+" BEFORE: document.body.clientWidth: "+document.body.clientWidth);var c=320/this.getScreenWidth();document.body.style.transform="scale("+c+")",document.body.style.transformOrigin="0 0",document.body.style.width=100/c+"%",document.body.style.height=100/c+"%",console.log(a+" AFTER: Screen width: "+window.screen.width),console.log(a+" AFTER: window.innerWidth: "+window.innerWidth),console.log(a+" AFTER: document.body.clientWidth: "+document.body.clientWidth)}},a.prototype.getTopUrlParam=function(a){if(_.isUndefined(this._cache.params)&&(this._cache.params={}),_.isUndefined(this._cache.params[a]))try{this._cache.params[a]=top.location.search.replace("?","").split("&").map(function(b){var c=b.split("=");return c[0]==a?c[1]||"":""}).join("")}catch(b){this._cache.params[a]=!1,console.log("caught cross origin error")}return this._cache.params[a]},a.prototype.debounceWithContext=function(a,b,c){return void 0===c&&(c=300),_.bind(_.debounce(b,c),a)},a.prototype.openModalImp=function(a){Wix.Settings.openModal(a,"100%","100%",void 0,_.noop,!0,{overlay:"rgba(0,0,0,0)",background:"rgba(0,0,0,0)",margin:!1})},a.prototype.isStoreGallery=function(){return window.location.search.toLowerCase().indexOf("isstore")>-1},a.prototype.openStoreProviderSettings=function(a){Wix.Settings.openModal(this.getStoreProviderSettingsUrl(a),"80%",700,void 0,_.noop,!1,{overlay:"rgba(0,0,0,0)",background:"rgba(0,0,0,0)",margin:"0px 0px 0px 0px",padding:!1})},a.prototype.openManagePhotos=function(){this.openModalImp(this.getManageMediaUrl())},a.prototype.openExpandSettings=function(){this.openModalImp(this.getExpandSettingsUrl())},a.prototype.findFontsHrefs=function(){try{var a=function(a){return a.toLowerCase().includes("font")};return Array.from(top.document.styleSheets).map(function(a){return a.href}).filter(function(a){return null!=a}).filter(a)}catch(a){return console.warn("could not find fonts hrefs",a),[]}},a.prototype.isOnBoarding=function(){var a=!1;if(URI){var b=new URI(window.location.href).query(!0);a=b.viewMode&&"onboarding"===b.viewMode.toLowerCase()}return a},a.prototype.getSupportLink=function(a,b){var c="",d=this.isOnBoarding()||!a;if(a||b){var e="",f="",g="www",h=d&&b,i=!a&&b;h||i?(e=this.CONST_ADI_SUPPORT_WIDGET_CODE,f=b):a&&(e=this.CONST_EDITOR_WIDGET_CODE,f=a);var j="support/html5/widget/"+e+"/article/"+f,k=window.locale;k&&"en"!==k&&(g=k);var l=new URI("https://wix.com/").path(j).subdomain(g);c=l.toString()}return c},a.prototype.mergeDeep=function(){for(var a=function(b,c){return _.mergeWith(b,c,function(b,c){return _.isObject(b)?a(b,c):c})},b={},c=0;c<arguments.length;c++)b=a(b,arguments[c]);return b},a.prototype.postSocialTrackActivity=function(a){try{var b={type:Wix.Activities.Type.SOCIAL_TRACK,info:{type:a.activityType,channel:a.activityNetwork,itemInfo:{itemUrl:a.url,itemId:a.id,itemType:a.type.toUpperCase()}},details:{additionalInfoUrl:a.url,summary:""},contactUpdate:null},c=function(a){console.log("Activity ID: "+a.activityId+", Contact ID: "+a.contactId)},d=function(a){console.log("Failure message:",a)};Wix.Activities.postActivity(b,c,d)}catch(a){console.log("error posting activity.",a)}},a}(),utils=new Utils;