import React from 'react';
import "./pagesIndex.css"

const Home = () => {
  return (
    <div className='home-page'>

      {/* Private Lessons */}
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

      {/* Group Lessons */}
      <div className="group-lesson">
        <div className="lesson-header">
          <h1>Small Group Lessons</h1>
          <div className="lesson-subheader">
            <h3>starting at $40 per hour</h3>
          </div>
        </div>
        <div className='online-container'>
          <div className='private-container'>
            <div className="lesson-type">
              <h2>Online</h2>
            </div>
            <ul className='pros'>
              <li>Class Anywhere</li>
              <li>Class limited to 4 students</li>
              <li>Group interaction</li>
              <li>Less time commitment without travel</li>
              <li>Class notes available after class</li>
            </ul>
          </div>
          <div className='private-container'>
            <div className="lesson-type">
              <h2>In Person</h2>
            </div>
            <br></br>
            <ul className='pros'>
              <li>Meet in public location</li>
              <li>Class limited to 4 students</li>
              <li>Face to Face group interaction</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Corporate Lessons */}
      <div className="private-lesson">
        <div className="lesson-header">
          <h1>Corporate Classes</h1>
        </div>
          <div className='corporate-container'>
            <div className="lesson-type">
              <h3>online or at your location</h3>
            </div>
            <ul className='pros'>
              <li>Class for 2-5 students</li>
              <li>Typically an 8 week course for all skill levels</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;