// Projects.js
import React from 'react';


function Projects() {
  return (
    <>
      <div className='flex'>
        <div className='container'>
          <img src="src/assets/project1.png" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          <p>Project 1</p>
          <a href="https://github.com/marykevwe/WEEK-12" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>

        <div className='container'>
          <img src="src/assets/ToDo.png" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          <p>Project 2</p>
          <a href="https://github.com/marykevwe/WEEK-9" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>

        <div className='container'>
          <img src="src/assets/project3.png" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          <p>Project 3</p>
          <a href="https://github.com/marykevwe/WEEK-14" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>

        <div className='container'>
          <img src="src/assets/project2.png" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          <p>Project 4</p>
          <a href="https://github.com/marykevwe/JNLMS-Test" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
      </div>
    </>
  );
}

export default Projects;
