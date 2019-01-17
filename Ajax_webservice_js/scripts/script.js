window.addEventListener('load', function () {
loadusers();
document.getElementById("button1").onclick = function() {reload()};
}, false);



function loadusers(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', "https://thatsthespir.it/api", true);

   

    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200){
            
           // alert("done");
            let quote = JSON.parse(xhr.responseText);
            
            document.getElementById("name").innerHTML = "<strong>" + quote.author + "</strong>";
            
            if(quote.photo!=""){
                document.getElementById("photo").src=quote.photo;
            }else{
                document.getElementById("photo").src="./images/placeholder.jpg";
            }
            
            document.getElementById("quote").innerHTML = "<q>"+quote.quote+"</q>";


        }else if(xhr.status == 404){
            alert("Page not found");   
        }

        
    };
        xhr.send();
   
}

function reload(){
    window.location.href=window.location.href;
}