import { schedulesDay } from "./schedules/load.js"
import { scheduleFetchByDay } from "../services/schedule-fetch-by-day.js"

const selectedDate = document.getElementById("date")

document.addEventListener("DOMContentLoaded", async () => {
  const date = selectedDate.value
  const dailySchedules = await scheduleFetchByDay(date)
  console.log(dailySchedules)
  schedulesDay()
})