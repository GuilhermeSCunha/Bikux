import logo from './logo.svg';
import './App.css';
import JobCard from './components/jobCard/jobCard';

function App() {
  return (
    <div className="App">
      <JobCard Title = "Assistente de Criação" jobImage = "https://picsum.photos/100/100" jobDescription = 'Empresa XPTO procura assistente de criação para atuar em agência.'/>
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
