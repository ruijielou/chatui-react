import { useDispatch, useSelector } from "react-redux";
import { add, minus } from "../../store/slice/count";

const Login = () => {
  const { count } = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(add({ type: "conunt/add" }))}>add</button>
      <div className="text-red">{count}</div>
      <button onClick={() => dispatch(minus({ type: "conunt/plus" }))}>
        minus
      </button>
    </>
  );
};

export default Login;
