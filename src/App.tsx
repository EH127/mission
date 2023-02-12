import {useState} from "react"
import ITask from "./components/interfaces/ITask"
import Status from "./components/Status"
const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([])
  return (
    <>
      <Status tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App