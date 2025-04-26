import { useEffect } from 'react';
import './MyWork.css';
import project1 from '../../assets/project_1.jpg';
import project2 from '../../assets/project_2.jpg';
import project3 from '../../assets/project_3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyWork = () => {
  useEffect(() => {
    AOS.init({
      duration: 8000,   
      once: false,      
      mirror: true      
    });
  }, []);

  return (
    <div id="projects" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>

      <div className="mywork-container">

        <div className="details-container">
          <div className="article-container" data-aos="zoom-in" data-aos-delay="200">
            <img src={project1} alt="Project 1" className="project-img" />
          
          <h2>MoneyMate</h2>
          <p>Created with <span className="tech"> React </span>, 
          <span className="tech"> Firebase </span>, and 
          <span className="tech"> CSS </span></p>
          <div className="btn-container">
            <button
              className="btn btn-color"
              onClick={() => window.open("https://github.com/VimbaiMurerwa/MoneyMate", "_blank")}

            >
              Github
            </button>
            <button
              className="btn btn-clear"
              onClick={() => window.open("https://moneymate-vite.netlify.app/", "_blank")}
            >
              Live Demo
            </button>
            </div>
          </div>
        </div>

       
        <div className="details-container">
          <div className="article-container"  data-aos="zoom-in" data-aos-delay="200">
            <img src={project2} alt="Project 2" className="project-img" />
         
          <h2 className="experience-title">Netflix Clone</h2>
          <p>Created with <span className="tech"> React </span>, 
          <span className="tech"> Firebase </span>, and 
          <span className="tech"> CSS </span></p>
          <div className="btn-container">
            <button
              className=" btn btn-color"
              onClick={() => window.open("https://github.com/VimbaiMurerwa/netflix-clone", "_blank")}
            >
              Github
            </button>
            <button
              className="btn btn-clear"
              onClick={() => window.open("https://netfli-clonekelpie.netlify.app/login", "_blank")}
            >
              Live Demo
            </button>
            </div>
          </div>
        </div>

        
        <div className="details-container">
          <div className="article-container"  data-aos="zoom-in" data-aos-delay="200">
            <img src={project3} alt="Project 3" className="project-img" />
             
     <h2 className="experience-title">Project Three</h2>
     <p>Created with <span className="tech"> Javascript </span>, 
          <span className="tech"> HTML </span>, 
          <span className="tech"> CSS  </span> and
          <span className="tech"> Fetch API </span></p>
          <div className="btn-container">
          <button
              className=" btn btn-color"
              onClick={() => (window.open = "https://github.com/VimbaiMurerwa/netflix-clone", "_blank")}
            >
              Github
            </button>
            <button
              className="btn btn-clear"
              onClick={() => window.open("https://netfli-clonekelpie.netlify.app/login", "_blank")}
            >
              Live Demo
            </button>
          </div>
        </div>
        </div>


      </div>
    </div>
  );
};

export default MyWork;
