import "./Stopwatch.scss";
import {start,stop,reset,flag} from "../State/state";
function stopwatch(){
    
    let t=document.getElementById("time_sw");
    let ids=["options_sw","clock_sw", "timer_option"];
    for(let i=0; i<ids.length;i++){
        let node=document.createElement("DIV");
        node.id=ids[i];
        t.appendChild(node);
    }
    
    let time=document.getElementById("clock_sw");
    if(flag==0){
        time.textContent="00:00:00";
    }
    else{
        start();
    }
    // let idt=["min","sec","ms"];
    // for(let i=0; i<3;i++){
    //     let node=document.createElement("SPAN");
    //     node.id=ids[i];
    //     time.appendChild(node);
    // }

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

    // let ms=0;
    // let sec=0;
    // let min=0;
    //function startTimer(){
        // time.textContent=(min<10?"0"+min:min)+":"+(sec<10?"0"+sec:sec)+":"+(ms<10?"0"+ms:ms);
        // ms++;
        // if(ms==100){
        //     ms=0;
        //     sec++;
        // }
        // if(sec==60){
        //     sec=0;
        //     min++;
        // }
   // }
    //let interval;
    //et count=flag;
    document.getElementById("start").addEventListener("click", ()=>{
        //count+=1;
        //if(count==1){
            start();
        //}
        //interval=setInterval(startTimer);
    });
    document.getElementById("stop").addEventListener("click", ()=>{
        //count=0
        stop();
    });
    document.getElementById("reset").addEventListener("click", ()=>{
        // time.textContent="00:00:00";
        // clearInterval(interval);
        // ms=0;
        // sec=0;
        // min=0;
        //count=0;
        reset();
    });
}

export {stopwatch};


