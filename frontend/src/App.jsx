import { useEffect } from "react";
import Home from "./pages/home";
import { getCurrentUser } from "../../backend/gateway/controllers/user.controller.js";

function App() {

  useEffect(() => {
    const getUser = async () => {
      await getCurrentUser()
    }
    getUser()
  }, [])

  return (

    <>
      <Home />
    </>
  )
}

export default App;
