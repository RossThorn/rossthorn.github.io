import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import Typist from 'react-typist';

const Header = (hero) => {
  // const { hero } = useContext(PortfolioContext);
  console.log(hero);
  const { title, name, subtitle, cta } = hero;
  const cursorProps = {
    show: false,
    blink: true,
    element: '|',
    hideWhenDone: false,
    hideWhenDoneDelay: 1000,
  };

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
    setCount(1);
  }, [count]);

  const calcAge = () => {
    const dt1 = new Date();
    const dt2 = new Date("March 02, 1994");
    let diff =(dt2.getTime() - dt1.getTime()) / 1000;
   diff /= (60 * 60 * 24);

  return Math.abs(Math.round(diff/365.25)).toString();
  }

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <h2 className="hero-super-title">
            {title || 'Hi, my name is'}{' '}
          </h2>
          <h1 className="hero-title">
            <span className="text-color-main">{name || 'Ross Thorn'}</span>
          </h1>
          <h2 className="hero-subtitle">
            {subtitle || "and I'm "}
            {count ? (
      <Typist cursor={{
        show: true,
        blink: true,
        element: '|',
        hideWhenDone: false,
        hideWhenDoneDelay: 1000,
      }} className="hero-about" startDelay={1000} onTypingDone={() => setCount(0)}>
        <span>a cartographer.</span>
        <Typist.Backspace count={13} delay={800} />
        <span>designer.</span>
        <Typist.Backspace count={9} delay={800} />
        <span>developer.</span>
        {/* remove the "a" */}
        <Typist.Backspace count={12} delay={800} />
        <span>{calcAge()} years old.</span>
        <Typist.Backspace count={15} delay={800} />
        <span>a dungeon master.</span>
        <Typist.Backspace count={15} delay={800} />
        <span>musician.</span>
        <Typist.Backspace count={9} delay={800} />
        <span>pizza lover.</span>
        <Typist.Backspace count={12} delay={800} />
        <span>tea drinker.</span>
        <Typist.Backspace count={12} delay={800} />
        <span>Midwesterner.</span>
        <Typist.Backspace count={13} delay={800} />
        <span>Pointer.</span>
        <Typist.Backspace count={8} delay={800} />
        <span>Badger.</span>
        <Typist.Backspace count={7} delay={800} />
        <span>songwriter.</span>
        {/* remove the "a" */}
        <Typist.Backspace count={13} delay={800} />
        <span>too tall.</span>
        <Typist.Backspace count={9} delay={800} />
        <span>a craft beer drinker.</span>
        <Typist.Backspace count={19} delay={800} />
        <span>woodworker.</span>
        {/* remove the "a" */}
        <Typist.Backspace count={13} delay={800} />
        <span>not really a woodworker.</span>
        <Typist.Backspace count={24} delay={800} />
        <span>a font enthusiast.</span>
        <Typist.Backspace count={16} delay={800} />
        <span>human?</span>
        <Typist.Backspace count={8} delay={800} />
        <span>DEFINITELY a human.</span>
        <Typist.Backspace count={19} delay={800} />
        <span>a conversationalist.</span>
        <Typist.Backspace count={18} delay={800} />
        <span>folk singer.</span>
        {/* remove the "a" */}
        <Typist.Backspace count={15} delay={800} />
        <span>passionate.</span>
        <Typist.Backspace count={11} delay={800} />
        <span>compassionate.</span>
        <Typist.Backspace count={14} delay={800} />
        <span>your new best friend.</span>
        <Typist.Backspace count={21} delay={800} />
        <span>not good at skating.</span>
        <Typist.Backspace count={20} delay={800} />
        <span>an INFJ.</span>
        <Typist.Backspace count={8} delay={800} />
        <span>constantly learning.</span>
        {/* type back to the beginning to restart the loop */}
        <Typist.Backspace count={20} delay={5000} />
      </Typist>
    ) : (
      ""
    )}

          </h2>
        </Fade>
        <br/>
        <br/>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'See my work'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
