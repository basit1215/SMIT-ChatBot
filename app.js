var msgList = document.getElementById("chatList");
var typing = document.getElementById("typing");
var msgType = document.getElementById("typeMsg");

function checkUserPressKey(event) {
    if (event.key === "Enter")
        msgSend();
}

function msgSend() {
    var value = msgType.value.trim();

    if (value === "") {
        return;
    }

    msgList.innerHTML += "<li class='rightSide'>" + value + "</li>";
    typing.style.display = 'inline';

    if (["assalam o alaikum", "salam", "assalamualaikum", "salaam"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            msgList.innerHTML += "<li class='leftSide'> Walaikum assalam </li>";
        }, 2000);
        setTimeout(function () {
            msgList.innerHTML += "<li class='leftSide'> How are you? </li>";
            typing.style.display = "none";
        }, 4000)
        msgType.value = "";
    }

    else if (["thik", "thikk hon", "theek", "mein theek", "allhamdullilah", "theek hon aap sunao", "i am fine", "fine", "fine and you"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            msgList.innerHTML += "<li class='leftSide'>  What can I help you?</li>";
            typing.style.display = "none";
        }, 2000);
        msgType.value = "";
    }

    else if (["admission lena hai", "admission", "admission chahye", "smit mein admission lena hai", "smit mein admission chahye tha", "admission chahye hai"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            msgList.innerHTML += "<li class='leftSide'>  Apko kis field mein admission lena hai? <br> Web and Mobile App Development <br> Graphic Designing <br> Python programming <br>  Digital Marketing <br> Video Editing </li>";
            typing.style.display = "none"
        }, 2000);
        msgType.value = "";
    }

    else if (["web and mobile app development", "graphic designing", "web and app", "Python programming", "digital marketing"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () { msgList.innerHTML += "<li class='leftSide'> Okay </li> " }, 2000);
        setTimeout(function () {
            msgList.innerHTML += "<li  class='leftSide'> What is your name? </li>";
            typing.style.display = "none";
        }, 4000);
        msgType.value = "";
    }

    else if (["abdul basit", "muhammad ali", "ubaid", "danish", "akasha", "rehan", "abdul rafay", "muavia", "muaviya", "ebad", "hashir", "hani", "kashif", "zain", "abdul rehman", "shahzaib", "muhammad abrar", "abdul quddos", "faheem", "mohsin", "abdullah", "Aarib", "Maaz", "Sameed", "Rehan"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            msgList.innerHTML += "<li  class='leftSide'> Okay  </li>  "
        }, 2000);
        setTimeout(function () {
            msgList.innerHTML += "<li  class='leftSide'> What is your Father name? </li>";
            typing.style.display = "none";
        }, 4000);
        msgType.value = "";
    }

    else if (["Anees", "Shahzad", "Khalid", "Irshad Ahmad", "Ahsan", "Abid", "Nafees", "Akbar", "naveed", "Naseem", "Naeem", "Aslam", "Asif", "javed", "ilyas", "sohail", "Rafique", "Bashir", "Fakharuddin", "Din Muhammad", "Hakim Ali", "Shakeel", "Khalid"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            msgList.innerHTML += "<li class='leftSide'> Okay  </li>  "
        }, 2000);
        setTimeout(function () {
            msgList.innerHTML += "<li class='leftSide'>Your Qualification? </li>";
            typing.style.display = "none";
        }, 4000);
        msgType.value = "";
    }

    else if (["inter", "intermediate", "metric", "matriculation", "masters", "graduate", "graduation"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            msgList.innerHTML += "<li class='leftSide'> Okay  </li>  "
        }, 2000);
        setTimeout(function () {
            msgList.innerHTML += "<li class='leftSide'>Your CNIC Number? </li>";
            typing.style.display = "none";
        }, 4000);
        msgType.value = "";
    }

    else if (["123", "124", "012", "246", "120"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            msgList.innerHTML += "<li class='leftSide'> Congratulations!!! <br> Your admission has been done in SMIT  </li>  ";
        }, 2000);
        setTimeout(function () {
            msgList.innerHTML += "<li class='leftSide'> Roll No: " + (Math.random().toFixed(5)).replace('.', '') + "  </li>";
        }, 4000);
        setTimeout(function () {
            msgList.innerHTML += "<li class='leftSide'> Campus: Ghulshan-e-Iqbal  </li>"
        }, 6000);
        setTimeout(function () {
            msgList.innerHTML += "<li class='leftSide'> Days & Timing: Monday, Wednesday, Friday (11 am to 01 pm)  </li>";
        }, 8000);
        setTimeout(function () {
            msgList.innerHTML += "<li class='leftSide'> Trainer Name: Nadir Basheer  </li>";
            typing.style.display = "none";
        }, 10000);
        msgType.value = "";
    }

    else if (["thanks", "thank you", "jazakallah", "mehrbani", "shukriya"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            msgList.innerHTML += "<li class='leftSide'> Welcome!!!  </li>  ";
            typing.style.display = "none";
        }, 2000);
        msgType.value = "";
    }

    else {
        setTimeout(function () {
            msgList.innerHTML += "<li class='leftSide'>Sorry, I could not understand what you said  </li>  ";
            typing.style.display = "none";
        }, 2000);
        msgType.value = "";
    }

}