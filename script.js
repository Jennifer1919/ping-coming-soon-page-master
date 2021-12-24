var email = document.getElementsByTagName("input");
var button = document.getElementsByTagName("button");
var form = document.getElementsByTagName("form");

var wrong = function(){
    
    if(email[0].validity.typeMismatch===true || email[0].validity.valueMissing===true){
        email[0].setCustomValidity(" ");
        email[0].style.borderColor="hsl(354, 100%, 66%)";
        email[0].nextElementSibling.style.display = "block";

    }

    else{
        form[0].submit();
     }
    


}

button[0].addEventListener("click", wrong);