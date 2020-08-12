import "./style.scss";
import {time} from "./Sub-componets/time/time";
import {color} from "./Sub-componets/color/applycolor";
import {date} from "./Sub-componets/date/date";
import {days} from "./Sub-componets/days/days";
import {stopwatch} from "./Components/Stopwatch";
import {div_remove_clk, div_remove_swatch, div_create_clk, div_create_swatch} from "./utility-functions/dev";



(function(){
    //DIV-CREATE
    div_create_clk();
    //DATE
    date();
    //DAYS
    days();
    //TIME
    time();
    //COLOR 
    color();
    document.querySelector(".stopwatch").addEventListener("click", ()=> {
        swatch_calling();
    
    });

})();

function clock_calling(){
        //DIC-REMOVE
        div_remove_swatch();
        //DIV-CREATE
        div_create_clk();
        //DATE
        date();
        //DAYS
        days();
        //TIME
        time();
        //COLOR 
        color();
        document.querySelector(".stopwatch").addEventListener("click", ()=> {
        swatch_calling();
    });
}
function swatch_calling(){

        //DIC-REMOVE
        div_remove_clk();

        //DIV-CREATE
        div_create_swatch();

        //STOPWATCH
        stopwatch();

        document.querySelector(".curr-clock_sw").addEventListener("click", ()=> {
        clock_calling();
    
    });
}