
function vfun(){
    var username=document.forms["myForm"]["username"].value;
    var password=document.forms["myForm"]["password"].value;



    if(username==null || username==""){
        
        document.getElementById("errorBox").innerHTML= "enter the user name";
        return false;
    }

    if(password==null || password==""){
        document.getElementById("errorBox").innerHTML= "enter the password";
        return false;
    }

    if(username !='' && password !=''){
        alert("Login successfully");
    }
}





function vfun1(){
    var username1=document.forms["myForm2"]["username1"].value;
    var email1=document.forms["myForm2"]["email1"].value;
    var password1=document.forms["myForm2"]["password1"].value;
    var password2=document.forms["myForm2"]["password2"].value;



    if(username1==null || username1==""){
        
        document.getElementById("errorBox").innerHTML= "enter the user name";
        return false;
    }

    if(email1==null || email1==""){
        document.getElementById("errorBox").innerHTML= "enter the email";
        return false;
    }

    if(password1==null || password1==""){
        
        document.getElementById("errorBox").innerHTML= "enter the password";
        return false;
    }

    if(password2==null || password2==""){
        document.getElementById("errorBox").innerHTML= "enter the password";
        return false;
    }

    if(password1 != password2){
        document.getElementById("errorBox").innerHTML="password don't match";
        return false;
    }

    if(username1 != '' &&  password1 !='' &&  password2 !='' && email1 !=''){
        alert("register successfull");
    }
}





function vfun2(){
    var Recipe=document.forms["myForm3"]["Recipe"].value;
    var email2=document.forms["myForm3"]["email2"].value;
    var Ingredients=document.forms["myForm3"]["Ingredients"].value;
    var Instructions=document.forms["myForm3"]["Instructions"].value;
    



    if(Recipe==null || Recipe==""){
        
        document.getElementById("errorBox").innerHTML= "enter the name of recipe";
        return false;
    }

    if(email2==null || email2==""){
        document.getElementById("errorBox").innerHTML= "enter the email";
        return false;
    }

    if(Ingredients==null || Ingredients==""){
        
        document.getElementById("errorBox").innerHTML= "enter the ingredient";
        return false;
    }

    if(Instructions==null || Instructions==""){
        
        document.getElementById("errorBox").innerHTML= "enter the instruction";
        return false;
    }

    

    

    if(Recipe != '' &&  Ingredients !='' && email2 !='' && Instructions!=''){
        alert("YOUR RECIPE WAS SENT SUCCESSFULLY");
    }
}









