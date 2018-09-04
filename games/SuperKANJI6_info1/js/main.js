//変数初期化
var type = 0;//デバッグ用変数
var gamestatus = 0;//ゲーム状況判定
var score = 0;//スコア集計用
var you = "あなた";//あなたの名前
var hp = 0;//体力初期化
var enemy = "";//敵
var enemyhp = 0;//敵体力
var stage = "startgame";//現在の状態を入れておく変数
var atkturn;//攻撃の進捗
var defturn;//防御の進捗
var itemnum = 0;//ゲーム設定用変数
var cmd = document.getElementById('cmd');//ショートカット変数

//特殊コマンドや進行用コマンドのヘルプを格納してある場所
cmdlist = ["name 名前を設定します",
            "menu メニューを開きます",
            "help この画面を開きます",
            "battle 戦いに身を投じます",
            "item アイテムで回復します",
            "atk 攻撃します(攻撃名が必須です)",
            "def 防御します(防御名が必須です)",
            "fromsoftware 身体は闘争を求める",
            "clear ログを消して軽量化します",
            "next 現在利用できません",
            "exit ゲームを終了して最終スコアを表示します"];
var c;
function cmdscan(){
    if (keyinputdata.startsWith("name")){name();}
    else if (keyinputdata.startsWith("menu")) {menu();}
    else if (keyinputdata.startsWith("help")) {help();}
    else if (keyinputdata.startsWith("街")) {town();}
    else if (keyinputdata.startsWith("城")) {castle();}
    else if (keyinputdata.startsWith("atkhistory")) {atkhistory();}
    else if (keyinputdata.startsWith("defhistory")) {defhistory();}
    else if (keyinputdata.startsWith("tutorial2")) {tutorial1();}
    else if (keyinputdata.startsWith("tutorial1")) {tutorial1();}
    else if (keyinputdata.startsWith("wget")) {wget();}
    else if (keyinputdata.startsWith("atk")) {atk();}
    else if (keyinputdata.startsWith("def")) {def();}
    else if (keyinputdata.startsWith("startup")) {startup2();}
    else if (keyinputdata.startsWith("start")　&& keyinputdata == "start") {start();}
    else if (keyinputdata.startsWith("fromsoftware")) {from();}
    else if (keyinputdata.startsWith("nameinput")) {nameinput();}
    else if (keyinputdata.startsWith("next")) {next();}
    else if (keyinputdata.startsWith("battle")) {battle();}
    else if (keyinputdata.startsWith("clear")) {clear_window();}
    else if (keyinputdata.startsWith("exit")) {gameover();}
    else if (keyinputdata == ""){cmdres = keyinputdata +"$";cmdresult(cmdres);}
    else {cmdres = keyinputdata +': Command not found.Try "help"';cmdresult(cmdres);}

}

//初期画面を描画する
function startup() {
if(stage=="startgame"){
//
  x = [ "Load form CNS...",
        "",
        "Starting SYSTEM... [OK]",
        "",
        "BaseSystem check... [OK]",
        "I/O devices check... [OK]",
        "",
        "Please wait...",
        "Network Connection... [OK]",
        "",
        "",
        "",
        "All done!",
        "",
        "Welcome!",
        "Please Enter 'startup' & EnterKey.",
        "startup と入力してEnterしてください。"
      ]
      write_window_ar(x);
      stage = "startup";
    }else{
      waitinput("menu");
    }
      }

