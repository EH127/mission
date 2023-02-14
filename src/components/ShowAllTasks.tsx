import { useState, useEffect } from "react";
import ITask from "./interfaces/ITask";
import ITaskProps from "./interfaces/ITaskProps";

const ShowAllTasks = (props: ITaskProps) => {
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const { tasks, setTasks, transition, setTransition, reload, setReload } =
    props;

  useEffect(() => {
    if (reload === true) {
      fetch('http://192.168.50.10:3001/api/tasks/updateall')
        .then((res) => res.json())
        .then((data: ITask[]) => setTasks(data))
        .catch((error) => console.log(error));
    }
    setReload && setReload(false);
  }, [reload, setReload, setTasks, tasks]);

  const handleChange = (index: number) => {
    setSelectedValue(index);

    fetch(`http://192.168.50.10:3001/api/tasks/${index}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isInitial: true,
      }),
    })
      .then((res) => res.json())
      .then((data: ITask[]) => setTasks(data))
      .catch((error) => console.log(error));
    setReload && setReload(true);
  };

  const onDelete = (name: string) => {
    fetch(`http://192.168.50.10:3001/api/tasks/${name}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data: ITask[]) => setTasks(data))
      .catch((error) => console.log(error));
    // let newTasks = tasks;
    // newTasks = newTasks.filter((task) => task.name !== name);
    // transition.map((transition) => {
    //   if (transition.to === name) {
    //     newTasks.map((task) => {
    //       if (task.isSelectedFrom && task.name === transition.from) {
    //         task.isSelectedFrom = false;
    //       }
    //       return task;
    //     });
    //   } else if (transition.from === name) {
    //     newTasks.map((task) => {
    //       if (task.isSelectedTo && task.name === transition.from) {
    //         task.isSelectedTo = false;
    //       }
    //       return task;
    //     });
    //   }
    //   return newTasks;
    // });
    //   let newTransition = transition;
    //   newTransition = newTransition.filter(
    //     (transition) => !(transition.from === name || transition.to === name)
    //   );
    //   setTasks(newTasks);
    //   setTransition && setTransition(newTransition);
    //   setReload && setReload(true);
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
              onChange={() => handleChange(index)}
            />
            {task.name}
            {task.isInitial && <span>[INIT]</span>}
            {task.isFinal && <span>[FINAL]</span>}
            {task.isOrphan && <span>[ORPHAN]</span>}
            <button onClick={() => onDelete(task.name)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ShowAllTasks;
