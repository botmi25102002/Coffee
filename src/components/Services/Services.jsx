import Img2 from "../../assets/caffee_animation.png"
const ServicesData = [
    {
        id:1,
        img:Img2,
        name:"Espresso",
        description:"Espresso is a coffee-brewing method that originates from Italy. In this process, a small amount of nearly boiling water is forced under pressure through finely ground coffee beans ",
        aosDelay:"100",
    },

    {
        id:2,
        img:Img2,
        name:"Americano",
        description:"Americano is a type of coffee drink made by adding hot water to espresso coffee. It’s characterized by its diluted strength compared to a straight espresso shot. The name “Americano” is believed to have originated during World War II when American soldiers in Italy would dilute their espresso with hot water to mimic the coffee they were accustomed to back home ",
        aosDelay:"300",
    },

    {
        id:3,
        img:Img2,
        name:"Cappuccino",
        description:"Cappuccino is a coffee made by mixing strong espresso with hot milk, or a cup of this coffee. It’s characterized by its rich flavor and the delightful layer of foam on top. The name “cappuccino” is believed to have originated in Italy, and it has become a beloved coffee choice worldwide. ",
        aosDelay:"500",
    },

]

const Services = () => {
  return (
    <>
        <span id='services'></span>
        <div className="py-10">
            <div className="container">

                {/* Header title */}
                <div className="text-center mb-20 ">
                    <h1 className='text-4xl font-bold font-cursive text-gray-800'>
                        Best Coffee For You
                    </h1>
                </div>

                {/* Services Card Section */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                    {
                        ServicesData.map((data) =>{
                            return(
                                <div 
                                data-aos='fade-up' 
                                data-aos-delay={data.aosDelay}
                                key='index' 
                                className='rounded-2xl bg-white hover:bg-primary
                                        hover:text-white shadow-xl duration-200 max-w-[300px] 
                                        group relative'>
                                    
                                    {/* Img section */}
                                    <div className="h-[122px]"> 
                                        <img src={data.img} alt='' className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"/>
                                    </div>


                                    {/* Text content */}

                                    <div className="p-4 text-center">
                                        <h1 className="text-xl font-bold">
                                            {data.name}
                                        </h1>
                                        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-3">{data.description}</p>
                                    </div>
                                </div>

                            );
                        })
                    }
                </div>
                <div>
                </div>
            </div>
        </div>
    </>
  );
}


export default Services;