import { useState } from "react";
import ITaskProps from "./interfaces/ITaskProps";

const ShowAllTasks = (props: ITaskProps) => {
  const [selectedValue, setSelectedValue] = useState(0);
  const { tasks, setTasks } = props;

  const handleChange = (index: number) => {
    setSelectedValue(index);

    let newTasks = tasks;
    newTasks.map((task) => {
      return (task.isInitial = false);
    });

    newTasks[index].isInitial = true;
    setTasks(newTasks);
  };

  const onDelete = (name: string) => {
    let newTasks = tasks;
    newTasks = newTasks.filter((task) => task.name !== name);
    setTasks(newTasks);
  };

  return (
    <ul>
      {tasks.map((task, index) => {
        return (
          <li key={index}>
            <input
              type="radio"
              name="tasks"
              value={index}
              checked={selectedValue === index}
              onChange={(_e) => handleChange(index)}
            />
            {task.name} {task.isOrphan && <span>[ORPHAN]</span>}{" "}
            {task.isFinal && <span>[FINAL]</span>}{" "}
            {task.isInitial && <span>[INIT]</span>}
            <button onClick={() => onDelete(task.name)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ShowAllTasks;
