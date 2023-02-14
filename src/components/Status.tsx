import AddTask from "./AddTask";
import ITaskProps from "./interfaces/ITaskProps";
import ShowAllTasks from "./ShowAllTasks";

const Status = (props: ITaskProps) => {
  const { tasks, setTasks, transition, setTransition, reload, setReload } =
    props;
  return (
    <div>
      <h3>Add status</h3>
      <AddTask
        setTasks={setTasks}
        tasks={tasks}
        transition={transition}
      />
      <ShowAllTasks
        tasks={tasks}
        setTasks={setTasks}
        transition={transition}
        setTransition={setTransition}
        reload={reload}
        setReload={setReload}
      />
    </div>
  );
};

export default Status;
