$(function(){

let countNum = 0; //振った回数
let diceNum; //出目
let diceSum = 0; //出目の合計
let diceSumId = ("square" + diceSum) //出目の合計値=コマの位置
let leftVal = 100; //残りのマス
let diceMax = 6; //サイコロの目の最大値
let diceMin = 1; //サイコロの目の最小値
let diceImg; //サイコロの画像
let forwardMoveNumMax = 4; //進むイベントで動く最大絶対値
let forwardMoveNumMin = 1; //進むイベントで動く最小絶対値
let backwardMoveNumMax = -4; //戻るイベントで動く最大絶対値
let backwardMoveNumMin = -1; //戻るイベントで動く最小絶対値



//初期画面
document.getElementById(diceSumId).innerHTML = `<i class="fas fa-car-side"></i>`;

//出目をランダムに決定+表示
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
  if(document.getElementById(diceSumId).classList.contains('event')){
    selectEvent();
  }
};

function selectEvent(){
  selectNum = Math.floor( Math.random()*2)
  if(selectNum === 1){forwardEvent()}
  else{backwardEvent()}
};

//進むイベント
//進むマスをランダムに決定＋表示
function forwardEvent(){
  forwardMoveNum =  Math.floor( Math.random()*(forwardMoveNumMax +1 - forwardMoveNumMin)) + forwardMoveNumMin;
  $(`#eventInfo`).text(`イベント発生！ +${forwardMoveNum}マス`);
  setTimeout(deleteInfo, 1300);
  setTimeout(forwardEventSquare, 1500);
}
//イベント時のコマの進む動作
function forwardEventSquare(){
  leftVal = leftVal - forwardMoveNum;
  diceSum = 100 -leftVal;

    //情報取得＋表示
    $(`#leftValue`).text(`ゴールまであと${leftVal}マス`);
    //コマの動作
    document.getElementById(diceSumId).innerHTML = "";
    diceSumId = ("square" + diceSum);
    document.getElementById(diceSumId).innerHTML = `<i id="currentPosition" i class="fas fa-car-side"></i>`;
    let element = document.getElementById('currentPosition');
    element.scrollIntoView({behavior: 'smooth',inline: 'center'}
  );
}

//戻るイベント
//戻るマスをランダムに決定＋表示
function backwardEvent(){
  backwardMoveNum =  Math.floor( Math.random()*(backwardMoveNumMax +1 - backwardMoveNumMin)) + backwardMoveNumMin;
  $(`#eventInfo`).text(`イベント発生！ ${backwardMoveNum}マス`);
  setTimeout(deleteInfo, 1300);
  setTimeout(backwardEventSquare, 1500);
}
//イベント時のコマの進む動作
function backwardEventSquare(){
  leftVal = leftVal - backwardMoveNum;
  diceSum = 100 -leftVal;

    //情報取得＋表示
    $(`#leftValue`).text(`ゴールまであと${leftVal}マス`);
    //コマの動作
    document.getElementById(diceSumId).innerHTML = "";
    diceSumId = ("square" + diceSum);
    document.getElementById(diceSumId).innerHTML = `<i id="currentPosition" i class="fas fa-car-side"></i>`;
    let element = document.getElementById('currentPosition');
    element.scrollIntoView({behavior: 'smooth',inline: 'center'}
  );
}

//イベント発生の情報を消去
function deleteInfo(){
  $(`#eventInfo`).text(``);
}

//サイコロを投げた時の処理
$(`#rollDice`).click(function(){
  diceDisplay();
  forwardMotion();
  eventOccurrence();
});
});
