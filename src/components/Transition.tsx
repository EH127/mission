import ITaskProps from "./interfaces/ITaskProps";
const Transition = (props: ITaskProps) => {
  const { setTasks, tasks } = props;
  return (
    <form>
      <label>
        <span>name: </span>
        <input
          type="text"
          name="name"
          //onChange={(text) => setTaskName(text.target.value)}
        />
      </label>
      <label htmlFor="select">from: </label>
      <select name="select" id="select">
        {tasks.map((task, i) => {
          return (
            <option value={task.name} key={i}>
              {task.name}
            </option>
          );
        })}
      </select>
      <span>to: </span>
      <select name="select" id="select">
        {tasks.map((task, i) => {
          return (
            <option value={task.name} key={i}>
              {task.name}
            </option>
          );
        })}
      </select>
      <input type="submit" value="Add" />
    </form>
  );
};

export default Transition;
