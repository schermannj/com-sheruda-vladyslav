import './Services.css';
import DoBlock from '../../Components/DoBlock/DoBlock';

export default function Services() {
  return (
    <div id={'services'} className={'services-container padded-content'}>
      <div className={'col'}>
        <h2 className={'title'}>WHAT I DO</h2>
      </div>
      <div className={'col right'}>
        <DoBlock icon={'www'} header={'App. Interface'} list={[
          'Work with React and Vue, in case its really needed.',
          'Design truly RESTful API and GraphQL actions according to the best practices.',
          'API versioning and documentation.'
        ]}/>
        <DoBlock icon={'server'} header={'Server side'} list={[
          'Design and implement back-end solutions for business in Python and NodeJS',
          'Work only with container based and serverless applications.'
        ]}/>
        <DoBlock icon={'cloud'} header={'Cloud solutions'} list={[
          'Architect solutions using cloud services like AWS and Google Cloud.',
          'Estimate monthly billings and try to provide the cheapest solution.'
        ]}/>
        <DoBlock icon={'db'} header={'Database'} list={[
          'Design database structure and do database optimizations.'
        ]}/>
      </div>
    </div>
  );
}
