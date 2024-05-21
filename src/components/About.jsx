import headshot3 from '../assets/headshot3.png';
import oromo3 from '../assets/oromo3.jpg';
import Urji from '../assets/Urji4.png';
import work from '../assets/work1.png'
  
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




  
  // More people...



export default function About() {
  return (
    <div className="bg-wave14 bg-cover bg-center max-h-max mx-auto max-w-screen-2xl  ">
    <div className='max-w-2xl mx-auto sm:px-6 sm:py-10 lg:max-w-7xl lg:px-2 pt-20 flex flex-col '>
        <div className="h-1/2 text-wrap pb-6 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl font-serif ">About</h1>
          
        </div>
        <div className='flex gap-14 pt-6'>
          {/* image section */}
        <div className='w-2/3 grid grid-cols-2 ' >
          
 
    <img src={headshot3} alt="" className='w-60 h-90 rounded-2xl relative ' style={{left: ''}}/>
    <img src={oromo3} alt="" className='w-80 h-60 rounded-2xl '/>
        <img src={work} alt="" className='w-80 h-90 rounded-2xl '/>
        <img src={Urji} alt="" className='w-60 h-96 rounded-2xl relative' style={{ top: '-140px', left: '20px' }}/>
    
     </div>
     {/* get to know me content */}
          <div className='flex flex-col'>
              <div className='w-full  bg-gray-100 rounded-ml px-8 py-2 text-left text-md '>
              <h2 className='font-bold text-xl text-center'>Get to Know Me</h2>
        <p ><strong>Born and Raised:</strong><br></br>I was born in the Oromia Region, Ethiopia. Grew up in Columbus, Ohio, embracing a vibrant community and diverse experiences.</p>
        <p><strong>Education:</strong><br></br>Earned a Bachelor of Science from The Ohio State University, providing a strong foundation in critical thinking and scientific principles.</p>
        
        <p><strong>Professional Journey:</strong><br></br>Spent a decade as an ultrasound technologist at the OSU Wexner Medical Center, gaining deep insights into patient care and healthcare technology.</p>
        <p><strong>Community Involvement:</strong><br></br>Served as a youth organizer and secretary for the Oromo Community of Columbus, Ohio, dedicated to fostering community spirit and engagement.</p>
        <p><strong>Personal Life:</strong><br></br>Proud mother to three beautiful kids, balancing family life with a dynamic career.</p>
        <p><strong>Career Transition:</strong><br></br>Completed an intensive coding bootcamp in 2023, which fueled my passion for software development.</p>
        <p><strong>Current Focus:</strong><br></br>Over a year of experience in coding, I am dedicated to crafting user-centric designs and fostering effective teamwork dynamics.</p>
       
    
               </div>
              <div className=" mt-4">
                <div className="mx-auto grid max-w-7xl gap-y-5 px-2 ">
                  <h1 className="text-2xl font-bold text-left pt-12" >My Skills</h1>
                  <ul role="list" className="grid grid-cols-10 gap-4 items-center ">
                  {/* Assuming people is an array of 10 person objects */}
                  {people.map((person, index) => (
                    <li key={index}>
                      <img className="h-30 w-30 object cover border-solid animate-bounce group-hover:scale-120" src={person.imageUrl} alt="" />
                    </li>
                  ))}
                </ul>
             </div>
         </div>
        </div>
        </div>
      <div>
    


    
 
      </div>
    </div>
    
    </div>
  )
}
