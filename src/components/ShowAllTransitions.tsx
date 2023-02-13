import ITransitionProps from "./interfaces/ITransitionProps";

const ShowAllTransitions = (props: ITransitionProps) => {
  const { transition, setTransition } = props;

  const onDelete = (name: string) => {
    let newTransition = transition;
    newTransition = newTransition.filter(
      (transition) => transition.name !== name
    );
    setTransition(newTransition);
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
            <button onClick={() => onDelete(name)} >delete </button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowAllTransitions;
