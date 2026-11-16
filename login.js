
function onSubmit(event) {

    event.preventDefault();

const username = document.getElementById("get_username").value;
const password = document.getElementById("get_password").value;



if (username == "Jannen" && password == "Delfino") {
alert("LOGIN SUCCESSFULLY!");
window.location.href = "portfolio.html";

} else { 
    alert("INVALID INPUT. PLEASE TRY AGAIN.");

}
}