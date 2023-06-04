const form = document.querySelector(".form")
const input = document.querySelector(".input")
const button = document.querySelector(".averageBtn")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const splitNums = input.value.split(":")
  let sum = 0

  for(let i = 0; i < splitNums.length; i++){
    sum = sum + parseInt(splitNums[i])
  } 
  const average = sum / splitNums.length
  alert("The average is:" + " " + average)
})
