import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }
export default function Contact() {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ktdxgni', 'template_i3zg5ui', form.current, {
        publicKey: 'wemoMVHsGeeXyKeuX',
      })
      .then(
        () => {
          alert('message successfuly send!');
          setEmail('');
          setMessage('');
          setName('');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('message failed to send ')
        },
      );
  };

  return (
    
   
      <div className=" bg-[url('/wave22.svg')] bg-cover bg-right flex justify-center max-h-max mx-auto max-w-screen-2xl  px-6 sm:py-20 lg:px-8">
       <div className="bg-gray-100 w-200  p-6 rounded-md">
      <div className="  mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get In Touch</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        Have a question or just want to say hi? Lets connect!.
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="mx-auto mt-4 max-w-xl sm:mt-5">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
              Your Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="from_name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
                  
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Your Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="from_email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Your Message
            </label>
            <div className="mt-1">
              <textarea
                name="message"
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          
        </div>
        <div className="mt-5">
          <input
            type="submit"
            value="Send"
            className="block w-full rounded-md bg-emerald-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          />
            
        
        </div>
      </form>
      </div>
      <div className="w-2/6 mt-10 ">
          <img src="/3.png" alt="" />
        </div>
    </div>
  )
}
   
