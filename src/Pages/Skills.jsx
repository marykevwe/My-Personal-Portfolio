import React from 'react';

function Skills() {
  return (
    <>
    <div className='skills'>
    <h2>Skills</h2>
    <div className='flex'>

      <div className="skill">
        <div className='still-img1'>
        <img src="src/assets/react.svg" alt="React" /></div>
        <p>React</p>
      </div>
      <div className="skill">
      <div className='still-img2'> <img src="src/assets/html2.png" alt="HTML" /></div>
        <p>HTML</p>
      </div>
      <div className="skill">
       <div className='still-img3'> <img src="src/assets/JavaScript_logo_2.svg" alt="JavaScript" /></div>
        <p>JavaScript</p>
      </div>
      <div className="skill">
      <div className='still-img4'> <img src="src/assets/Github.logo.png" alt="github" /></div>
        <p>Github</p>
      </div>
    </div>
    </div>
    </>
  );
}

export default Skills;
