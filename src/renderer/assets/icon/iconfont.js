(function(window){var svgSprite='<svg><symbol id="el-icon-my-homepage" viewBox="0 0 1024 1024"><path d="M768 790.56l-128-0.032v-118.944a128.224 128.224 0 0 0-128-128.192c-70.592 0-128 57.504-128 128.192v118.88l-128-0.032V364.992l255.68-167.52L768 365.376v425.184z m-192-0.032l-128-0.032v-118.912c0-35.392 28.704-64.192 64-64.192s64 28.8 64 64.192v118.944z m304.896-427.68L800 309.856V207.168a32 32 0 1 0-64 0v60.768l-206.464-135.296A31.296 31.296 0 0 0 511.424 128a31.168 31.168 0 0 0-17.6 4.64l-351.36 230.208a32 32 0 0 0 35.072 53.536L192 406.912v393.056c0 30.08 27.2 54.592 60.576 54.592h518.848c33.408 0 60.576-24.512 60.576-54.592v-392.64l13.856 9.056a31.968 31.968 0 0 0 35.04-53.536z"  ></path></symbol><symbol id="el-icon-my-back-o" viewBox="0 0 1024 1024"><path d="M354.261333 537.429333l332.373334 332.373334-30.208 30.122666L294.4 537.898667l0.426667-0.426667-0.426667-0.512L656.426667 174.933333l30.165333 30.165334-332.330667 332.373333z" fill="#444444" ></path></symbol><symbol id="el-icon-my-copy-o" viewBox="0 0 1024 1024"><path d="M682.666667 341.333333h128v512H298.666667v-128H170.666667V213.333333h512v128z m0 42.666667v341.333333H341.333333v85.333334h426.666667V384h-85.333333zM213.333333 256v426.666667h426.666667V256H213.333333z" fill="#444444" ></path></symbol><symbol id="el-icon-my-link-o" viewBox="0 0 1024 1024"><path d="M586.88 520.106667l30.165333-30.165334 50.986667 50.986667 171.52-171.562667-180.992-181.034666-171.52 171.562666 39.509333 39.552-30.165333 30.165334L426.666667 359.893333 658.56 128l241.365333 241.365333-231.893333 231.893334-81.152-81.152z m-157.269333-23.722667l-30.165334 30.165333-39.552-39.552-171.52 171.562667 180.992 181.034667 171.52-171.562667-50.944-50.986667 30.165334-30.165333 81.152 81.152-231.893334 231.893333L128 658.56 359.893333 426.666667l69.717334 69.717333z m186.282666-123.050667l30.165334 30.165334-274.56 274.56L341.333333 647.893333l274.56-274.56z" fill="#444444" ></path></symbol><symbol id="el-icon-my-refresh-o" viewBox="0 0 1024 1024"><path d="M877.866667 426.666667l-32.170667 32.170666a362.666667 362.666667 0 1 0 5.461333 114.602667l-54.784 54.784A320 320 0 1 1 810.666667 533.333333c0 7.04-0.213333 13.994667-0.682667 20.906667l0.682667-0.64V554.666667l42.666666-42.666667h-0.426666l85.333333-85.333333h-60.373333z" fill="#444444" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)