// 動画はクリックしたときだけ読み込む（.yt-preview に data-video で動画 ID を置く）
$(function() {
	$('.yt-preview').one('click', function() {
		var $box = $(this);
		var $iframe = $('<iframe>', {
			src: 'https://www.youtube-nocookie.com/embed/' + $box.data('video') + '?autoplay=1&rel=0',
			title: $box.find('img').attr('alt'),
			allow: 'autoplay; encrypted-media; picture-in-picture; fullscreen',
			allowfullscreen: true
		});
		$box.empty().append($iframe).removeClass('yt-preview');
	});
});
