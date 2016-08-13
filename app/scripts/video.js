'use strict';

$(function () {
  var showVideo = function (src) {
    var source = $('.modal iframe');
    source.attr('src', src);

    $('.modal').fadeIn();
  };
  $('dl dd').on('click', 'a', function() {
    showVideo($(this).attr('href'));
    return false;
  });
});
