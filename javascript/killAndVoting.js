function read() {
  alert(sessionStorage.newSequence);
}

window.onload=function(){
  var Participants=sessionStorage.sequence.split(",");
  var mainPart=document.getElementById('mainPart');
  var block=document.getElementById('block');
  var title=document.getElementById('title');
  var number=document.getElementById('number');
  var pageTitle=document.getElementById('pageTitle');
  var doneBtn=document.getElementById('doneBtn');
  var killIcon=document.getElementById('killIcon');
  var input=document.getElementById('input');
  var turnCount=Number(sessionStorage.turnCount);
  var newParticipants=sessionStorage.newSequence.split(",");
  var getKilled=sessionStorage.getKilled.split(',');
  var bannerText=document.getElementById('bannerText');
  var bannerText2=document.getElementById('bannerText2')
  // alert(getKilled)

  sessionStorage.turnCount=turnCount+1;
//pageTitle & turnCount
  if (sessionStorage.pageTitleIndex==1) {
    pageTitle.innerHTML="杀手杀人"
    bannerText.innerHTML="杀手请睁眼，杀手请选择要杀的对象"
    bannerText.style.color="black"
    bannerText2.innerHTML="点击下方玩家头像，对被杀的玩家进行标记"
  }else {
    pageTitle.innerHTML="投票"
    bannerText.innerHTML="发言讨论结束，请大家投票"
    bannerText.style.color="black"
    bannerText2.innerHTML="点击得票数最多的人的头像"
  }

  // inner text
  for (var i = 0; i < Participants.length; i++) {
    if (Participants[i]==0) {
      title.innerHTML="平民"
    }else {
      title.innerHTML="杀手"
    }
    if (newParticipants[i]==3) {
      title.style.backgroundColor="#83b09a";
    }else {
      title.style.backgroundColor="#f5c97b";
    }
    input.value=i+1;
    input.name="block"
    number.innerHTML=i+1;
    var cloneBlock=block.cloneNode(true);
    cloneBlock.style.display="block";
    mainPart.appendChild(cloneBlock);
  }

//checkbox count after clone
  var checkboxs=document.getElementsByName('block');

// doneBtn setting && game judgement

  doneBtn.onclick=function(){
    for (var i = 0; i < checkboxs.length; i++) {  //遍历checkbox
      if (checkboxs[i].checked) { //发现选择的checkbox
        if (sessionStorage.pageTitleIndex==1 && Participants[i-1]==1) { //杀手不能杀死杀手 //因为隐藏了第一个block，所以减一
          alert("杀手不能杀死本职业，请选择其他玩家")
        }else {
          if (newParticipants[i-1]==3) {  //判断是否已死 //因为隐藏了第一个block，所以减一
            confirm("当前玩家已死亡，请选择其他玩家")
          }else {
            newParticipants[i-1]=3;  //因为隐藏了第一个block，所以减一
            getKilled[turnCount]=i; //杀人顺序
            sessionStorage.getKilled=getKilled;
            sessionStorage.newSequence=newParticipants;
            // alert(getKilled)
            if (!newParticipants.includes("1")) { //判断是否还有杀手
              window.location.href="result.html"
              sessionStorage.winner=0;
            }else if (!newParticipants.includes("0")) { //判断是否还有平民
              window.location.href="result.html"
              sessionStorage.winner=1;
            }else{
              sessionStorage.newSequence=newParticipants;
              window.location.href="gameStart.html"
            }
          }
        }
      }
    }
  }

}
