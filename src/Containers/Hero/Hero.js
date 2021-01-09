import './Hero.css';
import HeaderLogo from '../../assets/logo.svg';
import AnchorLink from '../../Components/AnchorLink/AnchorLink';
import AnchorButton from '../../Components/AnchorButton/AnchorButton';

export default function Hero({ mailTo, linkedin, github, twitter }) {
  return (
    <div className={'hero-container'}>
      <div className={'header'}>
        <div className={'header-logo'}>
          <img alt={"don't have a logo yet :("} src={HeaderLogo}/>
        </div>
        <div className={'header-anchors'}>
          <AnchorLink link={'services'}>services</AnchorLink>
          <AnchorLink link={'skills'}>skills</AnchorLink>
          <AnchorLink link={'experience'}>experience</AnchorLink>
          <AnchorButton mailTo={mailTo}>contact</AnchorButton>
        </div>
      </div>
      <div className={'content'}>
        <h1 className={'title'}>Hello, I'm Vladyslav Sheruda<b>.</b></h1>
        <p className={'body-text'}>I do not-for-fun <b>back-end</b> software engineering</p>
      </div>
      <div className={'hero-footer links'}>
        <a target="_blank" rel={'noreferrer'} href={`https://www.linkedin.com/in/${linkedin}/`}>
          <span className={'icon icon-linkedin'}/>
        </a>
        <a target={'_blank'} rel={'noreferrer'} href={`https://github.com/${github}`}>
          <span className={'icon icon-github'}/>
        </a>
        <a target={'_blank'}
           rel={'noreferrer'}
           href={mailTo}>
          <span className={'icon icon-google'}/>
        </a>
        <a target={'_blank'} rel={'noreferrer'} href={`https://twitter.com/${twitter}`}>
          <span className={'icon icon-twitter'}/>
        </a>
      </div>
    </div>
  );
}
