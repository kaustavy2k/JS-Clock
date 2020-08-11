import "./days.scss";
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
    }
}
export {days};