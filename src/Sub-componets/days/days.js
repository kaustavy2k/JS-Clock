import "./days.scss";
import {icurr} from "../color/applycolor";
function days(){
    let today=new Date();
    let w=today.getDay();
    let days={
        1:'Sun',
        2:'Mon',
        3:'Tue',
        4:'Wed',
        5:'Thurs',
        6:'Fri',
        7:'Sat',
    };
    w==7?w=1:w+=1
    let week=days[w];
    let d=document.querySelector('#days');
    let node;
    for(let i=1;i<=7;i++){
        if(days[i]==week){
            node=document.createElement("DIV");
            node.classList.add('active');
        }
        else{
            node=document.createElement('DIV');
        }
        node.classList.add('diff-days');
        let text=document.createTextNode(days[i]);
        node.appendChild(text);
        d.appendChild(node);
        if(days[i]==week){
            let color_list=['rgb(255, 209, 124)','red','royalblue','rgb(73, 170, 170)','yellow','brown','rgb(253, 168, 168)','rgb(136, 161, 44)'];
            let cur_week=document.querySelector(".active");
            cur_week.style.color=color_list[icurr];
            document.getElementById("clock").style.color=color_list[icurr];
            document.getElementById("date").style.color=color_list[icurr];
        }
    }
}
export {days};