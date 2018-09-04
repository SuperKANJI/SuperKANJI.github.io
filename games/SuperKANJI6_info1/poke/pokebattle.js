function main_pokebattle() {

}
var hp =200;
var pp = 15;
var atk = 0;
var pokename = "河添";
var enemy;
var enemyhp;
var status = [pokename,hp,pp,atk,enemy,enemyhp];
if(document.cookie=="value=true"){load();}

function load() {
localStorage.setItem("pokenum", pokenum);
localStorage.setItem("status", status);
}
function save() {
alert('保存しました!');

localStorage.setItem("pokenum", pokenum);
localStorage.setItem("status", status);
}
