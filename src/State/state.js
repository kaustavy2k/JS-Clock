let interval;
let flag=0;
let ms=0;
let sec=0;
let min=0;
let time;
function state_manage(){
    time=document.getElementById("clock_sw");
    function set_timer(){
        //console.log(time);
            //console.log(time);
            time.textContent=(min<10?"0"+min:min)+":"+(sec<10?"0"+sec:sec)+":"+(ms<10?"0"+ms:ms);
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
function start(){
    flag++;
    //if(flag==1){
        state_manage();
    //}
    
}
function stop(){
    flag=0;
    clearInterval(interval);
}
function reset(){
    flag=0;
    time.textContent="00:00:00";
    clearInterval(interval);
    ms=0;
    sec=0;
    min=0;
}
export {start,stop,reset,flag};
