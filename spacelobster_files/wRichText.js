define("wRichText",["lodash","santaProps","textCommon","utils"],function(a,b,c,d){"use strict";var e=d.linkRenderer;return{displayName:"WRichText",propTypes:{structure:b.Types.Component.structure.isRequired,compData:b.Types.Component.compData.isRequired,compProp:b.Types.Component.compProp,linkRenderInfo:b.Types.Link.linkRenderInfo,rootNavigationInfo:b.Types.Component.rootNavigationInfo,colorsMap:b.Types.Theme.colorsMap.isRequired,fontsMap:b.Types.Fonts.fontsMap.isRequired,isMobileView:b.Types.isMobileView},statics:{useSantaTypes:true},mixins:[c.textCompMixin],allowIframes:false,fontGetter:function(a){var b=a.split("_")[1];return this.props.fontsMap[b]},colorGetter:function(a){var b=a.split("_")[1];return this.props.colorsMap[b]||a},convertCompDataTextToHTML:function(b){if(!this._componentHtml){return}this._componentHtml=c.textComponentsUtils.convertDataQueryLinksIntoHtmlAnchors(this._componentHtml,b.compData.linkList,e.renderLink,b.linkRenderInfo,b.rootNavigationInfo);this._componentHtml=c.textComponentsUtils.mobileTextTransformIfNeeded(this._componentHtml,{brightness:a.get(b,"compProp.brightness"),isMobileView:b.isMobileView,scale:a.get(b,"structure.layout.scale"),fontGetter:this.fontGetter,colorGetter:this.colorGetter});if(!b.noAutoLinkGeneration){this._componentHtml=c.textComponentsUtils.createImpliedLinks({htmlContent:this._componentHtml,isMobileView:this.props.isMobileView})}}}});