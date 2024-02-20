import './Experience.css';
import ProfessionalExperience from '../../Components/ProfessionalExperience/ProfessionalExperience';

export default function Experience() {
  return (
    <div id={'experience'} className={'experience-container padded-content'}>
      <h2 className={'title'}>PROFESSIONAL EXPERIENCE</h2>
      <div className={'content'}>
        <ProfessionalExperience
          position={'Tech Lead / Senior Engineer II'}
          company={'Tiqets'}
          time={'September 2021 - Present'}
          responsibilities={[
            'Managed and directed a team of senior engineers specializing in merchandising and discovery domain.',
            'Improved landing pages performance by 6 times by migrating from stateful to stateless architecture and implementing infrastructure-level caching.',
            'Re-designed and implemented core traffic tracking mechanism with extensibility, scalability and fault tolerance in mind.',
            'Played a main role in making the company compliant with PSD2 regulations.'
          ]}
        />
        <ProfessionalExperience
          position={'Solutions Engineer'}
          company={'LobbyCRE'}
          time={'April 2019 - Present'}
          responsibilities={[
            'Designed and implemented various data-/event- driven micro-services, ETL pipelines and GraphQL/RESTFul API services.',
            'Created presentations, documentation, was responsible for production deployments.',
            'Configured CI/CD pipelines.',
            'Tight communication with business folks to deliver the best solutions.',
          ]}
        />
        <ProfessionalExperience
          position={'Team Leader / Senior Software Engineer'}
          company={'Aimprosoft'}
          time={'March 2018 - April 2021'}
          responsibilities={[
            'Interviewed, trained and managed a team of over 25 developers.',
            'Reviewed time tracking reports, conducted salary reviews and organized team-building events.',
            'Analyzed teammates performance and skills to define learning curve based on the results.',
            'Designed architecture and lead development process for various projects.'
          ]}
        />
        <ProfessionalExperience
          position={'Software Engineer'}
          company={'Aimprosoft'}
          time={'July 2014 - March 2018'}
          responsibilities={[
            'Researched, designed and implemented over 10 scalable applications for data extraction, analysis and management.',
            'Reviewed requirements, specifications and technical design documents to provide timely and meaningful feedback and estimates.',
            'Worked with many customers to understand needs and provide excellent service.'
          ]}
        />
      </div>
    </div>
  );
}
