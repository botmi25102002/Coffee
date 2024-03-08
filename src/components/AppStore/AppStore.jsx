import AppStoreImg from  "../../assets/appStore_logo.png";
import PlayStoreImg from  "../../assets/ggPlay_logo.png"
import BgPng from  "../../assets/bg_appStore.png"


const backgroundStyle={
    background:`url(${BgPng})`,
    backgroundSize:"cover",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    height:"100%",
    weight:"100%",
}
const AppStore = () => {
  return (
    <>
        <div style={backgroundStyle}className='py-14'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                    <div className="space-y-6 max-w-xl mx-auto">
                         {/* text content */}
                        <h1 data-aos='fade-up' className="text-2xk text-center sm:text-left sm:text-4xl font-semibold pl-3 text-white/90">Coffee Cafe is available for Android and IOS</h1>
                        {/* logo section */}
                        <div data-aos='fade-up' data-aos-delay='200' className="flex flex-wrap justify-center sm:justify-start items-center">
                            <a href="">
                                <img src={AppStoreImg} alt=""
                                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"/>
                            </a>
                            <a href="">
                                <img src={PlayStoreImg} alt=""
                                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AppStore