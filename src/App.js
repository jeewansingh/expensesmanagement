import Home from "./components/Home";
import { Outlet } from "react-router-dom";
import Routing from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
