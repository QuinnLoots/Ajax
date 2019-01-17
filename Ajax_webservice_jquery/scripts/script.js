$( document ).ready(function() {
    loadusers();
   
    $( "#button1" ).click(function() {
        window.location.href=window.location.href;
    });
    
    function loadusers(){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', "https://thatsthespir.it/api", true);
    
       
    
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200){
                
               // alert("done");
                let quote = JSON.parse(xhr.responseText);
                
                $("#name").html("<strong>" + quote.author + "</strong>");
                
                if(quote.photo!=""){
                    $("#photo").attr("src",quote.photo);
                }else{
                    $("#photo").attr("src","./images/placeholder.jpg");
                }
                $("#quote").html("<q>"+quote.quote+"</q>");
    
    
            }else if(xhr.status == 404){
                alert("Page not found");   
            }
    
            
        };
            xhr.send();
       
    }
    
    
});



