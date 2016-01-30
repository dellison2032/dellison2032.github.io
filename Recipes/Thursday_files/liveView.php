(function () {
	function getUrl()
	{
		var url = null;
		if (parent !== window)
			url = document.referrer;
		else
			url = window.location.href;

		return url;
	}

	var url = 'http://live.sekindo.com/live/liveView.php?s=59191&pubUrl=joyfulhealthyeats.com&subId=[SUBID_ENCODED]&cbuster=974360113&nofr=1' + '&pubUrlAuto=' + encodeURIComponent(getUrl());
	document.write(unescape("%3Cscript src='") + url + unescape("' type='text/javascript'%3E%3C/script%3E"));
})();
