import CoffeeAnimation from "../../assets/caffee_animation.png"
const Home = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
        <div className='container pb-8 sm:pb-0'> 
            <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="order-2 sm:order-1 flex flex-col justify-center gap-6">
                    <h1 data-aos='fade-up' data-aos-once='true'className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                        We serve the richest <span data-aos='zoom-out' data-aos-delay='300' className="text-primary font-cursive">Coffee</span> in the city
                    </h1>
                    <div data-aos='fade-down' data-aos-delay='900' className=''>
                        <button 
                        className="bg-gradient-to-r from-primary
                         to-secondary border-2 border-primary rounded-full 
                         px-4 py-2 text-white hover:scale-105 duration-200">
                            Coffee And Code</button>
                    </div>

                </div>

                {/* Image section */}

                <div data-aos='zoom-in'
                    className="min-h[450px flex justify-center items-center order-1 sm:order-2" >
                    <img src={CoffeeAnimation} alt="" className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin"/>
                    <div data-aos="fade-right" className="text-primary font-cursive text-1xl sm:text-xl lg:text-1xl font-bold">
                        Come to Coffee And Code, where you can enjoy rich, creamy, 
                        and creative cups of coffee. We are always ready to serve you with passion and enthusiasm. 
                        Coffee And Code - where coffee and code blend together.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home