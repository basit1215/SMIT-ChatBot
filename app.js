

var msgList = document.getElementById("chatList");
var typing = document.getElementById("typing");
var msgType = document.getElementsByTagName("input");

function checkUserPressKey(event){
    if(event.key=== "Enter")
        msgSend();
    // console.log(event)
 
}

function msgSend(){
var value = msgType.value.trim();
if(value==="")
    return;
}

msgList.innerHTML += "<li class='rightSide'>" + value + "</li>";

typing.style.display='block';
 