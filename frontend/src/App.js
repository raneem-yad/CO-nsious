import './App.css';

function Header() {
  return (
    <header>
      <h2>Header</h2>
      </header>
    );
}
  
function Footer() {
  return (
    <footer>
      <h2>Footer</h2>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <h1>Hello World</h1>
      <Footer />
    </>
  );
}

export default App;
