import './Summary.css';

export default function Summary() {
  const years = new Date().getFullYear() - 2014;

  return (
    <div className={'summary-container'}>
      <h2 className={'title'}>SUMMARY</h2>
      <p className={'body-text'}>
        Senior Software Engineer with <b>{years} years of experience</b> in software and databases design,
        development and integration. Expert in diverse programming languages, including <b>JavaScript </b>
        and <b>Python</b>. Self-directed leader with expertise in <b>AWS Cloud</b> and strong background in
        developing systems for <b>Financial</b>, <b>Real Estate</b> and <b>Travel</b> industries.
      </p>
    </div>
  );
}
