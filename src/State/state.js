import {stopper} from "../Components/Stopwatch";
let interval;
let intervallap;
let flag=0;
let ms=0;
let sec=0;
let min=0;
let mslap=0;
let seclap=0;
let minlap=0;
let time;
let i =1;
let count=0;
let counter=0;
let temp=[];
let node;
let lapstopper=0;
let lapstarter=0;
let name1="START";
let name2="LAP";
function state_manage(){
    time=document.getElementById("clock_sw");
    let l=document.getElementById("lap_record");
    count++;
    counter=0;
    if(count==1){
        node=document.createElement("DIV");
        node.id="laps";
        l.appendChild(node);
        temp.unshift(node);
    }
    function set_timer(){
        let check=(min<10?"0"+min:min)+":"+(sec<10?"0"+sec:sec)+":"+(ms<10?"0"+ms:ms);
        time.textContent=check;
        if(lapstopper==0){
        node.innerHTML=`<span id="laptime">LAP 1 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;${check}</span>`;
        }
        ms++;
        if(ms==100){
            ms=0;
            sec++;
        }
        if(sec==60){
            sec=0;
            min++;
        }
   }
   if(flag>1){
        clearInterval(interval);
        interval=setInterval(set_timer,10);
   }
   else{
        interval=setInterval(set_timer,10);
   }
}


function laptimer(){
    function set_timer_lap(){
        let check=(minlap<10?"0"+minlap:minlap)+":"+(seclap<10?"0"+seclap:seclap)+":"+(mslap<10?"0"+mslap:mslap);
        node.innerHTML=`<span id="laptime">LAP ${i} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;${check}</span>`;
        mslap++;
        if(mslap==100){
            mslap=0;
            seclap++;
        }
        if(seclap==60){
            seclap=0;
            minlap++;
        }
   }
    clearInterval(intervallap);
    intervallap=setInterval(set_timer_lap,10);
}

function start(){
    if(stopper==1){
        name1=name1;
        name2=name2;
        lapstarter=1
        time=document.getElementById("clock_sw");
        time.textContent=(min<10?"0"+min:min)+":"+(sec<10?"0"+sec:sec)+":"+(ms<10?"0"+ms:ms);
    }
    else{
        name1="STOP";
        name2="LAP";
        lapstarter=1
        flag++;
        state_manage();
        laptimer();
    }
}
function stop(){
    name1="START";
    name2="RESET";
    clearInterval(interval);
    clearInterval(intervallap);
    counter=1;
}
function reset(){
    name2="LAP";
    lapstopper=0;
    flag=0;
    let l=document.getElementById("lap_record");
    temp=[];
    flag=0;
    time.textContent="00:00:00";
    clearInterval(interval);
    clearInterval(intervallap);
    ms=0;
    sec=0;
    min=0;
    count=0;
    counter=0;
    i=1;
    mslap=0;
    seclap=0;
    minlap=0;
    lapstarter=0;
    while(l.firstChild){
        l.removeChild(l.firstChild);
    }
}

function lap(){
    if(lapstarter==1){
        if(counter!=1){
            i++;
            lapstopper=1;
            mslap=0;
            seclap=0;
            minlap=0;
            let check;
            if(i<=2){
            check=(min<10?"0"+min:min)+":"+(sec<10?"0"+sec:sec)+":"+(ms<10?"0"+ms:ms);
            node.innerHTML=`<span id="laptime">LAP 1 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;${check}</span>`;
            }
            let l=document.getElementById("lap_record");
            node=document.createElement("DIV");
            node.id="laps";
            node.innerHTML=`<span id="laptime">LAP ${i}</span>`;
            l.insertBefore(node,l.childNodes[0]);
            temp.unshift(node);
            laptimer();
        }
    }
    
}
export {lap,start,stop,reset,flag,temp,name1,name2};
