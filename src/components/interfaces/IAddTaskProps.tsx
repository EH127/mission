import ITask from "./ITask";

export default interface IStatusProps {
  tasks: ITask[];
  setTasks: Function;
}
