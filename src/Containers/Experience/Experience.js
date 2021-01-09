import './Experience.css';
import ProfessionalExperience from '../../Components/ProfessionalExperience/ProfessionalExperience';

export default function Experience() {
  return (
    <div id={'experience'} className={'experience-container padded-content'}>
      <h2 className={'title'}>PROFESSIONAL EXPERIENCE</h2>
      <div className={'content'}>
        <ProfessionalExperience
          position={'Team Leader / Senior Software Engineer'}
          company={'NDA'}
          time={'March 2018 - Present'}
          responsibilities={[
            'Interviewed, trained and managed a team of over 25 developers.',
            'Reviewed time tracking reports, conducted salary reviews and organized team-building events.',
            'Analyzed teammates performance and skills to define learning curve based on the results.',
            'Designed architecture and lead development process for various projects.'
          ]}
        />
        <ProfessionalExperience
          position={'Software Engineer'}
          company={'NDA'}
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