function startup2(){
      clear_window();
      gamestatus = 0
      /*失敗作
      x = [ "  ■         ■   ■  ■         ■     ■      ■ ■",
            "  ■  ■■■■■  ■■■■■■■■■■       ■      ■     ■ ■",
            "■■■■■ ■  ■   ■  ■  ■    ■■■■■■■■■■   ■   ■■ ■",
            "  ■   ■  ■     ■■■■■■   ■        ■   ■   ■  ■",
            "■■■■■■ ■■■  ■  ■    ■   ■ ■■■■■■ ■   ■   ■  ■",
            "  ■  ■■■■■   ■ ■■■■■■        ■        ■  ■  ■",
            "■ ■■ ■   ■     ■■■■■■   ■■■■■■■■■■■   ■  ■  ■",
            "■ ■  ■   ■   ■■■■■■■■■       ■        ■  ■  ■",
            "■■■  ■■■■■  ■    ■■          ■        ■ ■■  ■",
            "■ ■  ■   ■  ■   ■  ■      ■  ■         ■■   ■",
            "■  ■■■■■■■■   ■■    ■■     ■■■          ■   ■",
            ""
          ]
          */
          if (screen.width > 780) {
            x.push(
          "■■■                          ■   ■   ■■   ■■  ■■    ■■  ■",
          "■■ ■■                        ■  ■■   ■■   ■■  ■■    ■■  ■",
          "■     ■  ■■ ■■■■    ■■■  ■■■ ■ ■■    ■■■  ■■■ ■■    ■■  ■",
          "■■■   ■  ■■ ■■ ■■  ■  ■  ■■  ■■■    ■■ ■  ■ ■ ■■    ■■  ■",
          "  ■■■ ■  ■■ ■   ■ ■■■■■■ ■   ■■■■   ■  ■  ■ ■■■■    ■■  ■",
          "    ■ ■  ■■ ■   ■ ■■     ■   ■  ■■  ■■■■■ ■  ■■■    ■■  ■",
          "■  ■■ ■  ■■ ■  ■■  ■     ■   ■   ■ ■■   ■ ■   ■■ ■■ ■■  ■",
          "■■■■  ■■■■■ ■■■■    ■■■  ■   ■   ■■■    ■■■   ■■  ■■■   ■",
          "            ■                                            ",
          "            ■                                            ",
          "",
          " ■■■ ",
          " ■   ",
          "■    ",
          "■■■■ ",
          "■■ ■■",
          "■   ■",
          "■   ■",
          "■■ ■■",
          " ■■■ "
        );
          } else {
            x.push("SuperKANJI",
            "",
            " ■■■ ",
            " ■   ",
            "■    ",
            "■■■■ ",
            "■■ ■■",
            "■   ■",
            "■   ■",
            "■■ ■■",
            " ■■■ "
          )

          }
      write_window_ar(x);

          x = [
        "ようこそ",
        "",
        "語彙力が全てを決める、素晴らしい世界へ。",
        "あなたが向き合っている実体は単なる無機質な剛体かもしれませんが、その向こう側には神韻縹渺な世界が広がっているのです。",
        "私とあなたはこの画面を通じてしか意思を交わすことが出来ませんが、私の最善を以てあなたに向こうの世界の状況をお伝えします。",
        "",
        "よろしくお願いしますね。",
        "",
        "Enterで次へ進みます。"
      ]
      write_window_ar(x);
      waitinput("nameinput");
}
function nameinput(){
  if(stage=="nameinput"){
    x = [
      "はじめにnameコマンドであなたの名前を教えてください。",
      "(初期値:あなた)"
    ]
    write_window_ar(x);
    //nameコマンドで名前を入力するのを待機してstageはnameに
    waitinput("name");
  }else {
    waitinput(menu);
  }
    }

function waitinput(a){
  stage = a;
  cmdinsert(a);
}

function nameinput2(){
    x = [
    you+"さんですね？",
    "それでは始めましょう！"
    ]
    write_window_ar(x);
    atkturn = "tutorial1"
    waitinput("tutorial1");
  }
function tutorial1() {
  if (atkturn=="tutorial1") {
  x =　["","","チュートリアル","攻撃方法を覚えよう","","この世界では攻撃ターンと防御ターンが交互に行われます","","","攻撃コマンドは[atk 攻撃の名前]です","",
  "攻撃の名前は攻撃力を決めるキーワードになります。","あなたの語彙力を全力で活用して強い攻撃を作ってください。",
"","同じ攻撃を繰り返すと威力が減ってしまうので気をつけましょう！"];
  write_window_ar(x);
  atkturn = "tutorial";
  waitinput("atk");
}else if (defturn=="tutorial") {
  x =　["","","チュートリアル2","防御方法を覚えよう","","","防御コマンドは[def 防御の名前]です","",
  "攻撃の名前は防御力を決めるキーワードになります。","あなたの語彙力を全力で活用して強固な守りを作ってください",
"","同じ防御を繰り返すと防御力が減ってしまうので気をつけましょう！"];
  write_window_ar(x);
  defturn = "tutorial2";
  waitinput("def");
}else if (stage=="tutorial2") {
  x =　["","","チュートリアル終了","説明は以上です","","何か困ったらhelpコマンドとmenuコマンドを","活用してください","ゲームの終了はexitコマンドで行えます","","Enterでメインメニューに移動します"];
  write_window_ar(x);
  atkturn = "";
  defturn = "";
  waitinput("menu");
}else{
    menu();
  }
}
  //終了条件を確認する。満たしたらgamestatusにフラグを立てる。(使わなくなった)
  function checkstatus () {
    var tex=hp<0;
    if (tex) {
      gamestatus=1;
      gameover();
    }
  }

