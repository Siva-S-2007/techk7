// Get the button element by its ID
document.getElementById("rocket").onclick = function() {
    // Redirect to the YouTube video when the button is clicked
    window.open("https://youtu.be/m4SntLpLhUw?feature=shared", "_blank"); // Replace with your desired YouTube video link
};

document.getElementById("indicator").onclick = function() {
    window.open("https://youtu.be/a1Bktjf9stU?si=mML9bTzKmjTUqP2H","_blank");
}

document.getElementById("robot").onclick = function() {
    window.open("https://youtu.be/PGGBppcHctU?si=0adOzMTMuIojJYNV","_blank");
}

document.getElementById("door").onclick = function() {
    window.open("https://youtu.be/zO-65IzxlG4?si=sz8HJZTb5G9gGGdv","_blank");
}

document.getElementById("camera").onclick = function() {
    window.open("https://youtu.be/ijRTZHamIOM?si=8EM2r93BPNDryFH_","_blank");
}

document.getElementById("minipc").onclick = function() {
    window.open("https://youtu.be/LqO3XBjhwlw?si=l8K5XB4dyCJYo9a8","_blank");
}

document.getElementById("contact-btn").onclick = function() {
    location.href = '#contact';
}


// gallery

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// email

// Initialize EmailJS (put your user ID here)

(function(){
    emailjs.init('DHpYIYNH1qzPgDwOI');
  })();
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Set template parameters (replace the placeholders with actual values)
    const templateParams = {
      to_name: 'TECHK7',        // Replace with your name or the recipient's name
      from_name: name,             // Name from the form input
      from_email: email,           // Email from the form input
      message: message             // Message from the form input
    };
  
    // Send the email using EmailJS
    emailjs.send('service_73tzr5h', 'template_c26o9z7', templateParams)
      .then(function(response) {
        alert('Message Sent Successfully');
      }, function(error) {
        alert('Failed to Send Message: ' + error);
      });
  });
  
