import AnimatedButton from "@/components/AnimatedButton";

export default function ContactPage() {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center w-full p-4 md:py-40">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.260732877645!2d78.0035756116235!3d27.179540876391084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477b2761285f9%3A0x601236b6fb67fce0!2sAARNA%20FOOTCARE!5e0!3m2!1sen!2sin!4v1736840152973!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* <img src="/assets/aarna-map.png" alt="shoe1" className="w-3/5" /> */}
            <div className="flex flex-col items-start p-4">
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
                <div className="flex flex-row gap-4 justify-center items-start bg-white p-4">
                            <a
                                href="mailto:help@aarnafootcare.co"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {/* <span className="visually-hidden">Email</span> */}
                                <span className="icon" aria-hidden="true">
                                    <svg
                                        height="24"
                                        viewBox="0 0 120 120"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="m109.688 100.459c0 5.095-4.134 9.229-9.229 9.229h-79.9805c-5.0949 0-9.2285-4.134-9.2285-9.229v-50.6218c0-2.8262 1.3074-5.5178 3.5376-7.2674 4.7873-3.7491 8.7479-6.806 31.5692-23.3595 3.23-2.3456 9.6515-8.0172 14.112-7.9595 4.4604-.0769 10.8819 5.6139 14.1119 7.9595 22.8213 16.5535 26.7823 19.6104 31.5693 23.3595 2.23 1.7496 3.538 4.422 3.538 7.2674z"
                                            fill="black"
                                        />
                                    </svg>
                                </span>
                            </a>
                            <a
                                href="https://www.facebook.com/aarnafootcare"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {/* <span className="visually-hidden">Facebook</span> */}
                                <span className="icon" aria-hidden="true">
                                    <svg
                                        height="24"
                                        viewBox="0 0 120 120"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="m81.3942 66.8069 2.8527-18.2698h-17.8237v-11.8507c0-5.0051 2.4876-9.8755 10.4751-9.8755h8.1017v-15.5765s-7.3485-1.2344-14.4004-1.2344c-14.6743 0-24.2822 8.7533-24.2822 24.5991v13.938h-16.3174v18.2698h16.3174v44.1931h20.083v-44.1931z"
                                            fill="black"
                                        />
                                    </svg>
                                </span>
                            </a>
                            <a
                                href="https://www.instagram.com/aarnafootcare__/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {/* <span className="visually-hidden">Instagram</span> */}
                                <span className="icon" aria-hidden="true">
                                    <svg
                                        height="24"
                                        viewBox="0 0 120 120"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="m60 10c-13.606 0-15.2957.0667-20.6092.289-5.3357.2668-8.9595 1.0894-12.1387 2.3344-3.2903 1.2895-6.0916 3.0013-8.8484 5.7803-2.779 2.7568-4.5131 5.5581-5.7803 8.8484-1.245 3.1792-2.0676 6.803-2.3344 12.1387-.2445 5.3357-.289 7.0254-.289 20.6092s.0667 15.2957.289 20.6092c.2668 5.3357 1.0894 8.9595 2.3344 12.1387 1.2895 3.2903 3.0013 6.0916 5.7803 8.8481 2.7568 2.779 5.5581 4.513 8.8484 5.781 3.1792 1.222 6.8253 2.067 12.1387 2.334 5.3357.245 7.0254.289 20.6092.289s15.2957-.067 20.6092-.289c5.3357-.267 8.9595-1.112 12.1387-2.334 3.2903-1.29 6.0916-3.002 8.8481-5.781 2.779-2.7565 4.513-5.5578 5.781-8.8481 1.222-3.1792 2.067-6.8253 2.334-12.1387.245-5.3357.289-7.0254.289-20.6092s-.067-15.2957-.289-20.6092c-.267-5.3357-1.112-8.9817-2.334-12.1387-1.29-3.2903-3.002-6.0916-5.781-8.8484-2.7565-2.779-5.5578-4.5131-8.8481-5.7803-3.1792-1.245-6.8253-2.0676-12.1387-2.3344-5.3135-.2445-7.0032-.289-20.6092-.289zm0 9.004c13.3615 0 14.94.0667 20.2312.289 4.8688.2223 7.5145 1.0449 9.2708 1.7341 2.3566.9115 3.9795 1.9787 5.7581 3.735 1.7341 1.7341 2.8235 3.4015 3.735 5.7581.6892 1.7564 1.5119 4.402 1.7339 9.2708.223 5.269.289 6.8697.289 20.2312s-.066 14.94-.311 20.2312c-.267 4.8689-1.0672 7.5145-1.7564 9.2708-.9559 2.3566-2.0008 3.9796-3.7572 5.7581-1.7563 1.7342-3.446 2.8235-5.7581 3.735-1.7341.6892-4.4242 1.5117-9.3152 1.7337-5.3135.223-6.8698.289-20.2535.289s-14.94-.066-20.2534-.311c-4.8689-.267-7.559-1.0669-9.3153-1.7561-2.3788-.956-4.0018-2.0009-5.7581-3.7573-1.7563-1.7563-2.8902-3.4459-3.735-5.7581-.7114-1.7341-1.5118-4.4242-1.7563-9.3152-.1779-5.2468-.2668-6.8697-.2668-20.1868 0-13.317.0889-14.9399.2668-20.2534.2668-4.8911 1.0671-7.5589 1.7563-9.3153.8671-2.3788 1.9787-4.0017 3.735-5.7581 1.7341-1.7341 3.3793-2.8679 5.7581-3.7572 1.7563-.6892 4.3797-1.4896 9.2708-1.7341 5.3135-.2001 6.8697-.2668 20.2312-.2668zm0 15.3402c-14.2063 0-25.6781 11.494-25.6781 25.678 0 14.2063 11.494 25.6781 25.6781 25.6781 14.2063 0 25.6781-11.494 25.6781-25.6781 0-14.184-11.494-25.678-25.6781-25.678zm0 42.3521c-9.2263 0-16.6741-7.4477-16.6741-16.6741 0-9.2263 7.4478-16.674 16.6741-16.674s16.6741 7.4477 16.6741 16.674c0 9.2264-7.4478 16.6741-16.6741 16.6741zm32.7257-43.3748c0 3.3348-2.7124 6.0026-6.0027 6.0026-3.3348 0-6.0027-2.69-6.0027-6.0026s2.7123-6.0027 6.0027-6.0027c3.2903 0 6.0027 2.6901 6.0027 6.0027z"
                                            fill="black"
                                        />
                                    </svg>
                                </span>
                            </a>
                            <a
                                href="https://www.youtube.com/@summershoes"
                                target="_blank"
                            >
                                {/* <span className="visually-hidden">YouTube</span> */}
                                <span className="icon" aria-hidden="true">
                                    <svg
                                        fill="none"
                                        height="24"
                                        viewBox="0 0 120 120"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="m88.2484 25h-56.4747c-12.023 0-21.7516 9.751-21.7737 21.7523v26.4734c0 12.0233 9.7507 21.7743 21.7737 21.7743h56.4747c12.0226 0 21.7516-9.751 21.7516-21.7743v-26.4734c0-12.0233-9.729-21.7523-21.7516-21.7523zm-13.854 36.3126-22.5237 12.3543c-.9706.5294-1.8531-.1765-1.8531-1.3016v-25.3262c0-1.1251.9045-1.8311 1.8972-1.2796l22.6561 12.994c.9927.5736.8383 2.0297-.1765 2.5591z"
                                            fill="black"
                                        ></path>
                                    </svg>
                                </span>
                            </a>
                        </div>
                {/* <div>This is the ContactUs component</div> */}
            </div>
        </div>
    );
}