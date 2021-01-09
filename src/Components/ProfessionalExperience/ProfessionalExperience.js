import './ProfessionalExperience.css';


export default function ProfessionalExperience({ position, company, time, responsibilities }) {
  return (
    <div className={'professional-experience'}>
      <h3 className={'title'}>{position}</h3>
      <p className={'body-text'}><b>{company}</b></p>
      <p className={'body-text secondary'}>{time}</p>
      <ul>
        {
          responsibilities.map(it => (<li className={"body-text"}>{it}</li>))
        }
      </ul>
    </div>
  );
}
