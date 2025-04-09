function changeBackgroundColor() {
  var colors = ['#ede3dd'];  
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}


  