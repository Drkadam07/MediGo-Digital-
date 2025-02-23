'use client'
import React, { useState } from "react";
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.currentTarget;

		if (form.checkValidity()) {
			setValidated(true);
			// Handle successful form submission (e.g., send data to backend)
			alert("Form submitted successfully!");
		} else {
			setValidated(false);
		}
	};

	return (
		<form
			className="md:pr-12"
			noValidate
			onSubmit={handleSubmit}
		>
			<div className="mb-4">
				<input
					type="text"
					className="min-h-[48px] leading-[48px] bg-[#3a384d1d] border border-transparent rounded-xl focus:outline-none focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Name"
					required
				/>
			</div>
			<div className="mb-4">
				<input
					type="email"
					className="min-h-[48px] leading-[48px] bg-[#3a384d1d] border border-transparent rounded-xl focus:outline-none focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Email"
					required
				/>
			</div>
			<div className="mb-4">
				<textarea
					name="message"
					className="min-h-[48px] leading-[48px] bg-[#3a384d1d] border border-transparent rounded-xl focus:outline-none focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Message"
					rows="4"
					required
				></textarea>
			</div>
			<div className="text-end">
				<button
					type="submit"
					className="bg-gradient-to-r text-gray-800 font-semibold rounded-full shadow-xl shadow-teal-600/30 from-white via-[#add8e6] to-[#f8d7da] hover:bg-gradient-to-r hover:from-[#add8e6] hover:to-white px-10 py-3 mb-4 flex items-center justify-center gap-2"
				>
					<FaPaperPlane /> Send
				</button>
			</div>
		</form>
	);
};

export default function Contact() {
	return (
<section className="ezy__contact1 light xl:ml-6 lg:ml-6 py-10 md:py-14 bg-white overflow-hidden" id="contactus">
  <div className="container px-4 relative">
    <div className="grid grid-cols-12 py-12">
      <div className="col-span-12 lg:col-span-6 mb-4 lg:mb-0">
        <div className="h-full flex items-center">
          <img
            src="/contactus.jpg"
            alt="Contact us"
			draggable="false"
            className="max-w-full h-auto relative z-[2] rounded-tr-[100px] rounded-br rounded-bl-[100px] mx-auto pointer-events-none select-none"
          />
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6 xl:col-span-5 px-6 relative">
        <div className="absolute top-0 left-0 lg:-left-[20%] right-0 bottom-0 bg-[#34484939] rounded-tl rounded-tr-[30px] rounded-br-[150px] rounded-bl-[50px] lg:rounded-br-[100px] lg:rounded-bl-[30px] xl:rounded-br-[120px] xl:rounded-bl-[40px]"></div>

        <div className="relative rounded my-12 py-6">
          <div className="mb-12">
            <h2 className="uppercase text-xl font-semibold md:text-2xl lg:text-3xl leading-tight mb-6">
              Contact Us
            </h2>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</section>

	);
};