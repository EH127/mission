import ITransitionProps from "./interfaces/ITransitionProps";

const ShowAllTransitions = (props: ITransitionProps) => {
  const { transition } = props;
  return (
    <>
      {transition.map((transition, i) => {
        const { from, name, to } = transition;
        return (
          <span key={i}>
            {name}: {from} -&gt; {to}
          </span>
        );
      })}
    </>
  );
};

export default ShowAllTransitions;
