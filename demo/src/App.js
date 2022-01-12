import { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser = {
    email: "thanh@gmail.com",
    password: "thanh123"
  }

  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        email: details.email
      });
    } else {
      console.log("Sai mật khẩu hoặc tên đăng nhập!");
      setError("Sai mật khẩu hoặc tên đăng nhập!");
    }
  }

  const Logout = () => {
    setUser({email: ""})
  }
  return (
    <div className="App">
      {(user.email != "") ? (
        <div className='welcome'>
          <h2>Welcome, <span>{user.email}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login= {Login} error={error}/>
      )}
    </div>

  );
}

export default App;
