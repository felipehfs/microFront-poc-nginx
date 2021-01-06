import Counter from "../../components/counter";
import { CounterStore } from "../../store/CounterStore";
import { Link } from 'react-router-dom';

const counterStore = new CounterStore();
const counterStore2 = new CounterStore();

function App() {
  return (
    <div>
      <Counter store={counterStore} />
      <Counter store={counterStore2} />
      <Link to="/angular">Angular</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default App;
