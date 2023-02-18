import { useState, useEffect } from "react";
import ITask from "./components/interfaces/ITask";
import ITransition from "./components/interfaces/ITransition";
import Status from "./components/Status";
import Transition from "./components/Transition";

const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [transitions, setTransitions] = useState<ITransition[]>([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    if (reload) {
      fetch("https://mission-backend.onrender.com/api/tasks")
        .then((res) => res.json())
        .then((data) => setTasks(data));

      fetch("https://mission-backend.onrender.com/transitions")
        .then((res) => res.json())
        .then((data) => setTransitions(data))
        .finally(() => setReload(false));
    }
  }, [reload]);

  const onClick = (event: any) => {
    event.preventDefault();
    fetch("https://mission-backend.onrender.com/api/reset")
    setReload(true);
  };

  return (
    <div>
      <h1 className="title">Build a workflow</h1>
      <div className="bodyBox">
        <Status
          tasks={tasks}
          setTasks={setTasks}
          transition={transitions}
          setTransition={setTransitions}
          reload={reload}
          setReload={setReload}
        />
        <Transition
          tasks={tasks}
          setTasks={setTasks}
          setTransition={setTransitions}
          transition={transitions}
          reload={reload}
          setReload={setReload}
        />
      </div>
      <button onClick={onClick} className="big-red-button">
        reset
      </button>
    </div>
  );
};

export default App;
