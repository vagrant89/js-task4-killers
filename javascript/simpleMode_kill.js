function read() {
  alert(sessionStorage.sequence);
}

window.onload=function(){
  var Participants=sessionStorage.sequence.split(",");
  var sequenceNumber=document.getElementById('order');
  var displayImage=document.getElementById('displayImage');
  var showOccupation=document.getElementById('showOccupation');
  var occupation=document.getElementById('occupation');
  var i=0,j=0;
  showOccupation.onclick=function(){
    j++;
    // alert("j:"+j)
    if (j%2==1 && i<Participants.length) {
      displayImage.src="images/kill_content_03.png";
      if (i+1<Participants.length) {
        showOccupation.innerHTML="隐藏并传递给"+(i+2)+"号";
      } else {
        showOccupation.innerHTML="法官查看";
      }
      occupation.style.visibility="visible";
      if (Participants[i]==1) {
        occupation.innerHTML="杀手"
      }else {
        occupation.innerHTML="平民"
      }
      i++;
      // alert("i:"+i)
    }else if (i>=Participants.length) {
      window.location.href="judger.html"
    }else {
      displayImage.src="images/kill_cover_03.png";
      showOccupation.innerHTML="查看"+(i+1)+"号身份";
      sequenceNumber.innerHTML=i+1;
      occupation.style.visibility="hidden";
    }

    // return i;
  }
}
