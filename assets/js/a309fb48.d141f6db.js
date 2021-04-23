(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var o=n(3),a=n(8),r=(n(0),n(183)),c={id:"injectprop-matching",title:"Matching @InjectProp"},i={unversionedId:"testing/injectprop-matching",id:"testing/injectprop-matching",isDocsHomePage:!1,title:"Matching @InjectProp",description:"Checkout the getting started section to setup the test environment correctly.",source:"@site/../docs/testing/injectprop-matching.mdx",slug:"/testing/injectprop-matching",permalink:"/docs/testing/injectprop-matching",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/testing/injectprop-matching.mdx",version:"current",sidebar:"mainSidebar",previous:{title:"Matching @TreeProp",permalink:"/docs/testing/testing-treeprops"},next:{title:"Event Handler Testing",permalink:"/docs/testing/event-handler-testing"}},p=[{value:"Testing injected props",id:"testing-injected-props",children:[]},{value:"Testing injected components",id:"testing-injected-components",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Checkout the ",Object(r.b)("a",{parentName:"p",href:"unit-testing"},"getting started")," section to setup the test environment correctly."))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Checkout the ",Object(r.b)("a",{parentName:"p",href:"subcomponent-testing"},Object(r.b)("strong",{parentName:"a"},"sub-component testing")),", and ",Object(r.b)("a",{parentName:"p",href:"prop-matching"},Object(r.b)("strong",{parentName:"a"},"Prop Matching")),"\nsection before diving into ",Object(r.b)("inlineCode",{parentName:"p"},"@InjectProp")," testing."))),Object(r.b)("h2",{id:"testing-injected-props"},"Testing injected props"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@InjectProp")," earmarks props to be provided by the client's dependency injection framework.\nComponents which have injected props can be tested using a ",Object(r.b)("inlineCode",{parentName:"p"},"@TestSpec")," and the prop-matching APIs."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Consider the following LayoutSpec:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@LayoutSpec\nclass MyInjectPropSpec {\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c,\n      @Prop String normalProp,\n      @InjectProp UserController injectedProp,\n      @InjectProp ProfilePictureComponent profilePicture) {\n    // ...\n  }\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a ",Object(r.b)("inlineCode",{parentName:"li"},"@TestSpec")," for ",Object(r.b)("strong",{parentName:"li"},"MyInjectPropSpec"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@TestSpec(MyInjectPropSpec.class)\npublic interface TestMyInjectPropSpec {}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add ",Object(r.b)("inlineCode",{parentName:"li"},"@RunWith(LithoTestRunner.class)")," to the top of the test class."),Object(r.b)("li",{parentName:"ul"},"Add a JUnit ",Object(r.b)("a",{parentName:"li",href:"https://github.com/junit-team/junit4/wiki/Rules"},Object(r.b)("inlineCode",{parentName:"a"},"@Rule"))," ",Object(r.b)("inlineCode",{parentName:"li"},"LithoViewRule"),"."),Object(r.b)("li",{parentName:"ul"},"Add a check to ensure that tests are run in debug mode.\n",Object(r.b)("inlineCode",{parentName:"li"},"ComponentsConfiguration.IS_INTERNAL_BUILD")," must be true.")),Object(r.b)("p",null,"The test class should look like the following:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'@RunWith(LithoTestRunner.class)\npublic class InjectPropMatcherGenerationTest {\n\n  public final @Rule LithoViewRule mLithoViewRule = new LithoViewRule();\n\n  @Before\n  public void assumeInDebugMode() {\n    assumeThat(\n      "These tests can only be run in debug mode.",\n      ComponentsConfiguration.IS_INTERNAL_BUILD, is(true)\n    );\n  }\n}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Set the value of the injected props before evaluating any assertions.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void whenMyInjectPropComponentIsRendered_shouldUseProvidedInjectProps() {\n  final ComponentContext c = mLithoViewRule.getContext();\n  final MyInjectProp component = MyInjectProp.create(c)\n        .normalProp("normal string")\n        .build();\n\n  // Set the injected prop values.\n  component.injectedString = "injected string";\n  component.injectedKettle = new Kettle(92f);\n\n  final Condition<InspectableComponent> matcher =\n      TestMyInjectProp.matcher(c)\n          .normalString("normal string")\n          .injectedString("injected string")\n          .injectedKettle(new CustomTypeSafeMatcher<MyInjectPropSpec.Kettle>("matches temperature") {\n            @Override\n            protected boolean matchesSafely(MyInjectPropSpec.Kettle item) {\n              return Math.abs(item.temperatureCelsius - 92f) < 0.1;\n            }\n          })\n          .build();\n\n  assertThat(c, component).has(deepSubComponentWith(c, matcher));\n}\n')),Object(r.b)("p",null,"The example shows how tests written for injected props are almost the same as normal props.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"Kettle")," object is instantiated with a temperature, that is verified using a custom matcher."),Object(r.b)("h2",{id:"testing-injected-components"},"Testing injected components"),Object(r.b)("p",null,"Components can also be ",Object(r.b)("inlineCode",{parentName:"p"},"@InjectProp"),"s. Consider the following LayoutSpec:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@LayoutSpec\nclass MyInjectPropSpec {\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c,\n      @InjectProp Text injectedComponent) {\n    return Column.create(c).child(injectedComponent).build();\n  }\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Assert if MyInjectProp is mounted with the injected Text component.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void whenMyInjectPropComponentIsRendered_shouldUseProvidedInjectedComponent() {\n  final ComponentContext c = mLithoViewRule.getContext();\n  final MyInjectProp component = MyInjectProp.create(c).build();\n\n  component.injectedComponent = Text.create(c).text("injected text").build();\n\n  final Condition<InspectableComponent> matcher =\n      TestMyInjectProp.matcher(c)\n          .injectedComponent(TestText.matcher(c).text("injected text").build())\n          .build();\n\n  assertThat(c, component).has(deepSubComponentWith(c, matcher));\n}\n')))}l.isMDXComponent=!0},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,d=m["".concat(c,".").concat(u)]||m[u]||b[u]||r;return n?a.a.createElement(d,i(i({ref:t},s),{},{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);