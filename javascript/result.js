window.onload=function(){
  var ltHeader=document.getElementById('lt-header')
  var resultIcon=document.getElementById('icon')
  var getKilled=sessionStorage.getKilled.split(",")
  var newParticipants=sessionStorage.newSequence.split(",")
  var killerLeft=document.getElementById('killerLeft')
  var civilianLeft=document.getElementById('civilianLeft')
  var getKilled=sessionStorage.getKilled.split(",")
  var turnCount=Number(sessionStorage.turnCount)
  var gameProgress=document.getElementById('gameProgress')
  var days=document.getElementById('days')
  var day=document.getElementById('day')
  var atNight=document.getElementById('atNight')
  var daytime=document.getElementById('daytime')
  var Participants=sessionStorage.sequence.split(",")

  ltHeader.onclick=function(){
    window.location.href="gameStart.html"
  }
// 游戏结果标题
  if (sessionStorage.winner==1) {
    resultIcon.innerHTML="杀手胜利"
  }else if (sessionStorage.winner==0) {
    resultIcon.innerHTML="平民胜利"
  }else {
    resultIcon.innerHTML="游戏结束"
  }
//剩余人数
 var a=0;
 var b=0;
 alert(newParticipants)
 for (var i = 0; i < newParticipants.length; i++) {
   if (newParticipants[i]==0) {
     a=a+1;
   }else if (newParticipants[i]==1) {
     b=b+1;
   }
 }
 killerLeft.innerHTML="杀手"+b+"人"
 civilianLeft.innerHTML="平民"+a+"人"
//流程
alert(Math.ceil(turnCount/2))
  for (var i = 1; i < Math.ceil(turnCount/2)+1; i++) {
    var c=Number(getKilled[(i-1)*2+1]);
    var d;
    if (Participants[c-1]==1) {
      d="杀手"
    }else {
      d="平民"
    }
    var e=Number(getKilled[2*i]);
    var f;
    if (Participants[e-1]==1) {
      f="杀手"
    }else {
      f="平民"
    }
  day.innerHTML="第"+i+"天"
  atNight.innerHTML="黑夜："+c+"号被杀死，"+c+"是"+d
  if (!e) {
    daytime.innerHTML=" "
  }else {
    daytime.innerHTML="白天："+e+"号被投死，"+e+"是"+f
  }
  var cloneDays=days.cloneNode(true);
  cloneDays.style.display="block";
  gameProgress.appendChild(cloneDays);
  }

}
