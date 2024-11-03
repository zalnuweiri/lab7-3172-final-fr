import React from 'react';
import './App.css';
import './index.css';

const About = () => {
    return (
        <div>
            <h1 className="centify" id="underline">About Me</h1>
            <br />
            <h3 className="centify">
                I am a Canadian-born Palestinian and I have been living in Halifax for almost three years.
                Before that, I was living in Antigonish and attending St.FX as a public policy student.
                I enjoy hiking, reading, sports, history, sociology & social justice, and botany. Please
                enjoy a selection of Islamic Sacred Geometry below.
            </h3>
            <br />
            <div>
                <img
                    className="pad-left"
                    src="/img/pink-masjid.jpg"
                    alt="Interior of the Pink Masjid in Iran"
                    width="24.5%"
                    //em used for height as it had best sizing
                    height="400em"
                />
                <img
                    src="/img/pattern.jpg"
                    alt="Image of an Islamic sacred/infinite geometric pattern"
                    width="24.5%"
                    height="400em"
                />
                <img
                    src="/img/dome.png"
                    alt="Interior of the Ashrafiyya Mosque's Dome"
                    width="24.5%"
                    height="400em"
                />
            </div>
        </div>
    );
};

export default About;
