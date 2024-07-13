var box=document.querySelectorAll("#box");
var turno=true;
var ms=document.querySelector("#hide");
var id =document.querySelector("#bid");
var win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
box.forEach((b)=>{
    b.addEventListener("click",()=>{
        if(turno){
            b.innerText="o";
            turno=false;
        }else{
            b.innerHTML="x";
            turno=true;
        }
        b.ariaDisabled=true;
        winner();
    });
});
const winmsg=(var1)=>{
    ms.innerHTML=`CONGRATULATIONS !!!--> ${var1}`;
    ms.style.display="inline";
}
const winner=()=>{
    for(var i of win){
            var var1=box[i[0]].innerHTML;
            var var2=box[i[1]].innerHTML;
            var var3=box[i[2]].innerHTML;
            if(var1!=""&&var2!=""&&var3!=""){
                if(var1===var2&&var2===var3){
                    console.log("winner",var1);
                    winmsg(var1);
                }
            }
    }
}