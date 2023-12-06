import React from 'react';

function Skills() {
  return (
    <>
    <div className='skills'>
    <h2>Skills</h2>
    <div className='flex'>

      <div className="skill">
        <img src="src/assets/react.svg" alt="React" />
        <p>React</p>
      </div>
      <div className="skill">
        <img src="src/assets/html2.png" alt="HTML" />
        <p>HTML</p>
      </div>
      <div className="skill">
        <img src="src/assets/JavaScript_logo_2.svg" alt="JavaScript" />
        <p>JavaScript</p>
      </div>
      <div className="skill">
        <img src="src/assets/Github.logo.png" alt="Redux" />
        <p>Github</p>
      </div>
    </div>
    </div>
    </>
  );
}

export default Skills;
