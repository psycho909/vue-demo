$(function() {
	$('li').each(
			function() {
				var url = window.location.pathname;
				url = url.substring(url.lastIndexOf('/') + 1, url.length);
				var href= $('a' ,this).attr('href');
				if(url == href){
					$(this).addClass("on");
				}
			});
});
