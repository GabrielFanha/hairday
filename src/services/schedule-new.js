import { apiConfig } from "./api.config";

export async function scheduleNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json"
      },
      body: JSON.stringify({ id, name, when })
    })
    alert(`O agendamento foi realizado com sucesso!`)

  } catch (error) {
    console.log(error)
    alert(`Não foi possível agendar! Tente novamente mais tarde.`)
  }
}