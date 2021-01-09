import './Skill.css';

export default function Skill({ icon, name, level, years }) {
  return (
    <div className={'skill'}>
      <span className={`img-icon icon-${icon}`}/>
      <h3 className={'title'}>{name}</h3>
      <p className={'body-text secondary'}><b className={'primary'}>{level}</b></p>
      <p className={'body-text secondary'}>{years} year{years > 1 ? 's' : ''}</p>
    </div>
  );
}
