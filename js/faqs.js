function interest(){
    document.querySelector('#emailDiv').style.display="none";
    if (document.getElementById('subscribe').checked==true){
        document.getElementById('emailDiv').style.display = "block";
    }else{
        document.querySelector('#emailDiv').style.display="none";
    }
}
function myFunction() {
    alert("Thank you for your interest!");
}

document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".faq-question");
  
    questions.forEach((question) => {
      question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle("visible");
      });
    });
  });
  