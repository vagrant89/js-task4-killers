function read() {
  alert(sessionStorage.sequence);
}


window.onload=function(){
 var killersTerm=document.getElementById('killersTerm')
 var yiYan=document.getElementById('yiYan')
 var faYan=document.getElementById('faYan')
 var vote=document.getElementById('vote')
 var turn=document.getElementById('time')
 var endGame=document.getElementById('endGame')
 var judgersNote=document.getElementById('judgersNote')

 // if (!Boolean(sessionStorage.turnCount)) {
 //   sessionStorage.turnCount=1;
 // }

 for (var i = 0; i < Math.ceil(Number(sessionStorage.turnCount)/2); i++) {
   turn.firstElementChild.innerHTML="第"+(i+1)+"天";
   var cloneTime=turn.cloneNode(true);
   cloneTime.style.display="block";
   document.getElementById('dayflow').appendChild(cloneTime);
 }

 killersTerm.onclick=function(){
   var stage=Number(sessionStorage.stage)
   if (stage==0) {
     window.location.href="killAndVoting.html"
     sessionStorage.pageTitleIndex=1;
     stage=stage+1;
     sessionStorage.stage=stage;
   }else {
     confirm("请按顺序操作")
   }
 }

 yiYan.onclick=function(){
   var stage=Number(sessionStorage.stage)
   if (stage==1) {
     var x=confirm("死者亮明身份并发表遗言")
     if (x) {
       stage=stage+1;
       sessionStorage.stage=stage;
       location.reload()
     }
   }
   else {
     confirm("请按顺序操作")
   }
 }

faYan.onclick=function(){
  var stage=Number(sessionStorage.stage)
  if (stage==2) {
    var x=confirm("玩家依次发言")
    if (x) {
      stage=stage+1;
      sessionStorage.stage=stage;
      location.reload()
    }
  }
  else {
    confirm("请按顺序操作")
  }
}

 vote.onclick=function(){
   var stage=Number(sessionStorage.stage)
   if (stage==3) {
     window.location.href="killAndVoting.html"
     sessionStorage.pageTitleIndex=0;
     stage=0;
     sessionStorage.stage=stage;
   }else {
     confirm("请按顺序操作")
   }
 }

 endGame.onclick=function(){
   var x=confirm("本局游戏结束？");
   if (x) {
     window.location.href='result.html';
   }
 }
 judgersNote.onclick=function(){
   window.location.href='judgersNote.html'
 }

 //color control
 var stage=Number(sessionStorage.stage)
 var pointLeft1=document.getElementById('pointLeft1')
 var pointLeft2=document.getElementById('pointLeft2')
 var pointLeft3=document.getElementById('pointLeft3')
 var pointLeft4=document.getElementById('pointLeft4')

 switch (stage) {
   case 3:
      faYan.style.backgroundColor="black";
      pointLeft3.style.borderRight="20px solid black"
   case 2:
      yiYan.style.backgroundColor="black";
      pointLeft2.style.borderRight="20px solid black"
   case 1:
     killersTerm.style.backgroundColor="black";
     pointLeft1.style.borderRight="20px solid black"
 }

}
