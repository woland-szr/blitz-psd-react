import About from './components/About';
import Home from './components/Home';
import Menu from './components/Menu';

const App =() => {
  return (
    <div className="App">
      <Menu order='first-menu'/>
      <Home />
      <Menu order='second-menu'/>
      <About />
    </div>
  );
}

export default App;
