define("radioButton",["react","lodash","core","santaProps"],function(a,b,c,d){"use strict";return{displayName:"RadioButton",mixins:[c.compMixins.skinBasedComp,c.compMixins.runTimeCompData],statics:{useSantaTypes:true},propTypes:{compData:d.Types.Component.compData.isRequired,compProp:d.Types.Component.compProp.isRequired,groupName:a.PropTypes.string,checked:a.PropTypes.bool,onChange:a.PropTypes.func,text:a.PropTypes.string},getSkinProperties:function(){var a={};a[this.props.compProp.alignment+"-direction"]=true;var c="margin"+b.capitalize(this.props.compProp.alignment);var d=this.props.textStyle;d[c]=this.props.compProp.spacing;var e={width:this.props.compProp.buttonSize,height:this.props.compProp.buttonSize};var f={"":{tabIndex:0,"data-disabled":!!this.props.compProp.isDisabled,className:this.classSet(a)},"radio-input":{onChange:this.props.onChange,name:this.props.groupName},"circle-shadow":{style:e},circle:{"data-disabled":!!this.props.compProp.isDisabled,"data-preview":this.getComponentPreviewState()||this.props.previewState,style:e},text:{children:[this.props.compData.label],style:d}};if(this.props.checked){f["radio-input"].checked=true}return f}}});