import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import ReactFullpage from '@fullpage/react-fullpage';
// import ReactDOM from 'react-dom';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  // <ReactFullpage
    // pluginWrapper = {pluginWrapper}

    //fullpage options
  //   scrollingSpeed = {1000} /* Options here */

  //   render={({ state, fullpageApi }) => {
  //     return (
  //       <ReactFullpage.Wrapper>
  //         <div className="section">
  //           <p>Section 1 (welcome to fullpage.js)</p>
  //           <button onClick={() => fullpageApi.moveSectionDown()}>
  //             Click me to move down
  //           </button>
  //         </div>
  //         <div className="section">
  //           <p>Section 2</p>
  //         </div>
  //       </ReactFullpage.Wrapper>
  //     );
  //   }}
  // />

  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  // console.log(hero);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
    {/* <ReactFullpage */}
        {/* scrollOverflow={true} */}
        {/* sectionsColor={["orange", "purple", "green"]} */}
        {/* onLeave={this.onLeave.bind(this)} */}
        {/* afterLoad={this.afterLoad.bind(this)} */}
        {/* render={({ state, fullpageApi }) => { */}
          {/* return ( */}
      <ReactFullpage.Wrapper> 
      <Hero hero={hero} />
      <About about={about} />
      <Projects projects={projects} />
      <Contact contact={contact} />
      <Footer footer={footer}/>
     </ReactFullpage.Wrapper> 
    </PortfolioProvider>
    //  )
    // }}
    // />
  );
}

export default App;

// ReactDOM.render(<Fullpage />, document.getElementById('react-root'));

