import Image from "next/image";
import AnimatedButton from "./AnimatedButton";

export default function ProductsCard() {
    const menswear = [
        "Running Shoes",
        "Sneakers",
        "Boots",
        "Loafers",
        "Oxfords",
        "Sandals",
        "Chelsea Boots",
        "Derby Shoes",
    ];
    const womenswear = [
        "Ballet Flats",
        "Moccasins",
        "Flip Flops",
        "Pumps",
        "Slingbacks",
    ];
    const kidswear = ["Running Shoes", "Sneakers", "Boots", "Sandals"];
    const accessories = [
        "Hats",
        "Sunglasses",
        "Watches",
        "Jewelry",
        "Belts",
        "Socks",
        "Ties",
        "Scarves",
    ];

    return (
        <div className="flex flex-col justify-center sm:flex-row items-center w-full p-8">
            <div className="flex items-center">
                <div className="relative top-0">
                    <AnimatedButton
                        text={"Men's Footwear"}
                        additionalProps="cursor-pointer font-bold py-2"
                    />
                    {/* <h4 className="text-font--primary text-size--regular font-bold py-2">
                    Men's Footwear
                </h4> */}
                    {menswear.map((shoes, index) => (
                        <p
                            key={index}
                            className="text-font--primary text-size--regular"
                        >
                            {shoes}
                        </p>
                    ))}
                    {/* <p className="text-font--primary text-size--regular py-2">
                        Running Shoes
                    </p> */}
                </div>
                <div className="px-5 relative top-0 sm:top-0 sm:left-0">
                    <AnimatedButton
                        text={"Women's Footwear"}
                        additionalProps="cursor-pointer font-bold py-2"
                    />

                    {womenswear.map((shoes, index) => (
                        <p
                            key={index}
                            className="text-font--primary text-size--regular"
                        >
                            {shoes}
                        </p>
                    ))}

                    <AnimatedButton
                        text={"Kid's Footwear"}
                        additionalProps="cursor-pointer font-bold py-2"
                    />

                    {kidswear.map((shoes, index) => (
                        <p
                            key={index}
                            className="text-font--primary text-size--regular"
                        >
                            {shoes}
                        </p>
                    ))}
                </div>
                <div className="relative top-0">
                    <AnimatedButton
                        text={"Accessories"}
                        additionalProps="cursor-pointer font-bold py-2"
                    />
                    {/* <h4 className="text-font--primary text-size--regular font-bold py-2">
                    Men's Footwear
                </h4> */}
                    {accessories.map((shoes, index) => (
                        <p
                            key={index}
                            className="text-font--primary text-size--regular"
                        >
                            {shoes}
                        </p>
                    ))}
                    {/* <p className="text-font--primary text-size--regular py-2">
                        Running Shoes
                    </p> */}
                </div>
            </div>
            <div className="flex flex-col items-start px-4">
                {/* <img
                    src="/dashscroller/shoe1.jpg"
                    alt="shoe1"
                    className="w-3/5"
                /> */}
                <Image
                    src="/assets/air-jordan-5.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
                <h4 className="text-font--primary text-size--regular font-bold py-2">
                    New Launch: Air Jordan 5 Dark Concord
                </h4>
                <p className="text-font--primary text-size--regular py-2">
                    Series' best comfort and mobility
                </p>
            </div>
        </div>
    );
}
