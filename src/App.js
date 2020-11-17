import About from './components/About';
import Home from './components/Home';
import Menu from './components/Menu';

const App =() => {
  return (
    <div className="app">
      <Home />
      <Menu section='home'/>
      <Menu section='about'/>
      <About />
    </div>
  );
}

export default App;
