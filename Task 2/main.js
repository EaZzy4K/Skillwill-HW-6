const body = document.body
const form = document.querySelector(".form")
const button = document.querySelector(".btn")
const colorInput = document.querySelector(".input");

const colorsArray = ['red', 'blue', 'green', 'black', 'white']

form.addEventListener("submit", (e) => {
  e.preventDefault()

  let colorMatchCheck = false

  for(let i = 0; i < colorsArray.length; i++){
    if(colorInput.value.toLowerCase() === colorsArray[i]) {
      colorMatchCheck = true
      body.style.backgroundColor = colorInput.value
      break;
    } 
  }

  if(colorMatchCheck != true){
    alert('Please choose only colors from the list: Red, Blue, Green, Black, White.')
    break;
  }
  // colorInput.value = ''
})
