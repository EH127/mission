import { useState } from "react";
import AddTransition from "./AddTransition";
import ITaskProps from "./interfaces/ITaskProps";
import ITransition from "./interfaces/ITransition";
import ShowAllTransitions from "./ShowAllTransitions";

const Transition = (props: ITaskProps) => {
  const [transition, setTransition] = useState<ITransition[]>([]);
  const { setTasks, tasks } = props;

  return (
    <div>
      <h3>Add transition</h3>
      <AddTransition
        setTransition={setTransition}
        tasks={tasks}
        transition={transition}
        setTasks={setTasks}
      />
      <ShowAllTransitions transition={transition} setTransition={setTransition} />
    </div>
  );
};

export default Transition;
