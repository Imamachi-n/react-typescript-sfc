(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return StyledBottomNavi}));var taggedTemplateLiteral=__webpack_require__(463),slicedToArray=__webpack_require__(473),react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=__webpack_require__(471),Hidden=__webpack_require__(1339),BottomNavigation=__webpack_require__(1337),BottomNavigationAction=__webpack_require__(1338),Language=__webpack_require__(470),Language_default=__webpack_require__.n(Language),ArrowDownward=__webpack_require__(468),ArrowDownward_default=__webpack_require__.n(ArrowDownward),FormatListBulleted=__webpack_require__(469),FormatListBulleted_default=__webpack_require__.n(FormatListBulleted),Home=__webpack_require__(466),Home_default=__webpack_require__.n(Home),anchorScroll=function(event,anchorId,scrollBlock){var anchor=(event.target.ownerDocument||document).querySelector(anchorId);anchor&&anchor.scrollIntoView({behavior:"smooth",block:scrollBlock})},react_router=__webpack_require__(1340);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n"]);return _templateObject=function(){return data},data}var _ref=react_default.a.createElement(Home_default.a,null),_ref2=react_default.a.createElement(ArrowDownward_default.a,null),_ref3=react_default.a.createElement(FormatListBulleted_default.a,null),_ref4=react_default.a.createElement(Language_default.a,null),BottomNavi=function(props){var className=props.className,handleClick4Home=props.handleClick4Home,handleClick4Scroll=props.handleClick4Scroll,handleClick4Todo=props.handleClick4Todo,handleClick4Api=props.handleClick4Api,_React$useState=react_default.a.useState(0),_React$useState2=Object(slicedToArray.a)(_React$useState,2),value=_React$useState2[0],setValue=_React$useState2[1];return react_default.a.createElement("div",{className:className},react_default.a.createElement(Hidden.a,{mdUp:!0},react_default.a.createElement(BottomNavigation.a,{value:value,onChange:function onChange(event,newValue){setValue(newValue)},showLabels:!0},react_default.a.createElement(BottomNavigationAction.a,{label:"Home",icon:_ref,onClick:handleClick4Home}),react_default.a.createElement(BottomNavigationAction.a,{label:"Scroll",icon:_ref2,onClick:handleClick4Scroll}),react_default.a.createElement(BottomNavigationAction.a,{label:"ToDo",icon:_ref3,onClick:handleClick4Todo}),react_default.a.createElement(BottomNavigationAction.a,{label:"API",icon:_ref4,onClick:handleClick4Api}))))};BottomNavi.displayName="BottomNavi";var StyledBottomNavi=Object(styled_components_browser_esm.a)(BottomNavi)(_templateObject()),ContaineredBottomNavi=function(){var history=Object(react_router.a)();return react_default.a.createElement(StyledBottomNavi,{handleClick4Home:function handleClick4Home(event){history.push("/"),anchorScroll(event,"#firstContents","center")},handleClick4Scroll:function handleClick4Scroll(event){history.push("/"),anchorScroll(event,"#secondContents","start")},handleClick4Todo:function handleClick4Todo(){history.push("/todo")},handleClick4Api:function handleClick4Api(){history.push("/api")}})};ContaineredBottomNavi.displayName="ContaineredBottomNavi",ContaineredBottomNavi.__docgenInfo={description:"",methods:[],displayName:"ContaineredBottomNavi"};"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BottomNavigation/index.tsx"]={name:"ContaineredBottomNavi",docgenInfo:ContaineredBottomNavi.__docgenInfo,path:"src/components/BottomNavigation/index.tsx"})},1269:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(462);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1293)],module)}.call(this,__webpack_require__(1270)(module))},1293:function(module,exports,__webpack_require__){var map={"./components/BottomNavigation/index.stories.mdx":1294,"./components/BottomNavigation/index.stories.tsx":1310};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1293},1294:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"botomNavi",(function(){return botomNavi}));__webpack_require__(2),__webpack_require__(51),__webpack_require__(36),__webpack_require__(13),__webpack_require__(19),__webpack_require__(4),__webpack_require__(1295),__webpack_require__(1296),__webpack_require__(6),__webpack_require__(41),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(43),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(112),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(48),components_BottomNavigation__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(113);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={},_ref2=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_11__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_12__.Meta,{title:"MDX/BottomNavi",component:components_BottomNavigation__WEBPACK_IMPORTED_MODULE_14__.a,mdxType:"Meta"}),_ref3=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_11__.mdx)("p",null,"With ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_11__.mdx)("inlineCode",{parentName:"p"},"MDX")," we can define a story for ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_11__.mdx)("inlineCode",{parentName:"p"},"BottomNavi")," right in the middle of our\nmarkdown documentation.");function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_11__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),_ref2,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_11__.mdx)("h1",{id:"bottom-navi"},"Bottom Navi"),_ref3,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_11__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_12__.Preview,{withSource:"open",mdxType:"Preview"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_11__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_12__.Story,{name:"Botom Navi",mdxType:"Story"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_11__.mdx)(components_BottomNavigation__WEBPACK_IMPORTED_MODULE_14__.a,{handleClick4Home:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__.action)("Home"),handleClick4Scroll:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__.action)("Scroll"),handleClick4Todo:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__.action)("Todo"),handleClick4Api:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__.action)("Api"),mdxType:"StyledBottomNavi"}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var botomNavi=function(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_11__.mdx)(components_BottomNavigation__WEBPACK_IMPORTED_MODULE_14__.a,{handleClick4Home:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__.action)("Home"),handleClick4Scroll:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__.action)("Scroll"),handleClick4Todo:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__.action)("Todo"),handleClick4Api:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__.action)("Api")})};botomNavi.displayName="botomNavi",botomNavi.story={},botomNavi.story.name="Botom Navi",botomNavi.story.parameters={mdxSource:"<StyledBottomNavi handleClick4Home={action('Home')} handleClick4Scroll={action('Scroll')} handleClick4Todo={action('Todo')} handleClick4Api={action('Api')} />"};var componentMeta={title:"MDX/BottomNavi",includeStories:["botomNavi"]};componentMeta.parameters=componentMeta.parameters||{};var _ref4=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_11__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_12__.AddContext,{mdxStoryNameToKey:{"Botom Navi":"botomNavi"},mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_11__.mdx)(MDXContent,null));componentMeta.parameters.docs=function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}({},componentMeta.parameters.docs||{},{page:function page(){return _ref4}}),__webpack_exports__.default=componentMeta,botomNavi.__docgenInfo={description:"",methods:[],displayName:"botomNavi"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BottomNavigation/index.stories.mdx"]={name:"botomNavi",docgenInfo:botomNavi.__docgenInfo,path:"src/components/BottomNavigation/index.stories.mdx"})},1310:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"BottomNavi",(function(){return BottomNavi}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(48),components_BottomNavigation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(113),addSourceDecorator=(__webpack_require__(449).withSource,__webpack_require__(449).addSource);__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\nimport { action } from '@storybook/addon-actions';\nimport { StyledBottomNavi } from 'components/BottomNavigation';\n\nexport default {\n  title: 'BottomNavi',\n  component: StyledBottomNavi,\n};\n\nexport const BottomNavi = () => (\n  <StyledBottomNavi\n    handleClick4Home={action('Home')}\n    handleClick4Scroll={action('Scroll')}\n    handleClick4Todo={action('Todo')}\n    handleClick4Api={action('Api')}\n  />\n);\n",locationsMap:{"bottomnavi--bottom-navi":{startLoc:{col:26,line:10},endLoc:{col:1,line:17},startBody:{col:26,line:10},endBody:{col:1,line:17}}}}},title:"BottomNavi",component:components_BottomNavigation__WEBPACK_IMPORTED_MODULE_2__.a};var BottomNavi=addSourceDecorator((function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_BottomNavigation__WEBPACK_IMPORTED_MODULE_2__.a,{handleClick4Home:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Home"),handleClick4Scroll:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Scroll"),handleClick4Todo:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Todo"),handleClick4Api:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Api")})}),{__STORY__:"import React from 'react';\nimport { action } from '@storybook/addon-actions';\nimport { StyledBottomNavi } from 'components/BottomNavigation';\n\nexport default {\n  title: 'BottomNavi',\n  component: StyledBottomNavi,\n};\n\nexport const BottomNavi = () => (\n  <StyledBottomNavi\n    handleClick4Home={action('Home')}\n    handleClick4Scroll={action('Scroll')}\n    handleClick4Todo={action('Todo')}\n    handleClick4Api={action('Api')}\n  />\n);\n",__ADDS_MAP__:{"bottomnavi--bottom-navi":{startLoc:{col:26,line:10},endLoc:{col:1,line:17},startBody:{col:26,line:10},endBody:{col:1,line:17}}},__MAIN_FILE_LOCATION__:"/index.stories.tsx",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"/Users/imamachinaoto/Documents/react-typescript-sfc/src/components/BottomNavigation",__IDS_TO_FRAMEWORKS__:{}})},475:function(module,exports,__webpack_require__){__webpack_require__(476),__webpack_require__(618),__webpack_require__(619),__webpack_require__(1268),module.exports=__webpack_require__(1269)},538:function(module,exports){}},[[475,1,2]]]);
//# sourceMappingURL=main.6712d54a1171242a45b2.bundle.js.map