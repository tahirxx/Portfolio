import ecommerce from '../assets/ecommerce2.png';
import realestate from '../assets/realestate.png';
import web1 from '../assets/web1.png';
import menu1 from '../assets/menu1.png';
import coming from '../assets/Coming.png';

const products = [
  {
    id: 1,
    name: 'LuxeLane',
    href: '#',
    imageSrc: ecommerce,
    imageAlt: "Front of men's Basic Tee in black.",
    description: 'An online store selling various products with features such as product catalog, shopping cart, and secure checkout.',
    color: 'Black',
    demo: 'https://luxelaneshop.netlify.app' ,
    code: 'https://github.com/tahirxx/Ecommerce/tree/master',
  },
  {
    id: 2,
    name: 'RealtyHub',
    href: '#',
    imageSrc: realestate,
    imageAlt: "Front of men's Basic Tee in black.",
    description: 'A responsive website for a real estate agency showcasing properties with search and filtering functionalities.',
    color: 'Black',
    demo: 'https://realtyhub-2dcd11.netlify.app/' ,
    code: 'https://github.com/tahirxx/realestate',
  },
  {
    id: 3,
    name: 'Astro Consulting',
    href: '#',
    imageSrc: web1,
    imageAlt: "Front of men's Basic Tee in black.",
    description: 'A professional website for a consulting firm, providing information about services, team, and contact details.',
    color: 'Black',
    demo: 'https://luxelaneshop.netlify.app' ,
    code: 'https://github.com/tahirxx/StellerTech',
  },
  {
    id: 4,
    name: 'SavoryBites',
    href: '#',
    imageSrc: menu1,
    imageAlt: "Front of men's Basic Tee in black.",
    description: 'A webpage to show restaurant menu and information for customer.',
    color: 'Black',
    demo: 'https://savorybitess.netlify.app' ,
    code: 'https://github.com/tahirxx/Menu',
  },
  {
    id: 5,
    name: 'Coming soon.. Social Media App',
    href: '#',
    imageSrc: coming,
    imageAlt: "Front of men's Basic Tee in black.",
    description: 'A social media website showcasing skills, projects, and contact information in an interactive manner.',
    color: 'Black',
    demo: 'https://luxelaneshop.netlify.app' ,
    code: 'https://github.com/tahirxx/Ecommerce/tree/master',
  },
  {
    id: 6,
    name: 'Coming soon...AI ChatBot',
    href: '#',
    imageSrc: coming,
    imageAlt: "Front of men's Basic Tee in black.",
    description: 'A mobile application for ordering food online from local restaurants, with real-time tracking of orders.',
    color: 'Black',
    demo: 'https://luxelaneshop.netlify.app' ,
    code: 'https://github.com/tahirxx/Ecommerce/tree/master',
  },
  
]

export default function Projects() {
  return (
    <div className=" mx-auto max-w-screen-2xl">
      <div className=" mx-auto max-w-2xl  sm:px-3 py-8 lg:max-w-7xl lg:px-4">
        <h2 className="text-3xl font-serif pb-6 tracking-tight text-black text-center">Projects</h2>

        <div className=" grid grid-cols-1 gap-x-6 gap-y-6 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 ">
          {products.map((product) => (
            <div key={product.id} className={`bg-gray-200 p-1 rounded-lg cursor-pointer`}>
              <div className="p-1 aspect-h-1 aspect-w-1 cursor-pointer rounded-md bg-gray-200 lg:aspect-none  lg:h-64 hover:scale-105">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className=" object-cover object-center lg:h-full lg:w-full rounded-4xl bg-black "
                />
              </div>
              <div className="p-4">
                <h3 className="mt-1 text-xl font-bold text-black text-center">{product.name}</h3>
                <p className="mt-1 text-md font-medium text-gray-900">{product.description}</p>
              </div>
              <div className="my-4 text-lg flex w-full justify-center gap-10 ">
                <div className="bg-white rounded-lg text-center w-40 hover:bg-gray-400">
                  <a href={product.demo} target="_blank" className="">Live Demo</a>
                </div>
                <div className=" bg-white rounded-md text-center w-40  hover:bg-gray-400">
                  <a href={product.code} target="_blank">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
