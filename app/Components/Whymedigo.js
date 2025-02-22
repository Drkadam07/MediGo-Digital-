// // import { Span } from "next/dist/trace";
// import React from "react";



// const timelineData = [
//   {
//     text: "Your website is your own digital asset, and you own it completely.",
//     icon: "/symbolmedigo.png",
//   },
//   {
//     text: "We send you leads via WhatsApp instantly using automation.",
//     icon: "/symbolmedigo.png",
//   },
//   {
//     text: "We are always ready for a quick meeting.",
//     icon: "/symbolmedigo.png",
//   },
//   {
//     text: "We integrate leads into your existing CRM.",
//     icon: "/symbolmedigo.png",
//   },
//   {
//     text: "We send you monthly reports to track performance.",
//     icon: "/symbolmedigo.png",
//   },
//   {
//     text: "To maintain your integrity, we don’t post anything without your permission.",
//     icon: "/symbolmedigo.png",
//   },
// ];

// const Whymedigo = () => {
//   return (
    // <div className="w-full bg-gray-100 py-12 px-4 sm:px-8 lg:px-16">
    //   <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
    //   Why is <span className="uppercase  font-semibold leading-tight mb-2 bg-gradient-to-r from-teal-400 to-purple-600 text-transparent bg-clip-text">MediGo Digital</span> the Right Healthcare <br></br> Digital Marketing Agency for You?
    //   </h2>
    //   <div className="relative max-w-4xl mx-auto">
    //     {/* <div className="border-l-4 border-green-500 absolute left-1/2 transform -translate-x-1/2 h-full hidden sm:block"></div> */}
    //     <div className="flex flex-col space-y-8">
    //       {timelineData.map((item, index) => (
    //         <div
    //           key={index}
    //           className={`flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8 ${
    //             index % 2 === 0 ? "sm:flex-row-reverse" : ""
    //           }`}
    //         >
    //           <div className="w-16 h-16 bg-white border-2 border-green-500 rounded-full flex items-center justify-center shadow-lg">
    //             <img src={item.icon} alt="icon" className="w-10 h-10" />
    //           </div>
    //           <div className="bg-white shadow-md rounded-lg p-6 max-w-md text-center sm:text-left">
    //             <p className="text-gray-700 font-medium">{item.text}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  // );
// };

// export default Whymedigo;


// import React from 'react';

// const Whymedigo = () => {
//   return (
//     <div>
//       <section >
//         <div className="bg-gradient-to-r to-purple-600/40 from-teal-600  bg-opacity-5 py-8">
//           <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
//             <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
//               {/* <p className="ml-2 text-yellow-300 uppercase tracking-loose"></p> */}
//               <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Why is <span className="uppercase  font-semibold leading-tight mb-2 bg-gradient-to-r from-teal-400 to-purple-600 text-transparent bg-clip-text">MediGo Digital</span> the Right Healthcare <br></br> Digital Marketing Agency for You?
//               </p>
//             </div>
//             <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
//               <div className="container mx-auto w-full h-full">
//                 <div className="relative wrap overflow-hidden p-10 h-full">
//                   <div
//                     className="border-2-2 border-yellow-555 absolute h-full border"
//                     style={{ right: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}
//                   ></div>
//                   <div
//                     className="border-2-2 border-yellow-555 absolute h-full border"
//                     style={{ left: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}
//                   ></div>
//                   <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
//                     <div className="order-1 w-5/12"></div>
//                     <div className="order-1 w-5/12 px-1 py-4 text-right">
//                       <p className="mb-3 text-base text-yellow-300">1-6 May, 2021</p>
//                       <h4 className="mb-3 font-bold text-lg md:text-2xl">Registration</h4>
//                       <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
//                         Pick your favourite event(s) and register in that event by filling the form corresponding to that
//                         event. Its that easy :)
//                       </p>
//                     </div>
//                   </div>
//                   <div className="mb-8 flex justify-between items-center w-full right-timeline">
//                     <div className="order-1 w-5/12"></div>
//                     <div className="order-1  w-5/12 px-1 py-4 text-left">
//                       <p className="mb-3 text-base text-yellow-300">6-9 May, 2021</p>
//                       <h4 className="mb-3 font-bold text-lg md:text-2xl">Participation</h4>
//                       <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
//                         Participate online. The links for your registered events will be sent to you via email and whatsapp
//                         groups. Use those links and show your talent.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
//                     <div className="order-1 w-5/12"></div>
//                     <div className="order-1 w-5/12 px-1 py-4 text-right">
//                       <p className="mb-3 text-base text-yellow-300">10 May, 2021</p>
//                       <h4 className="mb-3 font-bold text-lg md:text-2xl">Result Declaration</h4>
//                       <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
//                         The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the results will be
//                         announced on the whatsapp groups and will be mailed to you.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mb-8 flex justify-between items-center w-full right-timeline">
//                     <div className="order-1 w-5/12"></div>

//                     <div className="order-1  w-5/12 px-1 py-4">
//                       <p className="mb-3 text-base text-yellow-300">12 May, 2021</p>
//                       <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Prize Distribution</h4>
//                       <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
//                         The winners will be contacted by our team for their addresses and the winning goodies will be sent at
//                         their addresses.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <img
//                   className="mx-auto -mt-36 md:-mt-36"
//                   src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
//                   alt="timeline"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Whymedigo;

import CallToAction2 from "./ui/CallToAction2"
export default function Whymedigo() {
  const timelineData = [
    {
      id: "1",
      text: "Your website is your own digital asset, and you own it completely.",
      icon: "/symbolmedigo.png",
    },
    {
      id: "2",
      text: "We send you leads via WhatsApp instantly using automation.",
      icon: "/symbolmedigo.png",
    },
    {
      id: "3",
      text: "We are always ready for a quick meeting.",
      icon: "/symbolmedigo.png",
    },
    {
      id: "4",
      text: "We integrate leads into your existing CRM.",
      icon: "/symbolmedigo.png",
    },
    {
      id: "5",
      text: "We send you monthly reports to track performance.",
      icon: "/symbolmedigo.png",
    },
    {
      id: "6",
      text: "To maintain your integrity, we don’t post anything without your permission.",
      icon: "/symbolmedigo.png",
    },
  ]

  return (
    <div className="w-full bg-gradient-to-r from-gray-50 to-gray-50 py-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <h2 className="uppercase text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-800 leading-tight">
        Why is <span className="uppercase font-semibold bg-gradient-to-r from-teal-400 to-purple-600 text-transparent bg-clip-text">MediGo Digital</span> the Right Healthcare <br className="hidden sm:block" /> Digital Marketing Agency for You?
      </h2>
      
      <div className="relative mx-auto max-w-4xl w-full">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-r from-teal-400 to-purple-600 md:left-1/2 md:-ml-0.5" />

        <div className="space-y-6 md:space-y-12">
          {timelineData.map((item, index) => (
            <div key={item.id} className="relative w-full">
              {/* Dot */}
              <div className="absolute left-4 h-3 w-3 rounded-full bg-gradient-to-r from-teal-400 to-purple-600 ring-4 ring-zinc-600 md:left-1/2 md:-ml-1.5" />

              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"} relative w-full md:w-1/2`}>
                
                <div className="w-16 h-16 bg-white border-2 border-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <img src={item.icon} alt="icon" className="w-10 h-10" />
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-teal-50 shadow-md shadow-teal-200/40 rounded-lg p-4 sm:p-6 w-full max-w-xs sm:max-w-md text-center sm:text-left break-words">
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <CallToAction2/>
      </div>
    </div>
  )
}


