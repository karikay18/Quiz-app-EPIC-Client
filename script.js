const auth= (e)=> {
    e.preventDefault();
    var ae = document.getElementById("email").value;
    var ap = document.getElementById("password").value;
    
    console.log(ae);
    console.log(ap);
    
    if (ae === "student@vit.in" && ap === "student") {
        console.log("You are a student");
        window.location.href = "quiz.html";
    } else if (ae === "admin@vit.in" && ap === "admin") {
        console.log("You are an admin");
        window.location.href = "admin.html";
    } else {
        console.log("Authentication failed:", error.message);
        alert("Authentication failed. Please try again.");
    }
};

document.querySelector("#submit").addEventListener("click",auth);