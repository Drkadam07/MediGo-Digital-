import React from "react";
import PropTypes from "prop-types";

const serviceList = [
	{
		icon: "/AssetsServices/Smedigo5.png",
		title: "Search Engine Optimization {SEO}",
		description:
			"Enhance your online visibility and attract more patients with our expert SEO strategies, optimizing your website for higher search engine rankings. 🚀",
	},
	{
		icon: "/AssetsServices/Smedigo4.png",
		title: "Social Media Marketing {SMM}",
		description:
			"Engage, educate, and grow your healthcare brand with targeted social media strategies that connect you with the right audience. 📢",
	},
	{
		icon: "/AssetsServices/Smedigo3_3.png",
		title: "Pay Per Click {PPC}",
		description:
			"Optimize your budget by targeting the right patients and generating high-quality leads with data-driven PPC campaigns. 🚀",
	},
	{
		icon: "/AssetsServices/Smedigo2.png",
		title: "Google My Business {GMB}",
		description:
			"Boost your local presence, attract more patients, and enhance your credibility with optimized GMB listings.📍",
	},
	{
		icon: "/AssetsServices/Smedigo1.png",
		title: "Website Design & Development",
		description:
			"Create customized, conversion-friendly websites that improve rankings and drive fast conversions.",
	},
];

const ServiceItem = ({ service }) => (
	<div className="bg-white shadow-xl rounded-xl h-full flex flex-col">
		<div className="p-3 md:p-6 flex-grow">
			<div className="w-[75px] h-[75px] rounded-full text-[26px] shadow-xl flex justify-center items-center mb-6">
				<img src={service.icon} alt="Service Icon" />
			</div>
			<h4 className="text-2xl mb-6 font-bold">{service.title}</h4>
			<p className="opacity-70 leading-[1.8]">{service.description}</p>
		</div>
		<div className="p-2 md:p-4 pt-0 text-right">
			<button className="bg-gradient-to-r text-gray-800 font-semibold rounded-full shadow-xl shadow-purple-400/40 from-white via-[#add8e6] to-[#f8d7da] hover:bg-gradient-to-r hover:from-[#add8e6] hover:to-white py-2 px-6 transition-all">
				Know More
			</button>
		</div>
	</div>
);

ServiceItem.propTypes = {
	service: PropTypes.object.isRequired,
};

export default function Services() {
	return (
		<section className="ezy__service22 light py-14 md:py-24 bg-white relative z-[1]">
			<div className="absolute bottom-0 left-0 right-0 h-1/2 w-full bg-gradient-to-r from-teal-400 to-purple-600/40 bg-opacity-5 -z-[1]" />
			<div className="container px-4 mx-auto">
				<div className="flex flex-col md:flex-row gap-6 justify-between px-6">
					<div className="max-w-xl">
						<h2 className="uppercase text-xl font-semibold md:text-2xl lg:text-3xl  leading-tight  mb-6">
							Our Healthcare Digital Marketing Services
						</h2>
						<p className="text-lg opacity-80">
							At Medigo Digital, we provide a comprehensive range of services designed specifically for healthcare professionals.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-12">
					{serviceList.map((service, i) => (
						<div key={i}>
							<ServiceItem service={service} />
						</div>
					))}

					<div className="hidden sm:block">
						<img
							src="/AssetsServices/card6.png"
							alt="Healthcare Digital Marketing"
							className="w-full rounded-xl object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