//初期体力を設定する
function sethp() {
  s++;
  if (s==1){
  //入れ物に入れる
  var src = you;
  //謎の関数に入れて調理する(sub.js参照)
  var g = marysblood(src);
  //出てきた数字に基礎体力を加算して体力に代入
  hp = hp + g + 500;
}else {
  hp = 0;
}
}

//入力から攻撃値算出
function attackpt(atkn) {
  //入力を材料箱に入れる(誤爆防止)
  var src = atkn;
  //謎の関数に入れて調理する(sub.js参照)
  return g = 30 + marysblood(src);

}
//入力から防御値算出
function defpt(defn) {
  //入力を材料箱に入れる(誤爆防止)
  var src = defn;
  //謎の関数に入れて調理する(sub.js参照)
  return g = 30 + marysblood(src);

}

//攻撃コマンド
var atkhis = [];
var atkn;
var atkv = 0;
var atknum = 0;
function atk () {
if(stage == "atk"){
  var l = keyinputdata.startsWith("atk ");
  if (l&&keyinputdata.length>4){
    atkn = keyinputdata.slice(4);
  }else if(!l&&keyinputdata.length>3){
    atkn = keyinputdata.slice(3);
  }else{
    alert('認識できません'+'\n'+'やり直してください');
    waitinput("atk");
  }
  if(atkn==null){}else{
  atkv = attackpt(atkn);
  if (p<5) {}
  for (var i = 0; i < atkhis.length; i++) {
    if(atkn.indexOf(atkhis[i])!= -1){
      atkv =  Math.floor(atkv*0.8);
    }
  }
  atkhis.push(atkn);
  //スコア加算
  score +=atkv;
  var a = you + "は" + atkn + "で" + atkv + "のダメージを与える";
  cmdresult(a);

  //tutorial中はチュートリアルに戻る。それ以外は敵の守備ターンに渡す。
  if (atkturn=="tutorial"){
    var a = "攻撃チュートリアルは終わりです Enterでチュートリアルを続けます";
    cmdresult(a);
    defturn = "tutorial";
    atkturn = "tutorial";
    atkhis = [];
    waitinput("tutorial1");
  } else {
    atkturn = "enemy";
    atknum++;
    stage = "defenemy"
    defenemy();
  }
}
}else {
  var a = "攻撃ターンでは有りません";
  cmdresult(a);
}

}

//防御コマンド
var defhis = [];
var defn;
var defv = 0;
var defnum = 0;
function def () {
if(stage=="def"){
  var e = keyinputdata.startsWith("def ");
  if (e&&keyinputdata.length>4){
    defn = keyinputdata.slice(4);
  }else if(!e&&keyinputdata.length>3){
    defn = keyinputdata.slice(3);
  }else{
    alert('認識できません'+'\n'+'やり直してください');
    waitinput("def");
  }
  if(defn==null){}else{
  if(stage=="name"){nameinput2();}
  defv = defpt(defn);
  for (var i = 0; i < defhis.length; i++) {
    if(defn.indexOf(defhis[i])!= -1){
      defv =  Math.floor(defv*0.8);
    }
  }
  defhis.push(defn);
  //スコア加算
  score +=defv;
  var a = you + "は" + defn + "で" + defv + "のダメージを防ぐ";
  cmdresult(a);
  turnend = 1;
  //tutorial中はチュートリアルに戻る。それ以外は自分のターンに渡す。
  if (defturn=="tutorial2") {
    var a = "防御チュートリアルは終わりです Enterでチュートリアルを続けます";
    cmdresult(a);
    defhis = [];
    defturn = "";
    waitinput("tutorial2");
  } else {
    atkresult("");
    defnum++;
    var a = you + "の攻撃ターンです";
    cmdresult(a);
    atkturn = "atk";
    waitinput("atk");
  }
  }
}else {
  var a = "防御ターンでは有りません";
  cmdresult(a);
}
}

