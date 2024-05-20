import Headshot from '/Headshot2.png';

export default function Hero() {
    

  return (
    <div className="bg-[url('/wave4.svg')] bg-cover bg-center opacity-1 max-h-max mx-auto max-w-screen-2xl">
      
    <div className='mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex justify-center text-left text-white'>
      
      {/* Title container*/}
      <div className="w-1/2  text-wrap flex flex-col justify-center font-serif">
        <h6 className='text-xl pb-2 font-serif'>Hello, my name is </h6>
        <h1 className='text-7xl pb-2 font-serif text-blue-900'>Urji Tahir</h1>
        <h1 className='text-5xl pb-3 font-serif'>Software Developer</h1>
        <p className='text-xl pb-9 font-serif'>I am a skilled and passionate software developer with experience in creating visually appealing and user-friendly webpages</p>
      <div className='flex gap-3 text-lg  font-serif text-center'>
        <a href="../../public/resume.pdf" target="_blank" className='bg-white w-40 font-bold text-blue-900 hover:bg-blue-800 hover:text-white rounded-xl'>My Resume</a>
        <a href="/contact" className='bg-white w-40 font-bold text-blue-900 hover:bg-blue-800 hover:text-white rounded-xl'>Hire Me</a>
      </div>
      </div>
    
    {/* Image container */}
        <div className="w-1/2 overflow-hidden relative ">
            <img src={Headshot} alt="" className='w-full rounded-full animate-float'/>
        </div>
    </div>
   
    </div>
  )
}
