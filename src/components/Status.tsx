import AddTask from "./AddTask";
import ITaskProps from "./interfaces/ITaskProps";
import ShowAllTasks from "./ShowAllTasks";

const Status = (props: ITaskProps) => {
  const { tasks, setTasks } = props;
  return (
    <>
      <h3>Add status</h3>
      <AddTask setTasks={setTasks} tasks={tasks} />
      <ShowAllTasks tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default Status;
