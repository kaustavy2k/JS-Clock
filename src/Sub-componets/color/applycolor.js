import "./applycolor.scss";
let icurr=0;
function color(){
    let col=document.getElementById("color");
    for(let i=0;i<=7;i++){
            let node=document.createElement("SPAN");
            node.classList.add("colors");
            node.classList.add('color'+i);
            if(i==icurr){
                node.className+=" activecolor";
            }
            col.appendChild(node);
    }
    let cur_week=document.querySelector(".active");
    let color=document.querySelectorAll(".colors");
    let h=document.querySelector("html");
    let color_list=['rgb(255, 209, 124)','red','royalblue','rgb(73, 170, 170)','yellow','brown','rgb(253, 168, 168)','rgb(136, 161, 44)'];
    color.forEach(function(element,index){
        element.addEventListener("click", function(e){
            let current=document.getElementsByClassName("activecolor");
            current[0].className=current[0].className.replace(" activecolor","");
            e.target.className+=" activecolor";
            icurr=index;
            h.style.color=color_list[index];
            cur_week.style.color=color_list[index];
        })
    })
}
export {color,icurr};