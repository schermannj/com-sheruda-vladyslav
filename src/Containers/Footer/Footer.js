import './Footer.css';

import AnchorButton from '../../Components/AnchorButton/AnchorButton';

export default function Footer({mailTo, linkedin, github, twitter}) {
  return (
    <div className={'footer-container'}>
      <div className={'content'}>
        <div className={'left'}>
          <h2 className={'title'}>Just say hi!</h2>
          <AnchorButton mailTo={mailTo}>send a letter</AnchorButton>
          <div className={'links'}>
            <a target="_blank" rel={"noreferrer"} href={`https://www.linkedin.com/in/${linkedin}/`}>
              <span className={'icon icon-linkedin light'}/>
            </a>
            <a target={'_blank'} rel={"noreferrer"} href={`https://github.com/${github}`}>
              <span className={'icon icon-github light'}/>
            </a>
            <a target={'_blank'} rel={"noreferrer"} href={mailTo}>
              <span className={'icon icon-google light'}/>
            </a>
            <a target={'_blank'} rel={"noreferrer"} href={`https://twitter.com/${twitter}`}>
              <span className={'icon icon-twitter light'}/>
            </a>
          </div>
        </div>
        <div className={'right'}>
          <div className={'col'}>
            <span className={'icon icon-google medium light'}/>
            <a target="_blank" rel={"noreferrer"} href={`https://www.linkedin.com/in/${linkedin}/`}>
              <span className={'icon icon-linkedin medium light'}/>
            </a>
          </div>
          <div className={'col'}>
            <a target={'_blank'} rel={"noreferrer"} href={`https://github.com/${github}`}>
              <span className={'icon icon-github medium light'}/>
            </a>
            <a target={'_blank'} rel={"noreferrer"} href={`https://twitter.com/${twitter}`}>
              <span className={'icon icon-twitter medium light'}/>
            </a>
          </div>
        </div>
      </div>
      <div className={'divider'}/>
      <span className={'body-text'}>© 2021 Vladyslav Sheruda. – All Rights Reserved.</span>
    </div>
  );
}
