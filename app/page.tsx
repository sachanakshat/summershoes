import Shoe1 from "@/components/dashscroller/Shoe1";
import NavBar from "@/components/NavBar";
import InfiniteScrollingLogosAnimation from "@/components/OurPartners";
import OurPartners from "@/components/OurPartners";

export default function Home() {
    return (
        // className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
        <div className="flex flex-col flex-grow justify-center items-center">
            <NavBar />
            {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        
      </main> */}
      {/* flex flex-row overflow-auto w-full */}
            <div className="w-screen snap-x snap-mandatory overflow-x-scroll">
                <Shoe1 />
                <Shoe1 />
                <OurPartners />
                {/* <InfiniteScrollingLogosAnimation/> */}
            </div>
        </div>
    );
}