//各防御ターンが終了した時点で実際の体力に結果を反映して勝利か敗北の処理をする
function atkresult (a) {
  if (turnend == 1 && a == "") {
    var m = defv-enemyatkv
    if(m>0){
      var a = "ダメージは完全に防御されました"  + '\n' + you + "の残体力は" + hp + "です" + '\n';
      cmdresult(a);
      turnend = 0;
    }else {
      hp -= Math.abs(m);
      var a = Math.abs(m) + "ダメージ受けました"  + '\n' + you + "の残体力は" + hp + "です" + '\n';
      cmdresult(a);
      var j = (enemyhp <= 0) || (hp <= 0)
      if(j){
        j = enemyhp > hp;
        switch (j) {
          case true:
          a = you + "は目の前が真っ暗になった" + '\n';
          cmdresult(a);
          a = "ゲームオーバー画面に遷移します";
          cmdresult(a);
          setTimeout(function () {
            gameover();
          }, 250);
            break;
          case false:
          a = enemy + "は目の前が真っ暗になった" + '\n';
          cmdresult(a);
          x = [
            "無事戦いを終えました",
            "",
            "残体力 :" + hp,
            "回復するにはitemを使いましょう",
            "",
            "Enterでメインメニューに戻ります"
          ]
          write_window_ar(x);
          atkturn = "";
          defturn = "";
          waitinput("menu");
            break;
          default:

        }
      }
      turnend = 0;
    }
  }else if (a == "enemy"){
    var t = enemydefv-atkv
    if(t>0){
      var a = "ダメージは完全に防御されました" + '\n' + enemy + "の残体力は" + enemyhp + "です" + '\n';
      cmdresult(a);
      turnend = 0;
      nextatkene();
    }else {
      enemyhp -= Math.abs(t);
      var a = Math.abs(t) + "ダメージ受けました" + '\n' + enemy + "の残体力は" + enemyhp + "です" + '\n';
      cmdresult(a);
        var u = (enemyhp <= 0) || (hp <= 0);
      if(u){
        u = (enemyhp > hp);
        if (u) {
          a = you + "は目の前が真っ暗になった";
          cmdresult(a);
          a = "ゲームオーバー画面に遷移します";
          cmdresult(a);
          setTimeout(function () {
            gameover();
          }, 250);
        }else if (!u){
          a = enemy + "は目の前が真っ暗になった";
          cmdresult(a);
          x = [
            "無事戦いを終えました",
            "",
            "残体力 :" + hp,
            "回復するにはitemを使いましょう",
            "",
            "Enterでメインメニューに戻ります"
          ]
          write_window_ar(x);
          atkturn = "";
          defturn = "";
          waitinput("menu");

        }
      }else {

      }
      turnend = 0;
    }
    nextatkene();
  }
}
//敵防御ターン終了後攻撃ターンに遷移するときの処理
function nextatkene(){
  var u = (enemyhp <= 0) || (hp <= 0);
  if (!u) {
    stage = "atkenemy"
    setTimeout(function () {
      atkenemy();
    }, 10);
  }
}

//次のページに送る(使わなかった)
function next () {
  var a = "現在利用できません"
  cmdresult(a);
}

//戦闘開始時に敵のステータスを表示(この時点で戦闘開始フラグが立ちメニューが戦闘時メニューになる)
function start () {
  if(stage=="start"){
  x =[
    "情報",
    "体力 :" + hp,
    "敵 : " + enemy,
    "敵体力 : " + enemyhp,
    "",
    "あなたの攻撃ターンです。",
    ""
  ]
  write_window_ar(x);
  waitinput("atk");
  atkturn = "atk";
}else if (stage == "startup") {
  waitinput(stage);
} else {
  waitinput("menu");
}
}

//ヘルプコマンドの処理
function help () {
  cmdresult("****ヘルプ****");
  write_window_ar(cmdlist);
  cmdresult("*************"+'\n');
  //var a = "現在利用できません"
  //cmdresult(a);
}
var s = 0;

