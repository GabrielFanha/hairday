import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("client")


const today = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega data atual
selectedDate.value = today

//Define a data minima para agendar
selectedDate.min = today

form.onsubmit = (event) => {
  // Prevent reload form
  event.preventDefault()

  try {
    const name = clientName.value.trim()
    if (!name) {
      return alert(`Informe o nome do cliente!`)
    }

    const hourSelected = document.querySelector(".hour-selected")
    console.log(hourSelected)
    if(!hourSelected) {
      return alert(`Selecione a hora!`)
    }
    const [hour,] = hourSelected.innerText.split(":")

    const when = dayjs(selectedDate.value).add(hour, "hour")
    const id = new Date().getTime()

    console.log({ id, name, when })
  } catch (error) {
    alert(`Não foi possível realizar o agendamento.`)
    console.log(error)
  }
}