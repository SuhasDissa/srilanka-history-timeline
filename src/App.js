import { items } from './data/timeline';
import { Chrono } from 'react-chrono';

function App() {
  return (
    <main className="bg-slate-100 dark:bg-slate-900">
      <Chrono items={items}
        mode="VERTICAL_ALTERNATING"
        mediaHeight={350}
        disableToolbar={true} />
    </main>
  );
}

export default App;
