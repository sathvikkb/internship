import Protected from "../Protected";
import userAuth from "../Hooks/userAuth.js";
import Public from "../../Public";
function SecondPage() {
  const isLogin = userAuth();
  return isLogin ? <Protected/> : <Public/>
}

export default SecondPage
