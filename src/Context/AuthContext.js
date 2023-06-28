import { createContext } from "react";

const AuthContext = createContext({
  isLogin: false,
  token: null,
  Login: () => {},
});
export default AuthContext;
