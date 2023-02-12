import { useState } from "react";
import ITask from "./components/interfaces/ITask";
import Status from "./components/Status";
import Transition from "./components/Transition";
const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  return (
    <>
      <h1>Build a workflow</h1>
      <Status tasks={tasks} setTasks={setTasks} />
      <Transition tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default App;
