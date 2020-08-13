import "./date.scss";
function date(){
    let today=new Date();
    let date=today.getDate();
    let m={
        0:'January',
        1:"February",
        2:"March",
        3:"April",
        4:"May",
        5:"June",
        6:"July",
        7:"August",
        8:"September",
        9:"October",
        10:"November",
        11:'December'
    }
    let month=m[today.getMonth()];
    let year=today.getFullYear();
    let t=`${date} ${month} ${year}`
    let y=document.createTextNode(t);
    document.getElementById("date").appendChild(y);
}
export {date};