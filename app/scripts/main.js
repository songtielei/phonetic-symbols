$(function () {
  $('#fileSelect input').on('change', function () {
    getSongs(this.files);
  });
  $('#fileSelect a').click(function () {
    $('#fileSelect input').get(0).click();
    return false;
  });
});
