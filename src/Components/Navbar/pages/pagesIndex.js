import React from 'react';
import "./pagesIndex.css"

const Home = () => {
  return (
    <div className='home-page'>
      <div className="private-lesson">
        <div className="lesson-header">
          <h1>Private Lessons</h1>
          <div className="lesson-subheader">
            <h3>starting at $75 per hour</h3>
          </div>
        </div>
        <div className='online-container'>
          <div className='private-container'>
            <div className="lesson-type">
              <h2>Online</h2>
            </div>
            <ul className='pros'>
              <li>Class Anywhere</li>
              <li>Less time commitment without travel</li>
              <li>Class notes available after class</li>
              <li>Flexible rescheduling policy</li>
            </ul>
          </div>
          <div className='private-container'>
            <div className="lesson-type">
              <h2>In Person</h2>
            </div>
            <ul className='pros'>
              <li>Meet in public location</li>
              <li>Face to Face connection</li>
              <li>Flexible rescheduling policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;