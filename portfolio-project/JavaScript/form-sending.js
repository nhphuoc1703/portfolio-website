document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    fetch("http://localhost:3000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        })
    }).then(response => response.json())
      .then(data => alert(data.success || data.error))
      .catch(error => alert("Error: " + error));
});