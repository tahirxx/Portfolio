import Headshot1 from '../../public/Headshot3.png'

  const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      '../../public/html5.svg',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      '../../public/css3-alt.svg',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      '../../public/js.svg',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      '../../public/react.svg',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      '../../public/node.svg',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      '../../public/java.svg',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      '../../public/git.svg',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      '../../public/github.svg',
  },

  
  // More people...
]


export default function About() {
  return (
    <div className="bg-[url('../../public/wave14.svg')] bg-cover bg-center max-h-max mx-auto max-w-screen-2xl  ">
    <div className='max-w-2xl mx-auto px-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 text-red pt-20 flex flex-col '>
        <div className="h-1/2 text-wrap pb-6 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl font-serif ">About Me</h1>
          
        </div>
        <div className='flex space-x-10 pt-8'>
        <div className='w-full relative'>
          
 {/* First headshot */}
    <img src={Headshot1} alt="" className='rounded-2xl absolute top-0 left-0 z-10'/>
     </div>
          <div className='flex flex-col mb-16'>
              <div className='w-3/4 text-center '>
                <p className=' font-serif text-xl text-left'>Greetings! Im a software developer who transitioned from a decade-long career as an ultrasound technologist in healthcare. Following my bootcamp completion in 2023, I've dedicated over a year to coding. Armed with a Bachelor of Science from The Ohio State University, I prioritize user-centric design and excel in teamwork. I'm currently open for hire and excited to collaborate on innovative projects. </p>
                  <br></br>
                <p className=' font-serif text-xl text-left'>Greetings! Im a software developer who transitioned from a decade-long career as an ultrasound technologist in healthcare. Following my bootcamp completion in 2023, I've dedicated over a year to coding. </p>
              </div>
              <div className=" mt-4">
                <div className="mx-auto grid max-w-7xl gap-y-5 px-2 ">
                  <h1 className="text-2xl font-bold text-left pt-12" >My Skills</h1>
                  <ul role="list" className="grid grid-cols-10 gap-4 items-center ">
                  {/* Assuming people is an array of 10 person objects */}
                  {people.slice(0, 10).map((person, index) => (
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
