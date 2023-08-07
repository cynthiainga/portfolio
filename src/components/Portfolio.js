import React, { Component } from 'react';
import ProjectCard from './common/ProjectCard';
import capstone from '../assets/images/Capstone1.png';
import budgetapp from '../assets/images/budgetapp.png';
import covidtrack from '../assets/images/covidtrack.png';
import leaderboard from '../assets/images/leaderboard.png';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shownTab: 'all',
    };
  }

  handleHowTab = (tab) => {
    this.setState({ shownTab: tab });
  };

  render() {
    const { shownTab } = this.state;
    const projects = [
      {
        id: 1,
        image: capstone,
        title: 'AfroFemCoders',
        description:
          'Afro Fem Coders aims to create a space that gives women a chance to learn programming in a safe and encouraging environment. Our community is currently made up 1300+ students across 20+ African countries.Female students face numerous challenges, as academic spaces are often unsafe and unsupportive, and there remains a heavy stigma around women pursuing careers in technology.',
        demoLink: 'https://cynthiainga.github.io/Capstone-Proj-1/',
        sourceCodeLink: 'https://github.com/cynthiainga/Capstone-Proj-1',
        technologies: [
          { id: 1, name: 'JavaScript' },
          { id: 2, name: 'HTML' },
          { id: 3, name: 'CSS' },
        ],
        category_id: 1,
        animation: 'zoom-in-up',
      },
      {
        id: 3,
        image: covidtrack,
        title: 'Covid-19 Tracker',
        description:
          'Covid-19-Webapp is a tracking site that provides the necessary information on covid-19 cases in any African country and other continents their update.',
        demoLink: 'https://covid-19-appli.netlify.app/',
        sourceCodeLink: 'https://github.com/cynthiainga/Covid-19-webapp',
        technologies: [
          { id: 1, name: 'React & Redux' },
          { id: 2, name: 'JavaScript' },
          { id: 3, name: 'CSS' },
          { id: 4, name: 'HTML' },
        ],
        category_id: 1,
        animation: 'zoom-in-up',
      },
      {
        id: 2,
        image: budgetapp,
        title: 'Budget Application',
        description:
          'The TransferMoney app is a mobile web application which helps users to manage their budget. It has features of listing transactions associated on a category and with the app you can see how much money you spent on that category.',
        demoLink: 'https://blooming-ravine-10044.herokuapp.com/',
        sourceCodeLink: 'https://github.com/cynthiainga/Budget_App',
        technologies: [
          { id: 1, name: 'Ruby on Rails' },
          { id: 2, name: 'HTML' },
          { id: 3, name: 'CSS' },
        ],
        category_id: 3,
        animation: 'flip-left',
      },
      {
        id: 4,
        image: leaderboard,
        title: 'Leaderboard',
        description:
          'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
        demoLink: 'https://cynthiainga.github.io/leaderboard/dist',
        sourceCodeLink: 'https://github.com/cynthiainga/leaderboard',
        technologies: [
          { id: 1, name: 'Javascript' },
          { id: 2, name: 'API' },
          { id: 3, name: 'CSS' },
          { id: 4, name: 'HTML' },
        ],
        category_id: 1,
        animation: 'zoom-in-up',
      },
    ];

    const webProjects = projects.filter((project) => project.category_id === 1);
    const mobileProjects = projects.filter(
      (project) => project.category_id === 2,
    );
    const backendProjects = projects.filter(
      (project) => project.category_id === 3,
    );

    const renderProjects = () => {
      if (shownTab === 'all') {
        return projects;
      } if (shownTab === 'mobile') {
        return mobileProjects;
      } if (shownTab === 'web') {
        return webProjects;
      }
      return backendProjects;
    };
    return (
      <div className="portfolio-main-container" id="portfolio" name="portfolio">
        <div className="portfolio">
          <div className="portfolio-header">
            <div className="title-container" data-aos="fade-up">
              <div className="before-line" />
              <h3 className="titles">Portfolio</h3>
            </div>
            <div className="portfolio-works">
              <div className="projects-links">
                <h3 data-aos="fade-up">Some of my best works</h3>
                <ul>
                  <li>
                    <button onClick={() => this.handleHowTab('all')} type="button" className={shownTab === 'all' ? 'active' : ''}>
                      All
                    </button>

                  </li>
                  <li>
                    <button onClick={() => this.handleHowTab('web')} type="button" className={shownTab === 'web' ? 'active' : ''}>
                      Web
                    </button>
                  </li>
                  {/* <li>
                    <button onClick={() => this.handleHowTab('mobile')}
                    type="button" className={shownTab === 'mobile' ? 'active' : ''}>
                      Mobile
                      {' '}
                    </button>
                  </li> */}
                  <li>
                    <button onClick={() => this.handleHowTab('backend')} type="button" className={shownTab === 'backend' ? 'active' : ''}>
                      Backend
                    </button>
                  </li>
                </ul>
              </div>
              <div className="projects-grid-wrapper">
                {renderProjects().map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
