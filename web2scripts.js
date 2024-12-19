document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "user" && password === "password") {
        alert("Login Successful!");
        window.location.href = "web2.html";
    } else {
        alert("Invalid credentials! Please try again.");
    }
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Sign-up successful! Redirecting to login page.");
    window.location.href = "web2login.html";
});


