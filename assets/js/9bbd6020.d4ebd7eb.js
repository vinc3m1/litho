(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(3),i=n(8),o=(n(0),n(183)),r=n(184),s={id:"transition-basics",title:"Animation basics"},l={unversionedId:"animations/transition-basics",id:"animations/transition-basics",isDocsHomePage:!1,title:"Animation basics",description:"Introduction",source:"@site/../docs/animations/transition-basics.mdx",slug:"/animations/transition-basics",permalink:"/docs/animations/transition-basics",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/animations/transition-basics.mdx",version:"current",sidebar:"mainSidebar",previous:{title:"Testing in Android Studio",permalink:"/docs/testing/tests-in-android-studio"},next:{title:"Types of Transitions",permalink:"/docs/animations/transition-types"}},c=[{value:"Introduction",id:"introduction",children:[{value:"Bounds Transitions",id:"bounds-transitions",children:[]},{value:"Transitions",id:"transitions",children:[]}]}],p={toc:c};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"In Litho we perform UI updates by changing state or props on the component tree instead of mutating the views directly. In a similar way, the animation framework adds transitions to components that are triggered when regenerating a tree. It is important to avoid accessing the underlying view to add animations as these values will probably not be preserved."),Object(o.b)("p",null,"Transitions can be used to animate view properties when they change between layouts, i.e. due to a state update or new props from the parent. In the following example we will create a layout with a simple state change triggered by a click. We will then demonstraight the different ways of applying transitions animations."),Object(o.b)("p",null,"When we make changes to a tree due to a new state, these changes happen immediately. Let's imagine that we have a simple Component that renders a yellow square, and aligns it to either the right or left edge of screen based on value of the ",Object(o.b)("inlineCode",{parentName:"p"},"@State boolean toRight"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java",metastring:"file=../../sample/src/main/java/com/facebook/samples/litho/animations/docs/SimpleAllLayoutTransitionComponentSpec.java start=start end=no_animation",file:"../../sample/src/main/java/com/facebook/samples/litho/animations/docs/SimpleAllLayoutTransitionComponentSpec.java",start:"start",end:"no_animation"},"@LayoutSpec\npublic class SimpleAllLayoutTransitionComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State boolean toRight) {\n    return Column.create(c)\n        .clickHandler(SimpleAllLayoutTransitionComponent.onClickEvent(c))\n        .child(SolidColor.create(c).color(YELLOW).widthDip(80).heightDip(80))\n        .alignItems(toRight ? YogaAlign.FLEX_END : YogaAlign.FLEX_START)\n        .build();\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClickEvent(ComponentContext c, @FromEvent View view) {\n    SimpleAllLayoutTransitionComponent.onUpdateState(c);\n  }\n\n  @OnUpdateState\n  static void onUpdateState(StateValue<Boolean> toRight) {\n    toRight.set(!toRight.get());\n  }\n")),Object(o.b)("video",{loop:"true",autoplay:"true",class:"video",width:"100%",height:"500px"},Object(o.b)("source",{type:"video/webm",src:Object(r.a)("/videos/transitions/basics1.webm")}),Object(o.b)("p",null,"Your browser does not support the video element.")),Object(o.b)("p",null,"When the value of the state changes we re-render the ",Object(o.b)("inlineCode",{parentName:"p"},"ComponentTree"),' which makes the square appear to \u201cjump\u201d from its previous position to the new one. In the next stem we will show how to replace this "jump" with a transition animation.'),Object(o.b)("h3",{id:"bounds-transitions"},"Bounds Transitions"),Object(o.b)("p",null,"There is a simple way to add bounds animations to all transitioning components between tree changes. Add the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java",metastring:"file=../../sample/src/main/java/com/facebook/samples/litho/animations/docs/SimpleAllLayoutTransitionComponentSpec.java start=no_animation end=end",file:"../../sample/src/main/java/com/facebook/samples/litho/animations/docs/SimpleAllLayoutTransitionComponentSpec.java",start:"no_animation",end:"end"},"@OnCreateTransition\nstatic Transition onCreateTransition(ComponentContext c) {\n  return Transition.allLayout();\n}\n")),Object(o.b)("video",{loop:"true",autoplay:"true",class:"video",width:"100%",height:"500px"},Object(o.b)("source",{type:"video/webm",src:Object(r.a)("/videos/transitions/basics2.webm")}),Object(o.b)("p",null,"Your browser does not support the video element.")),Object(o.b)("p",null,"Returning ",Object(o.b)("a",{parentName:"p",href:"https://staticdocs.thefacebook.com/litho/javadoc/com/facebook/litho/Transition.html#allLayout--"},Object(o.b)("inlineCode",{parentName:"a"},"Transition.allLayout()"))," will create a Transition that will automatically animate any changes to position or width and height."),Object(o.b)("p",null,"This only works when changing the bounds of a component and will not work with:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Other properties including scale, alpha and rotation."),Object(o.b)("li",{parentName:"ul"},"Components that are being added or removed.")),Object(o.b)("h3",{id:"transitions"},"Transitions"),Object(o.b)("p",null,"Once we move out of just bounds and instead of animating the ",Object(o.b)("inlineCode",{parentName:"p"},"X")," we want to animate ",Object(o.b)("inlineCode",{parentName:"p"},"ALPHA")," there are just a couple of things you need to add to your code to make it happen."),Object(o.b)("p",null,"For more control over the transitions we can use these apis:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"@OnCreateTransition"))," method. You need to add a method annotated with ",Object(o.b)("inlineCode",{parentName:"li"},"@OnCreateTransition")," to your Spec, which is what we use to define the transition animations. It should return a ",Object(o.b)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/Transition.html"},Object(o.b)("inlineCode",{parentName:"a"},"Transition")),", and its first argument should always be of ",Object(o.b)("inlineCode",{parentName:"li"},"ComponentContext")," type. As other lifecycle methods in a Spec, it could also have ",Object(o.b)("inlineCode",{parentName:"li"},"@Prop")," arguments, as well as arguments of ",Object(o.b)("inlineCode",{parentName:"li"},"StateValue")," type, although this comes at a cost - more on this later."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"Transition"))," is a description of which Component/Property (mandatory) and how (optional) you want to animate. You will not use a constructor to create ",Object(o.b)("inlineCode",{parentName:"li"},"Transition")," instances, instead you will use one of the provided ",Object(o.b)("inlineCode",{parentName:"li"},"Builder"),"s."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"transitionKey"))," is an identifier that you normally assign to a ",Object(o.b)("inlineCode",{parentName:"li"},"Component")," that you want to animate, and then use it when defining ",Object(o.b)("inlineCode",{parentName:"li"},"Transition"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"AnimatedProperties"))," are used to target the property of a ",Object(o.b)("inlineCode",{parentName:"li"},"Component")," that should be animated when its value changes.")),Object(o.b)("p",null,"To put it all together, here is what it would look like in our case:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java",metastring:"file=../../sample/src/main/java/com/facebook/samples/litho/animations/docs/AlphaTransitionComponentSpec.java start=start end=end",file:"../../sample/src/main/java/com/facebook/samples/litho/animations/docs/AlphaTransitionComponentSpec.java",start:"start",end:"end"},'@LayoutSpec\npublic class AlphaTransitionComponentSpec {\n\n  private static final String SQUARE_KEY = "square";\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State boolean isHalfAlpha) {\n    return Column.create(c)\n        .clickHandler(AlphaTransitionComponent.onClickEvent(c))\n        .child(\n            Row.create(c)\n                .backgroundColor(YELLOW)\n                .widthDip(80)\n                .heightDip(80)\n                .alpha(isHalfAlpha ? 0.5f : 1.0f)\n                .transitionKey(SQUARE_KEY))\n        .build();\n  }\n\n  @OnCreateTransition\n  static Transition onCreateTransition(ComponentContext c) {\n    return Transition.create(SQUARE_KEY).animate(AnimatedProperties.ALPHA);\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClickEvent(ComponentContext c, @FromEvent View view) {\n    AlphaTransitionComponent.onUpdateState(c);\n  }\n\n  @OnUpdateState\n  static void onUpdateState(StateValue<Boolean> isHalfAlpha) {\n    isHalfAlpha.set(!isHalfAlpha.get());\n  }\n}\n')),Object(o.b)("video",{loop:"true",autoplay:"true",class:"video",width:"100%",height:"500px"},Object(o.b)("source",{type:"video/webm",src:Object(r.a)("/videos/transitions/basics3.webm")}),Object(o.b)("p",null,"Your browser does not support the video element.")),Object(o.b)("p",null,"Notice that we:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"On ",Object(o.b)("em",{parentName:"li"},"line 16")," we assign a ",Object(o.b)("inlineCode",{parentName:"li"},"transitionKey")," to the ",Object(o.b)("inlineCode",{parentName:"li"},"SolidColor")," component using ",Object(o.b)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/Component.Builder.html#transitionKey-java.lang.String-"},Object(o.b)("inlineCode",{parentName:"a"},"Component.Builder#transitionKey()"))," method."),Object(o.b)("li",{parentName:"ol"},"On ",Object(o.b)("em",{parentName:"li"},"lines 22-23")," we create a ",Object(o.b)("inlineCode",{parentName:"li"},"Transition")," using ",Object(o.b)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/Transition.html#create-java.lang.String-"},Object(o.b)("inlineCode",{parentName:"a"},"Transition.create()"))," that takes a ",Object(o.b)("inlineCode",{parentName:"li"},"transitionKey")," and then specify the property of the component using ",Object(o.b)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/Transition.TransitionUnitsBuilder.html#animate-com.facebook.litho.animation.AnimatedProperty-"},Object(o.b)("inlineCode",{parentName:"a"},".animate()"))," method that takes an ",Object(o.b)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/animation/AnimatedProperties.html"},Object(o.b)("inlineCode",{parentName:"a"},"AnimatedProperty")),".")),Object(o.b)("p",null,"Both of these methods take a ",Object(o.b)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/Transition.html#create-java.lang.String...-"},"variable number of arguments"),", so multiple ",Object(o.b)("inlineCode",{parentName:"p"},"Transition"),"s may be expressed like:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'private static final String SQUARE_KEY = "square";\nprivate static final String OVAL_KEY = "oval";\nprivate static final String ANOTHER_SHAPE = "another_shape";\n\n...\n\n@OnCreateTransition\nstatic Transition onCreateTransition(ComponentContext c) {\n    return Transition.create(SQUARE_KEY, OVAL_KEY, ANOTHER_SHAPE)\n        .animate(AnimatedProperties.X, AnimatedProperties.Y);\n}\n')),Object(o.b)("p",null,"The transitions animations API supports three ",Object(o.b)("a",{parentName:"p",href:"/docs/animations/transition-types"},"types of transitions"),", ",Object(o.b)("strong",{parentName:"p"},"change"),", ",Object(o.b)("strong",{parentName:"p"},"appear")," and ",Object(o.b)("strong",{parentName:"p"},"disappear")," which work differently depending on how the tree changes between states. In this example we did a ",Object(o.b)("strong",{parentName:"p"},"change")," transition."))}m.isMDXComponent=!0},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,u=m["".concat(r,".").concat(d)]||m[d]||b[d]||o;return n?i.a.createElement(u,s(s({ref:t},c),{},{components:n})):i.a.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},184:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var a=n(10),i=n(185);function o(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,r=o.forcePrependBaseUrl,s=void 0!==r&&r,l=o.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+p:p}(o,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},185:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))}}]);