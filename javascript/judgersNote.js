window.onload=function(){
  var Participants=sessionStorage.sequence.split(",");
  var mainPart=document.getElementById('mainPart');
  var block=document.getElementById('block');
  var title=document.getElementById('title');
  var number=document.getElementById('number');
  var newParticipants=sessionStorage.newSequence.split(",");

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
    number.innerHTML=i+1;
    var cloneBlock=block.cloneNode(true);
    cloneBlock.style.display="block";
    mainPart.appendChild(cloneBlock);
  }
}
