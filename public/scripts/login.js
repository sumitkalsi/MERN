
let email =document.getElementById('email');
let password =document.getElementById('password');
let flag1=1;
let flag2=1;
function validateform(){
   if(email.value ==''){
   
    document.getElementById('err1').innerHTML = '*';
    email.style.border = "2px solid red";
flag1=0;
   }
   else{
    document.getElementById('err1').innerHTML = '';
    flag1=1;
   }
   if(password.value ==''){
   
    document.getElementById('err2').innerHTML = '*';
    password.style.border = "2px solid red";
    flag2=0;
    
   }  else{
    document.getElementById('err2').innerHTML = '';
    flag2=1;
   }
   if(flag1&&flag2)
   {
    return true;
   }
   else{
    return false;
      }
}
