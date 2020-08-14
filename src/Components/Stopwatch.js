import "./Stopwatch.scss";
import {lap,start,stop,reset,flag,temp,name1,name2} from "../State/state";
let stopper=0;
function stopwatch(){
    let t=document.getElementById("time_sw");
    let ids=["options_sw","clock_sw", "timer_option","lap_record"];
    for(let i=0; i<ids.length;i++){
        let node=document.createElement("DIV");
        node.id=ids[i];
        t.appendChild(node);
    }
    let control=0;
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
        if(name2=="LAP"){
            control=0;
        }
        else{
            control=1;
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
    let idx=["start","lap"];
    let namx=[name1,name2];
    for(let i=0; i<2;i++){
        let node=document.createElement("BUTTON");
        node.id=idx[i];
        node.textContent=namx[i];
        k.appendChild(node);
    }
    let st=document.getElementById("start");
    let lp=document.getElementById("lap");
    st.addEventListener("click", ()=>{
        if(st.textContent=="START"){
            stopper=0;
            start();
            st.textContent=name1;
            lp.textContent=name2;
        control=0;
        }
        else if(st.textContent=="STOP"){
         stopper=0;
         stop();
        st.textContent=name1;
        lp.textContent=name2;
        control=1
        
    }
    });
    lp.addEventListener("click", ()=>{
        if(control===1){
          reset();
          lp.textContent=name2;
        }
        else{
        lap();
        }
     });
}

export {stopwatch,stopper};


