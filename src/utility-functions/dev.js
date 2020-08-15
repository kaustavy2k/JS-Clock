//DIV-REMOVE-CLOCK
function div_remove_clk(){
    let d=document.querySelector(".content");
    while(d.firstChild){
        d.removeChild(d.firstChild);
    }
    d.parentNode.removeChild(d);
}
//DIV-REMOVE-SWATCH
function div_remove_swatch(){
    let d=document.querySelector(".content_sw");
    while(d.firstChild){
        d.removeChild(d.firstChild);
    }
    d.parentNode.removeChild(d);
}
//DIV-CREATE-CLOCK
function div_create_clk(){
    let body=document.querySelector("body");
    let p=document.createElement("DIV");
    p.className="content";
    body.appendChild(p);
    let d=document.querySelector(".content");
    //let ids=["date","days","time","color"];
    let ids=["date","days","clock","color-options"];
    for(let i=0; i<ids.length;i++){
        let node=document.createElement("DIV");
        node.id=ids[i];
        d.appendChild(node);
    }
}
//DEV-CREATE-STOPWATCH
function div_create_swatch(){
    let body=document.querySelector("body");
    let p=document.createElement("DIV");
    p.className="content_sw";
    body.appendChild(p);
    let d=document.querySelector(".content_sw");
    let node=document.createElement("DIV");
    node.id="time_sw";
    d.appendChild(node);
}
export{div_remove_clk, div_remove_swatch, div_create_clk, div_create_swatch};