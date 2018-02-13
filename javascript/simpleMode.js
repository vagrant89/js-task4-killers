window.onload=function(){
  // var mainWard=document.getElementById('mainWard');
  // var fakeWard=document.getElementById('fakeWard');
  var quantity=document.getElementById('quantity');
  var killer=document.getElementById('killer');
  var human=document.getElementById('human');

  quantity.onkeypress=function(e){
    if (e.keyCode==13) {
      quantity.blur();
    }
  }
  quantity.onblur=function(){
    occupationAlocation();
  }
}

function read() {
  alert(sessionStorage.sequence);
}

function occupationAlocation(){
    if (quantity.value>18 || quantity.value<4) {
      alert("请输入正确玩家数量");
      return;
    }
    killer.innerHTML=Math.floor(quantity.value * 0.4);
    human.innerHTML=Math.ceil(quantity.value * 0.6);
    //random index
    var randomIndex=[];
    for (var i = 0; i < killer.innerHTML; ) {
      var tempIndex=Math.round(Math.random()*quantity.value);
      if (!randomIndex.includes(tempIndex)) {
        randomIndex[i++]=tempIndex;
      }
      // if (randomIndex.includes(tempIndex)) {
      //   continue;
      // }
      // randomIndex[i]=tempIndex;
      // i++;
    }
    // occupation array
    var array=[];
    for (var i = 0; i < quantity.value; i++) {
        if (randomIndex.includes(i)) {
          array[i]=1;
        }
        else {
          array[i]=0;
        }
    }
    // console.log(array)
    // alert(array.length)
    // return array;
    sessionStorage.sequence=array;
}
