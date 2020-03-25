$(function(){

let countNum = 1;
let diceNum;
let diceSum = 0;
let leftVal = 100;
let diceMax = 6;
let diceMin = 1;
let diceImg;

//サイコロを投げた時の処理
  $(`#rollDice`).click(function(){

    //出目を取得+表示
    diceNum =  Math.floor( Math.random()*(diceMax +1 - diceMin)) + diceMin;
    $(`img`).attr(`src`, `${diceNum}_images.jpg`);

    //投げた回数
    countNum ++;
    $(`#count`).text(`${countNum}投目`);

    //ゴールまでのマス目取得＋表示
    leftVal = leftVal - diceNum;
    $(`#leftValue`).text(`ゴールまであと${leftVal}マス`);


    //ゴール判定
    if(leftVal <= 0){
      $(`#goal`).text(`ゴール！！！`);
      $(`#leftValue`).text(`ゴールまであと0マス`);
      $(`#count`).text(``);
      }
  });
});
