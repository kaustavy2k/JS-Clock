'use strict';
(function(){

    //DIV-CREATE
    function div_create(){
        let d=document.querySelector(".content");
        let ids=['date','days','time','color'];
        for(let i=0; i<ids.length;i++){
            let node=document.createElement("DIV");
            node.id=ids[i];
            d.appendChild(node);
        }
    }

    //DATE
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


    //DAYS
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
            7:'Sat'
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


    //TIME
    function time(){
        let time=document.getElementById("time");
        function clock(){
            let today=new Date();
            let hour=today.getHours();
            let c;
            if(hour>12){
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


    //COLOR 
    function color(){
        let col=document.getElementById("color");
        for(let i=1;i<=8;i++){
                let node=document.createElement("SPAN");
                node.classList.add('color'+i);
                if(i==1){
                    node.className+=" activecolor";
                }
                col.appendChild(node);
        }
        let color=document.querySelectorAll("span");
        let color_list=['rgb(255, 209, 124)','red','royalblue','teal','yellow','brown','rgb(253, 168, 168)','darkslategray'];
        color.forEach(function(element,index){
            element.addEventListener("click", function(e){
                let current=document.getElementsByClassName("activecolor");
                current[0].className=current[0].className.replace(" activecolor","");
                e.target.className+=" activecolor";
                document.querySelector("html").style.color=color_list[index];
            })
        })
    }
    div_create();
    date();
    days();
    time();
    color()
})();