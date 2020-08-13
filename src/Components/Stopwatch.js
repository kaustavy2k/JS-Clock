import "./Stopwatch.scss";
import {lap,start,stop,reset,flag,temp} from "../State/state";
let stopper=0;
function stopwatch(){
    let t=document.getElementById("time_sw");
    let ids=["options_sw","clock_sw", "timer_option","lap_record"];
    for(let i=0; i<ids.length;i++){
        let node=document.createElement("DIV");
        node.id=ids[i];
        t.appendChild(node);
    }
    
    let time=document.getElementById("clock_sw");
    if(flag==0){
        time.textContent="00:00:00";
        for(let i=0; i<temp.length; i++){
            d.appendChild(temp[i]);
       }
    }
    else{
        stopper=1;
        start();
        let d=document.getElementById("lap_record");
        for(let i=0; i<temp.length; i++){
            d.appendChild(temp[i]);
        }
    }

    let c=document.getElementById("options_sw");
    let classes=["curr-clock_sw","stopwatch_sw"];
    let names=["CLOCK","STOPWATCH"];
    for(let i=0; i<2;i++){
        let node=document.createElement("BUTTON");
        node.classList.add(classes[i]);
        if(i==1){
            node.classList.add('activeoption_sw');
        }
        node.textContent=names[i];
        c.appendChild(node);
    }

    let k=document.getElementById("timer_option");
    let idx=["start","stop","lap","reset"];
    let namx=["START","STOP","LAP","RESET"];
    for(let i=0; i<4;i++){
        let node=document.createElement("BUTTON");
        node.id=idx[i];
        node.textContent=namx[i];
        k.appendChild(node);
    }
    document.getElementById("start").addEventListener("click", ()=>{
        stopper=0;
        start();
    });
    document.getElementById("stop").addEventListener("click", ()=>{
        stopper=0;
        stop();
    });
    document.getElementById("reset").addEventListener("click", ()=>{
        reset();
    });
    document.getElementById("lap").addEventListener("click", ()=>{
        lap();
    });
}

export {stopwatch,stopper};


