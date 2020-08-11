import "./date.scss";
function date(){
    let today=new Date();
    let date=today.getDate();
    let m={
        1:'January',
        2:"February",
        3:"March",
        4:"April",
        5:"May",
        6:"June",
        7:"July",
        8:"August",
        9:"September",
        10:"October",
        11:"November",
        12:'December'
    }
    let month=m[today.getMonth()];
    let year=today.getFullYear();
    let t=`${date} ${month} ${year}`
    let y=document.createTextNode(t);
    document.getElementById("date").appendChild(y);
}
export {date};