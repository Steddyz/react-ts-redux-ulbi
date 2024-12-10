import { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchUsers } from "./store/reducers/ActionCreator";

function App() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <h1>Redux users</h1>
      <div className="card">
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        {JSON.stringify(users, null, 2)}
      </div>
    </>
  );
}

export default App;
