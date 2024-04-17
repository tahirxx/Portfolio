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
    <div className="bg-[url('../../public/wave5.svg')] bg-cover bg-center ">
    <div className='max-h-max mx-auto max-w-2xl px-4  sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 text-red pt-20 flex flex-col'>
        <div className="h-1/2 text-wrap pb-10 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl font-bold ">About Me</h1>
          
        </div>
        <div className='flex p-2 justify-center text-center items-center'>
          <div className='w-1/2'>
            {/* image here */}
            <img src={Headshot1} alt="" className='rounded-2xl'/>
           </div>
          
          <div className='w-1/2 items-center '>
          <p className='bg-gray-100'>Greetings! Im a software developer who transitioned from a decade-long career as an ultrasound technologist in healthcare. Following my bootcamp completion in 2023, I've dedicated over a year to coding. Armed with a Bachelor of Science from The Ohio State University, I prioritize user-centric design and excel in teamwork. I'm currently open for hire and excited to collaborate on innovative projects. Lets create something extraordinary together!</p>
          </div>
        </div>
      <div>
    


    <div className="mt-8">
      <div className="mx-auto grid max-w-7xl gap-y-5 px-2 lg:px-8 ">
        <h1 className="text-3xl font-bold text-center" >Skills</h1>
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
    
    </div>
  )
}
