import { useState } from "react";
import ITransitionProps from "./interfaces/ITransitionProps";

const AddTransition = (props: ITransitionProps) => {
  const [name, setName] = useState<string>();
  const [from, setFrom] = useState<string>();
  const [to, setTo] = useState<string>();

  const { setTransition, transition, tasks } = props;

  const submit = (event: any) => {
    event.preventDefault();
    if (
      transition.find((transition) => transition.name === name) ||
      (name && name.trimEnd().length === 0) ||
      !name
    ) {
      return;
    }
    setTransition([...transition, { from: from, to: to, name: name }]);
  };

  return (
    <form onSubmit={submit}>
      <label>
        <span>name: </span>
        <input
          type="text"
          name="name"
          onChange={(text) => setName(text.target.value)}
        />
      </label>
      <label htmlFor="select">from: </label>
      <select
        name="select"
        id="select"
        onChange={(val) => setFrom(val.target.value)}
      >
        <option value="blank"></option>
        {tasks?.map((task, i) => {
          return (
            <option value={task.name} key={i}>
              {task.name}
            </option>
          );
        })}
      </select>
      <span>to: </span>
      <select
        name="select"
        id="select"
        onChange={(val) => setTo(val.target.value)}
      >
        <option value="blank"></option>
        {tasks?.map((task, i) => {
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

export default AddTransition;
