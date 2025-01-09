interface HeadSubTextProps {
    title: string;
    subtitle: string;
}

export default function HeadSubText({title, subtitle}: HeadSubTextProps){
    return (
        <div>
        <div className="flex flex-col justify-centre items-start w-full">
            {/* className="w-full sm:w-1/2 lg:w-1/3" */}
            <p>New Launch</p>
            <h3 className="text-gray-800 font-bold text-2xl sm:text-3xl lg:text-4xl">
                {title}
            </h3>
            <p className="text-gray-800 font-bold text-xl sm:text-2xl lg:text-3xl">
                {subtitle}
            </p>
        </div>
        </div>
    );
};