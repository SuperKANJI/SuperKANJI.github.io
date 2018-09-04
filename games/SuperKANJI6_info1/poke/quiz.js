/*HTML内でフォームごと生成するjavascript。本当はinnerHTMLを使うべきだが昔のコードなので許して欲しい。
<script src="quiz.js"></script>
<script type="text/javascript"> <!--
document.write('<form name="frm" action="javascript://" method="get">');
document.write("<p>");
document.write('<textarea wrap="soft" name="msg" rows=10 cols=50>');
if(!chk_ques()){document.write(jiake+"それでは、第1問。\r");
document.write(jiake+mondai[shutsudai[p_qut]+"q"]);}
else{document.write(jiake+sp_ques("q"));}
document.write("<\/textarea><br>");
for(var i=1;i<=sct;i++){
make_btn("kaitou("+i+");",i);
var sntk=mondai[shutsudai[p_qut]+"s"+sentaku[i]];
if(chk_ques()){sntk=sp_ques("s",sntk);}
document.write('<input type="text" name="ans'+i+'" value="'+sntk+'" size=40><br>');
}
make_btn("replay();","リプレイ");
document.write("<\/p>");
document.write("<\/form>");
//-->
</script>


*/


//初期設定
qut=5;//出題数
sct=4;//選択肢数
jiake="　";//フォーム縁にかぶらないように少しずらす奴
//正答率の評価
//注意「"]を含める時は「\"」と書く。(エスケープする)
function hyoka(ritu){
if(ritu==100){return "100パーセント";}//100％
else if(ritu>=80){return "80パーセント以上";}//80％以上
else if(ritu>=50){return "50パーセント以上";}//50％以上
else if(ritu>=30){return "30パーセント以上";}//30％以上
else if(ritu>0){return "30パーセント未満";}//30％未満
else{return "0パーセント";}//0％
}
//問題文読み込み
function ques_load(){
add_ques("\whatnum");//「このもんだいは何問目？」
add_sel(0);//正解は「0」
add_sel(2);
add_sel(1);
if(rndm(1,0)>0){add_sel(-1);}
else{add_sel(3);}

//問題作成について
//次のようなスクリプトを1題ごとに追加。
/*サンプル
add_ques("問題文");
add_sel("正解");
add_sel("不正解");
add_sel("不正解");
add_sel("不正解");
add_kaisetu("解説、コメント等");
*/
//問題文を「\whatnum」にした場合、「今、何問目？」という問題になる。正解の選択肢には「0」を不正解の選択肢には0以外の任意の整数を入れるといい感じに揺れる。

}
if(!Math.random){a=535897;}
mondai=new make_arr(0);
shutsudai=new make_arr(0);
all_qut=0;
ques_load();
sentaku=new make_arr(sct);
st_init();
//初期化
function st_init(){
p_qut=1;
seikai=0;
shutsudai=new make_arr(qut);
var junjo=new make_arr(qut);
if(all_qut<qut){qut=all_qut;}
for(var i=1;i<=all_qut;i++){
junjo[i]=i;
}
//おきんの謎コード
for(var i=1;i<=qut;i++){
var rmx=all_qut-(i-1);
var r=rndm(rmx,1);
shutsudai[i]=junjo[r];
junjo[r]=junjo[rmx];
junjo[rmx]=junjo[r];
}
sel_shuffle();
}
//選択肢並び替え
function sel_shuffle(){
var junjo=new make_arr(sct);
for(var i=1;i<=sct;i++){
junjo[i]=i;
}
tru_n=0;//配列中の正解の番号
for(var i=1;i<=sct;i++){
rmx=sct-(i-1);
var r=rndm(rmx,1);
sentaku[i]=junjo[r]-1;
if(sentaku[i]==0){tru_n=i;}
junjo[r]=junjo[rmx];
junjo[rmx]=junjo[r];
}
}
//問題追加
function add_ques(vl){
all_qut++;
sel_n=0;
vl=rep_crlf(vl);
add_arr(mondai,vl,all_qut+"q");
}
function add_sel(vl){
//vl=html_ent(vl);
add_arr(mondai,vl,all_qut+"s"+sel_n);
sel_n++;
}
function add_kaisetu(vl,nmb){
vl=rep_crlf(vl);
var ky=all_qut+"a";
if((nmb)||(nmb+""=="0")){ky+=nmb;}
add_arr(mondai,vl,ky);
}
//配列関数
function make_arr(x){
this.length=x;
for(i=1;i<=x;i++){this[i]="";}
return this;
}
function add_arr(arr,vl,ky){
var arlen=arr.length+1;
arr.length=arlen;
if(ky){arr[ky]=vl;}else{arr[arlen]=vl;}
}
//乱数
function rndm(mx,mn){
var rdata=mx;
if(Math.random){rdata=Math.floor(Math.random()*(mx-mn+1))+mn;}
else{
var hzk=new Date();hzk=hzk.getTime();
//初期値aは初期設定
a++;
var leng=(hzk+"").length;var rvse="";
for(var i=leng;i>0;i--){rvse=rvse+(hzk+"").substring(i-1,i);}
rvse=rvse-0;if(!rvse){rvse=a*5629+413;}
var b=Math.sqrt(rvse);var c=rvse%a;var cul=(a*b)+c;
leng=(cul+"").length;if(leng%2==1){cul="0"+cul;}
cul=(cul+"").substring(Math.floor(leng/4),Math.ceil(leng-(leng/4))-1);
a=Math.ceil(cul);if(!cul){cul="1415926";}else{cul=cul+"";}
if(a%9==0){a++;}
cul="0."+cul.substring(cul.indexOf(".")+1)+(a%9);
rdata=Math.floor((cul-0)*(mx-mn+1))+mn;
}
return rdata;
}
//置換エリア
//改行置換(改行コード)
function rep_crlf(vl){
if(vl){
if((vl.indexOf("\n")>=0)&&(vl.indexOf("\n"+jiake)<0)){vl=rplce(vl,"\n","\n"+jiake);}
else if(vl.indexOf("\r"+jiake)<0){vl=rplce(vl,"\r","\r"+jiake);}
}
return vl;
}
//エンティティ変換(インジェクション対策)
function html_ent(vl){
vl=rplce(vl,'&',"&amp;");
vl=rplce(vl,'"',"&quot;");
vl=rplce(vl,'<',"&lt;");
vl=rplce(vl,'>',"&gt;");
return vl;
}
function rplce(tx,deli,rep){
if((!tx)||(!deli)||((tx.indexOf(deli))&&tx.indexOf(deli)<0)){return tx;}
var shori="";
var deli_len=deli.length;
while(tx.indexOf(deli)>=0){
shori+=tx.substring(0,tx.indexOf(deli));
shori+=rep;
tx=tx.substring(tx.indexOf(deli)+deli_len);
if(!tx){break;}
}
shori+=tx;
return shori;
}
//ボタン生成()
function make_btn(onclk,vl){
document.write('<input type="button" value="'+vl+'" onClick="'+onclk+'">');
}
//問題文判別(今何問目？を識別する用)
function chk_ques(pque){
var pque=mondai[shutsudai[p_qut]+"q"];
if(pque=="\whatnum"){return true;}else{return false;}
}
//今何問目？用コード
function sp_ques(qors,vl){
if(qors == "q"){return "今、何問目？";}
if(qors == "s"){
vl=parseInt(vl);
vl=vl-0+p_qut-0;
return vl+"問目";
}
}
//フォーム初期化
frm_clr();
frm_set();
//フォーム出力及びボタン操作に直接関わる関数
//回答の処理
function kaitou(x){
if(qut<p_qut){return;}
if(sentaku[x]=="0"){document.frm.msg.value=jiake+"ご名答！\r";seikai++;}
else{
document.frm.msg.value=jiake+"残念。";
document.frm.msg.value+="正解は"+tru_n+"番の";
if(!chk_ques()){document.frm.msg.value+=mondai[shutsudai[p_qut]+"s0"];}
else{document.frm.msg.value+=sp_ques("s",mondai[shutsudai[p_qut]+"s0"]);}
document.frm.msg.value+="です。\r";
}
if(mondai[shutsudai[p_qut]+"a"+sentaku[x]]){document.frm.msg.value+=jiake+mondai[shutsudai[p_qut]+"a"+sentaku[x]]+"\r";}
else if(mondai[shutsudai[p_qut]+"a"]){document.frm.msg.value+=jiake+mondai[shutsudai[p_qut]+"a"]+"\r";}
document.frm.msg.value+="\r";
p_qut++;
next_ques();
}
//リプレイ
function replay(){
st_init();
document.frm.msg.value="";
frm_set();
}
//次の問題
function next_ques(){
sel_shuffle();
if(qut>=p_qut){frm_set();}
if(qut+1==p_qut){frm_last();}
}
//フォーム消去
function frm_clr(){
document.frm.msg.value="";
sel_clr();
}
//選択肢欄の消去
function sel_clr(){
for(var i=1;i<=sct;i++){
eval("document.frm.ans"+i+".value='';");
}
}
//問題をフォームに出力
function frm_set(){
var chkq=chk_ques();
var pque=mondai[shutsudai[p_qut]+"q"];//現在の問題
if(!chkq){document.frm.msg.value+=jiake+"それでは、第"+p_qut+"問。\r";}
else{pque=sp_ques("q");}
document.frm.msg.value+=jiake+pque;
for(var i=1;i<=sct;i++){
var sntk=mondai[shutsudai[p_qut]+'s'+sentaku[i]];
if(chkq){sntk=sp_ques("s",sntk);}
eval("document.frm.ans"+i+".value=sntk;");
}
}
function frm_last(){
document.frm.msg.value+=jiake+"クイズ終了(^O^)\r";
var ritu=(seikai/qut)*1000;
ritu=parseInt(ritu)/10;
document.frm.msg.value+=jiake+"正答数："+qut+"問中"+seikai+"問正解です\r";
document.frm.msg.value+=jiake+"正答率："+ritu+"％なのよな\r";
document.frm.msg.value+=jiake+hyoka(ritu);
sel_clr();
}
