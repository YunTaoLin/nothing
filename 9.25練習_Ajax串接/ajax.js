
var btn = document.getElementById("btn");
var pagecounter = 1;

btn.addEventListener("click",function(){
    var Request =new XMLHttpRequest();
    Request.open("GET","https://learnwebcode.github.io/json-example/animals-"+pagecounter+".json");
    Request.onload = function(){
        var data = JSON.parse(Request.responseText);
        toShow(data);
    };
    Request.onerror = function(){
        alert("連接錯誤")
    };
    Request.send();
    pagecounter++; 
    if(pagecounter>3){
        btn.classList.add("hideMe");
    }
})


var list = document.getElementById("animal-list")
function toShow(data){
    var htmlString = "";
    for(i = 0 ; i < data.length ; i++){
        htmlString = "<li>"+ data[i].name+" is a "+data[i].species+" that like ";
        for(ii=0; ii < data[i].foods.likes.length ; ii++){
            if(ii==0){
                htmlString +=data[i].foods.likes[ii];
            }else{
                htmlString += " and "+ data[i].foods.likes[ii];  
            }
            
        }
        htmlString += ".</li>"
        console.log(htmlString);    
        

        list.insertAdjacentHTML("beforeend",htmlString);
    }
    
}




