import "./applycolor.scss";
let icurr=0;
let icurrsw=0;
function color(val){
    let col=document.getElementById("color");
    for(let i=0;i<=7;i++){
            let node=document.createElement("SPAN");
            node.classList.add("colors");
            node.classList.add('color'+i);
            if(val==0){
                if(i==icurr){
                node.className+=" activecolor";
                }
            }
            else if(val==1){
                if(i==icurrsw){
                    node.className+=" activecolor";
                    }
            }
            
            col.appendChild(node);
    }
    
    let color=document.querySelectorAll(".colors");
    let cur_week;
    let c;
    let d;
    if(val==1){
        c=document.getElementById("clock_sw");
        d=document.getElementById("lap_record");
    }
    else if(val==0){
    cur_week=document.querySelector(".active");
    c=document.querySelector("#clock");
    d=document.querySelector("#date");
    }
    
    let color_list=['rgb(255, 209, 124)','red','royalblue','rgb(73, 170, 170)','yellow','brown','rgb(253, 168, 168)','rgb(136, 161, 44)'];
    color.forEach(function(element,index){
        element.addEventListener("click", function(e){
            let current=document.getElementsByClassName("activecolor");
            current[0].className=current[0].className.replace(" activecolor","");
            e.target.className+=" activecolor";
            if(val==0){
                icurr=index;
                cur_week.style.color=color_list[index];
            }
            else if(val==1){
                icurrsw=index;
            }
            c.style.color=color_list[index];
            d.style.color=color_list[index];
        })
    })
}
export {color,icurr,icurrsw};