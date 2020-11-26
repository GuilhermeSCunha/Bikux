import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JobCard from './components/jobCard/jobCard';


ReactDOM.render(
  <React.StrictMode>
    <JobCard BadgesList = {["Copa Cabana", "CLT", "sem experiência"]} Title = "Assistente de Criação em empresa muito legal" jobImage = "https://picsum.photos/100/100?random=1" jobDescription = 'Empresa XPTO procura assistente de criação para atuar em agência. Empresa XPTO procura assistente de criação para atuar em agência. Empresa XPTO procura assistente de criação para atuar em agência. Empresa XPTO procura assistente de criação para atuar em agência.'/>
    <JobCard BadgesList = {["Leblon", "CLT", "com experiência"]} Title = "Assistente de Criação" jobImage = "https://picsum.photos/100/100?random=2" jobDescription = 'Empresa XPTO procura assistente de criação para atuar em agência. '/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
