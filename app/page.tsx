import AboutCardLanding from "@/components/AboutCardLanding";
import Shoe1 from "@/components/dashscroller/Shoe1";
import OurPartners from "@/components/OurPartners";
import ProductsCardLanding from "@/components/ProductsCardLanding";

export default function Home() {
    return (
        <div className="flex flex-col flex-grow justify-center items-center">
            {/* Responsive Video Section */}
            <div className="w-full overflow-hidden">
                <video 
                    className="w-full h-auto object-cover" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                >
                    <source src="https://www.tmrw.in/wp-content/uploads/2024/09/hp_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <AboutCardLanding />
            <ProductsCardLanding />
            
            
            {/* Scrollable Section */}
            <div className="w-screen snap-x snap-mandatory overflow-x-scroll">
                <Shoe1 />
                <Shoe1 />
                <OurPartners />
                
            </div>
        </div>
    );
}
