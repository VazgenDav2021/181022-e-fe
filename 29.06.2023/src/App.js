import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./store/reducers/userReducer/userReducer";
import { fetchUsers } from "./store/actions";

const App = () => {
  const dispatch = useDispatch();

  // useSelector нам возвращает стейт
  const { users } = useSelector((state) => state.users);

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {users.map((eachUser, idx) => {
        const { name, id } = eachUser;
        return (
          <div key={idx} style={{ display: "flex", gap: "20px" }}>
            <li>{name}</li>
            <button onClick={() => handleDeleteUser(id)}>X</button>
          </div>
        );
      })}

      <ChildComponent />
    </div>
  );
};

const ChildComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const { serverUsers, errorMessage } = useSelector(
    (state) => state.serverUsers
  );
  if (errorMessage) {
    return <p style={{ color: "red" }}>{errorMessage}</p>;
  }
  return (
    <>
      <h1>Ползователи из сервера</h1>
      {serverUsers.map((servUser, idx) => {
        return <li key={idx}>{servUser.name}</li>;
      })}
    </>
  );
};

export default App;
