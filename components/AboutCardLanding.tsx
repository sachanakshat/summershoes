import Link from "next/link";

export default function AboutCardLanding() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto p-6 md:p-12">
            {/* Left Side: Text Content */}
            <div className="md:w-1/2 text-start space-y-4">
                <h6 className="text-2xl md:text-3xl font-bold">ABOUT</h6>
                
                {/* Separator */}
                <div className="w-16 border-t-2 border-gray-400 my-2"></div>

                <p className="text-lg md:text-2xl font-semibold text-gray-800">
                    Aarna Footcare
                <br/>
                {/* text-lg md:text-xl text-gray-700 leading-relaxed */}
                    is India&apos;s leading fashion footwear production house
                </p>

                {/* Separator */}
                <div className="w-16 border-t-2 border-gray-400 my-2"></div>

                <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                    Founded by Mudit and Manish Aggarwal in 1999, what started with a single sewing machine 
                    in a small shed in Agra has expanded into fully mechanized factories producing 1.5 million 
                    pairs of shoes annually. Leiner pioneered the production of high-heeled shoes in India and 
                    now manufactures shoes, boots, sandals, slippers, wedges, and sneakers for women. 
                    The factories are located in Noida (New Delhi) and Agra (Uttar Pradesh). Our footwear is 
                    exported to premium brands and retailers across the globe.
                </p>

                {/* Separator */}
                <div className="w-16 border-t-2 border-gray-400 my-2"></div>

                {/* Learn More Link */}
                <Link 
                    href="/about"
                    className="text-blue-600 font-medium hover:text-blue-800 transition"
                >
                    Learn more →
                </Link>
            </div>

            {/* Right Side: Video */}
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                <video 
                    className="w-full h-auto object-cover rounded-lg shadow-lg" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                >
                    <source src="/assets/abt-landing.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}
