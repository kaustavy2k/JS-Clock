import "./time.scss";
function time(){
    let t=document.getElementById("time");
    let ids=["clock", "options"];
    for(let i=0; i<ids.length;i++){
        let node=document.createElement("DIV");
        node.id=ids[i];
        t.appendChild(node);
    }
    
    let time=document.getElementById("clock");
    function clock(){
        let today=new Date();
        let hour=today.getHours();
        let c;
        if(hour===12){
            c='pm';
        }
        else if(hour>12){
            hour=hour-12;
            c='pm';
        }
        else{
            hour=hour;
            c='am';
        }
        
        hour<10?(hour='0'+hour):(hour=hour);
        if(hour==0){
            hour=12;
        }
        let minute=today.getMinutes();
        minute<10?(minute='0'+minute):(minute=minute);

        let sec=today.getSeconds();
        sec<10?(sec='0'+sec):(sec=sec);

        let t=`${hour} : ${minute} : ${sec}`;
        time.innerHTML=`${t}  <div id="am-pm">${c}</div>`;
        setTimeout(clock, 1000);
    }
    clock();

    let c=document.getElementById("options");
    let classes=["curr-clock","stopwatch"];
    let names=["CLOCK","STOPWATCH"]
    for(let i=0; i<2;i++){
        let node=document.createElement("BUTTON");
        node.classList.add(classes[i])
        if(i==0){
            node.classList.add('activeoption');
        }
        node.textContent=names[i];
        c.appendChild(node);
    }
}

export {time};