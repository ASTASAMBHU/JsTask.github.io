let username = document.getElementById('txtname');
let email = document.getElementById('txtmail');
let mobile = document.getElementById('txtmobile');
let password = document.getElementById('txtpwd');




function validForm(){
    if(username.value == ''){
        document.getElementById('nameerror').innerHTML='Empty User Name<b>';
    }
    else if(username.value.length < 3){
        document.getElementById('nameerror').innerHTML=`Min 3 Char required`;
    }
    else{
        document.getElementById('nameerror').innerHTML='';
    }


    var regExp_email=/[a-z]+@[a-z]+\.[a-z]+/;
    if(email.value==''){
        document.getElementById('emailerror').innerHTML='Empty Email';
    }
    else if(!regExp_email.test(email.value)){
        document.getElementById('emailerror').innerHTML='email format should be ***@***.****';
    }
    else{
        document.getElementById('emailerror').innerHTML='';
    }
    


    let regExp_phno=/\d{10}/g;
    if(mobile.value==""){
        document.getElementById('numbererror').innerHTML="Emplty Mobile Number";
       
    }
    else if(!regExp_phno.test(mobile.value)){
        document.getElementById('numbererror').innerHTML="Min. 10 digit required";
       
    }
    else{
        document.getElementById('numbererror').innerHTML="";
    }


    if(password.value==""){
        document.getElementById('pwderror').innerHTML='Empty password';
    }
    else{
        document.getElementById('pwderror').innerHTML='';
        
    }

    return false;
}