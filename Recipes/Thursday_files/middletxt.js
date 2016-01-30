document.write("<div style=\"text-align: center; padding-bottom: 3px;\">\n");
document.write("<a id=\"_bapw-link\" class=\"privacy\" href=\"#\" target=\"_blank\" style=\"text-decoration:none !important; white-space: nowrap !important;\"><img id=\"_bapw-icon\" style=\"border:0 !important;display:inline !important;vertical-align:middle !important\" /> <span style=\"vertical-align:middle !important\">AdChoices</span></a>&nbsp;|&nbsp;");
document.write("<a href='http://www.blogher.com/advertise' class='privacy'>Advertise</a>&nbsp;|&nbsp;<a href='http://www.blogher.com/privacy-policy'class='privacy'>Privacy</a></div>\n");

(function() {
    function async_load(){
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.text = '/*<![CDATA[*/(function(){var g=265,i=29,a=false,h=document,j=h.getElementById("_bapw-link"),e=(h.location.protocol=="https:"),f=(e?"https":"http")+"://",c=f+(e?"a248.e.akamai.net/betterad.download.akamai.com/91609":"cdn.betrad.com")+"/pub/";function b(k){var d=new Image();d.src=f+"l.betrad.com/pub/p.gif?pid="+g+"&ocid="+i+"&i"+k+"=1&r="+Math.random()}h.getElementById("_bapw-icon").src=c+"icon1.png";j.onmouseover=function(){if(/#$/.test(j.href)){j.href="http://info.evidon.com/pub_info/"+g+"?v=1"}};j.onclick=function(){var k=window._bap_p_overrides;function d(n,q){var o=h.getElementsByTagName("head")[0]||h.documentElement,m=a,l=h.createElement("script");function p(){l.onload=l.onreadystatechange=null;o.removeChild(l);q()}l.src=n;l.onreadystatechange=function(){if(!m&&(this.readyState=="loaded"||this.readyState=="complete")){m=true;p()}};l.onload=p;o.insertBefore(l,o.firstChild)}if(k&&k.hasOwnProperty(g)){if(k[g].new_window){b("c");return true}}this.onclick="return "+a;d(f+"ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js",function(){d(c+"pub2.js",function(){BAPW.i(j,{pid:g,ocid:i})})});return a};b("i")}());/*]]>*/';
        
        var x = document.getElementById("_bapw-link");
        x.parentNode.insertBefore(s, x.nextSibling);
    }
    if (window.attachEvent)
        window.attachEvent("onload", async_load);
    else
        window.addEventListener("load", async_load, false);
})();
