define("widgets/utils/wixCodeRemoteModelService",["lodash","RemoteModelInterface","utils","siteUtils"],function(a,b,c,d){"use strict";var e=function(e,f,g,h,i){var j=new b(undefined,h);a.forEach(f,function(a){j.addComponent(a,c.widgetModel.getCompModel(e,a))},this);j.addPagesData(g);j.addConnections(c.widgetModel.getConnectionsModel(e,f,i));j.addEventTypes(d.constants.ACTION_TYPES);return j};var f=function(a,c){return new b(a,c)};return{generateRemoteModelInterface:e,createRemoteModelInterface:f}});define("widgets/core/widgetDataHelper",["lodash"],function(a){"use strict";return{registerWidgetHandler:function(b,c){a.set(b,"widgetHandler",c)},getWidgetHandler:function(b){return a.get(b,"widgetHandler")}}});define("widgets/core/dataResolvers/pageLinkDataResolver",["lodash","coreUtils","experiment"],function(a,b,c){"use strict";function d(b,c){if(b==="#"){return c.getPrimaryPageId()}var d=c.findDataOnMasterPageByPredicate(function(a){return a.pageUriSEO===b.replace("#","")});return a.get(d,"id",b)}function e(b,c){var d=a.compact(b.replace(/^#/,"").split("/"));var e=a.findKey(c.getRouters(),{prefix:d[0]});if(e){return{type:"DynamicPageLink",routerId:e,innerRoute:d.slice(1).join("/")}}}function f(b){var c=[];var d=a.get(b,"link");if(d){c.push(d)}var e=a.get(b,"linkList");if(e){c=c.concat(e)}a.forEach(b,function(b){if(a.isObject(b)){c=c.concat(f(b))}});return c}function g(b,c){var d=a.reduce(c.columns,function(a,b){if(b.linkPath){a.push(b.linkPath)}return a},[]);var e=[];if(d.length>0){a.forEach(b.rows,function(b){a.forEach(d,function(c){var d=c+"_linkObj";var f=a.get(b,d);if(!a.isUndefined(f)){e.push(f)}})})}return e}function h(h,i,j){var k=i.getSiteData();var l;if(h.type==="Grid"){l=g(h,j)}else{l=f(h)}a.forEach(l,function(f){var g=f.type;var h=f.pageId;if(g==="PageLink"||g==="AnchorLink"){if(a.isString(h)){if(c.isOpen("sv_dpages")){var i=e(f.pageId,k);if(i){a.assign(f,i);delete f.pageId}else{f.pageId=d(h,k)}}else{f.pageId=d(h,k)}}var j=f.anchorDataId;if(a.isString(j)&&!a.includes(b.siteConstants.SAME_PAGE_SCROLL_ANCHORS,j)&&!a.startsWith(j,"dataItem")){h=a.isString(f.pageId)?f.pageId:f.pageId.id;var l=b.scrollAnchors.getAnchor(j,h,k);f.anchorDataId=l.dataQuery}}});return h}return{resolve:h}});define("widgets/core/dataResolvers/widgetDataResolvers",["lodash","widgets/core/dataResolvers/pageLinkDataResolver"],function(a,b){"use strict";var c=[b];return{resolve:function(b,d,e){a.forEach(c,function(a){b=a.resolve(b,d,e)});return b}}});define("widgets/core/modelBuilderDataHelper",["lodash"],function(a){"use strict";var b={PAGE:"Page",POPUP:"Popup"};function c(a){return{fetchData:a.getDataByQuery.bind(a),fetchPagesData:a.getPagesDataForRmi.bind(a)}}function d(c){if(a.get(c,"type")!=="Page"){return}return a.get(c,"isPopup")?b.POPUP:b.PAGE}return{getApi:c,getWidgetType:d,WIDGET_TYPES:b}});define("widgets/core/modelBuilder",["lodash","coreUtils","widgets/utils/wixCodeRemoteModelService","widgets/core/modelBuilderDataHelper"],function(a,b,c,d){"use strict";var e=b.siteConstants;function f(b,d,e,f){return a.mapValues(d,function(a,d){return c.generateRemoteModelInterface(b,a,f(),e,d)},this)}function g(b,c){var d=[e.PAGES_CONTAINER_ID,e.SITE_PAGES_ID];var f=c(b,b);return a(f).omit([e.SITE_STRUCTURE_ID]).keys().difference(d).value()}function h(a,b){var c=b(a,a);var e=d.getWidgetType(c);return e===d.WIDGET_TYPES.PAGE}function i(c,d,e){var f=b.siteConstants.MASTER_PAGE_ID;var i=g(f,d);var j=a.without(c,f);return a.transform(j,function(a,b){a[b]=g(b,d);if(h(b,e)){a[b]=a[b].concat(i)}},{})}function j(a,b,c,e,g){var h=d.getApi(b);var j=i(c,g,h.fetchData);return f(a,j,e,h.fetchPagesData)}return{build:j}});define("widgets/messages/messageBuilder",[],function(){"use strict";function a(a,b,c){return{type:"load_widgets",widgets:a,rootIds:c,routersMap:b||{}}}function b(a){return{type:"init_widgets",controllers:a}}function c(a,b){return{type:"start_widgets",contexts:a,siteInfo:b}}function d(a){return{type:"stop_widgets",widgetIds:a}}function e(a,b){return{type:"update",contextId:a,updates:b}}return{loadWidgetsMessage:a,initWidgetsMessage:b,startWidgetsMessage:c,stopWidgetsMessage:d,updateWidgetMessage:e}});define("widgets/core/RemoteWidgetHandlerProxy",["lodash","core","widgets/core/dataResolvers/widgetDataResolvers","widgets/core/modelBuilder","widgets/messages/messageBuilder"],function(a,b,c,d,e){"use strict";var f={State:"stateChanged",Data:"dataChanged",Props:"propsChanged",EventRegister:"registerEvent",EventUnregisterAll:"unregisterAll",Layout:"layoutChanged",Behavior:"executeBehavior"};var g={WidgetReady:"widget_ready"};function h(b,c,d,e){var f={data:this._runtimeDal.setCompData.bind(this._runtimeDal),props:this._runtimeDal.setCompProps.bind(this._runtimeDal),layout:this._runtimeDal.updateCompLayout.bind(this._runtimeDal),registerEvent:i.bind(this),unregisterAll:j.bind(this)};f[c](b,d);if(a.isFunction(this._onUpdateCallback)){this._onUpdateCallback(e)}}function i(a,b){var c={action:{type:"comp",name:b.eventType,sourceId:a},behavior:{type:"widget",targetId:b.contextId,params:{callbackId:b.callbackId,compId:a},name:"runCode"}};this._runtimeDal.addActionsAndBehaviors(a,c)}function j(a,b){this._runtimeDal.removeActionsAndBehaviors(a,{action:{name:b.eventType}})}function k(a){var b=this._siteAPI.getSiteDataAPI().document;var c=b.getAllCompsUnderRoot.bind(b);return d.build(this._siteAPI.getRuntimeDal(),this._siteAPI.getSiteData(),a,h.bind(this),c)}function l(){var a=this._siteAPI.getSiteData();return{deviceType:a.isMobileView()?"mobile":"desktop"}}function m(a,b){this._runtimeDal=a.getRuntimeDal();this._siteAPI=a;this._remoteModelInterfaces={};this._onUpdateCallback=b;this._updatingWidget=false;this._readyWidgets={}}function n(a){return this._remoteModelInterfaces[a]}function o(b){var c=a.pick(b,a.negate(a.isObject));c.nativeEvent=a.pick(b.nativeEvent,a.negate(a.isObject));return c}m.prototype.initWidgets=function(a){var b=e.initWidgetsMessage(a);this._sendMessage(b)};m.prototype.startWidgets=function(b){if(a.isEmpty(b)){return}a.assign(this._remoteModelInterfaces,k.call(this,b));a.forEach(b,function(a){this._readyWidgets[a]=false},this);var c=a.mapValues(this._remoteModelInterfaces,function(a){return a.toJson()});var d=l.call(this);var f=e.startWidgetsMessage(c,d);this._sendMessage(f)};m.prototype.loadWidgets=function(b,c){var d=e.loadWidgetsMessage(b,this._siteAPI.getSiteData().getRouters(),c);this._sendMessage(d);a.forEach(b,function(a){this._readyWidgets[a.id]=false;delete this._remoteModelInterfaces[a.id]},this)};m.prototype.getActiveWidgetIds=function(){return a.keys(this._remoteModelInterfaces)};m.prototype.stopWidgets=function(b){if(a.isEmpty(b)){return}a.forEach(b,function(a){delete this._remoteModelInterfaces[a];this._readyWidgets[a]=false},this);var c=e.stopWidgetsMessage(b);this._sendMessage(c)};m.prototype.stopAllWidgets=function(){this.stopWidgets(a.keys(this._remoteModelInterfaces))};m.prototype.updateComponent=function(a){this._sendMessage(a)};m.prototype.handleWidgetUpdate=function(b){var c=a(b).keys().first();var d=a.pick(this._remoteModelInterfaces,function(b){return a.has(b.toJson(),["components",c])});if(!a.isEmpty(d)&&!this._updatingWidget){var f=a(d).keys().first();d[f].updateModel(b);var g=e.updateWidgetMessage(f,b);this._sendMessage(g)}};function p(b,d,e,f){var g=b.getSiteData();var h=a.assign({},d.getCompData(e),f);var i=d.getCompProps(e);h=c.resolve(h,b,i);return g.resolveData(h,g.getPrimaryPageId(),g.dataTypes.DATA)}m.prototype.handleRemoteMessage=function(a){switch(a.type){case g.WidgetReady:if(n.call(this,a.widgetId)){this._readyWidgets[a.widgetId]=true;this._onUpdateCallback()}break}};m.prototype.onCommand=function(a,c){this._updatingWidget=true;var d=this._remoteModelInterfaces[a.contextId];if(!d){return}switch(a.command){case f.State:d.setState(a.compId,a.data);break;case f.Data:a.data=p(this._siteAPI,this._runtimeDal,a.compId,a.data);d.setData(a.compId,a.data);break;case f.Layout:d.setLayout(a.compId,a.data);break;case f.Props:d.setProps(a.compId,a.data,c);break;case f.EventRegister:d.registerEvent(a.contextId,a.compId,a.data.eventType,a.data.callbackId);break;case f.EventUnregisterAll:d.unregisterAll(a.compId,a.data.eventType);break;case f.Behavior:var e=a.data;var g={group:"command",callback:c};b.behaviorsService.handleBehaviors(this._siteAPI,[e],g,e.type);if(this._onUpdateCallback){this._onUpdateCallback(c)}break}this._updatingWidget=false};m.prototype.handleEvent=function(a,b,c,d){var e;switch(b){case"runCode":e={intent:"WIX_CODE",type:"wix_code_run_user_function",contextId:a,callbackId:c.callbackId,compId:c.compId,event:o(d)};break;default:break}this._sendMessage(e)};m.prototype.isWidgetReady=function(a){return!!this._readyWidgets[a]};m.prototype._sendMessage=function(a){var b=this._siteAPI.getWixCodeAppApi();b.sendMessage(a)};return m});define("widgets/core/widgetService",["lodash","utils","widgets/core/widgetDataHelper","widgets/core/RemoteWidgetHandlerProxy","coreUtils","wixCodeInit"],function(a,b,c,d,e,f){"use strict";function g(a){return!!a.renderFlags.initWixCode}function h(a,b){var c=new d(a,b);v(a,c)}function i(b,c,d){var e={dataChange:"data",propsChange:"props",stateChange:"state",layoutChange:"layout"};var f=a.zipObject([e[d.type]],[d.value]);var g=a.zipObject([c],[f]);w(b).handleWidgetUpdate(g)}function j(c,d,e){if(!a.includes(c.getAllRenderedRootIds(),d)){return}var f=c.getRuntimeDal();var g=c.getSiteDataAPI();var h=g.document.getAllCompsUnderRoot(d,e);var i=a(h).omit(["masterPage"]).mapValues(function(a){return b.widgetModel.getCompModel(f,a.id)}).value();w(c).handleWidgetUpdate(i)}function k(b,c,d){var e=a.difference(b,a.map(c,"rootId"));if(!a.isEmpty(e)){c=y(d,c,b);A(d,e)}return c}function l(b,c){return a.map(b,function(b){return a.includes(c,b.rootId)?a.assign(b,{started:true}):b})}function m(c,d,e){var g=c.getSiteData();var h=w(c);e=a.without(e,b.siteConstants.MASTER_PAGE_ID);var i=f.appsUtils.getApplications(g.getClientSpecMap(),e,g);if(a.isEmpty(i)){return d}d=k(e,d,c);var j=a(d).reject({started:true}).map("rootId").value();if(a.isEmpty(j)){return d}h.startWidgets(j);d=l(d,j);return d}function n(b,c){var d=a.reject(b,function(b){return a.includes(c,b.rootId)});return a.map(d,"rootId")}function o(b,c,d){var e=w(b);if(a.isEmpty(d)||a.isEmpty(c)){return c}e.stopWidgets(d);return a.reject(c,function(b){return a.includes(d,b.rootId)})}function p(b,c){var d=a.without(b.getRootIdsWhichShouldBeRendered(),"masterPage");if(g(b.getSiteData())){var e=n(c,d);c=o(b,c,e);return m(b,c,d)}return o(b,c,d)}function q(c,d){var e=d.getPageData(c);var f=[{id:c,json:e}];if(a.get(d.getDataByQuery(c),"isPopup")){return f}var g=b.siteConstants.MASTER_PAGE_ID;return f.concat({id:g,json:d.getPageData(g)})}function r(b,c){return a(b).transform(function(b,c){a.assign(b,a.get(c,"data.connections_data"))},{}).values().map(function(b){var d=c.resolveData(b,null,c.dataTypes.CONNECTIONS);return a.get(d,"items")}).flatten().groupBy("controllerId").value()}function s(a){return a.componentType==="platform.components.AppController"}function t(b,c){var d=r(a.map(b,"json"),c);return a(b).map(function(b){return{rootId:b.id,controllers:e.dataUtils.getAllCompsInStructure(a.get(b,"json.structure"),false,s)}}).map(function(b){return a.map(b.controllers,function(e){var f=e.dataQuery.replace("#","");return a.merge({controllerBehaviors:a.get(c.getDataByQuery(e.behaviorQuery,b.rootId,c.dataTypes.BEHAVIORS),"items",[]),controllerData:c.getDataByQuery(f,b.rootId),controllerId:f,compId:e.id},{connections:a.get(d,f)})})}).flatten().value()}function u(b){return a(b).groupBy(function(b){return a.get(b,"controllerData.applicationId")}).mapValues(function(b){return a(b).groupBy("controllerId").mapValues(function(b){return a.pick(a.first(b),["controllerData","controllerBehaviors","connections","compId"])}).value()}).value()}function v(a,b){var d=a.getSiteData().widgetsStore;c.registerWidgetHandler(d,b)}function w(a){var b=a.getSiteData().widgetsStore;return c.getWidgetHandler(b)}function x(c,d){return a(c).without(b.siteConstants.MASTER_PAGE_ID).filter(d.getPageTitle,d).value()}function y(b,c,d){var e=b.getSiteData();var g=x(d,e);var h=a(g).difference(a.map(c,"rootId")).thru(a.isEmpty).value();if(h){return c}var i=f.appsUtils.getApplications(e.getClientSpecMap(),g,e);if(a.isEmpty(i)){return c}var j=w(b);j.loadWidgets(i,g);var k=a.map(g,function(a){return{rootId:a}});return c.concat(k)}function z(a,b){var c=q(b,a);var d=t(c,a);return u(d)}function A(c,d){var e=c.getSiteData();var f=a(d).without(b.siteConstants.MASTER_PAGE_ID).transform(function(a,b){a[b]=z(e,b)},{}).omit(a.isEmpty).value();if(a.isEmpty(f)){return}var g=w(c);g.initWidgets(f)}function B(b,c,d){var e=a(b.getAllRenderedRootIds()).intersection(d).thru(a.isEmpty).value();if(e){return c}return o(b,c,d)}function C(a){return a.getWixCodeAppApi()}function D(a,b){var c=C(a);c.registerMessageHandler(b)}function E(a,b){var c=C(a);c.registerMessageModifier(b)}function F(a,b){var c=C(a);c.sendMessage(b)}return{getWidgetHandler:w,syncAppsState:p,handleRuntimeDalCompChange:i,handleDisplayedJsonUpdate:j,createAndRegisterWidgetHandler:h,loadApps:y,initApps:A,stopApps:B,getControllersToInit:z,registerWidgetMessageHandler:D,registerWidgetMessageModifier:E,sendMessageToWidget:F}});define("widgets/core/WidgetAspect",["lodash","coreUtils","widgets/core/widgetDataHelper","widgets/core/widgetService","widgets/core/modelBuilderDataHelper","experiment"],function(a,b,c,d,e,f){"use strict";function g(b){this._siteAPI=b;this._loadedAppsRoots=[];d.createAndRegisterWidgetHandler(b,this.updateSite);if(f.isOpen("sv_platform1")){this._siteAPI.registerToSiteWillMount(h.bind(this));this._siteAPI.registerToSiteWillUpdate(h.bind(this))}this._siteAPI.getRuntimeDal().registerChangeListener(a.partial(d.handleRuntimeDalCompChange,this._siteAPI));if(f.isOpen("sv_hoverBox")){this._siteAPI.getSiteDataAPI().registerDisplayedJsonUpdateCallback(a.partial(d.handleDisplayedJsonUpdate,this._siteAPI))}this.getWidgetHandler=a.partial(d.getWidgetHandler,this._siteAPI)}function h(){this._loadedAppsRoots=d.syncAppsState(this._siteAPI,this._loadedAppsRoots)}g.prototype.updateSite=function(c){if(!this._updating){this._updating=true;var d=this;b.animationFrame.request(function(){d._updating=false;d._siteAPI.forceUpdate(a.isFunction(c)?c:a.noop)})}};function i(b,c,d){if(b!=="masterPage"){return b}return a.find(c,function(a){var b=d.getDataByQuery(a);return e.getWidgetType(b)===e.WIDGET_TYPES.PAGE})}g.prototype.allContextsReady=function(){return a(this._loadedAppsRoots).map("rootId").every(this.isContextReady,this)};g.prototype.isContextReady=function(b){var d=this._siteAPI.getSiteData();var e=d.widgetsStore;var f=c.getWidgetHandler(e);var g=a.map(this._loadedAppsRoots,"rootId");var h=i(b,g,d);if(a.isEmpty(this._loadedAppsRoots)){return true}return a.includes(g,h)&&f.isWidgetReady(h)};g.prototype.loadApps=function(a){if(!this._siteAPI.getSiteData().renderFlags.initWixCode){return}this._loadedAppsRoots=d.loadApps(this._siteAPI,this._loadedAppsRoots,a)};g.prototype.initApps=function(a){if(!this._siteAPI.getSiteData().renderFlags.initWixCode){return}d.initApps(this._siteAPI,a)};g.prototype.stopApps=function(a){this._loadedAppsRoots=d.stopApps(this._siteAPI,this._loadedAppsRoots,a)};g.prototype.restartApps=function(){if(a.isEmpty(this._loadedAppsRoots)){return}var b=a.map(this._loadedAppsRoots,"rootId");this.stopApps(b);this.loadApps(b);this.initApps(b)};return g});define("widgets/behaviors/widgetBehaviorHandler",["lodash"],function(a){"use strict";var b=["type","name","targetId"];function c(b,c,d){var e=c.getSiteAspect("WidgetAspect");var f=e.getWidgetHandler();a.forEach(b,function(a){f.handleEvent(a.targetId,a.name,a.params,d)})}function d(c){var d=a.at(c,b);d.push(c.params.callbackId);return d.join(",")}return{handle:c,getUniqueIdentifier:d}});define("widgets/behaviors/widgetBehaviorPreprocessor",["lodash"],function(a){"use strict";function b(a,b){var c=a.getRuntimeDal().getPageId(b);if(!c){return null}if(c==="masterPage"){return a.getSiteData().getFocusedRootId()}return c}function c(c,d,e){return a.assign({},c,{targetId:b(e,d.sourceId)})}return c});define("widgets",["core","widgets/utils/wixCodeRemoteModelService","widgets/core/WidgetAspect","widgets/core/widgetDataHelper","widgets/core/modelBuilder","widgets/behaviors/widgetBehaviorHandler","widgets/behaviors/widgetBehaviorPreprocessor","widgets/messages/messageBuilder","widgets/core/widgetService"],function(a,b,c,d,e,f,g,h,i){"use strict";a.behaviorHandlersFactory.registerHandler("widget",f);a.behaviorHandlersFactory.registerBehaviorPreprocessor("widget",g);a.siteAspectsRegistry.registerSiteAspect("WidgetAspect",c);return{wixCodeRemoteModelService:b,widgetDataHelper:d,messageBuilder:h,modelBuilder:e,widgetService:i}});