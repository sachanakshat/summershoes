import HeadSubText from "./HeadSubText";

const Shoe1: React.FC = () => {
    return (
        <div className="flex sm:flex-row justify-center items-center w-full">
            {/* className="w-full sm:w-1/2 lg:w-1/3" */}
            <img src="/dashscroller/shoe1.jpg" alt="shoe1" className="w-3/5"/>
            <HeadSubText title="Summer Shoes" subtitle="New Launch"/>
        </div>
    );
};

export default Shoe1;