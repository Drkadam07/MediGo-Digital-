import React from "react";

export default function About(){
	return (
		<section className="ezy__about13 dark py-20 md:py-28 bg-white  text-zinc-900  relative">
			<div className="container px-4">
				<div className="grid grid-cols-12 gap-5 justify-center items-center">
					<div className="col-span-12 lg:col-span-6">
						<div className="lg:px-7">
							<h1 className="uppercase text-4xl md:text-6xl leading-tight font-medium mb-2">
								ABOUT US
							</h1>
							<hr className="w-24 h-1 dark:bg-white opacity-100 my-6" />
							<p className="text-lg leading-normal opacity-75 my-2">
								Completely network collaborative web services via user-centric
								initiatives. Quickly promote sticky testing procedures before
								unique process improvements. Distinctively engineer innovative
								information whereas revolutionary process improvements. Lorem
								ipsum dolor sit amet, consectetur adipisicing elit. Quia enim
								omnis saepe dolor voluptatum. Natus soluta maxime ipsum nam
								sapiente dignissimos voluptatum totam. Ratione atque dolorum
								nostrum a est voluptatibus.
							</p>
							<p className="text-lg leading-normal opacity-75">
								Distinctively engineer innovative information whereas
								revolutionary process improvements. Lorem ipsum dolor sit amet,
								consectetur adipisicing elit. Quia enim omnis saepe dolor
								voluptatum. Natus soluta maxime ipsum nam sapiente dignissimos
								voluptatum totam.
							</p>
						</div>
					</div>
					<div className="col-span-12 lg:col-span-6">
						<div className="w-[36vw] absolute top-0 right-0 bottom-0 float-left bg-blue-600 bg-opacity-30" />
						<div className="relative flex justify-center lg:flex-col lg:pl-20">
							<img
								src="https://cdn.easyfrontend.com/pictures/about/about13_1.jpg"
								alt=""
								className="rotate-45 w-60 h-60 lg:w-96 lg:h-96 object-cover mt-16"
							/>
							<img
								src="https://cdn.easyfrontend.com/pictures/about/about13_2.jpg"
								alt=""
								className="hidden md:block rotate-45 w-60 h-60 lg:w-96 lg:h-96 object-cover mt-16 lg:-mt-16"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

