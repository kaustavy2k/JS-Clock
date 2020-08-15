import "./Stopwatch.scss";
import {lap,start,stop,reset,flag,temp,name1,name2} from "../State/state";
import {icurrsw} from "../Sub-componets/color/applycolor";
let stopper=0;
function stopwatch(){
    let t=document.getElementById("time_sw");
    let ids=["clock_sw","color-options","timer_option","lap_record"];
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

    let x=document.getElementById("color-options");
    let node1;
    let node2;
    node1=document.createElement("DIV");
    node1.id="color";
    x.appendChild(node1);
    node2=document.createElement("DIV");
    node2.id="options_sw";
    x.appendChild(node2);

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
    let color_list=['rgb(255, 209, 124)','red','royalblue','rgb(73, 170, 170)','yellow','brown','rgb(253, 168, 168)','rgb(136, 161, 44)'];
    document.getElementById("clock_sw").style.color=color_list[icurrsw];
    document.getElementById("lap_record").style.color=color_list[icurrsw];


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


