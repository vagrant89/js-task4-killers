function a(){
var audio = document.getElementById('music');
if(audio.paused){
audio.play();//audio.play();// 播放
}
else{
audio.pause();// 暂停
}
}


function displaySidebar(){
  var element = document.getElementById('sidebar');
  element.classList.toggle('hidden');

}
