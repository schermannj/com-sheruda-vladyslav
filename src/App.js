import './App.css';
import Summary from './Containers/Summary/Summary';
import Services from './Containers/Services/Services';
import Skills from './Containers/Skills/Skills';
import Experience from './Containers/Experience/Experience';
import Hero from './Containers/Hero/Hero';
import Footer from './Containers/Footer/Footer';
import config from './config';

function App() {
  return (
    <>
      <div className={'content-container'}>
        <Hero mailTo={config.mailTo} linkedin={config.linkedin} github={config.github} twitter={config.twitter}/>
        <Summary/>
        <Services/>
        <Skills/>
        <Experience/>
      </div>
      <Footer mailTo={config.mailTo} linkedin={config.linkedin} github={config.github} twitter={config.twitter}/>
    </>
  );
}

export default App;
