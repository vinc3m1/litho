(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(8),a=(n(0),n(183)),i={id:"codegen",title:"Code Generation"},c={unversionedId:"codegen",id:"codegen",isDocsHomePage:!1,title:"Code Generation",description:"As explained in Writing Components, Litho relies on code generation in order to create Components from Component Specs. This process utilises intermediate ComponentSpec representations called SpecModels, which are immutable java objects.",source:"@site/../docs/codegen.md",slug:"/codegen",permalink:"/docs/codegen",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/codegen.md",version:"current"},p=[],l={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"As explained in ",Object(a.b)("a",{parentName:"p",href:"writing-components"},"Writing Components"),", Litho relies on code generation in order to create ",Object(a.b)("em",{parentName:"p"},"Components")," from ",Object(a.b)("em",{parentName:"p"},"Component Specs"),". This process utilises intermediate ",Object(a.b)("em",{parentName:"p"},"ComponentSpec")," representations called ",Object(a.b)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/specmodels/model/SpecModel.html"},"SpecModels"),", which are immutable java objects."),Object(a.b)("p",null,"Code generation comprises three main steps:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Creating a Spec Model from a Component Spec."),Object(a.b)("li",{parentName:"ul"},"Spec Model Validation."),Object(a.b)("li",{parentName:"ul"},"Component generation from a given Spec Model.")),Object(a.b)("h4",{id:"spec-model-creation"},"Spec Model Creation"),Object(a.b)("p",null,"Spec models are created at compile time using an annotation processor, which is a tool in javac for scanning and processing annotations. The Litho annotation processor will process the annotations, methods and fields on your Component Specs and create a Spec Model for each one."),Object(a.b)("p",null,"In the future, we will add the ability to create Spec Models in other ways. For example, we want to be able to create Spec Models directly in Android Studio/Intellij, which would allow us to generate Components without having to build the source code."),Object(a.b)("h4",{id:"spec-model-validation"},"Spec Model Validation"),Object(a.b)("p",null,"Spec Models have a method called ",Object(a.b)("inlineCode",{parentName:"p"},"validate()"),", which returns a list of ",Object(a.b)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/specmodels/model/SpecModelValidationError.html"},"SpecModelValidationErrors"),". If this list is empty then the Spec is well-formed and may be used to generate a valid Component. If not, then it will contain a list of errors that need fixing up before a valid Component may be generated."),Object(a.b)("h4",{id:"component-generation"},"Component Generation"),Object(a.b)("p",null,"If the validation step on a Spec Model is successful, then the ",Object(a.b)("inlineCode",{parentName:"p"},"generate")," method may be called. This will create a ",Object(a.b)("a",{parentName:"p",href:"https://github.com/square/javapoet"},"Javapoet")," ",Object(a.b)("inlineCode",{parentName:"p"},"TypeSpec")," which can then be easily used to create a Component class file."),Object(a.b)("h4",{id:"setting-up-code-generation-for-your-project"},"Setting up Code Generation for your project"),Object(a.b)("p",null,"If you set up your project using the instructions in the ",Object(a.b)("a",{parentName:"p",href:"getting-started"},"Getting Started")," section, then code generation will automatically take place on your project."))}s.isMDXComponent=!0},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);