import { useState } from "react";
import ITransitionProps from "./interfaces/ITransitionProps";

const AddTransition = (props: ITransitionProps) => {
  const [name, setName] = useState<string>();
  const [from, setFrom] = useState<string>();
  const [to, setTo] = useState<string>();

  const { setTransition, tasks, setReload } = props;

  const onSelectFrom = (name: string) => {
    setFrom(name);
    tasks?.forEach((task) => {
      if (task.name === name) task.isSelectedFrom = true;
    });
  };

  const onSelectTo = (name: string) => {
    setTo(name);
    tasks?.forEach((task) => {
      if (task.name === name) task.isSelectedTo = true;
    });
  };

  const submit = (event: any) => {
    event.preventDefault();
    fetch(`http://192.168.50.10:3001/api/transitions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        from: from,
        to: to,
      }),
    })
      .then((res) => res.json())
      .then((data) => setTransition(data))
      .finally(() => setReload && setReload(true));
    setName("");
    setFrom("");
    setTo("");
  };

  return (
    <form onSubmit={submit}>
      <label>
        <span>name: </span>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(text) => setName(text.target.value)}
        />
      </label>
      <label htmlFor="select">from: </label>
      <select
        name="select"
        id="select"
        value={from}
        onChange={(val) => onSelectFrom(val.target.value)}
      >
        <option value="blank"></option>
        {tasks?.map((task, i) => {
          return (
            task.name !== to && (
              <option value={task.name} key={i}>
                {task.name}
              </option>
            )
          );
        })}
      </select>
      <span>to: </span>
      <select
        name="select"
        value={to}
        id="select"
        onChange={(val) => onSelectTo(val.target.value)}
      >
        <option value="blank"></option>
        {tasks?.map((task, i) => {
          return (
            task.name !== from && (
              <option value={task.name} key={i}>
                {task.name}
              </option>
            )
          );
        })}
      </select>
      <input type="submit" value="Add" />
    </form>
  );
};

export default AddTransition;
