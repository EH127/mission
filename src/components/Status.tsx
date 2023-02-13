import AddTask from "./AddTask";
import ITaskProps from "./interfaces/ITaskProps";
import ShowAllTasks from "./ShowAllTasks";

const Status = (props: ITaskProps) => {
  const { tasks, setTasks } = props;
  return (
    <div>
      <h3>Add status</h3>
      <AddTask setTasks={setTasks} tasks={tasks} />
      <ShowAllTasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Status;
