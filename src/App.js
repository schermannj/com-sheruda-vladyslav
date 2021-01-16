import mixpanel from 'mixpanel-browser';
import './App.css';
import Summary from './Containers/Summary/Summary';
import Services from './Containers/Services/Services';
import Skills from './Containers/Skills/Skills';
import Experience from './Containers/Experience/Experience';
import Hero from './Containers/Hero/Hero';
import Footer from './Containers/Footer/Footer';
import config from './config';
import c from './constants';

function App() {
  mixpanel.track(c.mixpanel.open_home_action, { api_host: config.mixpanel_host });

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
