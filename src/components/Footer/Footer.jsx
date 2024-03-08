import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import FooterBg from "../../assets/coffee_footer.jpg"

const FooterLinks=[
    {
        title:"Home",
        link:"/#"
    },
    {
        title:"About",
        link:"/#about"
    },
    {
        title:"Contact",
        link:"/#contact"
    },
    {
        title:"Blog",
        link:"/#blog"
    },
]
const bgImage={
    background:`url(${FooterBg})`,
    backgroundSize:"cover",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    height:"100%",
    weight:"100%",
};

const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
        <div className="bg-black/40 min-h-[400px]">
            <div className="container grid md:grid-cols-3 pb-20 pt-5">
                <div className="py-8 px-4">
                    <a href="" className="font-semibold tracking-wides text-wxl sm:text-3xl font-cursive">Coffee Cafe</a>
                    <p className="pt-4">
                        {''}
                        Crafted Coffee, Cozy Vibes, Unforgettable Moments - Your perfect Espresso Escape
                    </p>
                </div>

                <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                    <div className="py-8 px-4">
                        <h1 className="text-xl font-semibold sm:text-left mb-3">Footer Links</h1>
                        <ul className="space-y-3">
                            {
                                FooterLinks.map((data, index)=>(
                                    <li key={index}>
                                        <a href={data.link}
                                        className="inline-block hover:scale-105 duration-200">{data.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="py-8 px-4">
                        <h1 className="text-xl font-semibold sm:text-left mb-3">Quick Links</h1>
                        <ul className="space-y-3">
                            {
                                FooterLinks.map((data, index)=>(
                                    <li key={index}>
                                        <a href={data.link}
                                        className="inline-block hover:scale-105 duration-200">{data.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="py-8 px-4 col-span-2 sm:col-auto">
                        <h1 className="text-xl font-semibold sm:text-left mb-3">Address</h1>
                        <div>
                            <p className='mb-3'>Cầu Giấy, Hà Nội, Việt Nam</p>
                            <p>+84 0374567890</p>
                            <div className=" space-x-3 mt-6">
                                <a href="#">
                                    
                                    <FaFacebook className='inline-block hover:scale-105 duration-200'></FaFacebook>
                                    <FaInstagram className='inline-block hover:scale-105 duration-200'></FaInstagram>
                                    <FaLinkedin className='inline-block hover:scale-105 duration-200'></FaLinkedin>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer