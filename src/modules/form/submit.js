import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

const today = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega data atual
selectedDate.value = today

//Define a data minima para agendar
selectedDate.min = today

form.onsubmit = (event) => {
  // Prevent reload form
  event.preventDefault()

  
}