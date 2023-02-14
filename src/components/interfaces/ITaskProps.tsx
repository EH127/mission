import ITask from "./ITask";
import ITransition from "./ITransition";

export default interface ITaskProps {
  setTasks: Function;
  tasks: ITask[];
  transition: ITransition[];
  setTransition?: Function;
  reload?: boolean;
  setReload?: Function;
}
