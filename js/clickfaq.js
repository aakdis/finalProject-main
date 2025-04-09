function interest() {
    const emailDiv = document.getElementById('emailDiv');
    const isChecked = document.getElementById('subscribe').checked;
    emailDiv.style.display = isChecked ? "block" : "none";
  }

  function myFunction() {
    const emailDiv = document.getElementById('emailDiv');
    emailDiv.innerHTML = "<h1>Thank you!</h1>";
  }
