import { useState } from "react";
import ITask from "./components/interfaces/ITask";
import ITransition from "./components/interfaces/ITransition";
import Status from "./components/Status";
import Transition from "./components/Transition";
const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [transition, setTransition] = useState<ITransition[]>([]);
  const [reload, setReload] = useState(true);

  const onClick = (event: any) => {
    event.preventDefault();
    setTasks([]);
    setTransition([]);
    setReload(true);
  };
  return (
    <div>
      <h1>Build a workflow</h1>
      <Status
        tasks={tasks}
        setTasks={setTasks}
        transition={transition}
        setTransition={setTransition}
        reload={reload}
        setReload={setReload}
      />
      <Transition
        tasks={tasks}
        setTasks={setTasks}
        setTransition={setTransition}
        transition={transition}
        reload={reload}
        setReload={setReload}
      />
      <button onClick={onClick}>reset</button>
    </div>
  );
};

export default App;
