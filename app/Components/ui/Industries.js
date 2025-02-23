
// import { Stethoscope, Building2, PillIcon, Microscope, Building } from "lucide-react"

// const Industries = () => {
//   return (
//     <section id="industries" className="py-20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Industries We Serve</h2> */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
//           <IndustryCard icon={<Stethoscope className="h-12 w-12 text-blue-50" />} title="Doctors & Clinics" />
//           <IndustryCard icon={<Building2 className="h-12 w-12 text-blue-50" />} title="Hospitals" />
//           <IndustryCard icon={<PillIcon className="h-12 w-12 text-blue-50" />} title="Pharmacies & Medical Stores" />
//           <IndustryCard icon={<Building className="h-12 w-12 text-blue-50" />} title="Pharmaceutical Companies" />
//           <IndustryCard icon={<Microscope className="h-12 w-12 text-blue-50" />} title="Diagnostic Labs" />
//         </div>
//       </div>
//     </section>
//   )
// }

// const IndustryCard = ({ icon, title }) => (
//   <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 hover:text-white transition-colors duration-200">
//     <div className="flex justify-center mb-4">{icon}</div>
//     <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
//   </div>
// )

// export default Industries

// import React from "react";
// import { motion } from "framer-motion";

// const images = [
//   { src: "/images/gastro.jpg", title: "Gastroenterologists" },
//   { src: "/images/doctors.jpg", title: "Doctors" },
//   { src: "/images/clinic.jpg", title: "Clinics" },
//   { src: "/images/hospital.jpg", title: "Hospitals" },
//   { src: "/images/plastic.jpg", title: "Plastic Surgeons" },
//   { src: "/images/surgeon.jpg", title: "Surgeons" },
//   { src: "/images/bariatric.jpg", title: "Bariatricians" },
//   { src: "/images/cardio.jpg", title: "Cardiologists" },
// ];

// const Industries = () => {
//   // Duplicate images for smooth infinite scroll
//   const imagesDouble = [...images, ...images];

//   return (
//     <div className="w-full overflow-hidden bg-blue-900 py-6">
//       {/* First Row */}
//       <motion.div
//         className="flex gap-6 mb-4"
//         animate={{ x: ["0%", "-100%"] }}
//         transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
//       >
//         {imagesDouble.map((item, index) => (
//           <div
//             key={index}
//             className="min-w-[250px] h-[180px] bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
//           >
//             <img src={item.src} alt={item.title} className="w-full h-[80%] object-cover" />
//             <div className="text-center text-blue-900 font-semibold p-2">{item.title}</div>
//           </div>
//         ))}
//       </motion.div>

//       {/* Second Row (Reverse Direction) */}
//       <motion.div
//         className="flex gap-6"
//         animate={{ x: ["-100%", "0%"] }}
//         transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
//       >
//         {imagesDouble.map((item, index) => (
//           <div
//             key={index}
//             className="min-w-[250px] h-[180px] bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
//           >
//             <img src={item.src} alt={item.title} className="w-full h-[80%] object-cover" />
//             <div className="text-center text-blue-900 font-semibold p-2">{item.title}</div>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default Industries;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  { src: "/AboutDoctor2.webp", title: "Gastroenterologists", link: "/gastroenterologists" },
  { src: "/AboutDoctor2.webp", title: "Doctors", link: "/doctors" },
  { src: "/AboutDoctor2.webp", title: "Clinics", link: "/clinics" },
  { src: "/AboutDoctor2.webp", title: "Hospitals", link: "/hospitals" },
  { src: "/AboutDoctor2.webp", title: "Plastic Surgeons", link: "/plastic-surgeons" },
  { src: "/AboutDoctor2.webp", title: "Surgeons", link: "/surgeons" },
  { src: "/AboutDoctor2.webp", title: "Bariatricians", link: "/bariatricians" },
  { src: "/AboutDoctor2.webp", title: "Cardiologists", link: "/cardiologists" },
  { src: "/AboutDoctor2.webp", title: "Gastroenterologists", link: "/gastroenterologists" },
  { src: "/AboutDoctor2.webp", title: "Doctors", link: "/doctors" },
  { src: "/AboutDoctor2.webp", title: "Clinics", link: "/clinics" },
  { src: "/AboutDoctor2.webp", title: "Hospitals", link: "/hospitals" },
  { src: "/AboutDoctor2.webp", title: "Plastic Surgeons", link: "/plastic-surgeons" },
  { src: "/AboutDoctor2.webp", title: "Surgeons", link: "/surgeons" },
  { src: "/AboutDoctor2.webp", title: "Bariatricians", link: "/bariatricians" },
  { src: "/AboutDoctor2.webp", title: "Cardiologists", link: "/cardiologists" },
];

const groupedImages = [];
for (let i = 0; i < images.length; i += 2) {
  groupedImages.push(images.slice(i, i + 2));
}

const Industries = () => {
  return (
    <div className="w-full py-10 relative">
      <div className="max-w-6xl  mx-auto relative">
        <Swiper 
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          breakpoints={{
            640: { slidesPerView: 2, slidesPerGroup: 2 },
            768: { slidesPerView: 3, slidesPerGroup: 3 },
            1024: { slidesPerView: 4, slidesPerGroup: 4 },
          }}
        >
          {groupedImages.map((group, index) => (
            <SwiperSlide className="mt-4" key={index}>
              <div className="grid grid-rows-2 gap-4">
                {group.map((item, i) => (
                  <a 
                    key={i} 
                    href={item.link} 
                    className="bg-white rounded-lg shadow-lg overflow-hidden block"
                  >
                    <img src={item.src} alt={item.title}  className="w-full h-48 object-cover pointer-events-none select-none" draggable="false" />
                    <div className="p-4 text-center text-gray-900 font-semibold">{item.title}</div>
                  </a>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-4 flex justify-center"></div>
      </div>
    </div>
  );
};

export default Industries;
