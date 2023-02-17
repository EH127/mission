import ITransition from "./interfaces/ITransition";
import ITransitionProps from "./interfaces/ITransitionProps";

const ShowAllTransitions = (props: ITransitionProps) => {
  const { transition, setTransition, setReload } = props;

  const onDelete = (name: string) => {
    fetch(`http://192.168.50.10:3001/api/transitions/${name}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data: ITransition[]) => setTransition(data))
      .catch((error) => console.log(error))
      .finally(() => setReload && setReload(true));
  };

  return (
    <div>
      {transition.map((transition, i) => {
        const { from, name, to } = transition;
        return (
          <div key={i}>
            <span>
              {name}: {from} -&gt; {to}
            </span>
            <button onClick={() => onDelete(name)}> delete </button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowAllTransitions;
