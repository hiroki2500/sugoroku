$(function(){

let countNum = 0; //振った回数
let diceNum; //出目
let diceSum = 0; //出目の合計
let diceSumId = ("square" + diceSum) //出目の合計値=コマの位置
let leftVal = 100; //残りのマス
let diceMax = 6; //サイコロの目の最大値
let diceMin = 1; //サイコロの目の最小値
let diceImg; //サイコロの画像



//初期画面
document.getElementById(diceSumId).innerHTML = `<i class="fas fa-car-side"></i>`;

//出目を取得+表示
function diceDisplay(){
  diceNum =  Math.floor( Math.random()*(diceMax +1 - diceMin)) + diceMin;
  $(`img`).attr(`src`, `${diceNum}.png`);
  }


//コマを進める動作
function forwardMotion(){

  leftVal = leftVal - diceNum;
  diceSum = 100 -leftVal;

  if(diceSum < 100){
    //情報取得＋表示
    countNum ++;
    $(`#count`).text(`${countNum}投目`);
    $(`#leftValue`).text(`ゴールまであと${leftVal}マス`);

    //コマの動作
    document.getElementById(diceSumId).innerHTML = "";
    diceSumId = ("square" + diceSum);
    document.getElementById(diceSumId).innerHTML = `<i id="currentPosition" i class="fas fa-car-side"></i>`;
    let element = document.getElementById('currentPosition');
    element.scrollIntoView({behavior: 'smooth',inline: 'center'}
  );

  }else{
    //情報の表示（ゴール）
    $(`#count`).text(``);
    $(`#leftValue`).text(`ゴールまであと0マス`);
    $(`#goal`).text(`ゴール！！！`);

    //コマの動作(ゴール)
    document.getElementById(diceSumId).innerHTML = "";
    diceSum = 100;
    diceSumId = ("square" + diceSum);
    document.getElementById(diceSumId).innerHTML = `<i id="currentPosition" i class="fas fa-car-side"></i>`;
    let element = document.getElementById('currentPosition');
    element.scrollIntoView({behavior: 'smooth',inline: 'end'});
    }
  };

//イベント発生時の動作
function eventOccurrence(){
  if(document.getElementById('diceSumId').classList.contains('event')){
    leftVal = 100;
  }
};




//サイコロを投げた時の処理
$(`#rollDice`).click(function(){
  diceDisplay();
  forwardMotion();
  eventOccurrence();
});
});
