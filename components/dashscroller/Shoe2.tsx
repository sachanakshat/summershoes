import HeadSubText from "./HeadSubText";

const Shoe2: React.FC = () => {
    return (
        <div className="flex sm:flex-row justify-center items-center w-full">
            {/* className="w-full sm:w-1/2 lg:w-1/3" */}
            <img src="/dashscroller/shoe1.jpg" alt="shoe1" className="w-full sm:w-1/2 lg:w-1/3"/>
            <HeadSubText title="Summer Shoes2" subtitle="New Launch2"/>
        </div>
    );
};

export default Shoe2;