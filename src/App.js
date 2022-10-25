import './general/style/App.css';
import Header from './components/header/header';
import Card from './components/card/card';
import SITUATIONS from './general/situations'

function App() {
  return (
    <div className="App">
      <Header/>
      {SITUATIONS.map((item) => (
        <Card
          description={item.description}
          image={item.image}
          image_description={item.image_description}
          color={item.color} />
      ))}
    </div>
  );
}

export default App;
