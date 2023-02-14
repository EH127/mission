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
      <h1 className="title">Build a workflow</h1>
      <div className="bodyBox">
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
      </div>
      <button onClick={onClick} className="big-red-button">reset</button>
    </div>
  );
};

export default App;
