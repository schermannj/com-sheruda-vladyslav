import './Skills.css';
import Skill from '../../Components/Skill/Skill';

export default function Skills() {
  const total = new Date().getFullYear() - 2014;

  return (
    <div id={'skills'} className={'skills-container'}>
      <h2 className={'title'}>SKILLS</h2>
      <div className={'content'}>
        <Skill icon={'js'} name={'JavaScript'} level={'expert'} years={total}/>
        <Skill icon={'aws'} name={'AWS'} level={'expert'} years={total - 2}/>
        <Skill icon={'py3'} name={'Python 3.x'} level={'expert'} years={total - 3.5}/>
        <Skill icon={'node'} name={'Node.JS'} level={'expert'} years={total - 2}/>
        <Skill icon={'sls'} name={'Serverless'} level={'expert'} years={total - 3}/>
        <Skill icon={'nosql'} name={'NoSQL'} level={'expert'} years={total - 2}/>
        <Skill icon={'sql'} name={'SQL'} level={'expert'} years={total}/>
        <Skill icon={'es'} name={'Elasticsearch'} level={'advanced'} years={total - 2}/>
        <Skill icon={'react'} name={'React.JS'} level={'advanced'} years={total - 3}/>
        <Skill icon={'pd'} name={'Pandas'} level={'advanced'} years={total - 3.5}/>
        <Skill icon={'agile'} name={'Agile'} level={'advanced'} years={total - 4}/>
        <Skill icon={'docker'} name={'Docker'} level={'advanced'} years={total - 4}/>
      </div>
    </div>
  );
}
