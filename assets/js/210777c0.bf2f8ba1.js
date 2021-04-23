(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{183:function(e,o,t){"use strict";t.d(o,"a",(function(){return h})),t.d(o,"b",(function(){return m}));var n=t(0),a=t.n(n);function i(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){i(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function c(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var o=a.a.useContext(p),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},h=function(e){var o=s(e.components);return a.a.createElement(p.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return a.a.createElement(a.a.Fragment,{},o)}},u=a.a.forwardRef((function(e,o){var t=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=s(t),u=n,m=h["".concat(r,".").concat(u)]||h[u]||d[u]||i;return t?a.a.createElement(m,l(l({ref:o},p),{},{components:t})):a.a.createElement(m,l({ref:o},p))}));function m(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var c in o)hasOwnProperty.call(o,c)&&(l[c]=o[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},97:function(e,o,t){"use strict";t.r(o),t.d(o,"frontMatter",(function(){return r})),t.d(o,"metadata",(function(){return l})),t.d(o,"toc",(function(){return c})),t.d(o,"default",(function(){return s}));var n=t(3),a=t(8),i=(t(0),t(183)),r={id:"tooltips",title:"Tooltips"},l={unversionedId:"tooltips",id:"tooltips",isDocsHomePage:!1,title:"Tooltips",description:"Litho tooltip APIs provide methods for displaying a floating view anchored to a component in your hierarchy.",source:"@site/../docs/tooltips.md",slug:"/tooltips",permalink:"/docs/tooltips",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/tooltips.md",version:"current"},c=[],p={toc:c};function s(e){var o=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,t,{components:o,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Litho tooltip APIs provide methods for displaying a floating view anchored to a component in your hierarchy."),Object(i.b)("p",null,"If you want to show an Android ",Object(i.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/widget/PopupWindow"},"PopupWindow")," anchored on a component, you need to have access to the view wrapping that component to use it as an anchor. However, in Litho, most components won't be wrapped in views and even if they are you don't have access to them."),Object(i.b)("p",null,"Litho provides a utility class called ",Object(i.b)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/LithoTooltipController.html"},"LithoTooltipController")," as a Tooltip API that allows you to show a tooltip anchored on a Component without dealing with view search."),Object(i.b)("p",null,"Here's how you'd use the Tooltip API to show a tooltip on a component 1. when that component becomes visible and 2. on a click event:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'@LayoutSpec\npublic class TooltipTriggerExampleComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n    final Handle anchorHandle = new Handle();\n    return Column.create(c)\n        .child(\n            Text.create(c)\n                .text("Click to Trigger show tooltip")\n                .clickHandler(TooltipTriggerExampleComponent.onClick(c, anchorHandle)))\n        .child(Text.create(c).text("Tooltip anchor").handle(anchorHandle))\n        .visibleHandler(TooltipTriggerExampleComponent.onVisible(c, anchorHandle))\n        .build();\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClick(ComponentContext c, @Param Handle anchorHandle) {\n    TooltipTriggerExampleComponentSpec.showToolTip(c, anchorHandle);\n  }\n\n  @OnEvent(VisibleEvent.class)\n  static void onVisible(ComponentContext c, @Param Handle anchorHandle) {\n    // Show a tooltip when the component becomes visible.\n    // NB: Incremental mount must be enabled for the component to receive visibility callbacks.\n    TooltipTriggerExampleComponentSpec.showToolTip(c, anchorHandle);\n  }\n\n  static void showToolTip(ComponentContext c, Handle anchorHandle) {\n    final LithoTooltip tooltip = /* Provide an implementation of LithoTooltip or PopupWindow */;\n    LithoTooltipController.showTooltipOnHandle(c, tooltip, anchorHandle);\n  }\n}\n')),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/LithoTooltip.html"},"LithoTooltip")," is an interface that requires you to implement a method for showing a tooltip given a host view and the bounds of the anchor component relative to the host view. This enables you to use a custom tooltip implementation."),Object(i.b)("p",null,"The interface forces the implementation of ",Object(i.b)("inlineCode",{parentName:"p"},"showLithoTooltip"),", a method that shows a tooltip given the bounds of the anchor Component inside a hosting view."),Object(i.b)("p",null,"For finding the component that is used as anchor, you need to specify a handle on the anchor component."),Object(i.b)("p",null,"For convenience, you can call ",Object(i.b)("inlineCode",{parentName:"p"},"LithoTooltipController.showTooltip")," on a ",Object(i.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/widget/PopupWindow"},"PopupWindow")," directly without having to create a ",Object(i.b)("inlineCode",{parentName:"p"},"LithoTooltip")," implementation yourself. By default it shows the tooltip as a dropdown with the specified offsets. The example above would change to:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"@OnEvent(VisibleEvent.class)\nstatic void onVisible(\n    ComponentContext c,\n    @Prop PopupWindow tooltip,\n    @State Handle anchorHandle) {\n  LithoTooltipController.showTooltipOnHandle(\n      c,\n      tooltip,\n      anchorHandle);\n}\n")),Object(i.b)("p",null,"At the moment the API only supports View tooltips. We might add Component tooltip support in the future if there's a need for it - contact us if that's the case for you."))}s.isMDXComponent=!0}}]);