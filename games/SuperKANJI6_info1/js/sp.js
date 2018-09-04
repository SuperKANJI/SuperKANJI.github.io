//レスポンシブ対応のためだけに存在するなにか
//レスポンシブ対応のためだけに存在するエリア
function mobilesupport() {
//画面幅で判定
device = (screen.width < 641 ? 'mobile' : 'pc');
//コメントつける程度に編集するならview.jsに統合したほうがよかったのではという噂
if (device == "mobile") {
  change_viewframe('<div class="center-block">\
    <div name="view" class="view" id="wiew">\
      <textarea name="view" id="viewarea" cols="30" rows="40" readonly></textarea>\
    </div>\
    <br>\
  </div>\
  ><input type="text" name="cmd" id="cmd" size="100" autofocus readonly/>\
<!--ソフトウェアキーボード出す奴-->\
\
  ');}
    else {
      //何もしない
    nullfunc();
  }
//入力欄の横幅を調整

//一部の要素が回り込んだり非表示になる問題を回避

//mouse系のイベントで取り切れない入力を取得できるように

//ソフトウェアキーボードの表示による表示領域の変化を吸収

}
