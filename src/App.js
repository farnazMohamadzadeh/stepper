import Stepper from "./Components/Stepper/Stepper";
import "./App.css";
import AuthContext from "./Context/AuthContext";
import { useEffect, useState } from "react";
import Products from "./Components/Products/Products";

function App() {
  const result = [
    [12, 16],
    [13, 17],
    [8, 17],
    [9, 18],
    [10, 15],
  ];
  const result2 = result.reduce((prev, current) => [
    Math.max(prev[0], current[0]),
    Math.min(prev[1], current[1]),
  ]);
  console.log("result2", result2);
  const [isLogin, setIsLogin] = useState(false);

  const Login = (token) => {
    const now = new Date();
    setIsLogin(true);
    localStorage.setItem("token", token);
    localStorage.setItem("date", now.setTime(now.getTime() + 10 * 1000));
  };

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     setIsLogin(true);
  //     const now = new Date();
  //     const expiredTime = localStorage.getItem("date");
  //     if (expiredTime - now.getTime() <= 0) {
  //       localStorage.removeItem("token");
  //       localStorage.removeItem("date");
  //     }
  //     setTimeout(() => {
  //       localStorage.removeItem("token");
  //       setIsLogin(false);
  //       localStorage.removeItem("date");
  //     }, expiredTime - now.getTime());
  //   }
  // });
  // console.log(isLogin);

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        Login,
      }}
    >
      <Stepper />
    </AuthContext.Provider>
  );
}

export default App;
