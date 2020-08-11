import "./style.scss";
import {time} from "./Components/time/time";
import {color} from "./Components/color/applycolor";
import {date} from "./Components/date/date";
import {days} from "./Components/days/days"
(function(){

    //DIV-CREATE
    function div_create(){
        let d=document.querySelector(".content");
        let ids=["date","days","time","color"];
        for(let i=0; i<ids.length;i++){
            let node=document.createElement("DIV");
            node.id=ids[i];
            d.appendChild(node);
        }
    }
    div_create();

    //DATE
    date();


    //DAYS
    days();


    // //TIME
    time();

    //COLOR 
    color();
    
})();
