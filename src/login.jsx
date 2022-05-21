import react from "react";
import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("your username");
  const [password, setPassword] = useState("");
  return (
    <form>
      <label>USER NAME</label>
      <input
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <label>PASSWORD</label>
      <input
        onChange={(event) => {
          setPassword(event.target.value);
          // console.log(password);
        }}
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Login;
