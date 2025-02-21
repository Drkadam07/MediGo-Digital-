import React from "react";

export default function About() {
    return (
        <section className="ezy__about13 dark py-10 md:py-20 lg:py-28 bg-white text-zinc-900 relative">
            <div className="container px-4">
                <div className="grid grid-cols-12 gap-5 justify-center items-center">
                    <div className="col-span-12 lg:col-span-6">
                        <h4 className="uppercase text-2xl font-semibold md:text-3xl lg:text-5xl leading-tight font-medium mb-2 
                                    bg-gradient-to-r from-teal-400 to-purple-600 text-transparent bg-clip-text 
                                    hover:text-gray-800 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] transition duration-300 ease-in-out">
                            MediGo Digital
                        </h4>


                        <div className="lg:px-7">
                            <h4 className="uppercase text-xl font-extrabold md:text-2xl lg:text-3xl leading-tight font-medium mb-2">
                                ABOUT US
                            </h4>
                            <hr className="w-24 h-1 dark:bg-white opacity-100 my-6" />
                            <p className="text-lg leading-normal opacity-75 my-2">
                                At Medigo Digital, we specialize in helping doctors, dentists, clinics, and hospitals grow their practice in today’s competitive digital landscape. As a dedicated healthcare marketing agency in India, we focus on building a strong online presence for medical professionals, ensuring they attract the right patients effortlessly.
                            </p>
                            <p className="text-lg leading-normal opacity-75">
                                Our expert team provides end-to-end marketing solutions, including SEO, social media marketing (SMM), pay-per-click (PPC) advertising, Google My Business (GMB) optimization, and website design & development. We understand that your priority is patient care, which is why we take care of the digital side—enhancing your visibility, credibility, and patient engagement.
                                Partner with Medigo Digital and take your healthcare practice to the next level with smart, result-driven digital strategies.

                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <div className="w-[36vw] absolute top-0 right-0 bottom-0 float-left  bg-teal-300 bg-opacity-30" />
                        <div className="relative flex justify-center lg:flex-col lg:pl-20">
                            <img
                                src="https://cdn.easyfrontend.com/pictures/about/about13_1.jpg"
                                alt="About us image 1"
                                className="rotate-45 w-60 h-60 lg:w-96 lg:h-96 object-cover mt-16"
                            />
                            <img
                                src="https://cdn.easyfrontend.com/pictures/about/about13_2.jpg"
                                alt="About us image 2"
                                className="hidden md:block rotate-45 w-60 h-60 lg:w-96 lg:h-96 object-cover mt-16 lg:-mt-16"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
