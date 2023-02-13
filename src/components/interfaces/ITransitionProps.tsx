import ITask from "./ITask";
import ITransition from "./ITransition";

export default interface ITransitionProps {
  setTransition: Function;
  transition: ITransition[];
  tasks?: ITask[];
  setTasks?: Function;
}
