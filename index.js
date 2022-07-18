// const hrs = document.getElementById("start");
// const mins = document.getElementById("start");
// const secs = document.getElementById("start");
// const counts = document.getElementById("start");
// const starts = document.getElementById("start");
// const resets = document.getElementById("start");
const time = document.getElementById("time");
const snap = document.getElementById("snap");
const clear = document.getElementById("clear")
clear.style.display = "none"
const div = document.createElement("div");

// import userJSON from "user.json"
// console.log(userJSON);
//div.innerText = time;
//snap.setAttribute('disabled')
var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

document.getElementById("capture").disabled = true;
document.getElementById("reset").disabled = true;
document.getElementById("start").disabled = false;
document.getElementById("stop").disabled = true;

let timer = false

function start(){
    timer = true;
    stopwatch();
    //reset();
    document.getElementById("capture").disabled = false;
    document.getElementById("reset").disabled = false;
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false
};



//const button = document.createElement("button");
   
function snaps(){
    //timer = false;
    const time = document.getElementById("time");
    const snap = document.getElementById("snap");
    // const button = document.createElement("button");
    // button.innerText = "delete"
    
    clear.style.display = "inline";

    const div = document.createElement("div");
    div.innerText = time.innerText;
    snap.appendChild(div);
    
    //button.disabled = true
    document.getElementById("capture").disabled = false;
    document.getElementById("reset").disabled = false;
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    
};

function clears(){
    clear.style.display = "none";
    document.getElementById("snap").innerHTML = "";
    document.getElementById("capture").disabled = false;
    document.getElementById("reset").disabled = false;
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
}


function stopwatch(){
    if(timer == true){
        count = count+1;
        if(count == 100){
            sec = sec + 1;
            count = 0;
        }
        if(sec == 60){
            min = min + 1;
            sec = 0;
        }
        // if(sec <= 60){
        //     min = min + 1;
        //     sec = 0;
        // }
        if(min == 60){
            hr = hr + 1;
            min = 0;
        }
        else{
            timer == false
        }
        document.getElementById("hr").innerHTML = hr;
        document.getElementById("min").innerHTML = min;
        document.getElementById ("sec").innerHTML = sec;
        document.getElementById("count").innerHTML = count;
        //console.log(count)
    setTimeout("stopwatch()",10)
    }
};
var count1 = 0;
function stop(){
   
    timer = false;
    const stop = document.getElementById("stop")
    if(count1 == 0){
        count1 = 1;
        
    stop.innerHTML = "||"
    document.getElementById("capture").disabled = true;
    document.getElementById("reset").disabled = false;
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    }
    else{
        count1 = 0;
        document.getElementById("stop").innerHTML = "stop";
        document.getElementById("capture").disabled = false;
        timer = true;
        stopwatch();
    }
};

function reset(){
    timer = false
    // hr = 0;
    // min = 0;
    // sec = 0;
    // count = 0;
    document.getElementById("snap").innerHTML = "";
    document.getElementById("count").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";
    //stopwatch() = false;
    document.getElementById("start").disabled = false;
    document.getElementById("reset").disabled = true;
    document.getElementById("capture").disabled = true;
    document.getElementById("stop").disabled = true;

    window.location = location;
}

