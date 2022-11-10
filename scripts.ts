let form = document.querySelector("form") as HTMLFormElement

// Inputs
let nameInput = document.getElementById("name") as HTMLInputElement
let cardNumberInput = document.getElementById("card-num") as HTMLInputElement
let monthInput = document.getElementById("month") as HTMLInputElement
let yearInput = document.getElementById("year") as HTMLInputElement
let cvcInput = document.getElementById("cvc") as HTMLInputElement

//Card display
let nameCard = document.querySelector(".card-name") as HTMLDivElement
let monthCard = document.querySelector(".card-month") as HTMLDivElement
let yearCard = document.querySelector(".card-year") as HTMLDivElement
let cvcCard = document.querySelector(".cvc-back") as HTMLDivElement
let cardNumber = document.querySelector(".middle-front") as HTMLDivElement

nameInput.addEventListener("input", () => {
    nameInput.value = nameInput.value.replace(/[^a-zA-Z ]/g, "")
  nameCard.textContent = nameInput.value
  console.log(nameInput.value.length)
  if (nameInput.value.length > 30) {
    nameCard.style.fontSize = "12px";
} else {
    nameCard.style.fontSize = "inherit"
}
})

cardNumberInput.addEventListener("input", () => {
  cardNumberInput.value = cardNumberInput.value
    .replace(/\D/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim()
  cardNumber.textContent = cardNumberInput.value
})

monthInput.addEventListener("input", () => {
  monthInput.value = monthInput.value
    .replace(/\D/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim()
  if (monthInput.value.length >= 2) {
    monthInput.value = monthInput.value.slice(0, 2)
    console.log(monthInput.value)
  }
  monthCard.textContent = monthInput.value
})

yearInput.addEventListener("input", () => {
    yearInput.value = yearInput.value
    .replace(/\D/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim()
  if (yearInput.value.length >= 2) {
    yearInput.value = yearInput.value.slice(0, 2)
    console.log(yearInput.value)
  }
  yearCard.textContent = yearInput.value
})

cvcInput.addEventListener("input", () => {
    cvcInput.value = cvcInput.value
    .replace(/\D/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim()
  if (cvcInput.value.length >= 3) {
    cvcInput.value = cvcInput.value.slice(0, 3)
    console.log(cvcInput.value)
  }
  cvcCard.textContent = cvcInput.value
})

window.onload = () => {
  form.reset()
}
