import Headshot from '../../public/headshot.png';

export default function Hero() {
  return (
    <div className="bg-[url('../../public/wave4.svg')] bg-cover bg-center opacity-1">
      
    <div className='mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex justify-center text-left text-white'>
      
      {/* Title container*/}
      <div className="w-1/2  text-wrap flex flex-col justify-center">
        <h6 className='text-xl pb-2 '>Hello, my name is </h6>
        <h1 className='text-7xl pb-2 font-serif text-blue-900'>Urji Tahir</h1>
        <h1 className='text-5xl pb-3'>Software Developer</h1>
        <p className='text-xl pb-9'>I am a skilled and passionate software developer with experience in creating visually appealing and user-friendly webpages</p>
      <div className='flex gap-3 text-lg'>
        <button className='bg-white w-40 text-blue-900 hover:bg-blue-800 hover:text-white rounded-xl'>My Resume</button>
        <button className='bg-white w-40 text-blue-900 hover:bg-blue-800 hover:text-white rounded-xl'>Hire Me</button>
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