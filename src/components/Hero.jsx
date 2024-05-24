import Headshot from '../assets/Headshot2.png';

export default function Hero() {
    

  return (
    <div className="bg-wave4 bg-cover bg-center opacity-1 max-h-max mx-auto max-w-screen-2xl">
      
    <div className='mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex flex-col md:flex-row justify-center text-left text-white'>
      
      {/* Title container*/}
      <div className="w-full md:w-1/2 order-2 md:order-1 text-wrap flex flex-col justify-center font-serif text-blue-900   ">
        <h6 className='text-sm md:text-xl pb-2 font-serif text-blue-900'>Hello, my name is </h6>
        <h1 className='text-4xl md:text-7xl pb-2 font-serif italic text-blue-900'>Urji Tahir</h1>
        <h1 className='text-lg md:text-4xl pb-3 font-serif'>Software Developer</h1>
        <p className='text-sm md:text-xl pb-9 font-serif'>I am a skilled and passionate software developer with experience in creating visually appealing and user-friendly webpages</p>
      <div className='flex flex-col md:flex-row gap-3 text-lg  font-serif text-center'>
        <a href="../../public/resume.pdf" target="_blank" className='bg-white w-40 font-bold text-blue-900 hover:bg-blue-800 hover:text-white rounded-xl'>My Resume</a>
        <a href="/contact" className='bg-white w-40 font-bold text-blue-900 hover:bg-blue-800 hover:text-white rounded-xl'>Hire Me</a>
      </div>
      </div>
    
    {/* Image container */}
        <div className="w-1/2 overflow-hidden pb-4 relative left-24 md:left-0 order-1 md:order-2 ">
            <img src={Headshot} alt="" className='w-full rounded-full animate-float'/>
        </div>
    </div>
   
    </div>
  )
}
