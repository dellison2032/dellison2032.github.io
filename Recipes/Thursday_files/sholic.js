function oiq_addPageMfg(s) { window.oiq_pMfg = oiq_ddPush(window.oiq_pMfg, s); }function oiq_addPageBrand(s) { window.oiq_pMfg = oiq_ddPush(window.oiq_pMfg, s); }function oiq_addPageDT(s) { window.oiq_pDT = oiq_ddPush(window.oiq_pDT, s); }function oiq_addPageCat(s) { window.oiq_pDT = oiq_ddPush(window.oiq_pDT, s); }function oiq_addPageProduct(s) { window.oiq_pProduct = oiq_ddPush(window.oiq_pProduct, s); }function oiq_addPageSource(s) { window.oiq_pSource = oiq_ddPush(window.oiq_pSource, s); }function oiq_addPageLifecycle(s) { window.oiq_pSource = oiq_ddPush(window.oiq_pSource, s); }function oiq_addUserId(s) { window.oiq_pUser = s; }function oiq_addCustomKVP(s) { window.oiq_pCust = oiq_ddPush(window.oiq_pCust, s); }function oiq_ddPush(arr, val) {if (Object.prototype.toString.call(arr) === "[object Array]") {var f = false;for (var i=0;i<arr.length;i++) {if (arr[i]==val) {f = true;break;}}if (!f) {arr.push(val);}return arr;} else {return new Array(val);}}function oiq_is (req) {var stags=document.getElementsByTagName("script");var ltag = stags[stags.length-1];if (ltag == null) { return; }var s=document.createElement("script");s.type = "text/javascript";s.async = true;s.src = req;ltag.parentNode.insertBefore(s,ltag);}function oiq_doTag() {var t = new Array();if(!window.oiq_pMfg && !window.oiq_pDT && !window.oiq_pProduct) {t.push('f|"'+encodeURIComponent(document.title)+'"');}else{var i;if (window.oiq_pMfg)   { for(i=0; i < window.oiq_pMfg.length; i++) { t.push('m|"'+encodeURIComponent(window.oiq_pMfg[i])+'"')}}if (window.oiq_pDT)    { for(i=0; i < window.oiq_pDT.length; i++) { t.push('d|"'+encodeURIComponent(window.oiq_pDT[i])+'"')}}if (window.oiq_pProduct) { for(i=0; i < window.oiq_pProduct.length; i++) { t.push('p|"'+encodeURIComponent(window.oiq_pProduct[i])+'"')}}}if (window.oiq_pCust) { for(i=0; i < window.window.oiq_pCust.length; i++) { t.push(encodeURIComponent(window.oiq_pCust[i][0])+'|'+encodeURIComponent(window.oiq_pCust[i][1]))}window.oiq_as = 'true';}var req='http://px.owneriq.net/j/'+'?pt='+window.oiq_pt.join()+'&t='+encodeURI(t.join());if (window.oiq_pSource) req+='&s='+window.oiq_pSource.join();if (window.oiq_as) {req+='&as='+window.oiq_as;}oiq_is(req);if (window.oiq_pUser) {var oiq_user_img = new Image();oiq_user_img.src = "http://px.owneriq.net/euid?pt=sholic&uid="+encodeURIComponent(window.oiq_pUser);}var imgURL = oiq_getRefererImgURL();if(imgURL != null){var referer_img = new Image();referer_img.src = imgURL;}}window.oiq_pt = oiq_ddPush(window.oiq_pt, "sholic");window.oiq_uid = window.oiq_uid || 'Q' + ((Date.now() / 1000 | 0) - 946713600) + Math.floor(((Math.random() * 1147483647) + 1000000000)) + 'J';oiq_is("//px.owneriq.net/eexelate.js?pc=sholic&uid=" + window.oiq_uid);if (typeof(_oiqq) != "undefined") {if (typeof(window._oiqSC) == "undefined" || window._oiqSC == 0) {if(window._oiqSC == 0) {delete window.oiq_pSource;delete window.oiq_pMfg;delete window.oiq_pDT;delete window.oiq_pProduct;}window._oiqSC=0;for (var i=0; i<_oiqq.length; i++) {if (_oiqq[i] == "oiq_doTag") window._oiqSC++;}}window._oiqSC--;while (_oiqq.length != 0) {var t = _oiqq.shift();var f = window[t[0]];if (t != "oiq_doTag" && typeof(f) == "function") {if (typeof(t[1]) != "undefined") {f(t[1]);} else {f();}}}if (window._oiqSC == 0) {oiq_doTag();}}function oiq_getRefererImgURL() {var oiq_refererURL = '';var oiq_title = '';if (typeof document != 'undefined' && document) { if (document.title && document.title!='') {oiq_title = document.title; }if (document.referrer && document.referrer!='') {oiq_refererURL = document.referrer; }}if(oiq_refererURL == '')return null;oiq_refererURL = oiq_refererURL.replace("#","?");oiq_refererURL = decodeURIComponent(oiq_refererURL);var oiq_parsedReferer = oiq_parseURL(oiq_refererURL);if(oiq_parsedReferer) {if(oiq_parsedReferer.host && oiq_parsedReferer.protocol && oiq_parsedReferer.query) {if(oiq_parsedReferer.host.match(/google|bing|ask|aol/gi)){var oiq_searchString = oiq_findQueryArgument(oiq_parsedReferer.query, 'q');if(oiq_searchString) {var oiq_searchTagURL = 'http://px.owneriq.net/esq?pt=sholic&URL=';var oiq_URL = oiq_parsedReferer.protocol+'//'+oiq_parsedReferer.host+"/?q="+oiq_searchString;return oiq_searchTagURL+encodeURIComponent(oiq_URL)+"&title="+oiq_title+"&sq="+oiq_searchString;}}}}return null;}function oiq_parseURL(oiq_url) {if(oiq_url) {var oiq_loc = { 'href' : oiq_url };var oiq_protocolNHost = oiq_url.replace('//', '/').split('/');oiq_loc.protocol = typeof(oiq_protocolNHost[0])!='undefined' ? oiq_protocolNHost[0] : '';oiq_loc.host = typeof(oiq_protocolNHost[1])!='undefined' ? oiq_protocolNHost[1] : '';var oiq_params = oiq_url.split('?');oiq_loc.query = oiq_params[1] != null ? oiq_params[1] : '';return oiq_loc;}return null;}function oiq_findQueryArgument (oiq_strQuery, oiq_strArgumentName) {if (oiq_strQuery) {var oiq_arrParameters = oiq_strQuery.split("&");for (var i = 0; i < oiq_arrParameters.length; i++) {var oiq_arrPair = oiq_arrParameters[i].split("=");if (oiq_arrPair[0] == oiq_strArgumentName) {if (oiq_arrPair.length > 1) {return oiq_arrPair[1];}break;}}}return null;}