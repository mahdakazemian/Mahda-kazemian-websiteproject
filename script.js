

// submit button

if (document.getElementById("bodyregister")){

    var button = document.getElementById("submit");
    button.addEventListener("click", function (event) {
    event.preventDefault ();    
    var submit = confirm("Are you sure that you want to submit the form?");
    if (submit)
    console.log(submit);
    else 
    console.log(submit);
   
    });

// reset button

    var button = document.getElementById("reset");
    button.addEventListener("click", function (event) {
    event.preventDefault ();    
    var reset = confirm("Are you sure that you want to reset the form?");
    if (reset)
    console.log(reset);
    else 
    console.log(reset);
   
    });


    
}
 


if (document.getElementById("bodyindex")){

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


}
