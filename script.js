$(function(){

let countNum = 1;
let diceNum;
let diceSum = 0;
let diceSumId = ("square" + diceSum)
let leftVal = 100;
let diceMax = 6;
let diceMin = 1;
let diceImg;

//初期画面
document.getElementById(diceSumId).innerHTML = `<i class="fas fa-car-side"></i>`;

//サイコロを投げた時の処理
  $(`#rollDice`).click(function(){

    //出目を取得+表示
    diceNum =  Math.floor( Math.random()*(diceMax +1 - diceMin)) + diceMin;
    $(`img`).attr(`src`, `${diceNum}.png`);

    //投げた回数
    countNum ++;
    $(`#count`).text(`${countNum}投目`);

    //ゴールまでのマス目取得＋表示
    leftVal = leftVal - diceNum;
    $(`#leftValue`).text(`ゴールまであと${leftVal}マス`);

    //コマの動作
    document.getElementById(diceSumId).innerHTML = "";
    diceSum = 100 -leftVal;
    diceSumId = ("square" + diceSum);
    document.getElementById(diceSumId).innerHTML = `<i id="currentDice" i class="fas fa-car-side"></i>`;
    let element = document.getElementById('currentDice');
    element.scrollIntoView({behavior: 'auto',inline: 'center'});

    //ゴール判定
    if(leftVal <= 0){
      $(`#goal`).text(`ゴール！！！`);
      $(`#leftValue`).text(`ゴールまであと0マス`);
      $(`#count`).text(``);
      }
  });
});
