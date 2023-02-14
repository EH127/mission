import AddTransition from "./AddTransition";
import ITransitionProps from "./interfaces/ITransitionProps";
import ShowAllTransitions from "./ShowAllTransitions";

const Transition = (props: ITransitionProps) => {
  const { setTasks, tasks, setTransition, transition, reload, setReload } =
    props;

  return (
    <div className="addClass">
      <h3>Add transition</h3>
      <AddTransition
        setTransition={setTransition}
        tasks={tasks}
        transition={transition}
        setTasks={setTasks}
        reload={reload}
        setReload={setReload}
      />
      <ShowAllTransitions
        transition={transition}
        setTransition={setTransition}
        tasks={tasks}
        setTasks={setTasks}
        setReload={setReload}
      />
    </div>
  );
};

export default Transition;
