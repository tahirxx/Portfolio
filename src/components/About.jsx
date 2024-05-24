import { useState } from 'react';
import headshot3 from '../assets/headshot3.png';
import oromo3 from '../assets/oromo3.jpg';
import Urji from '../assets/Urji4.png';
import work from '../assets/work1.png';

import html5 from '../assets/html5.svg';
import css3 from '../assets/css3-alt.svg';
import js from '../assets/js.svg';
import react from '../assets/react.svg';
import node from '../assets/node.svg';
import java from '../assets/java.svg';
import git from '../assets/git.svg';
import github from '../assets/github.svg';

const people = [
  { name: 'Leslie Alexander', role: 'Co-Founder / CEO', imageUrl: html5 },
  { name: 'Leslie Alexander', role: 'Co-Founder / CEO', imageUrl: css3 },
  { name: 'Leslie Alexander', role: 'Co-Founder / CEO', imageUrl: js },
  { name: 'Leslie Alexander', role: 'Co-Founder / CEO', imageUrl: react },
  { name: 'Leslie Alexander', role: 'Co-Founder / CEO', imageUrl: node },
  { name: 'Leslie Alexander', role: 'Co-Founder / CEO', imageUrl: java },
  { name: 'Leslie Alexander', role: 'Co-Founder / CEO', imageUrl: git },
  { name: 'Leslie Alexander', role: 'Co-Founder / CEO', imageUrl: github },
];

const panels = [
    { src: headshot3, alt: 'Headshot' },
    { src: oromo3, alt: 'Oromo' },
    { src: work, alt: 'Work' },
    { src: Urji, alt: 'Urji 1' },
  
  ];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  

  return (
    <div className="bg-cover bg-center max-h-max mx-auto max-w-screen-2xl">
      <div className='max-w-2xl mx-auto sm:px-6 sm:py-8 lg:max-w-7xl lg:px-2 pt-4 md:pt-20 flex flex-col'>
        <div className="text-wrap pb-6 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl font-serif">About Me</h1>
        </div>
        {/* Image Section */}
        <div className='container flex space-x-4'>
          {panels.map((panel, index) => (
            <div
              key={index}
              className={`panel cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-in-out ${
                activeIndex === index ? 'flex-[5] shadow-lg' : 'flex-[0.5]'
              } ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              <img src={panel.src} alt={panel.alt} className='w-full h-full object-cover' />
            </div>
          ))}
        </div>
        {/* Both Content Div */}
        <div className='w-full flex flex-col md:flex-row'>
          {/* Get to Know Me Content */}
          <div className='w-full  flex flex-col border-2 rounded-lg'>
            <div className=' rounded-ml p-4 md:p-8 text-left text-lg'>
              <div className='section'>
                <h3 className='font-semibold text-xl'>Background and Education</h3>
                <p className='text-md'>
                  I was born in the Oromia Region, Ethiopia, and spent my formative years in Columbus, Ohio, where I embraced a vibrant community and diverse experiences. My academic journey led me to earn a Bachelor of Science from The Ohio State University, providing a strong foundation in critical thinking and scientific principles.
                </p>
              </div>
              <div className='section'>
                <h3 className='font-semibold text-xl'>Professional Experience and Community Involvement</h3>
                <p className='text-md'>
                  For a decade, I worked as an ultrasound technologist at the OSU Wexner Medical Center, where I gained invaluable insights into patient care and healthcare technology. Outside of my professional career, I have been actively involved in my community, serving as a youth organizer and secretary for the Oromo Community of Columbus, Ohio, dedicated to fostering community spirit and engagement.
                </p>
              </div>
              <div className='section'>
                <h3 className='font-semibold text-xl'>Personal Life and Career Transition</h3>
                <p className='text-md'>
                  I am a proud mother of three beautiful children, successfully balancing family life with my career. In 2023, I transitioned into the tech field by completing an intensive coding bootcamp, which ignited my passion for software development. With over a year of coding experience, I am now focused on creating user-centric designs and fostering effective teamwork dynamics.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <div className="mx-auto grid max-w-7xl px-2">
                <h1 className="text-xl md:text-2xl font-bold text-left pt-2 p-4 md:pt-2 md:p-8">My Skills</h1>
                <ul role="list" className="grid grid-cols-4 lg:grid-cols-8 md:gap-2 items-center p-2 md:p-2">
                  {people.map((person, index) => (
                    <li key={index}>
                      <img className="h-20 w-30 md:h-30 md:w-30 object-cover border-solid animate-bounce group-hover:scale-120" src={person.imageUrl} alt={person.name} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


// w-full md:w-1/2 columns-2 gap-4 p-4 mx-auto pb-10  bg-black - css for div contain images