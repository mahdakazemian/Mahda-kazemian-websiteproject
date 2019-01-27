
/////////register page////////
         
///////////////////focus function for fields of the form////////////////////////


if (document.getElementById("bodyregister")){

var fullName=document.getElementById("fullname");
fullName.addEventListener("focus",function(){
focusname.style.display = "block";
});
fullName.addEventListener('focusout', function() {
focusname.style.display = 'none';
});
   

var userName=document.getElementById("username");
userName.addEventListener("focus",function(){
focususername.style.display = "block";
});
userName.addEventListener('focusout', function() {
focususername.style.display = 'none';
});
    

var passWord=document.getElementById("password");
passWord.addEventListener("focus",function(){
focuspassword.style.display = "block";
});
passWord.addEventListener('focusout', function() {
focuspassword.style.display = 'none';
});


var phoneNumber=document.getElementById("phonenumber");
phoneNumber.addEventListener("focus",function(){
focusphone.style.display = "block";
});
phoneNumber.addEventListener('focusout', function() {
focusphone.style.display = 'none';  
});

var Address=document.getElementById("address");
Address.addEventListener("focus",function(){
focusaddress.style.display = "block";
});
Address.addEventListener('focusout', function() {
focusaddress.style.display = 'none';  
});

var Direction=document.getElementById("direction");
Direction.addEventListener("focus",function(){
focusdirection.style.display = "block";
});
Direction.addEventListener('focusout', function() {
focusdirection.style.display = 'none';  
});

var City=document.getElementById("city");
City.addEventListener("focus",function(){
focuscity.style.display = "block";
});
City.addEventListener('focusout', function() {
focuscity.style.display = 'none';  
});

var Province=document.getElementById("province");
Province.addEventListener("focus",function(){
focusprovince.style.display = "block";
});
Province.addEventListener('focusout', function() {
focusprovince.style.display = 'none';  
});


var Postal=document.getElementById("postalcode");
Postal.addEventListener("focus",function(){
focuscode.style.display = "block";
});
Postal.addEventListener('focusout', function() {
focuscode.style.display = 'none';  
});



////////////////////Error messages for validation the form/////////////////////////////


var submitButton = document.getElementById("submitbtn");
var errorName = document.getElementById("errorname");
var errorUser = document.getElementById("erroruser");
var errorPass = document.getElementById("errorpass");
var errorPhone = document.getElementById("errorphone");
var errorAddress = document.getElementById("erroraddress");
var errorCity = document.getElementById("errorcity");
var errorPro = document.getElementById("errorpro");
var errorPost = document.getElementById("errorpost");



submitButton.addEventListener("click", function(event) {////start of click function for validation form & submit

    errorName.style.display = "none";
    errorUser.style.display = "none";
    errorPass.style.display = "none";
    errorPhone.style.display = "none";
    errorAddress.style.display = "none";
    errordirection.style.display = "none";
    errorCity.style.display = "none";
    errorPro.style.display = "none";
    errorPost.style.display= "none";
    correctpcode.style.display = "none";
    correctemail.style.display = "none";
    correctpass.style.display = "none";

    var name = document.form1.fullname.value;
    var user = document.form1.username.value;
    var pass = document.form1.password.value;
    var phone = document.form1.phonenumber.value;
    var adr = document.form1.address.value;
    var city = document.form1.city.value;
    var pro = document.form1.province.value;
    var post = document.form1.postalcode.value;

    if (!name){

        event.preventDefault();
        errorName.style.display="block";
        return false;
    }
   
    if (!user){

        event.preventDefault();
        errorUser.style.display="block";
        return false;
    }
    ////////email format validation
    if (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(user)) {
    }else{
       event.preventDefault();
       correctemail.style.display ="block";
       return false;
    }

   
    if (!pass){

        event.preventDefault();
        errorPass.style.display="block";
        return false;
    }
    if( pass.length<5){      /////password format validation
        event.preventDefault();
        correctpass.style.display="block";
        return false;
    }

   
    if (!phone){

        event.preventDefault();
        errorPhone.style.display="block";
        return false;
    }
   
    if (!adr){

        event.preventDefault();
        errorAddress.style.display="block";
        return false;
    }
   
    var radios = document.getElementsByName("direction");  //// direction validation
    if (!(radios[0].checked || radios[1].checked || radios[2].checked || radios[3].checked)){
        event.preventDefault();
        errordirection.style.display="block";
        return false;
    }


    if (!city){

        event.preventDefault();
        errorCity.style.display="block";
        return false;
    }

    var select = document.getElementById("province");  //// province validation
    if (select.value==0){
        event.preventDefault();
        errorPro.style.display="block";
        return false;
    }


   if (!post){
     event.preventDefault();
     errorpost.style.display="block";
     return false;
   }
    if (/^[A-Z]\d[A-Z] ?\d[A-Z]\d$/.test(post)) {  //////postal code format validation
         }else{
        event.preventDefault();
        correctpcode.style.display ="block";
        return false;
    }
    
    
///////////////////////submit confirmation
    event.preventDefault ();    
    var submitConfirm = confirm("Are you sure that you want to submit the form?");
    if (submitConfirm){
        document.form1.submit();
    }
    
   
  });////end of click function for validation & submit

//////////////////////// reset confirmation

    var resetbutton = document.getElementById("resetbtn");
    resetbutton.addEventListener("click", function (event) {
    event.preventDefault ();    
    var resetconfirm = confirm("Are you sure that you want to reset the form?");
    if (resetconfirm){
        document.form1.reset();
    
    }
   
    });





}///////////////////////// end of bodyregister




//////////index page//////////

////////////adding images,descriptions and urls inside the table

if (document.getElementById("bodyindex")){

    var urlArrey=[ "https://www.lonelyplanet.com/france/paris","https://www.lonelyplanet.com/italy/venice",
                    "https://www.lonelyplanet.com/iran/tehran","https://www.lonelyplanet.com/russia/moscow"];


    var immageArrey=["images/paris.jpg","images/venice.jpg","images/tehran.jpg","images/moscow.jpg"];

    var descriptionArrey=["Paris","Venice","Tehran","Moscow"];

    var newTable=document.createElement("table");////// creat our table

    for (let i=0; i<immageArrey.length;i++ ){
        

            var newTableRow=document.createElement("tr");////// creat table row
            var tempImg=document.createElement("img");
            tempImg.src=immageArrey[i];

            tempImg.addEventListener("click", function(event){//// link images to the url and open url in the new window
            var new_window=window.open(urlArrey[i]);

            function closenew_window() {/////close new window after 8 seconds
                new_window.close();
                }
                setTimeout(closenew_window, 8000);

            }); 

            var newTableData=document.createElement("td");//// inserting first data(images) to the row
            newTableData.appendChild(tempImg);
            newTableRow.appendChild(newTableData);

            
            var description=document.createElement("p");//// adding discrption
            var tempText=document.createTextNode(descriptionArrey[i]);
            description.appendChild(tempText);

            newTableData=document.createElement("td");/// inserting next data(description) in the row(creating second column)
            newTableData.appendChild(description);
            newTableRow.appendChild(newTableData);
            newTable.appendChild(newTableRow);
    
            
 
};

    var mainDetails=document.getElementsByClassName("maindetails")[0];/// inserting our table in the indexpage's body in the specific place.
    mainDetails.appendChild(newTable);

    



}///////////////////////// end of bodyindex 
