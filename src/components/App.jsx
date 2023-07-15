import Image from "../assets/alert.svg";
import Counter from "./Counter";
const App = () => {
  return (
    <div>
      <h1>State Functions</h1>
      <img src={Image} alt="sword" width="50" />
      <Counter />
    </div>
  );
};

export default App;
