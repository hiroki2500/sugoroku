$(function(){

//player1
let countNum1 = 0; //振った回数
let diceNum1; //出目
let diceSum1 = 0; //出目の合計
let diceSumId1 = ("square" + diceSum1) //出目の合計値=コマの位置
let leftVal1 = 100; //残りのマス



let diceMax = 6; //サイコロの目の最大値
let diceMin = 1; //サイコロの目の最小値
let diceImg; //サイコロの画像
let forwardMoveNumMax = 4; //進むイベントで動く最大絶対値
let forwardMoveNumMin = 1; //進むイベントで動く最小絶対値
let backwardMoveNumMax = -4; //戻るイベントで動く最大絶対値
let backwardMoveNumMin = -1; //戻るイベントで動く最小絶対値



//初期画面
document.getElementById(diceSumId1).innerHTML = `<i id="currentPosition" i class="fas fa-car-side playerIcon1"></i>`

//出目をランダムに決定+表示
function diceDisplay1(){
  diceNum1 =  Math.floor( Math.random()*(diceMax +1 - diceMin)) + diceMin;
  $(`img`).attr(`src`, `${diceNum1}.png`);
  }



//コマを進める動作
function forwardMotion1(){
  leftVal1 = leftVal1 - diceNum1;
  diceSum1 = 100 -leftVal1;

  if(diceSum1 < 100){
    //情報取得＋表示
    countNum1 ++;
    $(`#count`).text(`${countNum1}投目`);
    $(`#leftValue`).text(`ゴールまであと${leftVal1}マス`);

    //コマの動作
    document.getElementById(diceSumId1).innerHTML = document.getElementById(diceSumId1).innerHTML.replace('<i id="currentPosition" i class="fas fa-car-side playerIcon1"></i>','');
    diceSumId1 = ("square" + diceSum1);
    document.getElementById(diceSumId1).innerHTML = '<i id="currentPosition" i class="fas fa-car-side playerIcon1"></i>';
    let element = document.getElementById('currentPosition');
    element.scrollIntoView({behavior: 'smooth',inline: 'center'}
  );

  }else{
    //情報の表示（ゴール）
    $(`#count`).text(``);
    $(`#leftValue`).text(`ゴールまであと0マス`);
    $(`#goal`).text(`ゴール！！！`);

    //コマの動作(ゴール)
    document.getElementById(diceSumId1).innerHTML = "";
    diceSum1 = 100;
    diceSumId1 = ("square" + diceSum1);
    document.getElementById(diceSumId1).innerHTML = `<i id="currentPosition" i class="fas fa-car-side playerIcon1"></i>`;
    let element = document.getElementById('currentPosition');
    element.scrollIntoView({behavior: 'smooth',inline: 'end'});
    }
  };




//サイコロを投げた時の処理
$(`#rollDice1`).click(function(){
  diceDisplay1();
  forwardMotion1();
});


});
