import { useState } from "react";
import ITaskProps from "./interfaces/ITaskProps";

const ShowAllTasks = (props: ITaskProps) => {
  const [selectedValue, setSelectedValue] = useState<number>();
  const { tasks, setTasks } = props;

  const handleChange = (event: any, index: number) => {
    setSelectedValue(event.target.value);

    var newTasks = tasks;
    newTasks.map((task) => {
      return (task.label = task.label.filter((label) => label !== "INIT"));
    });
    
    newTasks[index].label = [...newTasks[index].label, "INIT"];
    setTasks(newTasks);
  };

  return (
    <ul>
      {tasks.map((task, index) => {
        return (
          <li key={index}>
            <input
              type="radio"
              name="radio-group"
              value={index}
              checked={selectedValue === index}
              onChange={(e) => handleChange(e, index)}
            />
            {task.name}{" "}
            {task.label.map((label, index) => {
              return <span key={index}>[{label}]</span>;
            })}
          </li>
        );
      })}
    </ul>
  );
};

export default ShowAllTasks;
