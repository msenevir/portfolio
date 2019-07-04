interface IJobHistory {
    title: string
    company: string
    date: string
    headline?: string
    bullets: string[]
}

const jobHistory: IJobHistory[] = [
    {
        title: 'Manager of Software Engineering',
        company: 'Innovu LLC.',
        date: 'Jan 2019 - Present',
        headline:
            'As the Manager of Software Engineering, I am continuing my previous responsibilities of developing the software while also taking leadership of the team.',
        bullets: [
            'At a high level, collaborate with product managers to prioritize which projects to tackle next as a company. I then plan a 2 week sprint with specific tasks for the developers.',
            'Lead daily scrum meetings where developers communicate their progress on sprint tasks.',
            `Create internal tools to increase developers' productivity.`,
            'Provide mentorship for developers to help them evolve into full-stack experts. I aim to maximize their education via weekly technical discussions and finding opportunities to contribute to open source software.',
            'Conduct quarterly performance reviews of employees.',
            'Deploy software to production.',
        ],
    },
    {
        title: 'Software Engineer',
        company: 'Innovu LLC.',
        date: 'Jan 2016 - Jan 2019',
        headline:
            'At Innovu we are creating a tool to help companies gain knowledge about their benefits programs in an effort to improve employee health and mitigate risks.',
        bullets: [
            'Worked on full stack web application powered by Node.js, Ember.js, JWT authentication, AWS Redshift / S3, and PostgreSQL.',
            'Implemented automatic GPG encryption/decryption for all S3 uploads/downloads.',
            'Contributed to dynamic query builder to securely expose PHI data to users via complex, performant SQL queries.',
            'Developed interactive dashboard builder to allow users to visually explore and analyze data. Users can collaborate to build reports and export them to both PDF and PowerPoint.',
            'Created standalone React and Electron application to help analysts find inconsistencies in insurance vendor claim data.',
        ],
    },
    {
        title: 'Contract Developer',
        company: 'Google',
        date: 'Jan 2015 - Sep 2015',
        bullets: [
            'Worked on platform migrations for high-value advertising partners of client.',
            'Used proprietary tools to clean, standardize, and analyze large data sets.',
            'Troubleshooted technical issues in pipeline and escalated issues as needed.',
            'Coordinated workflows with client Implementation Lead.',
        ],
    },
    {
        title: 'SAT/ACT Tutor',
        company: 'Kaplan',
        date: 'Jan 2013 - Jan 2015',
        bullets: [
            'Tutored individual students and classes (20-30 students) in SAT and ACT concepts.',
            'Kept in contact with students and monitored their progress closely.',
        ],
    },
    {
        title: 'Web Developer Intern',
        company: 'Schneider Lab',
        date: 'Mar 2014 - Sep 2014',
        headline:
            'The Schneider Lab at the University of Pittsburgh is developing a brain imaging technique called High Definition Fiber Tracking (HDFT) which looks at white matter connecting various brain regions to diagnose traumatic brain injuries.',
        bullets: [
            'Used Spring MVC to create web application and REST client for HDFT clinical case reporting.',
            'Created a simple, user-friendly frontend using AngularJS and Bootstrap.',
            'Managed and stored data with MongoDB.',
            'Implemented security with OAuth.',
            'Created test suite with JUnit and Mockito.',
        ],
    },
]

const Resume: React.FC<{}> = () => {
    return (
        <div>
            {jobHistory.map((job, idx) => (
                <div key={idx} className="entry">
                    <div className="info">
                        <h4>{job.title}</h4>
                        <h4>{job.company}</h4>
                    </div>

                    <i className="date">{job.date}</i>

                    {job.headline && <p className="headline">{job.headline}</p>}

                    <ul>
                        {job.bullets.map((bullet, idx) => (
                            <li key={idx} className="bullet">
                                {bullet}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <style jsx>{`
                .entry {
                    display: flex;
                    flex-direction: column;
                    padding: 10px 10px 20px 10px;
                }

                .headline {
                    padding-bottom: 10px;
                }

                .info {
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 5px;
                    font-size: 18px;
                }

                .date {
                    padding-bottom: 10px;
                    font-size: 14px;
                }

                .bullet {
                    margin-bottom: 10px;
                }
            `}</style>
        </div>
    )
}

export default Resume
