
/////////register page////////
         
///////////////////focus function////////////////////////


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



/////////////////Error messages///////////////////////


var submitButton = document.getElementById("submitbtn");
var errorName = document.getElementById("errorname");
var errorUser = document.getElementById("erroruser");
var errorPass = document.getElementById("errorpass");
var errorPhone = document.getElementById("errorphone");
var errorAddress = document.getElementById("erroraddress");
var errorCity = document.getElementById("errorcity");
var errorPro = document.getElementById("errorpro");
var errorPost = document.getElementById("errorpost");



submitButton.addEventListener("click", function(event) {

    errorName.style.display = "none";
    errorUser.style.display = "none";
    errorPass.style.display = "none";
    errorPhone.style.display = "none";
    errorAddress.style.display = "none";
    errorCity.style.display = "none";
    errorPro.style.display = "none";
    errorpost.style.display= "none";
    correctpcode.style.display = "none";

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
   
    if (!pass){

        event.preventDefault();
        errorPass.style.display="block";
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
   
    if (!city){

        event.preventDefault();
        errorCity.style.display="block";
        return false;
    }
   
    if (!pro){

        event.preventDefault();
        errorPro.style.display="block";
        return false;
    }

   if (!post){
     event.preventDefault();
     errorpost.style.display="block";
     return false;
   }
    if (/^[A-Z]\d[A-Z] ?\d[A-Z]\d$/.test(post)) {
         }else{
        event.preventDefault();
        correctpcode.style.display ="block";
        return false;
    }

    
        
   

    
////////// submit confirmation
    event.preventDefault ();    
    var submitConfirm = confirm("Are you sure that you want to submit the form?");
    if (submitConfirm){
        document.form1.submit();
    }
    
   
  });////end of click function for validation & submit

/////////// reset confirmation

    var resetbutton = document.getElementById("resetbtn");
    resetbutton.addEventListener("click", function (event) {
    event.preventDefault ();    
    var resetconfirm = confirm("Are you sure that you want to reset the form?");
    if (resetconfirm){
        document.form1.reset();
    
    }
   
    });





}///////// end of bodyregister






//////////index page//////////

///adding images and description inside the table

if (document.getElementById("bodyindex")){

    var urlArrey=[ "https://en.parisinfo.com/","https://www.lonelyplanet.com/italy/venice",
                     "https://wikitravel.org/en/Tehran","https://wikitravel.org/en/Moscow"]




    var immageArrey=["C://xampp/htdocs/mahda-project/images/pic8.jpg",
                     "C://xampp/htdocs/mahda-project/images/pic9.jpg",
                     "C://xampp/htdocs/mahda-project/images/pic10.jpg",
                     "C://xampp/htdocs/mahda-project/images/pic11.jpg"];

    var descriptionArrey=["Paris","Venice","Tehran","Moscow"];

    var newTable=document.createElement("table");

    for (i=0; i<immageArrey.length;i++ ){

    var newTableRow=document.createElement("tr");
    var newImg=document.createElement("img");
    newImg.src=immageArrey[i];

    var newTableData1=document.createElement("td");
    newTableData1.appendChild(newImg);
    newTableRow.appendChild(newTableData1);

    var newCap=document.createElement("p");
    var capText=document.createTextNode(descriptionArrey[i]);
    newCap.appendChild(capText);

    var newTableData2=document.createElement("td");
    newTableData2.appendChild(newCap);

    newTableRow.appendChild(newTableData2);
    newTable.appendChild(newTableRow);

    };
    console.log(newTable);
    var mainDetails=document.getElementsByClassName("maindetails")[0];
    mainDetails.appendChild(newTable);

    

/*
   var my_window=window.open(urlArrey[i]);
   newImg.appendChild(my_window);
   my_window.close();


*/


}
