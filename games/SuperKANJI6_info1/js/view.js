//表示書き換えする関数を集約する(らしい)
//game.htmlの主たる表示域を書き換える
function change_viewframe(a) {
 document.getElementById('view_frame').innerHTML = a;
}
//配列で表示内容を受け取りいい感じに表示する。
function write_window_ar(x) {
  var a = "";
  var viewarea = document.getElementById ('viewarea');
  for (var i = 0; i < x.length; i++) {
    a = x[i]+'\n';
    viewarea.value += a;
    viewarea.scrollTop = document.getElementById('viewarea').scrollHeight;
  }
}
//描画系初期化
var z = [];
function clear_window() {
  var viewarea = document.getElementById ('viewarea');
  Array.prototype.push.apply(z, windowhistoryarray("viewarea"));
  x = [""];
  viewarea.value = "";
}
function windowhistoryarray(a) {
var text_aaaa  = document.getElementById(a).value.replace(/\r\n|\n|\r/g, "\n");
var lines_aaaa = text_aaaa.split( '\n' );
var outArray = new Array();

for ( var i = 0; i < lines_aaaa.length; i++ ) {

    outArray.push( lines_aaaa[i] );
}

return outArray;
}

//コマンド入力欄に次の操作に必要なコマンドを入れるための関数
function cmdinsert(a) {
    var cmd = document.getElementById('cmd');
    cmd.value = a;
    }

//何もしない関数
function nullfunc() {
//何もしない
}
var nullfunctime =  nullfunc();

//inputscanの変数だけ先に持ってこないとerror吐くはず
var keyinputdata;//直近の入力データをしまっておく場所
var i = 1;//コマンド履歴用変数
var keyhis= [];//コマンド履歴配列
var q = 0;//promise導入前の残骸とデバッグ用変数

//入力を検知して特殊なキーのときだけよしなにする。Enter受付時に内容を配列に格納してinput['text']を""ni
function inputscan() {
    document.getElementById("cmd").onkeydown = function(key){
          var cmd = document.getElementById('cmd');
          if( key.keyCode == 13) {
              if (typeof cmd.value === 'undefined') {
                keyinputdata= "";
              }else {
                keyinputdata = cmd.value;}
                keyhis.push(keyinputdata);
                cmd.value = "";
                cmdscan();
                i=0;
                q++;
                //stageに合わせて呼び出し関数を変える
                //stagegimmick();
                //入力キャンセル☆
                return false;
            }else if (key.keyCode == 38 && i < keyhis.length ) {
              i++;
              var a = keyhis.length - i;
              if (typeof keyhis[a] === 'undefined'){}else
              {cmd.value = keyhis[a];}
              //入力キャンセル☆
              return false;
            }else if (key.keyCode == 40 && i > 0) {
              i--;
              var a = keyhis.length - i;
              if (typeof keyhis[a] === 'undefined'){
                cmd.value = "";
              }else
                {cmd.value = keyhis[a];
              }
              //入力キャンセル☆
              return false;
            }else {
          //現状意味の無いelse(モバイルデバイス関連であとで埋めるかもしれない)
        }
      }
  }
//読み込み順の都合でここに配置されたあれ
/*
function stagegimmick() {
  if (stage="startup") {startup();}
  if (stage="nameinput") {nameinput();}
  if (stage="start") {start();}
}*/
