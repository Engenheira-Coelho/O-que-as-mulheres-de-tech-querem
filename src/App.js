import './general/style/App.css';
import Header from './components/header/header';
import Card from './components/card/card';
import SITUATIONS from './general/situations';

function App() {
  const situations = SITUATIONS;
  return (
    <div className="App">
      <Header/>
      <Card
        description = {situations.description}
        image = {situations.image}
        image_description = {situations.image_description}
        color = {situations.color}
      />
    </div>
  );
}

export default App;
