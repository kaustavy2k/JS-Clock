import "./time.scss";
function time(){
    let time=document.getElementById("time");
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

        let minute=today.getMinutes();
        minute<10?(minute='0'+minute):(minute=minute);

        let sec=today.getSeconds();
        sec<10?(sec='0'+sec):(sec=sec);

        let t=`${hour} : ${minute} : ${sec}`;
        time.innerHTML=`${t}  <div id="am-pm">${c}</div>`;
        setTimeout(clock, 1000);
    }
    clock();
}

export {time};