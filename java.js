function coolor(){
    d=document.getElementById("inp")
    d.style.backgroundColor="darkorchid" ; 
    d.style.color="white" ; 
}
function rescoolor(){
    d=document.getElementById("inp")
    d.style.backgroundColor="white" ; 
    d.style.color="darkorchid" ; 
}
function ans(){
    res=document.getElementById("res")
    d=document.getElementById("inp").value
    r=Math.floor(Math.random()*5)+1
    if(d==""){
        res.innerHTML="Bro you have to type in sth !!"
    }
    else{
        if(r==1){
        res.innerHTML="YES"
        }
        if(r==2){
            res.innerHTML="NO"
        }
        if(r==3){
            res.innerHTML="MAYBE"
        }
        if(r==4){
            res.innerHTML="ASK AGAIN LATER"
        }
        if(r==5){
            res.innerHTML="DEFINETELY"
        }
    }

}