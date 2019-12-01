
function wait(s){
    
    var pass=new Date();
    var now=new Date();
    var sen=0;
    while(now  - pass < (s*1000)  ){ 
    let td = (now -pass)/1000;
    passtime=Math.floor(td)-sen;
    if(passtime !=0){
        console.log(Math.floor((now  - pass)/1000)+'秒鐘過去');
    }
     
     now =new Date();
     sen=Math.floor(td);
    }
   
    console.log(s+"秒結束")
}

wait(10);


