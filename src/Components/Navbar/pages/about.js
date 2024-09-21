import React from "react";

const About = () => {
    return (
        <div class-name="about">
            {/* Mission */}
            <div className="section">
                <div className="section-header">
                    <h1>Mission</h1>
                </div>
                <div className="body">
                    <p><strong>Our Mission</strong> is to empower individuals to overcome and achieve their goals with confidence. 
                    <em> Helping you be your most authentic you.</em></p>
                </div>
            </div>

            {/* Values */}
            <div className="section">
                <div className="section-header">
                    <h1>We Value</h1>
                </div>
                <div className="body">
                    <ul>
                        <li>Authenticity</li>
                        <li>Respect</li>
                        <li>Finding similarity in difference</li>
                    </ul>
                </div>
            </div>

            {/* Lori */}
            <div className="section">
                <div className="section-header">
                    <h2>About Lori ...</h2>
                </div>
                <div className="body">
                    <p>My mission is to empower individuals to overcome language barriers and achieve their goals with confidence. 
                        Drawing from my background in engineering and project management,
                        I bring a unique blend of technical expertise and practical experience to my coaching sessions. 
                        I understand the challenges that non-native English speakers face in the professional world, 
                        and I'm committed to providing personalized support tailored to each individual's needs.
                        <br>
                        </br>
                        With a focus on building trust and fostering a supportive learning environment, 
                        I prioritize open communication, active listening, and empathy in my interactions with clients. 
                        Whether you're looking to improve your technical communication skills, navigate cultural nuances, 
                        or advance your career opportunities, I'm here to guide you every step of the way.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;