import './App.css';
import OutraLista from './components/OutraLista';

function App() {

  const meusItems = ['React', 'Vue', 'Angular'];

  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <OutraLista items={meusItems} />
      <OutraLista items={[]} />
    </div>
  );
}

export default App;
