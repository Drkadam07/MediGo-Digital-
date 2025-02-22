import React from "react";
import PropTypes from "prop-types";

const blogs = [
	{
		title: "Beautiful Woman Smiling With Hands In Hair",
		description:
			"It’s no secret that the digital industry is booming. From exciting startups to global brands. Urna molestie at eleme ntum eu facilisis sed odio Male suada fames ",
		author: "Ben Stokes",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg",
		date: "26",
		month: "Oct",
		year: "2016",
	},
	{
		title: "Not Your Regular Home Decoration?",
		description:
			"Urna molestie at eleme ntum eu facilisis sed odio Male suada fames .",
		author: "Moein Ali",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_13_1.jpg",
		date: "11",
		month: "May",
		year: "2020",
	},
	{
		title: "Fashion Essentials All Men Should Know",
		description:
			"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores.",
		author: "Maxy Paulo",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_9.jpg",
		date: "19",
		month: "Mar",
		year: "2021",
	},
];
const BlogItem = ({ blog }) => {
	const { title, description, author, date, month, year, image } = blog;

	return (
		<article className="min-h-[450px] rounded-lg shadow-lg bg-white shadow-gray-500 overflow-hidden pb-2 flex flex-col">
			<div className="relative">
				<img src={image} alt={title} className="h-auto w-full shadow-lg dark:shadow-none" />
				<div className="absolute bottom-2 left-2 text-lg leading-6 px-6 py-3 font-black bg-white opacity-80 rounded-lg">
					{date}
					<br />
					{month}
					<br />
					{year}
				</div>
			</div>
			<div className="p-4 pb-8 md:p-6 flex-grow flex flex-col">
				<p className="font-light text-sm leading-6">
					By{" "}
					<a href="#!" className="text-blue-600">
						{author}
					</a>
				</p>
				<h4 className="font-medium text-2xl">{title}</h4>
				{/* Description Box with Fixed Height */}
				<div className="relative h-[60px] md:h-[72px] lg:h-[90px] overflow-hidden">
					<p className="opacity-60 text-ellipsis overflow-hidden">
						{description}
					</p>
					{/* Gradient Fade for Long Text */}
					<div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white to-transparent"></div>
				</div>
				<div className="mt-auto pt-2">
					<a
						href="#!"
						className=" py-2 px-5 bg-gradient-to-r text-gray-800 font-semibold rounded-full shadow-xl shadow-purple-400/40 from-white via-[#add8e6] to-[#f8d7da] hover:bg-gradient-to-r hover:from-[#add8e6] hover:to-white  transition"
					>
						Read More
					</a>
				</div>
			</div>
		</article>
	);
};

BlogItem.propTypes = {
	blog: PropTypes.object.isRequired,
};

export default function Blog (){
	return (
		<section className="ezy__blog7 light text-stone-800 bg-white ">
			<img
				src="https://cdn.easyfrontend.com/pictures/blog/wide-banner.png"
				alt=""
				className="h-auto max-w-full w-full"
			/>

			<div className="py-14 md:py-24">
				<div className="container px-8 md:px-24">
					<div className="grid grid-cols-12 justify-center">
						<div className="col-span-12 lg:col-span-8">
                        <h4 className="uppercase text-2xl font-semibold md:text-3xl lg:text-5xl leading-tight mb-2 
                                    bg-gradient-to-r from-teal-400 to-purple-600 text-transparent bg-clip-text 
                                    hover:text-gray-800 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] transition duration-300 ease-in-out">
                            MediGo Digital
                        </h4>
							<p className="text-lg font-medium opacity-80 mb-9">
								Stay updated with the latest trends in healthcare and technology. 
								Discover insightful articles, expert opinions, and industry updates.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-6 mt-12 gap-6">
						{blogs.map((blog, i) => (
							<div
								className="col-span-6 md:col-span-3 lg:col-span-2 mb-3"
								key={i}
							>
								<BlogItem blog={blog} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

