$(function(){
//サイコロを投げた時の処理
$(`.btn`).click(function(){
  $(`.choice`).addClass(`none`);
  $(`.game`).removeClass(`none`);
});
$(`#one`).click(function(){
  $(`#selectScript`).attr(`src`, `script1.js`);
});
$(`#two`).click(function(){
  $(`#selectScript`).attr(`src`, `script2.js`);
});
$(`#three`).click(function(){
  $(`#selectScript`).attr(`src`, `script3.js`);
});
$(`#four`).click(function(){
  $(`#selectScript`).attr(`src`, `script4.js`);
});
});
