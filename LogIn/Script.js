document.querySelector("#B1").addEventListener("click", function (){
    var Mail = document.querySelector("#Mail").value;
    var Pass = document.querySelector("#Pass").value;
    if (Mail == "Mohammed" & Pass == "1234")
    {
        window.location = ("../Student/Student.html")
    }
    else {alert("The Mail Or Password Is Incorect Plase Try Again")}
})