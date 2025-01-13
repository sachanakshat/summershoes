import AnimatedButton from "./AnimatedButton";

export default function ContactUsCard() {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center w-full">
            <img src="/assets/aarna-map.png" alt="shoe1" className="w-3/5" />
            <div className="flex flex-col items-start px-4">
                <AnimatedButton
                    text={"Address"}
                    additionalProps="cursor-pointer text-lg font-bold"
                />
                <div>17G, Nath Complex, Mahatma Gandhi Rd, Dhakran Crossing, Panchkuian, Rakabganj, Agra, Uttar Pradesh 282010</div>
                <AnimatedButton
                    text={"Phone Number"}
                    additionalProps="cursor-pointer text-lg font-bold"
                />
                <div>+91 9997002120</div>
                <AnimatedButton
                    text={"Email"}
                    additionalProps="cursor-pointer text-lg font-bold"
                />
                <div>contact@aarnafootcare.com</div>
                <AnimatedButton
                    text={"Socials"}
                    additionalProps="cursor-pointer text-lg font-bold"
                />
                <div>This is the ContactUs component</div>
            </div>
        </div>
    );
}
