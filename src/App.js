import { items } from './data/timeline';
import { Chrono } from 'react-chrono';

function App() {
  return (
    <main className="App">
      <Chrono items={items} mode="VERTICAL_ALTERNATING" mediaHeight={350} />
    </main>
  );
}

export default App;