function menu (p) {
  if (stage=="menu") {waitinput("battle");}
  else {waitinput(stage);}
  //戦闘時メニュー
  var m = !(atkturn == "") || !(defturn == "");
  if (m) {
    turncheker();
      x =　[
        "",
        "***メニュー***",
         ax,
        "残体力 :" + hp,
        "敵 : " + enemy,
        "敵残体力 : " + enemyhp,
        "アイテムを使う : item",
        "攻撃名履歴を見る : atkhistory",
        "防御名履歴を見る : defhistory",
        "",
        "",
        "ゲームを終了する : exit",
        "**************",
        ""];
        write_window_ar(x);

  //非戦闘時メニュー
  } else {
    areacheker();
      x =　[
        "",
        "***メニュー***",
         ax,
         "残体力 :" + hp,
         //"街に出る : 街",
         //"城に行く : 城",
         "戦いに身を投じる(難易度) : battle 数字",
         "アイテムを使う : item",
        "",
        "ゲームを終了する : exit",
        "**************",
        ""];
        write_window_ar(x);
      }
  //var a = "現在利用できません"
  //cmdresult(a);
}

//メニューの現在地表示用の分岐(今回はマップを実装していないのでdefaultのみしよう)
var ax;
function areacheker () {
  var w = "街" || "城";
  var t = "menu";
  switch (stage) {
    case w:
      return  ax = "@" + stage + "エリア";
      break;
    case t:
      return ax = "メインメニュー";
      break;
    default:
    return  ax = "@" + stage + "エリア";
  }
}
//戦闘時メニューのターン表示用
function turncheker () {
  switch (stage) {
    case "atk":
      return  ax =  you + "の攻撃ターン";
      break;
    case "def":
      return ax =  you + "の防御ターン";
      break;
    case "atkenemy":
      return  ax =  enemy + "の攻撃ターン";
      break;
    case "defenemy":
      return ax =  enemy + "の防御ターン";
      break;
    default:
    return  ax = "@" + stage + "ターン";
  }
}

//フロムソフトウェアのゲームが元のインターネットミームにあやかって作った
function from (){
  a = "フロムがアーマードコアの新作を作る";
  cmdresult(a);
  setTimeout(function () {
    location.href="https://www.armoredcore.net";
  }, 150);
}

//敵攻撃ターンの処理
var enemyatkv = 0;
function atkenemy(){
  var l = "";
  cmdresult(l);
   l = enemy + "の攻撃ターンです" + '\n';
  cmdresult(l);
  var x = ["",
       "░░░░░░███████ ]▄▄▄▄▄▄▄▄  ",
       "▂▄▅█████████▅▄▃▂    ☻/ ",
       "Il███████████████████] /▌ ",
       "◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤ / \ ",
       ""
     ]
  write_window_ar(x);
  var a = enemy.length-4;
  var y = textgen(a,a);
  enemyatkv = 10 + marysblood(y);
  var a = enemy + " は " + y + " で " + enemyatkv + "のダメージを与える" + '\n';
  cmdresult(a);
  defturn = "def";
  waitinput("def");
}

//敵防御ターンの処理
var enemydefv = 0;
function defenemy(){
  var l = "";
  cmdresult(l);
   l = enemy + "の防御ターンです" + '\n';
  cmdresult(l);
  var a = enemy.length-4;
  var y = textgen(a,a);
  enemydefv = 10 + marysblood(y);
  l = enemy + " は " + y + " で " + enemydefv + "のダメージを防ぐ" + '\n';
  cmdresult(l);
  atkturn = "atkenemy"
  atkresult("enemy");
}
//アイテム(現在利用できません)
function item () {
  var a = "現在利用できません"
  cmdresult(a);
}
var p = 0;
//戦闘準備コマンドの処理
function battle(p) {
  var u = (stage.startsWith("tutorial") || stage.startsWith("atk") || stage.startsWith("def") || stage == "startup" );
  //戦闘時とチュートリアル中はコマンドを受け付けない
  if (u) {
    var l = "チュートリアルを終えていないか戦闘中の可能性があります。";
    cmdresult(l);
    waitinput(stage);
  }else{
  var l = "敵を生成しています";
  cmdresult(l);
  turnend = 1;
  var m = keyinputdata.startsWith("battle ");
  if (m&&keyinputdata.length>7){
    p = Number(keyinputdata.slice(7));
    enemygen(p);
    cmdresult("準備が完了しました！始まります");
  }else if(!m&&keyinputdata.length>6){
    p = Number(keyinputdata.slice(6));
    enemygen(p);
    cmdresult("準備が完了しました！始まります");
  }else{
    l = "難易度が指定されていないため1になります。";
    cmdresult(l);
    enemygen(1);
    cmdresult("準備が完了しました！始まります");
  }
  waitinput("start");
  }
}

