 import logo from './logo.svg';
import './App.css';
import{ Header, Footer} from './Header.js'
import User from './User.js'

function App() {
  return ( <>
      
      <Header />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <User></User>
          Learn React
          <h1>Hello Lokesh</h1>
        </a>
      </header>
      
    </div>
    <Footer/>
    </>
  );
}

export default App;
