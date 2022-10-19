import "./general/style/App.css";
import Header from "./components/header";
import Card from "./components/card";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Card
          imageUrl="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
          comment="A woman's opinion needs to be respected like a man's."
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
