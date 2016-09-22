/* ========================================================================
 * Bootstrap: cookies.js v3.3.5
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

    // MANAGING COOKIES
  	// ================

  	function createCookie(name,value,days) {
  		var expires = '';
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			expires = '; expires='+date.toGMTString();
		}
		document.cookie = name+'='+value+expires+'; path=/';
	}

	function readCookie(name) {
		var cname = name + '=';
		var csplit = document.cookie.split(';');
		for(var i=0;i < csplit.length;i++) {
			var c = csplit[i];
			while (c.charAt(0)==' ') {
				c = c.substring(1,c.length);
				if (c.indexOf(cname) === 0) {
					return c.substring(cname.length,c.length);
				}
			}
		}
		return null;
	}

	function eraseCookie(name) {
		createCookie(name,'',-1);
	}

}