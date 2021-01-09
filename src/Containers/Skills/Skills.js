import './Skills.css';
import Skill from '../../Components/Skill/Skill';

export default function Skills() {
  return (
    <div id={'skills'} className={'skills-container'}>
      <h2 className={'title'}>SKILLS</h2>
      <div className={'content'}>
        <Skill icon={'js'} name={'JavaScript'} level={'expert'} years={7}/>
        <Skill icon={'aws'} name={'AWS'} level={'expert'} years={5}/>
        <Skill icon={'py3'} name={'Python 3.x'} level={'advanced'} years={3}/>
        <Skill icon={'node'} name={'Node.JS'} level={'expert'} years={5}/>
        <Skill icon={'sls'} name={'Serverless'} level={'expert'} years={3}/>
        <Skill icon={'nosql'} name={'NoSQL'} level={'advanced'} years={5}/>
        <Skill icon={'sql'} name={'SQL'} level={'expert'} years={5}/>
        <Skill icon={'es'} name={'Elasticsearch'} level={'advanced'} years={5}/>
        <Skill icon={'react'} name={'React.JS'} level={'advanced'} years={4}/>
        <Skill icon={'pd'} name={'Pandas'} level={'advanced'} years={3}/>
        <Skill icon={'agile'} name={'Agile'} level={'advanced'} years={3}/>
        <Skill icon={'docker'} name={'Docker'} level={'advanced'} years={3}/>
      </div>
    </div>
  );
}
