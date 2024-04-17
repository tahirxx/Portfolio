

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: '../../public/ecommerce2.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: '../../public/realestate.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: '../../public/web1.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: '../../public/realestate2.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 5,
    name: 'Basic Tee',
    href: '#',
    imageSrc: '../../public/realestate.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 6,
    name: 'Basic Tee',
    href: '#',
    imageSrc: '../../public/ecommerce3.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  
]

export default function Projects() {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold pb-10 tracking-tight text-black text-center">Projects</h2>

        <div className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product, index) => (
            <div key={product.id} className={`shadow-lg roundedlg group  relative ${index === 0 || index === 3 || index === 4 ? 'lg:col-span-2' : ''}`}>
              <div className="aspect-h-1 aspect-w-1  rounded-md bg-gray-200 lg:aspect-none  lg:h-96 group-hover:scale-110 group-hover:opacity-70">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-4xl bg-black "
                />
              </div>
              <div className="my-8 text-xl flex w-full justify-around">
                <div className="bg-gray-100 rounded-lg text-center">
                  <button className="">Live Demo</button>
                </div>
                <div className=" bg-gray-100 rounded-lg text-center">
                  <button>Code</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
