import { useState, useEffect } from "react";
import ITask from "./interfaces/ITask";
import ITaskProps from "./interfaces/ITaskProps";

const ShowAllTasks = (props: ITaskProps) => {
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const { tasks, setTasks, transition, setTransition, reload, setReload } =
    props;

  useEffect(() => {
    if (reload === true) {
      setTasks((prevTasks: ITask[]) => {
        let newTasks = prevTasks.map((task) => {
          const [isOrphanTask, isFinalTask] = isTask(task, tasks);
          task.isFinal = isFinalTask;
          task.isOrphan = !isOrphanTask;
          return task;
        });
        return newTasks;
      });
    }
    setReload && setReload(false);
  }, [reload, setReload, setTasks, tasks]);

  const isTask = (task: ITask, tasks: ITask[]) => {
    const initName = tasks.find((task) => task.isInitial === true)?.name;
    const taskDependencies = new Map();
    let isOrphanTask = false;
    let isFinalTask = false;

    let isAfterInit = false;
    if (initName === task.name) isOrphanTask = true;
    else {
      transition.forEach(({ from, to }) => {
        if (isAfterInit || from === initName) {
          if (from) {
            taskDependencies.set(from, []);
          }
          taskDependencies.get(from).push(to);
          if (to) {
            if (!taskDependencies.has(to)) {
              taskDependencies.set(to, []);
            }
          }
          isAfterInit = true;
        }
      });
      if (taskDependencies.has(task.name)) isOrphanTask = true;
    }

    if (task.isSelectedFrom === false) isFinalTask = true;
    return [isOrphanTask, isFinalTask];
  };

  const handleChange = (index: number) => {
    setSelectedValue(index);

    let newTasks = tasks;
    newTasks.map((task) => {
      return (task.isInitial = false);
    });

    newTasks[index].isInitial = true;
    setTasks(newTasks);
    setReload && setReload(true);
  };

  const onDelete = (name: string) => {
    let newTasks = tasks;
    newTasks = newTasks.filter((task) => task.name !== name);
    transition.map((transition) => {
      if (transition.to === name) {
        newTasks.map((task) => {
          if (task.isSelectedFrom && task.name === transition.from) {
            task.isSelectedFrom = false;
          }
          return task;
        });
      } else if (transition.from === name) {
        newTasks.map((task) => {
          if (task.isSelectedTo && task.name === transition.from) {
            task.isSelectedTo = false;
          }
          return task;
        });
      }
      return newTasks;
    });

    let newTransition = transition;
    newTransition = newTransition.filter(
      (transition) => !(transition.from === name || transition.to === name)
    );
    setTasks(newTasks);
    setTransition && setTransition(newTransition);
    setReload && setReload(true);
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
