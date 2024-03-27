import { items } from './data/timeline';
import { Chrono } from 'react-chrono';
import './App.css';

function App() {
  return (
    <main>
      <div className="main-container">
        <h1 className='main-heading'><span>Sri Lankan History Timeline</span></h1>
      </div>
      <Chrono items={items}
        mode="VERTICAL_ALTERNATING"
        mediaHeight={350}
        disableToolbar={true}
        fontSizes={{
          cardSubtitle: '1.3rem',
          cardText: '1.15rem',
          cardTitle: '1.3rem',
          title: '1.3rem',
        }} />
    </main>
  );
}

export default App;
