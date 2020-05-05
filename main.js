$(function(){
//サイコロを投げた時の処理

$(`#one`).click(function(){
  $('.choice').addClass('none');
  $('.game').removeClass('none');
  player = 1;
  document.getElementById('square0').insertAdjacentHTML('afterbegin', '<i id="currentPosition1" class="fas fa-car-side playerIcon1"></i>');
});

$(`#two`).click(function(){
  $('.choice').addClass('none');
  $('.game').removeClass('none');
  player = 2;
  document.getElementById('square0').insertAdjacentHTML('afterbegin', '<i id="currentPosition1" class="fas fa-car-side playerIcon1"></i>');
  document.getElementById('square0').insertAdjacentHTML('afterbegin', '<i id="currentPosition2" class="fas fa-car-side playerIcon2"></i>');
});

$(`#three`).click(function(){
  $('.choice').addClass('none');
  $('.game').removeClass('none');
  player = 3;
  document.getElementById('square0').insertAdjacentHTML('afterbegin', '<i id="currentPosition1" class="fas fa-car-side playerIcon1"></i>');
  document.getElementById('square0').insertAdjacentHTML('afterbegin', '<i id="currentPosition2" class="fas fa-car-side playerIcon2"></i>');
  document.getElementById('square0').insertAdjacentHTML('afterbegin', '<i id="currentPosition3" class="fas fa-car-side playerIcon3"></i>');
});

$(`#four`).click(function(){
  $('.choice').addClass('none');
  $('.game').removeClass('none');
  player = 4;
  document.getElementById('square0').insertAdjacentHTML('afterbegin', '<i id="currentPosition1" class="fas fa-car-side playerIcon1"></i>');
  document.getElementById('square0').insertAdjacentHTML('afterbegin', '<i id="currentPosition2" class="fas fa-car-side playerIcon2"></i>');
  document.getElementById('square0').insertAdjacentHTML('afterbegin', '<i id="currentPosition3" class="fas fa-car-side playerIcon3"></i>');
  document.getElementById('square0').insertAdjacentHTML('afterbegin', '<i id="currentPosition4" class="fas fa-car-side playerIcon4"></i>');
});
});
