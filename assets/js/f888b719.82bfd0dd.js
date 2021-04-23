(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{176:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return p})),o.d(t,"toc",(function(){return d})),o.d(t,"dependenciesCode",(function(){return u})),o.d(t,"additionalDependenciesCode",(function(){return h})),o.d(t,"snapshotDependenciesCode",(function(){return b})),o.d(t,"kaptDependenciesCode",(function(){return m})),o.d(t,"kaptAdditionalDependenciesCode",(function(){return y})),o.d(t,"kaptSnapshotsDependenciesCode",(function(){return g})),o.d(t,"buckCode",(function(){return f})),o.d(t,"additionalBuckCode",(function(){return v})),o.d(t,"default",(function(){return O}));var n=o(3),i=o(8),a=(o(0),o(183)),r=o(197),s=o(198),l=o(192),c={id:"getting-started",title:"Getting Started",hide_table_of_contents:!0},p={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"<Tabs",source:"@site/../docs/getting-started.mdx",slug:"/getting-started",permalink:"/docs/getting-started",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/getting-started.mdx",version:"current"},d=[{value:"Adding Litho to your Project",id:"adding-litho-to-your-project",children:[]},{value:"Adding Sections to your Project",id:"adding-sections-to-your-project",children:[]},{value:"Using Snapshot releases",id:"using-snapshot-releases",children:[]},{value:"Adding Litho to your Kotlin Project",id:"adding-litho-to-your-kotlin-project",children:[]},{value:"Adding Sections to your Project",id:"adding-sections-to-your-project-1",children:[]},{value:"Using Snapshot releases",id:"using-snapshot-releases-1",children:[]},{value:"Adding Litho to your Project",id:"adding-litho-to-your-project-1",children:[]},{value:"Adding Sections to your Project",id:"adding-sections-to-your-project-2",children:[]},{value:"Testing your Installation",id:"testing-your-installation",children:[]},{value:"Testing your Installation",id:"testing-your-installation-1",children:[]}],u="dependencies {\n  // ...\n  // Litho\n  implementation 'com.facebook.litho:litho-core:{{site.lithoVersion}}'\n  implementation 'com.facebook.litho:litho-widget:{{site.lithoVersion}}'\n  annotationProcessor 'com.facebook.litho:litho-processor:{{site.lithoVersion}}'\n\n  // SoLoader\n  implementation 'com.facebook.soloader:soloader:{{site.soloaderVersion}}'\n\n  // For integration with Fresco\n  implementation 'com.facebook.litho:litho-fresco:{{site.lithoVersion}}'\n\n  // For testing\n  testImplementation 'com.facebook.litho:litho-testing:{{site.lithoVersion}}'\n}",h="dependencies {\n\n  // Sections\n  implementation 'com.facebook.litho:litho-sections-core:{{site.lithoVersion}}'\n  implementation 'com.facebook.litho:litho-sections-widget:{{site.lithoVersion}}'\n  compileOnly 'com.facebook.litho:litho-sections-annotations:{{site.lithoVersion}}'\n\n  annotationProcessor 'com.facebook.litho:litho-sections-processor:{{site.lithoVersion}}'\n}",b="dependencies {\n  // ...\n  // Litho\n  implementation 'com.facebook.litho:litho-core:{{site.lithoSnapshotVersion}}'\n  implementation 'com.facebook.litho:litho-widget:{{site.lithoSnapshotVersion}}'\n  annotationProcessor 'com.facebook.litho:litho-processor:{{site.lithoSnapshotVersion}}'\n\n  // SoLoader\n  implementation 'com.facebook.soloader:soloader:{{site.soloaderVersion}}'\n\n  // For integration with Fresco\n  implementation 'com.facebook.litho:litho-fresco:{{site.lithoSnapshotVersion}}'\n\n  // For testing\n  testImplementation 'com.facebook.litho:litho-testing:{{site.lithoSnapshotVersion}}'\n}",m="dependencies {\n  // ...\n  // Litho\n  implementation 'com.facebook.litho:litho-core:{{site.lithoVersion}}'\n  implementation 'com.facebook.litho:litho-widget:{{site.lithoVersion}}'\n  kapt 'com.facebook.litho:litho-processor:{{site.lithoVersion}}'\n\n  // SoLoader\n  implementation 'com.facebook.soloader:soloader:{{site.soloaderVersion}}'\n\n  // For integration with Fresco\n  implementation 'com.facebook.litho:litho-fresco:{{site.lithoVersion}}'\n\n  // For testing\n  testImplementation 'com.facebook.litho:litho-testing:{{site.lithoVersion}}'\n}",y="dependencies {\n\n  // Sections\n  implementation 'com.facebook.litho:litho-sections-core:{{site.lithoVersion}}'\n  implementation 'com.facebook.litho:litho-sections-widget:{{site.lithoVersion}}'\n  compileOnly 'com.facebook.litho:litho-sections-annotations:{{site.lithoVersion}}'\n\n  kapt 'com.facebook.litho:litho-sections-processor:{{site.lithoVersion}}'\n}",g="dependencies {\n  // ...\n  // Litho\n  implementation 'com.facebook.litho:litho-core:{{site.lithoSnapshotVersion}}'\n  implementation 'com.facebook.litho:litho-widget:{{site.lithoSnapshotVersion}}'\n\n  kapt 'com.facebook.litho:litho-processor:{{site.lithoSnapshotVersion}}'\n\n  // SoLoader\n  implementation 'com.facebook.soloader:soloader:{{site.soloaderVersion}}'\n\n  // For integration with Fresco\n  implementation 'com.facebook.litho:litho-fresco:{{site.lithoSnapshotVersion}}'\n\n  // For testing\n  testImplementation 'com.facebook.litho:litho-testing:{{site.lithoSnapshotVersion}}'\n}",f='android_prebuilt_aar(\n    name = "litho",\n    aar = ":litho-core.aar",\n    visibility = ["PUBLIC"],\n)\n\nremote_file(\n    name = "litho-core.aar",\n    sha1 = "sha1here",\n    url = "mvn:com.facebook.litho:litho-core:aar:{{site.lithoVersion}}",\n)\n\nprebuilt_jar(\n    name = "litho-annotation",\n    binary_jar = ":litho-annotation.jar",\n    visibility = ["PUBLIC"],\n)\n\nremote_file(\n    name = "litho-processor.jar",\n    sha1 = "sha1here",\n    url = "mvn:com.facebook.litho:litho-processor:jar:{{site.lithoVersion}}",\n)\n\nprebuilt_jar(\n    name = "litho-processor",\n    binary_jar = ":litho-processor.jar",\n    visibility = ["PUBLIC"],\n)\n\nremote_file(\n    name = "litho-annotation.jar",\n    sha1 = "sha1here",\n    url = "mvn:com.facebook.litho:litho-annotation:jar:{{site.lithoVersion}}",\n)\n\nandroid_prebuilt_aar(\n    name = "litho-widget",\n    aar = ":litho-widget.aar",\n    visibility = ["PUBLIC"],\n)\n\nremote_file(\n    name = "litho-widget.aar",\n    sha1 = "sha1here",\n    url = "mvn:com.facebook.litho:litho-widget:aar:{{site.lithoVersion}}",\n)\n\nandroid_library(\n    ...\n    # Your target here\n    ...\n    annotation_processor_deps = [\n        ":litho-annotation",\n        ":litho-processor",\n    ],\n    annotation_processors = [\n        "com.facebook.litho.specmodels.processor.ComponentsProcessor",\n    ],\n    provided_deps = [\n        "litho-annotation",\n    ],\n    deps = [\n        ":litho",\n        ":litho-widget",\n        ...\n    ]\n)',v='android_prebuilt_aar(\n    name = "litho-sections",\n    aar = ":litho-sections-core.aar",\n    visibility = ["PUBLIC"],\n)\n\nremote_file(\n    name = "litho-sections-core.aar",\n    sha1 = "sha1here",\n    url = "mvn:com.facebook.litho:litho-sections-core:aar:{{site.lithoVersion}}",\n)\n\nprebuilt_jar(\n    name = "litho-sections-annotation",\n    binary_jar = ":litho-sections-annotation.jar",\n    visibility = ["PUBLIC"],\n)\n\nremote_file(\n    name = "litho-sections-processor.jar",\n    sha1 = "sha1here",\n    url = "mvn:com.facebook.litho:litho-sections-processor:jar:{{site.lithoVersion}}",\n)\n\nprebuilt_jar(\n    name = "litho-sections-processor",\n    binary_jar = ":litho-sections-processor.jar",\n    visibility = ["PUBLIC"],\n)\n\nremote_file(\n    name = "litho-sections-annotation.jar",\n    sha1 = "sha1here",\n    url = "mvn:com.facebook.litho:litho-sections-annotation:jar:{{site.lithoVersion}}",\n)\n\nandroid_prebuilt_aar(\n    name = "litho-sections-widget",\n    aar = ":litho-sections-widget.aar",\n    visibility = ["PUBLIC"],\n)\n\nremote_file(\n    name = "litho-sections-widget.aar",\n    sha1 = "sha1here",\n    url = "mvn:com.facebook.litho:litho-sections-widget:aar:{{site.lithoVersion}}",\n)',j={toc:d,dependenciesCode:u,additionalDependenciesCode:h,snapshotDependenciesCode:b,kaptDependenciesCode:m,kaptAdditionalDependenciesCode:y,kaptSnapshotsDependenciesCode:g,buckCode:f,additionalBuckCode:v};function O(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},j,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)(r.a,{defaultValue:"gradle-java",values:[{label:"Gradle/Java",value:"gradle-java"},{label:"Gradle/Kotlin",value:"gradle-kotlin"},{label:"Buck/Java",value:"buck-java"},{label:"Testing/Java",value:"testing-java"},{label:"Testing/Kotlin",value:"testing-kotlin"}],mdxType:"Tabs"},Object(a.b)(s.a,{value:"gradle-java",mdxType:"TabItem"},Object(a.b)("h2",{id:"adding-litho-to-your-project"},"Adding Litho to your Project"),Object(a.b)("p",null,"We publish the Litho artifacts to Bintray's JCenter. To include Litho to your\nAndroid project, make sure you include the reference to the repository in your ",Object(a.b)("inlineCode",{parentName:"p"},"build.gradle")," file:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-groovy"},"repositories {\n  jcenter()\n}\n")),Object(a.b)("p",null,"Then add the dependencies like this:"),Object(a.b)(l.a,{language:"groovy",code:u,mdxType:"VersionedCodeBlock"}),Object(a.b)("h2",{id:"adding-sections-to-your-project"},"Adding Sections to your Project"),Object(a.b)("p",null,"Litho comes with an optional library called Sections for declaratively building lists. You can include Sections by adding the following additional dependencies to your ",Object(a.b)("inlineCode",{parentName:"p"},"build.gradle")," file:"),Object(a.b)(l.a,{language:"groovy",code:h,mdxType:"VersionedCodeBlock"}),Object(a.b)("h2",{id:"using-snapshot-releases"},"Using Snapshot releases"),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"This will break and may set your house on fire. Snapshots are unsigned and automatically published by our CI system. Use them for testing purposes only."))),Object(a.b)("p",null,"First, add the Sonatype Snapshots repository to your gradle config:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-groovy"},'repositories {\n  maven { url "https://oss.sonatype.org/content/repositories/snapshots/" }\n}\n')),Object(a.b)("p",null,"Then you can access the snapshot versions of all Litho artifacts that we\npublish:"),Object(a.b)(l.a,{language:"groovy",code:b,mdxType:"VersionedCodeBlock"})),Object(a.b)(s.a,{value:"gradle-kotlin",mdxType:"TabItem"},Object(a.b)("h2",{id:"adding-litho-to-your-kotlin-project"},"Adding Litho to your Kotlin Project"),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Kotlin support for Litho is experimental at this point."))),Object(a.b)("p",null,"In order to use Litho's annotation processor, you need to opt in to the Kotlin KAPT plugin at the\ntop of your application's ",Object(a.b)("inlineCode",{parentName:"p"},"build.gradle")," file:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-groovy"},"apply plugin: 'kotlin-kapt'\n")),Object(a.b)("p",null,"We publish the Litho artifacts to Bintray's JCenter. To include Litho to your\nAndroid project, make sure you include the reference to the repository in your ",Object(a.b)("inlineCode",{parentName:"p"},"build.gradle")," file:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-groovy"},"repositories {\n  jcenter()\n}\n")),Object(a.b)("p",null,"Then add the dependencies like this:"),Object(a.b)(l.a,{language:"groovy",code:m,mdxType:"VersionedCodeBlock"}),Object(a.b)("h2",{id:"adding-sections-to-your-project-1"},"Adding Sections to your Project"),Object(a.b)("p",null,"Litho comes with an optional library called Sections for declaratively building lists. You can include Sections by adding the following additional dependencies to your ",Object(a.b)("inlineCode",{parentName:"p"},"build.gradle")," file:"),Object(a.b)(l.a,{language:"groovy",code:y,mdxType:"VersionedCodeBlock"}),Object(a.b)("h2",{id:"using-snapshot-releases-1"},"Using Snapshot releases"),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"This will break and may set your house on fire. Snapshots are unsigned and automatically published by our CI system. Use them for testing purposes only."))),Object(a.b)("p",null,"First, add the Sonatype Snapshots repository to your gradle config:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-groovy"},'repositories {\n  maven { url "https://oss.sonatype.org/content/repositories/snapshots/" }\n}\n')),Object(a.b)("p",null,"Then you can access the snapshot versions of all Litho artifacts that we\npublish:"),Object(a.b)(l.a,{language:"groovy",code:g,mdxType:"VersionedCodeBlock"})),Object(a.b)(s.a,{value:"buck-java",mdxType:"TabItem"},Object(a.b)("h2",{id:"adding-litho-to-your-project-1"},"Adding Litho to your Project"),Object(a.b)("p",null,"You can include Litho to your Android project via Buck by adding the following to your ",Object(a.b)("inlineCode",{parentName:"p"},"BUCK")," file:"),Object(a.b)(l.a,{language:"python",code:f,mdxType:"VersionedCodeBlock"}),Object(a.b)("h2",{id:"adding-sections-to-your-project-2"},"Adding Sections to your Project"),Object(a.b)("p",null,"Litho comes with an optional library called Sections for declaratively building lists. You can include Sections by adding the following additional dependencies to your ",Object(a.b)("inlineCode",{parentName:"p"},"BUCK")," file:"),Object(a.b)(l.a,{language:"python",code:v,mdxType:"VersionedCodeBlock"}),Object(a.b)("p",null,"Then modify your ",Object(a.b)("inlineCode",{parentName:"p"},"android_library")," target as such:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'android_library(\n    ...\n    # Your target here\n    ...\n    annotation_processor_deps = [\n        ":litho-annotation",\n        ":litho-processor",\n        ":litho-sections-annotations",\n        ":litho-sections-processor",\n    ],\n    annotation_processors = [\n        "com.facebook.litho.specmodels.processor.ComponentsProcessor",\n        "com.facebook.litho.specmodels.processor.sections.SectionsComponentProcessor",\n    ],\n    provided_deps = [\n        "litho-annotations",\n        "litho-sections-annotations",\n    ],\n    deps = [\n        ":litho",\n        ":litho-widget",\n        ":litho-sections",\n        ":litho-sections-widget",\n        ...\n    ]\n)\n'))),Object(a.b)(s.a,{value:"testing-java",mdxType:"TabItem"},Object(a.b)("h2",{id:"testing-your-installation"},"Testing your Installation"),Object(a.b)("p",null,"You can test your install by adding a view created with Litho to an activity."),Object(a.b)("p",null,"First, initialize ",Object(a.b)("inlineCode",{parentName:"p"},"SoLoader"),". Litho has a dependency on ",Object(a.b)("a",{parentName:"p",href:"https://github.com/facebook/SoLoader"},"SoLoader")," to help load native libraries provided by the underlying layout engine, ",Object(a.b)("a",{parentName:"p",href:"https://yogalayout.com/docs/"},"Yoga"),". Your ",Object(a.b)("inlineCode",{parentName:"p"},"Application")," class is a good place to do this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java",metastring:'title="MyApplication.java"',title:'"MyApplication.java"'},"public class MyApplication extends Application {\n\n  @Override\n  public void onCreate() {\n    super.onCreate();\n\n    SoLoader.init(this, false);\n  }\n}\n")),Object(a.b)("p",null,"Then, add a predefined Litho ",Object(a.b)("inlineCode",{parentName:"p"},"Text"),' widget to an activity that displays "Hello World!":'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java",metastring:'title="MyActivity.java"',title:'"MyActivity.java"'},'import com.facebook.litho.ComponentContext;\nimport com.facebook.litho.LithoView;\n\npublic class MyActivity extends Activity {\n\n  @Override\n  public void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n\n    final ComponentContext c = new ComponentContext(this);\n\n    final LithoView lithoView = LithoView.create(\n        this /* context */,\n        Text.create(c)\n            .text("Hello, World!")\n            .textSizeDip(50)\n            .build());\n\n    setContentView(lithoView);\n  }\n}\n')),Object(a.b)("p",null,'Now, when you run the app you should see "Hello World!" displayed on the screen.')),Object(a.b)(s.a,{value:"testing-kotlin",mdxType:"TabItem"},Object(a.b)("h2",{id:"testing-your-installation-1"},"Testing your Installation"),Object(a.b)("p",null,"You can test your install by adding a view created with Litho to an activity."),Object(a.b)("p",null,"First, initialize ",Object(a.b)("inlineCode",{parentName:"p"},"SoLoader"),". Litho has a dependency on ",Object(a.b)("a",{parentName:"p",href:"https://github.com/facebook/SoLoader"},"SoLoader")," to help load native libraries provided by the underlying layout engine, ",Object(a.b)("a",{parentName:"p",href:"https://yogalayout.com/docs/"},"Yoga"),". Your ",Object(a.b)("inlineCode",{parentName:"p"},"Application")," class is a good place to do this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="MyApplication.kt"',title:'"MyApplication.kt"'},"class MyApplication: Application() {\n\n  override fun onCreate() {\n    super.onCreate()\n    SoLoader.init(this, false)\n  }\n}\n")),Object(a.b)("p",null,"Then, add a predefined Litho ",Object(a.b)("inlineCode",{parentName:"p"},"Text"),' widget to an activity that displays "Hello World!":'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="MyActivity.kt"',title:'"MyActivity.kt"'},'import com.facebook.litho.ComponentContext\nimport com.facebook.litho.LithoView\n\nclass MyActivity : AppCompatActivity() {\n\n  override fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(savedInstanceState)\n\n    val c = ComponentContext(this)\n\n    val lithoView = LithoView.create(\n        this /* context */,\n        Text.create(c)\n            .text("Hello, World!")\n            .textSizeDip(50)\n            .build())\n\n    setContentView(lithoView)\n  }\n}\n')),Object(a.b)("p",null,'Now, when you run the app you should see "Hello World!" displayed on the screen.'))))}O.isMDXComponent=!0},183:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return b}));var n=o(0),i=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),h=n,b=d["".concat(r,".").concat(h)]||d[h]||u[h]||a;return o?i.a.createElement(b,s(s({ref:t},c),{},{components:o})):i.a.createElement(b,s({ref:t},c))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,r=new Array(a);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<a;c++)r[c]=o[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},186:function(e,t,o){"use strict";function n(e){var t,o,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=n(e[t]))&&(i&&(i+=" "),i+=o);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,o=0,i="";o<arguments.length;)(e=arguments[o++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},188:function(e,t,o){"use strict";var n=o(0),i=o(189);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},189:function(e,t,o){"use strict";var n=o(0),i=o.n(n).a.createContext(void 0);t.a=i},191:function(e,t,o){"use strict";o.d(t,"b",(function(){return r}));var n=o(23),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=o(0),r={Prism:n.a,theme:i};function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var o=e.length;return o>0&&e[o-1]===t?e:e.concat(t)},u=function(e,t){var o=e.plain,n=Object.create(null),i=e.styles.reduce((function(e,o){var n=o.languages,i=o.style;return n&&!n.includes(t)||o.types.forEach((function(t){var o=l({},e[t],i);e[t]=o})),e}),n);return i.root=o,i.plain=l({},o,{backgroundColor:null}),i};function h(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(o[n]=e[n]);return o}var b=function(e){function t(){for(var t=this,o=[],n=arguments.length;n--;)o[n]=arguments[n];e.apply(this,o),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var o=e.theme?u(e.theme,e.language):void 0;return t.themeDict=o})),s(this,"getLineProps",(function(e){var o=e.key,n=e.className,i=e.style,a=l({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(a.style=r.plain),void 0!==i&&(a.style=void 0!==a.style?l({},a.style,i):i),void 0!==o&&(a.key=o),n&&(a.className+=" "+n),a})),s(this,"getStyleForToken",(function(e){var o=e.types,n=e.empty,i=o.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===i&&"plain"===o[0])return n?{display:"inline-block"}:void 0;if(1===i&&!n)return a[o[0]];var r=n?{display:"inline-block"}:{},s=o.map((function(e){return a[e]}));return Object.assign.apply(Object,[r].concat(s))}})),s(this,"getTokenProps",(function(e){var o=e.key,n=e.className,i=e.style,a=e.token,r=l({},h(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==i&&(r.style=void 0!==r.style?l({},r.style,i):i),void 0!==o&&(r.key=o),n&&(r.className+=" "+n),r})),s(this,"tokenize",(function(e,t,o,n){var i={code:t,grammar:o,language:n,tokens:[]};e.hooks.run("before-tokenize",i);var a=i.tokens=e.tokenize(i.code,i.grammar,i.language);return e.hooks.run("after-tokenize",i),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,o=e.language,n=e.code,i=e.children,a=this.getThemeDict(this.props),r=t.languages[o];return i({tokens:function(e){for(var t=[[]],o=[e],n=[0],i=[e.length],a=0,r=0,s=[],l=[s];r>-1;){for(;(a=n[r]++)<i[r];){var u=void 0,h=t[r],b=o[r][a];if("string"==typeof b?(h=r>0?h:["plain"],u=b):(h=d(h,b.type),b.alias&&(h=d(h,b.alias)),u=b.content),"string"==typeof u){var m=u.split(c),y=m.length;s.push({types:h,content:m[0]});for(var g=1;g<y;g++)p(s),l.push(s=[]),s.push({types:h,content:m[g]})}else r++,t.push(h),o.push(u),n.push(0),i.push(u.length)}r--,t.pop(),o.pop(),n.pop(),i.pop()}return p(s),l}(void 0!==r?this.tokenize(t,n,r,o):[n]),className:"prism-code language-"+o,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);t.a=b},192:function(e,t,o){"use strict";var n=o(3),i=o(0),a=o.n(i),r=o(191),s={plain:{color:"rgb(36, 41, 46)",backgroundColor:"#f6f8fa"},styles:[{types:["prolog"],style:{color:"rgb(0, 0, 128)"}},{types:["comment"],style:{color:"rgb(106, 153, 85)"}},{types:["builtin","changed","keyword"],style:{color:"rgb(215, 58, 73)",color:"#e3116c"}},{types:["inserted-sign","inserted"],style:{backgroundColor:"rgb(240, 255, 244)",color:"rgb(34, 134, 58)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted-sign","deleted"],style:{backgroundColor:"rgb(255, 238, 240)",color:"rgb(179, 29, 40)"}},{types:["selector"],style:{color:"rgb(215, 186, 125)"}},{types:["tag"],style:{color:"rgb(78, 201, 176)"}},{types:["tag"],languages:["markup"],style:{color:"rgb(86, 156, 214)"}},{types:["punctuation","operator"],style:{color:"rgb(36, 41, 46)"}},{types:["operator"],style:{color:"rgb(0, 92, 197)"}},{types:["boolean"],style:{color:"rgb(0, 92, 197)"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"rgb(111, 66, 193)"}},{types:["class-name"],style:{color:"rgb(78, 201, 176)"}},{types:["known-class-name","class-name"],style:{color:"rgb(227, 98, 9)"}},{types:["char"],style:{color:"rgb(209, 105, 105)"}},{types:["property-access"],style:{color:"rgb(0, 92, 197)"}},{types:["method","function","property-access"],style:{color:"rgb(111, 66, 193)"}},{languages:["json"],types:["property"],style:{color:"rgb(3, 47, 98)"}},{languages:["json"],types:["string"],style:{color:"rgb(3, 47, 98)"}},{languages:["json"],types:["number"],style:{color:"rgb(0, 92, 197)"}},{languages:["json"],types:["comment"],style:{backgroundColor:"rgb(179, 29, 40)",color:"rgb(250, 251, 252)"}}]},l={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},c="0.40.0",p="0.40.1-SNAPSHOT",d="0.9.0",u="0.46.0",h=o(188);t.a=function(e){var t=e.language,o=e.code.replace(/{{site.lithoVersion}}/g,c).replace(/{{site.soloaderVersion}}/g,d).replace(/{{site.lithoSnapshotVersion}}/g,p).replace(/{{site.flipperVersion}}/g,u).trim(),i=Object(h.a)().isDarkTheme?l:s;return a.a.createElement(r.a,Object(n.a)({},r.b,{code:o,language:t,theme:i}),(function(e){var t=e.className,o=e.style,n=e.tokens,i=e.getLineProps,r=e.getTokenProps;return a.a.createElement("pre",{className:t,style:o},n.map((function(e,t){return a.a.createElement("div",i({line:e,key:t}),e.map((function(e,t){return a.a.createElement("span",r({token:e,key:t}))})))})))}))}},194:function(e,t,o){"use strict";var n=o(0),i=o(195);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},195:function(e,t,o){"use strict";var n=o(0),i=Object(n.createContext)(void 0);t.a=i},197:function(e,t,o){"use strict";var n=o(0),i=o.n(n),a=o(194),r=o(186),s=o(65),l=o.n(s);var c=37,p=39;t.a=function(e){var t=e.lazy,o=e.block,s=e.defaultValue,d=e.values,u=e.groupId,h=e.className,b=Object(a.a)(),m=b.tabGroupChoices,y=b.setTabGroupChoices,g=Object(n.useState)(s),f=g[0],v=g[1],j=n.Children.toArray(e.children),O=[];if(null!=u){var k=m[u];null!=k&&k!==f&&d.some((function(e){return e.value===k}))&&v(k)}var w=function(e){var t=e.target,o=O.indexOf(t),n=j[o].props.value;v(n),null!=u&&(y(u,n),setTimeout((function(){var e,o,n,i,a,r,s,c;(e=t.getBoundingClientRect(),o=e.top,n=e.left,i=e.bottom,a=e.right,r=window,s=r.innerHeight,c=r.innerWidth,o>=0&&a<=c&&i<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},C=function(e){var t,o;switch(e.keyCode){case p:var n=O.indexOf(e.target)+1;o=O[n]||O[0];break;case c:var i=O.indexOf(e.target)-1;o=O[i]||O[O.length-1]}null===(t=o)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":o},h)},d.map((function(e){var t=e.value,o=e.label;return i.a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:w,onClick:w},o)}))),t?Object(n.cloneElement)(j.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},198:function(e,t,o){"use strict";var n=o(0),i=o.n(n);t.a=function(e){var t=e.children,o=e.hidden,n=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:o,className:n},t)}}}]);