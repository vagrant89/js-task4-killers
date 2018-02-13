function read() {
  alert(sessionStorage.sequence);
}

window.onload=function(){
  var Participants=sessionStorage.sequence.split(",");
  var mainPart=document.getElementById('mainPart');
  var block=document.getElementById('block');
  var title=document.getElementById('title');
  var number=document.getElementById('number');

  // inner text
  for (var i = 0; i < Participants.length; i++) {
    if (Participants[i]==0) {
      title.innerHTML="平民"
    }else {
      title.innerHTML="杀手"
    }
    number.innerHTML=i+1;
    var cloneBlock=block.cloneNode(true);
    cloneBlock.style.display="block";
    mainPart.appendChild(cloneBlock);
  }

  // for (var i = 0; i < Participants.length; i++) {
  //   var cloneBlock=block.cloneNode(true);
  //   mainPart.appendChild(cloneBlock);
  //   number.innerHTML=(i+1)+"号"
  // }
sessionStorage.turnCount=1;
sessionStorage.stage=0;
sessionStorage.newSequence=sessionStorage.sequence;
sessionStorage.getKilled=0;
}