//敵生成部分
function enemygen(a) {
  if (turnend = 1) {
    enemy = "";
    enemyhp = 0;
  }
  enemynamegen(a);
  if (a>5) { a= a**2;}
  enemyhp = marysblood(enemy);
  enemyhp *= 10;
  if (a>7) { enemyhp *= 10;}
  if (a>90) { enemyhp *= 3;}
  if (a>3000) { enemyhp *= 2;}
  if (a>500000) { enemyhp *= 2;}
  if (a>26000000) { enemyhp *= 2;}
  if (a>67600000000) { enemyhp *= a;}

}
//敵の名前を生成
function enemynamegen(a) {
  var namesrcnum = a + 4;
  enemy = jis4[a];
  enemy += other[a+1];
  var y = textgen(a,namesrcnum);
  enemy += y;
  var ontime=new Date();
  enemy += ontime.getMinutes() + ontime.getSeconds()
}
//敵生成終わり

//難易度と最低文字数から適当な文字列を生み出す関数
function textgen(a,namesrcnum) {
var y = "" ;
namesrcnum = Number(namesrcnum);
a = Number(a);
for (var i = 1; i < namesrcnum; i++) {
  //乱数生成
  var min = 0;
  var max = jis1.length;
  var b = Math.floor( Math.random() * (max + 1 - min) ) + min;
  y += jis1[b];
  if (a>10) {
    min = 0;
    max = jis2.length;
    b = Math.floor( Math.random() * (max + 1 - min) ) + min;
    y += jis2[b];
  }
}
return y;
}

//攻撃履歴
function atkhistory() {
  cmdresult("***攻撃履歴***");
  write_window_ar(atkhis);
  cmdresult("**************"+'\n');
}

//防御履歴
function defhistory() {
  cmdresult("***防御履歴***");
  write_window_ar(defhis);
  cmdresult("**************"+'\n');
}

//旧終了処理。デモ用。
function oldend() {
  x =　["チュートリアルお疲れさまでした","残念ながら時間が来てしまったので今回はここまでです","今度は本編で会いましょう","","さようなら","","exitコマンドで終了します"];
  write_window_ar(x);
    waitinput(exit);
}
//
function log_dl() {
     write_window_ar(z);
     var text_aa = document.getElementById('viewarea').value.replace(/\r\n|\n|\r/g, "\r\n");;
     var blob_aa = new Blob([text_aa], {
       type: "text/plain"
     });
     var log_aa = document.createElement("a");
     log_aa.href = URL.createObjectURL(blob_aa);
     log_aa.target = "_blank";
     log_aa.download = "log.txt";
     log_aa.style = "display:none;"
     log_aa.click();
}

//敗戦処理
function gameover() {
  //ログダウンロード用
  Array.prototype.push.apply(z, windowhistoryarray("viewarea"));
  //scoresum();
  //if (gamestatus==1) {
    score += hp;
    console.log(q+"回目の入力で終了しました。"+score+"pt獲得しました。");
    document.title = "ゲームオーバー:" + document.title;
    //ゲーム終了画面描画(view.js参照)
    change_viewframe('<h1 class="display-4">ゲームオーバー</h1><br>\
    <p class="lead">'+you+'は'+q+'回目の入力でゲームを終了しました。<br>'+score+'pt獲得しました。</p><br><p>残体力は\
    '+hp+'でした</p><br><br><input type="button" name="poweron" class="btn btn-danger" onclick="location.href=\'index.html\'"  value="トップに戻る" autofocus /><br><br>\
    <input type="button" name="log" class="btn btn-danger" onclick="log_dl()"  value="ログをダウンロードする"/><textarea id="viewarea" style="display:none;" cols="100" rows="20" readonly></textarea>');
  //      }else {
  //        console.log("どこか問題がある");
  //}
}
